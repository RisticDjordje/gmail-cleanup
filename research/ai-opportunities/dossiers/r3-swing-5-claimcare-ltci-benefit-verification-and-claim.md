# R3 Swing 5: ClaimCare, LTCi benefit verification and claim activation for private-pay care providers

**Date:** 2026-10-06 · **Round:** 3 (swing) · **Previous score:** 0 (scout and deep dive, never scored by the IC) · **New score: 28/100** · **Verdict: PASS.** The "private-pay funding desk" pivot that two red teams suggested is a services business with a different buyer and economics. It could earn its own scout. It does not rescue this one.

> **One-liner (as refined by the deep dive):** A 10-minute "Policy X-Ray" for a home care or assisted living intake rep. It turns a decades-old stand-alone long-term care insurance (LTCi) policy into the current benefit, trigger status, elimination-period schedule and a carrier-specific claim packet, then keeps the claim alive (recertifications, waiver of premium, denial prevention). It is sold to the provider as a conversion tool, priced per location plus per activation and per active claim.

> **Evidence limits:** This session's two WebSearch calls were both refused because the shared per-turn budget was already used up. WebFetch to law.cornell.edu was egress-blocked, the same block every earlier agent in this chain hit (Cornell LII, govinfo, Genworth, ltcfeds.gov, YC, CareSmartz360, CareWorks, Zingage, Waterlily). So every fact marked **[V]** comes from search-result snippets gathered by earlier agents. None comes from a page I opened. **[M]** means from memory and unverified. **[E]** means estimate. No company or figure is invented. The IRC 7702B trigger definition (2 of 6 ADLs expected to last 90+ days, or severe cognitive impairment, certified by a licensed health care practitioner within the prior 12 months) is still **[M]**.

---

## 1. Verdict and score rationale

**28/100. PASS.** For calibration, round-1 finalists scored 40-45, and 70+ means genuinely compelling.

**The pain is real and verified.** Several pieces of evidence show it:
- Agencies give LTCi claim help away free as a sales differentiator: CareWorks, Amada with LTC News, Luxe, LifeWorx, and Florida Caregivers on a carrier-specific page [V].
- A cottage industry of human claim specialists exists [V].
- Claims are at a record $14.1B paid in 2024 [V].

**The business does not work as proposed.** Three findings decide it:

1. **The volume per location is too small for SaaS [V anchors + E].**
   - LTCi was **10.9% of home care agency revenue** (AxisCare blog citing 2022 benchmark data) [V].
   - Median agency revenue was **$2.02M** (Home Care Pulse, 2021) [V].
   - So a median agency books about $220K a year from LTCi, which is about 4 LTCi clients on service and roughly 3-4 new activations a year [E].
   - At full use of the deep dive's own price list, a median location is worth about $3-4.5K a year. Realistically it is under $2K. Fragmented owner-operator CAC would match or exceed year-one ACV [E].
   - A 500-unit franchisor at full adoption is worth about $1M ARR or less [E].
2. **The authoritative answer lives at the carrier, and the carrier gives help away free.**
   - The current benefit (after reduced-benefit elections from rate increases), the remaining pool, nonforfeiture status and elimination-period credit all sit in carrier or third-party-administrator systems [M/inference].
   - Unlike medical benefits verification, which runs on the X12 270/271 eligibility rail, private LTCi has no electronic eligibility rail. A search by the red team found none, though absence is not proven.
   - Genworth offers free Care Coordination to policyholders [V]. John Hancock offers a free vetted provider network [V]. Genworth committed about $50M to CareScout Services in 2025 [V].
   - A "10-minute answer" from a parsed PDF still needs a carrier phone call to confirm. That shrinks its value and creates liability if it is wrong.
