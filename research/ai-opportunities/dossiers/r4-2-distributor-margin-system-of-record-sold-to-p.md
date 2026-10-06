# Distributor Margin System of Record for PE Roll-ups

**One-liner:** A margin layer for PE-backed hard-goods distribution roll-ups. It reads every portfolio company's legacy ERP (P21, Eclipse, SX.e) and normalizes four data sets into one model: vendor agreements (SPAs, rebate tiers), cost history, contract pricing and invoice lines. It recovers SPA and rebate leakage and harmonizes rebate tiers across the portfolio. A light "two-tier" ERP for small tuck-ins would come later.

**Verdict: PASS. Score 44/100.** That is below the SPA recovery benchmark of 54 and above the round-1 cluster (24-33).

Date: 2026-10-06. Pipeline: scout (big-tam-contrarian), then deep dive, then red team (competition, GTM, feasibility), then buyer simulation, then managing-partner verdict. The verdict step ran 2 searches.

---

## Thesis (strongest honest version)

The scout pitched an AI-native ERP for mid-market wholesale distributors. It would land as an SPA/rebate margin module on P21/Eclipse/SX.e, use the data already mapped to make migration cheap, and then replace the ERP. The deep dive correctly dropped the ERP-first framing. Go-live risk sits in EDI re-certification, warehouse/RF hardware, counter POS and proof of delivery, and LLMs don't remove any of it. The deep dive moved the entry to PE roll-up platforms. These platforms run 2-5 ERPs after acquisitions and need one margin view and rebate harmonization in the 100-day window.

The idea fails because both ends are occupied and the middle is crowded:
- **Portfolio-level multi-ERP analytics is already a product.** Marquis IQ markets 30+ certified ERP connectors to PE operating partners and claims a new acquisition can be live in 1-3 weeks with no migration. Datarails claims 600+ connectors.
- **The AI-native distribution ERP is no longer an empty category, though it is not crowded either.** 10X ERP is a cloud-native, AI-first distribution ERP that markets itself directly against Prophet 21. Per Crunchbase and its own blog, it is self-funded (under $5M), was founded by a distributor-owner (Global O-Ring and Seal), had its first customer go live in March 2023 and reached about 10 customers by year-end 2023. Doss ($55M Series B) is now described by analysts as a modular AI-native ERP that includes wholesale.
- **The margin wedge is crowded.** Players include Canals ($35M, 100+ electrical/HVAC/plumbing distributors, already holding sell-side and buy-side line data), Epicor Prism (agents embedded in P21, including a natural-language business-rule builder), Enable, Vendavo (Margin Bridge Analytics pre-built for P21), Vistex, 360insights, Rivvun, SpeedyLabs, Endeavor, Lark, LayerNext and Proton.ai.
- **The PE use case undermines itself.** The platform's own integration plan is to standardize everyone on one ERP within 1-3 years. Exit to a strategic buyer ends the contract too. The pain we sell into is one the customer is actively paying to eliminate.

Epicor also sells its own **Ascend** cloud migration program, with "AI-powered readiness assessments" and data migration tooling (snippet via b2sell.com). That weakens the "LLM migration as the moat" step as well.

## Workflow today

- **SPA / ship-and-debit:**
  1. A contractor requests a quote.
  2. Inside sales asks the manufacturer's rep for special pricing.
  3. The manufacturer grants the SPA: net cost, end customer and job, quantity, expiry.
  4. A clerk keys it into the ERP's contract tables, often from a PDF.
  5. The order ships below cost.
  6. The distributor files a claim by EDI 844/849, portal or spreadsheet.
  7. The manufacturer pays, short-pays or rejects.
  8. AP/AR reconciles and chases.
  9. Leakage comes from claims never filed, expired or mismatched SPAs, and rejections nobody follows up.
- **Vendor rebates:** tiered volume and growth programs plus co-op, tracked in spreadsheets and reconciled against vendor statements.
- **Post-acquisition at roll-ups:** acquired companies stay on legacy ERPs for 1-3+ years. Finance consolidates margin and rebate reporting in Excel or Power BI. Rebate renegotiation on combined volume happens without clean data, often run by consultants (Accordion publishes an HVAC-distributor rebate/ERP case).
- **Cross-ERP migration:** Epicor's implementation community treats moving between P21, Vision and Eclipse as a full new build, not a migration (snippet via LayerNext). That pain is real, and Epicor/VARs sell into it.

