# Landscape: who is already building AI for traditional industries (YC W25-F26, a16z speedrun, tier-1 VCs)

*2026-10-07. Data: 500 in-scope startups. 365 come from the full YC directory for W25-F26 (1,360 screened, 995 excluded as not traditional-industry). 135 come from a16z speedrun, a16z and other tier-1 deal scans (202 scanned, most at snippet level). Full YC list: [data/yc-w25-f26.csv](data/yc-w25-f26.csv). Companion to [MEMO.md](MEMO.md) and [04-founder-fit-rescore.md](04-founder-fit-rescore.md).*

---

## 1. Bottom line

- **Crowding:** healthcare admin (68), insurance (54), manufacturing (51), accounting/back office (42), logistics (37) and construction (36) hold 58% of all entrants. The densest workflows are RCM/prior auth, vertical phone agents, quote-to-order, takeoff/estimating, month-end close and broker placement.
- **Money:** a16z-led vertical Series As clustered at **$25-55M** (Prosper, Lassie, Ease, Probook, Town, Lio). Tier-1 firms are buying category leaders (Harvey, EliseAI, Avoca, HappyRobot), not seeding new categories.
- **Model shift:** 22% of entrants sell the outcome (AI-native services or full-stack operators). In insurance it is 41%. YC is funding "be the firm" as often as "sell the firm software."
- **Whitespace:** workflows with large spend but almost no entrants. They involve slow buyers (water/wastewater utilities, telecom make-ready, upstream oil and gas back office, ag co-ops, port demurrage), have to read the buyer's own operating data (manufacturer warranty analytics, multi-site utility bills), or sit beside a vertical-software system instead of replacing it (legacy data migration, trade-license exam prep).
- **For this founder:** stay out of phone agents, RCM, quote-to-order and broker tools. After the round-6 re-check (§5), **RegistryPilot, PlanSet, Switchboard, FieldSignal and ParityProof are all contested**; what stays open in each is a neutral verification layer. **CodeTab** is the only shortlist idea still open. **Contents reconstruction** is contested (InventoryQuant) and **Linegraph** is effectively taken (Operon).

---

## 2. Crowding heatmap

Heat: 🔴 crowded (30+ entrants, or 10+ on one workflow) · 🟠 contested · 🟢 thin. "Svc" = AI-native services plus full-stack operators.

