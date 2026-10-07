# PackFee (EPR Ledger, narrowed): AI packaging inventory and fee accuracy for packaging EPR

**One-liner:** Upload last cycle's CAA filing, your SKU list and whatever spec sheets, BOMs and photos you have. PackFee rebuilds a component-level packaging inventory with confidence scores, shows where your eco-modulated fee is wrong, and exports next cycle's report for each state (OR, CA, CO, and later MN, MD, WA, ME).

**Source playbook to target industry:** "Vanta for X" compliance autopilot. Complir (YC Sp26, "Vanta for physical products"), MarkIt (YC F25, checks formulations and packaging against local rules), Archon (YC W25, FedRAMP) and Tire Swing (YC F26, affordable-housing recertification) show that buyers pay software prices for a mandated, recurring filing when the rulebook is kept as data and the inputs are messy documents. **The target is packaging extended producer responsibility (EPR, laws that make brands pay per pound of packaging they put on the market) for food and beverage producers and regional B2B distributors.** Caveat: this sits right next to Complir's and MarkIt's product-compliance market, so it is only partly a cross-industry transfer.

## Score: 45/100. Verdict: PASS (as a primary bet)

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 6 | Reading material type from documents plays to the founder's AI skills. Estimating weight from a photo is not reliable. |
| no_domain_required | 7 | The rules are public. The decision on who counts as the obligated producer edges toward legal advice. |
| bootstrap_to_raise | 5 | Revenue clusters in one season. The first real season is spring 2027. |
| product_not_services | 5 | Weighing samples, chasing suppliers and reviewing attestations is human work. |
| market_size | 4 | About $30-40M ARR for the US mid-market at current state coverage. |
| ai_advantage_vs_competitors | 5 | Every incumbent markets "AI-native". The only real moat is a pooled component database, and late entrants start it last. |
| gtm_without_network | 5 | Deadline-driven search traffic is real, but FoodChain ID already sells into the F&B beachhead. |

How the inputs compare: the deep dive gave 47, the steelman 56, and the two skeptics 40 and 42. This sits about 10 points below RegistryPilot (55). It is a credible bootstrap niche but not a venture-scale pick for this founder.

## Thesis
EPR fees are charged per pound and vary by material ("eco-modulated"). A producer that gets a component's material or weight wrong either overpays or carries audit risk. The founder's edge would be building an accurate component inventory cheaply: photo, spec PDF or BOM line in, material class plus grams out, with a confidence score and an evidence trail, and the dollar impact shown. The mandate is live:
- About 5,700 California producers had to register by 2026-06-01 under SB 54.
- More than 2,300 producers have registered with CAA (Circular Action Alliance, the single industry-run producer organization in CA, CO, MD, MN and OR, and designated for WA).
- A federal court upheld Oregon's law in 2026.

## Workflow today
1. Work out whether you are the obligated producer and whether an exemption applies. Oregon exempts producers under $5M gross revenue.
2. Register with CAA.
3. Build a per-SKU inventory: every component (bottle, closure, label, film, case), its material category and weight, multiplied by units sold into each state.
4. File each state's report on its own calendar.
5. Repeat every cycle as rules and fees change.

