# SPA Claims Autopilot: a claims engine for electrical and HVAC distributors that starts with recovering rejected money

**One-liner:** software that finds the special pricing agreement (SPA) claims manufacturers rejected or short-paid, works out which can be fixed, and refiles them automatically with the agreement clause cited. It starts with independent electrical and HVAC distributors running Eclipse, P21 or SX.e, then expands into rebates, price protection and co-op.

## Score and verdict

**50/100 for this founder. Verdict: promising only with a pivot.** It sits below the old generic-profile benchmark (54) and well below the 70 bar.

The steelman (66) is right that this is a reliable path to cash with a strategic-sale floor. The skeptics (46 and 48) are right on three points that matter most for this founder:
- The rejection loop is a feature gap at three funded companies, not open market.
- Getting the first 20 customers depends on trust with distributors' pricing teams, which this founder doesn't have.
- Where EDI 849 responses exist, they already carry coded denial reasons, which shrinks the ML moat.

**The pivot:** pursue this only if a cofounder who has run SPA claims at a distributor joins first and gets you two real datasets within 30 days. Without that partner, pass.

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 6 | Catalog and end-customer entity resolution, effective-dated contracts and outcome modeling are real problems. Extraction is commodity, and 849 reason codes make classification partly a lookup table. |
| no_domain_required | 5 | The rules can be learned from exported files. Credibility, edge cases and data access need an insider. |
| bootstrap_to_raise | 6 | No capital needed. But manufacturers pay 60-120 days after the refile, so first contingency cash lands in months 5-8. |
| product_not_services | 5 | The first 6-12 months are audit work. Whether it becomes a product depends on the touchless rate. |
| market_size | 5 | SPA-only SAM is about $75-140M. A full channel-claims SAM is about $125-375M. Ceiling of $20-40M ARR without new layers. |
| whitespace | 3 | SpeedyLabs (YC W23), Pepper's Billback Agent, Enable's Claims and SPA modules, and Canals ($35M, already in electrical) are each one sprint away. |
| gtm_without_network | 5 | Buyers can be found on LinkedIn. But channels run through buying groups (Enable is exclusive in IDEA), there is no marketplace, and strangers rarely hand over confidential net pricing. |

## Thesis

Distributors pay for SPA discounts up front and then claim the difference back from manufacturers. SPA usage runs about 2.1% of cost of goods sold (COGS) at average electrical wholesalers and about 7% at top performers (electricaltrends, 2023). A $300M distributor therefore carries about $5-16M a year in claimback receivables, adjudicated by about 40 manufacturers, each with its own rules.

Incumbents (Enable/RebateGPS, Ximple, Epicor) cover the front half: keying agreements, generating claims and validating them before submission. The back half is mostly people and spreadsheets: re-adjudicating rejections and short-pays, then refiling.

The engineering thesis has three parts:
- Deterministic adjudication against effective-dated contract objects.
- Entity resolution across catalog numbers and end customers.
- A per-manufacturer model of which refiles get paid, trained on outcomes nobody else collects.

Honest caveat: the outcome-data moat compounds only at 50+ accounts, and the window may close before then.

## Workflow today

1. A contractor asks for a job quote.
2. The distributor's salesperson asks the manufacturer's rep for special pricing.
3. The SPA arrives as a PDF, portal entry or email. 33% of surveyed electrical distributors hold more than 250 customer-defined SPAs.
4. A coordinator keys it into ERP contract tables.
5. The order ships at SPA cost.
6. The distributor files a claim through EDI 844, a portal or a spreadsheet.
7. The manufacturer pays, short-pays or rejects. Common reasons: expired agreement, customer mismatch, catalog-number suffix, quantity overrun, ship date outside the window.
8. Rejections pile up and are written off after 90-120 days.

## Market size (TAM)

All figures are estimates unless cited.

**Per account:** leakage is assumed at 3-6% of claim value (unmeasured; vendor figures range 1-12%). That gives $150k-1M a year per $300M distributor, of which about $50-500k is recoverable while still in the claim window.
- Lookback contingency at 20-25% is $10-125k, one time.
- Ongoing SaaS is $18-48k a year, rising to $25-80k with rebate, price protection and co-op modules.

**Account pool:** about 2,500-4,700 US accounts across electrical, HVAC, plumbing/PVF, MRO, datacomm and component distribution.

**Beyond $40M ARR**, one of these is needed:
- a manufacturer-side intake module, or
- claims-receivable financing (speculative, and relationship- and capital-heavy).

## Competitors

| Company | What it does | Threat |
|---|---|---|
| Enable (+ SPARXiQ RebateGPS) | Rebate, SPA and claims platform. Raised $120M Series D at $1.12B; exclusive in the IDEA channel. | Very high. Rework is one feature on screens it already has. Also a likely acquirer. |
| Canals | AI operating layer for 100+ electrical, HVAC and plumbing distributors. Raised $35M (May 2026). | Very high. It already has the line data and the buyers. |
| SpeedyLabs (YC W23) | AI rebate and billback platform. Its "Glass" agent reconciles short-pays; runs an "Enable alternative" page. | High. Moving from foodservice to electrical is a short step. |
| Pepper | Billback Agent that matches items across systems and produces audit-ready files. Raised $50M Series C. | Medium. Foodservice only today. |
| Epicor Prism | 18+ AI agents, available in P21 and Kinetic only. | Medium. Doesn't cover Eclipse or SX.e. |
| Ximple, ProfitOptics, MindHarbor, Vistex, Model N, Rivvun | Pre-submit validation, analytics, manufacturer-side and horizontal tools. | Adjacent. |
| CMR, Smyyth, ChannelScaler | Ship-and-debit software and audit services. | Services comparables. |

