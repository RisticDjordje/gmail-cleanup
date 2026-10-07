# RegistryPilot: CPSC certificate autopilot for small consumer brands

**One-liner:** A self-serve, lab-agnostic app that scans a Shopify or Amazon catalog, works out which CPSC rules apply to each SKU, checks whatever test-report PDFs the factory sent, and produces a certificate and a Registry filing that stay in sync with the catalog and with shipments. Over time it grows into a multi-regulation compliance hub for SMB brands.

**Score: 61/100. Verdict: promising with a pivot.** This is the cleanest bootstrap-to-raise shape in the pool for this founder. It needs no credentials, the buyer is easy to find, and it can earn cash in month one. But "file my certificate" is being commoditized, and whether enforcement hurts is unproven. The pivot: lead with **report verification and gap-finding**, not filing. Trigger on **Amazon listing removals and the new international-mail and FTZ phases**, not on CBP holds alone. Run a two-week paid pre-sale test before writing much code.

Calibration: the base dossier scored this 62, the steelman 69 and the skeptics 57 and 58-62. On this scale, 54 was the best idea under the old generic profile and 70+ means genuinely compelling.

## Rubric (this founder)

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 6 | Multimodal applicability with abstention, messy-PDF document AI, detection of reused reports and a SKU-to-certificate-to-entry graph are real engineering. But an LLM plus the CFR text gets about 80% of the way, so the edge depends on data and execution. |
| no_domain_required | 9 | The importer certifies, so no license is needed. The rules are public (eCFR, CPSC guidance, the accepted-lab list). A paid advisor covers the edge cases. |
| bootstrap_to_raise | 7 | $199-499 packs plus a findable buyer make revenue in 30-60 days plausible. Lower than the steelman's 9 because early packs carry human review and the demand spike has passed. |
| product_not_services | 7 | Software at the core, with 80%+ margins possible once review falls below 10% of SKUs. Early on it is part concierge. |
| market_size | 5 | A CPSC-only SMB tool tops out around $20-50M ARR. Getting to $100M+ needs the multi-regulation hub plus a testing-marketplace take. |
| whitespace | 4 | Labs (Intertek, Bureau Veritas, QIMA, Eurofins) sell eFiling. Complir (YC, $11M General Catalyst), Certivo and Certo are funded. Comply PRO+ and an Apify gap-checker already sit in the SMB tier. Only lab-agnostic, self-serve for sub-$50M brands is open. |
| gtm_without_network | 8 | Brands can be scraped from Shopify and Amazon by category, offered a free catalog-scan lead magnet, listed in the Shopify App Store, and found through mandate search terms. The hottest buyers (just held) are hidden behind forwarders. |

## Thesis

Since 2026-07-08, every regulated import must carry certificate data at entry, regardless of shipment size. Each SKU needs about 16 fields, and CPSC is targeting about 600 HTS codes first. International mail follows from 2026-10-22 (one source, Eurofins) and FTZ entries from 2027-01-08. Each phase pulls in more small brands that buy from Alibaba and 1688 factories. These brands use 5-20 labs, run on Shopify, Amazon or TikTok Shop, and have no compliance person. Labs serve only their own reports, and the funded AI-natives sell to enterprises.

The job nobody owns is turning a messy SKU plus whatever PDF the factory sent into a correct, defensible certificate that stays in sync. That job is an ML and data problem: (a) applicability, (b) report verification and (c) state sync. Win the long tail self-serve, then expand into GPSR, Prop 65, PFAS and EPR, plus a testing marketplace.

## Workflow today

1. A broker or 3PL asks for certificate data or a Registry ID.
2. The founder Googles "CPSC eFiling" and guesses whether the product is a children's product and which rules apply (lead, phthalates, small parts, F963, 16 CFR 1610...).
3. They email the factory for a report. It arrives in Chinese or English and is sometimes issued to another client or SKU, or by a lab not accepted for that scope.
4. They hand-type a GCC or CPC in Word, then re-key 16 fields per SKU into the Registry.
5. Every new variant, factory or PO starts the cycle again. Amazon separately demands CPC uploads in Compliance Documents, or it removes the listing.

