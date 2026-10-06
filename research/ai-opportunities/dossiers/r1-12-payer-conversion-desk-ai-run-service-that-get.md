# Payer-Conversion Desk: AI for long-term-care Medicaid eligibility

**One-liner:** AI-enabled tooling and service that takes a nursing-home resident from "Medicaid pending" to approved and paid. It covers the 60-month lookback, caseworker requests for information (RFIs), managed-LTSS plan enrollment, and capture of the resident's patient-pay income. The revised wedge sells the workbench to the eligibility firms and elder-law practices that already own the work, rather than selling outcome-priced services to cash-poor SNFs.

> **Research caveat:** No claim here could be web-verified. The shared WebSearch budget of 200 per turn was used up, including two spot-check searches attempted at the verdict stage, and WebFetch was egress-blocked for the deep dive and all three red-team agents. Everything comes from model knowledge (cutoff mid-2026) plus reasoning. Verify the items listed under Unresolved questions before spending money.

## Verdict: PROMISING WITH PIVOT, 42/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | About $0.65-1.0B in SNF application services. Broad TAM, adding HCBS and hospitals, about $1.0-1.4B |
| Pain intensity | 6 | Real pending AR ($200-600k per facility, est.). Much of it is a cash-timing problem, not lost money |
| Whitespace | 6 | No AI-native confirmed in LTC Medicaid. Incumbents are labor-based |
| AI leverage | 5 | Statement classification is commodity. The bottlenecks are records access, families and counties |
| GTM feasibility | 4 | Slow, credit-risky SNF buyers. Attribution fights over outcome fees. Relaunch for every state |
| Defensibility | 3 | PointClickCare bundling. Incumbents can bolt on the same APIs |
| Founder fit | 4 | Needs a veteran caseworker, UPL (unauthorized practice of law) counsel and state playbooks. Not credential-gated, but domain-heavy |

## Revised thesis
The pitch "OBBBA makes every week of delay permanent loss" is mostly wrong. Retroactive eligibility counts back from the **application month**, and most states will date a minimal signed application. A business office that files a placeholder on day one loses almost nothing under the new 2-month rule. OBBBA cuts retro coverage from 3 to 2 months for aged and disabled applicants, from about January 2027. The 1-month figure applies to expansion adults.

The money that is really recoverable sits in three places:
1. **Denial and refile cycles** caused by missed 10-day RFI deadlines or incomplete lookbacks. These now cost an extra month each.
2. **Patient-pay leakage**: income spent by families during the pending period, which the facility cannot collect because third-party guarantees are barred (42 CFR 483.15).
3. **Second-stage pendings**: managed-LTSS plan enrollment and authorization, broken Miller-trust (QIT) funding, and the must-bill crossover needed to claim Medicare bad debt.

The best entry is **not** outcome-priced service to SNFs. It is a **lookback-and-RFI workbench sold per file ($75-250) to regional eligibility firms (the Senior Planning Services type) and elder-law practices**. Those buyers already hold the UPL posture, the authorized-representative relationships and the volume. They feel the labor pain directly and buy quickly. That builds the asset that does compound: county-level caseworker-behavior data across many states.

Phase 2 has two options: acquire 1-2 eligibility firms and run them at AI margins, or sell "placement-ready Medicaid files" to hospital case management, priced per avoided boarding day. A post-approval compliance subscription for SNFs (renewals, QIT funding alerts, patient-liability capture) adds recurring revenue. On its own this is a credible $10-40M ARR business. It becomes venture-scale only with a roll-up or a fintech layer that buys pending AR priced by approval probability.

## How the work is done today
- **Who does it:** the facility's Business Office Manager (BOM), paid about $50-70k, high turnover, with Medicaid work about 20-40% of the job. Chains add regional Medicaid coordinators. Complex files go to facility-paid eligibility firms (often free to the family) or to family-paid elder-law attorneys ($3-10k+).
- **Steps:** screen assets → spend-down → set up a QIT in about 20+ income-cap states → collect 60 months of statements → explain each transfer → file in the state portal or on paper → loop through RFIs on about 10-day deadlines → approval and patient-pay amount → MCO enrollment in managed-LTSS states → annual renewal.
- **The bottleneck is records, not analysis.** Banks keep about 18-24 months online and Plaid returns about 24 months. Older statements need a request from the account holder or POA, plus fees. Residents are often cognitively impaired. Adult children may be uncooperative, or may be hiding misuse of the parent's money.
- **Volume:** about 400k applications a year, roughly 27 per facility (deep-dive estimate). About 35-50% are complex.