## TAM

VERIFIED anchor: US merchant wholesalers had $11.38T in sales in 2022 (Census AWTS). Everything below is an ESTIMATE, and firm counts by revenue band were not verified.

| Layer | Estimate |
|---|---|
| ERP software spend, US hard-goods distributors at $20M-$1B revenue (about 10-15k firms) | $1.5-2.5B/yr (scout's $2-5B only if services and payments are included) |
| Margin module (SPA/rebate/pricing), about 4-7k firms at $30-100k | $200-500M |
| PE-consolidation layer, about 150-300 platforms at $60-250k | $15-75M |
| Realistic ARR ceiling without ERP replacement | $10-30M (the same ceiling as the 54-score idea) |

The large TAM exists only at the ERP stage. That stage needs Series A/B capital, vertical depth (counter POS, EDI, WMS, cut-reel, job/bid) and long reference cycles, and it now has entrants (10X ERP, Doss, Acumatica, Bluelink, Ximple, Epicor cloud).

## Competitors

| Name | Type | Relevance | Funding/scale |
|---|---|---|---|
| Canals | AI workflow layer for distributors (orders, AP, purchasing) | Already holds the sell- and buy-side line data needed for leakage detection | $35M, May 2026, Base10 (verified via multiple outlets) |
| Epicor Prism / agentic AI stack / Ascend | Incumbent ERP-embedded AI plus migration program | P21 business-rule agent, 30+ agents in development; Ascend AI-assisted cloud migration | CD&R-owned incumbent |
| Marquis IQ | PE portfolio multi-ERP analytics | Directly overlaps the PE consolidation wedge | Not verified (snippet) |
| Datarails | FP&A consolidation, 600+ connectors | Generic substitute for cross-portfolio reporting | Venture-backed (amount not re-verified) |
| 10X ERP | AI-first cloud distribution ERP | Occupies the ERP endgame, small | Self-funded, under $5M (Crunchbase); about 10 customers at end of 2023 |
| Doss | Modular AI-native ERP/inventory | Most likely funded entrant into distribution ERP | $55M Series B, Mar 2026 (TechCrunch) |
| Enable | Rebate/SPA management | Already tracks multi-business-unit volume per vendor (the harmonization pitch) | Well-funded (not re-verified) |
| Vendavo | Pricing/rebate/margin analytics | Margin Bridge Analytics pre-built for P21 | PE-backed incumbent |
| Vistex, 360insights, IMA360, VendorTell, ProfitOptics | Rebate and incentive platforms and consultancies | 360insights publishes an M&A rebate-consolidation playbook | Various, not verified |
| Ximple | Electrical/plumbing ERP | SPA and rebates bundled into the ERP | Not verified |
| Endeavor, Lark, LayerNext, Leverage, Proton.ai | Agent layers on P21/Eclipse | Same data position, one feature away | Lark: YC, about 2 people; others not verified |
| Rivvun, SpeedyLabs | AI-native SPA/deductions | SPA-specific | Rivvun $7.55M seed |
| WizCommerce | AI B2B ecommerce plus payments for distributors | Occupies the "payments on top" expansion layer | $8M (snippet) |
| Accordion, A&M, QoE firms, Epicor VARs (Estes Group) | Services | Own the 100-day-plan budget and push ERP standardization | Services firms |

## Wedge and model (as proposed)

- 60-day paid diagnostic per PE platform ($25-60k), then platform SaaS, plus 10-15% of first-year incremental recovery, stepping down to pure SaaS.
- Read-only connectors (P21 on SQL Server, Eclipse on a multivalue database, SX.e on Progress), plus PDF ingestion of vendor agreements.
- Later: central pricing and cost maintenance, then a light ERP for tuck-ins under $50M.

Buyer-simulation correction: per-site pricing of $3-8k/month is 3-5x too high for what buyers see as a bridge tool. A realistic price is $2-4k per legal entity per month ($60-180k per platform per year). Contingency of 15-20% on recovered SPA cash is accepted, but that is the crowded round-2 product.

## What's good

- **Real, money-denominated pain.** Trade press (Supply House Times) confirms that acquisitions make rebate and SPA eligibility worse, and Accordion sells a fix for this as a services engagement. Rebates are a very large share of electrical distributor profit (2017-2018 snippet-level figures: about 40-60% of bottom line, $1B+ a year in electrical rebate income).
- **Correct side of the transaction.** The distributor or platform loses the money and keeps the recovery, and the data is the buyer's own.
- **Rebate harmonization is prospective money, not backward recovery,** so it partly avoids the decay trap.
- **Good founder fit for the connector/normalization work.** Technical, no license, no government buyer.
- **The ERP gap is still thin.** 10X ERP is a bootstrapped single-founder operation with tens of customers, not a funded category leader.
- **One real unmet need surfaced:** the integration/IT persona would pay $40-80k per acquisition for item, vendor and price-file master-data normalization that shortens cutovers.

## What's bad, by lens

**Competition (red team: kill)**
- Marquis IQ and Datarails occupy portfolio-level multi-ERP analytics, so the deep dive's main differentiator is false.
- 10X ERP and Doss are in the ERP endgame, and Epicor Ascend sells AI-assisted migration.
- Canals and Epicor Prism are one feature away on single-ERP sites. Enable, Vendavo, Vistex and 360insights already market multi-entity rebate consolidation.

**GTM (red team: serious concerns)**
- The need eliminates itself: the platform's plan is to standardize ERPs, and exit ends the contract. Expected life is about 2-3 years.
- The buyer universe is low hundreds of platforms (unverified), so with churn the ceiling is about $5-15M ARR.
- Operating partners buy 100-day work from consultants already in the data room. The platform CFO signs, and IT vetoes any second permanent system of record.
- Buying groups (AD, IMARK) already capture part of the volume-aggregation value. Disputes over tier-gain attribution are likely.
- CAC scales per site (a separate customized ERP and VAR gatekeeper at each one), while price is negotiated at the portfolio level.

**Feasibility and legal (red team: kill)**
- Three different database stacks (SQL Server, Rocket multivalue, Progress OpenEdge), each customized per site. From memory, verify.
- Epicor's cloud push lets Epicor control data access.
- The cross-customer vendor-agreement library carries two risks. One is Sherman Act Section 1 information-exchange risk: DOJ and FTC withdrew the safe harbors in 2023 (from memory). The other is manufacturer confidentiality clauses. So the one compounding moat is legally fragile.
- Contingency on claims rewards over-claiming, while manufacturer audits can claw back ship-and-debit credits years later. The ERP stage brings SOC 1, GL and go-live liability that a small team cannot carry.

**Buyer simulation (Mom-Test adjusted 44-49)**
- The PE operating partner would buy only a diagnostic tied to a dollar finding.
- The platform CFO would buy a per-entity module under $100k if it connects read-only without an Epicor services engagement.
- The independent distributor says no ("my buying group aggregates volume; Epicor and Canals are already here").
- The IT/integration leader opposes the two-tier ERP outright ("our whole thesis is one ERP").

## Comparison to SPA recovery (54)

This is the SPA recovery idea plus three layers, and each layer adds risk without adding a defensible advantage. The PE consolidation layer has a smaller buyer universe, churn by design, and existing products (Marquis IQ). The ERP layer contradicts founder fit and capital limits and now has entrants. The data-network moat is legally exposed. The only part that clearly works is the single-distributor SPA/ship-and-debit recovery-to-prevention product, which is the 54-score idea itself, and it is more crowded today than when it scored (Canals is the new big threat). The TAM headline is larger, but the size a small team can actually reach is the same or smaller, with worse retention. **It does not beat 54.**

## Residual pivots worth noting (not recommended as round-3 bets)

1. **Per-acquisition conversion and master-data acceleration** for serial acquirers. Convert the tuck-in's items, customers, pricing, contracts and open SPAs into the platform ERP, alongside the VAR, priced at $40-80k per deal, with an SPA/rebate continuity check at cutover. It aligns with standardization and repeats with every tuck-in. But it is services-margin work, and Epicor Ascend plus VARs compete for it. Estimated score 45-50.
2. **Rebate/SPA diligence for distribution M&A** sold through QoE firms. A sharp, budgeted need, but a small market (hundreds of deals a year, unverified). Estimated score 45-50.
3. **Buying-group SPA/rebate claim rail** (AD/IMARK-class). This is the only version with a two-sided-rail moat and channel-based buyer math. Estimated score 50-56, contingent on a buying group not already running it in-house. It is really an extension of the SPA desk idea and should be tested there.

## First 30 days (if pursued anyway, framed to falsify)

1. Days 1-10: hold 10 Mom-Test calls with CFOs or VPs of Finance at PE-backed electrical or HVAC/plumbing platforms with 2+ add-ons in the last 18 months and mixed Epicor/Infor ERPs. Find them through add-on press releases and job posts mentioning Eclipse/P21/SX.e. Ask about the last acquisition: when did they know true net margin, what did it cost, and who did they pay?
2. Days 5-15: hold 5 calls with integration/IT leads at serial acquirers to test per-deal willingness to pay for master-data normalization against Epicor Ascend and VAR quotes.
3. Days 10-20: call one buying group (AD or IMARK) to ask whether they run member-wide SPA claim tooling, and call Marquis IQ's distribution customers to learn whether it handles SPA and rebate logic or only spend and margin.
4. Days 15-30: get one paid diagnostic ($25k or more) on a live acquisition, using flat-file exports only, and measure the dollars found against the fee.
5. In parallel, get a one-hour antitrust and contract counsel review of any cross-customer vendor-term aggregation.

## Kill criteria

- Fewer than 3 of 10 platform CFOs name a dollar loss above $250k from post-acquisition rebate or SPA leakage, plus an invoice they paid to find it.
- Marquis IQ, Enable or Canals already deliver SPA and rebate leakage across mixed ERPs at a reference customer.
- No paid diagnostic within 60 days, or the diagnostic finds less than 5x its fee.
- Platforms say they will standardize ERPs within 12 months (the bridge lifetime is too short).
- Counsel confirms the cross-customer vendor-term library is not permissible, which removes the moat.
- Read-only access takes more than 30 days per site because of VAR or IT gatekeeping.

## Sources

- https://distributionstrategy.com/2026/05/canals-raises-35-million-to-expand-ai-automation-platform-for-wholesale-distributors/
- https://www.finsmes.com/2026/05/canals-raises-35m-in-funding.html
- https://www.canals.ai/
- https://techcrunch.com/2026/03/24/doss-raises-55m-for-ai-inventory-management-that-plugs-into-erp/
- https://www.businesswire.com/news/home/20260519098303/en/Epicor-Introduces-Agentic-AI-Stack-to-Power-Action-Across-ERP-Workflows
- https://www.b2sell.com/blog/5-ways-ai-transforms-epicor-prophet-21-operations (Epicor Ascend AI migration, snippet)
- https://www.layernext.ai/post/ap-automation-epicor-prophet-21-vision-eclipse
- https://marquisdata.com/private-equity (snippet)
- https://en.wikipedia.org/wiki/Datarails
- https://10xerp.com/compare/prophet-21-alternative
- https://www.crunchbase.com/organization/10x-erp (self-funded, under $5M, snippet)
- https://10xerp.com/blog/10x-erp-launches-cutting-edge-software-for-industrial-distribution-businesses
- https://robocfo.ai/frameworks/ai-native-erp-landscape (snippet)
- https://indianstartupnews.com/funding/wizcommerce-an-ai-native-sales-and-ecommerce-platform-for-wholesale-distributors-raises-8-million-9739905
- https://www.enable.com/resources/articles/distributor-rebate-management-software/
- https://www.360insights.com/blog/the-ma-dilemma-how-to-consolidate-multiple-rebate-programs-following-acquisitions
- https://www.level6.com/blog/best-rebate-management-tools/
- https://www.erpresearch.com/erp-add-ons/distribution/vistex
- https://www.ximplesolution.com/electrical-erp/pricing-rebates-spa/
- https://www.proton.ai/blog/epicor-prophet-21-explained-what-your-erp-knows-and-what-it-cant-tell-you
- https://www.accordion.com/experience/client-stories/hvac-distributor-brings-forecasting-rebates-and-erp-data-onto-manufacturing-cloud/
- https://www.supplyht.com/articles/107169-when-rebates-help-and-when-they-hurt-the-hidden-tradeoffs-for-distributors
- https://www.estesgrp.com/blog/the-erp-decisions-behind-successful-private-equity-acquisitions/
- https://electricaltrends.com/2018/07/30/over-a-billion-dollars-in-rebate-and-marketing-funding-to-distributors/
- https://thedistributorchannel.blogspot.com/2017/11/rebate-programs-in-distribution.html
- https://www.census.gov/newsroom/press-releases/2024/annual-wholesale-trade-survey.html
