# Air Headroom: parcel-level Clean Air Act capacity data and a white-label permit engine for onsite-power siting

*Started as the "Behind-the-Meter Air Desk," an AI-native air-permit consultancy for data-center onsite generation.*

**One-liner:** Use LLMs to turn thousands of state air-permit PDFs, RBLC entries and emissions inventories into a parcel-level map of "air headroom": attainment status, major-source thresholds, remaining 1-hr NO2 and PM2.5 room, and the likely permit path. Sell it to powered-land developers, site selectors and lenders. Then license the same modeling and drafting engine to the small air boutiques that remain consultant of record.

> **Research caveat:** Live verification was not possible in any stage of this run. The shared WebSearch budget was used up and WebFetch was egress-blocked. The deep dive, all three red teams and this verdict rely on model knowledge (cutoff about mid-2026). Funding figures, policy specifics (EO 14318, EPA NSR "begin actual construction", Texas SB 6), xAI Memphis facts and the TCEQ PE-seal threshold are all marked [verify].

## Verdict

**Promising, but only with the pivot. Overall 40/100.** The permit-consultancy idea as scouted is a sound AI-enabled services business but not a venture-scale bet for a technical founder. The data and engine version avoids the trust, liability and licensing walls, but the market is small and the business is cyclical.

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Data-center-linked air spend is about $100-330M/yr (estimate). Only the $2-4B air-consulting market is large. |
| Pain intensity | 5 | Real on onsite prime-power and PSD projects, but agency review sets the schedule, not drafting. |
| Whitespace | 6 | No funded AI-native air-permitting firm known (unverified). Paces and Transect sit one feature away. |
| AI leverage | 5 | Realistic savings are 15-30% of hours. The strongest leverage is extracting nearby-source data from PDFs. |
| GTM feasibility | 3 | Buyers pick the consultant the agency trusts. Hyperscaler work is bundled under EPC MSAs. Repeat buyers bring the work in-house. |
| Defensibility | 3 | Incumbents have larger private archives and get the same LLMs cheaply. The moat (agency trust) is human. |
| Founder fit | 2 | Requires a senior air PE, likely a Texas PE seal (projects above about $2M), firm registration and E&O insurance. |

## Thesis (revised)

The scout's wedge, backup-genset permits, is the commodity tier. Texas PBR 106.511 and state general permits make it cheap. The valuable tier is PSD/NNSR, BACT and cumulative 1-hr NO2 modeling for onsite or bridge turbines and recip engines. That work is bought on trust and is gated by agency review and public process, so a startup consultancy loses on both counts. The defensible insight is different: **air capacity is an unpriced land attribute, and headroom is first-come, first-served.** The first campus in a cluster (Abilene, New Albany, Loudoun/Prince William) uses up the NO2 and PM2.5 headroom the next one needs. Nearby-source stack parameters sit in scanned permit PDFs and state inventories, and nobody aggregates them. So the stronger company:
1. **Air Headroom subscription** ($50-250k/yr) for powered-land developers, site selectors, data-center brokers, infrastructure lenders and utility large-load teams. It is screening only, never filed, so liability is low.
2. **White-label engine** for 1-50 person air boutiques and EPC air groups. It covers inventories from spec sheets, auto-built BPIP downwash, nearby-source extraction, protocol drafting tuned to each agency, and deficiency-letter responses. Their PEs keep the seal and the agency relationship.
3. **Optional later:** acquire a 10-30 person boutique and run the engine inside it for margin, then add compliance reporting through OEM telematics or EPMS integrations.

Realistic outcome: a $20-60M revenue business. Venture scale only if the engine generalizes to Permian and Bakken minor NSR and to manufacturing Title V.

## How the work is done today
Applicability and PTE (Seitz memo 500 hr/yr default) → emissions inventory in Excel from vendor sheets and AP-42 (20-80 junior hours) → BACT from RBLC plus state files → modeling protocol approval (a hidden critical path) → AERMOD with BPIP-PRIME downwash, NO2 Tier 3 methods (OLM/PVMRM/GRSM) and hand-built nearby-source inventories (100-600+ modeler hours) → application assembly → completeness review (30-60 days), deficiency letters, 30-day public notice, EPA 45-day review, possible contested hearings → compliance (hour logs, NSPS KKKK and JJJJ stack tests, Title V reports). Fees (estimates): PBR or general permit $5-25k; minor NSR with modeling $40-150k; PSD/NNSR $300k-1.5M+ over 9-18 months.

