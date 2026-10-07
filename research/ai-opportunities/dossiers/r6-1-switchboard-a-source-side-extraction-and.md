# Switchboard: source-side legacy-database extraction and verification for vertical-SaaS vendors

**One-liner:** An engine that reads legacy desktop databases (Btrieve/Pervasive, FoxPro DBF/FPT, Jet/ACE, Progress, c-tree) without vendor metadata, works out what each field means in that specific app, and produces a signed reconciliation report. Vertical-SaaS challengers use it to convert any prospect, including sources they currently turn away.

**Score: 55/100. Verdict: promising with a pivot.** The founder fit is strong, but the proposed wedge is not. In veterinary, Bitwerx already sells exactly this product (an on-site agent, long-tail sources, white-label conversions) to the challengers the plan names. The idea is only worth pursuing if 5-10 vendor calls in a different vertical turn up a real gap: deals named as lost to unconvertible sources, and no Bitwerx-equivalent. Calibration: the dossier rated this 61, the steelman 69 and both skeptics 52. On the scale used here, 54 was the best idea under the old generic founder profile, and 70+ means genuinely compelling.

## Rubric (this founder)

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 7 | Reverse-engineering storage engines plus verification is real engineering. But the derived-semantics problem is solved one source at a time and doesn't carry over between apps. |
| no_domain_required | 8 | The buyer is a software company, and the vendor supplies the knowledge of its own target schema. No credentials are needed. |
| bootstrap_to_raise | 6 | Buyers already pay $500-2,500 per conversion. But the founder-in-the-loop conversions are contract work that doesn't fit next to a Netflix job, and volume follows the challenger's sales. |
| product_not_services | 4 | Long-tail sources are low-volume by definition, so automation stays low exactly where the plan sells. Migration preview needs custom integration with each vendor. |
| market_size | 4 | Conversion fees are a direct pool of about $60-130M per year spread over 25+ verticals. Getting to $100M+ depends on a speculative recurring-access layer. |
| whitespace | 4 | Vet and dental are taken (Bitwerx). The target-side mapping layer is crowded (Vern, Flatfile/Obvious, Lume, Zengines, superglue, Universal Migrator, Woflow). Open space in other verticals is unproven. |
| gtm_without_network | 5 | The buyers are easy to find (CROs and onboarding leads), but there are only 5-15 per vertical, so 20 logos takes 3-4 verticals. |

## Thesis

AI-driven migration as a way to win deals is a validated idea. Sage bought Doyen AI in April 2026 to cut SMB migrations from weeks to days. DualEntry made "NextDay Migration" central to its $90M Series A (about $415M valuation; the original idea text wrongly called it a Series B). Most new entrants work on the target side: they map exported CSV files into the new system's import format. The source side is harder and less contested: reading raw legacy storage the prospect can't export cleanly, recovering what each field means in that app and version, and proving correctness with reconciliations an accountant would accept.

The pitch to a vertical-SaaS CRO: "We convert any source, including the ones you decline, and show the prospect their own data in your product before they sign." The lasting asset is the extractor library, the per-source semantic models and the installed agents, which could later become a recurring read/sync layer for legacy systems.

## Workflow today

1. Near close, the prospect asks "can you bring my history?" Challengers have in-house scripts for their top sources. For example, Digitail publishes switch guides for AVImark and Cornerstone, and ezyVet publishes a Cornerstone conversion guide. Long-tail sources get "demographics and balances only," get handed to Bitwerx, or get a no.
2. A specialist copies database directories over a remote session.
3. One or two engineers maintain per-source scripts and patch them by hand for version drift.
4. Code tables, reminders, inventory and AR are mapped. Reminder schedules are a known silent-failure point.
5. A test conversion goes to the customer, then the final conversion runs over a cutover weekend.
6. Reconciliation is manual and partial, and errors arrive as support tickets for weeks afterwards.

Conversions take 2-8 weeks (inferred). Fees run $500-2,500, verified examples being Open Dental at $800-1,400 and EZ 2000 at $1,295-1,495, and are often waived to win the deal.

## TAM (estimates)

