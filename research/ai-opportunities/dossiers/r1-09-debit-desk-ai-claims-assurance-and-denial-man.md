# Debit Desk: AI claims assurance for SPA / ship-and-debit claims in industrial distribution

**One-liner:** AI that reads every special pricing agreement (SPA), debit claim (EDI 844) and manufacturer response (849/credit memo) in electrical and plumbing distribution, validates or rescues each claim line, and handles denials the way healthcare revenue-cycle tools do.

> **Research caveat:** the shared web-search budget for this run (200 calls) was used up, and the proxy blocked direct fetches. This verdict, the deep dive and all three red-team critiques rest on the scout's 2025-26 sources plus model knowledge up to mid-2026. Competitor funding figures marked "verify" are from memory. Two spot-check searches this session (for an AI-native SPA-claims startup, and for Ximple's AI features) did not run.

## Verdict: PROMISING WITH PIVOT, 44/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | Distributor-side recurring SAM is about $30-100M. Venture scale needs manufacturer-side or cross-vertical expansion. |
| Pain intensity | 6 | SPA dollars rival net income, so leakage is real. The size of the leakage is unverified (the stats come from vendors). |
| Whitespace | 6 | No AI-native SPA-claims player was found. Ximple, Enable and Epicor sit right next to it. |
| AI leverage | 6 | Extraction and matching are strong. Resolving disputes depends on relationships, not models. |
| GTM feasibility | 4 | Owner-led sales of 4-9 months, data gated by IT, a confidentiality problem, and a pool of about 300 logos that is shrinking. |
| Defensibility | 3 | The extraction layer is a commodity. The planned "behavior graph" moat carries antitrust and confidentiality risk. |
| Founder fit | 4 | No license needed, but an industry cofounder (former SPA, pricing or channel-finance lead) is effectively required. |

## Revised thesis
The scout's version, contingency recovery of "unclaimed rebates" for independent distributors, is the weakest framing. The ERP already auto-claims linked lines. Back-claims are capped by claim windows. The large pool (sales never linked to an SPA) is exactly what manufacturers audit as diversion. And a 25% contingency fee pays the vendor to push borderline claims against the distributor's most important suppliers.

**Stronger thesis: sell claims integrity to the side that holds the source of truth and the budget.**

- **Buyer:** mid-tier electrical, lighting, wire, fittings and plumbing manufacturers ($100M-$3B revenue). They receive thousands of SPA debit claims from hundreds of distributors but are too small for Vistex or Model N.
- **What it does:** ingests the SPAs they issued, distributors' 844 claims and deductions, and price letters. It validates each line automatically (SPA active, quantity cap, end user, cost basis after a tariff price letter), flags over-claims, and returns clean reason-coded 849s. Rep agencies get an exception queue.
- **Price:** SaaS on claim volume, plus a share of over-claims prevented.
- **Why this beats the distributor version:**
  - Incentives reward accuracy rather than aggression.
  - The data is first-party, which removes both the confidentiality and the antitrust problem.
  - ACVs are $100-400k rather than $40k.
  - Rep agencies become users instead of adversaries.
  - It copies the CPG deductions playbook, where supplier-side software (HighRadius and others) became a large category.
- **Later:** offer distributors a free inbox for standardized responses, which builds the two-sided network from the side with authority. Then expand horizontally into foodservice deviations and jan-san/med-surg chargebacks.
- **Alternate wedge (GTM skeptic):** SPA and rebate receivable diligence plus post-close SPA harmonization for PE roll-ups. One buyer brings many entities, and the model grows with consolidation instead of being eroded by it.

## How the work is done today
1. A contractor bids a job. The distributor requests special pricing through the manufacturer's rep agency.
2. The SPA arrives as a PDF, email, spreadsheet or portal export.
3. An analyst keys it into the ERP (Eclipse, P21, SX.e/CSD). Catalog numbers and SKUs often mismatch here.
4. Counter or inside sales must link the SPA on each order. Releases and counter pickups that aren't linked never become claims.
5. The ERP batches debits via EDI 844, portal or spreadsheet.
6. The manufacturer pays in full, short-pays, or rejects with its own reason codes and a 30-180 day window (estimate).
7. Matching credits to claims is done in Excel. Small rejections age out and are written off.