## Why tech is the moat (and where it isn't)

**Not the moat:**
- Extracting terms from SPA PDFs.
- Classifying rejections that arrive with EDI reason codes.

**The moat, in order of durability:**
1. **Closed-loop outcome labels.** For each refile: manufacturer, reason, evidence attached, paid or denied, days to pay. Pooled across accounts, these power a per-manufacturer adjudication model. Antitrust and clean-room design are needed before pooling any net prices.
2. **Entity resolution.** A cross-manufacturer catalog graph, fuzzy matching of contractors and jobs, and SPA versions judged by ship date.
3. **Auditable deterministic core.** Manufacturers and auditors accept decisions that cite a clause and can be reproduced.
4. **ERP-agnostic ingestion** across Eclipse, P21 and SX.e.

Canals could copy items 2-4 in 12-18 months. Only item 1 plus speed protects the business.

## Wedge to scale

**Wedge:** a free 12-month lookback on flat-file exports. Charge 20-25% contingency on the lookback recoveries, then convert the customer to $1.5-4k a month plus a per-refile fee.

**Path to scale:**
1. Months 6-18: add a pre-submit validator and the rejection model; expand to HVAC and plumbing.
2. Months 18-36: add rebates, price protection and co-op (ACV $50-80k).
3. Month 36+: a component or IT distribution vertical, manufacturer intake, or claims financing.

**Base case:** $10-25M ARR and a strategic sale at 5-10x ARR.

## Steelman summary (66)

- Enable's $1.12B valuation shows venture appetite for channel claims.
- HighRadius shows dispute automation works in CPG deductions; its 80%+ touchless figure is a vendor claim.
- The hard parts are data engineering, which favors this founder.
- A free audit leads to contingency revenue: bootstrapping without capital and raising later with recovered dollars as proof.
- Being acquired is a good floor.

## Skeptic summary (46 / 48)

- **Competition:** SpeedyLabs, Pepper and Enable already ship the adjacent pieces, so the window is under 12 months.
- **Go-to-market:**
  - Getting confidential pricing data from strangers is hard.
  - Expect roughly 2,000 targeted touches to reach 20 customers.
  - Cash arrives in months 5-8.
- **Technology:**
  - About 98% precision is needed before refiles can go out untouched.
  - Missing evidence such as verbal extensions caps touchless at 60-75%.
  - 849 codes make classification a set of rules.
  - Labels arrive slowly.
- **Legal:**
  - Liability for wrong refiles.
  - Antitrust risk in pooling prices across distributors.
  - Portal terms may forbid bots.

## What's good

- Customers can try it with zero integration, and it shows a dollar figure in about 2 weeks.
- It needs almost no capital: LLM costs are cents per claim and infrastructure is under $200 a month.
- Strong exit floor: Enable, Epicor, Canals, Pepper or AD-IMARK.
- The entity-resolution and evaluation work genuinely uses the founder's ML and data skills.
- Contingency pricing removes buyer risk.

## What's bad

- It looks like a feature for three funded companies.
- It needs a domain insider to get data and credibility.
- The first year is audit-shaped, with services margins below 70% touchless.
- Lookback revenue is one time. The follow-on prevention product competes with RebateGPS and Ximple.
- Leakage per account has never been measured.
- The venture ceiling depends on capital-heavy layers (financing, manufacturer intake).

## Build plan

**Architecture**
- Inputs: flat-file uploads, a forwarding inbox for SPAs and rejection notices, and portal CSVs.
- Pipeline, in order: ingest and normalize → LLM/vision contract extraction (with page and bounding-box provenance) → reconcile credits to claims → entity resolution (Splink) → deterministic validity engine → rejection classifier (849 code table first, LLM for free text) → refile packet generator.
- Retrieval is a structured lookup by (manufacturer, agreement, ship date).
- Human review is ranked by dollars × probability of payment. A refile goes out automatically only when its (manufacturer, reason) cell has at least 20 past outcomes and at least 80% of them were paid.
- Golden-set evaluations run in CI. The north-star metric is the paid rate on refiles.

**Stack:** Python with FastAPI, Polars and DuckDB; Postgres with one schema per tenant; Procrastinate job queue; Docling plus a frontier LLM with JSON schemas; Splink; Next.js review UI; Fly or Render; encrypted S3.

**Weekends 1-4**
- **W1:** landing page plus 60 cold emails; ingest and reconciliation built on a synthetic dataset.
- **W2:** SPA extractor reaching at least 95% field accuracy on 30 SPAs; effective dating.
- **W3:** validity engine, classifier, and a Recovery Report (dollars rejected by root cause and manufacturer, dollars still recoverable).
- **W4:** refile packets; ask for a contingency agreement.
  - Pass gate: at least $100k a year recoverable and one signed deal.

