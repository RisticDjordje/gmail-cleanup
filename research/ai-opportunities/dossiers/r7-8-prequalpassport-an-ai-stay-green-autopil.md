# PrequalPassport: an AI "stay green" autopilot for subcontractor safety prequalification

**One-liner:** AI that fills and maintains a subcontractor's ISNetworld, Avetta and Veriforce/Highwire profile from the firm's own records: questionnaire answers, written safety programs, OSHA logs, EMR letters, insurance certificates (COIs) and expiry dates. The goal is to keep the firm's grade "green" with every hiring client. It applies the security-questionnaire playbook to safety prequalification.

**Source playbook → target industry:** Archon (YC W25) sells FedRAMP acceleration so software vendors can sell to government. Chromie (YC S26) sells gov-contract capture. Conveyor raised about $40M in total for AI security questionnaires. All three run the same mechanism: a buyer imposes a questionnaire, the seller reuses a library of answers and evidence, documents expire, and a passing grade gates revenue. FlowManual (S26, back office for GCs and MEP contractors) shows that AI software sells to specialty contractors. **Target:** US industrial and energy subcontractors with 5-200 employees: oilfield services, utility line crews, industrial maintenance and specialty trades.

## Score: 49/100. Verdict: promising, with a pivot

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 5 | Extraction, validation and agentic syncing are real engineering. LLM drafting is commoditized. |
| no_domain_required | 6 | The rules are public (29 CFR, ACORD 25, OSHA 300A), but a CSP/CHST reviewer is needed to limit liability. |
| bootstrap_to_raise | 7 | The pain is acute and has a deadline, contractors already pay, and onboarding fees bring month-1 cash. The raise story depends on expansion. |
| product_not_services | 5 | Buyers want it "handled". The pull is toward done-for-you work and consultant white-label. |
| market_size | 4 | About $110-430M/yr for contractor-side software (my estimate). Venture scale needs insurance or a system-of-record expansion. |
| ai_advantage_vs_competitors | 5 | Better than consultants and than PrequalPilot's single platform, but Avetta says it will give suppliers real-time submission feedback in 2026. |
| gtm_without_network | 6 | Programmatic SEO and consultant channels work, but blue-collar buyers are trust-driven and slow. |

The scores come from four reviews: the deep dive (53), the steelman (61) and two skeptics (45 and 46). Having competitors is not penalized. What lowers the score is that the platforms own the scarce data (client requirements and reviewer decisions) and have said they will ship the core gap-check feature. The idea sits just below RegistryPilot (55). The pivot that would raise it is to stop selling a "questionnaire filler" and become the **contractor's cross-client compliance system of record**, with consultants as the first power users.

## Thesis

