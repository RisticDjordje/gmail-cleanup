# Guaranty Shield: AI back office for SBA 7(a) servicing, liquidation and purchase packages

**One-liner:** Treat the SBA guaranty like an insurance policy whose claim is judged on the loan file years later. Use AI to score claim readiness, fix servicing gaps while they can still be fixed, and assemble NGPC purchase packages for mid-tail 7(a) lenders.

> **Research limitation:** the shared WebSearch budget for this workflow (200 calls) ran out before this verdict was written, and the deep dive and all three red teams hit the same wall. The egress proxy also blocked sba.gov, ecfr.gov, data.sba.gov, naggl.org and vendor sites. **Every figure below comes from model knowledge (cutoff mid-2026) and is unverified.** The single most important unknown is the actual SBA repair, denial and interest-curtailment rate. Nobody in this workflow has verified it.

## Verdict: PASS for a technical founder without credentials (36/100)
It could work as an AI-native LSP roll-up run by an ex-SBA liquidation head, but that is a services business with a ceiling of about $30-80M.

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 3 | SBA-only TAM is about $80-350M a year; realistic SOM is $10-40M ARR |
| Pain intensity | 5 | A repair on a $1-5M loan is real money, but it is rare and arrives years late |
| Whitespace | 6 | No AI-native focused on purchase or repair defense was found (unverified) |
| AI leverage | 6 | Reading 1,000-page files and cross-checking credit policy suits an LLM, but certified narratives need human sign-off |
| GTM feasibility | 3 | Bank vendor-risk reviews take 3-9 months; legal teams veto the scan (FCA); LSPs own the channel |
| Defensibility | 4 | The outcome-data moat is slow, and lender contracts likely block pooling the data |
| Founder fit | 3 | Needs a co-founder with deep SBA liquidation experience to be credible to bank general counsel |
| **Overall** | **36** | |

## Revised thesis
The deep dive's version, a claim-readiness SaaS sold to lender SBA departments, runs into three problems:
- **Buyer misalignment.** The SBA department head is paid on gain-on-sale at closing. A repair lands 2-6 years later, after that person has moved on.
- **False Claims Act knowledge problem.** Most defects that cause repairs cannot be cured after closing. Finding them before the lender signs a purchase certification creates documented knowledge of the defect.
- **No mandate.** Mortgage post-closing QC exists because Fannie and Freddie require it. SBA has no loan-level QC requirement.

**The strongest surviving thesis is to sell to parties who *want* defects found, at moments when they can still be fixed:**
1. **Pre-disbursement closing gate**, white-labelled to LSPs and SBA closing attorneys at $100-300 per loan. Equity injection, 4506-C transcripts, insurance binders, liens and the match between use of proceeds and the Authorization are all checked before the money goes out. Every defect is still curable and nothing has been certified, so there is no FCA exposure.
2. **Acquirer-side guaranty-at-risk diligence** for bank M&A, purchases of SBLCs and fintech SBA lenders, and portfolio sales, at $50-250k per engagement. Privilege sits with the acquirer and deal deadlines create urgency.
3. *Optional, credentialed-founder path:* buy one or two boutique LSPs that already have SBA-reviewed agreements. Run purchase packages and liquidation on the evidence-graph engine on contingency (10-20% of recoveries), with mandatory specialist sign-off on everything submitted.

Even with these pivots, the SBA-only ceiling is about $20-80M. Venture scale requires extending to USDA B&I/FSA and general community-bank pre-funding QC, which means a different buyer.

## How the work is done today
- **Closing:** done in Ventures/VenturesPlus or SBA One and by outside closing counsel. Exceptions are logged generically in nCino, Baker Hill or core-system modules. Nobody re-tests the file against what NGPC will check.
- **Servicing:** 1502 reporting to Colson, insurance renewals, 5-year UCC continuations (the FY2021-22 vintages hit their cliff in 2026-27) and prior-approval actions. Staff turnover is high.
- **Default:** a lender can request purchase 60 days after an uncured default. A purchase package of hundreds to 1,000+ pages is assembled and submitted to the National Guaranty Purchase Center (NGPC) in Herndon, VA. Liquidation officers report 8-20 hours per package (unverified). Early defaults, within 18 months of disbursement, get an intensive review.
- **Decision:** SBA purchases, asks for more documents, denies, or repairs (13 CFR 120.524). For sold guaranteed portions, Colson pays the investor unconditionally and SBA claws any repair back from the lender later.
- **Cost:** in-house officers at about $90-150k fully loaded, or boutique LSPs and consultants at $150-400 an hour, a few thousand dollars per package, or 10-25% contingency (estimates).