## TAM (estimates)
- New SNF applications: 400k × $1,000-1,500 = **$400-600M**
- Renewals: about 720k residents × $150-250 = **$110-180M**
- Contingency recovery plus managed-LTSS follow-through: **$120-180M**
- Adjacent HCBS and waiver applications **$150-300M**, B2C kits **$50-150M**
- SAM: 6-8 document-heavy states, chain-operated facilities, about **$110-120M**. 5-year SOM: about **$20-35M ARR**.
- **GTM skeptic's correction:** realistic ACV is about $20-25k per facility, not $35-60k. The workbench pivot makes the take per file smaller, but customer acquisition cost falls sharply.

## Competitors

| Name | Type | Notes |
|---|---|---|
| Senior Planning Services | Incumbent | NE facility-paid LTC application firm. Already uses outcome-aligned pricing. Scale unverified |
| Single-state application shops (e.g., Medicaid Done Right) | Incumbent | County caseworker relationships. Best as customers or roll-up targets |
| Elder-law attorneys (NAELA), Krause Financial | Incumbent | Own complex files and QIT drafting, which is UPL-gated |
| Zimmet, Harmony, CLA, Forvis Mazars, Eide Bailly | Consultants | Hold the CFO relationship and AR-cleanup budgets |
| PointClickCare; MatrixCare, WellSky, Netsmart | Platform risk | Own the payer-change and MDS triggers and could bundle |
| Firstsource/MedAssist, R1, Ensemble, Conifer, Experian Health | Adjacent | Hospital contingency Medicaid conversion; block the hospital channel |
| WellSky CarePort, naviHealth, Aidin, Ensocare | Discharge rail | Own hospital-to-SNF referral workflows |
| Fortuna Health | AI-native (adjacent) | MAGI and community Medicaid navigation; could extend to LTC |
| Infinitus, SuperDial, AKASA, Thoughtful | AI-native RCM agents | Same agent primitives; not known to target LTC |
| Ocrolus, Heron, Inscribe, Plaid | Enabling tech | Commoditize statement classification |
| Carefull, Waterlily, A Place for Mom | Family channel | Own the adult-child moment and, in Carefull's case, the bank data |

## Why now
- OBBBA (P.L. 119-21, signed 2025-07-04): retro coverage cut to 2 months (aged and disabled) from about 2027. Home-equity cap about 2028. The 2024 eligibility-and-enrollment simplification rule is frozen until about 2034, so paperwork stays heavy.
- States are short of caseworker capacity after the unwinding.
- BOM turnover keeps destroying Medicaid knowledge.
- Operators are under DSO pressure from PE and REIT owners, and bankruptcies keep coming: Petersen 2024, LaVie 2024, Genesis reportedly 2025.
- The 85+ population is growing fast.
- Vision LLMs read phone photos of statements, deeds and award letters.

## Wedge and business model
1. **Workbench, months 0-12.** Lookback ledger, transfer flags, draft explanation letters, a state packet pre-fill, an RFI deadline tracker, and a family document portal with consented outreach. Sold to 10-30 eligibility firms and elder-law practices in NJ and PA (the 60-month statement culture) at $75-250 per file or per seat.
2. **SNF compliance layer.** Renewals, QIT funding alerts, rep-payee setup and patient-liability capture, priced per Medicaid resident per month. Expect pushback toward $3-10, not $15-25.
3. **Optional.** Roll up one eligibility firm, or sell placement-ready files to hospitals.

Do **not** take payment out of Medicaid remittances, and do not bill a percentage of collections while handling the payment flow (42 CFR 447.10 risk).

## What's good
- A real, unglamorous, under-tooled workflow. No AI-native was confirmed in LTC Medicaid.
- Approval unlocks hidden value: the per diem, plus patient-pay, plus Medicare bad-debt recovery (65% of Part A coinsurance) through must-bill.
- Managed-LTSS second pendings and QIT monitoring are underserved and shaped like software.
- Low capital, no licence needed for tooling, and the buyers (eligibility firms) feel the labor pain directly.
- County-level caseworker-behavior data compounds, and could later support underwriting of pending AR.