Staffing is roughly 2-6 FTE per $200M distributor, or $150-500k a year in labor (estimate). On the manufacturer side, channel-finance clerks validate these claims in spreadsheets together with reps.

## TAM (estimates)
- **Distributor side:** about 650-1,050 US independents with $50M-$1B revenue. Electrical runs about $7.8M a year in debit claims per $200M of revenue. Recurring leakage is 2-6% (the skeptics argue 1-4%). Recurring SAM is about $45M (range $30-100M), plus $40-100M of one-time back-book revenue.
- **Manufacturer side:** a few hundred to about 800 mid-tier OEMs × $100-400k ≈ $50-200M.
- **Horizontal "distribution claims RCM"** (adding foodservice deviations, electronics ship-and-debit, med-surg/jan-san chargebacks): about $0.7-1.5B.
- The scout's $300-600M for electrical, HVAC and plumbing is likely 3-6x too high.

## Competitors
| Name | Type | Threat |
|---|---|---|
| Ximple Solution | Vertical SPA/rebate software for electrical/plumbing/HVAC distributors | Most direct overlap; adding LLM extraction is a short roadmap item |
| Enable | Rebate management SaaS (~$276M Series D 2022, verify) | Well funded, distribution-focused, can move down-market |
| Epicor Eclipse / P21 (Prism AI) | ERP of record | Could ship SPA ingestion and rejection worklists natively; controls data access |
| Infor SX.e / CSD | ERP | Feature competitor and integration gate |
| Vistex, Model N (Vista, ~$1.25B 2024, verify) | Manufacturer-side ship-and-debit and chargebacks | Own large OEMs; leave mid-tier OEMs open |
| Flintfox, Vendavo, PROS, Zilliant | Rebate and pricing tools | Bundling risk |
| PRGX, Apex Analytix, INSIGHT2PROFIT | Contingency recovery and pricing consultancies | Prove the model; compete for the CFO's "found margin" attention |
| IDEA / IDW, TradeService | Industry data and EDI utilities | More legitimate neutral clearinghouse |
| IMARK, Affiliated Distributors | Buying groups | Required channel; could white-label |
| Parspec, Endeavor.ai, Proton.ai, Conexiom | AI-native startups in adjacent workflows | Could extend downstream from the quote/SPA-request step |
| HighRadius, iNymbus, SupplyPike | CPG deductions AI | Analog for the model and a possible lateral entrant |

## Why now
- **Tariff repricing:** Section 232 steel and aluminum tariffs at 50% and copper tariffs in 2025 (verify) led to repeated price letters. Debit amounts drift against fixed SPA nets, producing waves of short pays.
- **Better models:** LLMs now parse heterogeneous SPA PDFs and reason codes without per-vendor templates.
- **Accepted business model:** outcome-based AI services are now a familiar model to buyers and VCs.
- **Consolidation:** PE roll-ups need EBITDA quickly and need to merge SPAs across many ERPs.
- **Correction to the scout:** data-center electrical volume flows mostly to the largest distributors. It helps the manufacturer-side case, not the independent-distributor case.

## Wedge and business model
- **Distributor wedge, if pursued:** "Debit AR Rescue." Work only claims that were already filed on time and are aged or short-paid. Fee is 20-25% contingency, then convert to flat SaaS with a recovery guarantee, avoiding gainshare baseline fights. Start with electrical independents on Eclipse, $75-500M revenue. Avoid HVAC because exclusive equipment channels mean low SPA intensity.
- **Preferred wedge:** a 4-6 week pilot with a mid-tier electrical or plumbing OEM's channel-finance team. Ingest one quarter of claims and report the over-claim rate and the time it takes to adjudicate each claim. Then SaaS per claim volume.
- **Margins:** about 45-60% gross early (humans in the loop), rising to 75%+ as the software share grows.

## What's good
- The pain is real and money-denominated. SPA dollars can rival net income, and recoveries go straight to EBITDA.
- The structure maps cleanly onto healthcare RCM: 844 = 837 (the claim), 849 = 835/CARC (the remittance with denial codes).
- No AI-native player was found in SPA claims. Existing incumbents are not AI-first.
- No license and little capital are needed.
- Tariffs generate fresh dispute volume every quarter.
- The cross-vertical pattern (foodservice, med-surg, jan-san) offers a real path to venture scale.

