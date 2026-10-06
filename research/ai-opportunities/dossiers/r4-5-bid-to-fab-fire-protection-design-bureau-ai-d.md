# Bid-to-Fab Fire Protection Design Bureau

**One-liner:** An AI-leveraged design bureau. AI drafts sprinkler and fire alarm layouts, hydraulic calcs and battery calcs; NICET III/IV staff review and sign them. Bid-stage estimates are the wedge, and the bureau is sold as overflow design capacity to independent contractors and PE-backed fire and life-safety roll-ups.

**Verdict:** PASS. **Score: 36/100**, below the SPA-recovery benchmark of 54.
Date: 2026-10-06. Round 4, idea 5.

---

## Thesis (managing-partner view)

The pain is real. Contractors pass on bids for lack of hours, NICET designers are scarce, and AHJ resubmittals cost days. But every place this idea could stand is already occupied.

- **Software layer (shop drawings):** FireDesign.ai has an insider founder, a patent announced in July 2026, and claims DWG-to-layout plus hydraulics in minutes. Caident, Tandm, ArchiLabs and FireAlarmDesign.AI also sell here. AutoSPRINK already ships auto-layout with integrated hydraulics.
- **Bid-stage wedge:** the deep dive's main rescue condition was that this wedge would prove uncontested. It is contested. Countfire, Exayard, PataBid, BuildVision AI, BidBrain and Civils.ai target fire sprinkler and alarm contractors directly. Quotr closed a $4M seed on 2026-09-30, and QuoteIQ has set a $149.99/month price anchor.
- **Services layer:** offshore bureaus (Gsource, Enginerio, Build Infinite) already set the price. In Florida and Texas, signing requires a state license (a Florida contractor or PE license, or a Texas RME working inside a registered firm), so the bureau would have to become a licensee.
- **Roll-up channel:** the simulated VP Ops buyer said design is the part of the business they are de-emphasizing. Their real pain is ITM technicians and records.
- **ITM pivot:** our one search this round found AI-flavoured ITM tools already in market: ZenFire, Deelo.ai, Ironback.ai, BlazeStack, Asset Panda, plus the incumbents Inspect Point, ServiceTrade and BuildOps.

What remains is a services-margin company with these problems:
- an estimated 35-45% gross margin (estimate);
- growth capped by hiring NICET III/IV reviewers;
- tail liability for life-safety design;
- demand that is overflow and moves with the buyer's backlog;
- a ceiling of roughly $10-25M ARR, the same as the "desk" ideas, with worse margins.

Founder fit on the geometry and solver work is good, but that is the most commoditized part of the stack. Academic work on automated sprinkler layout is published (ScienceDirect 2025), and FireDesign.ai holds a patent on its version.

---

## Workflow today (condensed)