3. **The recurring revenue piece is already a checkbox feature.**
   - AxisCare does LTCi invoice faxing with care notes and split billing [V].
   - CareSmartz360 generates 837P/837I forms and submits LTCi claims [V].
   - AI-native home care back-office players (Zingage, Sage Care (YC), Claim Health (YC)) own the care-note data and intake seat [V, snippets].
   - About 60% of the deep dive's revenue pool (active-claim maintenance) overlaps features buyers think they already have.

**The ceiling and the trend are both bad.**
- The core pool is about $100-200M a year at 100% penetration (the deep dive's own estimate, down from the scout's $300-500M) [E].
- Realistic capture is $15-40M ARR [E].
- The stand-alone in-force base (about 5.8M policies) is shrinking [V].

**Why not lower (not 15-20):**
- The pain and willingness to act are verified.
- The deterministic elimination-period and benefit engine is a real technical asset that a technical founder can build.
- Strategic acquirers exist: AxisCare, WellSky, CareSmartz360, and Genworth/CareScout.
- The multi-payer pivot points at roughly 25% of agency revenue (LTCi 10.9% + VA 7.1% [V] + Medicaid waiver) and a question that comes up on every inquiry.

**Why below round-1 finalists:** None of the round-1 finalists faced both a free substitute from the authoritative data holder and fewer than 5 billable events per customer per year.

---

## 2. Fact-check of the scout's key claims

| Claim | Status | Evidence |
|---|---|---|
| About 5.8M stand-alone LTCi policies in force | Verified (snippet) | Milliman / ComparelongTermCare 2024 data [V] |
| $14.1B claims paid in 2024 | Verified (snippet) | AALTCI / insurancenewsnet [V] |
| TAM $300-500M/yr | **Overstated 2-3x** | Deep-dive bottom-up: $100-200M [E]; GTM red team: low tens of $M realistic ARR ceiling [E] |
| Most agencies leave paperwork to families | Partly verified | CareWorks page [V]; but many agencies give help free (CareWorks, Amada, Luxe, LifeWorx) [V] |
| No AI-natives in LTCi claims | **Partly contradicted** | Waterlily ($7M seed, Genworth/Nationwide/Edward Jones, models care against insurance coverage) [V]; Zingage expanding into claims management [V]; Claim Health (YC) [V]; DigitalOwl carrier-side LTC claims AI [V]. None found doing provider-side LTCi activation specifically |
| Monthly invoicing is a pain to automate | **Already served** | AxisCare LTCi faxing and split billing, customer "8 hours a week" saved [V]; CareSmartz360 837P/837I [V] |
| Agency carries receivables | **Weakened** | "Not every insurance company allows Assignment of Benefits" [V snippet]; FLTCIP allows direct pay to providers [V]; prevalence unverified |
| Claims take 45-90 days, ~25% initially denied | Low reliability | Law-firm marketing snippets only [V as snippet, not as fact] |
| Home care is the front door for claims | Verified (snippet, small sample) | CT Partnership: home health aide in 53% of new claims, assisted living 29%, nursing home 27% (overlapping; 6,878 claimants; single state, counted by claimant) [V] |
| IRC 7702B trigger | Unverified | Statute pages blocked all rounds [M] |

---

## 3. Thesis (strongest version)

Do not automate monthly invoicing. That is commoditized. Instead own the **activation moment**: the sales visit and first 90 days, when a family says "Mom has LTC insurance" and nobody can quickly say what it pays today, whether she qualifies, when payments start and what the carrier will demand.

The proposed solution has three parts:
- An LLM extracts policy terms, riders and amendment letters into a formal policy model.
- A deterministic engine computes the benefit, elimination-period day counts (service days vs calendar days, weekly-credit provisions) and recertification dates.
- An agent assembles carrier-specific claim packets, with the licensed health care practitioner (LHCP) and family as human signers.

Framed this way, it is the private-pay version of medical benefits verification, sold on conversion and funded hours rather than clerk time.

**Why it breaks:** benefits verification works in medicine because of an electronic eligibility rail and high per-site volume. LTCi has neither.

---

## 4. Workflow today (condensed)