## What's bad (strongest red-team points)
- **Competition lens:** what's left after the ERP auto-claims linked lines is a small pool of legitimately rejected or time-barred claims. Recovering it takes rep favors, not better parsing. Ximple, Enable and Epicor can add extraction within a quarter. IDEA has more legitimacy as a clearinghouse. Providers, not payers, pay for denial management, so the two-sided story contradicts itself.
- **GTM lens:** enterprise-length sales cycle for a one-time, declining fee. The free audit gives away the worklist. The champion is the person being audited. The manufacturer relationship is worth more to the distributor than $100k of recovery. Contingency fees compress (in Amazon FBA reimbursement recovery they fell from about 25% to the low teens). Only about 250-400 electrical logos exist, and the pool is shrinking through M&A.
- **Feasibility lens:** attaching SPAs to unlinked sales after the fact looks like diversion and triggers clawbacks. Many distributors take SPA debits as deductions, so there may be no aged receivable to chase. Automated portal filing breaks portal terms of use. A pooled "behavior graph" of competitors' job pricing is antitrust exposure (DOJ withdrew its information-exchange safe harbors in 2023; RealPage case 2024). Humans stay in the loop, holding gross margin at services levels.
- **All three lenses:** the core leakage stats (8-12% unclaimed, 52%/43% survey, 5.2% profit loss) come from vendors or a 2019 survey.

## Non-obvious insights
- Leakage hides in unlinked releases, cost-basis short pays and aged debits, not in rejected claims. Only the aged debits and short pays are clean to chase.
- Whether a distributor *deducts* or *invoices* SPA debits decides whether its dispute shows up as an aged receivable on its own books or as an unauthorized deduction on the manufacturer's. That points the product toward the manufacturer side.
- The manufacturer holds the source-of-truth SPAs, so selling to it removes the confidentiality and antitrust problems at once.
- Rep agencies are the hidden adjudicators. Make them users of the tool, not targets of it.
- Volume-rebate tier alerts (forward-looking) may beat backward recovery as a reason customers stay.
- In a roll-up, SPAs may not transfer on change of control. That is a QoE question with a real budget behind it.

## Cheapest validation test (2 weeks, under $1k)
1. **Five distributor CFO/controller calls** with $75-500M electrical independents, sourced from LinkedIn titles "SPA Analyst" and "Pricing Manager" and the Electrical Wholesaling Top 150. Ask for: the open vendor-debit balance over 120 days, whether they deduct or invoice SPA debits, and the share of disputes that are paperwork rather than policy.
2. **Five mid-tier OEM channel-finance or claims managers.** Ask for: claims per month, FTEs on validation, estimated over-claim rate, and whether they use Vistex.
3. **Two rep-agency principals.** Ask how they would react to third-party resubmissions.
4. **Collect written claim and late-claim policies** from about 10 top electrical and plumbing OEMs.
5. **Prototype extraction** on 20 real SPA PDFs and 849s with Claude, about $50 in compute. Target 95%+ field accuracy.

**Kill criteria:** median aged disputable balance under $150k, plus no OEM reporting more than 2 FTE on claims validation or showing interest in a pilot.

## Unresolved questions
- Actual claim and dispute windows for the top 20 electrical and plumbing OEMs.
- How common deducting versus invoicing SPA debits is.
- Real leakage at distributors on Eclipse or P21.
- Whether a 2025-26 AI-native SPA-claims startup exists (the live scan did not run).
- Ximple, Enable and Epicor AI roadmaps.
- Whether mid-tier OEMs measure over-claims at all.
- Whether foodservice deviations are a better first vertical.
- Antitrust posture of cross-customer rejection-pattern learning.