- **Vet:** about 30k practices x 5-7% switching per year is about 2k conversions, roughly $2M per year.
- **Dental:** roughly $5-7M per year.
- **All legacy-desktop SMB verticals:** about 1-1.5M locations x 5-6% switching is 60-90k conversions, about $60-130M per year.

Three adjacent pools would be needed to grow beyond that:

- incumbents moving their own on-prem bases to cloud ($1-10M programs)
- PE consolidators standardizing acquired sites
- recurring legacy read/sync access, about 300-500k locations x $15-30 per month

The realistic ceiling is $10-40M ARR or a strategic acquisition along the lines of Sage-Doyen.

## Competitors

| Company | Position | Scale |
|---|---|---|
| Bitwerx DataCo | Sells vet migrations to PIMS vendors, from instant automated extraction to white-label conversion. Uses an on-site agent and covers AltaPoint, AVImark, Cornerstone, DVM Manager and more. Instinct and Shepherd use it. | Says 5,000+ practices; private, apparently bootstrapped |
| Vern | "AI data engineer for B2B SaaS implementations," targeting practice-management, payroll and construction software | AUD 260k pre-seed (Antler) |
| Doyen AI (Sage) | Migration AI for finance systems | Acquired April 2026 |
| DualEntry | AI ERP with in-house 24-hour migration | $90M Series A |
| Flatfile / Obvious | Moved from CSV import to AI data migration | Series B (Tiger) |
| Lume AI | Horizontal schema mapping | GC and Khosla backed |
| Zengines | AI conversion platform, enterprise-focused | $5M |
| superglue | Mid-market ERP migration agents | YC W25 |
| Universal Migrator | Legacy migration for legal-tech challengers | Private |
| Woflow | AI-agent migration through credentials, browser automation and connectors | Private |
| Supergood / Asteroid | APIs for legacy systems without one (the recurring layer) | $4M seed / YC W25 |
| In-house teams (e.g. Archy, MWI, IDEXX) | Funded challengers build extraction themselves | n/a |

## Why tech is the moat

1. Storage readers that work without vendor metadata, for example Btrieve files with no DDF schema files, DBF memo chains and damaged Jet files. They also read data the app won't export, such as deleted rows, audit tables and the reminder engine.
2. Per-source semantic models. An LLM proposes field meanings, evidence and constraints confirm them, and every human correction becomes a labeled example.
3. A deterministic verification engine: AR aging reconciled to the cent, reminder due dates recomputed, referential integrity checked, side-by-side samples, and a signed report.
4. An eval corpus of real legacy databases that grows with each conversion and benefits every vendor converting from the same source.

**Honest limits:** the number of legacy systems is finite, a funded competitor could hire reverse engineers, and incumbents can encrypt files or license-lock them. That makes the moat an 18-36 month head start, not a structural one.

## Wedge and path to scale

- **Original wedge:** veterinary. Skeptic research shows Bitwerx already owns it, so drop it.
- **Revised wedge:** a vertical where 15+ funded cloud challengers convert off binary legacy databases and no Bitwerx-equivalent exists. Candidates are independent insurance-agency management, auto repair, property management and small-firm law/CPA practice management. Check each with one search plus 5-10 calls to vendor onboarding leads before writing any vertical-specific code.
- **Then:** per-conversion revenue → vendor platform fee plus migration preview → 3-5 verticals sharing the same storage readers → PE consolidator and incumbent cloud-migration programs → installed agents become a recurring access API.

## Steelman summary (69)

- Fast migration wins deals, and the source side is where the hard engineering is.
- Every vertical AI-agent company in 2026 needs read access to systems with no API, and a one-time conversion is how an agent gets installed on-site.
- Human-in-the-loop work early on is the labeling pipeline. The 100th conversion from a source should need no human.
- Bitwerx sustaining itself without outside funding shows the model can pay for itself.
- Analogs: Plaid and Fivetran (from memory), plus the Doyen-to-Sage exit.

## Skeptic summary (52, 52)