1. **Inquiry.** The family mentions LTCi. Many agencies advertise free claim help [V].
2. **Policy discovery.** The family finds an old policy. Someone calls the carrier with a HIPAA authorization or POA to confirm the current benefit, pool and elimination period [M].
3. **Claim notice.** The carrier sends a packet: claimant statement, provider statement, attending physician statement, HIPAA release [M]. Genworth has a dedicated LTC claims page [V].
4. **Benefit trigger.** 2 of 6 ADLs or severe cognitive impairment, LHCP-certified [M]. A carrier nurse assessor and medical records are typical [M].
5. **Plan of care.** It must be LHCP-prescribed [M].
6. **Elimination period.** Commonly 0-100 days, with policy-specific counting rules [M]. The family pays privately during it.
7. **Decision.** 45-90 days, about 25% initial denials per law-firm marketing [low reliability].
8. **Ongoing billing.** Monthly invoices plus care notes. Payment goes to the policyholder, or to the provider under assignment of benefits where allowed [V partial]. AxisCare and CareSmartz360 automate this [V].
9. **Maintenance.** Recertification (annual, per 7702B as recalled [M]), waiver of premium, pool tracking, appeals. Human specialists (Family Solutions for Care, Mrs LTC, ltcicc.com) and employer concierges (Wellthy) help [V].

---

## 5. TAM

**Anchors [V]:**
- $14.1B paid in 2024.
- About 5.8M policies in force.
- LTCi is 10.9% of agency revenue.
- Median agency revenue is $2.02M.
- Home Instead has about 1,198 locations (may include non-US), Visiting Angels 790, Right at Home about 500 (franchise-review snippets, medium reliability).

**Bottom-up [E] (from the deep dive):**

| Revenue line | Calculation | Annual |
|---|---|---|
| Activation | ~55K new home care and assisted living claims x $400 | ~$22M |
| Active-claim maintenance | ~150K active claims x $40/month x 12 | ~$72M |
| Per-location SaaS | ~15K locations x $150/month x 12 | ~$27M |
| **Total** | | **~$120M (range $100-200M)** |

Cross-check: a 2% take on $7-8.5B of home care and assisted living benefits gives $140-170M.

**Haircut [E]:**
- The maintenance line overlaps AxisCare and CareSmartz360 features, so discount it heavily.
- At 3-4 activations per location per year, SaaS churn will be high.
- A realistic serviceable pool for a new entrant is $40-80M, and realistic capture is $10-25M ARR in 5-7 years.

**Expansion (unverified magnitude):**
- Hybrid life/LTC and annuity riders.
- VA Aid & Attendance (7.1% of agency revenue [V]).
- Medicaid waiver screening.
- WA Cares, which began paying benefits in July 2026 [V snippet].
- Carrier or TPA digital intake.

---

## 6. Competitors