| Cluster | YC | Tier-1 / speedrun | Product : Svc | Most-attacked workflows | Examples | Heat |
|---|---|---|---|---|---|---|
| Healthcare admin | 52 | 16 | 59 : 7 | RCM and denials, prior auth, credentialing, front-desk calls, behavioral-health all-in-one | Lassie, Prosper, Ease (a16z); ClaimGlide, Taiga, Arctic, LunaBill (YC); Latent, Anterior, Cohere | 🔴 |
| Insurance | 34 | 20 | 28 : 22 | Commercial broker placement, submission intake, claims review, AI-native brokers and carriers | FurtherAI, Pace (Sequoia), Fulcrum; Harper, Casey, Florin, Veltha (YC); Corgi | 🔴 |
| Manufacturing/industrial | 38 | 13 | 32 : 15 | Quoting/RFQ, shop-floor vision, full-stack factories (CNC/PCB), plant data layers | Hadrian, SendCutSend, Arrakis; Operon, Smartbase, Tenet, Lumari (YC) | 🔴 |
| Accounting/back office | 31 | 11 | 30 : 11 | Month-end close, AP/AR, tax prep, internal audit/SOX, AI-native accounting firms | Rillet, DualEntry, Town, Accrual; Rational, Balance, Denki, Arden (YC) | 🔴 |
| Logistics/freight | 25 | 12 | 25 : 10 | Broker carrier calls, load planning, forwarder quoting, customs | HappyRobot, Augment, Loop; Fleetline, Maximal, Lanesurf, Tarifflo (YC) | 🔴 |
| Construction/trades | 19 | 17 | 30 : 4 | Takeoff and estimating by trade, drawing QA/clash/RFI, permitting, site robotics | PermitFlow, Buildots, XBuild, Bobyard; Bild, Bidflow, Helonic (YC) | 🔴 |
| Banking/lending | 24 | 7 | 22 : 8 | Collections, AML/fraud alerts, mortgage and commercial LOS rebuilds | Valon, Vesta, Salient; Copperlane, Proximitty, Zomma (YC) | 🟠 |
| Legal | 24 | 7 | 20 : 10 | Law-firm intake, AI-native law firms, plaintiff case building, immigration | Harvey, Eve, Crosby, Legora; General Legal, Moritz, LegalOS (YC) | 🟠 (🔴 in intake) |
| Distribution/wholesale | 19 | 4 | 20 : 2 | Email/PDF order and quote entry into ERP, inside sales, inventory planning | Canals ($35M), Lio (a16z); Mercura, Comena, Whitespace, Lark (YC) | 🔴 on one workflow |
| Real estate/property | 15 | 7 | 17 : 5 | Leasing and resident comms, STR ops, appraisal, title | EliseAI; Wayline, Trellis, Vestris, Tire Swing (YC) | 🟠 |
| Government/public | 16 | 4 | 16 : 4 | Permit review, police reports, 311, gov-contract capture | GovWell, Pryzm; Permitify, Verdant, Code Four (YC) | 🟠 |
| Home services SMB | 12 | 5 | 16 : 1 | Missed-call booking, dispatch, tech upsell | Avoca ($1B), Netic, Probook; Hey Telo, CentralComs (YC) | 🔴 on calls |
| Retail/hospitality | 16 | 0 | 16 : 0 | Hotel and restaurant phone reservations, CCTV ops | Riviera, Flowtel, Codyco, Elyra (YC) | 🟠 (no tier-1) |
| Energy/utilities | 12 | 3 | 12 : 3 | Grid planning/interconnection, inspection, energy procurement | GridCARE, ThinkLabs; Squid, Talos, Voltair (YC) | 🟢 (power only) |
| Automotive | 9 | 3 | 10 : 2 | Dealer service-call agents, repair-shop OS, AV fleet depots | Toma (a16z), Mia Labs; Flai, Parrot, CarSignal (YC) | 🟠 |
| Food/ag | 6 | 3 | 7 : 2 | Livestock monitoring, farm robots, distributor ordering | Halter, Pepper; Nexa, Brumby (YC) | 🟢 |
| Professional services | 7 | 1 | 5 : 3 | Staffing outreach, PE diligence, FDA submissions | Trove; DiligenceSquared, Panacea (YC) | 🟢 |
| Education/workforce | 6 | 0 | 6 : 0 | Grading, SIS, campus admin | Edexia, Frizzle, Scout (YC) | 🟢 |

---

## 3. What's getting funded: 11 patterns