## Sources
- https://erpsoftwareblog.com/2026/05/the-real-cost-of-manual-spa-management/ (vendor-adjacent)
- https://www.deloitte.com/us/en/industries/consumer/articles/special-pricing-agreements-distributors.html
- https://electricaltrends.com/2019/11/24/spa-survey-results-are-they-worth-the-cost/ (2019)
- https://www.ximplesolution.com/industries/plumbing-distribution-software/rebate-spa-management-software/
- https://www.mdm.com/wp-content/uploads/2026/06/MDM-2026-TD-Report-5.pdf
- https://www.naed.org/market-overview
- https://edisonreport.com/2025/07/08/parspec-raises-20-million-series-a-to-modernize-the-construction-supply-chain-with-ai/
- https://www.thehardwirenews.com/mdm-2026-top-distributors-rankings-hvacr-tariff-driven-shifts/
- https://x12.org (844/845/849 standards)
- https://www.justice.gov/opa/pr/justice-department-withdraws-outdated-enforcement-policy-statements (from memory)
- https://www.justice.gov/opa/pr/justice-department-sues-realpage-algorithmic-pricing-scheme-harms-millions-american-renters (from memory)
- https://www.enable.com, https://www.vistex.com, https://www.modeln.com, https://www.idea4industry.com, https://www.prgx.com

## Round 2 diligence (2026-10-06)

### Score change: 44 -> 32/100. Verdict: PASS (park it; revisit only if an industry insider brings a design partner)
The scores below are a re-judgment. None of the buyer quotes come from real customers.

| Dimension | R1 | R2 | Why it moved |
|---|---|---|---|
| Market size | 5 | 4 | Realistic ACV is about $40-80k, not $100-400k. A few hundred mid-tier OEMs x $60k is roughly $15-30M SAM. Venture scale now depends on horizontal expansion, and those paths are already occupied. |
| Pain intensity | 6 | 5 | The pain is real at the clerk level (the "auto-approve under $500" blind spot). But leakage is unverified and probably 1-3%, not 8-12%. Large OEMs say claims are "not top-ten". |
| Whitespace | 6 | 3 | Several players sit next to or on top of it. IMA360 markets automated validation of manufacturer chargeback, SPA and ship-and-debit claims against contract terms. CMR sells rules-based ship-and-debit validation. Smyyth sells ship-and-debit post-audits as a service. Stuut ($29.5M, a16z) pitches AI deductions to mid-market manufacturers and distributors. Glimpse ($35M A) and Transformance cover generic deductions AI. SpeedyLabs covers foodservice. |
| AI leverage | 6 | 6 | Extraction and matching are strong. Acting on the output still depends on relationships. |
| GTM feasibility | 4 | 3 | Large OEMs have zero SaaS willingness to pay: SAP plus offshore shared services. Small OEMs want $1.5-3k a month, month to month. Sales leadership vetoes short-pays to top distributors. Cycles run 9-14 months. |
| Defensibility | 3 | 2 | Extraction is a commodity. Funded generic players could add SPA logic in 2-4 quarters. The only possible moat is the network effect of a distributor response inbox, and it is unproven. |
| Founder fit | 4 | 4 | An industry cofounder is still effectively required. |

**Why it dropped.**
1. **No longer whitespace.** The "no AI-native player" claim only holds under the narrowest definition (electrical/plumbing SPA 844 adjudication). This session's search shows IMA360 already sells automated validation for SPA, ship-and-debit and manufacturer chargebacks (https://ima360.com/lp/chargeback-management-software/, https://ima360.com/solutions/). That is the manufacturer-side pivot's exact job. Whether it is AI-native is unverified.
2. **The buyer simulation undercuts the ACV.** The plan assumed $100-400k. The simulation lands at $36-120k for mid-tier, near zero for large OEMs and $18-36k for small ones.
3. **Structural power problem.** Manufacturers prefer channel peace to accuracy, so recovered dollars shrink to clerk-labor savings. The round-1 PE operator, the "Mark" persona and the pre-mortem's top failure mode (45%) all point the same way.
4. **The "why now" fades.** The tariff price-letter wave is already being absorbed: SPAs are being re-priced as a discount off book.

**What survives.** The supplier-side claims-AI model is real and fundable (Glimpse 14x YoY, Stuut). There is a credible small-OEM inbox-native wedge. A one-time claims audit could work as a services wedge. This is a reasonable acquisition-bait or cash-flow business, not a priority venture bet for a capital-light solo or small team.

