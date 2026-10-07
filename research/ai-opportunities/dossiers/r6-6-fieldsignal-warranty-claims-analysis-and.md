# FieldSignal: Warranty Claims Analysis and Supplier Cost Recovery

**One-liner:** Upload 24 months of warranty claims and get back, within 72 hours, a report of dealer-claim leakage and supplier-recoverable costs in dollars. It is aimed at equipment and specialty-vehicle makers with $50M-$2B in revenue, a size band that Axion and Viaduct don't serve.

**Score: 53/100. Verdict: promising with a pivot.** The pivot is to get distribution and data access through a mid-market claims platform, or to prove that makers will share data quickly. Without one of those, pass. For calibration: 54 was the best idea under the old generic profile, and 70+ means genuinely compelling. The steelman put this at 66 and both skeptics put it at 50. I land close to the skeptics for two reasons. A live check removed the EWR compliance hook. And the mid-market claims systems of record (4CS, Davisware, OnPoint, Mize, ServiceCPQ) already sell the leakage wedge, or could add it cheaply.

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 6 | Small-data statistics, entity resolution and stable clustering are real problems. The leakage wedge, though, is SQL rules. |
| no_domain_required | 6 | Claims are structured data plus narrative text, and Axion's founder came from McKinsey/QuantumBlack, not a warranty department. Credibility with quality engineers still costs an outsider something. |
| bootstrap_to_raise | 4 | Buyers must hand over sensitive data and get CFO plus IT sign-off, so a first deal realistically takes 2-6 months. |
| product_not_services | 6 | Software margins are possible, but bespoke schemas pull the early audits toward consulting. |
| market_size | 5 | SAM is about $120-300M ARR. Reaching $100M ARR needs a supplier-side product and a move upmarket. |
| whitespace | 4 | Axion ($62M raised) and Viaduct ($21M) sit upmarket. ServiceCPQ, Aquant and the claims systems of record cover the mid-market workflow. |
| gtm_without_network | 5 | The buyer titles are easy to find, but cold outreach asking for claims data converts poorly. |

## Thesis
Warranty is one of the few places in manufacturing where messy text (technician narratives) sits directly on a P&L line. Thor's warranty costs have averaged about 2.5% of sales and Winnebago's about 1.6% (Warranty Week). Axion and Viaduct have shown that AI can find failure clusters and dollars, but only for large OEMs. Makers in the $50M-$2B band have thin data, no data scientists, and claims stuck in exports. The bet is a zero-services product that combines three things:
- LLM schema mapping
- explainable narrative clustering
- statistical pooling across makers that share supplier parts

Each new customer would improve detection for the others. Lead with money the CFO can count (dealer leakage and supplier chargebacks). Use early warning to retain customers.

## Workflow today
1. A dealer technician files a claim in a portal (homegrown, part of the dealer-management system, or run by a third-party administrator). The claim carries a VIN or serial, a labor-op code, the causal part, labor hours and a free-text complaint / cause / correction narrative.
2. One to five warranty administrators approve, adjust or reject claims, mostly by eye.
3. Payments post to the ERP (Epicor, Infor, NetSuite, Dynamics), and finance reconciles the warranty reserve every quarter.
4. Once a month a quality engineer pivots an Excel export into a "top 10 issues" list. Nobody reads the narratives at scale.
5. Supplier recovery happens ad hoc by email and spreadsheet and often recovers little.
6. EWR reporting to NHTSA applies only to makers above 5,000 units a year in the trailer, bus, medium/heavy and motorcycle categories. That threshold was verified this round and is not the 500 assumed earlier, so most targets don't file.

## TAM (bottom-up)
- About 1,500-3,000 US durable-goods makers with $50M-$2B revenue run dealer warranty programs: specialty vehicles, trailers, powersports, marine, shortline ag, outdoor power, and commercial HVAC and foodservice equipment.
- At roughly $300M revenue and 1.5-2.5% warranty cost, each spends about $4.5-7.5M a year, or $9-15B in total.
- At a blended $80-100k ACV, SAM is about $120-300M ARR. A recovery share adds $30-75M.
- Expansion could reach $500M-1B+: a product for Tier 1/2 suppliers defending against chargebacks, a move up to $2-10B makers, and technician-assist and parts forecasting.
- RV is concentrated in Thor, Forest River and Winnebago, so it works only as a demo market.

## Competitors
| Company | What | Scale |
|---|---|---|
| Axion (formerly Axion Ray) | AI field-quality detection for Cummins, Boeing, DENSO and others; claims a 16% cut in warranty and service costs | About $62M raised (Bessemer A, Salesforce Ventures B) |
| Viaduct | Failure detection from warranty and telematics data for automotive OEMs | $21M (Stellantis Ventures, Exor) |
| ServiceCPQ | "Warranty Decision Engine": labor-time checks, fraud signals, auto-generated supplier recovery claims | Unknown |
| Aquant | Launched an "Intelligent Warranty Audit" in 2020 | Funded AI service platform |
| 4CS iWarranty | Mid-market claims system of record (Blue Bird, New Flyer) | Established |
| Davisware GlobalWarranty | Claims software for equipment makers | Established |
| OnPoint | Warranty programs for RV and marine (chosen by Furrion) | Established |
| Tavant, Syncron/Mize, SAS | Enterprise warranty suites and analytics | Large incumbents |
| Acerta | Listed as an Axion peer by CB Insights | Not checked |

