# AI-Native Commissioning for Liquid-Cooled AI Data Halls

**One-liner (as scouted):** A commissioning firm built around AI. It turns sequences of operation, submittals and point lists into test scripts and automated trend checks, so a few senior commissioning agents can cover far more data-center scope.

**One-liner (revised):** An on-prem "controls and power-monitoring readiness" engine for AI halls. It checks tens of thousands of BMS/EPMS points and control sequences against the design. It is sold first to controls integrators and commissioning firms, and the clean handover dataset it produces becomes the recurring hook.

> **Research caveat:** The shared web-search budget (200 calls) was used up and WebFetch was blocked by the egress proxy during deep dive, red team and this verdict. Figures and deals come from the scout's cited sources plus training knowledge (to about mid-2026). The verdict pass tried to spot-check the Vertiv–Purge Rite deal and AI-native entrants and both attempts were blocked. Re-verify before acting.

## Verdict: promising_with_pivot, overall 38/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | US data-center Cx about $0.7-1.5B/yr (estimate). The open, contestable slice is much smaller. |
| Pain intensity | 6 | Schedule delay costs about $3.5M/week per 100MW. But Cx is often not the critical path; power and equipment are. |
| Whitespace | 4 | No AI-native commissioning firm was confirmed. OEMs (Vertiv/Purge Rite, Schneider/Motivair, Eaton/Boyd) are absorbing the liquid-loop scope. |
| AI leverage | 5 | Strong on documents and point reconciliation. Weak on field witnessing, which is 80-90% of hours. Realistic gain is about 1.2-2x per head. |
| GTM feasibility | 3 | Reference-gated. Owner NDAs block white-labeling. Hyperscaler tenants pass their vendor lists down to neocloud sites. |
| Defensibility | 4 | The document layer will be commoditized by ChatGPT/Claude Enterprise and CxAlloy/Procore features. The only durable assets are the cross-project data and references. |
| Founder fit | 2 | A technical founder without credentials can't sell prime commissioning. The pivot raises this to about 5. |

## Thesis (revised)
The scout's version, "an AI-native commissioning firm billing 1-3% of capex", fails for a technical founder. The work AI speeds up (scripts, checklists, closeout) is only about 10-20% of hours, and every enterprise LLM seat can already do it. The valuable work (L5 integrated testing, field witnessing, owning the schedule) is gated by people, references and insurance. The part that survives is **deterministic verification**: point-to-point checks, point-list reconciliation, and verifying trend data against sequences. These have three useful properties: (a) they involve tens of thousands of items per AI hall, (b) they are machine-checkable once prose sequences are compiled to ASHRAE G36/231P CDL, and (c) they carry low liability because the product is a test instrument, not the commissioning agent of record.

The plan:
1. Sell first to controls integrators and EPMS vendors. They absorb point-to-point checkout labor on fixed-price subcontracts and get blamed for commissioning slips.
2. Sell second to commissioning firms.
3. Monetize the verified asset register and point map at handover, feeding DCIM, CMMS and monitoring-based commissioning (MBCx).

Alternative path if the founder can raise acquisition capital: buy a 20-60-person regional commissioning or NETA-testing firm that already has data-center references, an EMR history and insurance (about 4-7x EBITDA, estimate), then deploy the tooling internally.

## How it is done today
- **Who does the work:** the owner's commissioning authority (CxA), GC in-house commissioning for L1-L3, OEM start-up technicians, NETA testing firms, controls contractors (point-to-point checkout), and load-bank rental firms. Field labor is heavily ex-Navy-nuclear and 1099, billed at roughly $120-250/hr (estimate).
- **Levels:** L1 factory witness, L2 install verification, L3 pre-functional checks and start-up, L4 functional performance tests, L5 integrated systems testing (24-72 hours under load-bank heat load).
- **Tools:** Excel/Word, CxAlloy, Facility Grid, Bluerithm, CxPlanner, Procore/ACC checklists. Trend data usually arrives as late CSV exports from BMS front-ends.
- **Cost:** about $100-250k/MW, roughly 0.75-2% of facility capex excluding IT (deep-dive estimate). The LBNL commercial-building median is about 0.4% of construction cost.

