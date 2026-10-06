# Medicaid Continuity Ops: from "AI caseworker for MCOs" to an exemption-evidence engine for risk-bearing Medicaid providers

**One-liner:** OBBBA's work requirements, 6-month renewals and 1-month retro cut (from about January 2027) will drop millions of eligible expansion adults over paperwork. The defensible business is not outreach. It is producing the evidence that state ex parte checks cannot find: clinician-signed exemption certifications from the chart, plus employer and EVV hours attestations. It should be sold first to providers who lose money the moment a patient churns.

> **Verification caveat:** the shared WebSearch budget was used up before this review, and WebFetch was blocked during the deep dive and the red-team passes. Every figure comes from model knowledge (through about mid-2026) and is labelled FACT, LIKELY or EST. Before acting, check the CMS interim final rule (statutorily due June 1, 2026), state start dates and extensions, and Fortuna Health's funding and product.

## Verdict: PROMISING WITH PIVOT, 44/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | Pure-play about $0.4-1.4B; about $2-3B if it grows into general eligibility ops |
| Pain intensity | 7 | Hard statutory deadline; about $11-21B/yr of premium at risk (EST); hospitals and providers lose cash immediately |
| Whitespace | 4 | Fortuna is in the exact niche; every layer (state IE, outreach, payroll APIs, hospital coverage discovery) has an owner |
| AI leverage | 6 | Real in chart-to-form drafting and document classification; outreach is commoditized and constrained to pre-approved templates |
| GTM feasibility | 3 | 25-40 viable MCO logos; 6-12 month cycles; the state can veto every input; the January 2027 wave is already being worked |
| Defensibility | 3 | State form library, integrations and evidence network are modest, execution-driven assets |
| Founder fit | 3 | Needs a Medicaid operator co-founder; SOC 2/HITRUST, BAAs, Part 2, TCPA |

## Thesis (revised)
The scout and the deep dive are right that the loss will be procedural. Arkansas 2018: more than 95% of the target population was already compliant or exempt (Sommers, NEJM 2019). The unwinding: about 70% of about 25M disenrollments were procedural (KFF).

All three skeptics landed the same blow on the "MCO buys zero-touch claims mining" version:
- States already hold the encounter data (T-MSIS/MMIS) and are legally required to run ex parte checks. Deloitte and similar vendors will ship claims-based frailty flags as change orders.
- The MCO's real gain per retained member is margin plus admin load, about $600-900 a year, not $6-8k. Rate rebasing and corridors claw much of that back.
- The state, which is the plan's own customer, budgeted for these people to leave.

**What survives is the evidence the state's data cannot produce:**
1. **Clinician-certified exemptions.** Uncoded medical frailty, SMI, Part 2 SUD treatment, and caregiving for a disabled adult. All live in clinical notes, not claims.
2. **Hours from shift and 1099 workers.** These are invisible in UI wage files, which lag 1-2 quarters and have no hours field. Sources: employer, staffing-agency and EVV logs, plus payroll APIs as a backstop.

**Who to sell to first:** buyers with immediate, un-clawed-back exposure:
- Medicaid value-based-care and full-risk provider groups and FQHCs, which lose PMPM, PPS or encounter revenue when a patient churns
- safety-net hospitals, facing the 1-month retro cut, through an existing contingency-fee budget

**Where it goes next:** white-label the engine to MCO engagement vendors (mPulse, Icario) and to state integrators (Maximus, Conduent) rather than fighting them. Long term, it is a chart-to-form engine for public-program paperwork (disability, SNAP medical exemptions, FMLA/ADA), which lifts the TAM ceiling past work requirements alone.

## How the work is done today
- **State:** at renewal, an ex parte check against UI wages, SNAP/TANF, SSA, the Federal Hub and The Work Number (per-pull fees). If that fails: a mailed form, 30 days to cure, termination, then a 90-day reconsideration window. Ex parte rates in the unwinding ranged from under 10% to over 70% (LIKELY).
- **MCO:** 834 files, plus renewal-due lists where the state shares them. Outreach runs through in-house call centers (EST $4-8 per completed call), mPulse/Icario SMS and IVR, mailers and CHWs. Contact rates are 20-40% (EST). Every template needs 30-60 days of state approval (42 CFR 438.10/438.104).
- **Providers:** FQHCs (about 1,370 health centers, about 32M patients) use grant-funded application counselors; navigator funding was cut about 90% in 2025. Hospitals use financial counselors plus contingency vendors (R1, Ensemble, Experian Health, Waystar, FinThrive).
- **Clinicians:** fill state medically-frail and disability forms by hand, if at all.