## What's bad (by red-team lens)
- **Competition:** The AI core is commodity. A general assistant does about 80% of the analysis. The file mix is a barbell: simple files are done in-house and complex ones go to lawyers, leaving a thin middle that SPS-type firms already own. PointClickCare holds the trigger. Hospital RCM vendors hold the hospital budget. The likely exit is a feature sale at a services multiple.
- **GTM:** Retro coverage is keyed to the filing date, so a placeholder application defeats most of the "speed equals money" pitch. Outcome fees face attribution fights because most files would be approved anyway. The vendor becomes an unsecured creditor of distressed SNFs. Facility logo churn from ownership changes runs 10-20% a year. LTV/CAC is about 2-3x. Florida had no retro coverage from 2019 and no software category emerged there.
- **Feasibility:** POA and guardianship, bank authentication, GLBA and the TCPA (AI voice needs prior consent) limit the "bank-chasing machine". Portal automation can breach terms of use. Applications are signed under penalty of perjury, so every flagged transaction needs human review, which caps files per coordinator. Florida's 2016 UPL opinion (183 So.3d 276) puts QIT drafting and planning off-limits to non-lawyers there. Elder Justice Act reporting duties arise when misuse is found. Big states such as FL and TX may not require 60-month statements up front, which shrinks the SAM to the Northeast plus Illinois.

## Non-obvious insights
1. **The lost money is in denials, refiles and patient-pay leakage, not slow approvals.** Retro coverage keys off the application date, so the product to build is a denial-prevention and RFI-deadline desk, not a speed desk.
2. **The best first customer is the incumbent.** Eligibility firms and elder-law practices carry the UPL risk, the authorized-representative role and the family trust. Selling them tooling builds a multi-state caseworker dataset without carrying SNF credit risk.
3. **Medicaid approval is the gate to Medicare bad-debt recovery** through must-bill. A Medicaid-pending file quietly blocks up to about $16k of coinsurance recovery per stay.
4. **Florida (2019) is a natural experiment.** If Florida SNFs do not show higher pending write-offs, the OBBBA forcing function is marketing, not economics.

## Cheapest validation test (2 weeks, under $1k)
- Interview 15 people by phone or LinkedIn: 6 owners of eligibility firms or elder-law practices in NJ and PA, 6 SNF BOMs or regional Medicaid coordinators, and 3 operator CFOs. Ask for (a) hours per complex file split into records chasing, analysis, drafting and RFIs, (b) denial and refile rate and its causes, (c) pending write-offs as a share of revenue, (d) what they pay today and to whom.
- In parallel, build a prompt-plus-spreadsheet lookback prototype and run it on 3 redacted real files a friendly firm provides. Measure the analyst hours saved.
- **Kill** if analysis plus drafting is under 40% of file hours, or if no firm will pre-commit to $100+ per file. **Go** if 3 or more firms sign a paid pilot letter.

## Unresolved questions
- Does a funded AI-native targeting LTC Medicaid already exist? Check YC 2024-26, Crunchbase and stealth companies.
- Exact OBBBA retro-coverage section and effective date, and any CMS guidance on it.
- Florida 1115 retro waiver status, and pending write-off data for Florida versus comparable states.
- SPS scale and pricing. How many facility-paid eligibility firms exist nationally?
- Is per-approval contingent pricing compliant with 42 CFR 447.10 when the vendor never touches the payment?
- Which states require full 60-month statements up front, and which rely on AVS plus attestation?
- PointClickCare marketplace terms, and whether it has an eligibility roadmap.

## Sources (from model knowledge, not fetched this session)
- https://www.congress.gov/bill/119th-congress/house-bill/1
- https://www.macpac.gov/subtopic/retroactive-eligibility/
- https://www.kff.org/medicaid/
- https://data.cms.gov/provider-data/
- https://www.ecfr.gov/current/title-42/section-435.912 ; /section-435.915 ; /section-435.923 ; /section-447.10 ; /section-483.15 ; /section-424.73
- https://www.law.cornell.edu/uscode/text/42/1396p ; /1396w ; /1320a-7b ; /1320b-25
- https://www.cms.gov/medicare/payment/fee-for-service-providers/bad-debt
- https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf
- https://www.carescout.com/cost-of-care
- https://www.seniorplanningservices.com/ ; https://www.fortunahealth.com/ ; https://www.pointclickcare.com/ ; https://wellsky.com/careport/
- Florida Bar re Advisory Opinion: Medicaid Planning Activities by Nonlawyers, 183 So. 3d 276 (Fla. 2016)
