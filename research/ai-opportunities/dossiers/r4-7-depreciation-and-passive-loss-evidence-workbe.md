# Depreciation and Passive-Loss Evidence Workbench for CPA Firms

**One-liner:** A recurring workbench sold to CPA firms. It scans the firm's whole 1040 book for cost seg, Form 3115 look-back and partial-asset-disposition (PAD) upside, fulfills studies under the CPA's brand, keeps REPS/STR participation evidence, and allocates recapture at sale. This replaces the original pitch, "AI-drafted $900-2,500 cost seg studies white-labeled through CPAs."

**Verdict: PASS. Score 30/100** (original study pitch about 24; sharpened workbench about 30-34; QPP pivot treated as a separate hypothesis, about 38-42 and unverified). Well below the 54 SPA-recovery benchmark.

Date: 2026-10-06. Round 4, idea 7.

---

## Thesis

The cheap AI cost seg study is already a commodity. Snippet-level price points:
- Cost Seg Smart sells $495 retail, delivered in under 1 hour with no human engineer.
- Its white-label wholesale to CPAs is $795 / $1,195.
- Review sites track about 60 US providers.

Moving up the stack to the CPA workbench does not escape the crowding, because every layer already has someone in it:
- **Book scan:** Corvee, now part of Instead, scans client data against 1,500+ strategies, and Instead gives the software to firms for free. Holistiplan and TaxPlanIQ do similar work.
- **White-label fulfillment:** Cost Seg Smart, Ascend Tax Group, RentalWriteOff (expanded January 2026), Cost Segregation Guys and Unlevered.
- **Recurring evidence layer:** REPSLog, REPS Time, track750, REP Helper, REPSShield, REPStracker, and Overline's study-plus-REPS bundle.
- **Systems of record:** CCH, Thomson Reuters and Bloomberg Tax own the fixed-asset register.

The one real insight is that passive-loss usability, not component classification, decides whether the deduction survives. But that insight is already the marketing line of the REPS-log apps and Overline. Buyer-universe math is about 2-15K relevant CPA firms at a realistic $1-6K ACV, which gives roughly a $5-40M ARR ceiling. Capped, crowded and one feature away.

