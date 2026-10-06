# R4-3: CRE Renewal and Collateral Desk for community lenders

**Date:** 2026-10-06 · **Round:** 4 · **Score: 43/100** · **Verdict: PASS.**

For calibration: SPA/ship-and-debit recovery scored 54 after live verification, most round-1 ideas scored 24-33, and 70+ means genuinely compelling.

The regulatory insight holds up. The CRE appraisal exemption band is real and does not require a licensed appraiser. But the band is mostly worked by salaried in-house staff, so it is not a purchase line. Every layer a vendor could charge for already has a funded or incumbent owner, and the proposed data moat is one that buyers say they will not contribute to. Two narrower variants (sections 11 and 12) are worth at most one scout each. Neither beats 54 on current evidence.

> **One-liner (refined):** The product sits with the credit administrator at credit unions first, then community banks, and covers every CRE loan maturing in the next 12 months. For each loan it does three things:
> 1. Decides, with cited evidence, whether the loan can renew on an *evaluation* (CRE at or below the threshold, or a no-new-money renewal with no obvious and material change) or needs a full appraisal.
> 2. Writes a 48-hour, interagency-guideline-compliant evaluation for the eligible ones, QC'd by a contracted certified-general or MAI reviewer.
> 3. Re-marks the whole CRE book every quarter as an indicative triage tool.
>
> It is sold to the lender, which carries the collateral loss.

> **Evidence key:**
> - **[V]** Verified at search-snippet level, either by earlier agents in this chain or by my one search. No primary page was opened, because WebFetch is egress-blocked.
> - **[M]** From memory, unverified.
> - **[E]** Estimate.
> - **[RP]** Role-played buyer simulation, not real buyer data.
>
> No company or figure is invented. I used **1 of 2** WebSearch calls, to test the strongest pivot (AI marks for small-balance CRE loan pools and M&A diligence). It surfaced Smart Capital Center marketing CRE due-diligence automation, aloan.ai, AI stress-testing consultancies, and a Grant Thornton 2026 piece on "CRE debt is due: are your valuations reliable?". The pivot lane is not empty, and the valuation-reliability problem is getting Big-4 attention.

---

## 1. Verdict and score rationale

**43/100, PASS.**

| Lens | Its score |
|---|---|
| Deep dive | ~45-50 |
| Competition red team | 40-46 |
| GTM red team | ~$15-30M ARR ceiling (pivot otherwise "in the 30s") |
| Feasibility | 38-44 |
| Buyer simulation | 42-47 |

I land at 43. The lenses agree, and each later lens found a new structural problem the deep dive had not priced in.

1. **The cash isn't there [RP/M].** Three paths absorb most "evaluation events" before any money moves:
   - In-house salaried staff do the evaluation.
   - Renewals are often papered with a validity memo on the existing valuation (2010 Interagency Guidelines [M]).
   - Outsourced evaluation fees are often passed through to the borrower [M].

   Buyer simulation found real willingness to pay only at credit unions and small banks with *no* in-house evaluator: $450-700 per unit × 20-80 units a year, about $10-50K [RP]. The community bank with a review officer pays $0 for evaluations [RP].
2. **Every layer is owned [V].**
   - Order routing: LightBox Collateral360 ($221M raised).
   - Credit memo and stress test: Abrigo and nCino.
   - Loan-file inputs (rent rolls, T-12s, renewals): Lama AI (>$20M, live at dozens of community banks, expanded into CRE), Aloan, Crediflow and LenderBox.
   - Licensed appraisal plus the credit-union channel: Bowery (>$80M; Curql on the cap table).
   - AI evaluation and review: ValuationPro.ai, Appraisal-AI and RealQuantum.
   - Portfolio monitoring: Blooma.
