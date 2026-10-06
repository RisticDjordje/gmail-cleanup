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