**Correction to earlier rounds (verified this round):** IRS Notice 2026-16 is real, but it is *not* a "heightened cost seg scrutiny" notice. Treasury and the IRS issued it on Feb 20, 2026 as interim guidance on **Qualified Production Property (§168(n))** ([KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/02/notice-2026-16-guidance-special-depreciation-allowance-qualified-production-property.html), [BDO](https://www.bdo.com/insights/tax/irs-provides-clarity-on-bonus-depreciation-for-qualified-production-property), [EisnerAmper](https://www.eisneramper.com/insights/real-estate/irs-notice-2026-16-qualified-production-property-0326/)). The provider-blog claim was wrong. The audit-risk argument rests on general IRS passive-loss enforcement, not on a specific new notice.

## Workflow today

1. **Trigger.** An investor buys or places in service a rental, STR or small commercial property. The prompt usually comes from a CPA, BiggerPockets or SEO lead-gen.
2. **Quote.** Traditional firms (Engineered Tax Services, KBKG, CSSI, Big 4 and regional specialty groups) charge roughly $3-6K for small residential and $5-25K+ for commercial. Remote and AI providers charge $495-1,295.
3. **Data.** Closing statement, land allocation, photos or video, floor plan, sometimes a site visit.
4. **Analysis.** Component takeoff and unit costs, then classification into 5/7/15/27.5/39-year property per the IRS Cost Segregation ATG.
5. **Filing.** The report goes to the CPA, who enters it in fixed-asset software (CCH, TR Fixed Assets CS, Bloomberg Tax) and files Form 4562. A look-back on prior-year property needs Form 3115 (DCN 7).
6. **Usability.** The loss is usable only under REPS (750 hours plus more than half of working time) or the STR exception (average stay of 7 days or less plus material participation). Hour logs are often reconstructed after the fact, and this is the real audit fault line.
7. **Audit support** quality varies widely by provider.
8. **Sale.** §1245 and §1250 recapture allocation is often neglected.

## TAM (all ESTIMATES unless marked)

| Slice | Volume | Price | Pool |
|---|---|---|---|
| Small residential/STR studies | 150-300K/yr | $500-1,300 (verified floor of about $495) | $75-390M |
| Look-back stock (Schedule E filers, 1-2%/yr) | 100-200K/yr, decaying | same | similar order |
| Commercial/multifamily/new construction | 30-60K/yr | $5-15K | $0.15-0.9B (incumbent-dominated) |
| CPA workbench software | 2-15K relevant firms | $1-6K realistic ACV (buyer sim) | $5-90M |

Realistic small-team ARR ceiling: **$5-40M**. That fails round 3's "larger TAM" goal.

## Competitors

| Name | Type | What they do | Scale/funding |
|---|---|---|---|
| Instead (absorbed Corvee) | AI tax platform for CPAs | Scans clients against 1,500+ strategies and builds plans. Free to firms, charges per agent task | Funding not verified |
| Holistiplan | Return-analysis/planning | Parses a full return in about 45s. About $999-1,999/yr | Widely adopted (review content) |
| TaxPlanIQ / Tax Planner Pro | CPA planning software | Strategy discovery from returns | Not found |
| Cost Seg Smart | Automated provider, CPA white-label | $495 retail. $795/$1,195 wholesale. $200/$400 referral | Not found |
| Overline (overlineiq.com) | AI-native investor platform | Cost seg plus REPS hour tracker plus insurance/financing. Claims 1,000-3,000+ studies | Not found |
| Ascend Tax Group | CPA partner program | 48-hour white-label. Claims $2,700 average partner profit per study (vendor claim) | Not found |
| RentalWriteOff | White-label platform for CPAs | Expanded nationally in Jan 2026 (press release) | Not found |
| Unlevered | Residential cost seg for CPAs | Positions as the quality option against "AI slop" (Accounting Today op-ed) | Not found |
| FreeCostSeg, Cosegra, SegWize, Virtual Cost Seg, Cost Seg Guys, AI Cost Depreciation | Low-cost/DIY/AI providers | $295-1,300 studies | Not found |
| REPSLog, REPS Time, track750, REP Helper, REPSShield, REPStracker | REPS/STR hour logs | Contemporaneous, audit-ready logs with CPA exports. REPSLog is listed on a cost seg partner marketplace | Not found |
| Engineered Tax Services, KBKG, CSSI, KDA | Incumbent engineering firms | Full studies. Publish 2026 audit-risk guides framing cheap AI studies as a liability | Private, national |
| BDO, Grant Thornton, Pease Bell, Boyer & Ritter | CPA specialty groups | In-house post-OBBBA cost seg, so part of the channel competes | Large |
| CCH, TR Fixed Assets CS, Bloomberg Tax | Systems of record | Own the register and Form 4562, so they are one feature away | Enterprise |

## Wedge and model (as proposed)

- **Wedge:** a book scan for 20-50 real-estate-heavy CPA firms before the 2027 filing season, with studies fulfilled at commodity cost and a client-facing hour-and-stay evidence log.
- **Model:** firm subscription at $3-15K/yr (the buyer sim says $1-5K, or a one-time $2-5K project), studies at $400-800 wholesale, and evidence at $150-500 per client per year (the buyer sim says firms want a flat $1-2K firm license instead).

## What's good

- It sells to the taxpayer, the side that keeps the benefit. No license is the scarce asset.
- The OBBBA change is verified: 100% bonus depreciation is permanent for property acquired after Jan 19, 2025 ([KBKG](https://www.kbkg.com/feature/obbb-tax-bill-makes-100-bonus-depreciation-permanent-what-you-need-to-know)). That makes the study an immediate, sellable cash event.
- The insight is correct: usability (REPS/STR evidence) matters more than classification, and contemporaneous evidence can't be reconstructed later.
- Data access is not a barrier. Holistiplan shows that parsing return PDFs is enough.
- The recapture and PAD back end is under-marketed.
- The **QPP adjacency is real and freshly verified.** Under §168(n), the window is construction start between Jan 19, 2025 and Jan 1, 2029, placed in service before 2031. There is a 95% de minimis physical-space test and **10-year recapture** if production use stops ([Venable](https://www.venable.com/insights/publications/2025/12/new-immediate-expensing-of-qualified-production), [EisnerAmper](https://www.eisneramper.com/insights/manufacturing-distribution/qualified-production-property-manufacturing-facility-deductions-0825/)). The search returned only CPA and law-firm content, with no AI-native QPP specialist (snippet-level; absence not proven).

## What's bad, by lens

- **Competition:** Every layer is occupied (scan, study, white-label, evidence, system of record). There is no funded AI-native leader, which more likely signals a commoditized category than an open lane. The trade press is turning against AI-generated studies ("AI slop" op-ed in Accounting Today).
- **GTM:** CPA software budgets are anchored at about $1-2K/yr (Holistiplan). CAC for small firms runs $2-5K against $1-3K ACV. The evaluation window is May to December, and we are in the Oct 15 extension crunch now. Channel conflict with in-house specialty groups. A B2C fallback means a paid-search war against provider-owned review sites.
- **Feasibility/liability:** Photo and LiDAR takeoffs miss behind-wall MEP, which is weaker than the ATG "detailed engineering" approach. Non-signing preparer exposure under §6694 (from memory; confirm). The STR-loophole buyer is exactly the IRS passive-loss target. §7216 consent friction applies to using return data for upsell (needs counsel review).
- **Unit economics:** The price floor is set by no-engineer automation, so engineer review is pure cost. Firms prefer revenue share, which pulls the model back to transaction economics.
- **Renewal:** Look-back value is front-loaded in year one. Evidence churn is likely 30-50% as clients stop qualifying.
- **Lessons failed:** "one feature away," buyer-universe cap, and "commodity architecture with no side/data/rail moat."

## Buyer-simulation highlights (role-play, not observed)

- **STR/REPS niche CPA:** "The study is the easy part... what keeps me up is March," meaning the hour log a client built in one night. Would not buy the book scan, and would not switch study vendors over $100-200. Might pay about $1.5K/yr for a firm license with unlimited client seats, but only for auto-ingestion of Airbnb/VRBO and property-manager data plus a year-end "thin log" dashboard. Warns that AI-generated logs look "reconstructed."
- **40-person regional generalist:** "My problem isn't finding opportunities, it's capacity." Would pay $2-5K once for a scan, rejects $10K/yr, and wants revenue share. Raised §7216 consent, SOC 2 and malpractice concerns ("we flagged it and did nothing"). Most of their clients are passive W-2 investors, so the "benefit" turns into suspended losses.
- **Top-100 real estate group:** Not a buyer. Its deals need full engineering studies, and its real pain is §704(c)/754 tracking, which is a different product.
- **WTP synthesis:** blended about $3-6K per firm per year. Even 1,000 firms would reach only about $5M ARR.

## Comparison to SPA recovery (54)

It does not beat SPA. SPA had a sharper money-losing buyer (distributors leaking claim dollars), recovery tied to owed contractual money, a modest crowd (Rivvun and others), and a measurable ROI per account. This idea has:
- a more crowded field (20+ named occupants against SPA's handful);
- price set by the cheapest competitor rather than by value;
- a vitamin-like core product for generalist firms ("capacity, not pipeline");
- a similar or lower ARR ceiling.

The only higher-upside thread is the QPP pivot, which is a different business: industrial, engineering-signed, enterprise sales and time-boxed to 2029-2031, with worse founder fit. Its honest pre-validation score is about 38-42, still below 54.

## First 30 days (only if someone insists on testing)

1. Days 1-10: Hold 10 Mom-Test calls with STR-niche CPAs (the kind that publish REPSLog how-tos). Ask: "When did a weak log last cost a client a loss, and what did it cost you?"
2. Days 1-10, in parallel: Hold 5 calls with tax partners at 20-60-person generalist firms. Ask: "How many cost seg or 3115 conversations did you start last season, and what blocked more?"
3. Days 10-20: Test QPP separately with 3-5 Big 4/regional QPP practice leads and 3 manufacturing CFOs. Ask whether 10-year use-change recapture monitoring is a real, budgeted worry, and who does the production/non-production space split today.
4. Days 20-30: If and only if a specific, costly, recent incident recurs, prototype a reservation-data ingestion and thin-log dashboard on 2 firms' anonymized data. Otherwise kill and move on.

## Kill criteria

- Fewer than 3 of 10 niche CPAs can name a recent, costly loss of a deduction because of weak participation evidence.
- Generalist partners say "capacity, not pipeline," or won't pay at least $3K before seeing results.
- §7216 counsel review says per-client written consent is required for a book scan (onboarding friction kills the wedge).
- Instead, Holistiplan or CCH/TR ships a cost seg candidate flag plus a partner marketplace (likely).
- For QPP: practice leads say incumbents already cover space allocation and recapture monitoring, or the deal count is under about 1,000 facilities per year.

## Sources

- https://www.cosegra.com/
- https://www.technology.org/2026/10/05/made-money-on-ai-stocks-how-cost-segregation-could-lower-that-tax-bill/
- https://costsegsmart.com/partners/
- https://costsegsmart.com/research/benchmarks-2026/
- https://overlineiq.com/cost-segregation
- https://overlineiq.com/reps-material-participation-tracker
- https://overlineiq.com/blog/why-cost-segregation-is-a-bad-idea
- https://freecostseg.com/resources/blog/cpa-guide-cost-segregation/
- https://www.ascendtaxgroup.com/
- https://www.barchart.com/story/news/37328829/rentalwriteoff-expands-white-label-cost-segregation-platform-for-cpas-serving-residential-real-estate-clients-nationwide
- https://costsegregationguys.com/white-label-cost-segregation-services-for-cpas/
- https://www.accountingtoday.com/opinion/ai-slop-is-flooding-the-cost-segregation-industry
- https://corvee.com/products/tax-planning-software/
- https://www.instead.com/solutions/cpa-firms
- https://unclekam.com/tax-strategy-blog/corvee-tax-planning-review-2026-guide-for-solo-cpas/
- https://checkthat.ai/brands/holistiplan
- https://www.taxplaniq.com/
- https://taxplannerpro.com/
- https://www.reps-log.com/
- https://www.recostseg.com/partners/repslog
- https://www.investorfriendlycpa.com/post/how-to-track-hours-for-reps-and-the-str-loophole-with-repslog
- https://repstime.com/
- https://track750.tax/
- https://engineeredtaxservices.com/irs-cost-segregation-audit-risk-a-2026-strategic-compliance-guide/
- https://www.kbkg.com/feature/obbb-tax-bill-makes-100-bonus-depreciation-permanent-what-you-need-to-know
- https://www.bdo.com/insights/tax/one-big-beautiful-bill-act-expands-100-depreciation-expensing-opportunities
- https://pro.bloombergtax.com/insights/fixed-assets/bonus-depreciation-strategy-for-2026-and-beyond/
- https://kpmg.com/us/en/taxnewsflash/news/2026/02/notice-2026-16-guidance-special-depreciation-allowance-qualified-production-property.html (verified this round)
- https://www.bdo.com/insights/tax/irs-provides-clarity-on-bonus-depreciation-for-qualified-production-property (verified this round)
- https://www.eisneramper.com/insights/real-estate/irs-notice-2026-16-qualified-production-property-0326/ (verified this round)
- https://www.venable.com/insights/publications/2025/12/new-immediate-expensing-of-qualified-production (verified this round)
- https://www.eisneramper.com/insights/manufacturing-distribution/qualified-production-property-manufacturing-facility-deductions-0825/ (verified this round)