## Why tech is the moat (and where it is not)
- **Moat:**
  - Empirical-Bayes failure rates per part and build window, normalized by units in service.
  - Partial pooling across makers that share supplier parts.
  - Entity resolution from narratives and dealer part numbers to BOM lines and suppliers, backed by a labeled-match corpus that keeps growing.
  - Stable, auditable cluster IDs over time.
  - Zero-services schema onboarding.
- **Not a moat:**
  - Rule-based leakage checks (labor overages, duplicates, out-of-coverage claims), which any claims system can add.
  - LLM summaries.
  - NHTSA complaint dashboards.

  In 2026 a quality engineer can drop a CSV into a general-purpose LLM and get decent clusters, so only the statistics layer beats "free and good enough."
- **The catch:** the pooling moat needs dozens of customers who share suppliers and grant learning rights. It arrives late.

## Wedge to path to scale
- **Wedge:** a $15-25k Warranty Leakage Audit, credited toward year one, that the product generates. It produces three things:
  1. Dealer-claim leakage
  2. Supplier-recoverable clusters with evidence packets
  3. Emerging clusters, backed by a backtested lead-time chart

  Drop the 10x money-back guarantee. At a $100M maker it means finding leakage worth 7-12% of all warranty spend, which is too risky. Offer a fee credit instead.
- **Year 1:** reach 3-5 subscriptions at $40-100k.
- **Years 1-3:** ERP and claims-system connectors, continuous adjudication rules, supplier scorecards and a chargeback workflow. Target 60-150 makers.
- **Years 3-6:** a supplier-side product with two-sided network effects on a shared part taxonomy, then a move upmarket. A $20-50M ARR outcome is likely; $100M is a stretch.
- **Likely acquirers:** Axion, PTC/Syncron, Tavant, Epicor.

## Steelman summary (66)
- The pain shows up in dollars on the P&L, and Axion has already convinced investors that the engine works.
- Axion's founder was an outsider data scientist.
- Enterprise vendors rarely chase $50k deals.
- Thin data at small makers is the reason they need pooling.
- A CSV audit is a fast purchase decision.

## Skeptic summary (50 / 50)
- The EWR hook is gone (threshold is 5,000 units, and EWR warranty data is confidential).
- ServiceCPQ and Aquant already sell the leakage wedge, and the claims systems of record own the data.
- Identified leakage is not recovered cash: makers rarely claw back paid dealer claims, and supplier chargebacks need teardown evidence and contract leverage.
- At about 1 claim per part per year, early warning may produce only noise.
- Validation is weak: entity resolution has no ground truth, and backtests offer about 10-30 labeled events.
- Discovery and liability risk could make general counsels wary.
- Cold outreach yields only 1-3 audits in 6 months.

## What's good
- The problem is a CFO-visible P&L line, with Axion's ROI numbers to point to.
- The work is technical (statistics, entity resolution, LLM pipelines) and needs no credentials.
- The product is software with LLM costs under $300 per audit.
- Supplier-side expansion has real network effects.
- Exits are clear.

## What's bad
- Incumbents in the mid-market claims workflow can bundle "AI insights."
- The data is sensitive, so sales cycles are long, which breaks the bootstrap window.
- The leakage audit is largely one-time, rule-based value.
- The defensible statistics layer pays off only at scale.
- Bespoke schemas pull the business toward services.
- The EWR compliance anchor is gone for most targets.

## Build plan
- **Architecture:**
  1. CSV/XLSX/SFTP ingestion
  2. LLM schema mapper with a confirmation screen
  3. Deterministic SQL leakage rules, each carrying a rule ID and a dollar figure
  4. Batch extraction of narratives into symptom, component, cause and correction
  5. Entity resolution: lexical plus pgvector candidates, LLM re-rank, human review below a confidence threshold
  6. HDBSCAN clustering on extracted fields, with centroid tracking month to month
  7. Beta-binomial empirical-Bayes failure rates
  8. Evidence packets in which the LLM writes prose around computed numbers only

  The founder spends at most 2 hours reviewing each audit.
- **Stack:** Python/FastAPI, Polars/DuckDB, Postgres with pgvector, Next.js with PDF output, Claude Haiku-class and Sonnet-class models through the Batch API, Modal or Fly, S3, Clerk, scikit-learn/HDBSCAN/SciPy, and per-tenant encryption.
- **Evals:** a 300-narrative gold set, a recall backtest (precision of the top 10 alerts and lead time), and 20 messy synthetic exports. All run in CI.
- **Weekends 1-4:**
  1. NHTSA complaints and recalls backtest
  2. Public "Emerging Defects" page and schema mapper
  3. Leakage engine, PDF report, and about 150 outreach messages
  4. 1-2 discounted audits under NDA

  Gate at week 6: 5 calls, 1 data share, 1 paid commitment.