## TAM
- **Population:** about 18.5M expansion adults subject to the rules; about 15-16M in managed care (EST); about 30-36M verification events a year under 6-month renewals.
- **MCO layer:** $1.50-3 PMPM gives $280-560M.
- **Hospital retro and conversion slice:** $150-500M.
- **FQHCs:** $30-80M.
- **B2G subcontracting:** $100-300M.
- **Total:** about $0.6-1.4B. Broader eligibility ops is about $2-3B (EST).
- **Realistic year-3 SOM:** $15-40M ARR. That is venture-viable only with category expansion.

## Competitors
| Name | Type | Threat |
|---|---|---|
| Fortuna Health | AI-native, Medicaid enrollment/renewal navigation (NYC, about 2023) | Highest; funding unverified |
| mPulse (incl. HealthCrowd), Icario, Wider Circle | MCO engagement incumbents | Own the channel and the approved templates |
| Deloitte, Accenture, Conduent, Gainwell, Optum State | State IE/MMIS | Get ex parte and frailty change orders at the 90/10 match |
| Maximus | State call centers | Frames OBBBA as growth (LIKELY) |
| Equifax TWN, Experian Verify | Income verification | Bundle work-requirement checks for states |
| Steady, Truv, Argyle, Pinwheel, Atomic, Plaid | Payroll/gig APIs | Commodity rail; can sell direct to states |
| R1, Ensemble, Experian Health, Waystar, FinThrive, TransUnion | Hospital coverage discovery | Block the hospital wedge |
| Hippocratic AI, Salesforce Agentforce, Genesys/Five9 | Horizontal voice AI | Commoditize outreach |
| Code for America, Nava, USDR | Nonprofit | Free state tooling |
| Propel, Unite Us/findhelp | Adjacent | Distribution or competition |

## Why now
- Statutory clock: work requirements and 6-month renewals start around January 1, 2027, with extensions possible to December 31, 2028.
- Several churn mechanisms land at once: 1-month retro coverage, a look-back at application, and a pause on the Biden-era streamlining rules.
- The assister workforce is collapsing just as volume doubles.
- LLMs make chart summarization and form drafting cheap.
- The requirement is statutory, unlike the 2018 waivers vacated in Gresham v. Azar, so it likely lasts through 2029.

## Wedge and business model
- **Wedge:** 2-3 Medicaid risk-bearing primary-care or behavioral-health groups, or an OCHIN-Epic FQHC network, in one on-time state.
- **Product:** an EHR-embedded tool that reads the chart, flags likely exemptions, drafts the state-specific certification for one-click clinician signature, and tracks 6-month re-certification. Add a "reinstatement desk" for members terminated within the 90-day window; those wins are clean and attributable within weeks.
- **Pricing:**
  - $5-15 per verified evidence packet, or about $0.50-1.50 PMPM for risk-bearing providers
  - hospitals: $75-200 per approved conversion
  - white-label per-packet fees to engagement vendors
- **Avoid:** randomized-holdout outcome pricing (ethically toxic) and filing on the member's behalf (435.923 authorized-representative limits, portal terms of service).
- **Gross margin:** about 55% in year 1, rising to about 70%.

## What's good
- The pain is real, quantified and deadline-driven. Procedural loss is well documented (Arkansas, the unwinding, Georgia Pathways).
- The "80 hours is really a $580/month income test" reframing correctly identifies who fails: gig workers, volatile-hours workers, people with uncoded exemptions, and people at stale addresses.
- Clinician-signed evidence is more trusted by states, safer under the FCA (a human clinician attests), and sits inside an existing workflow.
- EVV (federally mandated hours logs for home-care aides, many of whom are themselves expansion adults) is a sleeper data source.
- The SNAP/TANF work-rule match is a high-yield exemption pathway.