3. **The moat is refused [RP].** Two of three simulated buyers would not contribute borrower rent rolls to a consortium, and the regional bank's GLBA/privacy office would kill it. The Sageworks precedent worked because a spreading tool was given away and the data was the bank's own spread output. Sageworks is now Abrigo, the likeliest bundler.
4. **Liability and licensing are open [M].** State appraiser-licensing statutes and USPAP Standard 3 may apply to the contracted MAI reviewer, even though the federal transaction is exempt. That brings back cost and E&O exposure.
5. **The demand is cyclical and partly self-defeating.** The 2025-2027 maturity wall drives urgency. But office and retail stress pushes more renewals past the "material change" test and into full appraisals, which a non-licensee cannot sign.

**What keeps it above the 24-33 pack:**
- It sells to the side that bears the loss.
- It stays in a non-licensed band (verified: $500K for banks under the 2018 rule, $1M for credit unions under NCUA's 2019 rule).
- There are thousands of buyers, not dozens.
- The recurring prevention angle is real.
- The pain is documented in role-play by an exam comment on two office loans.

**Why it does not reach 54.** SPA recovery had cash already owed to the buyer, contingency pricing and a recovered-dollar proof. This idea sells capacity and examiner defensibility against free internal labor, at services margins, through 4-12 month vendor-risk cycles.

---

## 2. Thesis (strongest version)

Do not sell "AI appraisals." Sell the Chief Credit Officer an **examiner-defense collateral desk**.

1. **Exemption check.** A loan-by-loan call on whether each maturing loan can proceed on an evaluation, with a cited evidence trail. This is the least crowded and most examiner-relevant piece: the material-change test on office and retail renewals.
2. **Evaluations.** Written for eligible loans, drafted mainly from the lender's own rent rolls and T-12s, with reviewer QC and an independence attestation.
3. **Quarterly indicative re-mark.** Positioned as triage that routes appraisal spend, not as CECL fair value.

The long-term moat would be a de-identified, small-balance CRE operating-data consortium (sub-$5M, tertiary markets), which CoStar covers poorly. The credit-union-first wedge exploits the $1M NCUA band [V] and CUs' lack of in-house evaluators.

**Corrections the lenses forced on the original scout:**
- Bowery has raised >$80M, not $12M [V].
- The cash TAM is $0.25-0.7B at most, and probably lower.
- AI-native evaluation entrants already exist.

---

## 3. Workflow today

1. **Trigger.** A maturity or reprice, a new small CRE loan, a modification or workout, or an annual review.
2. **Valuation decision.** Credit admin or the appraisal review officer applies the board-approved appraisal policy.
   - Bank exemptions: CRE ≤ $500K [V, 2018 rule]; renewal or refinance with no new money and no obvious and material change [M, 12 CFR 34.43 / 323.3(a)(7)]; business loans ≤ $1M not dependent on real estate income [M].
   - Credit unions: commercial threshold of $1M [V, NCUA final rule effective Oct 22, 2019]. Below it they still need a written estimate of market value from an independent source [V].
3. **Evaluation path.**
   - In-house analyst or review officer: assessor data, comps (CoStar or LoopNet if licensed), the borrower's rent roll and T-12, photos or a drive-by, and a 4-10 page template.
   - Some outsource a "restricted" write-up to a local appraiser for about $600-900 [RP/E].
4. **Appraisal path.** Ordered via Collateral360, Mercury or a panel AMC. Takes weeks and costs thousands [E].
5. **Review.** Every appraisal and evaluation is reviewed against the 2010 Interagency Appraisal and Evaluation Guidelines and the 2016 evaluation advisory. Appraisal-AI and Uptiq are entering this step.
6. **Credit memo.** The value goes into the LOS (nCino, Abrigo, Baker Hill). Lama, Aloan and Crediflow increasingly write the memo.
7. **Portfolio.** 100%/300% concentration tests [M], stress testing (Abrigo, Qualtik, consultants at about $15K/yr [RP/E]) and CECL (fair value for collateral-dependent loans). Values are mostly stale.
8. **Exam.** Common criticisms:
   - unsupported evaluations
   - stale values
   - a missing independence trail
   - no-new-money renewals despite material change (live for office and retail in 2025-26)

---

## 4. TAM

| Layer | Math [E] | Annual |
|---|---|---|
| Evaluation-eligible events | ~250-450K events × $600-1,000 | $150-450M *event value* |
| Outsourced appraisal/evaluation review | ~200-300K × $250-400 | $50-120M |
| Portfolio re-mark subscriptions | 1,500-2,500 lenders × $20-60K | $30-150M |
| **Serviceable total (deep dive)** | | **$0.25-0.7B** |
| **My haircut for cash spend** (in-house labor, validity memos, borrower pass-through) | | **~$0.1-0.3B actually purchasable** |

**Buyer universe:**
- About 4,000 community banks [M].
- About 4,400-4,500 federally insured credit unions, of which 1,500-2,000 do meaningful CRE or MBL lending [E].

**Realistic ACV:** $20-40K at credit unions [RP], $8-20K for a re-mark at community banks [RP], and $25-50K for a triage workbench at $3B+ banks with valuation departments (a few hundred institutions) [RP/E].

**ARR ceiling:** $15-30M as a bank and CU desk [E]. Expansion into SBA lenders (SBA adopted a $500K threshold [V, LightBox snippet]), private credit and loan-sale diligence could roughly double that, but those lanes have their own entrants.

---

## 5. Competitors

| Company | Type | Threat | Funding / scale |
|---|---|---|---|
| LightBox (Collateral360) | Incumbent CRE data plus appraisal/evaluation order management | Bundles an AI evaluation tier at the ordering decision | $221M raised; Battery, Silver Lake [V, PitchBook snippet] |
| Bowery Valuation | Tech-enabled licensed commercial appraiser | Down-market "evaluation SKU"; credit-union channel via Curql | >$80M total incl. $35M Series B (GSAM) and $16.3M extension [V] |
| Lama AI | AI-native commercial LOS and agents for community and regional banks | Already handles renewal and credit files; expanded into CRE | $12M Series A, >$20M total, June 2026; SouthState, Colony, Gate City, Luminate [V] |
| Aloan | AI CRE underwriting for banks and CUs ($500M-$25B in assets) | Rent-roll normalization, DSCR stress, appraisal review, cited memos: one feature from evaluations | Unknown [snippet] |
| Crediflow.ai / LenderBox.ai / Smart Capital Center | AI credit analysis and CRE underwriting | Commodity extraction and memo layer; Smart Capital Center also markets CRE due-diligence automation | Unknown [snippet] |
| Blooma | AI CRE underwriting plus portfolio monitoring for banks and debt funds | Contests the quarterly re-mark and the debt-fund pivot | Unverified [snippet] |
| ValuationPro.ai | AI-native valuation for FIs | "AI-powered, MAI-certified valuations in 10 minutes", the headline product | Unknown [snippet] |
| Appraisal-AI | AI appraisal review (USPAP, BRAVE output) | Owns the review step | Unknown [snippet] |
| RealQuantum | Commercial appraisal and evaluation software | Markets into the NCUA $1M CU band | Unknown [snippet] |
| Uptiq | Lender document AI | Extracts appraisal reports and could draft evaluations | Unverified |
| Abrigo / nCino / Qualtik | Incumbent credit, CECL, stress testing and LOS | Re-mark and benchmark consortium are one feature away; Abrigo owns the Sageworks precedent | Abrigo PE-backed (2,400+ FIs, vendor-sourced, unverified); nCino public |
| Henry AI | AI CRE deal OS | Signals CRE document AI is well funded and commoditized | $16.5M Series A, Jul 2026 [V snippet] |
| Ploti.ai | Geospatial AI agents for banks | Adjacent collateral intelligence | Unknown |
| CoStar, Moody's CRE, MSCI/RCA, Altus, Cherre, Crexi | Data providers | Comps dependency and licensing risk | Large |
| MBL CUSOs; regional appraisers; CBRE/Newmark valuation advisory | Human supply and channel | Credit-union channel that may already sell evaluations: both channel and competitor | Varies |

---

## 6. Wedge and business model (as proposed)

**Wedge:** a free maturity-schedule triage (evaluation-eligible, appraisal-required or watch, each with cited evidence) leading to paid 48-hour evaluations at $500-900. Sold founder-led to 20-30 high-CRE-concentration credit unions found in NCUA 5300 data, then via CUSO and league endorsements.

**Model:** a platform tier of $18-60K a year (re-mark, dashboard, exemption checks, evaluation credits), plus overage evaluations at $500-900 and reviews at $200-350. Reviewer cost is $100-200 per QC.

**What the lenses found instead [E/RP]:**
- Blended ACV is closer to $20-40K.
- Gross margin is 40-55% at early volume once inspection, comps data and E&O are included.
- CAC is $15-25K, with 4-12 month cycles.
- Table stakes before revenue: SOC 2 Type II, a model-risk documentation pack, E&O insurance, and possibly a 50-state licensing review.

---

## 7. What's good

- **Right side of the transaction.** The lender holds the collateral loss and the exam criticism.
- **Non-licensed band, verified.** $500K for banks (2018 interagency rule) and $1M for credit unions (NCUA, effective Oct 22, 2019). Evaluations need not be USPAP appraisals.
- **A real, current, examiner-linked pain** on office and retail renewals ("no obvious and material change"). The exemption decision itself is under-tooled.
- **Credit unions have double the band and often no in-house evaluator.** That partly solves the in-house-substitution problem for that segment.
- **Thousands of buyers**, a larger universe than the earlier "desk" ideas.
- **The bank already owns its rent rolls and T-12s**, so the income-approach inputs are owed to the buyer.
- **The quarterly triage is genuinely recurring** and routes appraisal spend rather than competing with it.

## 8. What's bad, by lens

**Competition**
- Lama AI, Aloan, Crediflow and LenderBox already sit on the loan-file layer.
- LightBox sits on the ordering decision.
- Abrigo and nCino own stress testing and the memo.
- Bowery (>$80M, Curql) owns the licensed layer and the CU channel.
- ValuationPro.ai and RealQuantum already market to the exact band.
- The exemption check is a rules engine, "one feature away" for every one of them.

**GTM**
- Budget mismatch: the CCO owns the risk, but fees pass through to the borrower and the analyst is reassigned, not cut.
- Renewal events are inflated by validity memos.
- Buying committee: CCO, review officer, TPRM, IT security, model risk, sometimes the board.
- Association programs take 12+ months and want a royalty.
- CUSOs are both channel and competitor.
- ACV of $8-40K against $15-25K CAC means 12-24+ month payback.

**Feasibility / liability**
- In the income approach, the value driver is the market cap rate and comps. The bank does not own those, and CoStar does.
- Comps are thin in tertiary small-balance markets, so a cited narrative can look rigorous while the key input is weak.
- State licensing and USPAP exposure for the reviewer [M].
- Vendor E&O for opinions it doesn't sign.
- The exemption decision is the bank's policy judgment and cannot be outsourced.

**Regulatory**
- No 2025-26 proposal to raise the $500K threshold: the band is static.
- The NCUA $1M threshold passed 2-1 with a dissent (Harper) and the ABA objected [V], so reversal risk exists.
- The "SR 11-7 superseded by SR 26-2" claim is unverified (vendor blog).

**Moat**
- Consortium data rights are refused at the pilot stage [RP] and conflict with GLBA and borrower confidentiality.
- Abrigo can build the benchmark faster from data it already holds.

**Founder fit**
- Needs a reviewer network, E&O, SOC 2 and model documentation before meaningful revenue. That is a capital-heavy start for a capital-light technical team.

---

## 9. Buyer-simulation highlights [RP]

All three personas are role-played composites, not real buyers.

- **$1.8B credit union CLO (fits best).**
  - Context: about 40 CRE maturities in 12 months, an exam *comment* on evaluations for two office loans, no in-house appraiser.
  - Would take the free triage immediately. Would pilot per-evaluation at $500-650 for 30-60 units a year (about $20-35K). Would not sign a platform tier until an exam cycle goes clean.
  - Asks: "Who signs it?", an independence workflow, SOC 2 Type II, and removal of the consortium clause.
- **$700M community bank CCO (a no).**
  - "My review officer does these in a few hours; examiners have never written us up."
  - Maybe $8-12K a year for a re-mark if it displaces the stress-test consultant. Fears generating discoverable adverse values. Merger freeze.
- **$6B regional bank head of valuation (wants a different product).**
  - Would buy a *renewal triage workbench* for internal staff at $25-50K a year. Would never outsource value conclusions. Privacy office would kill the consortium.
  - Already pitched by Bowery, the AMC's product and two AI startups.
- **Real-world signal.** Forum and Reddit searches found no practitioner discussion of this pain (weak and negative signal). The NCUA $1M rule and the ABA objection are verified.

---

## 10. Comparison to SPA recovery (54)

| Dimension | SPA recovery (54) | CRE Collateral Desk (43) |
|---|---|---|
| Money source | Cash already owed to the distributor; contingency-priced | Capacity and defensibility against free in-house labor; often borrower-paid fees |
| Proof of value | Recovered dollars | Absence of exam criticism (slow, negative proof) |
| Buyer universe | Hundreds of distributors | Thousands of lenders, but WTP concentrated in ~1,500-2,000 CUs plus a few hundred valuation departments |
| Crowding | Rivvun ($7.55M seed) plus deductions players | Dense: LightBox, Bowery, Lama, Aloan, Abrigo, nCino, Blooma, ValuationPro, Appraisal-AI, RealQuantum |
| Sales cycle | Mid-market distributor, weeks to months | Bank/CU TPRM, model risk, board policy; 4-12 months |
| Margins | Software-like on contingency | Services-grade (40-55% early) |
| Moat | Side-of-transaction plus recurring prevention | Consortium refused; examiner track record slow to build |
| TAM | Narrow | Larger on paper, but the cash-spend TAM is not clearly larger |

**Honest read:** the bigger nominal TAM is illusory, because the purchasable slice is small and contested. It does not beat 54.

---

## 11. First 30 days (only if the founder insists on testing it)

1. **Days 1-10: 15 Mom-Test calls with CU CLOs/CCOs.** Target $1-5B in assets, MBL above 10-15% of assets, high non-owner-occupied CRE, no in-house appraiser (from NCUA 5300 data). Ask:
   - "Who did you pay for a written estimate of value last year, and how much?"
   - "How did you decide which of the next 12 months of maturities can renew without an appraisal?"
2. **Days 5-15: 3-5 MBL CUSO heads.** Find out whether they already write evaluations. If so, they are the buyer, a reseller or the competitor.
3. **Days 5-15: 3 independent certified-general appraisers.** Get actual evaluation write-up prices and volume, and gauge their appetite to be QC reviewers.
4. **Days 10-20: one-hour counsel consult.** Cover state appraiser-licensing and USPAP exposure for the reviewer role in 3 target states, plus the NCUA Part 722 renewal exemption, which is unverified for CUs.
5. **Days 15-30: test both pivots with 5 calls each.**
   - (a) Heads of valuation at $3B+ banks: the triage workbench.
   - (b) Loan-sale advisors, debt funds and bank-M&A diligence teams: small-balance pool marks. Check Smart Capital Center, Blooma and the Big-4 overlap.
6. **Gate.** Proceed only if at least 5 CUs say they paid outside parties for sub-$1M evaluations in the last 12 months **and** at least 2 sign an LOI at ≥ $25K a year or ≥ $500 per unit.

## 12. Kill criteria

- Fewer than 5 of 15 CUs currently pay outside parties for sub-threshold evaluations. That means the work is in-house and there is no budget.
- Per-unit price will not clear about $500 at ≥ 60% gross margin after reviewer, inspection and comps costs.
- MBL CUSOs already provide evaluations to their member CUs at comparable price and turnaround.
- Counsel finds the contracted reviewer's QC is Standard 3 appraisal review requiring state licensure in most target states.
- No pilot will accept a de-identified data-contribution clause. The data moat then cannot form, leaving a commodity desk.
- Lama AI, Aloan, LightBox or Abrigo announce AI evaluation drafting or exemption flags.
- NCUA signals revisiting the $1M threshold.
- The pivots fail too: the valuation-department workbench draws < $25K a year in WTP, or pool-mark buyers already use Smart Capital Center, Blooma or advisory firms at acceptable cost.

---

## 13. Sources

**Regulation**
- https://www.federalregister.gov/documents/2018/04/09/2018-06960/real-estate-appraisals
- https://www.fdic.gov/news/financial-institution-letters/2018/fil18014.html
- https://www.bankersonline.com/topstory/agencies-double-appraisal-threshold-commercial-real-estate-transactions
- https://www.federalreserve.gov/newsevents/pressreleases/files/bcreg20180402a1.pdf
- https://www.federalregister.gov/documents/2019/07/24/2019-15708/real-estate-appraisals
- https://www.maynardnexsen.com/publication-ncua-raises-commercial-loan-appraisal-threshold-to-1-million
- https://bankingjournal.aba.com/2019/07/ncua-appraisal-action-creates-inconsistent-regulatory-standard/
- https://ncua.gov/newsroom/speech/2019/ncua-board-member-todd-m-harper-statement-final-rule-real-estate-appraisals
- https://federalreserve.gov/boarddocs/srletters/2010/sr1016.pdf
- https://www.lightboxre.com/insight/us-sba-officially-adopts-500000-appraisal-threshold/
- https://stratafolio.com/blog/commercial-real-estate-appraisals-explained-what-the-500k-threshold/

**Competitors**
- https://www.connectcre.com/stories/bowery-valuation-completes-35m-series-b-round/
- https://proptechconnect.com/bowery-valuation-raises-16-3m-to-transform-the-commercial-appraisal-process/
- https://pitchbook.com/profiles/company/235919-08
- https://siliconangle.com/2026/06/23/lama-ai-raises-10m-accelerate-automated-loan-originations/
- https://www.calcalistech.com/ctechnews/article/rjmlf1omme
- https://www.valuationpro.ai/
- https://www.appraisal-ai.com/
- https://realquantum.com/realquantum-resource/ncua-appraisal-rule/
- https://www.uptiq.ai/document-ai/commercial-appraisal-report
- https://aloan.ai/guides/best-cre-underwriting-software
- https://aloan.ai/guides/best-commercial-lending-software
- https://aloan.ai/guides/best-ai-underwriting-software
- https://lenderbox.ai/blog-posts/cre-underwriting-software-buyers-guide
- https://smartcapitalcenter.com/blog-post/commercial-real-estate-due-diligence-2026-guide
- https://startupfortune.com/henry-ai-raises-165-million-to-become-the-operating-system-for-commercial-real-estate-deals/
- https://www.crediflow.ai/blog/ai-credit-analysis-community-banks
- https://qualtik.com/
- https://www.ncino.com/solutions/commercial-real-estate
- https://www.ploti.ai/industries/banks

**Market context**
- https://www.grantthornton.com/insights/articles/real-estate/2026/cre-debt-is-coming-due
- https://www.theaiconsultingnetwork.com/blog/ai-loan-portfolio-stress-testing-private-lenders-2026
- https://www.housingwire.com/articles/47899-commercial-real-estate-appraisal-tech-startup-bowery-valuation-raises-12-million/
