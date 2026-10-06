# ACV Check: Total-Loss Valuation Audit for Lenders, GAP Issuers and Drivers

**One-liner:** An agent that rebuilds an insurer's CCC One, Mitchell or Audatex total-loss valuation line by line. It checks trim and options from the VIN build, the mileage curve, condition deductions, comps, and PSA/TNA-type markdowns. It writes a cited rebuttal and, when needed, builds an appraisal-clause package. It was pitched as an "ACV assurance" portfolio service for GAP administrators and auto lenders, with a free consumer "Valuation X-ray" as the front door.

**Verdict: PASS. Score 39/100.** That is below the SPA recovery benchmark (54) and just above the round-1 cluster (24-33). The pivots that survive (a non-GAP lender deficiency desk, or GAP-claim adjudication SaaS) reach about 40-44 at best. None of them gets to 54.

Date: 2026-10-06. Pipeline: scout (b2c-agents), then deep dive, then red team (competition, GTM, feasibility), then buyer simulation, then managing-partner verdict. The verdict step ran no new searches. Evidence comes from earlier stages, mostly at snippet level, and is labelled as such below.

---

## Thesis (strongest honest version)

The problem is real and the evidence is strong:
- **Underpayment follows a pattern.** Carrier-configured markdowns have been priced in class settlements: Mitchell's Projected Sold Adjustment (PSA) and CCC's Typical Negotiation Adjustment (TNA). Settlements include Progressive CO ($15.24M, paying 68% of the PSA impact), Progressive AL (Reynolds, about $30.75M, 100% of the PSA impact), another Progressive settlement ($13.8M) and State Farm AR ($15.6M). The Alameda County DA has alleged that carriers and the vendors built customized CCC/Mitchell configurations that misstate ACV.
- **Volume is growing.** CCC Crash Course 2026 reports total-loss frequency at a record 23.1% of claims (verified).
- **The insight is correct.** On an underwater financed car, a lowball ACV moves loss from the P&C carrier to whoever backs the GAP waiver. On non-GAP loans it moves to the lender, as an uncollectible deficiency.

The idea fails because each party that loses money is blocked from recovering it, or is already served:

1. **The GAP side is contractually locked, and the dominant administrator already ships the feature.**
   - Sample addenda (E-Central CU, NWFCU, Heritage FCU/Allied, Ascent, GMC GAP) define the GAP amount off the primary carrier's settlement. The appraisal clause belongs to the insured.
   - Allied Solutions, the named administrator on the sample CU addenda, markets **EZ Claim** as "the audit provider and actual cash value reviewer for non-repossessed total loss claims ... regardless of the lending channel" (snippet-level, page not fetched).
   - The buyer that actually bears the loss is a few dozen administrators, CLIP insurers and dealer-owned reinsurers, not 4,500 credit unions.
2. **The fee-based negotiation is the licensed act.**
   - Texas Insurance Code ch. 4102 requires a public adjuster license and caps PA fees at 10%.
   - Florida s.626.854 requires a license and caps fees at 20% (10% in emergencies).
   - Both are snippet-level; no auto carve-out was found.
   - "Evidence layer, not licensed signer" does not hold here. The negotiation itself is regulated, not only the signature.
3. **The consumer front door is commoditized and has a price anchor.**
   - SnapClaim sells an AI-plus-certified-appraiser total-loss rebuttal for a $350 flat fee in under an hour, on the same SEO terms.
   - Any driver can upload a CCC PDF to a general LLM.
   - Total loss is a one-time event, so there is no retention.
4. **The rules-detectable errors are being litigated away.**
   - PSA/TNA are the easy wins, and class settlements and enforcement are removing them from carrier configurations.
   - Some courts have upheld PSA-type methods.
   - What is left (trim, options, condition, comps) depends on evidence the agent lacks, such as carrier photos and condition codes, and needs licensed listing data.

## Workflow today

**Claim side**
1. The carrier declares a total loss.
2. The valuation runs in CCC One, Mitchell WorkCenter Total Loss or Audatex Autosource: VIN decode, options, mileage, condition, and comps with PSA/TNA-type adjustments.
3. The offer goes out, often without the full report unless the insured asks.
4. The insured accepts (the majority), haggles, or hires a flat-fee appraiser: SnapClaim at $350 (verified), or Total Loss Champions, Auto Praise, Appraisal Engine, IAS Claims Network or St Lucie.
5. The insured invokes the appraisal clause: each side names an appraiser, an umpire breaks ties, costs are usually split.
6. Other routes: DOI complaint, attorney, class action.
7. The carrier pays the lienholder first and any excess to the insured.