**Data flywheel:** each refile outcome feeds the per-manufacturer model, detection of manufacturer policy changes, a shared catalog graph and starting estimates for new customers. Contracts must grant rights to anonymized, cross-tenant use of outcome data.

**Hardest risk:** matching credits back to claims, and having enough evidence to refile without a human.
- If match recall is below 80%, or fewer than half of rejections are refile-eligible with the evidence on hand, it becomes a services business.
- De-risk on one real export: hand-label 200 rejected lines in week 1.

## Bootstrap-to-raise plan (months 0-12)

| Month | Goal | Milestone |
|---|---|---|
| 0 | Keep the Netflix job. Recruit an ex-SPA coordinator or manager as cofounder or paid advisor. Ask Canals and Enable about their SPA plans. | Domain partner signed |
| 1 | Get two real exports through the partner's network. Hand-label 200 lines. Measure match, reason and eligibility rates. | 50% or more refile-eligible, or kill |
| 2 | Deliver 3 free lookback reports. Sign contingency agreements. | At least one account with $100k/yr or more recoverable |
| 3 | First refiles go out. Cold outbound to 300 controllers and pricing managers. | 5 audits under contingency |
| 4-5 | Reach 50% touchless. Ship the platform tier. | First SaaS conversion |
| 5-7 | First contingency cash arrives. Founder goes full-time only if cash in hand plus signed recoveries cover 12 months of runway. | About $150-250k recognized |
| 8-9 | Pre-submit validator; HVAC pilots; 5 calls to component distributors. | 70% touchless, or stop or sell |
| 10-12 | 15-20 accounts, about $400-700k run-rate including contingency. | Raise a pre-seed or seed on $300k+ ARR, 70%+ touchless, a paid-rate curve and logo retention |

**Fundable milestone:** about $1M ARR, 85% touchless, 40+ accounts and NRR above 110% for a full seed. A pre-seed is possible at about $300k ARR with the touchless curve.

## Cofounder needed

A domain cofounder is close to mandatory: a former SPA or pricing manager from a $200M+ electrical or HVAC distributor (or from a manufacturer's channel team). They bring data access, credibility with buying groups and judgment on edge cases. A second technical cofounder is not needed.

## First 30 days

1. Find 10 former SPA coordinators on LinkedIn and pay one $500 to walk through a real export.
2. Email Canals, SpeedyLabs and Enable product leads about whether rejection rework is on their roadmaps.
3. Build the reconciliation prototype on a synthetic dataset.
4. Hand-label 200 real rejected lines.
5. Pitch 3 distributors the free lookback.
6. Decide go or no-go on the cofounder plus data gate.

## Kill criteria

- No domain partner and fewer than 2 real datasets by day 30.
- Fewer than 50% of rejected lines are matched, have a parseable reason and are refile-eligible.
- None of the first 3 datasets shows $100k a year or more recoverable.
- Touchless below 70% by month 9, or refile precision below 95%.
- Canals, Enable or SpeedyLabs ships electrical SPA rejection rework before you have 10 accounts.

## Sources

- https://electricaltrends.com/2023/02/22/spas-sales-and-profit-drivers/
- https://www.electricalmarketing.com/mag/article/20908631/study-seeks-extent-of-problems-and-opportunities-in-spas
- https://enable.com/blog/improving-relationships-throughout-the-supply-chain-enable-announces-120m-series-d-raise-at-1-12b-valuation
- https://enable.com/solutions/claims
- https://www.businesswire.com/news/home/20240508224769/en/Enable-Shapes-the-Future-of-Rebate-Management-with-the-Release-of-its-New-Product-Feature-and-AI-Reporting-Capabilities-at-Catalyze-2024
- https://sparxiq.com/rebategps/
- https://ycombinator.com/companies/speedy-labs
- https://www.speedylabs.ai/enable-alternative
- https://www.usepepper.com/post/introducing-billback-agent
- https://www.vcaonline.com/news/2026052809/canals-raises-35m-to-eliminate-friction-from-the-industrial-supply-chain/
- https://www.canals.ai/blog/how-ai-can-help-electrical-distributors-save-time-and-money
- https://www.stacksync.com/edi/borderstates/border-states-electric-supply/x12-849-response-to-product-transfer-account-adjustment
- https://www.highradius.com/product/deductions-management-automation-software/
- https://www.silicon.co.uk/press-release/new-epicor-prism-vertical-ai-agents-revolutionize-how-frontline-workers-surface-and-act-on-enterprise-intelligence
- https://thenextweb.com/news/rivvun-ai-seed-enterprise-spend-recovery-icertis
- /home/user/GmailCleanupExtension/research/ai-opportunities/MEMO.md
- /home/user/GmailCleanupExtension/research/ai-opportunities/VALIDATION-KIT-spa-recovery.md
- /home/user/GmailCleanupExtension/research/ai-opportunities/dossiers/r3-b2b-claims-engine.md