## TAM (estimates, unverified)
| Pool | Estimate |
|---|---|
| Purchase packages (6-12k a year x $2.5-5k) | $15-60M |
| Delinquency guaranty-at-risk scans | $8-45M |
| Servicing-hygiene monitoring (mid-tail portfolio) | $9-30M |
| Closing QC (60-85k loans x $150-350) | $9-30M |
| Outsourced liquidation (contingency) | $20-120M |
| M&A and portfolio diligence | $2-20M |
| USDA B&I/FSA and state programs | $10-30M |
| **Total TAM / SAM / 5-year SOM** | **~$80-350M / $40-120M / $10-40M ARR** |

**GTM correction on ACV:** a median mid-tail lender makes 9-15 purchases a year. That puts strong customers at about $50-100k ACV and most logos at $10-30k, against $40-80k CAC.

## Competitors
| Name | Type | Threat |
|---|---|---|
| Lenders Cooperative | SBA LSP and software | Owns mid-tail relationships; could add LLMs or acquire |
| iBusiness Funding (bought Funding Circle US, 2024; verify) | Tech-enabled SBA LSP | Has both tech and services |
| Biz2Credit / Biz2X | SBA lender plus bank SaaS | AI document processing; could move into servicing |
| Boutique ex-SBA consultancies (e.g., Holtmeier; verify) | Services | Post-RIF ex-NGPC staff entering, which compresses prices |
| nCino (SBA module, Banking Advisor) | Public bank OS | Already holds the imaged file; born inside Live Oak |
| Ventures/VenturesPlus, SBA One | SBA closing software | Own the closing moment, where defects are curable |
| Abrigo, Baker Hill, Teslar, Jack Henry, Fiserv | Lending modules | Generic exception and insurance ticklers |
| Wolters Kluwer Lien Solutions, CSC | UCC management | Already sell the "UCC cliff" fix |
| Casca (YC), Kaaj, Numerated | AI-native origination | Extract at intake; could move downstream |
| Ocrolus, Heron Data | Document AI | Commoditize extraction |
| Norm Ai | Compliance agents | Horizontal "documents vs. rulebook" engine |
| ACES, Indecomm (mortgage QC) | Adjacent | Natural entrants into commercial file QC |
| Crowe, Forvis Mazars, Baker Tilly, ProBank Austin | Loan review | Own the M&A and loan-review budget |
| Copilot, Claude, ChatGPT Enterprise plus public SOPs | DIY | Caps willingness to pay |

## Why now
- **Vintages:** large FY2021-25 cohorts are entering peak default years at prime-plus rates of roughly 9-11%.
- **Rule whiplash:** a lender's portfolio now spans 3-4 rulebooks (SOP 50 10 6, 7, 7.1 and 8). The 2023 "lender's own policy" cohort will be judged against each lender's own credit policy.
- **SBA tightening:** SOP 50 10 8 (June 2025), the zero-subsidy push and OIG focus on early defaults.
- **SBA capacity:** the 2025 reduction-in-force slows NGPC and frees up experienced staff to hire.
- **Technology:** long-context multimodal LLMs can process a file for roughly $1-10 of compute (estimate).

## Wedge and business model
- **Original:** delinquent-loan scan at $750-1,500, package at $3-5k, plus a success fee on reversed repairs, a hygiene subscription at $60-150 per loan per year, and a $15-50k annual minimum.
- **Recommended instead:**
  - (a) Pre-disbursement closing gate sold through 3-5 LSPs and closing-counsel firms, priced per loan.
  - (b) Acquirer diligence for M&A advisors, using the public FOIA charge-off data to show prospects their own numbers.
  - Post-default package assembly only as a human-led add-on.
- **Margins:** gross margin of 50-65% in years 1-2.

## What's good
- **Real, concentrated dollars:** a single repair on a $1-5M loan is material to an SBA department's P&L.
- **Strong LLM fit:** comparing a long lender credit policy against a long scanned file is something checklist software cannot do.
- **Free targeting data:** the 7(a) FOIA loan-level dataset ranks every lender by vintage-adjusted charge-offs.
- **Clean second buyer:** a bank acquirer wants defects found, has a deadline, and holds the privilege.
- **Cheap scarce talent:** the 2025 RIF released ex-NGPC staff into the market.
- **No direct AI-native:** none found focused on post-closing guaranty defense (unverified).