1. **A voice agent for each vertical's phone line (35+ companies).** Hotels (Riviera, Flowtel, Codyco, Lance), restaurants (Certus, Elyra), clinics (Trapeze, Elite, Paratus, Prosper), dealers (Flai, Toma, Mia Labs), trades (Avoca, Netic, Hey Telo, CentralComs), freight (HappyRobot), leasing (EliseAI), collections (Altur, Salient). The channel is commoditized; winners compete on distribution speed.
2. **Back-office clones in healthcare RCM, prior auth and credentialing (about 25).** Billing (Overdrive, Taiga, LunaBill, Clicks, Lassie, Amperos), prior auth (ClaimGlide, Ruma, Latent, Anterior, Cohere, Mandolin), credentialing (Harbera, Arctic, Assured). Buyers exist on both sides, payers and providers, and each new entrant now competes on a specialty niche (dental, infusion, radiology, SNF).
3. **AI-native services and full-stack operators (110 of 500).** Accounting firms (Rational, Last Accounting Co, Billow, Town, Synthetic), law firms (General Legal, Moritz, Crosby, Athena), brokers and carriers (Harper, Casey, Florin, Corgi), TPAs (Veltha, Nara), factories (Hadrian, Tenet, Forge Automation), trucking (TrueMile), roll-ups (Radley, Allia, E3Tech).
4. **Insurance rebuilt end to end.** Tools for brokers and carriers (FurtherAI, Fulcrum, CopyCat, Covera, Qlo), BPO replacement (Pace), and AI-native carriers and brokers for new risks (PRINCEPS for data centers, Risklytics for robotics, Valgo for autonomy). It is the densest category for full-stack models.
5. **Quote-to-order agents for distributors and manufacturers (about 25).** Email/PDF to ERP order entry, RFQs and quotes: Canals, Mercura, Paragon, Avent, Comena, Ventura, Hexa, Arzana, Lark, Asakana, burnt, Stockline. One crowded wedge; the next move is "run the whole distributor" (Whitespace, Modern Industrials).
6. **Construction preconstruction.** Takeoff and estimating split by trade (Bild Div 8, Alkali steel, Rudus concrete, Bidflow electrical, Bobyard landscaping, Beam), drawing QA (Helonic, Structured, LightTable, Avoice), permitting (PermitFlow), scheduling (Foresight, Cascade).
7. **"AI workforce for [industry]" (the speedrun template).** Tax firms (Grove Tax), accounting firms (Quanto), heavy-vehicle repair (Heavi), building-materials distributors (Modern Industrials), construction (Piper-ai), brokerages (General Magic), property managers (Alven). Speedrun now expects about $100K ARR at entry.
8. **Autonomous close and AI-native ERP.** Rillet, DualEntry ($90M A), Sintropix, Mesh, FullSeam, End Close, plus SOX/internal audit agents (Oxus, Arden, Denki). Migration is bundled free as a weapon (DualEntry), which matters for GP Liftoff.
9. **Compliance agents for financial services.** AML/fraud alert work (Socratix, MouseCat, Hickory), KYC and disputes (Zomma, Rapidfolio), trade surveillance (TovenAI), obligation mapping (Cardamon).
10. **System-of-record rebuilds in lending.** Mortgage LOS (Vesta, Copperlane), commercial lending (Proximitty, Bilrost, Zolvo), SBA (Casca), servicing (Valon). These compete with point tools.
11. **Physical AI and capex bottlenecks get the biggest checks.** TerraFirma ($100M A), Mind Robotics, SendCutSend ($110M A), Buildots ($130M), Saronic. Grid interconnection for data centers (GridCARE $64M, ThinkLabs, Squid).

**Meta-pattern:** the wedge is almost always one of five things: inbound phone calls, document-to-ERP entry, quote/takeoff, claims or billing paperwork, or compliance paperwork. Nearly all of it is "BPO replacement" for work currently done by offshore or clerical staff.

---

## 4. Whitespace: big spend, zero or about one recent entrant

"Entrants" means the 500 companies in this dataset. Incumbent software may still exist, and "why empty" notes that.