## TAM
- US data-center Cx: **about $0.7-1.5B/yr** (spend-based $0.5-1.1B; capacity-based 8-12 GW at $100-150k/MW = $0.8-1.8B).
- US building Cx excluding pharma CQV: about $2-4B.
- Pool for document back-office work: about **$20-150M** (10-20% of hours × 30-50% price). This is the number that kills the original wedge.
- Pivot TAM (point and sequence verification): about 5-15% of data-center Cx plus controls-integrator checkout labor, roughly $100-300M/yr (estimate), plus handover-data and MBCx upside.

## Competitors
| Name | Type | Threat |
|---|---|---|
| Vertiv (+ Purge Rite, about $1B, reported late 2025) | OEM | Takes the "orphaned" TCS flush/fill/commissioning scope |
| Schneider (Motivair), Eaton (Boyd Thermal about $9.5B; Fibrebond) | OEM | Bundle liquid-loop start-up and prefab factory testing |
| CAI, Burns & McDonnell, Jacobs, WSP, Stantec, AECOM, Syska, Exyte | Incumbent Cx/A&E | Hold MSAs and references; AI raises their T&M margins |
| Acuren+NV5, TRC, Salas O'Brien, Introba, IMEG | PE roll-ups | Buying the regional firms that were the wedge customers |
| DPR, Holder, Turner, Mortenson, Clayco | GC in-house Cx | Own L1-L3 and turnover documentation |
| CxAlloy, Facility Grid, Bluerithm, CxPlanner | Cx SaaS | Will ship LLM script generation as a feature |
| Procore Helix, Autodesk (Pype), SafetyCulture | Platform AI | Spec-to-checklist and closeout automation |
| ChatGPT/Claude/Copilot Enterprise | Horizontal AI | The real substitute for authoring work |
| Trunk Tools ($40M B, Jul 2025), Doxel, Buildots, Buildcheck, LightTable | Adjacent AI-native | One feature away from L2/QA-QC |
| SkySpark, Clockworks, BrainBox/Trane, Phaidra, EkkoSense | FDD/analytics | Compete for the MBCx recurring line |
| LBNL OpenBuildingControl / G36 / 231P CDL | Open standards | Free infrastructure, available to every entrant |

## Why now
Data-center construction ran at about $50-75B/yr in 2026 (Census-based reporting) with about $81.5B in Dodge starts in 1H26. Direct-to-chip cooling and 800V DC add new test scope. Neoclouds and miner-to-AI converters are building without in-house Cx organizations. G36/CDL make sequences formally checkable. Labor is scarce.

## Wedge and business model (pivot)
- **Product:** on-prem/edge appliance plus software. It runs BACnet/Modbus/SNMP discovery and Niagara/EcoStruxure imports, reconciles points against drawings and the cause-and-effect matrix, gives technicians a tablet workflow for live point-to-point checks, and compiles prose SOOs into CDL for deterministic trend verification.
- **Pricing:** per point or per MW (for example $3-8k/MW), plus a handover-dataset fee to the owner, plus MBCx at $5-15k/MW/yr.
- **First customers:** 3-5 controls integrators doing data-center work (Niagara/Siemens/JCI shops) and 2-3 commissioning firms.
- **Avoid:** schedule-linked bonuses (they conflict with commissioning independence), white-labeling (owner NDA and subcontract-consent clauses), and owning liquid-loop flush/fill (OEM territory with cold-plate contamination liability).

## What's good
- A real, large capex tailwind with a delay penalty roughly 10-50x the Cx fee.
- No confirmed AI-native commissioning entrant (search was impossible, so this is unconfirmed).
- Point and sequence verification is high-volume, formalizable and auditable. It fits AI plus a rules engine, not pure generation.
- The handover dataset is a natural recurring hook into DCIM, CMMS and MBCx.
- Credential-gated rather than license-gated, so an acquisition path can compress the reference gap.
- Retro-commissioning under building performance standards is a modest counter-cyclical hedge.

## What's bad (skeptics' strongest points)
- **Competition:** The three claimed openings are closing. Neocloud and miner capacity is pre-leased to hyperscalers and AI labs, who pass down their commissioning standards and approved firms. OEMs are buying the TCS-loop scope (Vertiv/Purge Rite). Prefab and NVIDIA DSX digital twins move L1-L3 into OEM factories. What's left for a startup is commoditized authoring.
- **GTM:** A white-label back office asks a T&M firm to give up its easiest billable hours. Revenue erodes because clients keep and reuse the scripts. Owner NDAs and subconsultant-consent clauses forbid undisclosed AI subcontracting. Prime commissioning sales cycles are 12-24 months and reset on every project.
- **Feasibility:** Every AI-written L5 script needs line-by-line senior review, which cancels most of the gain. One hallucinated breaker sequence next to a live hall could cause an arc flash or a dropped load. Insurers are adding generative-AI exclusions (unverified). Neocloud credits are fragile, and receivables run 60-120 days. Realistic leverage is about 1.2-1.5x, which makes this a better services firm, not a venture-scale company.

