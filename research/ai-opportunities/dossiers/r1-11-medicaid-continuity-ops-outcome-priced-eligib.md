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

## Round 2 diligence (2026-10-06)

### Score change: 44 -> 32. Verdict: PASS (reopen only on a specific trigger)
- **The mechanism is confirmed.** CMS-2454-IFC was released June 1, 2026, published June 3 and effective July 31. Diagnosis alone cannot verify medical frailty: the condition must also "significantly impair" the person's ability to meet 80 hours, and frailty is re-verified at least every 12 months. The "chart, not claims" insight was right.
- **The market thesis around it got worse on every other axis:**
  1. **Demand is deferred.** States may accept frailty self-attestation throughout 2027 when they have no reliable data. Documentation becomes binding only from 2028-01-01, when self-attestation is limited to once per enrollment period. That leaves a 15-month gap for a capital-light team.
  2. **The provider/FQHC whitespace is gone.** Perenna Health launched July 24, 2026 for FQHC navigator teams. Fortuna Health ($18M a16z Series A, YC) is already publishing frailty guidance.
  3. **The hours rail is commoditized.** Equifax TotalVerify sells a dedicated "H.R. 1 Community Engagement" product, Experian Verify competes on price, and CMS has a federal data hub project.
  4. **The frailty definition is in litigation.** 25 states plus DC sued on 2026-06-29, which puts the wedge's core regulatory detail at risk.
  5. **Buyers have little money.** Only risk-bearing primary-care and behavioral-health groups showed direct willingness to pay, at about $100-225k ACV. FQHCs top out at $10-25k and need grant money. Hospitals will pay contingency only, through their incumbent vendors.
- **What survives** is a narrow, feature-shaped "functional-impairment evidence copilot" with 2028-dated demand. That is a cash-flow or acqui-hire outcome, not a venture one.
- **Reopen trigger:** a risk-bearing group hands over 1,000+ charts for a free retrospective study, and that study shows 10 or more claims-invisible frailty cases per 1,000 per cycle.
- **Unresolved conflict between the two round-2 reports.** The buyer simulation says the IFC allows no frailty self-attestation before 2028. KFF and the fact-check say it is allowed throughout 2027 and limited from 2028. The KFF/fact-check reading is more likely correct. Read the IFC text before using either reading as a sales hook.