| # | Workflow | Industry | Entrants here | Why it's empty | Empty for a good reason? |
|---|---|---|---|---|---|
| 1 | **Legacy vertical-software data migration** (dental, veterinary, field-service, small-ERP backups into a new platform) | Cross-vertical SMB | ~1 (superglue, ERP-only); Hypercubic is mainframe | Looks like services; every vertical-SaaS challenger does it in-house, badly | **Partly no.** Vendors already pay per conversion. Risk: it stays semi-services until the extractor library matures |
| 2 | **Manufacturer-side warranty and field-quality analytics** (claim NLP, early defect detection, supplier recovery) | Mid-market vehicle and equipment OEMs | 0 (Kebra and Bernard file claims for servicers; HERA and Hundred do in-plant QA) | Needs the buyer's own claims data and statistics depth, not an LLM wrapper; Tavant serves the top end | **No.** Low claim counts at small OEMs are the real limit |
| 3 | **Trade-license exam prep and credentialing** (electrician, plumber, HVAC, contractor) | Skilled trades workforce | 0 (Alice.tech and Miyagi are general exam prep) | Edtech is out of fashion (K-12 funding collapse); small ticket | **Partly.** Self-serve cash works; venture scale needs workforce/employer expansion |
| 4 | **Residential permit plan sets for small contractors** (decks, ADUs, sheds) | Residential construction | 0 on the drafting side (Permitify, Verdant, GovWell are city-side; PermitFlow tracks applications) | Stamp and E&O rules vary by state; $50 Fiverr anchor | **Partly.** Liability is real; jurisdiction data is a moat |
| 5 | **Telecom/fiber make-ready and pole-attachment applications** | Broadband buildout (BEAD $42B) | 0 | Utility-controlled process, engineering firms do it by hand, public-funding cycles | **Mostly yes.** Gatekeeper utilities and lumpy BEAD timing |
| 6 | **Water/wastewater utility operations and compliance** (DMRs, lead service line inventory, rate cases) | Municipal water (~50k systems) | 0 (all energy entrants are power) | Public procurement, tiny IT budgets | **Yes for bootstrapping.** Long cycles; engineering consultants are the channel |
| 7 | **Upstream oil and gas back office** (JIB, division orders, revenue disbursement, owner relations) | Oil and gas operators | 0 (Monarcha and Parca do land/maps) | Enverus and Quorum incumbents; VC aversion to fossil fuels; cyclical | **Partly.** Incumbents strong, but the aversion is not a fundamental reason |
| 8 | **Waste hauling operations** (dispatch, billing, contamination fees) | Waste and recycling (~$100B US) | 1 (Colmez, speedrun); Dayjob partial | AMCS/Routeware incumbents; WM and Republic run in-house | **Mostly no.** Long tail of 20k independents is reachable |
| 9 | **EHS and environmental reporting** (air permits, TRI, SDS, stormwater) | Process industry, manufacturing | ~1 (Rimba) | Sphera/Cority/Enablon incumbents; liability fear | **No.** Our Air Headroom and PackWeight sit adjacent |
| 10 | **Ag co-op and grain elevator back office** (grain contracts, settlements, scale tickets) | Agriculture | 0 (all food/ag entrants are robotics or distributors) | Rural buyers, legacy vendors (Agris, Bushel) | **Partly.** Bushel owns the farmer-facing side; small buyer count |
| 11 | **Maritime demurrage/detention disputes and port ops** | Ocean shipping and drayage | 0 | Forwarder AI focuses on quoting; carriers hold the data | **Partly.** Recovery revenue decays; the FMC billing rule (2024) creates evidence requirements |
| 12 | **Multi-site utility bill audit and tariff optimization** | Retail chains, franchisees, property owners | ~1 adjacent (Condor does procurement) | Savings decay, contingency economics; Arcadia/Urjanet supply data | **Partly.** Our TariffWise; recurring value is weak |
| 13 | **Commercial lease administration and CAM reconciliation** | Small and mid landlords | 0 (Trebellar is corporate occupier) | Yardi/AppFolio could bundle; annual seasonality | **Partly.** Our CAM Close; check AppFolio roadmap |
| 14 | **Child-care center administration** (subsidy billing, licensing ratios, enrollment) | Early education (~$60B) | 0 | Low-margin buyers; Brightwheel/Procare incumbents | **Mostly yes.** Thin margins; subsidy billing is the only budgeted pain |
| 15 | **Facility equipment registers from nameplates** (age, recalls, capex forecasting) | Property and facilities | ~1 (Norra, SNF-only) | Fragmented buyers; CMMS vendors own the record | **Partly.** Our Nameplate Ledger; insurer data sale is slow |

