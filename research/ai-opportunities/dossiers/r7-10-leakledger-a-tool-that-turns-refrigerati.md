# LeakLedger: refrigeration service tickets turned into AIM Act leak-repair records

**One-liner:** Document AI that reads refrigeration contractors' messy tickets, refrigerant invoices and nameplate photos, then builds a per-appliance leak-rate ledger with repair-deadline alerts under EPA's 2026 HFC leak-repair rule (40 CFR Part 84 Subpart C). It is sold first to contractors who serve independent grocers, c-stores and restaurant groups.

**Source playbook to target industry:** Norra (YC F25, equipment tracking for skilled-nursing facilities), Operon (YC S26, plant documents into a facility model) and Talos (YC F26, transformer predictive maintenance) show that investors back the idea of turning a buyer's unstructured operating records into an asset model. The playbook here is applied to **commercial refrigeration compliance** (supermarkets, c-stores, small cold storage). None of the three source companies is likely to enter this market. They validate the archetype, not this market.

## Score: 38 / 100. Verdict: PASS (kept on file; re-open only if the 2-week kill test passes)

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 5 | Extraction plus entity resolution is real ML work, but the core math is one line, and ServiceTitan already captures structured refrigerant data |
| no_domain_required | 6 | The rule is learnable. Field-built rack full charge and trade shorthand need a contractor advisor |
| bootstrap_to_raise | 4 | Card-paid contractor SaaS is possible, but small, churn-prone accounts and a regulatory cliff give a seed round little to underwrite |
| product_not_services | 7 | Software-shaped, though accuracy requirements push toward human review of tickets |
| market_size | 4 | Core SAM is about $35-110M ARR. Venture scale needs comfort cooling plus refrigerant brokerage |
| ai_advantage_vs_competitors | 4 | AI wins only on paper and PDF back-fill. Forward-looking QR entry (RefriComply) and FSM forms (ServiceTitan) already cut entry pain |
| gtm_without_network | 4 | Distributor counters, RSES chapters and word of mouth. Generic AIM Act SEO is saturated |

Calibration: RegistryPilot = 55. The panel ranged from 35-36 (two skeptics) through 41 (deep dive) to 52 (steelman). I weight the skeptics' verified finding that ServiceTitan and ServiceChannel already ship refrigerant tracking heavily, because it removes the main AI wedge.

## Thesis

Since 2026-01-01, every appliance with 15 lb or more of high-GWP HFC must have a leak rate calculated on every refrigerant add, with repair, verification and recordkeeping duties when the rate is over threshold. Before that, the threshold was 50 lb. The new population (walk-ins, small racks, RTUs) never had a register, and its source data is free-text contractor tickets. A document-AI layer could back-fill 2026 records without new data entry and deliver compliance packs through the contractor. The problems: the space is crowded, the data-capture problem is already being solved upstream, the buyers are lobbying against the rule, and enforcement is likely light.

## Workflow today

- A technician tops up a rack or walk-in and records it in an FSM tool (ServiceTitan, BuildOps, Zuper) or on a paper or PDF ticket ("topped rack B 12# 404A").
- ServiceTitan has a refrigerant-tracking mobile form "for EPA recordkeeping". ServiceChannel sells refrigerant tracking to chains.
- The store's facilities manager, or the owner at an independent, reconciles adds against full charge in a spreadsheet, or nobody does.
- Large chains have run Fexa Trakref or Accruent/Verisae for years, under the old 50 lb Section 608 rule and CARB RMP.
- EPA's annualizing formula: (lbs added / full charge) x (365 / days since last add) x 100. Automatic leak detection applies at 1,500 lb or more. Vendors quote penalties of up to about $124k per day per violation; this is not EPA-verified.

## TAM (estimates, not verified)

| Segment | Basis | ARR |
|---|---|---|
| Supermarkets (open long tail) | 45.6k stores (FMI); about 30-40% not on incumbents; $50-100/site/mo | $8-22M |
| C-stores | about 150k; 30-50% with 15 lb+ remote systems; $20-40/site/mo | $11-36M |
| Contractor seats | 10-20k firms; $100-200/mo | $12-48M |
| Cold storage | Mostly ammonia, outside the rule | about $5M or less |
| **Core SAM** | | **about $35-110M** |
| With comfort-cooling expansion | | about $100-200M |

## Competitors

