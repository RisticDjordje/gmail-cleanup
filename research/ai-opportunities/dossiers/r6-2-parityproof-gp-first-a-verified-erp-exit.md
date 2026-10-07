# ParityProof (GP-first): a verified ERP-exit engine

**In one line:** a read-only scanner and deterministic parity engine. It scopes a Dynamics GP exit, generates the destination load files and proves that the subledgers tie out. It is sold to partners moving GP customers to Acumatica, Intacct or NetSuite.

**Score: 52/100. Verdict: promising only with a pivot.** It is worth a 4-week demand test, and only as the first adapter of a source-agnostic "verified migration" engine (merged with Switchboard), not as a standalone GP company. The scale: 54 was the best idea under the old generic profile, and 70+ is compelling.

## Rubric (this founder)

| Dimension | Deep dive | Bull | Skeptics | **Final** | Why |
|---|---|---|---|---|---|
| tech_insight_edge | 6 | 7 | 5 | **5** | GL parity is commoditized and the GP schema is public. Engineering edge is real only in the inventory/add-on replay and the ledger IR, which are a minority of deals |
| no_domain_required | 6 | 7 | 5 | **6** | No credentials needed and Fabrikam runs in Docker. Inventory costing and partner credibility take months |
| bootstrap_to_raise | 8 | 9 | 6 | **6** | Buyers are findable, but deals are lumpy, security reviews are slow and per-migration capture is about $2-6k |
| product_not_services | 6 | 7 | 5 | **5** | Every customer's add-ons pull toward custom mapping |
| market_size | 4 | 5 | 4 | **4** | GP alone is about $50-150M cumulative and closes in 2031 |
| whitespace | 6 | 7 | 4 | **4** | eOne already sells GP-to-Intacct/NetSuite migration plus archive. Campfire and DualEntry give GL parity away |
| gtm_without_network | 8 | 8 | 5 | **6** | Partner lists are public, but partners buy from trusted GP names and resist cutting billable hours |
| **Overall** | 58 | 67 | 52 | **52** | |

## Thesis
The value is in proving a migration is correct, not in copying the data. Every legacy-ERP exit ends with consultants tying out trial balances, agings and inventory valuation in Excel. That step makes fixed-fee quotes risky and eats senior hours. GP has a fixed deadline: no new licenses since 2026-04-01, product support ends 2029-12-31 and security updates end 2031-04-30 (verified, Stoneridge and Forvis Mazars). Its customers cluster in distribution, manufacturing and nonprofits, the inventory- and dimension-heavy profiles the GL-centric AI ERPs serve least well. The bet is that a deterministic replay engine, with LLM schema inference in front of it, turns migration validation from a craft into a product. Then each new legacy source becomes an adapter.

## Workflow today
1. **Scoping, 1-3 weeks.** A senior GP consultant runs ad-hoc SQL, interviews finance about modules and add-ons, and quotes a fixed fee. Packaged GP-to-BC runs about $24k (Bond), with 6-8 week offers from RSM and Sikich.
2. **Destination setup.** Account segments are mapped to dimensions.
3. **Data movement.** BC has Microsoft's free Cloud Migration tool, which now covers inventory, open POs and RM/PM/SOP/POP/IV history. Other destinations use CSV templates, SmartConnect, KingswaySoft or eOne's packaged migrations.
4. **Validation (the pain).** Trial balances, AR/AP agings, inventory quantity and value, and open orders are tied out in Excel, and variances are chased back to unposted batches and add-on tables.
5. **History.** 7+ years of detail is kept on a GP VM, in eOne Popdock, or in rebuilt reports.
6. **Parallel run and go-live.**

## TAM (estimates, unverified)
- GP active sites: 15-25k worldwide, about 60% in North America. The 20-25k figure has no source, and the cited survey had n=74.
- 9-19k migrations over 2026-31 at $2-6k of software capture each gives **$20-110M cumulative**. An archive tail at $1.2-3.6k/yr would be $10-70M/yr if captured, against Popdock.
- Expansion to a "verified ERP exit" market (SL, NAV on-prem, Sage 100/500, QBD Enterprise, plus continuous mid-market switching) is about $150-500M/yr. This figure is speculative.

## Competitors

| Player | What it does | Scale |
|---|---|---|
| eOne Solutions (SmartConnect, Popdock, GP-to-Intacct/NetSuite packages) | Load, archive and in-destination GP data access. Already serves the "best channel" | Established GP ISV |
| Microsoft BC Cloud Migration | Free mechanical GP-to-BC move, now including inventory and history | Microsoft |
| Campfire (Migration Agent) | GL move plus an account-by-account reconciliation workbook | $103.5M raised (Accel, Ribbit) |
| DualEntry (NextDay Migration) | AI ERP that migrates Great Plains free | $90M Series A, $415M valuation |
| ECOSIRE | GP/NAV toolkits "with reconciliation reports that prove the numbers" | Services/tooling |
| Folio3 BURQ | "AI-infused" fixed-fee GP-to-BC | Services firm |
| Partner packages (Sikich, RSM, Bond, Integrato) | In-house scripts behind fixed-fee offers | Buyer and substitute |
| Qorelo | AI for SAP migrations (category proof) | $3.5M seed, 2026 |