**Headline:** the open lanes are where the AI has to *read the buyer's own operating data or legacy systems* (migration, warranty analytics, utility bills, equipment registers) or where the buyer is *unsexy and slow* (water, telecom make-ready, oil and gas back office, ag co-ops). YC and a16z have not touched either group, mostly because neither gives a fast "replace the BPO seat" demo.

---

## 5. Cross-check of our ideas

Verdicts: **open** = no recent YC/tier-1 overlap found · **contested** = 1-3 overlapping recent entrants, or one funded leader nearby · **taken** = a funded player sells the same loop.

### MEMO leaderboard (round 2)

| # | Idea | Overlapping recent startups | Verdict |
|---|---|---|---|
| 1 | SPA / ship-and-debit recovery (distributor side) | Canals ($35M, Base10), Whitespace (YC S26), Lark (YC F26), Modern Industrials (speedrun); Glimpse (a16z $35M) adjacent in CPG | **Contested.** Post-rejection recovery is still unclaimed, but 23 distributor-AI entrants are one feature away |
| 2 | Rulebook Desk (HOA collection law firms) | None in dataset; legal entrants are intake or general (Caseflood, Lexi) | **Open** (demand unmeasured) |
| 3 | Debit Desk (manufacturer side) | Glimpse (a16z), Stuut | **Taken** |
| 4 | Medicaid frailty evidence copilot | Cova (YC S26, caregiver payment) adjacent; Fortuna/Perenna outside | **Contested** |
| 5 | SecondLook SNAP QC | EffiGov, Caucus adjacent; incumbents own it | **Taken** (by incumbents) |
| 6 | TaxDesk property-tax appeals | None in dataset; Ownwell outside | **Taken** (outside dataset) |
| 7 | FL private-provider permits | Permitify (YC W25), Verdant (YC S26), GovWell (Insight $25M), Govstream, PermitFlow | **Taken** |
| 8 | LIHTC file review | Tire Swing (YC F26) | **Taken** |
| 9 | VSC authorization voice agent | Revion, Parrot, CarSignal, Flai (YC); Toma (a16z), Mia Labs; Kebra files warranty claims | **Taken** |
| 10 | Union/prevailing-wage payroll | Trayd (YC, $10M A), Miter | **Taken** |
| 11 | ClaimCare LTCi verification | MochaCare, Cova (home care) adjacent | **Open but small** |
| 12 | LTL rebill / pass-through | Loop, Augment, Vooma, Burt, Lunavo, Hemut | **Taken** |
| 13 | WC statutory ledger | Veltha (YC F26, AI-native WC TPA), Docura, Evergrove | **Contested** |

### Round 5

| Idea | Overlap | Verdict |
|---|---|---|
| Restoration claim-revenue engine | XBuild (N47, a16z), InventoryQuant (YC W26), Beam AI | **Contested** |
| StrikeLedger, infrastructure damage recovery | None | **Open** |
| Casualty severity TPA | Veltha (YC F26), Corgi, Pace (Sequoia), Hesper, Avallon | **Taken** |
| Fire ITM roll-up | None in dataset (ServiceTrade/BuildOps incumbents) | **Open** (as a roll-up) |
| Hard-class product-liability MGA | AI carriers Florin, Risklytics, PRINCEPS, Hedge, Corgi, none in consumer products liability | **Contested** on model, open on niche |
| B2C not-at-fault auto claim | None (Blueshoe is a general consumer law firm) | **Open** but weak |

### Round 6 (re-checked 2026-10-07 against the round-6 dossiers)

The five round-6 leaders were re-checked against their dossiers, the full YC W25-F26 descriptions and 5 web searches each. Scores are founder-fit scores; [FOUNDER-FIT.md](FOUNDER-FIT.md) has the re-ranked shortlist.