### Fact-check
| Claim | Status | Evidence |
|---|---|---|
| Enable ~$276M Series D 2022 | Partially true | Series D was **$120M in Nov 2023** at a $1.12B valuation (led by Lightspeed). $276M is total funding. https://www.businesswire.com/news/home/20231107360516/en/ |
| Model N taken private by Vista, ~$1.25B 2024 | Verified | $30/share, announced Apr 8 2024, closed Jun 27 2024. Focus is life sciences and high-tech. https://www.modeln.com/company/news/press-center/vista-equity-partners-completes-acquisition-of-model-n/ |
| No AI-native player in SPA / ship-and-debit | Partially true, weakening | None found specific to electrical/plumbing. Adjacent players exist: SpeedyLabs, Glimpse, Stuut, Transformance, and IMA360 (automated SPA and ship-and-debit validation; AI status unverified). https://www.speedylabs.ai/enable-alternative, https://ima360.com/solutions/ |
| CPG deductions playbook became a big category | Verified | Glimpse: $35M Series A led by a16z (Mar 2026), $52M total, 14x YoY growth and 91% dispute win rate (both vendor claims). https://www.bevnet.com/pr/2026/03/25/glimpse-raises-35m-to-bring-ainative-infrastructure-to-cpg-and-retail |
| Mid-tier OEMs ($100M-$3B) are open | Partially true | Open with respect to Vistex and Model N. But Stuut ($29.5M A, a16z, late 2025) targets mid-market manufacturers' and distributors' deductions and disputes. https://www.prnewswire.com/news-releases/stuut-technologies-raises-29-5-million-series-a-led-by-andreessen-horowitz-to-automate-accounts-receivable-work-302621866.html |
| Ximple is the most direct overlap | Partially true | Its plumbing rebate and SPA product page exists. AI features are unverified (fetch blocked again 2026-10-06). |
| Incumbent tools aren't AI-first; validation is manual | Partially true | Rules-based manufacturer-side validation is already marketed: CMR's auto-calculation engine, IMA360, Vendavo. Spreadsheets do persist at mid-tier OEMs (simulation only). https://computermarketresearch.com/ship-and-debit-management-software-the-2026-guide-to-automating-claims-protecting-margins/ |
| 8-12% leakage, 52%/43% survey, 5.2% profit loss | Unverifiable | Vendor-adjacent only (ERP Software Blog, May 2026; 2019 survey). Treat as marketing. |
| Section 232 at 50% for steel and aluminum and copper in 2025 drove short pays | Unverifiable live | Model knowledge: steel and aluminum 50% from Jun 4 2025, semi-finished copper 50% from Aug 1 2025. The link from tariffs to short pays is an inference. |
| DOJ withdrew info-exchange safe harbors (2023); RealPage suit (2024) | Unverifiable live | Consistent with model knowledge. Get a lawyer's review before any pooled-data design. https://www.justice.gov/opa/pr/justice-department-sues-realpage-algorithmic-pricing-scheme-harms-millions-american-renters |
| SAM ~$30-100M distributor side, $50-200M manufacturer side, $0.7-1.5B horizontal | Unverifiable (own estimate) | a16z's deductions bets support the horizontal number. The manufacturer number should be cut to about $15-30M at realistic ACVs. |

### New competitors (not in the R1 table)
| Name | Type | Threat | Funding / scale | URL |
|---|---|---|---|---|
| IMA360 | Chargeback, rebate and ship-and-debit SaaS for manufacturers and distributors | **High.** Automated claim validation against contracts, SPAs and eligibility, which is exactly the pivot's job. Also markets AI pricing. | Unknown | https://ima360.com/lp/chargeback-management-software/ |
| Stuut Technologies | AI-native autonomous AR (deductions, disputes) | **High.** Same mid-market manufacturer finance buyer. | $29.5M Series A, a16z | https://www.prnewswire.com/news-releases/stuut-technologies-raises-29-5-million-series-a-led-by-andreessen-horowitz-to-automate-accounts-receivable-work-302621866.html |
| Glimpse | AI-native CPG and retail deductions | Medium. Possible lateral entrant into distributor chargebacks. | $35M Series A (Mar 2026), $52M total | https://www.tryglimpse.com/post/seriesa |
| Smyyth | Ship-and-debit post-audit services plus software | Medium. Already occupies the "one-time claims audit" wedge. | Unknown | https://www.smyyth.com/ar-deduction-services-outsourcing/ship-and-debit-audits/ |
| Computer Market Research (CMR) | Channel data and ship-and-debit automation | Medium. Rules-based validation already sold to manufacturers. | Unknown | https://computermarketresearch.com/automated-ship-and-debit-management/ |
| SpeedyLabs | AI-driven rebate management, foodservice distributors | Medium. Blocks the foodservice expansion path. | Unknown | https://www.speedylabs.ai/ |
| Transformance (ClaimIQ) | AI order-to-cash; vision-language model remittance parsing | Low-medium. Generic deductions layer. | Unknown | https://www.transformance.ai/blog-posts/what-is-transformance |
| Incentive Insights, RebateLedger | Ship-and-debit / SPA content and vendors | Unknown. Not verified. | Unknown | https://incentiveinsights.com/what-is-a-ship-and-debit-agreement/, https://rebateledger.com/blog/ship-and-debit-special-pricing-agreements |
| Tellius | AI agents on Model N / Vistex chargeback data (pharma) | Proves the "AI layer over the incumbent" pattern (search snippet only) | Unknown | https://www.tellius.com/resources/blog/pharma-chargeback-exceptions-how-ai-agents-resolve-gross-to-net-leakage |

