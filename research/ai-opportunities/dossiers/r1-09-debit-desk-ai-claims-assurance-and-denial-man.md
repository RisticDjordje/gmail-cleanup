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
