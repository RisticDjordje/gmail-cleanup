# KeepFull: forecasting and dispatch on top of a propane or heating-oil dealer's back office

**One-liner:** Predict each customer's tank level from delivery history and degree-days, then plan next-day routes that raise gallons per stop without causing run-outs. It reads exports from the dealer's existing back office (ADD, Cargas, P2, PDI) and does not replace it.

**Source playbook → target industry:** Dayjob (YC Sp26) plugs an AI scheduler into short-haul fleets' ERPs and claims 8%+ efficiency gains for waste haulers. Maximal and Fleetline (YC S25) sell solver-based load planning on top of carriers' systems. The shared playbook is to leave the system of record alone, add a solver on top, and sell a measured gain. Here that playbook moves to independent propane and heating-oil dealers running keep-full and will-call routes. No YC W25-F26 company mentions propane or heating oil (local CSV grep).

## Score: 44 / 100. Verdict: PASS (one cheap kill test is allowed this month)

| Dimension | Score | Note |
|---|---|---|
| Tech insight edge | 6 | Real ML and operations-research work, but the insight (K-factors are non-linear, ML beats degree-days) is published |
| No domain required | 6 | No credentials needed; dispatch know-how and safety norms have to be learned |
| Bootstrap to raise | 4 | Seasonal; proof takes a full winter; ~20 dealers no earlier than 2028 |
| Product, not services | 8 | Pure software, 90%+ gross margin |
| Market size | 4 | ~4,000 target firms, core SAM ~$50-150M (all assumptions) |
| AI advantage vs competitors | 4 | ADD and Cargas already ship AI and K-factor forecasting; the overlay competes with a bundled module |
| GTM without network | 4 | Peer-reference buyers; "only when I see the results" |

Range of views: diligence 47, steelman 58, skeptic (competition and go-to-market) 42, skeptic (tech and regulatory) about 40. I land at 44. The steelman's points about the founder's skills are correct, but they do not overcome the core fact: the system of record already claims the feature. The idea is well below RegistryPilot (55).

## Thesis

The mechanism transfers cleanly. The industry has recurring stops, capacity-limited hazmat trucks, legacy back offices and hand-tuned dispatch. It also adds a forecasting problem (how full is each tank?) that the trucking source companies do not have. The sharpest version: "run-out-free keep-full at a bigger average drop, without sensors." That means calibrated per-tank forecasts with uncertainty, plus a solver that optimizes profit per truck-hour subject to a cap on run-out probability. The thesis breaks on three points. (1) The incumbents have already shipped AI forecasting. (2) Proving a lift takes a full heating season, and weather confounds the comparison. (3) The market is small and shrinking through consolidation.

## Workflow today

Keep-full routes schedule visits using degree-days times a per-customer K-factor (gallons per degree-day). Will-call customers phone in. ADD, Cargas, P2 and PDI hold the account, tank and ticket data and include degree-day forecasting and some routing. Cargas markets "customizable K-factor and base load forecasting" plus live-traffic routing (snippet). ADD reportedly forecasts 30M+ deliveries a year and uses AI to decide when to deliver (snippets). Tank Utility monitors now create delivery tickets inside Cargas automatically. Failure modes: forecasts drift in cold snaps, small drops waste truck hours, and run-outs mean emergency trips, leak checks, relights, liability and churn. The trade-press goal for unmonitored tanks is accuracy "within 10%".

## TAM (bottom-up, mostly assumptions)

Propane retailers fell from about 6,500 to about 3,500 (LP Gas). There are 2,572 heating-oil dealer companies (Research and Markets). Allowing for overlap, that is about 5,000 independents. Excluding AmeriGas, Ferrellgas, Suburban and firms with 1-2 trucks leaves about 4,000. At about 8 trucks per firm and $200 per truck per month (both assumed), the core SAM is about $77M, with a range of $50-150M including add-ons. A venture-scale story needs horizontal "keep-full logistics": farm diesel, DEF, lubricants, industrial gases, and UK and Irish heating oil. That expansion is unvalidated.

## Competitors