The data is pulled together in spreadsheets from supplier spec sheets, co-packer BOMs and a kitchen scale. Large brands use consultancies (Anthesis built QDOBA's framework) or Assent plus Lorax EPI. rePurpose says a producer's first state takes more than 2 months by hand. One correction to the brief: Oregon's 2026 fees reportedly bill on 2024 data with no new supply report (Oregon DEQ / CAA 2026 plan amendment). The "hard calendar" can be frozen.

## TAM (bottom-up, own estimate)
| Step | Estimate |
|---|---|
| Unique obligated US producers | About 6,500-8,000 now (CA is the superset at about 5,700). About 10-12k as more states go live. |
| Mid-market, after removing the enterprise top 15-25% | About 5,000-6,500 |
| F&B plus distributor beachhead | About 2,000-3,000 accounts |
| ACV (annual contract value) | $3-12k |
| US mid-market SAM | **About $30-40M ARR.** The beachhead is about $12-30M. |

The brief's $150-400M rested on an unverified 30,000-brand claim from a low-authority site. Getting to venture scale needs Canada and the EU (PPWR, the EU packaging regulation) or design-for-fee expansion.

## Competitors
| Company | Position | Scale |
|---|---|---|
| FoodChain ID + Unpac | Exclusive EPR alliance for F&B brands. Claims "one-click multi-jurisdiction" reporting and "20%+ fee reduction". | Established F&B compliance vendor with an installed base |
| Packledger | Free exposure check and fee estimates for CA, OR and CO. Mid-market. | Unknown |
| rePurpose Global | EPR software plus services. Claims 2+ months cut to about 2 weeks. | Established |
| Packgine | AI packaging-compliance SaaS (EPR, PPWR) | About $14.6M raised |
| Assent + Lorax EPI | "AI-native" EPR module for enterprise | Enterprise |
| Specright | Owns packaging spec data and has an EPR module | Venture-backed |
| GreenDot / osapiens | AI EPR software, launched June 2026, EU-first | Large |
| CAA portal | Free and manual. Could add bulk upload. | Single PRO |
| Complir, MarkIt (YC) | One module away from this | About $11M (Complir) |

## How AI wins (if it does)
- **Multimodal extraction:** document or photo in, material class out, which models already do well. Grams come from a spec sheet or a measurement, and AI validates them. Calibrated confidence routes the unsure components to "weigh this sample".
- **Rules-as-code per state and cycle:** one inventory produces per-state deltas, with an explainable diff whenever a rule changes.
- **A pooled component graph:** the same closures, films and cases recur across brands, so accuracy compounds with every customer.
- **Speed:** a new state ships in weeks.

The weakness: the rules are public, and "AI" is now table stakes in this category.

## Wedge, then path to scale
**Wedge:** a free tool that answers "Am I the producer? Am I exempt?", plus a fee estimator, leading to a $1.5-3k paid fee check against last cycle's filing, leading to a $250-1,000/mo subscription. The best niche is regional distributors in Oregon that may not know they are obligated. Note that the claim Oregon counts B2B and transport packaging is unverified.

**Path to scale:**
1. Add states as rules-as-code deltas, so expansion shows up as NRR (net revenue retention).
2. Supplier-published "EPR component passports" (material and weight data a converter publishes once for every brand that buys the part).
3. Design-for-fee simulation for packaging and R&D teams.
4. Canada, then the EU.
5. Adjacent mandates on the same data: PFAS in packaging, recycled-content minimums.

## Steelman (56)
The mandate is live and the work can't be avoided. The hard part is perception, which is the founder's skill set, not law. The incumbents are built for enterprises, consultancies sell hours, and a self-serve tool that infers about 80% of the inventory is a real wedge. Fee checks have an ROI the customer can check, and 100-200 accounts gets to $300k-1M ARR with no capital. The founder can prototype it in a weekend.

## Skeptics (40 / 42)
- **Competition and GTM:** FoodChain ID and Unpac already pitch this exact product to the exact beachhead and have the distribution. EPR is a fee producers report about themselves, not a gate that blocks a deal, so a savings pitch from a vendor nobody knows is a weak first sale. Without a network, the realistic route is channels (co-packers, CPAs), and those need relationships.
- **Tech and regulatory:** weight from a photo is unreliable. A 20% gram error means 20% of that line's fee is wrong, and the producer signs the report. Typical mid-market fees are unverified, so a $2k check may cost as much as it saves. Telling a company whether it is the producer edges toward legal advice. Outcome-based pricing rewards under-reporting. Human QA eats margin at a $3-12k ACV.

## What's good
- A live, recurring mandate with a hard and growing state list
- No credentials needed; the rulebook is public
- Material classification fits the founder's applied-AI skills
- Cheap to prototype and cheap to run (LLM cost about $10-40 per fee check)
- Rules-as-code expansion per state gives clean NRR

## What's bad
- A small US market of about $30-40M
- The F&B beachhead is already claimed by FoodChain ID + Unpac
- Several funded direct competitors, all marketing "AI"
- Weight estimation, the core AI promise, is weak; the product drifts toward workflow and services
- One selling season a year; the CAA cycle can be frozen
- The RegistryPilot synergy is mostly false: the $5M exemption excludes small Shopify and Amazon sellers

## Build plan
- **Stack:** Next.js/TS, Postgres plus pgvector, a job queue, a vision LLM behind a schema-validated JSON adapter (every value cites its source region), versioned YAML/TS rules per state and cycle with golden-file tests, Stripe. Fixed cost under $100/mo.
- **Weekend 1:** de-risk extraction. Encode the OR and CA taxonomies and fees, and ship the exemption decision tree.
- **Weekend 2:** upload, extraction and an editable inventory grid.
- **Weekend 3:** fee calculator plus a variance PDF, run on 2-3 real filings.
- **Weekend 4:** QA queue, checkout, CAA-format export, outbound to Oregon registrants.

## Bootstrap-to-raise plan (months 0-12)
- **Months 0-1:** get 3 real past CAA submissions or invoices and run the gram-accuracy test. Go or no-go.
- **Months 1-3:** 5 free fee checks in exchange for data and case studies, focused on OR distributors and F&B producers. SEO pages per state.
- **Months 3-6 (off-season):** sell annual subscriptions at a pre-season discount, and test a co-packer or CPA channel partner.
- **Months 6-10 (Jan-May season):** target 40-80 paid fee checks, converting at 50% or better to subscription.
- **Months 10-12:** at $200k+ ARR, show a multi-state add-on and a fee-variance accuracy metric, then raise a seed on the component graph and EU expansion. Otherwise run it as a lifestyle business or fold it into another product.

## Weekend prototype
Buy 30 F&B packaging items and weigh every component on a 0.1 g scale. Then run photos and spec sheets through a vision model to get material class and grams, measure material accuracy and gram MAPE (mean absolute percentage error), and output an OR vs CO vs CA material table with fees from published CAA schedules.

## Kill criteria
- The median mid-market CAA fee is below about $10k, or reclassification can dispute less than 5% of it (the skeptic's test asks for a $25k median)
- Material-class accuracy is below 90%, or gram MAPE is above 20% with no spec or measurement fallback that customers accept
- Fewer than 3 of 15 Oregon or California producers or distributors will pay for a fee check in the first season
- FoodChain ID + Unpac, CAA's portal or Complir ships self-serve mid-market inventory inference at or below PackFee's price
- More than 3 hours of human QA per account after 20 customers

## Sources
- packaginglaw.com (CA SB 54, about 5,700 producers, June 1 deadline); venable.com; klgates.com; wga.com
- Oregon DEQ CAA 2025 Annual Report and OLIS committee doc (2,300+ registrants); DEQ RMA Exemptions FAQ ($5M); DEQ producers page and CAA OR Program Plan 2026 amendment (2026 billing on 2024 data)
- toyassociation.org (Oregon law upheld, headline only); packagingdive.com and rev-log.com (CAA as PRO)
- packaginginsights.com, packagingstrategies.com, labelsandlabeling.com (FoodChain ID + Unpac)
- assent.com (?p=97654, ?p=110073); sdcexec.com (Assent + Lorax EPI); packaging-gateway.com (GreenDot/osapiens)
- repurpose.global; pickyourapp.com (Packledger); caplight.com (Packgine); specright.com; anthesisgroup.com (QDOBA)
- wineinstitute.org (Oregon eco-modulation: 60 categories in 8 material classes)
- liveinthefuture.org (low authority: 30k-brand claim, CO $1.60/lb)
- Local: `/home/user/GmailCleanupExtension/research/ai-opportunities/data/yc-w25-f26.csv`, `/home/user/GmailCleanupExtension/research/ai-opportunities/FOUNDER-FIT.md`
