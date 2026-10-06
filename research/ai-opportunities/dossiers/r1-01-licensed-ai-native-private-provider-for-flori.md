# AI-Native Private Provider: Florida trade inspections and permit closeout

**One-liner:** A Florida 553.791 private-provider play where AI does the capture checks and paperwork for single-trade residential inspections and permit closeout, and licensed humans sign. The partner verdict: **start as the evidence and demand layer that sits above existing licensed signers**, beginning with deadline-driven open-permit resolution, not as a new licensed firm.

> **Verification caveat:** No live research was possible for this verdict or for any upstream agent. The run's shared WebSearch budget (200) was used up, and the egress proxy blocked flsenate.gov and every other primary source. The statutory foundation (what HB 683 actually says, whether virtual inspections may be asynchronous, notice rules, fee offsets, insurance minimums) has therefore **not been verified by any agent**. Treat every statutory claim below as a hypothesis.

## Verdict and scores

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 6 | About $12-18B US plan review and inspection labor; FL residential addressable market (SAM) about $350-700M in fees (estimate) |
| Pain intensity | 5 | Real for re-roof crew stops and for open permits found at closing; weak for HVAC finals |
| Whitespace | 6 | AI money is going to city software and expediters; no one owns the "AI-leveraged licensed signer" seat |
| AI leverage | 6 | Deterministic checks (product approval, AHRI, nameplate OCR) are reliable but easy to copy |
| GTM feasibility | 4 | Concentrated buyers, hostile counties, jurisdiction-by-jurisdiction rollout, net-premium pricing |
| Defensibility | 4 | The moat is statute plus insurance plus licenses; the AI layer is a commodity |
| Founder fit | 3 | Needs a licensed BCA/PE principal, E&O insurance, and life-safety liability |
| **Overall** | **45 / 100** | **Promising with pivot** |

## Revised thesis

The scout targeted the wrong bottleneck and the wrong role. Plan review for like-for-like trade permits is mostly over-the-counter already. The pain sits in **inspections and closeout**. Becoming the licensed signer from day one means carrying uncapped, hurricane-correlated liability, insurer AI exclusions, and personal license-discipline risk. In exchange you get an AI cost edge that incumbents (Willdan/Alpha, UES, BV, SAFEbuilt) can buy from Blitz within a year.

The better company is the **tamper-evident inspection evidence and routing layer**: guided capture (GPS, continuous video, device attestation), deterministic AI pre-checks, and auto-filed records. Existing FL private providers and retired licensed code administrators do the signing on a revenue share. Start where the payer has a deadline: **open and expired permits flagged at real-estate closing** (title agents, sellers, institutional single-family-rental owners). Expand to bulk closeout for PE-backed trade platforms, then to production-builder MEP finals. Buy a licensed firm only after 12-18 months of loss data lets an insurer price AI-assisted sign-off. Insurers and Citizens, as buyers of verified roof-attachment evidence, are the long-term upside.

## How the work is done today

- **Permit:** filed by the contractor's runner in Accela, EnerGov, CityView, Clariti or a homegrown portal. HVAC, water heater and many re-roof permits are issued same day or within days.
- **Inspections:** scheduled by IVR or portal, next-day AM/PM windows. Interior finals need the homeowner home, and a missed access means a re-inspection fee plus a truck roll. A re-roof in-progress (nailing/dry-in) inspection can idle a crew. Some counties already run free video inspections or accept photo affidavits (VERIFY per county).
- **Closeout:** many finals are never scheduled. Open permits pile up and surface at title search, years later, when the cost lands on the seller.
- **Private provider (553.791):** a licensed BCA/PE/RA plus inspectors and statutory E&O insurance. The jurisdiction reduces its fee by a self-computed "cost savings," which is often fractional. Used today mostly by production builders. Tools are PDFs, phone cameras and spreadsheets. About 8-15 in-person inspections per inspector per day.

## TAM