### Fact-check
| Claim | Status | Evidence |
|---|---|---|
| IFR statutorily due 6/1/2026 | Verified | CMS-2454-IFC released 6/1, published in the Federal Register 6/3, effective 7/31; comments closed 7/31. https://www.federalregister.gov/documents/2026/06/03/2026-11094/medicaid-program-community-engagement-requirement-for-certain-individuals |
| Start 1/1/2027, extensions to 12/31/2028 | Partially true | The first good-faith exemption is capped at 6 months, renewed only with quarterly updates. CMS reportedly projects about 2 of about 10 applicant states will get one. Early starters: Nebraska since 5/1/2026, Montana and Arkansas since 7/1/2026, Iowa from 12/1/2026; Georgia Pathways runs under a waiver through 12/31/2026. https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2026/june/cms-issues-interim-final-rule-imposing-medicaid-work-requirements-for-expansion-populations/ |
| Uncoded frailty lives in notes, so claims-based ex parte checks cannot establish it | Verified | Diagnosis is insufficient; functional impairment is required; re-verification every 12 months or more often. Diagnosis "may be used in combination with ... provider documentation." https://www.kff.org/medicaid/the-medical-frailty-exemption-from-medicaid-work-requirements-key-takeaways-from-the-cms-interim-final-rule/ ; https://www.chcs.org/resource/a-summary-of-national-medicaid-work-requirements/ |
| Kill criterion: broad self-attestation would make documentation worthless | Partially true | Self-attestation is allowed throughout 2027 when the state has no reliable data, and limited to once per enrollment period from 1/1/2028. Year-1 demand is soft. (Same KFF link) |
| Statutory, so durable through 2029 | Partially true | The statute is not challenged, but 25 states plus DC sued over the IFR's frailty definition on 6/29/2026. https://citizenportal.ai/articles/9660882/Connecticut/Executive/Organizations/Departments-and-Agencies/Department-of-Social-Services/DSS-CMS-interim-rule-tightens-medicalfrailty-exemption-Connecticut-joins-multistate-suit |
| Fortuna is the closest AI-native competitor | Verified | $18M Series A led by a16z with YC (7/21/2025), about $22.3M raised in total. It sells to states, plans and hospitals and claims payer customers covering more than 25M Medicaid lives. https://www.businesswire.com/news/home/20250721481890/en/Fortuna-Health-Raises-$18M-Led-by-Andreessen-Horowitz-to-Modernize-Medicaid-Access-and-Infrastructure-Amid-Federal-Reforms |
| The provider/FQHC channel is uncontested | **Contradicted** | Perenna Health launched 7/24/2026: an FQHC navigator platform covering renewals, documentation and work-requirement reporting, with its first pilot in Indiana. https://www.inkfreenews.com/2026/07/24/perenna-health-launches-ai-to-keep-rural-medicaid-patients-covered/ |
| Equifax and Experian will bundle work-requirement checks | Verified | Equifax has a TotalVerify "Medicaid H.R. 1 Community Engagement" product, and Senators Wyden, Warren and Sanders opened an investigation. Experian Verify is positioned as the lower-cost alternative (CBPP). https://totalverify.equifax.com/video-medicaid-community-engagement-solution |
| About 18.5M subject adults; millions lose coverage | Partially true | Secondary sources only: 18.5M (MedicalXpress, 8/2026); about 5.3M more uninsured by 2034 (as cited by Perenna); about 11M facing new procedural steps (as cited by Fortuna). CBO's primary table was not opened. https://medicalxpress.com/news/2026-08-ai-medicaid-enrollees-hour.html |
| State incumbents and the federal government absorb ex parte/hours verification | Partially true | CMS moved a Medicaid technology project to the Federal Data Services Hub (details not verified). Healthy Together sells states an "AI-powered rules engine" verification module. https://www.nextgov.com/digital-government/2026/07/cms-quietly-moved-medicaid-technology-project-federal-data-hub-new-eligibility-requirements-approach/415106/ |
| Arkansas 2018: more than 95% compliant or exempt; about 70% of unwinding losses procedural | Unverifiable this session | Egress blocked; from model knowledge only. |
| Navigator funding cut about 90%; $1.50-3 PMPM; $11-21B premium at risk | Unverifiable | The about 90% cut was to ACA Marketplace navigator grants (about $98M to $10M; model knowledge), not Medicaid assisters. The PMPM and premium figures are the dossier's own estimates. |

### New competitors
| Name | Type | What it does | Funding/scale | URL |
|---|---|---|---|---|
| Perenna Health | AI-native studio spinout | FQHC/CHC navigator platform: at-risk worklists, AI-drafted outreach, SMS document collection, work-requirement reporting. First pilot in Indiana. | Built with Parkview Health, Notre Dame and the 1842 Fund by Alloy Partners; round size not found | https://www.inkfreenews.com/2026/07/24/perenna-health-launches-ai-to-keep-rural-medicaid-patients-covered/ |
| Healthy Together CEVS | State gov-tech SaaS | Hours logging, document upload, and an "AI rules engine" that validates exemptions | Existing benefits-tech vendor; scale not verified | https://www.cbpp.org/research/health/assessing-the-medicaid-work-requirement-vendor-landscape |
| Equifax TotalVerify / The Work Number | Incumbent data vendor | Packaged H.R. 1 wage and hours verification for states | Public company; used by many states | https://totalverify.equifax.com/video-medicaid-community-engagement-solution |
| CMS Federal Data Services Hub project | Federal build | Possible free federal verification plumbing | Federal | https://www.nextgov.com/digital-government/2026/07/cms-quietly-moved-medicaid-technology-project-federal-data-hub-new-eligibility-requirements-approach/415106/ |
| CareRoute.ai | Unknown | Consumer guide to the work requirements; product, model and funding UNVERIFIED | Unknown | https://www.careroute.ai/blog/medicaid-work-requirements |
| Fortuna Health (upgraded threat) | AI-native, a16z/YC | Navigation plus work and income documentation (self-employment, cash pay); publishes IFR and frailty explainers | $22.3M raised | (see fact-check) |