**GAP / lender side**
8. If payoff exceeds ACV, a GAP claim goes to the administrator (Allied, Classic Trak, CARS Protection Plus, Ascent, SWBC, Safe-Guard, GWC, Protective). This usually happens after the primary settlement, in the 30-60 day window (snippet).
9. GAP adjusters do eligibility and arithmetic: payoff minus primary settlement, minus deductible over the cap, minus past-due amounts and refundable add-ons. Job posts from SWBC, GWC, Protective and a lender-GAP role in Norcross GA describe exactly this.
10. Any "audit of the primary settlement" today is mostly pointed at the borrower: prior-damage clawbacks and excluded fees. Allied EZ Claim is the exception, an ACV review aimed at "increased recovery."
11. With no GAP, the lender (as loss payee) receives a short check and charges off or chases a deficiency.

## TAM

All figures are estimates unless marked verified.

| Segment | Pool (est.) | Notes |
|---|---|---|
| US total-loss settlements | ~$50-100B/yr | ~4-5.5M losses × $12-18k ACV. Not verified. Frequency of 23.1% is verified. |
| B2C contingency pool | ~$60-240M/yr before licensing | Shrinks sharply because (a) the TX fee cap is 10%, (b) on underwater loans the uplift goes to the lienholder, leaving no cash to take a fee from, and (c) full-GAP borrowers do not engage. |
| GAP administrator line | ~$40-110M/yr pool. Realistic ceiling ~$5-15M ARR | Few dozen buyers. Buyer-simulation price is $10-25 per audited claim or 15-20% of verified reduction. The pitch assumed $50-125. |
| Non-GAP lender deficiency | Unknown | The only configuration where incentives line up. Hundreds of lenders. Per-CU revenue is ~$6-25k/yr, so it needs a CUSO or league channel. |
| **Combined realistic SAM** | **~$100-250M/yr in fees** | Realistic ARR path is ~$5-20M, which is the familiar "desk" ceiling. |

## Competitors

| Name | Type | What they do | Scale / evidence |
|---|---|---|---|
| Allied Solutions EZ Claim | Incumbent CU GAP administrator (direct B2B) | Total-loss ACV audit and review for FIs "to help increase recovery regardless of the lending channel" | Snippet-level: alliedsolutions.net/solutions/manage-risk/EZ-Claim/. Named administrator on the Heritage FCU addenda. |
| SnapClaim | AI-assisted consumer appraisal (direct B2C) | AI plus certified appraiser total-loss and DV reports in under an hour. SEO on "CCC total loss offer." | $350 flat fee (snippet-verified). No venture round found. |
| Total Loss Champions, Auto Praise, Appraisal Engine, IAS Claims Network, St Lucie Appraisal, totallossappraisals.com | Human flat-fee appraisers | Rebuttal valuations; act as the insured's appraiser | Small private firms. Some are licensed MV damage appraisers in states that require it. |
| Licensed public adjusters | Statutory advocates | The only non-attorneys allowed to negotiate for a fee in TX/FL | TX 10% cap, FL 20% cap (snippet) |
| Auto-claim attorneys and class-action bar; AG/DA offices | Alternative recovery channel | Capture systematic PSA/TNA value through settlements | $13.8M-$30.75M per settlement (verified) |
| CCC (NASDAQ: CCCS), Mitchell/Enlyte, Audatex/Solera | Carrier-side valuation | Produce the valuations. They will not audit against carriers but can reconfigure their tools. | Public / PE-owned |
| Safe-Guard, SWBC, Classic Trak, CARS Protection Plus, Ascent, GWC, Protective | GAP administrators | Likely buyers, and likely to build it themselves (Allied already has) | Scale not verified |
| GoSuits, Total Loss Toolkit | Consumer self-help content and tools | SEO competition on GAP and total-loss queries | Unknown |
| Avallon Labs, XBuild, Tractable | Carrier-side claims AI | Wrong side of the transaction. Confirms carrier-side crowding. | XBuild $19M (from brief, not re-verified) |

## Wedge & model (as pitched)

- **Front door:** a free "Valuation X-ray." Upload a valuation PDF and get flagged adjustments, a dollar range and a cited rebuttal.
- **Revenue lines:**
  - 20-25% consumer contingency when the system runs the negotiation or appraisal.
  - Per-claim fees or a savings share from GAP administrators and lenders, after a 90-day back-test on closed claims.
  - Later, carrier-by-state benchmark data.
- **Moat claims:** an outcomes database, a cooperation/assignment clause written into GAP addenda, and an appraiser and PA network.
- **Assessment:** the report is not a moat. The clause is the only defensible piece, and Allied already sits in that position for CU GAP.

## What's good