| Company | What it does | Threat |
|---|---|---|
| ADD Systems | Back office, Raven Mobile, SmartConnect monitors, AI delivery forecasting | High: owns the data, already ships AI |
| Cargas Energy | Back office with K-factor forecasting, routing, AI driver assignment, Tank Utility auto-tickets | High: can bundle "good enough" |
| PDI Technologies | Enterprise propane and commercial fueling suite | Medium (mid and large dealers) |
| P2 / Ignite, TankSpotter | Other back offices, tank-mapping app | Medium/low |
| Zeo, NextBillion, Route4Me, Shipday | Horizontal routers marketing to propane | Low: no tank forecasting |
| Otodata, Tank Utility, Mopeka | Tank monitors | Substitute on high-value tanks |
| Tankfarm | Vertically integrated distributor ($23M Series B, 2023) | Indirect; shows the category can raise money |
| Dayjob (YC Sp26) | Generic short-haul ERP-plug-in scheduler | Plausible entrant |

## How AI wins (if it does)

A hierarchical Bayesian per-tank model covering non-linear temperature response, base load, occupancy and seasonal homes, and anomalies such as leaks, new appliances or a competitor's fill, with calibrated uncertainty. A stochastic VRP that prices run-out risk instead of using a fixed 25% trigger. Cross-dealer priors for new accounts with no history. An LLM layer that turns call notes, driver comments and gauge photos into model updates. Honest weakness: the methods are published (patent US7676404, trade press). The edge is execution plus pooled data, and dealers have little reason to pool data.

## Wedge → path to scale

**Wedge:** a free "Drop-Size and Run-Out Audit" on last season's ticket CSV, delivered within 24 hours. It shows the per-account K-factor curve, the share of drops below the economic threshold and the truck hours they cost, run-outs the model would have flagged, and gallons that could shift into shoulder months. Beachhead: Northeast and Upper Midwest independents with 3-15 trucks.
**Path:** nightly CSV overlay (2027 season) → measured lift on 10-20 dealers → certified ADD and Cargas integrations or a reseller deal, plus AI will-call intake → horizontal keep-full logistics and sales to consolidators.

## Steelman (58)

The product is exactly what a Netflix-grade applied-ML engineer can build. Incumbents founded in 1988 spread themselves across an entire back office, so a focused overlay can win on one metric and prove it on the dealer's own data in 24 hours. Cargas's own AI-themed tech survey is teaching dealers to want AI. The audit needs no integration. SEO tools such as a "K-factor calculator" suit a B2C growth skill set. The heating season shortens sales cycles. Cross-dealer priors are something no single-tenant back office can build.

## Skeptic summary (42 / ~40)

ADD and Cargas have shipped AI forecasting and monitor-driven scheduling, so the pitch is "our model versus the AI module you already pay for." Small dealers have no IT staff and treat new technology as "a big and gutsy decision." Proof needs a full winter, and weather confounds it. Exporting a CSV nightly and re-keying the plan adds dispatcher work at peak season. Run-outs are the most-litigated event in the trade. A model that explicitly "trades run-out risk" creates a discoverable record, so dealers will set thresholds conservative enough to erase most of the gain. An idea site already lists this exact concept. The likely exit is an acqui-hire by ADD, Cargas or PDI.

## What's good

- Fits the founder's technical skills almost perfectly; the weekend prototype is real.
- Pure software, cheap to run, 90%+ margins.
- The free audit on an existing export is a low-friction entry.
- A proven YC playbook, and no YC company is in this vertical.
- Clear, measurable KPIs: gallons per stop, stops per truck-day, run-outs.

## What's bad

- The AI forecasting feature already ships inside the system of record.
- Integration depends on the vendors who own the data and compete with you.
- One-year feedback loops; missing the pre-season window costs a year.
- Small and consolidating TAM; churn through M&A.
- Run-out liability makes the core optimization trade-off legally uncomfortable.
- Relationship-driven buyers; the founder has no network.

## Build plan

Python and FastAPI, Postgres (Supabase or Neon), Next.js upload and report pages. An LLM (Haiku) maps columns to a standard schema. NOAA degree-day join. Phase one forecast is a piecewise HDD regression with regional pooling; NumPyro only if backtests show it pays. OR-Tools CVRP with drop-size reward and run-out penalty terms, and self-hosted OSRM for drive times. Weekends 1-4: ingest and backtest → forecast and anomalies → audit report → nightly overlay. An audit costs under $0.25 and a nightly plan about $0.05. Hardest risk: tickets only partly reveal usage (partial fills, missing tank sizes, unrecorded run-outs).