- Bitwerx already sells the exact product in vet, and Shepherd calls it "a vital partner." Distributors (MWI) and incumbents (IDEXX) also do conversions.
- Funded challengers build migration in-house (Archy is hiring for it).
- There are fewer than 20 buyers per vertical.
- The long tail can't be automated economically.
- Derived semantics need near-100% accuracy, and the test corpus can only be built by doing conversions.
- Legacy vendors can change license terms (the AVImark EULA dispute) or encrypt files.
- The signed confidence report creates liability.
- Dental requires a HIPAA BAA and SOC 2.

## What's good

- It fits the founder well. The buyer is a software company, the work is reverse engineering, ETL, LLM structuring and testing, and no credentials are needed.
- Buyers already pay per conversion, so revenue can start in the first quarter.
- The exit is validated (Doyen to Sage), and the category is hot with AI-agent and integration buyers.
- The verification engine and migration preview are product-shaped features that sell to the CRO's budget, not the onboarding team's.

## What's bad

- The named wedge is occupied by an incumbent with vendor relationships.
- Per-vertical pools are small, so the company has to expand across verticals early, and each new vertical needs new readers.
- It stays semi-services for a long time, and margins on the long tail stay low.
- Volume is lumpy and controlled by the challengers' sales.
- There is legal and EULA exposure, and liability for bad conversions.
- The $100M+ outcome depends on a recurring access layer where Supergood, Asteroid and Bitwerx already play.

## Build plan

**Architecture.** Data arrives through two routes: a signed Go Windows agent that takes a shadow-copy snapshot, hashes the files and uploads them encrypted, with written authorization from the data owner; or a vendor portal. The pipeline then runs these stages:

1. deterministic readers (DBF/FPT, Jet/ACE, Btrieve with page-level schema inference, ODBC for SQL Anywhere and Progress) writing Parquet
2. a profiler (cardinality, likely foreign keys, code tables)
3. an LLM semantics proposer using structured output, with retrieval from a pgvector knowledge base keyed by source, version, table and column
4. narrow vision use, matching legacy report screenshots to columns
5. a mapper to each vendor's import spec
6. a deterministic verification engine producing a signed PDF/JSON report
7. a review UI that shows only low-confidence fields and failed invariants

**Stack.** Python, Polars and DuckDB, with dbfread and mdbtools/access-parser plus a custom Btrieve reader. Go for the agent. Postgres with pgvector, S3/KMS, and a Postgres SKIP LOCKED job queue. A Next.js portal. The Claude API with prompt caching (a Sonnet-class model for semantics, a Haiku-class model for bulk labeling).

**Weekends 1-4.**

1. Readers turn 3 real legacy databases into profiled Parquet.
2. Semantics plus a verification report on one full database.
3. A landing page and outreach to about 30 onboarding leads and CROs in the chosen vertical, plus bids on Upwork legacy-conversion jobs. The offer is one free conversion, then $300-1,000 each.
4. A migration-preview demo in one challenger's public import format.

The gate is at least 2 paid conversions or LOIs, and at least 1 vendor that can name deals lost to sources it couldn't convert.

**Data flywheel.** Each conversion adds a versioned source model, labeled corrections, an anonymized eval database and invariant templates. The headline metric is human minutes per conversion on each source.

**Hardest risk.** Derived semantics: balances and reminders that the app computes and doesn't store. De-risk it in week 1 with differential reverse engineering. Install trial copies in a Windows VM, drive the UI with pywinauto, diff storage bytes after each action and check against the app's own reports. If you can't reconcile AR to the cent on one database by day 7, narrow to the sources where you can.

## Bootstrap-to-raise plan (months 0-12)