Hiring owners require contractors to hold a paid prequalification subscription with a passing grade. On ISN that costs about $1.7-5K/yr plus setup, and the contractor needs a B or better (snippet). Contractors then pay again, in office-manager weeks or a consultant (about $5K per PrequalPilot's positioning), to write programs and keep documents current. The platforms point their AI at hiring clients (Avetta Safety AI, 2024; ISN AI contractor search, July 2025). That leaves the contractor side underserved by software. The result is a solid bootstrap business with a thin moat. It becomes venture-scale only if the evidence library becomes what every hiring party and insurer pulls from.

## Workflow today

1. A refinery, utility, pipeline operator or GC names a platform: ISN, Avetta, or Veriforce (which bought Highwire in late 2025).
2. The contractor buys a subscription, often on more than one platform.
3. The contractor completes the RAVS or other questionnaire and uploads OSHA 300/300A logs, the EMR letter, COIs, training records and written programs.
4. Platform reviewers grade the submission against both regulatory and client-specific requirements.
5. Deficiencies come back and get fixed. Expiring COIs, EMR letters and 300As turn the grade yellow or red and block mobilization.

The owner, office manager or a part-time safety coordinator does this work, or hands it to a consultant.

## TAM

Vendor-reported networks: ISN about 90K contractors, Veriforce+Highwire about 130K, Avetta 130K+. These counts are global and overlap. My estimate is 150-250K unique US firms on at least one platform, of which 60-120K are serviceable (5-200 employees or on several platforms). At $1.8-3.6K/yr that is a **$110-430M/yr** software TAM. Contractors already put about $0.5-1.5B/yr into prequal, but most of it goes to the platforms. The expansion story (COI management, OQ and training records, workers'-comp and GL insurance distribution) is unsourced but plausibly multi-billion.

## Competitors

| Competitor | What it does | Scale | Threat |
|---|---|---|---|
| PrequalPilot | AI RAVS answers plus expiry tracking; ISN only | Product Hunt listing, no funding found | Already owns the wedge phrase |
| ISNetworld | Dominant in oil, gas and chemicals; RAVS review; AI on the client side | About 900 clients, 90K contractors | Holds the reviewer corpus; ToS risk |
| Avetta | Avetta One, Safety AI (2024) | 130K+ businesses | **Says it will give suppliers real-time document feedback in 2026** |
| Veriforce (+Highwire) | Operator qualification and prequal; consolidating | 3,200+ clients, 130K contractors | Consolidation shrinks the multi-platform value |
| Safety consultants | Done-for-you account management | Fragmented | Incumbent "product" and a likely channel |
| FlowManual (YC S26) | AI back office for specialty contractors | 2 people | Could add GC prequal as a feature |

## How AI wins

- **Contractor-side incentive.** A platform that helps contractors write the submissions it grades weakens trust in its own grades. An independent tool can be openly on the contractor's side.
- **One evidence library, many uses.** One library maps to every platform and client variant, and also to GC forms, COI requests and insurance applications.
- **LLM drafts, code verifies.** Deterministic code recomputes TRIR/DART and checks dates and coverage limits, so numbers are not hallucinated.
- **Proactive monitoring.** The product predicts what turns the grade yellow next and chases insurance agents and training providers automatically.
- **Deficiency-fix loop.** The user pastes the reviewer's note and gets a revised document back.

**Honest limit:** the "will this pass" predictor needs accepted and rejected submissions, and ISN holds that corpus. A startup has to collect it one contractor at a time.

## Wedge → path to scale

- **Wedge:** a free Grade-Gap Scan. The contractor uploads its documents and gets a gap list, an expiry calendar and a "what turns you yellow next" ranking. Paid tiers are $149/$299/$499 per month plus a $500-1,500 "get to green in 14 days" fee. Start with Gulf Coast and Permian oilfield and industrial-maintenance firms, where platform overlap is densest.
- **Stage 2:** seats for consultants, so one consultant runs 50-200 accounts with the tool. Add GC and Highwire forms.
- **Stage 3:** the compliance system of record: the OSHA 300 log itself, OQ and training, COI management, sub-tier flow-down.
- **Stage 4 (hypothesis):** use the verified safety data for workers'-comp and GL insurance distribution, and a "pre-verified contractor" view for GCs.

## Steelman summary (61)

The playbook is proven (Conveyor, Archon). The pain has a dollar amount and a date. The rules are public, so the hard part is engineering. The platforms' incentives point away from contractors. It can be cash-positive from month one, and EMR data leads naturally into insurance. Test: 50 programmatic pages plus 10 onboarding fees at $500 or more within 30 days.

## Skeptic summary (45-46)

- **Avetta is building the core feature.** It plans real-time supplier feedback in 2026, which covers both the gap scan and the deficiency loop, free inside a tool contractors already pay for.
- **The Conveyor analogy is weak.** The platforms already are the "fill once, share many" library, and after consolidation N is about 3. Most small subs are on one platform.
- **ToS and access.** The ISN User Agreement makes the contractor liable for anyone using its account, and client requirements sit behind logins.
- **Liability.** AI-written programs that the firm does not follow, and inflated attestations, create OSHA, tort and MSA exposure. A CSP reviewer is required, which pushes the business toward services margins.
- **Churn and buyers.** Churn follows the contractor's client mix, and buyers want it "handled".

## What's good

- The pain is acute, deadline-driven and gates revenue. Buyers already pay $1.7-5K/yr just to be listed.
- Self-serve SEO works without a network. The platforms publish hiring-client lists, which give a public target map.
- Fast to build. Cheap to run (my estimate: under $1.50 per scan). Gross margin above 90% excluding review.
- A real engineering edge in extraction plus deterministic validation, against manual consultants.
- Consultants can become a distribution channel instead of only competitors.

## What's bad

- The platforms hold the requirement data and the reviewer corpus, and Avetta has said it will ship supplier feedback.
- After the Veriforce/Highwire deal the multi-platform pitch is narrower.
- Liability, plus the need for a credentialed reviewer, pull the business toward services.
- The core TAM is mid-size. Venture scale depends on unproven insurance distribution, which needs licensing.
- PrequalPilot already occupies the drafting wedge. Churn follows clients.

## Build plan

Next.js/TS, Postgres, Inngest or pg-boss, Claude tool use with JSON-schema outputs, Textract or LLM vision, Stripe, Resend. **Weekend 1:** extraction for 300A, EMR and ACORD 25 plus validators, with a 30-document accuracy set. **Weekend 2:** requirement graph v0 for 3 platforms and 5 Gulf Coast clients, and the free scan page. **Weekend 3:** program drafter (hazcom, LOTO, fall protection, H2S, confined space) and the deficiency responder. **Weekend 4:** expiry calendar, chasers, billing, and a contracted CSP review step. The product stays "we prepare, the human submits" until ToS are clear.

## Bootstrap-to-raise plan (months 0-12)

- **Month 0-1:** read ISN, Avetta and Veriforce ToS. Run 5 screen-share interviews (Facebook and LinkedIn oilfield groups, 2 consultants). Confirm Avetta's supplier-feedback status. Pre-sell 2 onboarding fees.
- **Months 1-3:** 50-200 programmatic pages and the free scan. 10 onboarding customers, 25 paying firms, about $5K MRR.
- **Months 3-6:** 2-3 consultant partners on wholesale seats. Add Avetta and Veriforce mapping. 75 firms, about $15K MRR. Track time-to-green and grade retention.
- **Months 6-12:** COI and training system of record, sub-tier flow-down. 150-250 firms, $30-60K MRR, net revenue retention of 100% or more. Raise a seed on contractor count, retention, the requirement graph and an insurance-agency LOI or partner.

## Weekend prototype

Upload an OSHA 300A, EMR letter, COI and existing safety manual. The LLM extracts the facts and code validates them. The prototype outputs (1) draft answers to a public RAVS-style questionnaire, (2) a gap list with an expiry calendar, and (3) one generated written program (hazard communication) for the stated trade, with citations and a "draft for your implementation" banner.

## Kill criteria

- Fewer than 10 of about 50 contacted subcontractors pay $500 or more for onboarding within 30-45 days.
- Avetta or ISN ships contractor-side submission feedback or drafting that interviewees say is "good enough".
- Platform ToS forbid third-party preparation in a way that blocks even "human submits" use, or the platforms ban accounts.
- Most target subs are on only one platform and their pain disappears once the initial setup is done (high month-3 churn).
- Extraction accuracy on dates and numbers stays below 95% on real documents, or CSP review costs more than 30% of revenue.

## Sources

- https://www.isnetworld.com/faq ; https://www.isnetworld.com/user-agreement ; https://www.isnetworld.com/hiring-clients
- https://www.businesswire.com/news/home/20250715414574/en/ISN-Enhances-Contractor-Search-Source-Feature-with-AI-Powered-Tools
- https://www.businesswire.com/news/home/20240723251603/en/Avetta-Unveils-Advanced-Safety-AI-and-ESG-Features-to-the-Avetta-One-Platform
- https://www.avetta.com/blog/the-future-of-contractor-risk-management-trends-for-2026-and-beyond
- https://www.ishn.com/articles/114993-veriforce-acquires-highwire-expanding-leadership-in-contractor-risk-management
- https://www.summitpartners.com/news/veriforce-acquires-highwire-expanding-leadership-in-contractor-risk-management
- https://www.producthunt.com/p/prequalpilot/isnetworld-compliance-for-subcontractors-without-the-5k-consultant
- https://www.safetyservicescompany.com/?p=23886
- https://pulse2.com/conveyor-12-5-million-funding/
- https://us.fitgap.com/products/isnetworld
- Local: /home/user/GmailCleanupExtension/research/ai-opportunities/data/yc-w25-f26.csv (Archon W25, Chromie S26, FlowManual S26)

*Note: network sizes, prices and the Avetta 2026 roadmap are snippet-level or vendor-reported. TAM and cost figures are my estimates.*