| Name | Type | What it does / why it matters | URL | Scale |
|---|---|---|---|---|
| AxisCare | Incumbent home care software | One-click LTCi invoicing, fax of claims plus care notes, split billing; publishes the 10.9% LTCi revenue statistic | https://axiscare.com/solutions-by-payer-source/ | Large private-duty vendor; funding unverified |
| CareSmartz360 | Incumbent home care software | LTCi billing: generates 837P/837I and submits claims | https://www.caresmartz360.com/home-care-faqs/ltci/ | Unverified |
| WellSky Personal Care | Incumbent home care software | Private-duty operating system widely used by franchises [M]; LTCi features not found | https://wellsky.com | PE-backed [M] |
| Zingage | AI-native home care back office | AI care-navigation agent expanding into revenue operations and claims management | https://www.zingage.com | Unverified |
| Sage Care (YC) | AI-native home care operations | Automating home care agency operations | https://www.ycombinator.com/companies/sagecare | Unverified |
| Claim Health (YC) | AI-native revenue cycle for at-home care | "First AI revenue platform for at-home care"; 158 clicks per claim at a customer | https://www.ycombinator.com/companies/claim-health | Unverified |
| AutomationEdge CareFlo AI | AI/RPA revenue cycle agents | Home care claim scrubbing | https://automationedge.com/home-health-care-automation/ | Unverified |
| Waterlily | AI-native LTC planning, carrier-aligned | Forecasts care needs and costs against insurance coverage; clients include Prudential | https://www.prnewswire.com/news-releases/waterlily-secures-7m-in-seed-funding-led-by-brewer-lane-ventures-as-it-utilizes-ai-to-forecast-and-plan-long-term-care-302359748.html | $7M seed (Brewer Lane; Genworth, Nationwide, Edward Jones) [V] |
| Genworth CareScout + Care Coordination | Carrier-owned network and free service | Free care coordination for policyholders; vetted provider network with preferred pricing | https://investor.genworth.com/news-events/press-releases/detail/1045/carescout-launches-care-assurance-first-insurance-solution | ~$50M Services + ~$85M Insurance committed 2025 [V] |
| John Hancock LTC network | Carrier free service | Free vetted provider network and claim-initiation guidance | https://www.johnhancock.com/individual/help-center/long-term-care/understanding-the-claim-process/initiate-claim | Manulife subsidiary |
| FLTCIP direct pay | Federal program rails | Providers invoice directly | https://www.ltcfeds.gov/claims-information/reimbursement | Federal program |
| DigitalOwl | Carrier-side AI | LTC claims medical-record review; raises the evidence bar | https://www.digitalowl.com/use-cases/long-term-care | Unverified |
| LTC News + Amada | Free claim-help lead funnel | The most LTCi-focused franchisor treats claim help as its own moat | https://ltcnews.com/resources/insurance-companies/john-hancock-long-term-care | Amada national franchise |
| Agency in-house desks (CareWorks, Luxe, LifeWorx, Florida Caregivers) | Status quo | Free claim help and assignment-of-benefits guides | https://www.careworkshealthservices.com/long-term-care-insurance/assignment-of-benefits/ | Individual agencies |
| Family Solutions for Care, Mrs LTC, ltcicc.com, Premier Care Mgmt FL | Human claim specialists | Full-service claim handling for families | https://familysolutionsforcare.com/services/ | Small firms |
| Wellthy | Employer caregiving concierge | Navigates insurance for employees | https://www.forbes.com/sites/maggiemcgrath/2021/06/28/exclusive-amid-a-care-crisis-caretaking-concierge-startup-wellthy-raises-35-million-series-b/ | ~$80M raised [V snippet] |
| Horizontal LLMs | General assistants | Free readable-term summary of a scanned policy | https://chatgpt.com | Hyperscale |

---

## 7. Wedge and model (as proposed)

**Wedge:**
- Policy X-Ray at intake for 10-15 owner-operated private-pay agencies in affluent metros, preferably agencies on AxisCare.
- Measure conversion, days to first payment, RFI and denial rate, and funded hours.
- Take the results to a mid-size franchisor (100-500 units).

**Model:**
- $100-200 per location per month.
- $250-500 per claim activation.
- $25-50 per active claim per month.
- Deliberately not a percentage of benefits, to avoid public-adjuster or claims-consultant licensing issues (unverified).

**IC view:** the pricing is clean but the volume is not there. Per-location SaaS fails at about 3-4 events per site per year. A franchisor's VP of Ops needs more than a year of data per site to see statistically meaningful lift.

---

## 8. What's good

- **Pain verified by behavior:** agencies spend their own labor giving claim help away free to win LTCi clients [V].
- **Right party, partly:** the provider loses the client if the claim stalls, and home care is where most claims start (53% of new claims in the CT sample) [V].
- **A good use of a deterministic engine:** elimination-period counting, inflation-rider math and recertification calendars are exact, auditable and well suited to "LLM extracts, code computes."
- **A finite policy-form universe** (state-filed forms with form numbers [M]) makes a compounding template library plausible.
- **Capital efficient:** a technical founder can build the core engine without credentials, and licensed humans stay as signers.
- **Clear acquirers:** AxisCare, WellSky, CareSmartz360, Genworth/CareScout.
- **A structural tailwind:** carrier-side AI review (DigitalOwl, Majesco) raises the bar for structured, honest provider evidence.