**Crowding:** moderate to heavy, not the 4/10 the dossier implied.
- Navigation and outreach: Fortuna, Perenna.
- State adjudication: Healthy Together and the systems integrators.
- Hours rail: Equifax, Experian, CMS hub.
- Apparently open (unconfirmed): EHR-embedded, clinician-signed functional-impairment evidence. Perenna and Fortuna are each one feature away from it.

### Buyer-interview highlights (role-play personas, NOT real quotes; WTP figures are estimates)
- **VP Population Health, Medicaid risk-bearing primary-care group (40-80k lives).** The best buyer.
  - Pain: "Every member who falls off is a PMPM I stop getting... My docs are not going to write 'this person can't work' on a state form for 3,000 patients, and the state isn't going to find our uncoded depression-plus-chronic-pain patients in claims. That gap is my money."
  - Objections: "One of [my MCOs] already uses Fortuna"; "My 2027 budget is closed"; "If my state takes the extension, this is a 2028 problem"; liability for AI-drafted functional statements.
  - WTP: $1.50 PMPM across the whole panel was refused. $0.40-0.75 PMPM on subject adults only, capped, or $20-40 per 834-confirmed exemption or reinstatement. That works out to about $120-225k ACV.
  - Yes-trigger: a 30-day retrospective on 500 members terminated during the unwinding, plus clinician sign-off in under 90 seconds inside the EHR.
- **O&E Manager at a mid-size FQHC (OCHIN Epic).** Has the pain, no money.
  - Pain: "I had six application counselors two years ago and I have two now... providers told me flat out they're not occupational medicine doctors."
  - Objections: "Is it in OCHIN Epic?"; "Patients don't answer the phone"; "I'd rather the state or our PCA bought this"; Part 2 consent.
  - WTP: $1-2k a month per health center at most, paid from grant or PCA money. Per-packet pricing was rejected: "$5 a packet sounds cheap until you multiply by 4,000 patients twice a year."
- **VP Revenue Cycle at a safety-net hospital system.** Will not buy direct.
  - "I already pay R1/Ensemble/Experian on contingency. Bring it to them, not me." "IT and security review is 6-9 months. You're a three-person startup."
  - WTP: $0 fixed; $75-150 per approved coverage on contingency, through the incumbent vendor only.
- **Realistic year-1 book:** 3-6 risk-bearing groups, about $0.4-1.0M ARR, and only if the 2027 documentation window actually opens.

### Pre-mortem: top failure modes (probabilities are independent estimates)
| Failure mode | Probability | Early warning sign |
|---|---|---|
| Buyer can't pay a venture-scale price (FQHCs squeezed by OBBBA itself) | 45% | No paid LOI above $25k; every pilot needs a grant |
| Evidence not needed in volume (ex parte claims checks plus 2027 self-attestation absorb it) | 40% | Retrospective yield below 10 per 1,000 per cycle; Nebraska and target states accept self-attestation |
| Absorbed by platforms (Epic/OCHIN SmartForm, Experian Health/Waystar/R1, The Work Number) | 35% | Epic UGM or vendor release notes mention OBBBA exemption workflows |
| Services trap (40+ state forms and portals; gross margin about 38%) | 35% | More than 6 weeks per new state; more than 30% of packets need an ops touch |
| No intake channel into the state (packets stall with patients; 42 CFR 435.923) | 30% | Fewer than 50% of patients submit their packets; no provider upload or integrator feed |
| Clinicians refuse to sign; FCA/qui tam exposure | 25% | Fewer than 60% of packets signed; compliance asks for indemnification |
| A competitor wins distribution first (Fortuna, Perenna, mPulse/Icario) | 25% | Deals lost to an existing vendor; PCA picks a single vendor |
| Political, regulatory or court shift (frailty-definition lawsuit; post-2028) | 20% | Ruling in the multistate suit; extension requests |

