# StubLedger: an AI auditor for royalty check stubs

**One-liner:** Upload or forward every operator's revenue check stub and JIB. AI turns them into one ledger, checks each line against the division-order decimal, production and benchmarks, and explains underpayments, missing months and unusual deductions in plain English.

**Source playbook → target industry:** inbound document to system of record. Clerked (F25, AP), IronLedger.ai (S25, real-estate AP), Comena (S25, order entry) and Hemut (Sp25, trucking back office) show that agents reading semi-structured PDFs into a ledger can sell. **Target:** US oil and gas mineral/royalty owners and non-operated working-interest owners.

## Score: 45/100. Verdict: promising only with a pivot

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 6 | Extraction is commodity. The edge is reconciliation, cross-owner benchmarks and explanation |
| no_domain_required | 6 | Prototype needs none. Lease and deduction rules need an O&G accountant advisor |
| bootstrap_to_raise | 5 | Cheap to build, but consumer revenue is thin and seasonal |
| product_not_services | 7 | Software, unless it drifts into contingency audits |
| market_size | 4 | Software TAM is about $100-150M (estimate) |
| ai_advantage_vs_competitors | 5 | A real gap between enterprise software, $99 dashboards and audit services. Enverus controls distribution |
| gtm_without_network | 5 | SEO and forums reach owners. Funds buy on trust |

Calibration: well below RegistryPilot (55). The panel ranged from 40 (competition/GTM skeptic) to 57 (steelman), with a 47 base case. **Verdict:** the owner-side "stub explainer" is not worth pursuing on its own. It is worth a 2-week test only as a path to (a) acquisition-diligence stub ingestion for mineral buyers and (b) non-op JIB review. Neither has been checked with customers.

## Thesis

The transfer works mechanically:
- Stubs arrive in operator-specific layouts.
- There is master data to match against: the owner decimal, well/lease IDs and state production.
- There is checkable arithmetic: volume × price × decimal − taxes − deductions = net.

The premise that the industry is "unreached" is wrong. YC already backed MineralSoft, which verified decimals and deductions against stub data. It raised about $5.59M and was bought by Drillinginfo (now Enverus) in 2019 (snippet). The AI-native case is narrower: one self-serve product that reads any stub without setup, audits it against the owner's lease and against co-owners on the same well, and explains the result. Incumbents split that job between enterprise software, cheap dashboards and human auditors. It becomes defensible only if the cross-owner, same-well dataset compounds.

## Workflow today

- Owners get statements through operator portals (Enverus EnergyLink hosts revenue statements and JIBs, with Excel export) or by mail and PDF.
- Some key them into spreadsheets or use MineralSoft or MineralTracker.
- Serious owners and institutions pay audit services (Valor, RoyaltyMetrix) to review stubs line by line.
- At tax time, owners reconcile 1099s and take depletion.
- Mineral buyers turn 12-36 months of seller stubs into cash-flow history for each deal. This step was reasoned, not verified.
- Not verified: the share of stubs still on paper, and how non-op owners review JIBs.

## TAM (estimate)

The one anchor: NARO says there are 8-12M US royalty owners. Everything else is an assumption.

| Segment | Count | Annual price | Annual TAM |
|---|---|---|---|
| Prosumer owners | 50-150k serious owners | $300-1.2k/yr | $15-180M theoretical; realistic SAM about $20-50M |
| Mineral funds and managers | 300-1,000 | $12-60k/yr | $4-60M |
| O&G CPA firms | 1-3k | $3-15k/yr | $3-45M |
| Non-op working-interest investors | 2-5k | $5-30k/yr | $10-150M |

Central software TAM is about $100-150M. The MineralSoft exit size suggests a niche business, not venture scale, unless the non-op JIB segment proves large.

## Competitors

| Company | What it does | Scale |
|---|---|---|
| Enverus MineralSoft | Owner-side decimal and deduction verification for institutions | About $5.59M raised (YC among investors); acquired 2019; "$1,000 per feature" |
| Enverus EnergyLink | Operator-paid portal for stubs and JIBs, with Excel export; marketed as "backed by AI" | Part of Enverus |
| MineralTracker | Prosumer dashboard and automated revenue audit | Free up to 50 wells; $99/mo Pro |
| Valor, RoyaltyMetrix | Stub-by-stub audit services | Valor says $32M+ returned to owners |
| Retab, LlamaIndex | Horizontal check-stub and royalty OCR | Retab claims >99% accuracy |
| M1neral | AI for mineral acquisition workflow | $1.6M pre-seed |
| PakEnergy, Quorum, W Energy | Operator-side accounting and JIB | Not searched |

Risk that the YC source companies expand into this space is low.

## How AI wins

1. Zero-setup reading of any layout, including paper photos and small operators that are not on EnergyLink.
2. A deterministic reconciliation engine plus joins to state production data (TX RRC, OK OCC) and EIA prices. The LLM explains computed flags and never does the arithmetic.
3. Lease-aware rules. An LLM compiles deduction clauses into checks that cite their evidence.
4. A cross-owner benchmark graph by well and month, which single-owner tools and operator-paid portals cannot or will not build.
5. Explanations heirs can understand, which suits the founder's B2C strength.

Caveat: co-owner differences are partly real lease differences, so the graph only produces signal once lease parsing works.

## Wedge → path to scale

1. A free stub explainer with SEO pages per operator, to build traffic and the template library.
2. Monitoring plus a year-end tax pack at $15-49/mo.
3. **Diligence ingestion** for mineral buyers: a stub packet becomes a well-by-month workbook. Priced at $500-2,500 per packet (assumption).
4. **Non-op JIB review**: AFE vs actuals, duplicate charges, COPAS overhead, at $5-30k/yr. No AI-native competitor surfaced, possibly because of a search gap.
5. Sell the cross-owner benchmark data to funds. The likely exit is to Enverus, PakEnergy or a mineral platform.