## 9. What's bad, by lens

**Competition (serious concerns)**
- Horizontal LLMs commoditize the readable policy summary.
- Carriers hold what can't be read off the page and are building provider rails (CareScout, John Hancock network).
- Waterlily is funded and carrier-backed, one step from activation.
- AxisCare and CareSmartz360 already own recurring billing. Zingage, Claim Health and Sage Care own the AI back-office seat.

**Go-to-market (serious concerns)**
- About $220K of LTCi revenue per median agency means about 4 LTCi clients [V+E]. There is no line item, and the budget is part of one coordinator's time.
- Conversion lift is hard to attribute, and LTCi leads are already the easiest to convert.
- Amada, the LTCi-centric franchisor, has every reason not to arm its rivals.
- Big franchisors mandate stacks, with 9-18 month approvals [E].
- Free carrier care coordination competes at the kitchen table.

**Feasibility (serious concerns)**
- There is no eligibility rail, and the current benefit is a carrier-side fact, so the X-Ray is an estimate that still needs a carrier call.
- If the tool's "covered from day Y" answer is wrong, negligent-misrepresentation liability flows back to the vendor.
- At intake the agency has no care notes yet, so the shift-note-to-ADL insight applies only to the already-served maintenance phase.
- "Size the care plan to the benefit" plus LLM rewriting of notes is a carrier fraud-unit red flag.
- Assignment of benefits is not universal [V], so the agency's receivable stake is mostly churn risk.

**Market**
- A $100-200M core pool at 100% penetration [E], on a shrinking in-force base [V].
- Each expansion payer is its own product with its own evidence rules.

---

## 10. Non-obvious insights worth keeping

1. **Invoicing is commoditized. Activation is not.** But activation is low-frequency, so the value pools in a central desk, not a per-site tool.
2. **The data-authority test kills document-only verification products.** Where the binding fact sits in a counterparty's system with no API, a parser produces estimates, not verification. Reuse this lesson across the hunt.
3. **The incumbents' own statistics reveal the per-site economics** (10.9% LTCi revenue share, $2.02M median revenue). Always multiply revenue share by median customer size before pricing per location.
4. **When the most motivated buyer treats the capability as its moat** (Amada + LTC News), a neutral tool loses its best channel.
5. **WA Cares began paying benefits in July 2026** [V snippet]. That creates new provider paperwork with no incumbent tooling. It may be a better standalone scout than legacy LTCi.
6. **The fraud-safe evidence rule** (verbatim note citations, no rewording of ADL level, hard stop without LHCP or assessor confirmation) is a product feature carriers might pay for. That points at a carrier/TPA buyer, not a provider buyer.

---

## 11. Cheapest validation test (2-3 weeks, under $2K)

1. **Volume check (kills or confirms the economics).** Call 25 private-pay agency owners and 5 assisted living move-in directors in two affluent metros. Ask:
   - How many LTCi inquiries and new claims did you have in the last 12 months?
   - How many inquiries did not convert because of benefit uncertainty?
   - Who on staff handles claims, and how many hours a month?

   **Kill if** the median is under 6 new LTCi claims per location per year, or fewer than 30% report lost conversions.
2. **Authority check.** Collect 10 real redacted policies plus amendment letters with family consent. Parse them, then compare against the carrier's verbal confirmation obtained under a HIPAA authorization. **Kill the self-serve X-Ray if** the parsed current benefit or elimination-period answer is wrong on more than 20% of policies.
3. **Willingness to pay for outcome.** Offer 5 agencies a concierge "funded client" service at $400 activation + $40 per month, multi-payer (LTCi + VA + hybrid). **Pursue the pivot only if** at least 3 of 5 sign and each sends at least 1 case within 60 days.