- **US:** 147,600 inspectors × $72,120 median (BLS 2024) ≈ $10.6B in wages, $14-15B fully loaded. Add plan examiners for a working total of about $12-18B. The outsourced/private slice is about $2-4B (estimate).
- **FL single-trade residential:** about 0.9-1.3M permits a year (HVAC 300-420k, re-roof 250-350k with storm spikes, water heaters 150-200k, electrical/generator 150-250k, solar falling after 25D). At $150-250 each that is $150-325M. Adding new single-family construction (130-170k units at $1.5-2.5k per house) gives an FL SAM of about **$350-700M** (all estimates).
- **Open-permit resolution (pivot wedge):** unsized. Hypothesis: tens of thousands of FL closings a year hit an open or expired permit, at $300-1,500 each. Validation should measure this.

## Competitors

| Name | Type | Relevance |
|---|---|---|
| PermitFlow | AI-native, $54M Series B (Accel, Dec 2025) | Owns the contractor workflow; could add a private-provider network without taking on liability |
| Blitz AI / BlitzPermits | AI-native, Tampa, funding undisclosed | FBC-trained, CityView/Naples, markets HB 683; obvious AI vendor to incumbents |
| Clariti + CivCheck (acq. Oct 2025) | Incumbent AI feature | Speeds up the city queue, which erodes the speed premium |
| Govstream.ai ($3.6M seed), Archistar, Buildcheck ($5.9M), InspectMind (YC W24) | AI-native | City-side and pre-submission review |
| Symbium / SolarAPP+ | Adjacent | 240+ communities; removes solar plan review |
| Willdan (Alpha Inspections, Feb 2025) | Public incumbent | Direct FL private provider with capital |
| SAFEbuilt (Riverside), Bureau Veritas | Incumbents | Municipal outsourcing; can buy AI |
| UES, GFA, Shums Coda, CAP Gov, M.T. Causley, long-tail shops | FL incumbents | Hold licenses, county relationships, builder accounts |
| County virtual inspections / photo affidavits | Free substitute | The most dangerous competitor on the "pain" step |
| CompanyCam, ServiceTitan, AccuLynx, JobNimbus | Adjacent | Own the field-capture habit and could embed inspection capture |
| PropLogix (Sarasota) | Adjacent incumbent | Lien and open-permit search for title; possibly resolution services (VERIFY). Partner or rival for the pivot |

## Why now

HB 683 (eff. 7/1/2025) reportedly authorizes software plan review and virtual inspections for single-trade work and tightens issuance deadlines after private-provider review. HB 267 (2024) added shot clocks. The ICC/NBIS retirement cliff (an ~2014 survey) is arriving now. Vision models can reliably read labels, nameplates and nailing patterns. Capital is validating the adjacent layer (PermitFlow, Govstream, Clariti-CivCheck), and PE is consolidating FL trade contractors.

## Wedge and business model

- **Pivot wedge:** open-permit resolution for FL home sales in Tampa Bay, through title agents and lien-search firms. AI reads permit history, works out the path to closure (final only, re-permit, engineer letter), runs guided seller capture, and routes the job to a partner private provider or the county. Price $300-1,000 per permit, with a 20-35% take on partner signer fees.
- **Next:** bulk backlog cleanup for PE HVAC and roofing platforms. Then a per-event SaaS evidence packet ($15-40) for existing private providers and building departments (helping them meet HB 267 clocks). Then builder MEP finals. Then insurer roof-evidence data.
- **Original model, kept as an option:** a licensed firm at $129-299 per permit. Deep-dive gross margin was 55-70%; skeptics estimate 35-50% once insurance, fallback trips and realistic signer throughput (20-35 a day) are counted.

## What's good

- It targets the right bottleneck (inspections and closeout), with a correct reframe away from plan review.
- The licensed-signer seat really is under-capitalized compared with city software and expediting.
- The retirement cliff turns into a labor pool: retired FRS officials working privately (VERIFY reemployment rules).
- Statewide licenses plus remote work give elastic post-hurricane surge capacity.
- Open permits are a hidden, publicly targetable market (counts appear on county portals).
- The checks are deterministic and auditable (FL Product Approval, NOA, AHRI), which suits regulators and insurers.
- Buyers are concentrated: PE platforms (Apex in Tampa, Wrench, etc.) and title channels.

## What's bad (the skeptics' strongest points)