- **Data flywheel:** confirmed mappings become few-shot examples, corrections become labels, confirmed part matches build a shared taxonomy, part priors carry over to the next maker, and recovery outcomes calibrate ranking. This requires an aggregated-learning clause in every contract.
- **Hardest risk:** detection on small data. In week 1, downsample NHTSA data to about 3k records a year and find the volume where precision of the top 10 alerts drops below 0.5. If detection fails at that volume, lead with leakage and recovery only.

## Bootstrap-to-raise plan (months 0-12)
- **Month 0-1 (nights and weekends, still at Netflix):**
  - Build the NHTSA backtest and the public defects page.
  - Recruit a paid advisor: a retired warranty or quality director, for 0.25-0.5% equity.
  - Email product teams at 4CS, Davisware, OnPoint and ServiceCPQ about embedding as their analytics layer.
- **Month 2:** send 300 targeted messages (NTEA, AEM, NMMA members) and land 2 free or discounted design-partner data shares under NDA. Measure hours per audit.
- **Month 3:** close the first paid audit at $10-15k. Start SOC 2 paperwork on a lightweight tool.
- **Month 4-5:** close 2-3 more audits and convert the first one to a $40-60k subscription. Sign a partner LOI or a pilot with one claims platform.
- **Month 6:** decide whether to quit the job. Go full-time only if there are at least 3 paid audits, at least 1 subscription and 1 documented recovered dollar amount.
- **Month 7-12:**
  - Grow to 5-8 subscriptions at about $300-500k ARR.
  - Get one confirmed cross-maker shared-part match.
  - Build connectors for Epicor and NetSuite.
- **Fundable milestone:** about $300k+ ARR, at least 40% of audits converting to subscriptions, one customer-verified recovery of 10x the fee or more, and either a claims-platform distribution partnership or a working pooled-detection result. With that, raise a $2-4M seed.

## Cofounder needed
A domain or GTM cofounder, or at minimum a committed advisor. The ideal is a former warranty or quality manager from equipment or specialty vehicles who can open doors and speak the 8D, FMEA and labor-op vocabulary. A second technical cofounder is not needed, because the founder covers the ML and full-stack work. Without a domain partner, start anyway, but budget for a slower sales cycle.

## First 30 days
- **Week 1:** download NHTSA flat files, build extraction and clustering, and run the downsampled backtest.
- **Week 2:** publish the defects page, and run 10 customer-discovery calls with warranty managers (the ask is "what would you pay to find?").
- **Week 3:** run the schema mapper and leakage rules on a synthetic export, and reach out to the four claims platforms.
- **Week 4:** secure one real anonymized export, score extraction against 100 hand labels, and sign on an advisor.

## Kill criteria
- By week 6, fewer than 5 discovery calls or no real data share.
- By month 4, no paid audit.
- Audits average more than 8 human hours, which means it is a services business.
- No audit finds recoverable dollars of at least 5x the fee, or customers say they won't pursue clawbacks.
- Top-10 alert precision falls below 0.5 at 5k claims a year with no pooling path.
- A claims platform (ServiceCPQ, 4CS, Davisware) ships an equivalent analytics module free to its base before you have 5 customers.

## Sources
- https://www.axion.com/news/axion-ray-announces-17-million-in-series-a-funding
- https://siliconangle.com/2024/03/12/ai-startup-axion-ray-raises-17-5m-enhance-technical-issue-detection-manufacturers/
- https://pulse2.com/axion-ray-37-million-series-b/
- https://pulse2.com/viaduct-10-million-raised-to-solve-and-predict-product-failures/amp/
- https://warrantyweek.com/archive/ww20231207.html
- https://www.warrantyweek.com/archive/ww20220317.html
- https://www.nhtsa.gov/vehicle-manufacturers/early-warning-reporting
- https://www.trailer-bodybuilders.com/trailers/ewr-threshold-raised-5000-units
- https://www.law.cornell.edu/cfr/text/49/part-579/subpart-C
- https://www.servicecpq.com/warranty-claims-management
- https://www.businesswire.com/news/home/20200817005454/en/Aquant-Announces-Intelligent-Warranty-Audit-to-Accelerate-Service-Transformation
- https://davisware.com/manufacturers/
- https://rv-pro.com/news/furrion-selects-onpoint-warranty-program/
- https://linkedin.com/company/4cs
- https://www.cbinsights.com/compare/acerta-vs-axion-ray
- https://tavant.com/products/warranty-ai/
- https://yespress.io/daniel-first.md
- /home/user/GmailCleanupExtension/research/ai-opportunities/04-founder-fit-rescore.md