## TAM (estimates; none verified)
- Genset permits plus modifications: about $40-55M/yr. Onsite and bridge prime-power permits: $30-115M. Recurring compliance: $30-165M. **Data-center-linked total: about $100-330M/yr**, perhaps $200-450M by 2029.
- Headroom data: about 100-300 active powered-land developers, site selectors, lenders and utility teams × $50-250k = about $15-50M SAM for data alone.
- Expansion: US air-quality consulting is about $2-4B (EBJ order of magnitude [verify]). Oil and gas plus manufacturing raises SAM to about $600M-1B.

## Competitors

| Name | Type | Relevance |
|---|---|---|
| Trinity Consultants | Incumbent (PE-owned [verify]) | Largest air consultancy; owns BREEZE modeling software; the default choice for PSD work; most likely to adopt AI internally |
| ERM (KKR [verify]), Ramboll, WSP, AECOM, Tetra Tech, SLR, HDR | Incumbent | Hold hyperscaler MSAs; air is bundled into larger scopes |
| Burns & McDonnell, Black & Veatch, Sargent & Lundy, Kiewit, Kimley-Horn | EPC/OE (adjacent) | In-house air groups; the real gatekeepers for campus work |
| Montrose Environmental (NYSE: MEG) | Incumbent | Owns stack testing and CEMS; serial acquirer of boutiques |
| Apex, Verdantas, other PE roll-ups | Incumbent | Outbid startups for boutiques |
| Lakes Environmental (AERMOD View) | Incumbent software | Sets desktop-GUI price anchor at a few thousand dollars per seat |
| Enablon, Sphera, Cority, VelocityEHS, Intelex | Incumbent with AI features | Default home for compliance tracking |
| Cat VisionLink, Cummins, Schneider/Eaton/Vertiv EPMS | Adjacent | Already the system of record for run hours |
| Paces, Transect | AI-native | Already sell siting to the same buyer; air headroom is a feature for them. **Biggest threat to the pivot.** |
| PermitFlow ($31M Series A, Kleiner, 2024 [verify]), Encamp | AI-native | Adjacent permitting and compliance |
| Bloom Energy (AEP 1 GW; Brookfield $5B [verify]) | Substitute | Permit-light fuel cells reduce combustion permitting |
| DOE/PNNL PermitAI, CEQ tech plan | Government | Free agency tooling, NEPA-focused |

## Why now
Turbine OEM slots are reportedly booked into 2028-30 [verify], pushing developers to aeroderivatives, mobile turbines and recip fleets, which means more emission units per MW. EO 14318 (July 2025) and EPA NSR flexibility [verify] raise permit volume and change the rules. Texas SB 6 and demand-response use of emergency engines blur emergency classification. xAI Memphis (about 35 turbines alleged unpermitted; 15-turbine permit July 2025 [verify]) made air exposure a diligence item for capital providers. State modeling sections are thin.

## Wedge and business model
- **First product:** a parcel-level Air Headroom report and map for Texas, Oklahoma, Ohio and Pennsylvania attainment areas. Pricing is $5-15k per site to start, then a $50-250k/yr subscription with alerts on pending nearby applications that would consume headroom.
- **Second:** an engine license to boutiques at $50-200k/yr or per project.
- **Avoid early:** fixed-fee permits with completeness guarantees, which shift agency-scope risk onto the startup.

## What's good
- Real, measurable whitespace. No AI-native air-permitting firm is known, and the nearby-source and headroom data asset does not exist anywhere in structured form.
- Air capacity as a land attribute is a genuinely non-obvious insight. It explains why multi-GW onsite gas campuses cluster in West Texas and attainment counties in Ohio and Pennsylvania, outside DFW and Houston (25 tpy NOx thresholds there).
- 1-hr NO2 driven by simultaneous genset testing links permitting to operational scheduling software.
- Buyers in this market are insensitive to price, since air permitting is about 0.01-0.1% of campus capex.
- The data product sells to investors and lenders, a buyer set that is less risk-averse than permit applicants.