| Idea | Dossier | Overlapping startups | Verdict | Still-open angle |
|---|---|---|---|---|
| **RegistryPilot** (CPSC certificates and lab reports for SMB brands) | [r6-4](dossiers/r6-4-registrypilot-cpsc-certificate-autopilot.md) | *Direct:* **Complir** (YC Spring 2026, $11M General Catalyst; now publishes CPSC eFiling guides in DE/ES, enterprise/EU buyers), **Comply PRO+** (eFile SaaS and auto-certificates for Amazon sellers). *Partial:* labs (Intertek, BV, QIMA, Eurofins, SGS) for their own reports; Shopify CPSC fields, Global-e, Zonos, Easyship; MarkIt (YC F25, labels/formulations); Certivo ($4M, manufacturers); Apify gap checker. *Adjacent:* Fuchsia (YC), Trava, Tarifflo, Alchemize (YC customs), Donkey, Saudara (YC sourcing), Certo, Truli | **Contested** (61→55). Complir's US CPSC move has partly arrived as localization | Lab-agnostic report verification for sub-$20M Alibaba/1688 buyers, triggered by Amazon CPC fixes and the mail (2026-10-22) and FTZ (2027-01-08) phases; cross-customer verified-report graph. Plain filing is not open |
| **PlanSet** (permit autopilot for outdoor structures) | [r6-5](dossiers/r6-5-planset-a-permit-autopilot-for-outdoor-l.md) | *Direct:* **Site Plans AI** (address to site plan for deck/patio/shed/fence contractors, from $69), **BluePrints AI** ($500K; sketch/photo/CAD to permit documents). *Partial:* Simpson/MiTek planners, ArcSite, RedX, Sketchronix, SitePlanCreator, MySitePlan, Spacial ($10M, unverified), Pulley, PermitFlow. *City side:* Archistar (30+ cities), Blitz, Permitify (YC W25), Verdant (YC S26), AutoSitu (YC W26), Symbium, GovWell | **Contested** (55→50). Earlier "open" missed the two direct entrants | Outcome-priced first-pass approval with resubmits included, per-jurisdiction correction ledger in 2-3 metros, then a rules/approval-prediction API; "passes the city's AI pre-check" |
| **Switchboard** (source-side legacy extraction for vertical SaaS) | [r6-1](dossiers/r6-1-switchboard-a-source-side-extraction-and.md) | *Direct:* **Bitwerx** (vet), **RecordLinker** (insurance AMS), **The Back Office** (Tekmetric, $750/migration), **Universal Migrator** (legal). *Partial:* ClonePartner, superglue (YC W25, ERP), Vern, Doyen/Sage, Flatfile, Zengines, Woflow. *Adjacent:* Zatanna (YC W26), Minicor (YC S26), Asteroid (YC W25), Supergood, Hypercubic (YC F25), Lab0 (YC S26), Lume, OneSchema, DualEntry, Movestax | **Contested** (55→50). Was "open"; insurance and auto repair now occupied | Arms dealer: metadata-free readers plus deterministic reconciliation sold to converters and vendor in-house teams; property management and US law/CPA unchecked |
| **FieldSignal** (warranty analytics and supplier recovery) | [r6-6](dossiers/r6-6-fieldsignal-warranty-claims-analysis-and.md) | *Direct:* **ServiceCPQ** (AI claim triage, fraud, supplier recovery for capital-equipment OEMs), **Syncron/Mize** (supplier recovery, sold to small OEMs). *Partial:* Axion ($37M B), Viaduct ($10M B), Tavant, Aquant, 4CS iWarranty, Davisware, OnPoint. *Adjacent:* Kebra, Bernard (YC S26, servicer side), Revion (YC W26), GroundControl (YC) | **Contested** (53→48). Was "open"; YC lane still empty | Claims-system-agnostic statistical overlay for thin-data makers, white-labeled through Davisware/4CS/OnPoint, or a supplier-side chargeback defense product. The leakage audit is table stakes |
| **ParityProof** (verified Dynamics GP exit) | [r6-2](dossiers/r6-2-parityproof-gp-first-a-verified-erp-exit.md) | *Direct:* **superglue** (YC W25; implements NetSuite/Intacct/SAP/BC/Acumatica and migrates legacy data), **eOne** (GP-to-Intacct/NetSuite packages, Popdock archive). *Partial:* Campfire, DualEntry, ECOSIRE, Microsoft BC migration tool. *Adjacent:* Rillet, Tessera Labs ($60M, a16z), Qorelo, Lab0 (YC S26), Agentin AI (YC W25) | **Contested** (52→47) | Neutral, destination-agnostic parity reports for operational subledgers, OEM'd to loaders; only as an adapter of the Switchboard engine |
| CodeTab (trade-license exam trainer) | [r6-3](dossiers/r6-3-codetab-a-trainer-for-finding-answers-fa.md) | Alice.tech, Miyagi Labs (general exam prep) | **Open** (not re-checked) | |
| SPA Claims Autopilot | [r6-7](dossiers/r6-7-spa-claims-autopilot-a-recovery-first-cl.md) | Canals, Whitespace (YC S26), Lark (YC F26), Enable, SpeedyLabs | **Contested** (not re-checked) | Post-rejection recovery |
| ProvenanceLedger (wildfire ownership ledger) | [r6-8](dossiers/r6-8-provenanceledger-a-permissioned-what-you.md) | InventoryQuant (YC W26) | **Contested** (not re-checked) | |

