# Free-Care Claiming Engine: School Medicaid Revenue and Compliance

**One-liner:** AI that checks school therapy, nurse and behavioral-health notes for Medicaid readiness and finds unclaimed reimbursement. The district-direct billing version is weak. The surviving version is a per-clinician compliance linter sold to the private providers that deliver services in schools (teletherapy, contract-therapy and school mental-health firms), plus an optional acquire-and-automate roll-up of small billing bureaus.

> **Research caveat.** The shared WebSearch budget (200 calls) was used up before this review started, and egress to ecfr.gov, medicaid.gov, gao.gov and similar sites was blocked. The scout, the deep dive, all three red teams and this verdict therefore rely on prior knowledge (cutoff around mid-2026). Every figure is an estimate or belief until re-verified. In particular, nobody checked whether an AI-native school-Medicaid competitor launched in 2025-26.

## Verdict

**Promising, but only with a pivot.** Overall score **41/100**.

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Vendor fee pool ~$150-300M today, ~$250-600M at a stretch. The money is federal share only, after FMAP. |
| Pain intensity | 6 | Districts underclaim and fear audits, but the CFO is more afraid of clawbacks than hungry for revenue. |
| Whitespace | 6 | No AI-native found (unverified). Incumbents are services-heavy and own the data. |
| AI leverage | 5 | AI is good at extracting and validating. The real blockers are missing consents, orders and credentials, which AI cannot create. |
| GTM feasibility | 3 | RFPs, board approvals, 9-18 month cycles, and a 12-24 month cost-settlement lag. ESCs act as both channel and competitor. |
| Defensibility | 5 | A state rules library and audit track record compound slowly. The tech itself is easy to copy. |
| Founder fit | 3 | Needs a domain cofounder (former state Medicaid or district coordinator) from day one, plus E&O insurance and compliance staff. |

## Thesis (revised)

The scout's pitch was "LLMs turn IEP notes into CPT claims on contingency." That misreads the economics.

- **Cost settlement.** In cost-settlement states, claims are only interim payments. Final dollars = cost pool × RMTS direct-service % × eligibility ratio × FMAP. RMTS is the Random Moment Time Study that measures staff time; it is often run by a statewide vendor, frequently PCG.
- **Pricing rules.** Pure contingency fees run into 42 CFR 447.10(f) and 2 CFR 200 allowability rules.
- **Data access.** The data sits in IEP systems owned by competitors (PCG EDPlan, Frontline, PowerSchool).

**Strongest surviving form:** a *Medicaid-readiness linter* that sits at the point where the note is written.

- When a session note is entered, it checks the state's required elements: time in and out, group size, provider credential and supervision chain, consent on file, order or referral, and frequency against the IEP.
- The AI never writes clinical content.
- It is sold per clinician per month to **teletherapy and contract-therapy agencies, school mental-health telehealth firms and school-based health centers (SBHCs)**. These buyers purchase in weeks, operate in many states, and face no contingency-fee legal problem.
- ESCs (regional education service agencies) can white-label it on top of the billing cooperatives they already run.
- District claiming-gap audits become an upsell, not the wedge.

**Path to scale:** California's CYBHI school-linked behavioral-health multi-payer fee schedule, if other states copy it.

**Alternative with capital:** a search-fund or PE-style roll-up. Buy regional billing bureaus at roughly 0.8-1.5x revenue and use AI to take margin from about 25% to 45% or more.

## How the work is done today

1. The district (the LEA) enrolls as a Medicaid provider and picks a vendor (PCG, Paradigm, Accelify, CompuClaim, a Frontline module) or an ESC/BOCES cooperative.
2. It collects IDEA parental consent (34 CFR 300.154), physician orders where the state requires them, and provider credential files, which usually live in HR.
3. Therapists and nurses double-enter sessions, once in the IEP system and once in the billing portal (est. 1-3 hours per provider per week).
4. Rosters are matched against Medicaid eligibility files, then 837P claims go to the state MMIS or managed-care plans.
5. Each quarter, RMTS pings staff at random moments. CMS expects at least an 85% response rate.
6. Each year, the district files a cost report under certified public expenditure. Reconciliation comes 12-24 months later and can produce clawbacks. Records are kept 5-7 years, and OIG audits recur.

**Result:** chronic underclaiming. The main causes are missing consents, unbilled contract or teletherapy minutes, low RMTS response, and nurse and counseling services that went unbilled after free-care expansion.