The paid alternatives are lab portals, per-SKU consultants, Global-e (for its own merchants only) and Comply PRO+.

## TAM (estimates)

- **Core CPSC product:** 40-80k SMB importers x $1.5-3k ACV, about $60-240M SAM.
- **Testing marketplace:** a 10-15% take on $3-15k a year of lab spend, about $20-100M more.
- **Multi-regulation hub:** ACV of $4-8k, about $200-500M SAM.
- No official count of importers was found, so all of these figures are unverified.

## Competitors

| Player | What it does | Scale |
|---|---|---|
| CPSC Product Registry | Free filing tool with no intelligence | Government |
| Shopify CPSC fields | Stores the data; the merchant supplies it | Platform (the biggest platform risk) |
| Intertek InterLink 2.0 | eFiling, best on its own reports; in the CPSC beta | Public lab |
| Bureau Veritas OneSource Connect | Supplier-led submission; contests the report network | Public lab |
| QIMA | Collection Editor service for sourcing programs | Large private |
| Eurofins | eFiling service plus a digital tool | Public lab |
| Complir | AI compliance agents; EU enterprise retail | YC, $11M seed (General Catalyst) |
| Certivo | Supply-chain compliance agent; manufacturing | $4M seed |
| Certo | Beauty and CPG compliance | $4M seed (unverified) |
| Comply PRO+ | Amazon-seller "virtual compliance manager" plus eFile SaaS | Unknown |
| Apify "CPSC Certificate Gap Checker" | Commodity pre-check | Hobbyist |
| Global-e, Zonos, Easyship | Fill or collect fields inside their own flows | Venture-backed or public |

## Why tech is the moat (honestly: moderate)

1. **Applicability engine.** Calibrated, cited classification across 60+ rules, with abstention. The metric that counts is **recall on children's products**, not overall accuracy.
2. **Report verification.** Parsing hundreds of lab templates, mapping clauses to rules, matching each lab's accepted scope, and detecting a report issued to a different client, SKU, color or material. Labs have no reason to build this for other labs' reports.
3. **State sync.** A versioned SKU, variant, factory, PO, certificate and entry graph with re-certification triggers. Hard to leave once embedded.
4. **Cross-customer report graph.** Once a factory report is verified, it is pre-verified for the next brand buying from that factory. Fingerprinting exposes reuse. Only a neutral aggregator sees all of it.

Model IP is not a moat. Labeled decisions, the verified report graph and workflow embedding are.

## Wedge → path to scale

**Wedge:** "My broker or Amazon needs a certificate for this SKU." Free catalog scan, then a PDF coverage diff, then a $199-499 broker-ready pack, then $49-399/mo continuous sync. Small forwarders get a white-label intake link.

**Scale:** Shopify App Store plus Amazon SP-API, then lab referral rev-share, then the multi-regulation hub (GPSR, Prop 65, PFAS, EPR, Walmart/Target/Faire item setup), then a factory portal and a per-certificate broker API, then China-based nonresident sellers. The realistic outcome is a $30-80M ARR hub that a lab, a trade-compliance platform or a Shopify-ecosystem player would buy.

## Steelman summary (69)

The mandate comes in waves (mail, FTZ), so demand recurs. The hard parts are AI and data problems this founder can solve, and filing needs no license. Cash can come in week one. Investors are actively funding AI compliance. Labs only parse their own reports, so neutrality is the product. Analogs: TaxJar (mandate-driven, self-serve, sold to Stripe) and Vanta (one framework growing into a hub).

## Skeptic summary (57-60)

Complir is YC plus General Catalyst and owns the "AI compliance agent" story, so moving into the US is localization, not a pivot. The panic window closed in July. No hold or refusal data was found, so the pain may be soft. New-domain SEO takes 4-9 months. Founder-QA'd 24-hour packs are consulting, and 24-hour turnaround while at Netflix is not credible. Without a paid expert set (about $20-50k), applicability has no ground truth. False "covered" verdicts carry commercial liability, and E&O may be hard to buy. Shopify could ship "suggested rules" and wipe out the free-scan wedge.

## What's good