| Company | What it does | Threat |
|---|---|---|
| Fexa Trakref | Incumbent refrigerant compliance for multi-site retail and grocery | High in chains |
| Accruent (Verisae) | Enterprise refrigerant management | High in chains |
| ServiceTitan refrigerant tracking | Structured per-equipment adds/recovery logged in the FSM tool | **Highest**: owns the ticket |
| ServiceChannel | Refrigerant tracking across chains' contractor networks | High |
| RefriComply | Contractor-focused Part 84 tool; QR entry in about 30 seconds; both calculation methods | Direct wedge rival |
| Refritrak, Ref LeakLog | Refrigerant logging tools | Medium |
| Axiom Cloud (about $5M) | AI leak detection from controller data | Adjacent (sensor layer) |
| Facilio, Oxmaint, iFactory | CMMS products with AIM Act modules or SEO | Medium (SEO crowding) |

## How AI wins (and where it does not)

**Wins:**
- Reading jargon-heavy free text and photos for shops on paper or PDF.
- Back-filling 2026 records that QR tools cannot reconstruct.
- Resolving appliance identity across tickets, invoices and nameplates.
- A cross-contractor model-to-factory-charge graph that auto-fills the full charge.

**Does not win:**
- Shops already on ServiceTitan log structured data, so the remaining work is about a week of leak-rate math, not AI.
- The claimed purchase-versus-charge reconciliation largely fails. Contractors buy cylinders in bulk at the distributor counter, so invoices reconcile per contractor, not per customer or appliance.
- Field-built racks often have no known full charge, which is the denominator of every leak rate.
- 85-95% LLM field accuracy is not good enough for a legal record without human review.

## Wedge to path to scale

1. **Wedge:** zero-entry 2026 back-reconciliation plus a branded compliance pack for contractors serving independents and c-stores. Free for the first site, then $99-299 per month.
2. Contractors resell an owner portal ($25-75 per site per month). Land one 20-200 store regional chain that is not on Trakref.
3. Expand to comfort cooling (RTUs and chillers of 15 lb or more) through the same contractors.
4. Ingest controller and ALD alarms (Copeland, Danfoss), and build "next to breach" models from leak history.
5. Refrigerant lifecycle: a take rate on recovered and reclaimed refrigerant brokerage. This is the only venture-scale story, and it is a different business with its own logistics.

## Steelman summary (about 52)

- EPA's May 2026 reconsideration hit Technology Transitions (equipment design), not the ER&R leak-repair and records duties. The rule has survived so far.
- The founder's AI-tutor skill, turning messy text into structured records, maps directly onto the work.
- No sensors or credentials are needed, LLM costs are cents per ticket, and contractors pay by card.
- Contractors are both the channel and the data network effect.
- Insurers, landlords and ESG teams may ask for records even if EPA does not enforce.

## Skeptic summary (about 35-36)

- ServiceTitan and ServiceChannel already ship refrigerant tracking, so the messy-data problem is shrinking at its source.
- Back-reconciliation is one-off project revenue.
- Incentives point the wrong way: contractors do not want to document their own unlogged adds or venting, and grocers are lobbying, through FMI and NGA petitions, to align with the 50 lb Part 82 threshold.
- If that petition is granted, the "new population" thesis disappears.
- Accuracy requirements plus liability turn the product into a reviewed service.
- Realistic GTM is 6-9 months to reach $2-6k MRR.

## What's good

- A real federal rule, already in force, with a clear calculation and deadline structure.
- Software-shaped with 90%+ gross margins, and buildable in a weekend by this founder.
- The extraction and entity-resolution skills match the founder's applied-AI background.
- The contractor channel has one-to-many leverage over store sites.
- A deterministic, versioned rules engine absorbs rule changes cheaply.

## What's bad

- Regulatory: the demand driver is under active petition by the buyers' own trade groups, and enforcement is likely light.
- The upstream FSM tool already captures structured refrigerant data. The AI edge holds only for paper shops, which are the least likely to pay.
- The headline per-customer reconciliation does not work with bulk cylinder purchasing.
- The full-charge denominator is often unknowable, and accuracy and liability push toward human QA.
- A traditional, network-driven channel in which the founder has no credibility.
- A small core market. Venture scale depends on a separate brokerage business.

## Build plan (from the build-plan agent)

- **Ingest:** a Postmark inbound address per contractor, drag and drop, and ServiceTitan/BuildOps CSV import into S3 (with SHA dedupe).
- **Extract:** Textract OCR, then Claude structured output into ServiceEvent, PurchaseEvent and Nameplate records.
- **Resolve:** fuzzy matching of events to appliances, with a confidence-gated review queue.
- **Rules:** a deterministic, versioned engine for both leak-rate methods, sector thresholds, and the repair, verification and chronic-leaker clocks.
- **Output:** a branded PDF compliance pack, a dashboard and deadline emails.
- **Stack:** Next.js, Supabase (row-level security), Inngest, Stripe, Vercel. Under $500 per month to run.
- **Weekends:** W1 extraction plus an eval harness on 100-200 hand-labeled tickets. W2 register, resolution and rules unit tests. W3 invoice parser and pack. W4 billing and 3 free pilot contractors.
- **Hardest risk:** appliance matching ("WIC #2" = "Box 2") and unknown full charge.