## TAM

All figures are estimates.

- **Total pool.** About $4-5B a year in federal school Medicaid reimbursement. That is ~3.75M Medicaid-enrolled IDEA students × ~$950, plus $0.5-1.5B in administrative claiming. This reconciles with the commonly cited top-down figure.
- **Free-care upside.** Roughly $0.4-1.5B over 3-5 years. Skeptics argue the realized figure is closer to $20-60 per Medicaid student, because counselors are often not Medicaid-qualified practitioners and nurse visits reimburse at low rates.
- **Vendor-fee TAM.** About $250-600M; SAM about $110-280M.
- **District-direct SOM after 5 years.** $15-60M ARR.
- **Provider-side pivot.** Est. 30-60K school-based SLP/OT/psych/behavioral clinicians working for agencies × $40-80 per month ≈ $15-55M. That is small alone, but it builds the rules library and leads into per-claim revenue-cycle services.

## Competitors

| Name | Type | Notes |
|---|---|---|
| Public Consulting Group (PCG) | Incumbent | Owns IEP software (EDPlan/EasyIEP), statewide RMTS and claiming contracts, and district billing. Revenue reportedly $1B+ (belief). |
| Frontline Education (Roper, ~$3.7B 2022, belief) | Incumbent | Special-ed products with bundled Medicaid billing. |
| PowerSchool (Bain, ~$5.6B 2024, belief) | Incumbent AI feature | Holds IEP, SIS and health data. PowerBuddy AI. Dec 2024 data breach. |
| Maximus | Incumbent | State-level administrative claiming and RMTS contracts. |
| Paradigm Healthcare, Accelify, CompuClaim, regional bureaus | Incumbent | People-heavy billing bureaus; also roll-up targets. |
| ESCs / BOCES / Iowa AEAs (~550+) | Public cooperative | Set the price floor. Act as both channel and competitor. |
| Hazel Health, Daybreak, Cartwheel | Adjacent provider | Bill Medicaid directly, capturing part of the free-care pool. Possible customers for the pivot. |
| Carelon (CYBHI third-party administrator, Elevance) | State TPA | Holds the California multi-payer rails. |
| Presence, eLuma, Soliant, Amergis | Adjacent | Customers for the pivot, or could build this in-house. |
| AKASA, Candid Health, SmarterDx, Adonis | Adjacent AI revenue-cycle firms | Likely fast followers. Candid is the closest threat to the provider-side pivot. |
| School-Medicaid AI-native | — | None found (unverified). |

## Why now

- CMS's May 2023 school-based services guide and the 2014 free-care reversal (SMD #14-006). Roughly half the states have expanded billing beyond IEP students (belief).
- Bipartisan Safer Communities Act technical-assistance center and ~$50M in state grants.
- ESSER relief money ran out in Sept 2024, so districts are in budget-cut mode.
- Medicaid unwinding lowered eligibility ratios, which opens a window to switch vendors.
- Teletherapy and contract providers deliver a growing share of services, and their documentation leaks billable dollars.
- LLMs can now extract structured fields from free-text notes.

**Headwind:** OBBBA's squeeze on state budgets could slow free-care expansions and raise program-integrity scrutiny.

## Wedge and business model

**Wedge:**
- Two or three teletherapy or contract-therapy agencies as design partners. Lint their notes against one free-care state's rules (California LEA BOP plus CYBHI is the obvious candidate) and measure what share of sessions becomes billable.
- In parallel, offer a free claiming-gap report to districts through one ESC, using public per-district Medicaid receipts to rank underclaimers.

**Pricing:**
- $30-80 per clinician per month, plus per-claim fees for providers.
- For districts: $3-8 per student, or a fixed fee plus a capped gainshare above a baseline. Never a naked contingency fee, and only after counsel signs off.

**Margin:** 45-60% early (human review is unavoidable), with a target of 70%+.

## What's good

- Federal-dollar documentation is legally mandated and audited, so accuracy is directly worth money.
- Incumbents are services-heavy, and no AI-native has been found.
- The free-care expansion moved billable services outside IEP systems, into data pipes incumbents do not own.
- Public per-district receipts allow outbound sales that lead with a dollar figure.
- Document once, get both IDEA compliance and revenue. That gives clinicians a reason to adopt.
- Districts never go out of business, so churn is near zero once you win.