- **Competition lens:** AI is the one thing you bring, and it is the only copyable part. Incumbents hold the licenses, insurance and builder relationships, and can license Blitz. Demand shrinks as cities improve (HB 267, city AI, cities doing their own HB 683 virtual inspections). PermitFlow can aggregate existing signers with none of the overhead. Roll-up targets are contested by Willdan, SAFEbuilt and PE buyers.
- **GTM lens:** misaligned incentives. An HVAC final blocks nothing the contractor cares about, which is exactly why permits stay open, so this is a vitamin with a net-premium line item. The one high-pain step (re-roof in-progress) may already be solved by free photo affidavits, and it is the highest-liability step. Roofing customers churn with storms and tort reform. Each FL jurisdiction is a separate sale with a hostile gatekeeper.
- **Feasibility lens:** if FL virtual inspections must be **synchronous video** or need **prior-business-day notice**, the 40-80/day async throughput and the 2-hour SLA are not legal, and the economics fall to ordinary services (about 2x, not 5x). Liability is correlated: one storm hits the whole roof book, local government is immune, the statute of repose is about 7 years, and carriers are filing AI exclusions (2025-26). A license is personal, so buying a shop does not deliver one. A BCAIB rubber-stamping complaint could be existential.

## Non-obvious insights

1. The product's demand is inversely correlated with public-sector competence. Sell to the city (evidence standard) as well as around it, so city speed-ups help you.
2. The payer with a deadline is the home seller at closing, not the contractor. The open-permit cost lands on whoever sells years later.
3. Insurance, not statute, is the real gatekeeper. Whoever co-designs an insurer-accepted photo-evidence standard owns the trust layer, and FL property insurers and Citizens may pay more for verified roof-attachment evidence than contractors pay for speed.
4. Virtual inspection is an adversarial-capture problem (the contractor films their own work), not a vision problem. Fraud-resistance is the product.
5. The national expansion map is shot-clock fallback statutes (TX HB 14 etc.), plus state modular third-party agencies (NTA, PFS TECO) as a less contested lane.

## Cheapest validation test (2 weeks, under $1k)

1. **Statute check ($0-300):** read the amended 553.791 / HB 683 text, or pay a FL construction attorney for an hour. Answer: may virtual inspections be async? Is prior notice required? How is the fee offset set? Kill the licensed-firm path if async is barred.
2. **Pull public data:** scrape open and expired permit counts and inspection lead times from Hillsborough, Pinellas and Tampa portals. Check whether each accepts re-roof photo affidavits and runs free video inspections.
3. **20 calls:** 8 title agents or lien-search firms (frequency of open-permit findings, current resolution cost and time), 6 HVAC/roofing ops leads, 3 FL private-provider owners (would they sign AI-prepped packets for a share? their E&O carrier?), 3 retired county inspectors.
4. **Insurance:** one broker conversation about E&O for AI-assisted virtual sign-off.
5. **Kill criteria:** fewer than 3 title or seller parties willing to pay $300+ per resolved permit, AND no private provider willing to partner. If both happen, pass.

## Unresolved questions

- Does HB 683 permit asynchronous recorded virtual inspections, and is there a prior-notice requirement?
- What are the actual fee offsets in Tampa Bay jurisdictions, and what is the statutory E&O minimum?
- How many FL closings hit open permits each year, and what is spent resolving them? How big is PropLogix's resolution business?
- Will carriers write E&O for AI-assisted sign-off, or exclude it?
- Has Blitz or PermitFlow moved into licensed services or provider networks?
- Has any county rescinded or restricted private-provider virtual inspections since July 2025?
- Do FRS reemployment limits apply to private-firm work?

## Sources (not re-verified this session)