- The problem is real and quantified. Patterned underpayment has been confirmed by several eight-figure class settlements and a DA action.
- There is a volume tailwind: record 23.1% total-loss frequency (CCC 2026).
- Side of transaction is correct in principle. It never sells to the carrier, and CCC/Mitchell/Audatex structurally cannot offer it.
- Founder fit is good for the technical work: document parsing, pricing data and rules. Audit cost per file is under $5.
- The non-GAP lender deficiency configuration has aligned incentives:
  - The borrower owes the deficiency, so they want a higher ACV.
  - The lender is loss payee, so the uplift arrives automatically.
  - The carrier's payoff request is an early trigger, before the dispute window closes.
- Settlement notices are a free public specification of which carrier, state and period used which markdown.

## What's bad, by lens

**Competition**
- Allied EZ Claim already bundles ACV audit into CU GAP claims intake. This is the "one feature away" pattern, except the feature has already shipped.
- SnapClaim owns the AI-assisted consumer price point ($350).
- Human appraisers are the signers you would depend on, which gives them leverage.

**GTM**
- The GAP buyer measures itself on cycle time and complaints under CFPB/AG scrutiny, not on loss ratio.
- The loss-ratio benefit goes to dealer reinsurers and CLIP carriers.
- Changing one clause in the addendum is a cheaper substitute than buying an audit.
- The GAP claim arrives after settlement, which is too late to dispute.
- Underwater B2C files have no cash to collect a fee from.
- A total loss is a one-time event, so there is no retention.

**Feasibility and regulation**
- Contingency negotiation is public adjusting in TX (10% cap) and FL (20% cap).
- MV damage appraisers need a license in several states.
- Individualized demand letters raise UPL questions.
- Holding a GAP claim for audit creates UDAAP and delay exposure.
- Comp rebuilding needs licensed listing data (MarketCheck, J.D. Power/NADA, Black Book). Scraping breaks terms of service.

**Durability**
- Backward-looking contingency decays: PSA/TNA are being litigated out.
- The remaining disputes need lots of evidence and depend on carrier photos and condition codes.

**Buyer universe**
- The GAP side is a few dozen concentrated buyers who can build it themselves or squeeze the take rate.
- The CU lender side is hundreds of buyers at about $6-25k a year each.

## Buyer-simulation highlights

These are invented composite personas, not real interviews.

- **GAP claims director (SWBC/GWC-like administrator):** "The contract says ACV is what the primary carrier says it is." They would try a free back-test on closed claims. They would never accept anything that lengthens cycle time. The only flow they would consider is a soft borrower notice plus true-up. Realistic price is $10-25 per claim; $50-125 got a "No."
- **CU consumer lending / collections VP ($2-4B TX/FL CU):** lukewarm yes on contingency-only recovery of non-GAP deficiencies, provided there is no member friction and no staff time. No on GAP ("the administrator's problem"). They would put a free X-ray link in total-loss member letters, which makes the CU a channel rather than a payer.
- **Underwater non-GAP Houston borrower:** yes to free and yes to "nothing unless you get more." They would not pay $99-149 upfront. Full-GAP borrowers would not engage at all.
- **Mom-Test negative signal:** no unprompted B2B complaints about ACV leakage were found anywhere public.

## Comparison to SPA recovery (54)

SPA recovery scored 54 because:
- The buyer (the distributor) owns its claim data outright.
- The recovery flows back to the buyer directly.
- No license is needed.
- The flow recurs with every below-cost shipment.

ACV Check fails all four:
- The data and the appraisal right belong to the insured, not the B2B buyer.
- The party that keeps the recovery depends on the configuration. Only the non-GAP lender gets it cleanly.
- The core action (fee-based negotiation) is licensed in the launch states.
- For consumers the flow is a one-time event. For the GAP issuer it is recurring, but the leading administrator already ships the audit.

TAM headline is larger than SPA's, but realizable ARR is similar or lower (about $5-20M), with more regulatory drag. **It does not beat 54.**

## First 30 days (only if the founder insists on testing the surviving pivot)

1. **Week 1:** Five calls to recovery or collections heads at TX/FL CUs and independent subprime lenders. Ask:
   - How many non-GAP underwater total losses do you have per year?
   - What is your deficiency recovery rate?
   - Do you receive the valuation PDF, or only a check?
   - Would you forward carrier payoff requests?