## What's bad (strongest skeptic points)
- **Competition lens:** AI drafting becomes a $30-100 per seat per month feature inside Trinity and the EPCs, who keep T&M billing and agency trust. Paces and Transect can add an air layer to the siting workflow they already own. PE roll-ups outbid a startup for a boutique.
- **GTM lens:** The two segments cancel out. Where AI helps most (PSD), buyers will not risk an unknown firm. Where they will try one (standardized bridge packages, PBR), the work is already cheap and repeat buyers hire an ex-TCEQ engineer. Getting on a hyperscaler MSA takes 6-18 months, with E&O cover of $5-10M+. The compliance tail is a small-ticket enterprise sale that needs OT integration.
- **Feasibility lens:** Savings are 15-30% of hours, not 50%, because checking an AI-built modeling deck takes nearly as long as building it. A Texas PE seal is likely required for NSR projects above about $2M capital cost [verify 30 TAC 116.110], which breaks the "no license needed" premise. RBLC is patchy, and nearby-source parameters often come from agency inventories rather than PDFs. A single hidden modeling error in a contested data-center permit ends the firm's reputation.
- **All lenses:** Agency review and public process, not drafting, set the schedule. "Begin actual construction" flexibility lowers the cost of delay. Bridge power is a 2025-29 bubble exposed to an AI-capex pullback. Deregulation and fuel cells shrink the fee pool.

## Non-obvious insights
1. Headroom is first-come, first-served. Cumulative NAAQS modeling penalizes the second and third campus in a cluster, so early-warning data is worth more than drafting speed.
2. The binding constraint for engine fleets is the 1-hr NO2 NAAQS, not annual tons. The fix is test scheduling, which is software.
3. Synthetic-minor envelope design (hour, fuel and unit caps that maximize usable MW-hours under 100/250 tpy) is an unproductized optimization problem.
4. The bridge-power "nonroad engine under 12 months" gray zone (40 CFR 1068.30) is now watched by litigants. A defensible temporary-to-permanent strategy is a product in itself.
5. Some policy shifts shrink this business: deregulation cuts complexity, so permit volume has to grow faster than the rules simplify.

## Cheapest validation test (2 weeks, under $1k)
1. Hand-build an Air Headroom report for 3 real candidate parcels (Abilene, Amarillo, New Albany OH). Pull nearby sources from TCEQ and Ohio EPA public records using Claude plus RBLC, and run screening AERMOD (free EPA binaries). Cost is about $200 in compute.
2. Send it cold to 25 people (VP Development or Head of Power at powered-land developers, converted bitcoin miners, Crusoe/Lancium/Fermi-type firms, plus 5 infrastructure lenders and 5 site-selection consultants), asking for a 20-minute review. **Kill criteria:** fewer than 3 say they would pay at least $10k per site, or fewer than 2 can name a project where air limits changed site choice or MW.
3. In parallel, phone 5 air boutiques. Do they want the nearby-source extraction engine at $2-5k/month? Ask a TCEQ permit reviewer and a Texas PE about the seal threshold.

## Unresolved questions
- Does a TCEQ PE seal apply to projects above about $2M capital cost, and does TBPELS firm registration apply to modeling work?
- How many significant onsite and bridge permits are filed per year: 100+ or a few dozen mega-projects?
- What share of permit cycle time is deficiency and rework versus statutory process? Is TCEQ tracking data available?
- Has Paces, Transect or LandGate already shipped an air layer? Is there any stealth or YC 2025-26 AI air-permit startup?
- Do agencies like TCEQ prescribe nearby-source inventories, which would make PDF extraction moot?
- Will Bloom and utility-built generation take most onsite GW by 2028?

## Sources (cited from model knowledge; not fetched this run)
- EO 14318: https://www.whitehouse.gov/presidential-actions/2025/07/accelerating-federal-permitting-of-data-center-infrastructure/
- SELC on xAI Memphis: https://www.selc.org/news/xai-built-an-illegal-power-plant-to-power-its-data-center/
- EPA RBLC: https://cfpub.epa.gov/rblc/
- TCEQ PBR / NSR forms: https://www.tceq.texas.gov/permitting/air/permitbyrule ; https://www.tceq.texas.gov/permitting/air/forms/newsourcereview
- 40 CFR 60 IIII/JJJJ/KKKK, 63 ZZZZ, 1068.30: https://www.ecfr.gov
- EPA NSR: https://www.epa.gov/nsr ; stationary engines: https://www.epa.gov/stationary-engines
- Texas PE board: https://pels.texas.gov
- Bloom investor relations: https://investor.bloomenergy.com ; VoltaGrid: https://www.voltagrid.com ; Montrose: https://investors.montrose-env.com
