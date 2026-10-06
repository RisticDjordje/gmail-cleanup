# Restoration Claim-Revenue Engine (R5-4)

**One-liner:** AI-generated, code-cited supplements and mitigation invoice defense for insurance-restoration contractors, starting in water and fire restoration rather than retail roofing. It would build a jurisdiction × carrier × line-item outcome dataset that could later support claim-backed working capital. Under scrutiny it works best as an operator play: buy restoration contractors or a human supplement desk, and use AI to raise realized revenue per job and cut DSO.

## Score by founder profile

(100-point scale. 54 = best profile-0 idea so far. 70+ = genuinely compelling.)

| Profile | Score | One-line rationale |
|---|---|---|
| 0: technical outsider, little capital | **40** | No Xactimate fluency or contractor trust. The Verisk EULA bars "Estimate-as-a-Service". Fee compression is already under way (offshore estimators at about $8/hour). |
| A: $3-5M seed plus domain cofounder | **51** | Can fund QA staff and the code/outcome dataset. Still competes with XBuild ($19M, a16z), Verisk's XactAI, Encircle and DocuSketch, depends on Verisk access, and a seed cannot fund the financing step. |
| B: ex-estimator, supplement-desk owner or restoration operator | **59** | Trust, adjuster pattern knowledge and day-one revenue from an AI-leveraged desk with high margins. Ceiling is about $10-30M, with exposure to the EULA and fee compression. |
| C: search fund or acquirer | **65** | Owning the contractor turns competitors into suppliers and removes the EULA and licensing problems. AI lifts revenue per job and cuts DSO, straight to EBITDA. Capped by PE bidding for targets, weather cyclicality and TPA rate pressure. |

**Verdict:** a credible Profile C (or C+B) buy-and-build thesis, not a venture-scale software startup. It clears the 54 bar for B and C. No profile reaches 70 on the current evidence.

## Thesis

Insurance-funded property repair is a large flow of money: roof claims of about $31B in 2024 and about $23B of RCV in 2025, and more than $50B a year of severe convective storm insured losses. A contractor's revenue is set by the carrier's Xactimate scope. Some of the gap between the first estimate and a well-documented scope follows from rules: the locally adopted code, manufacturer instructions, the O&L endorsement, and IICRC drying standards. LLMs can turn those rules into cited supplement packages. Human desks already charge 8-15% of the increase, so the demand is proven.

The open question is who captures the value. AI-native estimating (XBuild), estimating built into Xactimate itself (XactAI), and capture tools (Encircle, DocuSketch) are all moving into this step.

## Workflow today

1. A loss occurs (hail, burst pipe, fire). The contractor is called directly, or the job is assigned through a TPA program (TPAs carry about 30-50% of restoration work, low-evidence figure).
2. The contractor documents the loss: CompanyCam photos, EagleView or Hover measurements, DocuSketch or Encircle 360 capture, moisture maps and drying logs.
3. The carrier writes an Xactimate estimate. Common gaps include code items, O&P, detach and reset, and for water jobs equipment-days, antimicrobial treatment and monitoring.
4. An in-house estimator or an outsourced desk ($100-150 flat, 8-15% contingency, or offshore at about $8/hour) rebuilds the estimate and sends a supplement with evidence.
5. Weeks or months of back-and-forth follow, plus depreciation holdback. Escalation goes to appraisal, a public adjuster or an attorney. Contractors may only "document", not "negotiate" (Florida s.626.854; the 2024 Texas Supreme Court decision).
6. Checks are co-payable to the homeowner and mortgagee and arrive 45-120 days out.

## TAM

| Pool | Estimate (evidence) |
|---|---|
| Roofing supplement dollars | $3.2-4.8B/yr, so about $320-480M of fees at 10% (assumption math on medium-evidence claim flows) |
| Water/fire/mold deltas | $2-4.5B/yr, so about $200-450M of fees (assumption; delta per job unverified) |
| Commercial and large-loss | about $100-200M of fees (assumption) |
| **Total desk fee pool** | **about $0.6-1.1B**, and compressing |
| Claim-backed receivables | $60-150M at a 2-3% take on $3-5B financed; incumbent factors charge about 20% |
| Profile C lens | About 60k restoration firms (IBISWorld $7.1B narrow cut; trade press says "$100B" including rebuild) |

## Competitors