## Bootstrap-to-raise plan (months 0-12)

- **Months 0-1:** run the kill test below. If it passes, sign 3 free pilots in exchange for 2026 ticket data.
- **Months 2-6:** 20-50 paying contractors through RSES chapters, distributor counters, LinkedIn and pain-specific SEO ("missed leak rate calc"). Target $5-10k MRR.
- **Months 6-12:** convert store customers to the owner portal, land one regional chain, start comfort-cooling pilots. Raise a seed only if there are 50+ contractors, net revenue retention above 100%, and the 15 lb threshold has been formally retained for retail food.

## Weekend prototype

An upload page for ticket PDFs and photos plus a ServiceTitan CSV import. Steps:
1. An LLM extracts appliance hint, refrigerant, lbs added and date.
2. A per-appliance full-charge register is maintained, with manual entry when the charge is unknown.
3. EPA's annualizing formula is computed for each add.
4. Appliances over threshold are flagged with their repair-by and verification dates.
5. A one-page PDF pack is exported.

Measure field accuracy (target 95% or higher), appliance-match accuracy (target 90% or higher) and the share of appliances with a knowable full charge.

## Kill criteria

- In 2 weeks of calls, fewer than 5 of 15 refrigeration contractors say both that a customer has asked for Part 84 records in 2026 and that they would pay to compute leak rates on data they already log.
- Fewer than 3 of 10 independent grocers report anyone asking for 2026 leak records.
- Under 60% of pilot appliances have a recoverable full charge.
- Field accuracy on lbs and refrigerant stays below 95%, or more than 10% of events need human review.
- EPA proposes aligning the HFC leak-repair threshold with 50 lb, or exempting retail food.

## Sources

- EPA leak-repair fact sheet (Jan 2026): https://www.epa.gov/system/files/documents/2026-01/er-r-fact-sheet-leak-repair-2026-01-13_1.pdf
- EPA ER&R fact sheet: https://www.epa.gov/system/files/documents/2024-09/err-fact-sheet.pdf
- NGA petition: https://www.epa.gov/system/files/documents/2026-01/national-grocers-association-nga.pdf
- FMI petition: https://www.epa.gov/system/files/documents/2026-01/the-food-industry-association-fmi.pdf
- HK Law on the Technology Transitions reconsideration: https://www.hklaw.com/en/insights/publications/2026/05/epa-finalizes-changes-to-technology-transitions-provisions
- Hunton status update: https://www.hunton.com/the-nickel-report/status-update-on-the-aim-act-and-epas-hfc-refrigerant-regulations
- ServiceMag on the R-410A rollback: https://servicemag.org/news/epa-r410a-ban-rollback-aim-act
- Blynk on the 2026 leak-repair rules: https://blynk.io/blog/epas-2026-refrigerant-leak-repair-rules-what-they-require-and-where-monitoring-fits
- ServiceTitan refrigerant tracking: https://help.servicetitan.com/docs/set-up-and-use-refrigerant-tracking-for-epa-recordkeeping
- ServiceChannel refrigerant tracking: https://servicechannel.com/products/refrigerant-tracking/
- RefriComply: https://www.refricomply.com/
- Refritrak on the 15 lb threshold: https://www.refritrak.com/en/blog/2026-epa-regulations-15-lb-threshold
- Fexa AIM Act guide: https://fexa.io/guide/epa-aim-act-guide/
- Axiom Cloud on mandatory retirements: https://axiomcloud.ai/blog/2025/10/20/mandatory-retirements
- Lunds & Byerlys on Facilio: https://supermarketnews.com/grocery-technology/lunds-byerlys-digitizes-refrigeration-compliance-management
- FMI supermarket facts: https://www.fmi.org/our-research/supermarket-facts
- Copeland on 10 years of GreenChill data: https://e360blog.copeland.com/10-takeaways-from-10-years-of-greenchill-data/
- HVAC School on the 15 lb threshold: https://www.hvacrschool.com/the-epas-15-pound-refrigerant-threshold-in-2026/
- Grocery Dive on grocers and EPA deregulation: https://www.grocerydive.com/news/epa-deregulation-push-grocers-refrigerant-questions/742577/
- J.J. Keller on revised HFC use restrictions: https://jjkellercompliancenetwork.com/news/final-rule-revises-hfc-use-restrictions-and-compliance-timelines-for-specific-subsectors
- Local: /home/user/GmailCleanupExtension/research/ai-opportunities/data/yc-w25-f26.csv (Norra, Operon, Talos)
- Local: /home/user/GmailCleanupExtension/research/ai-opportunities/FOUNDER-FIT.md (calibration)