---

## 12. Kill criteria

- Median new LTCi claims per location under 6 a year in interviews.
- Parsed current benefit is wrong on more than 20% of policies versus the carrier.
- Fewer than 3 of 5 agencies pay for a concierge activation within 60 days.
- A franchisor or AxisCare/WellSky partner won't commit to a pilot or integration within 6 months.
- Carriers refuse agency-prepared packets or route them to fraud review in pilots.
- A 90-day, 10-agency test shows no extra funded client per location per quarter.

---

## 13. Sources

All are snippet-level [V] from earlier agents unless noted. None was opened this session.

- https://www.aaltci.org/news/long-term-care-insurance-association-news/2024-long-term-care-insurance-claims
- https://www.aaltci.org/news/long-term-care-insurance-association-news/most-long-term-care-insurance-claims-begin-at-home
- https://www.aaltci.org/long-term-care-insurance/learning-center/company-contacts.php
- https://insurancenewsnet.com/oarticle/u-s-long-term-care-insurance-companies-paid-14b-in-2023-claims
- https://www.milliman.com/en/insight/ltci-2024-statistics-experience-reporting-forms
- https://www.comparelongtermcare.org/insurance-stats
- https://axiscare.com/solutions-by-payer-source/
- https://axiscare.com/blog/encouraging-home-care-statistics/
- https://www.caresmartz360.com/home-care-faqs/ltci/
- https://www.caresmartz360.com/ltci-long-term-care-insurance/
- https://www.zingage.com
- https://www.ycombinator.com/companies/sagecare
- https://www.ycombinator.com/companies/claim-health
- https://automationedge.com/home-health-care-automation/
- https://www.prnewswire.com/news-releases/waterlily-secures-7m-in-seed-funding-led-by-brewer-lane-ventures-as-it-utilizes-ai-to-forecast-and-plan-long-term-care-302359748.html
- https://www.fiercehealthcare.com/health-tech/ai-startup-waterlily-predicts-long-term-care-needs-clinches-7m-seed-round
- https://investor.genworth.com/news-events/press-releases/detail/1045/carescout-launches-care-assurance-first-insurance-solution
- https://coverager.com/genworth-financial-driving-growth-through-carescout/
- https://www.johnhancock.com/individual/help-center/long-term-care/understanding-the-claim-process/initiate-claim
- https://www.ltcfeds.gov/claims-information/reimbursement
- https://www.digitalowl.com/use-cases/long-term-care
- https://www.majesco.com/core-software-insurance-solutions/lah-core-suite/claims-for-lah/
- https://ltcnews.com/resources/insurance-companies/john-hancock-long-term-care
- https://www.amadaseniorcare.com/long-term-care-insurance/
- https://www.careworkshealthservices.com/long-term-care-insurance/free-ltci-claims-processing/
- https://www.careworkshealthservices.com/long-term-care-insurance/assignment-of-benefits/
- https://luxehomecare.com/long-term-care-claim-management/
- https://lifeworx.com/services/long-term-care-insurance-assessment/
- https://www.floridacaregivers.us/john-hancock/
- https://familysolutionsforcare.com/services/
- https://mrsltc.com/
- https://ltcicc.com/
- https://www.forbes.com/sites/maggiemcgrath/2021/06/28/exclusive-amid-a-care-crisis-caretaking-concierge-startup-wellthy-raises-35-million-series-b/
- https://vetmyfranchise.com/blog/home-instead-vs-right-at-home-vs-visiting-angels-franchise
- https://www.buildmvpfast.com/blog/ai-insurance-agents-claims-underwriting-automation-2026 (Liberate $50M, secondary source)
- https://www.law.cornell.edu/uscode/text/26/7702B (IRC 7702B; blocked, unverified)