## What's bad (strongest skeptic points)
- **Feasibility:** most repair-causing defects (equity injection, IRS verification, eligibility, use of proceeds) are not curable after disbursement. Scanning for them creates dated evidence of knowledge before the purchase certification. Privilege is weak for routine, ordinary-course scans. AI-written certified narratives carry 18 USC 1001 and FCA exposure, so human review cannot be removed.
- **Feasibility:** the interest-carry ROI is overstated. Mid-tail lenders mostly sell the guaranteed portion, and Colson pays investors regardless of the package.
- **Competition:** OIG has historically found NGPC paying *too readily*, which implies low repair rates. With no mandate there is no forced buyer, and LSPs plus nCino and Ventures can add an LLM layer within a quarter.
- **Competition:** the curable half of the product (UCC, insurance, 1502 checks) is already sold by Wolters Kluwer, CSC, insurance trackers and core systems.
- **GTM:** the pain sits with the top 15-25 lenders, who insource, while the mid-tail has thin ACV, 3-9 month vendor-risk cycles and a CAC payback of 1.5-4 years.
- **GTM:** the default wave is concentrated in small loans (≤$150k), where a $3-5k package is 4-8% of the guaranty.
- **All three:** the SBA-only ceiling is about $10-40M ARR at services margins. Policy whiplash affects both the rules library and demand. SBA could standardize or automate purchase intake itself.

## Non-obvious insights
1. **Who wants defects found decides the GTM.** The lender wants *not to know* (FCA), while the acquirer, the closing gate and SBA itself all want to know. Sell to the second group.
2. **A repair is an unreserved contingent liability.** Gain-on-sale is booked at closing, and CECL treats the guaranteed portion as covered. That is why the CFO and acquirer care, and the SBA department head does not.
3. **The 2023 "do what you do" cohort turns purchase review into a policy-vs-file comparison**, a task native to LLMs.
4. **SBA's "missing ACES" is regulatory, not volume-driven.** AI lowers the cost per file but does not create a mandate. Watch for an OCRM signal tying QC to lender risk ratings or PLP renewal.
5. **Post-RIF, a slower NGPC may rubber-stamp rather than repair.** That would reduce, not increase, the value of a perfect package.

## Cheapest validation test (2 weeks, <$1k)
1. Download the 7(a) FOIA loan-level data. Count non-top-25 lenders with 15 or more charge-offs a year in FY2024-26, along with loan-size mix. Kill the idea if there are fewer than 200 such lenders.
2. Use LinkedIn, NAGGL and Coleman Report contacts for 10 calls with liquidation managers and 3 with SBA-specialist attorneys. Ask about the actual repair, denial and interest-curtailment rate on FY2023-25 vintages, the share of repairs with *curable* grounds, and whether counsel would allow a pre-certification scan.
3. File a FOIA request with SBA for purchase-decision statistics (purchases, repairs, denials by year and reason).
4. Pitch the closing gate to 3 LSPs and the M&A scan to 3 bank M&A advisors. Ask for a paid pilot.
5. **Kill if** repairs plus denials are under 4% of purchase dollars and no LSP or advisor commits to a pilot.

## Unresolved questions
- What is the actual NGPC repair, denial and curtailment rate, and is it trending up for the 2023-25 vintages?
- What share of repair grounds are in servicing or liquidation (curable) versus origination (not curable)?
- Can a counsel-directed portfolio scan survive a privilege challenge?
- Would Lenders Cooperative or iBusiness Funding white-label the engine or build their own?
- Are AI-native origination players (Casca and others) already shipping closing QC?
- Will lender contracts allow pooled, de-identified outcome data?

## Sources (none fetched this run; verify)
- 13 CFR Part 120 (120.520, 120.524) and Part 103 (agents and LSPs): https://www.ecfr.gov/current/title-13/chapter-I/part-120
- SBA SOP 50 10 8: https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs
- SBA SOP 50 57 (servicing and liquidation): https://www.sba.gov/document/sop-50-57-7a-loan-servicing-liquidation
- SBA 7(a)/504 FOIA data: https://data.sba.gov/dataset/7-a-504-foia
- SBA OIG reports: https://www.sba.gov/about-sba/oversight-advocacy/office-inspector-general
- SBA lender reports: https://www.sba.gov/funding-programs/loans/lender-match-and-lender-reports
- NAGGL: https://www.naggl.org; Coleman Report: https://www.colemanreport.com; Colson: https://www.colsonservices.com
- Fannie Mae Selling Guide (QC mandate comparison): https://selling-guide.fanniemae.com
- Lenders Cooperative: https://www.lenderscooperative.com; Casca: https://www.casca.ai