## What's bad

- **Competition skeptic:** The data chokepoint and statewide contract lock belong to competitors (PCG owns IEP data, RMTS and the state relationship). Incumbents can bundle LLM QA for free. The free-care pool is partly captured by Hazel-type providers that bill directly.
- **GTM skeptic:** Real district ACV is $30-60K against $40-90K CAC, sold through RFPs and a July 1 fiscal calendar. Revenue lags 6-24 months, gainshare baselines get disputed, and payback is over 30 months. The buyer is risk-averse: "nobody gets fired for hiring PCG."
- **Feasibility skeptic:** Error tolerance is essentially zero. A ~$3 fee per claim sits against roughly $14-28K in False Claims Act penalties per claim, and the vendor is directly liable for "causing" a false claim. Precedent: New York's ~$540M settlement in 2009 (belief). Claims are lost to missing artifacts (consent, orders, credentials) that AI cannot create. Pre-filling RMTS answers or AI-authored notes would be compliance poison.
- **All three:** The standalone business is a ~$15-60M ARR services company, not venture scale. Each new state is a fresh cold start.

## Non-obvious insights

1. **In cost-settlement states, coding is not the lever.** RMTS response, cost-pool completeness and the eligibility ratio drive the final dollars. A state-by-state methodology map is the first asset to build.
2. **Districts receive only the FMAP share.** Under certified public expenditure, the district funds the non-federal match, so a TAM built on gross Medicaid spend overstates vendor revenue.
3. **The best customer is the provider, not the district.** Contract and teletherapy agencies lose district contracts when their notes are unbillable. They buy fast, operate in many states, and avoid every pricing-legality problem.
4. **The "AI-native whitespace" may reflect liability, not oversight.** The asymmetric False Claims Act risk explains why VC-backed revenue-cycle AI firms have stayed out.
5. **Medicaid unwinding gives incumbents a true excuse.** A gap report that separates enrollment decline from vendor underperformance is credible precisely because it often vindicates the incumbent.
6. **The bureau roll-up is the only district-side path that skips procurement.** Buying a bureau inherits its contracts, state enrollments and audit history in one step.

## Cheapest validation test (2 weeks, <$1k)

1. Pull public per-district school Medicaid receipts (California LEA BOP reports, Texas SHARS) and rank districts of 5K-30K students by dollars per Medicaid-enrolled IDEA student.
2. Contact 15 clinical directors at teletherapy or contract-therapy agencies and 10 district sped directors or CFOs (LinkedIn, r/slp, CASBO lists). Show each a mock lint of a de-identified note.
3. Ask three questions: what share of your sessions are unbillable today, would you pay $50 per clinician per month, and will you share 100 redacted notes?
4. **Kill criteria:** fewer than 3 agencies quantify unbillable sessions above 10%, or none commit to a paid pilot or LOI. Also spend about $500 on one hour of health-regulatory counsel to scope the 447.10 and gainshare questions.

## Unresolved questions

- Has an AI-native school-Medicaid startup launched in 2025-26? (Search YC, ASU+GSV, Crunchbase.)
- Which free-care states let districts choose their vendor, have no statewide RMTS monopoly, and are fee-for-service heavy?
- The exact text of 42 CFR 447.10(f) and each state's rules on contingency fees and gainshare.
- Can session-level data be exported from Frontline, PowerSchool or PCG without the vendor's cooperation?
- How many school-based clinicians work for agencies, and does CYBHI uptake show real billing volume?
- Will OBBBA-era budget pressure stall free-care state plan amendments?

## Sources

All listed from prior knowledge; none were fetched this session.

- https://www.medicaid.gov/medicaid/financial-management/downloads/sbs-guide-medicaid-services-administrative-claiming.pdf
- https://www.medicaid.gov/federal-policy-guidance/downloads/smd14006.pdf
- https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-447/subpart-A/section-447.10
- https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200
- https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300/subpart-D/section-300.154
- https://www.gao.gov/products/hehs-00-87
- https://www.congress.gov/bill/117th-congress/senate-bill/2938
- https://www.congress.gov/bill/119th-congress/house-bill/1
- https://healthystudentspromisingfutures.org/map-school-medicaid-programs/
- https://nces.ed.gov/programs/coe/indicator/cgg
- https://www.dhcs.ca.gov
- https://www.pcgus.com