| Player | Position | Scale |
|---|---|---|
| XBuild | AI-native carrier-aligned estimates, starting in roofing and expanding to 7 more trades | $19M Series A (N47, a16z); about 15k projects |
| Verisk (Xactimate, XactAI, AccuLynx) | Owns the estimate format and price list, serves carriers, now owns a contractor CRM; EULA bans Estimate-as-a-Service | Public; court ordered the AccuLynx close in Aug 2026 |
| Encircle | "Scope to Estimate": field documentation to a first-draft mitigation scope | Established |
| DocuSketch | 360 capture, ESX export, drying logs, AI estimates | Established |
| Frontera, Restoration AI, AskAiME | AI supplement, estimate comparison and coverage review for restoration | Unknown |
| HailMate, CapOut | Roofing CRM plus AI supplements; PDF to ESX conversion plus AI claim responses | Unknown |
| Rebuild | Restoration operations platform | $13M+ |
| Human desks (Estimate Company, EOD, RISE) | Set the price anchor; acquisition targets | Fragmented |
| Factors (ClaimPay, Blackwater, RI Billing) | Insurance-receivable financing at about 20% | Small, litigated |

## Wedge → path to scale

**Wedge:** mitigation and rebuild invoice defense for independent water and fire firms doing $2-20M a year on non-program work. Inputs are the ESX, the carrier estimate or reduction letter, drying logs, photos and the policy. Output is a line-by-line variance with code, IICRC and manufacturer citations, QA'd by a senior human estimator. Pricing is 5-8% of the increase, or $300-800 a month plus a lower success fee.

**Path:** desk at $5-15M ARR → estimate authoring and integrations at $20-40M → claim-backed receivables and payments at $100M+.

**Honest correction:** the fintech step is crowded and capital-heavy, and the collateral is messy (co-payable checks, Florida AOB reform). Without it the software ceiling is about $20-50M. The more credible $100M path is the profile C roll-up: 5-15 contractors where the AI is margin, not the product.

## Steelman summary

- This is a payer-versus-provider revenue-cycle problem, the same setup that built healthcare RCM.
- EvenUp ($2B+ valuation, documenting against carriers on contingency) shows the pattern works.
- PE roll-ups (Blackstone/SERVPRO, Alpine/Guardian, Trivest/HighGround, Osceola/Fortify) concentrate buyers who track exactly revenue per job and DSO.
- An AI desk with QA can win at 5% where human desks cannot.
- Bull scores: 50/63/66/72. Profile C+A is the only route that clears 70.

## Skeptic summary

- **"Restoration is thin on AI" does not hold up.** XactAI, Encircle and DocuSketch already hold the drying logs and ESX files, and can add a supplement button for free.
- **Verisk's EULA prohibits Estimate-as-a-Service** without a Services Agreement, and Verisk now owns AccuLynx and hands out integrations by revenue tier. This is the strongest objection (medium evidence).
- The price anchor is about $8/hour offshore, not 10%. At 5-8% of a $2-3k delta, revenue is about $100-240 per job, so $10M ARR needs 50-100k paid jobs.
- TPA programs (30-50% of work) penalize heavy supplementing. Carriers are shifting volume to them and slowing payment.
- A hallucinated code cite or a padded equipment-day is a fraud and SIU problem, not a support ticket.
- Financing incumbents charge about 20% and have a litigation history. A 2-3% take is implausible, and a 20% take carries payday-lending optics.
- Skeptic scores: about 41/52/60/65.

## What's good

- Real, recurring money flow with a payer on the other side, and the willingness to pay is proven (8-15% desks).
- Code-upgrade items are rule-based and AI-tractable. Restoration evidence (moisture logs, equipment-days) is structured.
- Contractors feel the DSO pain acutely, which opens a path from fees to working capital.
- PE consolidation creates fewer, larger buyers that measure revenue per job and DSO.
- Under profile C, every competitor becomes a supplier, and the EULA and licensing problems mostly disappear.

## What's bad

- Crowded from three sides: AI-native (XBuild), the platform owner (Verisk), and capture tools (Encircle, DocuSketch).
- Verisk controls access by contract. A third-party desk generating ESX is exposed to the EULA.
- Fee compression is already here. Success-fee revenue shrinks as first estimates improve.
- Regulatory (unlicensed public adjusting) and fraud exposure. Reputational association with storm chasers.
- Cyclical, lumpy volume (roof RCV fell from about $31B to about $23B year over year). TPA share is rising.
- The $100M financing step is unproven, capital-heavy and already occupied.
- Core figures (delta per job, approval rates) are vendor marketing and unvalidated.

## Best founder profile and why