- No credentials or insider network needed. A live federal mandate makes the job recurring.
- The buyer can be found by scraping. Self-serve pricing allows revenue in month one.
- Report verification is a real AI and data problem that incumbents are not motivated to solve.
- A "falling human-review rate" chart makes a clear investor story in a category investors fund.
- Shopify, Amazon and broker integrations create switching costs.

## What's bad

- Whitespace is thin and shrinking. Funded entrants are 12-18 months from the US SMB tier.
- Enforcement intensity is unverified. Without holds, it is a vitamin.
- The CPSC-only ceiling is about $20-50M ARR, so the hub is required for venture scale.
- SMB churn and low ACV mean 1,000-2,000 brands are needed for about $1.5-2M ARR.
- Liability for a missed children's-product call lands on the founder's reputation and churn.
- Moonlighting at Netflix: check the IP and outside-work policy, and keep turnaround SLAs realistic (48-72h).

## Build plan

**Architecture:** Shopify `products.json` and Admin API ingestion, plus Amazon SP-API and PDF upload or forwarding. A vision LLM extracts report contents into a strict Zod schema. A RAG corpus covers eCFR 16 CFR, F963 headings, age-grading guidance and the accepted-lab scopes (scraped nightly). The LLM proposes rules, a **deterministic rules layer** decides, and low-confidence cases abstain and go to a review queue. Deterministic checks cover coverage diff, lab scope, date logic, fuzzy client and SKU matching, and perceptual and text-hash fingerprints. Output: a GCC/CPC PDF, a Registry CSV or Collection Editor filing, and the ID pushed back to Shopify. Everything is versioned with an audit trail.

**Stack:** TypeScript, Next.js, Shopify Remix template, Postgres (Neon) plus pgvector, Inngest, R2, one swappable frontier multimodal model, Stripe, PostHog, Promptfoo evals in CI.

**Weekends 1-4:**
1. Landing page with a "$299 broker-ready certificate pack" offer and a concierge backend. Collect 60-100 real reports and label 100 SKUs; pay a former lab specialist about $500 to adjudicate.
2. Free store-URL scan as the lead magnet. Cold-email brands scraped from kids' and toy categories.
3. PDF coverage diff, GCC draft, Registry CSV, Stripe.
4. Reviewer UI that logs corrections. Pitch 5 small forwarders. **Gate:** 15+ paid packs or 3+ forwarders opted in.

**Data flywheel:** reviewer edits become labels, which lower the review rate. Parsed reports become templates and graph nodes, so the next brand on that factory gets pre-verification. Broker rejections and Amazon removals become outcome labels.

**Hardest risk:** false "covered" verdicts on vague, scanned reports. Target under 2%. If it stays above 5%, sell as a "gap finder plus checklist" and route anything uncertain to a human.

## Bootstrap-to-raise plan (months 0-12)

- **Month 0 (2 weeks, about $1k):** 200 cold emails plus a $299 pre-sale; ask 5 forwarders and brokers for real hold counts and Amazon removal anecdotes. Build the eval set.
- **Month 1:** Concierge packs delivered with LLM tooling. Target 10-25 paid ($3-7k). Launch SEO pages on mail, FTZ and Amazon CPC queries.
- **Month 2:** Self-serve scan, then diff, then pack. Start the $49-149/mo sync tier. Target 40 cumulative packs and 15 subscribers.
- **Month 3:** Submit the Shopify App Store listing. Get 2 forwarder intake partners. Children's recall at 98%+ on 200 SKUs. About $5k MRR.
- **Months 4-6:** Amazon SP-API Compliance Documents sync. Rev-share referrals with 2-3 CPSC-accepted labs. Review rate under 15%. Target 150 paying brands, $15-25k MRR. **Decision point:** leave Netflix if MRR is above $15k and growing 15%+ a month.
- **Months 7-9:** FTZ-phase campaign (January 2027). Add a GPSR or Prop 65 module to prove hub expansion. 3k+ reports parsed, review rate under 10%.
- **Months 10-12, the fundable milestone:** 400-600 brands, $40-60k MRR (about $0.5-0.7M ARR), net revenue retention of 100%+ from module upsell, 5k+ verified reports with measurable cross-customer reuse, marketplace GMV live, review rate under 8%. **Raise a $3-5M seed** on the "Vanta for SMB product compliance" story.