- **Month 0 (nights and weekends, $0-2k):** pick the vertical. Make 10 calls to vendor onboarding leads and CROs in insurance-agency management, auto repair and property management, and search for Bitwerx-equivalents. Build the DBF, Jet and Btrieve readers in parallel.
- **Month 1:** run differential reverse engineering on 2 trial legacy apps in the chosen vertical. Produce one verification report reconciled to the cent. Bid on 3-5 Upwork conversions to get real databases and first dollars.
- **Month 2:** do one free conversion for a challenger, then quote $500-1,500 for the next. Target 3-5 paid conversions, about $3-6k.
- **Month 3:** sign 2 vendors to per-conversion agreements. Build the migration-preview demo and pitch it to their CROs. Target about $10k cumulative revenue.
- **Months 4-5:** decide whether to leave Netflix, which requires at least $5k per month in recurring conversion volume plus a vendor-signed platform-fee LOI. Ship the self-serve upload portal and the review UI.
- **Month 6:** 3-4 vendors, 40+ conversions, under 60 human minutes per conversion on the top source. Charge the first platform fee ($2-3k per month).
- **Months 7-9:** add a second vertical that reuses the readers. Pitch one PE consolidator or incumbent cloud-migration program.
- **Months 10-12, the fundable milestone:** about $40-80k MRR across 6+ vendors in 2+ verticals, more than 85% of conversions on the top 3 sources needing no human touch, gross margin above 70%, and one program contract or recurring-access pilot. That supports a seed of about $2-4M, pitched as "the read layer for legacy SMB systems."

## Cofounder needed

The core does not need a domain cofounder; vendors supply the target-schema knowledge. The best addition is a second technical cofounder with reverse-engineering or data-infrastructure experience (binary formats, Windows internals, ETL) so that new readers ship in parallel. Second choice is a commercially minded cofounder who has run onboarding or implementation at a vertical-SaaS company and can open vendor doors and set pricing.

## First 30 days

1. Search for Bitwerx-like players in 4 candidate verticals and list 15+ cloud challengers in each.
2. Have 10 conversations with onboarding leads and CROs, asking "name the deals you lost because you couldn't convert the old system."
3. Build the DBF, Jet and Btrieve readers and run differential reverse engineering on one trial app.
4. Produce one verification report reconciled to the cent.
5. Win 2 Upwork or vendor conversions, paid or free with a reference.

## Kill criteria

- Fewer than 3 of 10 vendors can name deals lost to unconvertible sources.
- Every candidate vertical already has a Bitwerx-like converter that vendors are happy with.
- AR can't be reconciled to the cent on a real database within 2 weeks.
- No paid conversion or LOI by week 8.
- Human time per conversion on the top source stays above 3 hours after 25 conversions.
- A legacy vendor's EULA or encryption blocks access to the top source in the chosen vertical.

## Sources

- https://www.sage.com/investors/investor-downloads/press-releases/2026/04/sage-acquires-doyen-ai-to-help-smbs-migrate-and-go-live-faster-with-ai/
- https://www.indexbox.io/blog/dualentry-secures-90m-series-a-funding-at-415m-valuation/
- https://en.wikipedia.org/wiki/DualEntry
- https://www.bitwerx.com/bitwerx-dataco
- https://help.instinct.vet/en/articles/16736869-pims-systems-supported-for-data-migration
- https://help.instinct.vet/en/articles/16736848-medical-record-data-migration-overview-and-process
- https://www.newswire.com/news/vetverifi-and-bitwerx-announce-partnership-transforming-health-data-22108157
- https://careers.antler.co/companies/vern
- https://www.preqin.com/data/profile/asset/vern-ai-pty-ltd/791508
- https://flatfile.com/about/
- https://techcrunch.com/2024/11/12/general-catalyst-and-khosla-ventures-back-data-mapping-startup-lume
- https://www.cbinsights.com/company/zengines
- https://www.lawnext.com/2026/08/universal-migrator-helps-aggressive-startups-onboard-customers-quicker.html
- https://www.woflow.com/customers/financial-services
- https://www.builtinsf.com/job/product-manager-data-migration/10254611
- https://www.vettimes.com/news/business/digital/enterprise-veterinary-hardware-and-data-migration-services
- https://www.trysignalbase.com/news/funding/supergood-secures-100
- https://www.vin.com/doc/?id=8923642
- https://help.digitail.io/en/articles/12831941-switching-veterinary-practice-management-software-from-cornerstone-to-digitail
- https://docs.ezyvet.com/discover-resources/onboarding-resources-for-new-ezyvet-customers/cornerstone-data-conversions/data-conversion-information-for-cornerstone-patient-data
- https://www.benco.com/?p=23112
- https://zoftwarehub.com/products/ez-2000-dental-software/zoftware-analysis
- /home/user/GmailCleanupExtension/research/ai-opportunities/data/yc-w25-f26.csv