2. **Week 1-2:** One call to Allied Solutions about EZ Claim to learn its scope, pricing and whether it covers non-GAP. Ask whether it would buy a white-label engine or partner. Also call one non-Allied administrator (SWBC or Safe-Guard) and ask for 12-24 months of closed claims with valuation PDFs under NDA.
3. **Week 2:** Legal memo, one or two days of outside counsel. Does a lender-sponsored, borrower-signed appraisal demand, with the vendor paid by the lender (not a contingency on the insured's claim), fall under TX ch. 4102 or FL s.626.854? Also cover MV appraiser licensing in target states.
4. **Week 3-4:** If data is shared, run the back-test. Exclude PSA/TNA findings and measure:
   - the share of files with a supportable uplift of $1k or more
   - the median uplift
   - net expected value after appraisal and umpire costs
5. **Decide at day 30** against the kill criteria below.

## Kill criteria

- Two or more administrators or lenders refuse to share closed-claim valuation files under NDA.
- Allied EZ Claim (or an equivalent) is confirmed to cover non-GAP lender deficiency files at a low or no fee.
- The back-test shows fewer than 10% of files with a realizable $1k+ uplift once PSA/TNA findings are excluded, or a median net uplift under about $800 after appraisal costs.
- Counsel concludes the lender-paid escalation model still requires a PA license in TX or FL.
- Lenders confirm they receive only a check, no valuation PDF, and will not forward payoff requests before settlement.
- Per-lender recovered dollars come in under about $50k a year, which is too small to support a sales cycle without a CUSO or league channel.

## Sources

Verified at snippet level in earlier stages; no pages fetched in the verdict step.
- https://www.cccis.com/news-and-insights/posts/ccc-crash-course-2026-report-finds-higher-severity-and-record-total-loss-frequency
- https://www.claimspages.com/news/auto-claims-severity-rises-as-total-loss-frequency-hits-record-23-percent-ccc-finds-20260413/
- https://www.propertycasualty360.com/2025/03/26/138m-settlement-reached-in-progressive-total-loss-class-action/
- https://openclassactions.com/settlements/curran-progressive-colorado-total-loss-class-action-settlement.php
- https://www.altotallossclaim.com/
- https://www.autobodynews.com/news/state-farm-to-pay-15-6m-to-settle-arkansas-class-action-over-total-loss-valuations
- https://www.insurancebusinessmag.com/us/news/claims/progressive-escapes-class-action-over-totalloss-vehicle-valuation-method-572281.aspx
- https://www.alliedsolutions.net/solutions/manage-risk/EZ-Claim/
- https://snapclaim.com/ccc-total-loss/
- https://snapclaim.com/snapclaim-review/
- https://aijourn.com/snapclaim-revolutionizes-diminished-value-appraisals-with-ai-driven-reports/
- https://www.totallosstoolkit.com/knowledge-base/insurers-on-trial-total-loss-valuation-lawsuits-2025-2026
- https://www.ecentralcu.org/docs/default-source/default-document-library/sample-gap-waiver-v2.pdf?sfvrsn=2
- https://www.nwfcu.org/files/GAPwaiveraddendum.pdf
- https://heritagefcu.com/wp-content/uploads/2020/09/GAP-Waiver-325-Allied-Solutions.pdf
- https://www.classictrak.com/wp-content/uploads/2023/07/GAP-WAIVER-CLAIM-PROCEDURES-7.23.pdf
- https://carsprotectionplus.com/wp-content/uploads/2024/01/CARS-GAP-Program-2024-Guide-V3.pdf
- https://ascentadmin.com/wp-content/uploads/2025/06/APEX-AAS-GAP-COMM-125-06.2024-6.25.2024-SAMPLE.pdf
- https://www.gmc.com/content/dam/gmc/na/us/english/index/owners/protection/protection-visid/gap/gmc-gap-sample-contract.pdf
- https://www.dealerleadtrack.com/PDF/GAP_Sample_Contract.pdf
- https://nationalautoclaimsauthority.com/gap-insurance-claims-process/
- https://www.tdi.texas.gov/tips/public-adjusters.html
- https://www.flsenate.gov/laws/statutes/2023/626.854
- https://www.indeed.com/viewjob?jk=79302caa698df619
- https://careers.greatersatx.com/companies/swbc-2/jobs/66241668-claims-processor
- https://www.tealhq.com/job/gap-claims-adjuster_5b861594-a2f4-4abb-8704-6aaeba3f1339
- https://www.tealhq.com/job/gap-theft-claims-administrator-i_7ea1a3745936a0e3774340a707e59aa636767
- https://lawinsider.com/dictionary/primary-insurance-settlement
- https://gosuits.com/knowledge-base/how-gap-insurance-works-after-a-total-loss-gosuits/
- https://totallosschampions.com/blog/what-is-the-appraisal-clause
- https://www.insurancebusinessmag.com/us/news/technology/quick-everyone-lets-make-an-insurance-ai-startup-581088.aspx