## Steelman (57)

MineralSoft proves people will pay for this and that a strategic buyer will acquire it. It was built before vision-language models, so an AI rebuild can sell the same job self-serve at about 1/20th the price. Enverus has a conflict of interest: operators pay for EnergyLink and would not welcome an owner-side underpayment detector. The skills that matter here are product, explanation and data, which fit this founder. The downside case is a profitable niche or a strategic exit, which is acceptable for a bootstrapper. Two cheap tests could push the score to 65+.

## Skeptic summary (40 and 44)

- Enverus controls distribution, and extraction is a weekend clone.
- A royalty owner receives a few stubs a month and has no labor to save. The only value is recovering underpayments, which pulls the product toward legal interpretation and contingency fees.
- Funds build in-house; a Toptal case study shows one mineral rights firm built its own AI extraction tool.
- With a low underpayment base rate, false-positive flags will destroy trust.
- Ground truth (the lease and division order) is often missing.
- There is unauthorized-practice-of-law exposure, and stubs and 1099s carry SSNs/TINs.
- Texas mandates stub fields, so a general chatbot can already give a passable "explain my stub".
- Twenty consumers is about $580 MRR, which no one can raise on.

## What's good

- The mechanism is clean: documents, master data, checkable arithmetic. Inference costs pennies per stub.
- The founder can build the prototype from public stubs with no credentials.
- The gap in the market (enterprise, $99 dashboard, human audit) is real.
- The diligence and JIB wedges are B2B, per-deal and high willingness-to-pay.
- There is a precedent exit path.

## What's bad

- YC was already here, and the comparable exited small.
- MineralTracker owns the prosumer price point.
- Enverus owns the stub rail.
- Extraction is commoditized.
- Consumer willingness to pay is low and seasonal.
- Legal and PII liability.
- The data moat needs basin density the founder cannot afford to buy.

## Build plan

- **Stack:** Next.js/TS, Supabase (row-level security), Inngest, a cheap vision model with a frontier fallback when confidence is low, Stripe, PostHog. Infrastructure costs about $50-150/mo.
- **Pipeline:** mask SSNs on arrival → text-layer parse or VLM to strict JSON → TypeScript reconciliation rules → join to RRC production and EIA prices → LLM explanation → Postgres keyed by operator, well and month.
- **W1:** 40-60 stubs from 10+ operators, 15 hand-labeled, an evaluation harness.
- **W2:** reconciliation engine, RRC join, correction UI that saves fixes as templates.
- **W3:** public explainer and operator SEO pages.
- **W4:** diligence-packet mode, and demos to 20 buyers.
- **Cost:** a 100-page packet is about $2-8.

## Bootstrap-to-raise plan (months 0-12)

- **Months 0-1:** prototype plus 10 buyer and non-op discovery calls before building any consumer polish. Recruit an O&G CPA advisor on equity.
- **Months 1-3:** launch the explainer and forum presence. Targets: 1-3k uploads, 100-300 paying owners. Run 3-5 paid diligence pilots.
- **Months 3-6:** if 2 or more funds pay, productize diligence ingestion at $500-5k/mo. Start a JIB-review MVP with 3 non-op design partners.
- **Months 6-12:** reach $15-30k MRR mostly from B2B, plus a well-level benchmark dataset. Raise a seed on fund contracts and JIB traction. If B2B stalls, run it as a small cash-flow business or sell it.

## Weekend prototype

Upload page → VLM extraction to JSON for 20-30 public sample stubs → normalized ledger → decimal check against a user-entered division order, and deductions as a % of gross → TX RRC production lookup for missing months → plain-English summary → CSV/QuickBooks export. Measure the line reconciliation rate.

## Kill criteria

- Fewer than 75% of extracted lines reconcile within $0.05 of net without per-operator templates, and the EnergyLink Excel pivot does not rescue it.
- Flag precision is below 80% against an O&G accountant's review of 200 real stubs.
- Fewer than 2 of 20 mineral buyers agree to a paid diligence pilot within 60 days.
- Five non-op operator interviews show JIB review is already solved, or that they will not pay $5k+/yr.
- Fewer than 50 paying owners after 3 months of SEO and forum effort.

## Sources

- enverus.com/segments/mineralsoft; enverus.com/products/mineralsoft; Capterra and SoftwareAdvice MineralSoft profiles
- crunchbase.com/organization/mineralsoft; PR Newswire: Drillinginfo acquires MineralSoft (2019)
- enverus.com/business-automation/jva-mineral-management/energylink; equinor.com US owner relations
- mineraltracker.com/plans-pricing; mineralrightsforum.com/t/software-to-help-track-royalty-and-mineral-interests/23161
- onevalor.com royalty management and royalty deductions; royaltymetrix.com
- retab.com/solutions/industries/oil-and-gas; llamaindex.ai/services/royalty-statement-ocr; rationalgo.ai Texas royalty tracker template
- PR Newswire: M1neral $1.6M pre-seed; gust.com/companies/titleflow-llc; Toptal mineral-rights AI extraction case study
- NARO letters (naturalresources.house.gov) on 8-12M royalty owners
- capitol.texas.gov HB 129 (85R) analysis and text; Babst Calland PIOGA newsletter, Nov 2022
- enverus.com/glossary/division-order; pakenergy.com JIB best practices; mindbridge.ai JIB
- data/yc-w25-f26.csv (Clerked, IronLedger.ai, Comena, Hemut)
