# PlanSet: permit autopilot for outdoor-living contractors

**One-liner:** Builders send PlanSet an address and a sketch, photo or Simpson/MiTek export. PlanSet returns a permit package formatted for that city: site plan, prescriptive DCA 6 sheets and a pre-filled application, with resubmits included. Over time a correction ledger, built from plan-reviewer comments, raises the first-pass approval rate.

**Score: 55/100. Verdict: promising with a pivot.** It is a good bootstrap vehicle but a weak venture thesis as pitched. Pursue it only as "approval loop, not drawings," and only if the 2-week kill test passes. For scale: 54 was the best idea under the old generic profile, and 70+ means genuinely compelling.

## Rubric (this founder)

| Dimension | Dossier | Bull | Skeptics | **Final** | Why |
|---|---|---|---|---|---|
| tech_insight_edge | 7 | 7 | 5 | **6** | Geospatial, vision, LLM rule ingestion and a deterministic core are real engineering. But input parsing is commoditising, and structure has to stay table-driven. |
| no_domain_required | 7 | 8 | 7 | **7** | DCA 6 is public and prescriptive. Stamp and preparer rules vary by state, so the founder must stay inside simple structures. |
| bootstrap_to_raise | 7 | 8 | 6 | **7** | Builders pay per permit by credit card, so revenue can arrive in month 2-3. The fundable story is weaker than the bootstrap story. |
| product_not_services | 8 | 7 | 6 | **6** | Per-city templating and QA start out manual, so the risk of drifting into a drafting service is real. |
| market_size | 4 | 5 | 4 | **4** | Decks and outdoor structures are roughly a $5-20M ARR ceiling. |
| whitespace | 5 | 6 | 3 | **4** | Simpson and MiTek give drawings away free. Site Plans AI, SitePlanCreator and MySitePlan sell site plans. PermitFlow, Pulley, Spacial and Symbium hold the venture path. |
| gtm_without_network | 7 | 8 | 6 | **6** | Builders on Google Maps are easy to find but hard to convert: they work seasonally and are in the field. City-by-structure SEO is already contested. |

## Thesis
Drawing the deck is a solved, free problem. What is still worth paying for is **approval in a specific jurisdiction on the first try**. That requires a parcel-aware site plan, sheets that match each city's checklist and amendments, a pre-filled application, and a loop that turns reviewer comments into rule updates. The buyers are repeat deck, pergola and patio-cover builders, sold "permit in hand in days, resubmits included." Revenue comes per permit. The venture case is that the jurisdiction rules engine and approval ledger generalise to high-volume residential trade permits. That case is unproven and contested.

## Workflow today
1. The builder measures and sketches, often using the free Simpson or MiTek tool that the lumber yard hands out.
2. Drawings come from one of four places: the city's fill-in handout (Olathe and Johnson County KS, Parkville MO), the manufacturer printout, a Fiverr drafter ($50-200, 1-5 days), or a hand drawing.
3. The site plan is usually a plat marked up by hand. This is the weak point and a named rejection reason in Everett WA and Loudoun VA.
4. The builder applies on paper or through an e-portal (Accela, EnerGov).
5. Review happens against the locally amended IRC or DCA 6.
6. Rejected plans are resubmitted; each cycle costs days to weeks (not verified).
7. Inspections follow.

Pain concentrates in steps 3, 5 and 6.