## What's bad (strongest skeptic points)
- **Competition lens:** the value goes to someone else. The real margin per retained member is a few hundred dollars. The state controls rails, scripts and contracts, and its fiscal incentive is opposed. The 2023-24 unwinding produced no venture-scale startup.
- **GTM lens:** only 25-40 viable mid-size MCO logos. The top 5 build in-house (Optum, Carelon). 2027 admin budgets are already set. Holdout attribution means deliberately not helping people. A plausible ACV of about $280-560k barely covers CAC.
- **Feasibility lens:** "zero-touch" collapses either way. If self-attestation is allowed, docs are worthless. If documentation is required, it becomes a 40-state services shop. Wrong LLM-drafted exemptions create False Claims Act and qui tam exposure. TCPA class-action risk on AI voice. Part 2 consent kills zero-touch for SUD.
- **All three lenses:** it is a melting ice cube (residual volume shrinks as states improve ex parte), there is a timing cliff if states take extensions, and it needs a Medicaid-operator co-founder.

## Non-obvious insights
1. The right buyer is the provider with capitated or immediate revenue exposure, not the MCO: no MLR clawback and no rate rebasing lag, and CHWs already meet patients face to face, which solves the contact-rate problem.
2. The state's ex parte data contains claims but not charts. The moat is the clinician's signature, not the claims query.
3. Exemption-mining retains high-cost members (plan finance won't fund it), but providers are paid to treat those patients, so the incentive flips in the provider channel.
4. Expect states to pick the least frequent verification allowed (Georgia moved from monthly to annual reporting). Price per renewal cycle or per packet, not per month.
5. The address-update provision gives MCO-to-state data feeds statutory legitimacy, a B2B2G door that needs no new procurement.

## Cheapest validation test (2 weeks, under $1k)
1. Read the CMS IFR, if published, plus implementation documents from 5 on-time managed-care states (e.g., OH, AZ, KY, IN, LA). Answer two questions: does medical frailty require provider certification or allow self-attestation, and will states accept provider- or MCO-submitted evidence ex parte?
2. Run 15 calls: 6 Medicaid VBC/risk-bearing provider groups, 5 FQHC enrollment or revenue-cycle directors, 2 hospital patient-access VPs, 2 MCO retention VPs. Show a Figma mock of chart-to-exemption-form for one state's form and ask for an LOI at $X per packet.
3. **Kill** if fewer than 2 LOIs, or if states broadly allow self-attestation for frailty and caregiving. **Pursue** if 2+ LOIs and at least 2 states require clinician documentation.

## Unresolved questions
- Did CMS publish the IFR, and what does it say about ex parte exemptions, self-attestation and MCO or provider submissions?
- Which states start on January 1, 2027, and which are seeking extensions to 2028?
- Fortuna Health's funding, customers and work-requirements roadmap.
- Do states continue sending renewal-due and noncompliance files to plans after the unwinding flexibilities end?
- Will 2027 rates include acuity corridors that neutralize MCO retention value?
- FCA risk allocation for clinician-drafted, AI-assisted certifications.
- Is EVV data accessible for workforce hours attestation under state EVV vendor contracts (Sandata, HHAeXchange)?

## Sources (none fetched this session; re-verify)
- https://www.congress.gov/bill/119th-congress/house-bill/1 (OBBBA / P.L. 119-21, Sec. 71119)
- https://www.cbo.gov/ (coverage and savings estimates)
- https://www.kff.org/medicaid/issue-brief/medicaid-enrollment-and-unwinding-tracker/
- https://www.nejm.org/doi/full/10.1056/NEJMsr1901772 (Sommers et al., 2019)
- https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438 (438.8 MLR, 438.10, 438.104)
- https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-435 (435.916, 435.923)
- https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal
- https://www.hhs.gov/hipaa/for-professionals/regulatory-initiatives/fact-sheet-42-cfr-part-2-final-rule/index.html
- https://www.macpac.gov/ ; https://data.hrsa.gov/tools/data-reporting/program-data/national
- https://gbpi.org/ (Georgia Pathways)
- https://www.fortunahealth.com/ (competitor; not accessed)