**Common thread:** in every re-checked idea, nobody sells independent verification separately from the filer, loader or claims suite. That is the remaining slot, and it is narrow.

### Other founder-fit pool ideas ([04-founder-fit-rescore.md](04-founder-fit-rescore.md) §3-4; not re-checked)

| Idea | Overlap | Verdict |
|---|---|---|
| AccessLift (Access → web app) | None | **Open** (horizontal, SEO) |
| StudyReady (arc-flash model capture) | None in dataset (AmpSketch outside) | **Open** (niche) |
| Linegraph (P&ID → plant graph) | **Operon** (YC S26), Arrakis, Control Seat, Neuron adjacent | **Taken** |
| PortalRunner (supplier-portal AR) | Alder (YC F25), Rex (YC S26), FullSeam; Monto outside | **Taken** |
| ParcelChain (courthouse runsheets) | Parca (speedrun SR007), Monarcha (YC S25), Astro (YC W25), Vestris (title) | **Contested** |
| Flowdown (drawing + PO requirements) | F4 Industries (YC S25, GD&T), GroundControl, Arzana, Uptool | **Contested** |
| PrequalAutopilot | None | **Open** (platforms control the channel) |
| PackWeight (packaging EPR) | MarkIt, Complir | **Contested** (light) |
| CAM Close / TariffWise / Nameplate Ledger / GiveawayIQ / CertGate | Condor (procurement), Norra (SNF assets), Optifye/Allus (factory vision), GroundControl adjacent | **Open** |
| Total-loss contents reconstruction | **InventoryQuant** (YC W26: contents inventory for public adjusters, restoration, insurers) | **Contested.** New since round 4 |
| DisputeShield | Zomma (disputes), Socratix, MouseCat | **Contested** |
| Air Headroom | GridCARE, ThinkLabs, Squid are grid, not air | **Open** |

**Net:** of 13 leaderboard ideas, 8 are taken, 3 contested and 2 open. Of the founder-fit shortlist (RegistryPilot, PlanSet, Switchboard, FieldSignal, ParityProof, SPA, CodeTab, contents), **only CodeTab is still open**, and it was not re-checked. The three other lanes this file first called open (Switchboard, PlanSet, FieldSignal) turned out contested once the round-6 dossiers and targeted searches were added.

---

## 6. Implications for this founder