### Buyer-interview highlights (simulated composites, not real buyers)
- **Priya, channel accounting manager, $350-500M electrical fittings OEM (JDE + Access):** "My guys check every line over $500 by hand and wave through anything under that... I know we're overpaying on the small stuff. I just can't prove how much." Objections: "Our SPA data is a mess... that IS the problem." "IT will not give a startup an EDI feed." "Sales leadership will tell me to pay it anyway." **WTP:** "$10k a month I could probably expense if it saves one clerk. $150k a year needs a capex request." Wants a flat fee, not gainshare. Would say yes to a 2-week pilot on flat files that produces a reason-coded exception list, the dollar value of failing sub-$500 lines, and draft 849s, plus one electrical reference.
- **Mark, VP Finance, $1.5-2.5B PE-owned wire and cable (SAP S/4 + Monterrey shared services):** "Claims aren't my top-ten problem... Eight people in Monterrey cost me less than your ACV." "We are not going to start short-paying [our big three] over $3 lines." **WTP:** about zero for SaaS. A one-time contingency audit through PE value-creation is possible. Would also take an "SPA approval leakage" pitch, but as pricing governance, not claims.
- **Dave, owner-CFO, $80-150M plumbing OEM (QuickBooks to Epicor migration):** "If she can't find it within ten minutes, we eat it... maybe $100-200k a year." "The real headache is the buying-group rebates and the co-op money." **WTP:** "$1,500-2,500 a month, month-to-month... If it's $8k a month I'll just hire a part-timer." Wants an inbox-native worklist with a one-click dispute email, set up in a day.
- **Net WTP estimate:** blended starting ACV about $40-80k. Gainshare is a weak lever because the baseline is contested. Price as a flat fee tiered by claim-line volume.
- **One real data point:** a Crescent Electric "SPA Coordinator" posting (2022) confirms the dedicated role and the mixed EDI 849 / manual credit path. https://accessdubuquejobs.com/job/spa-coordinator/

### Pre-mortem: top failure modes (probabilities are estimates)
1. **Long sales cycle against a small, consolidating logo pool: 50%.** Warning sign: median time from first call to data in hand over 60 days.
2. **Sales overrides finance, so value shrinks to labor savings: 45%.** Warning sign: fewer than half of flagged lines get acted on in the pilot.
3. **Data heterogeneity turns it into a services business: 40%.** Warning signs: under 50% of volume arrives as EDI 844; onboarding takes more than 6 engineer-weeks.
4. **Over-claim pool is 1-2%, not 8-12%: 35%.**
5. **Incumbents bundle the feature: 30%, now likely higher given IMA360 and Stuut.** Includes Enable AI (2024), Vistex/Model N gen-AI, and ERP-native tools.
6. **No insider on the team: 25%.**
7. **Horizontal expansion fails: 30%, conditional on surviving the beachhead.**

Root cause in the post-mortem scenario: the company sold "accuracy" to buyers who structurally prefer channel peace, leaving clerk-labor savings across a few hundred custom-data logos.