## Non-obvious insights
1. **Who decides:** the tenant decides who commissions, not the owner. "Non-hyperscaler owners" are often hyperscaler-gated one contract removed.
2. **Two kinds of AI output:** errors in generated test procedures are dangerous; errors in a verification engine show up as visible mismatches. Build the instrument, not the author.
3. **Where the money is:** controls integrators, not commissioning firms, absorb point-to-point checkout cost on fixed-price subs. They are the buyer with the most labor pain and no conflict over billable hours.
4. **What to price:** the commissioning firm's independence is its product, so schedule-linked bonuses destroy trust rather than creating a pricing edge.
5. **What compounds:** the asset/point dataset captured during verification is the only thing that compounds across halls. Sell it to OEM service organizations that are themselves short of verification tooling.

## Cheapest validation test (2 weeks, <$1k)
1. Run 15 LinkedIn/phone interviews: 8 controls-integrator project managers on data-center jobs, 4 commissioning-firm principals, 3 neocloud/miner delivery leads. Ask: hours spent on point-to-point checkout per MW; whether checkout was ever on the rent-start critical path; whether tenant leases name the CxA; whether they would install an on-prem tool.
2. Get one real (redacted) point list plus SOO from a friendly integrator. Build a weekend prototype that reconciles points against the design and compiles one sequence to CDL. Measure the mismatch-detection rate against their manual punch list.

**Kill** if fewer than 4 of 8 integrators report 300+ checkout hours per hall, or if tenants name the CxA on most leases with no third-party verification tools allowed.

## Unresolved questions
- Is there a funded AI-native commissioning or verification entrant (YC 2024-26, stealth)? Unchecked.
- Do neocloud and miner build-to-suit leases name the tenant's CxA? What share?
- What is the real time split of liquid-cooled hall commissioning hours (documents vs. field)?
- Will controls contractors give tool access to live BMS/EPMS networks during construction?
- Does Vertiv/Purge Rite cover independent loop verification, or only flush/fill?
- Do professional-liability carriers exclude generative-AI-authored procedures?
- Is the LBNL "acceptance testing ≈64% of Cx cost" figure real?

## Sources
- https://eta-publications.lbl.gov/sites/default/files/crowe_-_building_commissioning_costs_and_savings_.pdf
- https://www.bcxa.org/blog/final(ly)!-lbnl/bcxa-cx-costs-and-savings-2004/2008/2018,-1500-north-american-buildings.html
- https://www.datacenterdynamics.com/en/marketwatch/how-ai-is-reshaping-data-center-power-testing-and-commissioning/
- https://introl.com/blog/data-center-workforce-shortage-340000-unfilled-positions-2026
- https://www.irecruit.co/insights/data-center-commissioning-updates-2026
- https://datacenterscope.com/costs/data-center-commissioning-cost/
- https://mlq.ai/news/us-census-data-center-construction-hits-507b-annualized-rate-surpassing-office-spending/
- https://yournews.com/2026/09/02/7183957/u-s-data-center-construction-spending-jumps-nearly-60-as-ai/
- https://contractorplus.app/blog/construction-backlog-indicator-april-2026
- https://www.astuteanalytica.com/industry-report/data-center-commissioning-and-testing-services-market (low reliability)
- https://facilitygrid.com/blog/best-commissioning-software-for-construction-how-facility-grid-compares-to-bluerithm-cxalloy-and-cxplanner/
- https://www.insightpartners.com/ideas/trunk-tools-closes-40m-series-b-to-lead-constructions-ai-transformation/
- https://obc.lbl.gov/ (OpenBuildingControl / CDL)
- Training knowledge, to verify: Vertiv–Purge Rite (about $1B, late 2025); Eaton–Boyd Thermal (about $9.5B, late 2025); Schneider–Motivair (2024); Acuren–NV5 (2025); NVIDIA Omniverse DSX blueprint; IREN–Microsoft, Cipher–AWS, Hut 8–Fluidstack/Anthropic leases.