- **Don't build a vertical phone agent, an RCM/prior-auth tool, a quote-to-ERP agent, a takeoff tool or broker-placement software.** Each has 10-35 entrants, several with $25M+ Series As. A bootstrapped solo engineer loses there on distribution, not on tech.
- **Don't compete with AI-native services firms on their own terms.** YC is funding 110 "be the firm" companies with domain-insider founders. Without domain depth or capital, a product founder's comparative edge is the reverse: tooling those firms or their switching costs need.
- **Do play where the hard part is engineering on messy proprietary data:** legacy database extraction (Switchboard), statistical defect detection on warranty narratives (FieldSignal), parametric CAD plus a rules engine (PlanSet), knowledge tracing (CodeTab). No YC company sits in these exact lanes, though §5 shows non-YC entrants in each, and they reward his Netflix-grade systems and ML skills.
- **Sell to vertical-software challengers, not only to the industry.** The 365 YC companies here are a customer base: every Smartbase, Lark or Tepali has to migrate customers off legacy systems. Switchboard's buyer list writes itself from this CSV.
- **Assume a fast follower within 6-12 months on anything with a demo-able BPO wedge.** Batch-to-batch clones are visible (dental RCM ×3, freight load planning ×4, distributor order entry ×12). Moats need compounding data (conversion library, defect taxonomy, jurisdiction approval data, item bank).
- **Raise after traction, in the a16z pattern.** a16z repeatedly takes the A after another fund's seed (Probook, Prosper) and speedrun now expects about $100K ARR at entry. Bootstrapping to $100-300K ARR fits how these funds actually underwrite.
- **RegistryPilot re-check done (§5):** Complir now publishes CPSC eFiling guides, so build only the lab-agnostic report-verification angle. Contents reconstruction still needs a check against InventoryQuant.
- **The slow-buyer whitespace (water, telecom make-ready, oil and gas, ag co-ops) is real but wrong for bootstrapping.** Treat it as a later-stage expansion or a cofounder-led bet, not a first product.

---

## 7. Method and caveats

- **YC data is complete for the batches covered.** All 1,360 companies listed for Winter 2025 through Fall 2026 in the community-maintained yc-oss directory mirror (W25 165, Spring 25 144, S25 166, F25 145, W26 198, Spring 26 193, S26 231, F26 118) were screened by model. 995 were excluded as AI infrastructure, horizontal tools, consumer or deep tech. Product vs services tags come from the one-liner, not interviews. F26 may still be filling in.
- **VC data is partial and snippet-level.** 202 deals were scanned with a 10-search budget per sweep. 135 fall into the traditional-industry clusters. Publisher sites (TechCrunch, a16z.com, speedrun.a16z.com, BusinessWire, Construction Dive, f4.fund) were blocked to direct fetch, so most amounts, leads and dates come from search snippets. Rillet, Salient and Tennr rest on model knowledge. Westmag, Endra, Keythorn and the unnamed a16z/Khosla RCM company are unverified. Speedrun coverage is incomplete (SR005 had 58 companies, SR006 60, SR007 about 29-50; we have roughly 25).
- **"Zero entrants" means zero in this dataset.** It does not rule out incumbents (Enverus, AMCS, Sphera, Bushel, Yardi) or seed companies outside YC and tier-1 VCs. Each whitespace row needs a 10-search check before building.
- **Overlap verdicts use one-liners and descriptions.** An overlapping company may target a different buyer or geography (e.g. Complir may focus on cross-border/EU rules). Treat "contested" as "read their site first," not "dead."
- Inputs: [data/yc-w25-f26.csv](data/yc-w25-f26.csv), [MEMO.md](MEMO.md), [04-founder-fit-rescore.md](04-founder-fit-rescore.md). Round-6 rows in §5 were re-checked against the [round-6 dossiers](dossiers/) and [FOUNDER-FIT.md](FOUNDER-FIT.md) on 2026-10-07 (data/vertical-ai-landscape.json was not available).