**Kill criteria (all must pass):**
- **Day 45, short-pay:** at least 5 of 15 calls report over-claims above 2% and confirm they short-pay validated flags, including against their top-10 distributors.
- **Day 45, labor:** median prospect has at least 2 FTE on claims, or can name a write-off or DSO problem.
- **Day 60, data:** at least 3 OEMs share one quarter of claims plus the matching SPAs and price letters.
- **Day 60, team:** an insider cofounder or paid advisor is committed.
- **Day 75, leakage:** validated over-claims plus labor savings of at least $150k a year per OEM, and over-claims at or above 1% at 2 of 3 data partners.
- **Day 75, technical:** at least 95% extraction accuracy, at least 98% flag precision, and no more than 4 engineer-weeks of mapping per customer.
- **Day 90, willingness to pay:** at least one paid audit ($15-25k) or an LOI at $75k+ ACV.
- **Day 90, power:** VP Sales or a rep-agency override blocks action in fewer than 2 of 3 readouts.
- **Competition (new):** fewer than 3 of 15 prospects name IMA360, Stuut, Enable or an ERP-native tool as already doing this.

### Discovery-call script
1. Walk me through last month-end close for distributor claims: who touched the files, in what order, and how many hours?
2. How many claim lines last month, from how many distributors? What share came by EDI 844 versus spreadsheets, portals or PDF remittances?
3. When did you last reject or short-pay a claim? Why, and what happened with the distributor and the rep?
4. Do you auto-approve below a dollar threshold? Where did that number come from?
5. Where do your SPAs live (ERP, rep quote tool, email)? How long would it take to pull every active SPA for one distributor?
6. After your last price letter or tariff increase, what happened to claims and disputes? Show me one wrong-cost-basis claim.
7. Have you ever measured over-claims? How? Who owns that number?
8. What have you tried (Vistex, Model N, Enable, IMA360, SAP modules, Stuut, HighRadius, offshore staff)? Why did it stick or not?
9. If I found $X invalid at your top distributor, who decides whether to short-pay? Has sales overridden finance before?
10. Can you export one quarter of claims and SPAs as flat files without IT? Who signs anything over $25k? (Ask for the data, not a compliment.)

### Who to call first
- **Priority 1: five practitioners before any executive.** Channel accounting, distributor claims, ship-and-debit, SPA or deductions managers at $150M-$1B electrical, lighting, wire and plumbing OEMs that sell two-step through NAED/AD/IMARK or ASA wholesalers.
  - LinkedIn search: ("ship and debit" OR "SPA claims" OR "distributor claims" OR "chargebacks" OR "EDI 844") AND (electrical OR lighting OR wire OR plumbing OR fittings), 201-5,000 employees.
  - Lean toward sub-$500M OEMs: Priya and Dave are the buyers, Mark is not.
- **Priority 2: former practitioners.** Ex-channel-finance managers, NEMRA rep-agency principals, and ex-Vistex, Model N or Enable implementers. This is also the cofounder pool.
- **Priority 3: anti-persona check.** One or two PE-owned OEM finance VPs, plus PE operating partners for the one-time audit wedge.
- **Venues:** NAED, NEMRA, AD/IMARK supplier meetings, ASA, IDEA, NACM Credit Congress / CRF deductions sessions. Dates unverified.

### First 30 days (only if the founder chooses to test despite the PASS)
- **Days 1-3: desk check, no calls yet.** Read IMA360's, CMR's and Smyyth's product pages and pricing, and Stuut's deductions guide. If IMA360 already sells AI SPA validation to sub-$1B OEMs at under $50k, stop here.
- **Days 3-20:** 15 practitioner calls using the script. Track short-pay behavior, FTE count, share of volume via 844, current tools, and willingness to export data.
- **Days 10-25:** Claude extraction prototype on any real SPAs, 844s and remittances obtained (target at least 95% field accuracy). Build a flat-file "one-quarter claims audit" report template: reason-coded exceptions, dollar value of sub-threshold failures, draft 849s.
- **Days 15-30:** offer a $5-15k (or free) 2-week flat-file audit to the 2-3 warmest prospects. In parallel, approach two or three former channel-finance leads as cofounder candidates.
- **Day 30 gate:** continue only if at least 2 data shares are in motion, the short-pay and labor tests are trending to pass, and no incumbent was named unprompted in 3 or more calls. Otherwise kill. The fallback is the small-OEM, inbox-native deductions tool sold as a cash-flow business.

*Research limits:* 1 WebSearch (IMA360/Smyyth/RebateLedger) this session. The Ximple fetch was egress-blocked again. Round-2 inputs were mostly search snippets. Personas are composites.