**Profile C, ideally with a technical cofounder (C+A), or a B operator who acquires.** Buy one or two independent water and fire contractors, or a human supplement desk with a contractor book, at a reasonable multiple. That brings day-one claim files and carrier outcome history (the only plausible moat), licensed Xactimate seats used on the company's own jobs (outside the EULA's Estimate-as-a-Service clause), and a proving ground where higher revenue per job and lower DSO flow directly to EBITDA. Selling software to third parties becomes an option, not the plan.

Profile A should not attempt this as a horizontal SaaS. XBuild and Verisk are better placed.

## First 30 days

1. **Days 1-10:** Get 20-30 closed water and fire claim files from 3-5 independent contractors under NDA. Measure the carrier-first versus final-paid delta, the share that is code or IICRC-cited (rule-based) versus judgment calls, and DSO by carrier and by program versus non-program work.
2. **Days 5-15:** Get a legal read on the Xactware EULA (Estimate-as-a-Service versus an owner-operator's own seats) and on unlicensed public adjusting framing in TX, FL and two other storm states.
3. **Days 10-20:** Run a back-test: have an LLM plus code dataset regenerate supplements on 10 historical files and score them against what was actually approved. Track the citation error rate. Kill the idea if the hallucination rate exceeds about 2% after QA.
4. **Days 10-30:** Build an acquisition pipeline of 15-25 restoration firms and 3-5 supplement desks ($1-5M EBITDA). Collect multiples and TPA revenue mix. Kill or pivot if multiples exceed about 6x, or if the TPA share exceeds 50%.
5. **Day 30 go/no-go:** proceed if the rule-based delta is at least $1.5k per job, DSO is at least 60 days, and one target is available at 4-5x or less.

## Sources

- XBuild: https://iireporter.com/xbuild-raises-19m-launches-ai-estimating-tool-for-roofers/ ; https://www.prnewswire.com/news-releases/xbuild-raises-19m-series-a-launches-ai-powered-residential-roofing-estimate-product-302664721.html
- Verisk EULA: https://www.verisk.com/privacy-policies/xactware-eula/ ; https://claimos.net/blog/verisk-acculynx-ruling-xactimate-integration ; https://www.prnewswire.com/news-releases/roofr-verisk-team-up-to-help-contractors-submit-faster-more-accurate-insurance-estimates-302743334.html
- Competitors: https://www.capout.ai/resources/blog/complete-guide-xactimate ; https://www.getencircle.com/ ; https://www.docusketch.com/solutions/water-damage-restoration-software ; https://www.fronteraclaims.com/restoration-contractors ; https://www.restorationai.com/ ; https://hailmate.ai/insurance-restoration-roofing-software ; https://www.randrmagonline.com/articles/92203-rebuild-raises-13m-to-modernize-the-100b-restoration-industry
- Claim flows: https://www.theclm.org/Magazine/articles/roof-claims-exceed-30b-in-2024/3241 ; https://programbusiness.com/news/roof-claims-totaled-23-billion-in-2025-as-hail-exposure-widened-across-more-states/ ; https://www.ibisworld.com/united-states/industry/damage-restoration-services/6278/
- Pricing: https://estimateondemand.com/estimate-supplement-pricing/ ; https://useproline.com/average-cost-of-roofing-supplement-services/ ; https://virtualnexgen.com/blog/xactimate-expert-supplement-recovery-tpa-compliance
- TPA and market shift: https://therestorationdirectory.com/resources/restoration-companies/restoration-tpa-networks ; https://steamatic.com/what-the-u-s-insurance-shift-means-for-restoration-franchises-in-2026/
- Financing: https://www.blackwaterbilling.com/invoice-factoring ; https://www.propertyinsurancecoveragelaw.com/blog/construction-financing-and-factoring-of-insurance-receivables-mma-related-case-sheds-light-on-factors-in-the-property-insurance-claim-industry/ ; https://www.crestmontcapital.com/blog/restoration-company-business-loans
- Regulatory: https://www.propertyinsurancecoveragelaw.com/blog/can-texas-roofing-and-restoration-companies-advertise-that-they-are-insurance-specialists-and-can-negotiate-on-the-policyholders-behalf/ ; https://www.jpgonzalez-sirgo.com/blog/unlicensed-practice-of-public-adjusting.cfm
- PE and the EvenUp analog: https://axiagrowth.com/resources/industries/home-services/restoration-remediation ; https://ctacquisitions.com/guides/restoration-disaster-recovery-pe-rollup-tracker-2026/ ; https://www.lawnext.com/2025/10/evenup-ai-platform-for-personal-injury-lawyers-raises-150m-at-2b-valuation.html