- https://www.flsenate.gov/Session/Bill/2025/683
- https://www.flsenate.gov/laws/statutes/2025/553.791
- https://flsenate.gov/Session/Bill/2025/1071/Analyses/h1071c.IAS.PDF
- https://blog.blitzpermits.ai/florida-hb-683-building-permits-ai-plan-review/
- https://www.businessobserverfl.com/news/2026/may/02/tampa-naples-ai-planning-department-tool/
- https://www.fl-counties.com/wp-content/uploads/2025/10/CUA-6-Private-Providers.pdf
- https://bls.gov/ooh/construction-and-extraction/construction-and-building-inspectors.htm
- https://media.iccsafe.org/docs/ICC-NBIS-Future-Of-Code-Officials.pdf
- https://www.riversidecompany.com/investment-portfolio/safebuilt
- https://www.businesswire.com/news/home/20250204600784/en/Willdan-Expands-Florida-Presence-with-Acquisition-of-Alpha-Inspections
- https://www.geekwire.com/2025/seattle-area-startup-govstream-ai-raises-3-6m-to-improve-city-permitting-processes-using-ai/
- https://www.morningstar.com/news/business-wire/20251202551013/permitflow-raises-54-million-to-solve-constructions-biggest-bottlenecks-with-ai
- https://capitol.texas.gov/tlodocs/89R/analysis/html/HB00023E.htm
- https://www.houstontx.gov/legislative-report-2023/hb-14.html
- https://www.floridabuilding.org/pr/pr_app_srch.aspx
- https://www.flsenate.gov/Session/Bill/2023/360

## Round 2 diligence (2026-10-06)

> **Access caveat:** Primary sources were blocked again this round. Blocked: flsenate.gov, leg.state.fl.us, inspektr.com, tewandtaylor.com, freedomcodecompliance.com, pinelandengineering.com, closepermitsfast.com, proplogix.com and reddit.com. Everything below rests on WebSearch summaries, law-firm and vendor pages read only as snippets, and role-play interviews. "Verified" means two or more consistent secondary summaries. It does not mean the statute text was read.

### Score change: 45 → 30. Verdict: **PASS** (a narrow cash-flow option is noted below)

Why the score fell:
- **Whitespace is gone (6 → 2).** Florida licensed private providers already sell AI pre-review and same-day video inspections (Freedom Code Compliance, which runs on VuSpex). The exact pivot, a guided-capture platform sitting over a licensed signer, already exists as **Inspektr**, operated by **Tew & Taylor**. Tew & Taylor is a 553.791 firm founded in 2008 by Doug Taylor and Beverly Tew, and it also sells "Open Permit Support." A search this round suggests Inspektr is Tew & Taylor's own platform: they are the same operators, and the platform did not come from an outside startup. So the most capable incumbent has already combined the license, the software and the open-permit wedge.
- **Buyers confirm services-level economics.** Title agents pay $0, and RESPA Section 8 rules out paying them referral fees. Private providers refuse any percentage of their fee and would pay only $15-30 per inspection for software. Investors and flippers pay $150-300 per permit on top of fees. That is expediter-level margin.
- **The SAM shrinks.** HB 803's under-$7,500 permit exemption (effective 7/1/2026) likely removes a lot of low-end single-trade volume. The exact scope and exclusions were not verified.
- **Tailwinds are stronger but help everyone.** Each one also helps the incumbents and the counties:
  - HB 683 allows virtual single-trade inspections and software plan review.
  - HB 803 adds a deemed approval if a single-trade 1-2 family permit is not processed in 5 business days, and 10 business days with a private provider.
  - HB 803 also reportedly requires a fee reduction of at least 25%. One summary says this applies to the *commercial* permit fee. Whether it covers residential work is unverified.
  - Meanwhile, GovWell, OpenGov, Accela and Blitz all sell HB 803 shot-clock compliance to cities.
- **Founder fit is still poor (3).** The scarce asset is the license and the E&O insurance, and incumbents hold both.

### Fact-check