## Bootstrap-to-raise plan (months 0-12, from October 2026)

- **Month 0-1:** cold-email 30+ Northeast dealers and post in oil-heat and propane forums to get 3 real exports under NDA. Backtest against each dealer's current ADD or Cargas forecast.
- **Month 1-3:** if the backtest passes, run 5-10 free audits during the 2026-27 winter. Recruit a former dispatcher as advisor. Publish a K-factor calculator for SEO.
- **Month 3-6:** convert 2-4 audits into paid shoulder-season pilots priced on gain-share. Pitch at a state association spring meeting.
- **Month 6-10:** sign pre-season contracts for 2027-28. Build monitor ingestion and a first back-office adapter.
- **Month 10-12:** 8-12 paying dealers live in season. Raising is realistic only after measured lift in spring 2028, which is a slow timeline.

## Weekend prototype

Ingest a sample delivery CSV (date, account, gallons, tank size) plus NOAA degree-days. Fit per-account piecewise K-factor curves with uncertainty and backtest them against a static K-factor on the last 30% of the season. Predict tomorrow's tank percentages, run OR-Tools CVRP for N trucks, and output routes plus a drop-size histogram compared with the historical one.

## Kill criteria

- No real dealer export within 14 days of outreach. That means go-to-market is the real problem.
- Backtest against the dealer's existing ADD or Cargas forecast shows less than 15% fewer small drops, or any added run-outs.
- None of the first 3 dealers will commit in writing to a price before the season.
- Back-office vendors restrict or break exports, or ship an equivalent module within the first season.
- Three ADD or Cargas users cannot be found who say on record that their forecasting fails.

## Sources

- LP Gas, state of the propane industry (6,500 → 3,500 retailers): https://www.lpgasmagazine.com/?p=67005
- LP Gas 2026 top retailers: https://www.lpgasmagazine.com/?p=88112
- LP Gas, ADD and Cargas AI use: https://www.lpgasmagazine.com/?p=81634 ; https://www.lpgasmagazine.com/?p=86946
- LP Gas, technology adoption attitudes: https://www.lpgasmagazine.com/?p=79308 ; https://www.lpgasmagazine.com/?p=2711
- LP Gas Jan 2026 retailer technology: https://editions.mydigitalpublication.com/article/RETAILER+TECHNOLOGY/5096967/859433/article.html
- Research and Markets, heating-oil dealers: https://www.researchandmarkets.com/reports/5739081/heating-oil-dealers-u-s-market-research
- Cargas Energy: https://cargasenergy.com/propane/ ; https://cargasenergy.com/blog/artificial-intelligence-in-fuel-delivery/ ; https://cargasenergy.com/blog/automatic-delivery-ticket-creation-now-available-for-cargas-energy-tank-utility-customers/
- PDI propane brochure: https://pditechnologies.com/wp-content/uploads/2023/10/PDI-Propane-and-Commercial-Fueling-Brochure.pdf
- oilandenergyonline, K-factor and forecasting: https://oilandenergyonline.com/articles/all/special-k-factor/ ; https://oilandenergyonline.com/articles/all/forecasting-deliveries/
- Tankfarm Series B: https://bpnews.com/news/tankfarm-raises-23m-fuel-innovation-propane
- Prior art: https://patents.google.com/patent/US7676404 ; https://liveinthefuture.org/startups/propane-delivery-route-optimization.html
- Liability: https://editions.mydigitalpublication.com/article/LEGAL+BRIEF/4088494/716930/article.html
- Generic routers: https://zeorouteplanner.com/how-to-reduce-propane-delivery-costs-by-30-in-2026/ ; https://nextbillion.ai/feeds/service/route-planning-software-propane
- Local: data/yc-w25-f26.csv (Dayjob, Maximal, Fleetline); 05-yc-playbook-transfers.md

All web evidence is snippet-level. Pricing, trucks per dealer and savings figures are unverified assumptions.