## Why tech is (partly) the moat
The parts that are not a moat: core GP schema mapping (public, fixed) and GL tie-out (free from Campfire). The parts that could be:
1. **Inventory and operational replay.** FIFO, average and standard cost, landed cost, revaluations, open SOP/POP, multi-company and fund dimensions, all deterministic and exact to the penny.
2. **A source-agnostic ledger IR with differential testing**, so each source or target is an adapter.
3. **An add-on fingerprint library** where LLMs propose and partners confirm. This only compounds if customers opt in to sharing metadata, and the no-egress design works against that.
4. **Calibration data**: estimated vs actual hours across migrations.
5. **Trust engineering**: signed, reproducible reports.

Items 2, 4 and 5 fit this founder's strengths well. Item 1 is learnable domain work, and it is where errors kill trust.

## Wedge, then path to scale
- **Wedge:** a free "GP X-Ray" scoping scan, then a paid Parity Certificate ($1.5-4k) or a partner license ($6-15k/yr), aimed at inventory-heavy GP customers that non-Microsoft destination partners are trying to win.
- **Scale:** add load generation for 2 destinations and a recurring history archive ($100-300/mo per company), then a second source (Dynamics SL or Sage 100) by month 18, then OEM deals with destination vendors.
- **Realistic outcome:** $15-40M ARR and a strategic sale (eOne, Acumatica, Sage, an AI ERP or a large partner). $100M ARR needs the full multi-source engine.

## Steelman (bull, 67)
This is the correctness layer for any accounting-system move, not a GP tool. A free mechanical move makes paid verification more necessary. Campfire and DualEntry only verify migrations into their own product, so partners of other destinations need a neutral tool. The analogs are real: Snowflake bought Mobilize.Net SnowConvert to speed up switchers, and Datafold raised about $26.7M on LLM translation plus data-diff parity. The bootstrap path is unusually concrete: public buyer lists, a sample database in Docker and priced pilots.

## Skeptic summary (52, 52)
- **Competition and GTM.** eOne already sells packaged GP-to-Intacct and GP-to-NetSuite migrations with archiving, so the "unserved non-Microsoft partner" wedge is not empty. Partners who bill by the hour lose revenue when validation gets faster. A security review of an unknown vendor's on-prem scanner adds 60-120 days. Year-one revenue is more likely $20-60k than $60-150k.
- **Tech and regulation.** Most migrations load open balances, not history, so the hard replay matters to a minority. A coding agent can write basic tie-out scripts in an afternoon. Fabrikam is clean, and real failures surface on live deals. "Certificate" invites auditor reliance and errors-and-omissions exposure. SOC 2 strains the bootstrap budget. Payroll tables hold SSNs and must be provably excluded.

## What's good
- It is a real product: deterministic software, local compute, over 95% gross margin if kept disciplined.
- The deadline is fixed and the pain is documented (the validation step, fixed-fee overruns).
- It can be prototyped alone in weeks on Fabrikam with no credentials.
- The buyers (partner practice leads) are publicly listed and findable by cold outbound.
- The systems, data-engineering and applied-LLM work matches the founder well.
- It shares an engine with Switchboard, so the effort carries over even if GP stalls.

## What's bad
- The best channel is already served by eOne. GL parity is free from well-funded AI ERPs, and Microsoft keeps widening its free tool.
- Software capture is $2-6k per migration and the market is time-boxed. GP alone is not venture-scale.
- The defensible part (inventory and add-on parity) sits furthest from the founder's knowledge and is the hardest to test before launch.
- Partner incentives are mixed, security reviews are long and the work drifts toward services.
- The certificate creates liability, and SOC 2 costs money and months.

## Build plan
- **Architecture:**
  - A signed on-prem binary connects with a read-only SQL login and copies GP tables to Parquet, with payroll (UPR) tables excluded by default.
  - DuckDB runs replays: trial balance by period, AR/AP aging from RM20101/PM20000, IV cost-layer valuation tied to the GL, open SOP/POP, unposted batches (SY00500), and a row diff against the destination.
  - The LLM proposes add-on and segment mappings with citations and writes variance narratives. It never decides parity.
  - Partners approve every mapping in the portal. Only opt-in metadata leaves the customer network.
