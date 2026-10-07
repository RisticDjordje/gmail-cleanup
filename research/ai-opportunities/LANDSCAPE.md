# Landscape: who is already building AI for traditional industries (YC W25-F26, a16z speedrun, tier-1 VCs)

*2026-10-07. Data: 500 in-scope startups. 365 come from the full YC directory for W25-F26 (1,360 screened, 995 excluded as not traditional-industry). 135 come from a16z speedrun, a16z and other tier-1 deal scans (202 scanned, most at snippet level). Full YC list: [data/yc-w25-f26.csv](data/yc-w25-f26.csv). Companion to [MEMO.md](MEMO.md) and [04-founder-fit-rescore.md](04-founder-fit-rescore.md).*

---

## 1. Bottom line

- **Crowding:** healthcare admin (68), insurance (54), manufacturing (51), accounting/back office (42), logistics (37) and construction (36) hold 58% of all entrants. The densest workflows are RCM/prior auth, vertical phone agents, quote-to-order, takeoff/estimating, month-end close and broker placement.
- **Money:** a16z-led vertical Series As clustered at **$25-55M** (Prosper, Lassie, Ease, Probook, Town, Lio). Tier-1 firms are buying category leaders (Harvey, EliseAI, Avoca, HappyRobot), not seeding new categories.
- **Model shift:** 22% of entrants sell the outcome (AI-native services or full-stack operators). In insurance it is 41%. YC is funding "be the firm" as often as "sell the firm software."
- **Whitespace:** workflows with large spend but almost no entrants. They involve slow buyers (water/wastewater utilities, telecom make-ready, upstream oil and gas back office, ag co-ops, port demurrage), have to read the buyer's own operating data (manufacturer warranty analytics, multi-site utility bills), or sit beside a vertical-software system instead of replacing it (legacy data migration, trade-license exam prep).
- **For this founder:** stay out of phone agents, RCM, quote-to-order and broker tools. The strongest unclaimed lanes match his engineering edge: **Switchboard/legacy migration, FieldSignal, CodeTab and PlanSet.** Two of our ideas are now contested by brand-new YC companies: **RegistryPilot** (Complir, MarkIt) and **contents reconstruction** (InventoryQuant). **Linegraph** is effectively taken (Operon).

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

### Round 6 pool ([04-founder-fit-rescore.md](04-founder-fit-rescore.md) §3-4; no r6 dossiers on disk yet)

| Idea | Overlap | Verdict |
|---|---|---|
| **Switchboard** (legacy vertical-SaaS migration) | superglue (YC W25) does ERP implementation and migration only | **Open** |
| **GP Liftoff** (Dynamics GP sunset) | superglue (implements Business Central/NetSuite/Acumatica and migrates legacy data), DualEntry (free migration), Rillet | **Contested.** superglue is a direct threat to the partner channel |
| AccessLift (Access → web app) | None | **Open** (horizontal, SEO) |
| **CodeTab** (trade-license exam trainer) | Alice.tech, Miyagi Labs (general exam prep) | **Open** |
| **RegistryPilot** (CPSC eFiling) | **Complir** (YC Spring 2026, "Vanta for physical products"), **MarkIt** (YC F25, packaging/regulatory review), Fuchsia (YC, hardware certification), Truli (speedrun, FDA labels) | **Contested.** Re-check Complir's US CPSC scope before building |
| **PlanSet** (residential permit drawings) | Permitify, Verdant, GovWell (city side); AutoSitu (YC W26, plan/permit review for developers); PermitFlow | **Open** on drafting for small contractors |
| **FieldSignal** (warranty quality analytics) | Kebra, Bernard (servicer-side claim filing); HERA, Hundred (in-plant QA) | **Open** |
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

**Net:** of 13 leaderboard ideas, 8 are taken, 3 contested and 2 open. Of the founder-fit shortlist (Switchboard, GP Liftoff, CodeTab, RegistryPilot, PlanSet, FieldSignal, SPA, contents), **4 are still open: Switchboard, CodeTab, PlanSet and FieldSignal.**