## Cofounder needed

**None to start.** The founder can build every engine. Add a **paid part-time compliance advisor** (a former lab regulatory specialist, $1-2k a month) to adjudicate evals and edge cases; this is a contractor, not a cofounder. Once there is traction (month 4-6), the most valuable addition is a **growth or commercial cofounder from the Amazon/Shopify seller-agency world** who can open forwarder, lab and agency channels. Not a regulatory insider, and not a second engineer.

## First 30 days

1. Confirm the Netflix outside-work and IP policy.
2. Build the 100-SKU and 60-report eval set with $500 of adjudication. Measure children's recall and the false "covered" rate.
3. Scrape 500 kids' and toy Shopify stores. Send 200 personalized emails with a free gap report attached.
4. Sell $299 packs and deliver in 72 hours.
5. Interview 5 forwarders and brokers about hold counts and who pays.
6. Track pack conversion, review minutes per SKU and the share of buyers triggered by Amazon versus brokers.

## Kill criteria

- Fewer than 10 paid packs from 200+ cold emails and SEO within 30 days.
- No broker or forwarder can name real CPSC holds or refusals, **and** Amazon-removal demand is weak.
- Children's-product recall below 98% or a false "covered" rate above 5% after two iterations.
- Human review stays above 20% of SKUs at month 4.
- Complir, Shopify or a lab launches free, self-serve, multi-lab verification for US SMBs before month 6.

## Sources

- [CPSC eFiling release](https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Implements-Mandatory-eFiling-for-Certificates-of-Compliance-Targeting-Dangerous-Foreign-Imports)
- [Foley](https://www.foley.com/p/102mvja/cpsc-efiling-begins-july-2026importers-of-consumer-products-are-you-ready/) · [Akin Gump](https://www.akingump.com/en/insights/alerts/cpsc-rule-mandates-efiling-of-certificates-of-compliance-for-imported-consumer-products)
- [Eurofins international-mail guidance](https://www.eurofins.com/en/consumer-product-testing/softlines-hardlines/news-articles/new-cpsc-guidance-efiling-will-be-required-for-international-mail-shipments/)
- [Shopify CPSC fields](https://help.shopify.com/en/manual/international/cpsc) · [Global-e](https://docs.global-e.com/cpsc-efiling-compliance-for-us-bound-shipments-merchant-guide) · [Easyship](https://www.easyship.com/blog/cpsc-efiling)
- [Intertek InterLink](https://intertek.com/interlink2/cpsc-efiling) · [Bureau Veritas](https://www.cps.bureauveritas.com/newsroom/bureau-veritas-new-efiling-data-capture-solution) · [QIMA](https://www.qima.com/cpsc-efiling-services) · [Eurofins digital tool](https://www.eurofins.com/en/consumer-product-testing/softlines-hardlines/regulatory-compliance/global-market-access/cpsc-efiling-digital-solution/)
- [Complir seed](https://tech.eu/2026/09/16/copenhagens-complir-raises-11m-to-tackle-product-compliance-bottlenecks/) · [Complir and YC](https://oresundstartups.com/ai-startup-automating-product-compliance-joins-y-combinator-as-regulation-hits-european-retailers/) · [Certivo](https://www.geekwire.com/2026/seattle-startup-certivo-raises-4m-to-automate-supply-chain-compliance-with-ai/) · [Certo](https://www.seedtable.com/companies/certo)
- [Comply PRO+ (BSA)](https://www.babysafetyalliance.org/events/EventDetails.aspx?id=2053577) · [Prosper Show](https://prospershow.com/news/are-you-ready-for-cpsc-efiling-on-july-8/40234/) · [Apify gap checker](https://apify.com/jadelike_zine/cpsc-certificate-gap-checker)
- [ComplianceGate](https://www.compliancegate.com/cpsc-electronic-filing/) · [beancount.io small-importer guide](https://beancount.io/blog/2026/07/10/cpsc-efiling-mandate-small-importers-guide) · [Amazon CPC guide](https://www.goatconsulting.com/amazon-policy/amazon-childrens-product-certificate-cpc)