- **Stack:** Python, DuckDB/Polars, pyodbc, PyInstaller (or Go); SQL Server 2019 in Docker; Next.js and Supabase; Claude Sonnet for mappings and Haiku for column classification; SHA-256-signed HTML/PDF reports; Stripe.
- **Weekends 1-4:**
  1. Restore Fabrikam. Build trial-balance, aging and inventory replays. Ship a GP end-of-life landing page.
  2. Build the X-Ray: module usage, custom/ISV table detection against the Dexterity catalog, data-quality flags, and a complexity score converted to hours.
  3. Generate one Acumatica or Intacct load package, load it into a sandbox, diff it and produce a variance report.
  4. Cold-email about 300 partner leads, offering 10 free X-Rays and asking $1.5k per certificate or $6k/yr.
- **Evals:** Fabrikam with errors planted (orphan rows, cost-layer drift, half-posted batches) and a 100% catch rate as a CI gate. Mapping accuracy measured on partner-confirmed add-on tables.
- **Data flywheel:** add-on fingerprints, hours calibration, and labeled variance root causes, which become automatic fix suggestions.
- **Hardest risk:** inventory valuation replay on real, messy data. Week 1: generate a few hundred transactions plus a revaluation, reconcile to GP's history report and the GL to the cent, catch all 20 planted drift types, and ask 3 partners for one anonymized inventory-heavy backup. If real data doesn't reconcile by week 3, narrow to GL, AR/AP and archive.

## Bootstrap-to-raise plan (months 0-12)
- **Month 0 (nights and weekends; check Netflix's moonlighting and IP terms first):** Fabrikam replay engine, X-Ray scanner, landing page. Run the skeptic's kill test: ask 10 Intacct and NetSuite partners whether eOne already covers them.
- **Month 1:** 300-lead outbound, 10 free X-Rays, and a design-partner agreement with one inventory-heavy partner for a real backup.
- **Month 2:** first paid certificate ($1.5k) and first partner license ($6k). Security questionnaire pack and no-egress architecture document.
- **Month 3:** the Acumatica load package goes to production. Target 3-5 paying partners and about $15-25k booked. Recruit a domain cofounder.
- **Months 4-5:** the history archive MVP (Parquet plus a query UI) with first recurring customers. Begin the Intacct adapter.
- **Month 6:** checkpoint. 8+ paying partners, $40k+ booked, 20+ certificates, and at least one documented case of 30%+ fewer validation hours. If not met, stop or fold into Switchboard.
- **Months 7-9:** start the second source adapter (Sage 100 or Dynamics SL) on the same ledger IR. Pilot an OEM or co-marketing deal with one destination vendor.
- **Months 10-12:** about $250-400k ARR run-rate including archive, 25+ partners, and the second source live in pilot.
- **Fundable milestone (months 12-18):** $1M+ ARR, 40% or more of it recurring archive or licenses, two source adapters, one destination OEM, and published hours-saved data. Raise a $3-5M seed on the "verified ERP exit engine" story.

## Cofounder needed
A **domain cofounder, effectively required**: a senior GP or Acumatica migration consultant with inventory-costing and distribution experience, ideally ex-partner, who brings credibility and real databases to test on. A second engineer is not needed before seed.

## First 30 days
1. Restore Fabrikam and build the three replays.
2. Run 10 partner interviews on eOne coverage and willingness to pay.
3. Build the X-Ray MVP.
4. Get one real inventory-heavy backup.
5. Send the first 150 outbound emails.
6. Post 2 SEO pages: "GP to Acumatica validation" and "GP inventory migration".

## Kill criteria
- 7 or more of 10 Intacct, NetSuite or Acumatica partners say eOne or in-house scripts already cover them.
- Fewer than 3 of 10 free X-Ray recipients pay $1.5k+ or sign $6k+/yr within 60 days.
- No partner hands over a full-history, inventory-heavy database within 60 days.
- The inventory replay fails to reconcile to the cent on real data by week 3.
- No second source adapter has paying interest by month 9.

## Sources
- stoneridgesoftware.com (GP end-of-support dates; GP-to-BC tools)
- forvismazars.us (GP support announcement)
- dynamicscommunities.com (2024 GP survey, n=74)
- idatalabs.com (GP base split)
- eonesolutions.com (GP-to-Intacct and GP-to-NetSuite packages; Popdock)
- ecosire.com (GP/NAV toolkits)
- campfire.ai (Migration Agent); techcrunch.com (Campfire Series A)
- dualentry.com and cpapracticeadvisor.com (DualEntry $90M)
- tech.eu (Qorelo seed)
- AppSource listings: Sikich, RSM, Bond, Integrato, SMB Suite, Folio3
- learn.microsoft.com (GP migration guidance)
- businesswire.com and geekwire.com (Snowflake acquires SnowConvert)
- cbinsights.com (Datafold)
- /home/user/GmailCleanupExtension/research/ai-opportunities/04-founder-fit-rescore.md