| Claim | Status | Evidence |
|---|---|---|
| HB 683 (eff. 7/1/2025) lets single-trade inspections be done in person or virtually | Verified (secondary) | [hammerngavel](https://www.hammerngavel.com/blog/553791-florida-statutes-revised-by-recent-bill-to-include-single-trade-permit-applications-plans-review-and-inspections). Still unverified: whether recorded or async inspections are allowed, and whether notice is required |
| HB 683 allows automated or software plan review for single-trade work | Verified (secondary) | [FAC CUA-6](https://www.fl-counties.com/wp-content/uploads/2025/10/CUA-6-Private-Providers.pdf) |
| The owner's fee offset is self-computed and "often fractional" | Contradicted / outdated | HB 803 (signed 5/7/2026, eff. 7/1/2026; Ch. 2026-63) requires a reduction of **at least 25%**. One summary says it covers the commercial fee only. [Adams & Reese](https://www.adamsandreese.com/insights/florida-hb-803-beyond-the-7500-exception) |
| The "why now" is HB 683 plus HB 267 | Partially true | HB 803 is the bigger change: a 10-business-day clock with a private provider, and 5 business days for single-trade 1-2 family work, deemed approved if missed. [GrayRobinson](https://www.gray-robinson.com/insights/post/5528/grayrobinson-construction-insight-by-attorney-jessica-jackson-hb-803-what-floridas-new-permitting-law-means-for-the-construction-industry) |
| FL single-trade volume is 0.9-1.3M permits a year, worth $150-325M | Contradicted / unsupported | No source found. The HB 803 under-$7,500 exemption likely removes much of the water-heater and small-repair volume, though its exclusions were not verified. [Cibercuba summary](https://en.cibercuba.com/noticias/2026-05-13-u1-e43231-s27061-nid329103-florida-aprueba-ley-exime-permisos-reparaciones) |
| No one owns the "AI-leveraged licensed signer" seat | **Contradicted** | Freedom Code Compliance advertises AI pre-review, "AI agents" that check permits, and same-day VuSpex video inspections. [freedomcodecompliance.com](https://freedomcodecompliance.com/) |
| The pivot (a capture and routing platform over licensed signers) is unoccupied | **Contradicted** | Inspektr is the platform and Tew & Taylor (since 2008) is the signer. [inspektr.com/who-operates-inspektr](https://inspektr.com/who-operates-inspektr/), [tewandtaylor.com/open-permit-support](https://tewandtaylor.com/open-permit-support) |
| Open permits at closing are a hidden, unsized market | Unverifiable | No frequency data. Title permit searches cost about $125-400. Service firms already exist. The 2019 open-permit law (553.79 area) reportedly allows closing permits 6+ years old and protects arm's-length buyers (unverified). [closepermitsfast.com](https://closepermitsfast.com/) |
| County virtual inspections and photo affidavits are a free substitute | Verified | [Hillsborough virtual inspections](https://hcfl.gov/businesses/permits-and-records/inspections/virtual-inspections) |
| PermitFlow raised a $54M Series B led by Accel (Dec 2025) | Verified | [BusinessWire](https://www.businesswire.com/news/home/20251202551013/en/PermitFlow-Raises-$54-Million-to-Solve-Constructions-Biggest-Bottlenecks-With-AI). No move into licensed inspection seen |
| Blitz is FBC-trained and partnered with CityView (Naples), funding undisclosed | Verified | [Business Observer](https://www.businessobserverfl.com/news/2026/may/02/tampa-naples-ai-planning-department-tool/) |
| InspectMind (YC W24) is an AI inspection competitor | Partially true | Now positioned as an "AI agent for construction drawings review." [YC](https://www.ycombinator.com/companies/inspectmind-ai) |
| BLS figures, Govstream $3.6M, Buildcheck $5.9M, Clariti/CivCheck, Willdan/Alpha | Unverifiable (not re-checked) | Round-1 citations stand |

### New competitors

| Name | Type | Notes | Funding / scale |
|---|---|---|---|
| Inspektr ([site](https://inspektr.com/)) | Platform over a licensed signer: **the pivot, already built** | Walks the technician through each checklist item on camera, prompt by prompt. Promises permits within 5 business days for single-trade 1-2 family work. Lee and Charlotte county pages. Apparently Tew & Taylor's own platform | Unknown |
| Tew & Taylor ([site](https://tewandtaylor.com/open-permit-support)) | FL 553.791 firm since 2008 | Plan review, inspections, Open Permit Support, "resolving open permits before a Florida closing." Pages for St. Pete and Orlando | Established; private |
| Freedom Code Compliance ([site](https://freedomcodecompliance.com/)) | AI-using FL private provider | AI plan pre-review, AI permit agents, same-day video inspections, HB 803 explainer. Pages for Orlando, Palm Beach, Lee and Pasco | Unknown |
| No Wait Inspections ([site](https://www.nowaitinspections.com/)) | Virtual private provider | App-based video inspections, inspector on within about 5 minutes | Unknown |
| Inspected ([site](https://www.inspected.com/)) | Virtual inspections for contractors | Says Broward accepts virtual inspections | Unknown |
| VuSpex | Video-inspection infrastructure | Any provider can adopt it, which undercuts a capture-layer moat | Unknown |
| Close Permits Fast, ClosePermits.com, 1 Contractor Solutions, Sarasota Permits, Palma, E&R Permitting | Open-permit and expediting services | Incumbents in the closing wedge. Advertised prices run from a few hundred to a few thousand dollars, with some starting at $750 (snippet) | Small firms |
| GovWell, OpenGov, Accela, Clariti/CivCheck, Blitz | City-side software | Help cities meet HB 803 clocks, which erodes the speed premium | Varies; Accela and OpenGov are large |
| SwiftBuild.ai, Mason AI ($4.3M Mar 2026, unverified), Structured AI ($4.2M seed, [ENR](https://www.enr.com/articles/63139-construction-quality-startup-structured-ai-raises-42m-seed-round)) | AI-native, adjacent | Permitting guides, building review, construction QA | As noted |

Crowding: the field is crowded with small operators. None has visible venture funding. The license-holders have already adopted the AI and video tools.

### Buyer interviews (role-play composites; not real quotes)

- **Independent title agency owner (Pinellas/Hillsborough, 60-90 closings a month).** Pain: *"I've had closings slide two weeks over a 400-dollar water heater permit."* Would not pay. *"I can't take a referral fee from you. That's RESPA Section 8."* *"I already have two or three people I send these to."* WTP is $0 for the agent. Sellers will pay *"400 or 500 bucks out of proceeds without blinking"* but push back at about $2k. What would get a yes: a free, no-login "permit diagnosis," plus proof of faster closes on 5 of their live files.
- **Tampa Bay investor/flipper ops director (25-50 deals a month). Strongest buyer.** *"My project coordinator spends probably a third of her week calling inspections... chasing subs to request finals."* *"Per-permit, pay when closed."* WTP is **$150-300 per routine final** on top of fees and **$750-1,500 per messy prior-owner permit**, with a volume discount after 50. Needs coverage of 3-4 counties, scheduling and lockbox access handled, a portfolio dashboard, and a resale-date guarantee.
- **Mid-size FL private-provider principal (6 inspectors).** *"My problem is not leads. My problem is inspectors."* *"20 to 35 percent of my fee? No."* *"I'm not signing off on a recording someone else shot."* *"My carrier asked about AI on the last renewal."* Would pay **$15-30 per inspection or a few hundred dollars a month** for software. Would take pre-qualified jobs at full fee, with the platform charging its markup to the seller. Wants a promise that you won't become a competing provider.
- **Implication:** the routing layer grosses about $100-300 per simple permit after the signer is paid in full. That is expediter economics, and venture-scale WTP is not evident.

### Pre-mortem: top failure modes

1. **Commodity services market (about 55-65%).** At least six firms already sell open-permit resolution, and AI only compresses the cheapest part of the job. The expensive parts are county research, archived plans, engineer letters and re-permits.
2. **No controlled channel (about 50%).** Title agents and realtors refer only occasionally, and each seller buys once in a lifetime.
3. **Signer squeeze and disintermediation (about 40%).** The license and E&O holder renegotiates the take to about 10% and then goes direct.
4. **Statute or insurance barrier (about 30%).** If virtual means synchronous video, or carriers add automation exclusions, the async throughput story dies.
5. **County gatekeepers (about 30-35%).** Counties audit legacy closeouts with concealed work, and a single BCAIB complaint can pause a partner.
6. **Feature absorption (about 25% over 3 years).** PermitFlow, CompanyCam, ServiceTitan or PropLogix adds closeout as a feature.

**Kill criteria:**
- **Day 14:** an attorney's read is that virtual inspections must be synchronous, or that notice is required, and no Tampa Bay county accepts recorded evidence.
- **Day 21:** mystery-shopping 5 incumbents shows a median of 10 business days or less and $750 or less, with no path to being 2x faster at a 40%+ gross margin.
- **Day 30:** fewer than 2 licensed providers sign up for routed work (pivot terms: full fee, platform markup).
- **Day 45:** 2 or more E&O carriers decline to quote or impose an automation exclusion.
- **Day 60:** fewer than 3 recurring buyers (investors, SFR operators, property managers, PE trade platforms) sign an LOI or paid pilot of at least 50 permits at $300 or more.
- **Day 75:** across at least 20 pilot jobs, the median time to closure exceeds 15 business days, or more than 25% of jobs need a truck roll or engineer letter, or gross margin falls below 35%.
- **Day 90:** any county memo restricting legacy virtual closeouts, any board complaint, or any comparable launch by PermitFlow, Blitz or PropLogix while committed monthly revenue is under $15k.

### Discovery-call script

1. (Title) Walk me through the last file where the search flagged an open or expired permit, from that day to closing. Who did what, and how many days did it take?
2. (Title) Of last month's closings, how many were flagged? How many were resolved, versus handled by credit, holdback or the buyer taking it subject-to?
3. (Any) Who paid for the last one, how much in total, and how was it paid (seller proceeds, credit card, contractor)?
4. (Any) Who do you send these to today? What do they do well, and when did they last let you down?
5. (Any) Has an open permit moved a closing or killed a deal recently? What did it cost, and who paid?
6. (Any) In the last 12 months, has any county administratively closed an old permit without an inspection? Which county?
7. (Investor/SFR) How many permits are open across your portfolio right now? How do you know? Show me where you track it.
8. (Investor/SFR) Why don't finals get called on your renovations? What happens when nobody is there to let the inspector in?
9. (Provider) How many office hours does a one-off open-permit job take before the inspector goes out? Where does that time go?
10. (Provider) What is your E&O carrier's stance on remote, AI-assisted or photo-based inspections? Would you take routed jobs at full fee if you kept control of the method and the sign-off?

### Who to call first

0. **Before any call:** spend about $300 on a FL construction attorney to confirm three things. (a) The 553.79 rule allowing closure of permits 6+ years old, and the protection for arm's-length buyers. (b) Whether 553.791 virtual inspections may be async, and what notice applies. (c) The exact HB 803 private-provider fee floor and the scope of the $7,500 exemption. Also confirm the 1.5% cap in the FR/BAR contract.
1. **Supply and competitors (3 calls).** Tew & Taylor/Inspektr: ask whether they would partner, white-label or sell, and what their open-permit volume is. Then E&R Permitting, plus 2 small Tampa Bay private-provider principals. Find them through the BOAF private-sector membership and LinkedIn "Building Code Administrator" AND Florida AND owner.
2. **Payers (5 calls).** Renovation and dispositions leads at Tampa Bay flippers doing 15+ deals a month, and SFR operators in Hillsborough, Pasco and Pinellas.
3. **Channel (8 calls).** Independent title agencies and closing attorneys in Pinellas, Hillsborough, Manatee and Sarasota (FLTA directory). Confirm PropLogix's offering. Frame these as research, never as a paid referral.
4. **Later.** Listing-agent teams that publish on permits (e.g., blog.teamrenick.com), and 1 E&O broker.

### First 30 days (only if the founder overrides PASS for a cash-flow play)

- **Week 1:** attorney read on 0(a)-(c). Mystery-shop 5 incumbents as a seller and record price and turnaround. Scrape open and expired permit counts from Hillsborough, Pinellas and Pasco portals for 3 investor LLCs, to build a sample "portfolio permit report."
- **Week 2:** call 3 private providers and 5 investor/SFR operators. Bring a free open-permit report on their own portfolio as the door-opener.
- **Week 3:** call 8 title agents and closing attorneys. Offer the free diagnosis page with no referral fee.
- **Week 4:** go/no-go. Proceed only if at least 3 recurring buyers commit to a paid, pay-on-close pilot of at least 10 permits each (at least 50 for the Day-60 gate), AND at least 2 licensed providers accept routed jobs at full fee. Otherwise kill. The product to test is a **portfolio open-permit monitor plus pay-on-close closeout service for investors and SFR operators**: SaaS dashboard plus coordinated services, with signers paid their full fee. Expect a $1-5M-revenue regional business, not a venture outcome.