---

## 6. Implications for this founder

- **Don't build a vertical phone agent, an RCM/prior-auth tool, a quote-to-ERP agent, a takeoff tool or broker-placement software.** Each has 10-35 entrants, several with $25M+ Series As. A bootstrapped solo engineer loses there on distribution, not on tech.
- **Don't compete with AI-native services firms on their own terms.** YC is funding 110 "be the firm" companies with domain-insider founders. Without domain depth or capital, a product founder's comparative edge is the reverse: tooling those firms or their switching costs need.
- **Do play where the hard part is engineering on messy proprietary data:** legacy database extraction (Switchboard), statistical defect detection on warranty narratives (FieldSignal), parametric CAD plus a rules engine (PlanSet), knowledge tracing (CodeTab). These are the lanes YC/a16z have not touched, and they reward his Netflix-grade systems and ML skills.
- **Sell to vertical-software challengers, not only to the industry.** The 365 YC companies here are a customer base: every Smartbase, Lark or Tepali has to migrate customers off legacy systems. Switchboard's buyer list writes itself from this CSV.
- **Assume a fast follower within 6-12 months on anything with a demo-able BPO wedge.** Batch-to-batch clones are visible (dental RCM ×3, freight load planning ×4, distributor order entry ×12). Moats need compounding data (conversion library, defect taxonomy, jurisdiction approval data, item bank).
- **Raise after traction, in the a16z pattern.** a16z repeatedly takes the A after another fund's seed (Probook, Prosper) and speedrun now expects about $100K ARR at entry. Bootstrapping to $100-300K ARR fits how these funds actually underwrite.
- **Re-check RegistryPilot and contents reconstruction first.** Both picked up YC entrants (Complir, InventoryQuant); confirm whether they cover US CPSC eFiling and mass-tort claimants.
- **The slow-buyer whitespace (water, telecom make-ready, oil and gas, ag co-ops) is real but wrong for bootstrapping.** Treat it as a later-stage expansion or a cofounder-led bet, not a first product.

---

## 7. Method and caveats

- **YC data is complete for the batches covered.** All 1,360 companies listed for Winter 2025 through Fall 2026 in the community-maintained yc-oss directory mirror (W25 165, Spring 25 144, S25 166, F25 145, W26 198, Spring 26 193, S26 231, F26 118) were screened by model. 995 were excluded as AI infrastructure, horizontal tools, consumer or deep tech. Product vs services tags come from the one-liner, not interviews. F26 may still be filling in.
- **VC data is partial and snippet-level.** 202 deals were scanned with a 10-search budget per sweep. 135 fall into the traditional-industry clusters. Publisher sites (TechCrunch, a16z.com, speedrun.a16z.com, BusinessWire, Construction Dive, f4.fund) were blocked to direct fetch, so most amounts, leads and dates come from search snippets. Rillet, Salient and Tennr rest on model knowledge. Westmag, Endra, Keythorn and the unnamed a16z/Khosla RCM company are unverified. Speedrun coverage is incomplete (SR005 had 58 companies, SR006 60, SR007 about 29-50; we have roughly 25).
- **"Zero entrants" means zero in this dataset.** It does not rule out incumbents (Enverus, AMCS, Sphera, Bushel, Yardi) or seed companies outside YC and tier-1 VCs. Each whitespace row needs a 10-search check before building.
- **Overlap verdicts use one-liners and descriptions.** An overlapping company may target a different buyer or geography (e.g. Complir may focus on cross-border/EU rules). Treat "contested" as "read their site first," not "dead."
- Inputs: [data/yc-w25-f26.csv](data/yc-w25-f26.csv), [MEMO.md](MEMO.md), [04-founder-fit-rescore.md](04-founder-fit-rescore.md). FOUNDER-FIT.md and r6 dossiers did not exist when this was written; re-run section 5 when they land.