## TAM (bottom-up)
| Input | Value |
|---|---|
| Deck projects per year | ~3-4M (CINTRAFOR's 6.5M figure, discounted because the data is old) |
| Permitted share | 30-40%, so ~1-1.5M (estimate) |
| Share needing paid drawings or a site plan | ~40-50%, so ~450-700k |
| Revenue at $75-150 per package | ~$35-100M for decks |
| Revenue with other outdoor structures added | ~$80-200M SAM |
| Realistic 5-year ARR | $5-20M |

Reaching $100M+ requires trade and replacement permits, where PermitFlow, Pulley and Symbium (which issues permits from the city side) already operate.

## Competitors
| Player | What it does | Scale |
|---|---|---|
| Simpson Strong-Tie Deck Planner | Free deck plans plus permit submittal pages | Public company, free tool |
| MiTek Deck Designer | Free; distributed through lumber yards | Berkshire company, free tool |
| Site Plans AI | Address plus county GIS produces a setback site plan in minutes, for decks and sheds | Paying users (Trustpilot) |
| SitePlanCreator / MySitePlan | DIY and human-made site plans | Small |
| ArcSite, RedX Decks, Sketchronix | Contractor apps sold as "permit-ready deck plans" | Small to established SaaS |
| BluePrints AI | Sketch or photo to permit documents | $500K seed |
| Spacial AI | AI plus PE stamped residential plans | $10M seed |
| PermitFlow / Pulley | Permit workflow and expediting | ~$91M total / $4.4M |
| Symbium | Instant city-issued trade permits | ~$4M |
| Fiverr drafters | $50-200 per set | Fragmented |

## Why tech is (partly) the moat
**Not a moat:** span tables and LLM drawings.

**Compounds with volume:**
1. A versioned jurisdiction rules graph, with provenance and change detection.
2. A correction ledger that records outcomes per jurisdiction and per reviewer.
3. Portal submission automation.

**Lead-time only:** GIS site plans and multimodal intake. Better foundation models make both cheaper for everyone. The ledger is the only asset a competitor cannot simply copy, and it grows slowly: a few hundred noisy labels a month at first.

## Wedge to path to scale
- **Wedge:** "Permit Package plus Resubmit Guarantee" for builders in 2-3 metros that require full sets plus site plans and enforce strictly. Price is $99-179 per permit or $199-399 a month. The one public metric is first-pass approval rate.
- **Stage 2:** grow to 20-50 jurisdictions. Add sheds, screen rooms, fences and retaining walls, plus portal submission and tracking.
- **Stage 3:** the trade-permit layer, sold through ServiceTitan- or Housecall Pro-style integrations.
- **Stage 4:** an embedded API inside manufacturer designers and contractor apps.
- **Most plausible exit or scale route:** become the jurisdiction-rules and approval API that ArcSite, Simpson or field-service software license, rather than a standalone app.

## Steelman (66)
- The pain is approvals, not drawings, and engineering quality shows up directly in first-pass approval rate.
- Free tools become an intake channel instead of a competitor.
- The credit-card buyer is findable, and an SEO playbook suits a B2C engineer.
- The correction ledger is a slide no drafter can match.
- Analogs: GreenLancer and Symbium show that contractors and cities pay per permit package. They are niche businesses, not breakouts.

## Skeptic summary (53 / 53)
- The site-plan wedge is already a product (Site Plans AI).
- Both halves of the package have a free or cheap substitute.
- What remains is per-city operations work.
- County parcel lines can sit feet off, and some codes let the building official demand a surveyor-stamped site plan (Chenango NY).
- Portals have no write APIs, so automation is brittle bots that may breach terms of service.
- E&O and unlicensed-practice exposure arrive before revenue.
- Symbium's city-side instant permits remove the job a contractor-side tool would do in the trade market.
- Realistic outcome: 5-15 builders in 6 months.

## What's good
- It plays to the founder's real skills: full-stack, applied AI, geospatial and B2C-grade UX.
- No credential is needed for prescriptive structures.
- Revenue in under 90 days, with almost no capital (cost under $1.50 per permit).
- A clear, measurable quality metric (first-pass approval).
- A natural "concierge, then automate" path.

## What's bad
- A low ceiling.
- Crowded on both halves of the package, with free incumbents holding distribution.
- The venture path is owned by funded players and is being solved from the city side.
- The data moat accrues slowly.
- QA labor and per-city templating can turn it into a service.
- Liability is tail risk.
- Buyers are seasonal.

## Build plan
**Architecture.** The pieces, in pipeline order:
- **Intake:** a web app plus email intake.
- **Vision to model:** a vision LLM turns uploads into a typed `DeckModel`, which the builder confirms.
- **Structural core:** pure-function DCA 6 / IRC R507 logic with property tests. The LLM never touches structure.
- **Site plans:** county ArcGIS parcels, Microsoft or OpenStreetMap footprints and NAIP imagery, combined in PostGIS.
- **Jurisdiction rules:** a crawler feeds LLM extraction into `JurisdictionRules` records with citations, and a human approves each city.
- **Output:** an SVG, PDF and DXF sheet generator plus a checklist checker.
- **Correction loop:** reviewer comments become a failure taxonomy, then a proposed rule fix, then a regression test.

**Stack.** Next.js and TypeScript on Vercel, Supabase (PostGIS and pgvector), a Python worker (shapely, geopandas, ezdxf), Claude Sonnet and Haiku, Stripe, and Playwright later. Under $300 a month.

**Weekends 1-4:**
1. Pull 30 checklists, call 20 builders, and run the site-plan accuracy spike.
2. Build the structural engine for an attached rectangular deck and publish city SEO pages.
3. Sell 5-10 packages by hand and log every outcome.
4. Build the rules schema and correction parser for 3 cities and launch the $249-a-month plan. Go or no-go: 8 or more paid, 70% or better first-pass approval, and builders who come back.

**Data flywheel.** Every submission becomes a label: jurisdiction, reviewer, approved or rejected, and comment types. Each label turns into a rule, a template fix or a test. Builder corrections to site plans become alignment training data.

**Hardest risk: site-plan accuracy.**
- Test 20 addresses against recorded plats. Pass mark: median error under 1 ft and worst case under 2 ft.
- Fallback 1: add one tape-measure anchor taken by the builder.
- Fallback 2: if that also fails, the sharpest part of the product is dead.
- Second risk: keeping rules fresh. Re-crawl weekly with hash diffs.

## Bootstrap-to-raise plan (months 0-12)
| Month | Goal |
|---|---|
| **0** (nights and weekends at Netflix) | Kill test: 30 checklists, 20 builder calls, site-plan accuracy spike. Pick 2 metros. |
| **1** | Structural engine, site-plan v1, city pages. First 5 paid packages done concierge-style. Target: $500-1k. |
| **2** | 3 cities templated and correction parser live. Outbound to 200 builders and 2-3 lumber-yard reps. Target: 20-40 permits, ~$3-5k MRR. |
| **3** | Builder subscription launched. QA under 15 min per permit. Add pergolas and patio covers. Target: 10 repeat builders, $5-8k MRR. |
| **4-6** | 8-10 jurisdictions, sheds, screen rooms, portal submission in 1-2 portals. Target: 100-200 permits a month, $12-25k MRR. Quit-job threshold: about $15k MRR with more than 50% repeat. |
| **7-9** | Expand to 20-30 jurisdictions. Prototype an API for one contractor app or field-service platform. Start a trade-permit pilot (water heaters or EV chargers) in one city that has no Symbium coverage. |
| **10-12** | Fundable milestone, all of the following: 2,000+ permits, 30+ jurisdictions, first-pass approval above 85% against a measured local baseline, more than 50% of revenue from repeat builders, QA under 5 min per permit, and either one signed API or distribution partner or a working trade-permit pilot. Without the last item this stays a good bootstrap business that seed funds will not back. |

## Cofounder needed
None to start. If the founder adds anyone, the best fit is a **GTM or operations cofounder from the contractor or building-materials channel**: a former lumber-yard rep, a deck-builder association contact, or someone from the permit-expediting world. That person brings conversion and distribution, which the skeptics flag as the binding constraint. Later, a part-time **partner PE** (on contract, not a cofounder) handles stamps and liability review. A second engineer adds little early, because the bottleneck is customers, not code.

## First 30 days
- Days 1-7: download checklists for 30 cities in 3 metros and drop any city that uses a fill-in handout.
- Days 1-7: build a list of 100 builders from Google Maps.
- Days 8-14: call 20 builders. Ask what they submit, their rejection rate and reasons, whether they use the free printout, and whether they would prepay $150.
- Days 8-14: run Site Plans AI and Simpson output past 2-3 plan reviewers.
- Days 15-21: site-plan accuracy spike on 20 addresses, plus the DCA 6 engine.
- Days 22-30: hand-deliver 5 paid packages and log outcomes.

## Kill criteria
- Most builders say the free Simpson or MiTek printout plus a marked-up plat or Site Plans AI output passes on the first try.
- Fewer than 3 of 20 builders file 5 or more permits a month and will prepay $150 or more.
- GIS site-plan median error is above 1 ft and the tape-measure fallback still fails, or target metros require surveyor-stamped site plans.
- First-pass approval is below 70% on the first 10 packages, or QA stays above 20 min per permit by month 3.
- No API or trade-permit path shows traction by month 9.

## Sources
- https://strongtie.com/deckplanner
- https://deck.mii.com/mitek/servlet/GIB_Base/usp_startpage.html
- https://www.capterra.in/software/1110286/Site-Plans-AI
- https://www.trustpilot.com/review/siteplans.ai
- https://www.siteplancreator.com/blog/deck-builder-site-plan-requirements-by-city
- https://www.mysiteplan.com/blogs/news/ai-site-plan-generators
- https://www.arcsite.com/show/deck-expo-2025
- https://apps.apple.com/app/id6474487367
- https://peerpush.com/p/sketchronix
- https://www.trysignalbase.com/news/funding/blueprints-ai-secures-50
- https://www.preqin.com/data/profile/asset/spacial-ai--inc-/775254
- https://www.foundamental.com/perspectives/permitflow-raises-54m-in-series-b-to-automate-construction-permitting
- https://permitplace.com/compare/permitflow-vs-pulley/
- https://www.cityofventura.ca.gov/2754/Instant-Permits
- https://symbium.com/automated-permitting-comparison
- https://townofchenangony.gov/wp-content/uploads/DECK_PERMIT_REQUIREMENTS-SUBMIT-ALONG-WITH-PERMIT-APPLICATION.pdf
- https://lfportal.everettwa.gov/WebLink/0/doc/1916285/Page5.aspx
- https://www.loudoun.gov/1166/Building-Decks
- https://olatheks.gov/home/showpublisheddocument/388/637394075031200000
- https://www.finehomebuilding.com/project-guides/decks/a-homeowners-guide-to-deck-permits
- https://digital.lib.washington.edu/researchworks/items/2c089fc5-10a0-4e3e-ac70-4ad92c9339d0
- https://pitchbook.com/profiles/company/56444-41
- /home/user/GmailCleanupExtension/research/ai-opportunities/04-founder-fit-rescore.md
