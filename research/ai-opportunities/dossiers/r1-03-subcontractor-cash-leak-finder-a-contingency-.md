# Subcontractor Cash Leak Finder → "Subcontract Rights Guard" for MEP subs

**One-liner (as scouted):** A contingency-priced AI service that combs a specialty subcontractor's email, texts, logs, POs and contracts to find unbilled change orders, T&M, retainage and tariff escalation. You get paid only from what is recovered.
**Revised one-liner:** Sub-side "rights protection". The tool checks the sub's bid against the GC's subcontract before signing, then builds a per-job notice and waiver calendar, captures changes the same day, and checks waiver exceptions before each pay app. Sold as flat SaaS through surety agents. The contingency lookback becomes, at most, a one-job demo.

> **Research caveat:** In this run the shared 200-call WebSearch budget was used up and WebFetch was blocked before the deep dive, the red team and this verdict. I could not spot-check anything. Funding figures (Clearstory, Adaptive, Trimble/Document Crunch) and market statistics come from the scout's citations and are **unverified**.

## Verdict: PROMISING WITH PIVOT (weak) — 40/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | Realistic recurring contingency pool is about $0.1-0.75B. The SaaS pivot is about $100-250M ACV across roughly 3k MEP subs. |
| Pain intensity | 7 | Margins are 3-7% and slow pay is widespread. The pain is real, but the money it points to is often legally dead. |
| Whitespace | 4 | Adaptive, Siteline, Clearstory, Trimble/Document Crunch and Procore/Levelset each sit one feature away. |
| AI leverage | 6 | Strong at turning unstructured evidence into notices and clause comparisons. Weak at proving entitlement after the fact. |
| GTM feasibility | 3 | Long owner-led sales, data access that requires admin consent, PM resistance, and CPA channel limits. |
| Defensibility | 3 | A clause-by-GC dataset and sub-only positioning help. Integration is not a moat (unified APIs such as Agave exist). |
| Founder fit | 3 | Needs a construction-native co-founder (ex-PM or controller) plus human QA. |

## Thesis (revised)
The scout's contingency lookback does not survive scrutiny:
- On closed jobs, final unconditional waivers, closeout releases and 7-21 day notice-waiver clauses mostly extinguish the "found" money.
- On GC-run Textura, GCPay and Procore Invoicing jobs, approved change orders auto-flow into the sub's schedule of values, so "approved but unbilled" is rare. Where it does exist, it is a SQL join.
- What survives on active jobs is usually already in the PM's PCO log, which sets up a fee dispute.

The durable insight is about timing. Subs lose rights at three moments:
1. **When they sign**, because the integration clause wipes out the escalation and copper-validity qualifications in their bid.
2. **In the first days after a change**, when the notice window runs.
3. **Every month when they sign a progress lien waiver** without listing pending extras as exceptions.

A sub-side tool that guards those three moments costs no GC goodwill, needs only PDFs plus forward-looking mail access, and can be priced as SaaS with no working-capital lag. The best-fit buyer is the controller of a $20-100M MEP sub doing multifamily, tenant-improvement, healthcare or K-12 work. Surety agents are the channel, because unapproved change orders and underbillings directly cut bonding capacity.

## How the work is done today
- A GC superintendent directs extra work verbally or by text. The foreman does it the same day, and the T&M ticket is often unsigned.
- The PM prices the PCO or COR in Excel or the ERP (Foundation, Sage 300 CRE, Vista/Spectrum) days or weeks later and submits it through the GC's portal. Approval takes 30-120+ days.
- Only approved change orders get onto the monthly AIA G702/G703 pay app. Each cycle the sub also signs progress waivers, often on GC forms with "all claims through date" language.
- Unapproved change orders pile up on the WIP schedule, where sureties and CPAs discount them. They get settled at closeout in a global negotiation, anecdotally well below face value.
- Retainage of 5-10% is released at substantial or final completion, typically when the owner releases it to the GC.
- Large claims go to consultants (HKA, Ankura, Long International) at about $250-500/hr. Small ones are written off.