**Kill criteria:**
1. **Day 30:** 4 or more of 5 target states (Nebraska, Montana, Arkansas, Iowa, plus one January-2027 state) accept frailty self-attestation through 2027, with no signal that documentation will be preferred from 2028.
2. **Day 45:** 3 or more of 5 states have no provider evidence-intake path (portal upload, fax-to-case or integrator feed).
3. **Day 60:** retrospective yield below 10 per 1,000 per cycle of claims-invisible frailty.
4. **Day 60:** fewer than 2 LOIs at $25k ACV or more from 15 or more qualified conversations, or no buyer can name at least $150 per churned patient per year.
5. **Day 75:** FCA counsel says the needed manual review would cost more than 40% of the packet price.
6. **Day 90:** clinicians sign fewer than 60% of packets, or the median edit takes more than 3 minutes.
7. **Ongoing:** Epic/OCHIN or a revenue-cycle vendor ships a native exemption-evidence workflow, or Perenna or Fortuna locks up the launch state's largest networks.
8. **Day 90:** no Medicaid eligibility operator has committed.

### Discovery-call script
1. Tell me about the last patient you know of who lost Medicaid. How did you find out, and how late?
2. What did you do during the 2023-24 unwinding? Who worked on it, for how many hours, at what cost, and what did you stop doing?
3. How many attributed patients did you lose, and what PMPM or PPS revenue did that cost? Who owns that number? (If nobody does, the pain is unmeasured.)
4. When a state disability or frailty form reaches a clinician today, what happens step by step, and how long does it sit?
5. Since June 1, what have you done about the IFR: budget, hires, vendor meetings, comment letters? Show me.
6. How have your clinicians or CMO reacted to documenting functional impairment for the 80-hour test? Any refusals or liability questions?
7. What does your MCO or state send you on renewal dates, noncompliance and terminations? In what format, and how late?
8. Who else has pitched you (Fortuna, Perenna, your EHR vendor, your revenue-cycle vendor, your PCA)? What happened?
9. What changes for you under a state extension, or under the 2028 documentation rules?
10. In a paid 60-day pilot on 300 at-risk patients, what result gets you to sign? Whose budget would pay, and who else has to say yes?

### Who to call first
1. **Medicaid risk-bearing primary-care groups.** VP Population Health, VP Medicaid, COO. Cityblock (its founder is reportedly a Fortuna investor), Waymark, Equality Health (AZ/LA), Somos (NY), Pair Team (CA), Aledade Medicaid ACOs. Prioritize those in Nebraska, Montana, Arkansas and Iowa, which are live now.
2. **OCHIN product/innovation leads, plus the PCAs in Nebraska, Montana, Arkansas and Iowa.** These are for distribution and grant money.
3. **CCBHCs.** COO, Medical Director. First confirm the narrowed SMI/SUD exemption scope.
4. **Channel partners:** revenue-cycle and coverage-discovery vendors; mPulse and Icario for white-label.
5. **Perenna and Fortuna,** as possible partners or acquirers for the frailty-evidence module.
- **LinkedIn post search:** "work requirements" AND ("medically frail" OR exemption), last 3 months.

### First 30 days (only if pursuing despite PASS)
- **Days 1-5:** read the IFC text on frailty, self-attestation and provider submissions. Pull the Nebraska, Montana, Arkansas and Iowa frailty forms and their intake paths. Settle the 2027 self-attestation conflict.
- **Days 5-20:** run 15 calls (8 risk-bearing groups, 4 PCA/OCHIN, 2 CCBHCs, 1 Perenna/Fortuna). The goal is one data partner for a free retrospective on 1,000 or more expansion adults who were terminated or are up for renewal.
- **Days 20-30:** run the chart-to-functional-impairment study: an LLM extracts cited evidence and a clinician reviews 50 packets. Measure claims-invisible yield per 1,000, sign rate and edit time.
- **Day 30 decision:** go only if yield is at least 10 per 1,000, the sign rate is at least 60%, and 2 or more paid LOIs (or contingency LOIs) are signed. Otherwise kill, or pitch the module to Perenna or Fortuna.
- **Constraints:** do not build the hours rail; do no outbound SMS or voice.