1. **Bid.** The GC sends architectural drawings and a performance or delegated-design spec. The estimator counts heads off the reflected ceiling plan in Bluebeam and applies their own $/head and field-hours/head factors. Hydraulics are done only on big storage jobs. Win rate is about 1 in 5 to 1 in 8 (estimate). Evidence that the trade prices by per-head heuristics: [eng-tips](https://www.eng-tips.com/threads/how-do-you-estimate-fire-sprinkler-design-hours.309806/) and [MeyerFire](https://www.meyerfire.com/daily/good-learning-material-for-sprinkler-estimating) (both snippet-level).
2. **Award.** The contractor gathers CAD/Revit backgrounds, the hydrant flow test, and the commodity and storage classification.
3. **Layout.** A NICET designer works in AutoSPRINK, HydraCAD, SprinkCAD or Revit plus an add-in, then coordinates through BIM clash detection.
4. **Hydraulics.** Hazen-Williams calcs against the most remote area.
5. **Submittal.** The package goes to the AHJ, and possibly to an insurer such as FM Global and to the engineer of record, followed by comment and resubmittal cycles. Who signs depends on the state: NICET, Florida contractor or PE license ([F.S. 633.102](https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699%2F0633%2FSections%2F0633.102.html), [FBPE](https://fbpe.org/fire-protection-rules-updated-for-clarity/)), or Texas RME ([TBPELS](https://pels.texas.gov/nm/firesprinkler04.htm)).
6. **Fab and install.** Cut lists go to the fab shop, followed by install, as-built drawings and acceptance testing.
7. **Recurring ITM.** NFPA 25 and NFPA 72 inspections are run in Inspect Point, ServiceTrade or BuildOps.

Fire alarm runs a parallel path. NFPA 72 Chapter 7 requires battery and voltage-drop calcs as minimum documentation ([ECmag](https://www.ecmag.com/magazine/articles/article-detail/integrated-systems-calculation-crunching-fire-alarm-math-you-should-know)).

## TAM (all estimates unless marked)

| Pool | Estimate | Note |
|---|---|---|
| Purchasable sprinkler + alarm design spend | $150-600M/yr | 2-3.5B sq ft/yr at $0.04-0.10/sq ft. Cross-checked against an installed cost of $2-10/sq ft (snippet-level cost guides). |
| Design labor pool (mostly in-house) | $0.9-1.8B/yr | 10-15K designers at $90-120K loaded cost. Most of it cannot be purchased; a bureau only captures overflow. |
| Bid-stage latent spend | "a few hundred $M" | Buyer-sim willingness to pay is $100-600 per bid, against $50-500/month SaaS substitutes. |
| Realistic 5-year SAM | $100-250M | Roll-ups plus mid-size contractors in about 10 Sunbelt and data-center states. |
| Plausible ARR ceiling | $5-25M | With 10+ software and services competitors, the red team puts the plausible outcome at $5-15M. |

The scout's claim of $1-2B/yr in design spend is wrong as an addressable figure. It is closer to the size of the in-house salary pool than to spend a bureau can capture.

## Competitors

| Name | Type | What they do | Scale / funding | Source |
|---|---|---|---|---|
| FireDesign.ai | AI-native, shop drawings | DWG/DXF in; NFPA 13/13R/13D layout, hydraulics and deliverables out in minutes. Patent announced July 2026; plans MEP expansion. | CEO co-founded a sprinkler contractor that reached $20M revenue (company-reported). Funding not found. | [site](https://www.firedesign.ai/), [Yahoo/GNW](https://finance.yahoo.com/technology/ai/articles/firedesign-ai-secures-landmark-ai-093100752.html), [ValiantCEO](https://valiantceo.com/how-jason-tielve-ceo-firedesign-ai-is-using-ai-to-disrupt-fire-protection-design/) |
| Caident | AI-native, hydraulics and residential auto-layout | Built by FPEs and NICET designers. | Unknown | [caident.co](https://www.caident.co/ai-development/) |
| Tandm | Revit-native sprinkler automation | Production layout and hydraulics. | Unknown (snippet-level) | [Nomic compare](https://www.nomic.ai/compare/best-ai-for-fire-protection) |
| ArchiLabs | AI-CAD recipes | Head placement, routing, sizing, risers. | Unknown | [archilabs.ai](https://archilabs.ai/posts/ai-cad-for-fire-sprinkler-and-fire-protection-contractors) |
| FireAlarmDesign.AI | AI fire alarm layout | NFPA 72 / California Fire Code layouts. | Unknown | [firealarmdesign.ai](https://firealarmdesign.ai/) |
| Quotr | AI preconstruction takeoff (horizontal) | Takeoff, pricing and proposals. Claims up to 80% faster takeoff and 40% more bids. | $4M seed, 2026-09-30 (verified) | [Morningstar/BW](https://morningstar.com/news/business-wire/20260930844525/quotr-raises-4m-to-bring-ai-capabilities-to-preconstruction) |
| Countfire | Fire-specific estimating | Sprinkler and alarm counts and proposals. | Unknown | [countfire.com](https://www.countfire.com/us/fire-sprinkler-estimating-software) |
| Exayard | AI fire protection takeoff | Detects alarm devices on plans. | Unknown | [exayard.com](https://exayard.com/fire-protection-estimating-software) |
| PataBid | AI sprinkler takeoff | Auto-counts branch lines. | Unknown | [patabid.com](https://www.patabid.com/fire-sprinkler-estimating-software) |
| BuildVision AI | AI sprinkler estimating | Claims a quote-ready estimate in about 15 minutes. | Unknown | [buildvisionai.com](https://www.buildvisionai.com/for/fire-sprinkler) |
| BidBrain | AI fire alarm estimating | Claims device count, material list and labor in under 10 minutes. | Unknown | [bidbrainapp.com](https://bidbrainapp.com/fire-alarm-estimating) |
| Civils.ai | Horizontal construction AI | Fire protection takeoff module. | Unknown | [civils.ai](https://civils.ai/blog/ai-for-fire-protection-takeoffs/) |
| QuoteIQ | SMB field-service suite | AI Estimator at $149.99/month, which sets the price anchor. | Pricing published | [myquoteiq.com](https://myquoteiq.com/top-8-softwares-for-fire-sprinkler-businesses-in-2026/) |
| Togal.AI, Beam AI, Trimble, On-Screen Takeoff | Horizontal takeoff | Commodity takeoff layer. | Venture-backed or public | [ConstructConnect](https://www.constructconnect.com/blog/ai-powered-takeoff-and-estimating-software-a-contractors-guide-to-the-top-players-in-2026) |
| AutoSPRINK / MEPCAD, HydraCAD, SprinkCAD | Incumbent CAD | Own the file format and the designer seat. AutoSPRINK already has auto-layout and hydraulics. | Established | [autosprink.com](https://autosprink.com/) |
| Gsource, Enginerio, Build Infinite | Offshore / outsourced bureaus | Layouts, calcs, shop drawings. Set the price anchor. | Established services firms | [Gsource](https://www.gsourcedata.com/mep-drafting-services/fire-protection-design/), [Enginerio](https://enginerio.com/vdc/fire-sprinkler-system-design/), [Build Infinite](https://buildinfinite.com/services/fire-sprinkler-drawings-services/) |
| ZenFire, Deelo.ai, Ironback.ai, BlazeStack, Asset Panda, Inspect Point, ServiceTrade, BuildOps | ITM software (pivot space) | AI-assisted NFPA 25/72 inspection, reports and asset tracking. | Asset Panda launched AI fire/NFPA features July 2026 (press release); others unknown | [Asset Panda](https://www.assetpanda.com/pressroom/asset-panda-launches-ai-powered-fire-asset-tracking-nfpa-compliance-software/), [ZenTrades](https://zentrades.pro/zenfire/blog/must-have-tech-for-nfpa-25-inspections), [Deelo](https://www.deelo.ai/blog/best-software-for-fire-protection-companies-in-2026-inspections-service-and-compliance), [Ironback](https://www.ironback.ai/glossary/nfpa-25), [BlazeStack](https://www.blazestack.com/blog/fire-safety-software) |
| Pye-Barker, Summit, AI Fire, Marmic, Sciens, Impact Fire | PE roll-ups (buyer and in-house competitor) | Consolidating; acquiring design-capable branches. | Large | [dealseam](https://dealseam.com/fire-life-safety-pe-rollup-tracker-2026), [ctacquisitions](https://ctacquisitions.com/guides/private-equity-fire-life-safety-2026/) |

## Wedge and model (as proposed)

- **Bid packages:** $300-1,500 per bid, or a $2-6K/month per-branch subscription.
- **Shop drawings:** $0.04-0.10/sq ft with a 5-day SLA and free resubmittals until approved.
- **Downstream:** fab cut-list and as-built-to-ITM add-ons, plus a roll-up MSA (proposed at $300K-1M).
- **Target economics:** 55-70% gross margin (estimate).

The buyer simulation repriced all of this:
- bid packages at $100-600, with pressure to charge only on won jobs;
- shop drawings at $0.04-0.06/sq ft, only with full submittal ownership and native AutoSPRINK files;
- the roll-up MSA as not credible in year one.

---

## What's good

- Real, nameable pain. Estimators pass on about a third of invites for lack of hours, and combined "Designer/Estimator" job postings show bid work eating into design hours ([CareerBuilder](https://www.careerbuilder.com/job-details/fire-sprinkler-designer-estimator-novi-mi--3efec2ad-98e7-475d-84a2-a14f12ea3570), snippet-level).
- Good fit for a technical founder: geometry, a deterministic Hazen-Williams solver, BOM generation. No government or payer sale.
- Large, traditional, fragmented buyer base: thousands of contractors plus active PE consolidation.
- One sharp sub-insight from the buyer simulation. The valuable bid-stage output is not a layout. It is the call on whether a fire pump is needed and whether in-rack sprinklers are triggered on large ESFR boxes, where a single miss costs more than a year of fees.
- The corrected framing on warehouses holds. They are storage occupancies (ESFR/CMSA), not light or ordinary hazard, and their regular grids are the most automatable layouts.

## What's bad, by lens

**Competition (serious concerns):**
- Both proposed layers are crowded: at least 5 AI-native design products and at least 8 fire-specific or horizontal AI takeoff tools.
- One competitor is founded by a contractor insider and holds a patent.
- The architecture (LLM or vision extraction, a deterministic solver, NFPA-cited checks) is the commodity pattern we flagged in rounds 1-2.

**GTM (kill):**
- Per-bid fees fall mostly on lost work, and SaaS sets the price 10-100x lower.
- Overflow demand swings with the buyer's backlog and comes with no contract minimums.
- Roll-ups have de-emphasized install and design, and would build in-house or acquire before outsourcing.
- The insider competitor owns the trade-association relationships.

**Feasibility (serious concerns):**
- The bureau must be a licensee in Florida and Texas, so it ends up competing with its own customers for licenses.
- The NSPE ethics case on sealing layouts drawn by someone else limits how much AI output a reviewer can sign ([NSPE](https://nspe.org/resources/ethics/ethics-resources/board-ethical-review-cases/signing-and-sealing-documents-fire)).
- The hard part is inputs, not geometry: commodity class, rack height, obstructions, flow test, FM Global overrides. Real labor savings are likely 30-50% rather than 60-80%.
- Life-safety tail liability sits on a seed-stage balance sheet.

**Data moat:**
- The contractor is the permit applicant, so AHJ comments do not reach the bureau directly.
- AHJ submittal checklists are public, and MeyerFire already catalogs per-jurisdiction requirements ([MeyerFire](https://www.meyerfire.com/daily/what-jurisdictions-require-full-design-w-permit)).
- Flow tests belong to the utility and the job, and lose value with age. That fails our rule that data must be owned by or contractually owed to the buyer.

**Market structure:**
- The bureau sells exactly the excess capacity that AI software removes from in-house teams, so its market shrinks as the technology improves.

## Buyer-simulation highlights (role-play composites, not real quotes)

- **Chief Estimator, DFW, 60 staff (most likely buyer):** "Don't sell me a prettier layout." Would run a paid pilot on 3-5 ESFR bids they would otherwise pass on. Price reaction: "$1,500 a bid is crazy when I win one in six." Would pay $300-500 for a big box with a pump analysis. Prefers "charge me when I win."
- **VP Ops, PE platform:** "You're pitching the part of the business we're de-emphasizing." Their pain is first-inspection technician hours and inherited records. That is ITM, not design.
- **NICET IV Design Manager:** No. Sees the bureau as more review burden. Needs native AutoSPRINK files and asks "whose E&O is on the line." Would rather buy a FireDesign.ai seat than pay a bureau's markup.
- **Fire alarm estimator:** "The panel rep does this for free." Willingness to pay is $100-200, if anything.

## Comparison to SPA recovery (54)

SPA recovery scored 54 because the buyer keeps the recovered money, the data is owed to the buyer, the ROI is measurable, and the AI-native field is thin enough to leave a clear wedge.

This idea is weaker on every one of those axes except TAM:
- Purchasable spend is somewhat larger, but the realistic ARR ceiling is about the same.
- It is more crowded, with an insider competitor holding a patent and at least 13 AI or software alternatives.
- It carries life-safety liability and state licensing requirements.
- Gross margins are services-level.
- The data is owned by the contractor or the utility, not by us.
- It lacks the "sell to the side that loses money" structure that recovery models have.

It does not beat 54. The best pivots the red team found are:
- an AI pre-review service for private plan reviewers and engineers of record;
- a white-label design engine for distributors and fab shops that pays for itself through material pull-through;
- storage change-of-use sprinkler adequacy monitoring for industrial REITs and 3PLs.

Each was estimated in the mid-40s at best and none has been crowding-checked, except the ITM pivot, which our search found crowded.

## First 30 days (only if pursued anyway)

1. **Days 1-10:** 10 Mom-Test calls with chief estimators at 40-200 person Sunbelt sprinkler contractors that bid heavily on spec warehouses. Ask about the last ESFR bid they passed on and the last estimate that missed by more than 10%. Ask each for 2-3 jobs they have already built, with the original bid and the actual material and labor.
2. **Days 5-20:** produce blind bid-stage estimates for those jobs, limited to fire pump yes/no, in-rack trigger, main size and pipe tonnage. Measure the error against actuals. The founder does this with a prototype solver.
3. **Days 10-25:** run 2 head-to-head tests of the same jobs through FireDesign.ai (if accessible), BuildVision, Countfire and Quotr to see whether the storage and pump risk call is actually differentiated.
4. **Days 15-30:** in parallel, 5 calls with branch service managers at Pye-Barker, Summit, Impact Fire or AI Fire about first-inspection hours and inherited records. Also 3 calls with private plan reviewers or engineers of record (Florida 553.791 private providers) to test the reviewer-side pivot.
5. **Day 30 decision:** continue only if at least 3 estimators send job files and at least 2 commit to a paid pilot at $400 or more per bid on a pump or storage risk package.

## Kill criteria

- Fewer than 3 of 10 estimators send historical job files. That means no real commitment.
- Blind estimates miss material actuals by more than 10% on more than half the jobs, or existing tools such as FireDesign.ai, BuildVision or Quotr produce an equivalent pump and in-rack risk call.
- Willingness to pay for a bid package holds below $300, or buyers insist on paying only for won jobs with no committed volume.
- Florida or Texas counsel confirms the bureau must hold a contractor or RME registration, or employ PEs, to deliver shop drawings, and the cost of E&O quotes makes $2-15K jobs uneconomic.
- Reviewer time per 100K sq ft does not fall by at least 50% versus manual work on 5 test jobs, which would put gross margin below 50%.
- FireDesign.ai or another AI-native raises a priced round and launches a bureau or overflow offering.

## Sources

Deep-dive, red-team and buyer-simulation URLs are cited inline above. This round's single search, on the ITM pivot (snippet-level):
- https://www.assetpanda.com/pressroom/asset-panda-launches-ai-powered-fire-asset-tracking-nfpa-compliance-software/
- https://zentrades.pro/zenfire/blog/must-have-tech-for-nfpa-25-inspections
- https://www.deelo.ai/blog/best-software-for-fire-protection-companies-in-2026-inspections-service-and-compliance
- https://www.ironback.ai/glossary/nfpa-25
- https://www.blazestack.com/blog/fire-safety-software
- https://oxmaint.com/industries/facility-management/fire-sprinkler-itm-software-nfpa-25-frequency
- https://www.chesapeakesprinkler.com/what-the-2026-edition-of-nfpa-25-means-for-fire-sprinkler-inspections/

Other key sources: https://www.firedesign.ai/ ; https://www.caident.co/ai-development/ ; https://quotr.ai/blog/quotr-raises-4m-seed ; https://www.sciencedirect.com/science/article/pii/S2772991525000301 ; https://www.ziprecruiter.com/Jobs/Nicet-Fire-Sprinkler-Designer ; https://total-uc.com/cost-of-a-commercial-fire-sprinkler-system/

Verification level: funding is verified only for Quotr. All other competitor scale figures are unknown or company-reported. All TAM figures are estimates. Interview quotes are role-play composites.