## TAM
- **Base.** Nonresidential plus multifamily plus public construction is about $1.2-1.3T. About $750-950B of that is subcontracted (estimate; the scout's $1T "specialty" figure includes residential service work where this does not apply).
- **Target firms.** About 10-15k NAICS 238 firms have $10-200M revenue. About 2.5-4k commercial electrical and mechanical subs have $20-150M (NECA has roughly 4k members).
- **Contingency pool.** Leakage of 1-2% at 40-60% collectible and a 15% fee gives the deep dive's $0.25-0.75B a year. After the haircut for released and notice-barred items it is about **$100-400M** (feasibility skeptic). The scout's $1.5-3B is overstated by 4-10x.
- **SaaS pivot.** 3k MEP subs × $25-60k ACV ≈ **$75-180M**. Expanding to all commercial trades plus financing against verified change orders is roughly 3-5x that. On its own this is a mid-size vertical SaaS, likely to end in an acquisition.

## Competitors
| Name | Type | Relevance | Scale (unverified) |
|---|---|---|---|
| Adaptive | AI-native | Agentic job cost, billing and WIP for subs; "missed billing" agent is a natural next feature | $30M Series B Sep 2026 (Tidemark), $57M total, 750+ contractors |
| Clearstory | AI-native | T&M and change-order network, GC-mandated (Turner); owns real-time capture | About $35M raised, $16M Series B 2024 |
| Trimble Viewpoint + Document Crunch | Incumbent + acquired AI | Contract AI and Notice Builder inside the MEP sub's ERP; closest to the pivot | About $250M acquisition, Apr 2026 |
| Siteline | Vertical SaaS | Sub pay apps, waivers, retainage; the waiver-exception check is adjacent | VC-backed |
| Procore (Levelset, Invoicing, Helix) | Incumbent | Sub notice and lien deadlines, GC payment data, auto-flowing commitment change orders | Public, about $1.2B revenue |
| Autodesk (Pype, Payapps) | Incumbent | AI closeout binder, which undercuts the "retainage via closeout" angle | Public |
| Foundation, Sage 300 CRE, CMiC, Acumatica | Incumbent ERP | "Approved CO not billed" is a report they already have | Entrenched |
| Rhumbix, Raken, eSUB, Fieldwire | Field SaaS | Digital T&M tickets with signature capture | Growth-stage or acquired |
| HKA, Ankura, claims counsel; NCS and other collection agencies | Services | Own disputed claims; licensed contingency collection | Fragmented or global |
| Copilot / ChatGPT / Claude connectors | Horizontal AI | DIY inbox sweeps cap what detection alone can charge | n/a |

## Why now
- LLM cost and long context make it cheap to process 24 months of email, PDFs and the ERP.
- GCs are adopting contract AI (Document Crunch, Helix), so notice and waiver defenses will be enforced automatically. Sub-side tooling becomes defensive.
- Section 232 tariffs (steel and aluminum 50% Jun 2025; copper semi-finished products 50% Aug 2025, cathode excluded) made escalation language a boardroom topic. That is a good **pre-signing** hook and a bad lookback hook.
- Validation: Trimble bought Document Crunch, and Adaptive raised a Series B in 2026.

## Wedge & business model
1. **Bid-vs-subcontract check.** Upload the proposal plus the GC's subcontract PDFs. The tool returns which protections die at signing and gives rider language (ConsensusDocs-style escalation, release exceptions, notice carve-outs). Pricing is $500-1,500 per subcontract or $1-3k/month unlimited. The sale takes days, needs no mailbox access, and creates no GC friction.
2. **Rights calendar and waiver-exception check.** Every notice, claim and release deadline for each job, plus a check before each pay app that pending extras are listed as exceptions on the waiver.
3. **Same-day change capture.** The foreman texts a photo or voice note. The AI drafts the T&M ticket and a contract-compliant notice for the PM to approve in one click, citing only documents the system holds.
4. **Later:** sell scored WIP verification to sureties and lenders, and finance verified, approved-but-unpaid change orders with a capital partner.

**Keep contingency only** for active jobs still inside notice windows, never for closed jobs.

## What's good
- Real, quantifiable pain at thin-margin subs, and a clear economic champion in the controller, who owns WIP and bonding.
- The bonding angle is non-obvious and gives a referral path through surety agents that no GC-centric platform sells into.
- The pivot's first product needs only two PDFs. That makes for a fast sales cycle, no working-capital trap and low hallucination exposure.
- A sub-only position creates channel conflict for Procore, Autodesk and Trimble, which sell to GCs.
- A clause-level corpus of GC subcontract forms and how GCs enforce them is a data asset that compounds.

## What's bad (strongest skeptic points)
- **Competition lens (kill):** Closed-job harvest is "legally dead": final waivers and releases plus notice-waiver clauses extinguish most found items. What remains on active jobs is a feature that Adaptive, Siteline, Clearstory or Trimble can each ship to an installed base. PRGX shows that harvest-once recovery is a low-multiple services business.
- **GTM lens (serious concerns):** Realistic one-time fee is about $20-40k per $50M sub against $25-50k CAC plus QA plus 1-4 weeks of ERP data work. Foreman texts live on personal iPhones, and GC portals are owned by the counterparty. AICPA independence rules largely close the paid CPA channel. Owners will not send 24-month-old claims or interest demands to GCs whose bid lists feed them.
- **Feasibility lens (kill):** A hallucinated or inflated change-order request on public work creates False Claims Act and CDA-certification exposure. Line-by-line human review destroys the "minutes not consultant-hours" claim. ABA Rules 5.4 and 7.2(b) block the attorney-referral fee model. Collection-agency licensing may reach contingency claim-prep even under sub letterhead. Retainage is gated by the owner and project completion, not the sub's binder.
- **Even the pivot** runs head-on into Document Crunch (now Trimble) contract review. Differentiation rests on the bid-vs-subcontract diff, the waiver-exception check and sub-only distribution. The most likely exit is acquisition by Siteline, Clearstory or an ERP vendor.

## Non-obvious insights
1. **The monthly lien waiver is where subs silently release rights.** A pre-pay-app exception check is a simple, high-value control that nobody markets.
2. **Escalation protection dies at signing,** through the integration clause, not at invoicing. The value is preventive.
3. **Unapproved change orders reduce bonding capacity,** so sureties, not subs, may be the buyer with budget for verified WIP.
4. **The copper tariff excluded refined cathode,** so most domestic building wire was spared. "Every electrical sub has a tariff claim" is false.
5. **GC-side contract AI raises the cost of sub paperwork lapses,** which pushes subs to buy sub-side tooling defensively.
6. **The best-fit customer is not the data-center electrical giant.** It is the squeezed $20-100M MEP sub in multifamily, tenant-improvement and institutional work.

## Cheapest validation test (2 weeks, <$1k)
- **Interviews.** Recruit 10 MEP sub controllers or owners and 3 surety agents through CFMA chapter LinkedIn groups, NECA/MCAA chapter managers and cold outreach. Interview each for 30 minutes.
- **Concierge test.** Ask 5 of the controllers to send one recent bid proposal plus the signed subcontract. Using Claude plus manual review, deliver a one-page report on which protections died at signing and which waiver exceptions they failed to list.
- **Measures:** (a) how many have a material "killed protection" or unlisted extra on a live job, (b) willingness to pay $1-3k/month (ask for a signed LOI), (c) whether surety agents would refer or co-pay.
- **Kill criteria:** fewer than 3/5 with material findings, or 0 LOIs.
- **Cost:** about $300 for LLM costs, LinkedIn InMail and gift cards.

## Unresolved questions
- What share of found items on active jobs survives waivers and notice windows in CA, TX, FL, NY and WA? This needs an attorney review.
- Do Adaptive, Siteline or Clearstory have a notice-clock or missed-billing agent shipped or on their roadmap? Does Document Crunch already do bid-vs-subcontract diffs for subs?
- Would top surety writers (Travelers, CNA, Liberty Mutual, Zurich) or producers pay for scored WIP? Does a surety-tech startup already do this? I could not check this run.
- Is the collection-agency licensing definition broad enough to catch contingency claim-prep in key states?
- Can a technical founder recruit a credible ex-MEP PM or controller co-founder?
- All funding and market figures need re-verification.

## Sources
(None re-opened this run; scout-cited plus knowledge-based.)
- https://www.consensusdocs.org/news/recovery-of-material-escalation-costs-arising-from-steel-and-aluminum-tariffs/
- https://www.constructionowners.com/news/construction-tariffs-surge-agc-urges-contract-updates
- https://abccarolinas.org/construction-material-tariff-costs-2026-how-carolinas-contractors-can-protect-their-margins/
- https://archdesk.com/blog/2026-guide-construction-retainage
- https://www.rhumbix.com/blog/change-orders-construction-definitive-guide
- https://www.ctribesociety.com/articles/industry-insights/construction-margin-compression-profit
- https://commercialobserver.com/2024/06/proptech-startup-clearstory-series-b/
- https://bricks-bytes.com/technology/clearstory-change-order-data-moat/
- https://bricks-bytes.com/ai/document-crunch-project-level-ai-risk-platform-launch/
- https://www.prnewswire.com/news-releases/adaptive-raises-30-million-series-b-led-by-tidemark-to-bring-agentic-accounting-to-construction-302881537.html
- https://leginfo.legislature.ca.gov (CA Civ. Code 8132-8138 waiver forms; 8800-8822 prompt payment and retention)
- https://www.census.gov/construction/c30/c30index.html ; https://www.census.gov/programs-surveys/susb.html
- https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/ (Rules 5.4, 7.2)
