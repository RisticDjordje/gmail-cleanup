# GapList Zero: AI records sprints for pipeline MAOP reconfirmation

**One-liner:** AI searches an operator's existing scanned records (mill test reports, pressure-test charts, job folders, ILI tallies) to resolve the "non-TVC" attributes on its 49 CFR 192.624 gap list, so segments come off the pressure-test or replacement schedule.

> **Research caveat:** This run had no live verification. The shared WebSearch budget was used up, and the proxy blocked fetches from eCFR, the Federal Register, PHMSA and NTSB. The deep dive, all three red-team critiques and this verdict therefore rest on training knowledge through about mid-2026. Treat every regulatory date, CFR detail and funding figure as "verify before acting."

## Verdict: PASS on the backlog version. The forward-looking "Born-TVC" pivot deserves its own scout.

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 3 | Honest ceiling for outcome value is about $15-75M/yr across about 100-150 accounts |
| Pain intensity | 5 | Tests and outages are expensive, but most operators already chose a path in their July 2021 plans |
| Whitespace | 6 | No AI-native startup focused on TVC records is known (not live-checked) |
| AI leverage | 6 | Extraction works well, but humans still have to verify every attribute |
| GTM feasibility | 2 | 12-18 month procurement cycles against a July 2028 milestone, and incumbents hold the MSAs |
| Defensibility | 3 | Deploying in each customer's own cloud means no data pools across customers; the rules engine is easy to copy |
| Founder fit | 2 | Needs an ex-operator MAOP lead, plus PE licensure, E&O insurance and TSA/CEII clearance |
| **Overall** | **30 / 100** | All three skeptics said "kill" and their arguments reinforce each other |

## Thesis (revised)
The original pitch was "records found = $0.5-3M tests avoided." It fails for three reasons:
1. **Much of the list can't be fixed with paper.** Under 192.624(a)(2), grandfathered 192.619(c) pipe is on the list whether or not records exist.
2. **What's left has already been searched.** The (a)(1) residual survived intensive searches in 2011-2021, so it is adversely selected toward records that don't exist.
3. **The real counterfactual is cheap.** For many segments the alternative is Method 2 pressure reduction or a Method 3 ECA backed by ILI and in-situ testing, not a hydrotest.

**Strongest surviving thesis ("Born-TVC"):** sell TVC records at the moment they are created, not archaeology on old ones. An AI QA agent checks contractor turnover packages for new construction, Method 1/4 replacements, 192.607 digs and distribution main replacement. It verifies MTR heat numbers against the tally and weld map, checks that hydrotest charts meet the spec for pressure, duration, medium and signatures, flags missing signatures before retainage is released, and writes the attributes into GIS. This approach:
- rides utility capex instead of fighting it;
- has no 2035 demand cliff;
- works with modern documents that are standardized across customers, so a data moat can build;
- never asserts the truth about pipe already in the ground, which keeps liability low.

The legacy gap search becomes an upsell.

## How the work is done today
- **Who does it:** operator records and GIS teams, integrity engineers, T&M engineering firms (ENTRUST, Burns & McDonnell, Black & Veatch, TRC, G2), and offshore BPOs (Cyient, RMSI) at $15-25/hr.
- **The flow:**
  1. Pull boxes from Iron Mountain-style storage.
  2. Scan and index, usually filed by job number.
  3. Build a Pipeline Features List (PFL) with hyperlinked source documents.
  4. Two-person TVC QA.
  5. Calculate MAOP under 192.619.
  6. Produce the gap list and choose one of the six methods.
  7. Collect material-verification data at digs under 192.607.
  8. Load into GIS (UPDM/PODS) and risk models (Synergi, NIMA).
- **Costs (estimates):** PG&E's post-San Bruno validation was about $200M+. Steady-state programs run $5-20k per mile.

## TAM (estimates, unverified)
- **Covered universe:** about 60-80k miles. Of that, 6-16k may lack TVC records or be grandfathered.
- **Layer A, outcome value:** about $15-75M/yr of capturable value.
- **Layer B, records and data labor:** about $0.33-1.0B/yr, with $100-500M AI-addressable.
- **SAM:** about $100-250M/yr. **5-year SOM:** $8-30M ARR.
- Skeptics recall PHMSA's 2019 regulatory impact analysis put annualized costs for the whole rule in the **tens of millions** (verify). That is the anchor regulators and procurement will use.
- The Born-TVC pivot addresses a much larger pool: turnover QA on tens of billions of dollars a year of gas pipeline construction and replacement capex (estimate).

## Competitors
| Name | Type | Threat |
|---|---|---|
| ENTRUST Solutions (ex-EN Engineering) | Incumbent; runs MAOP and records programs | Holds the MSAs and data; can add Azure or LLM tools |
| Burns & McDonnell / Black & Veatch / Jacobs / TRC | Incumbent E&C | Records war rooms; earn more by executing tests and replacements |
| G2 Integrated Solutions | Incumbent integrity services | MAOP verification services |
| Kiefner (Applus+, taken private by TDR/I Squared in 2024, from memory), SIA, RCP | Integrity boutiques | Proposed as channels; more likely to build in-house |
| ROSEN / TDW / Baker Hughes (Quest, bought 2022, from memory) | ILI material-property tools | Substitute that needs no paper |
| Massachusetts Materials Technologies (HSD tester) | In-situ NDT | Substitute that sets a low counterfactual price |
| DNV Synergi, Dynamic Risk, Esri UPDM | Integrity and GIS software | Could add a TVC module |
| Microsoft Azure Document Intelligence / Copilot, Accenture | Horizontal AI plus integrators | Build-vs-buy is the default inside customer tenants |
| Iron Mountain InSight DXP | Records custody plus AI | Controls the retrieval bottleneck |
| Cognite, Gecko Robotics, Urbint | Adjacent AI-natives | Sell to the same buyers; none focus on TVC |
| AI-native TVC startup | None verified | Absence may signal a small market, not an opening |

## Why now
- 192.624 milestones: 50% by July 3, 2028 and 100% by July 2, 2035 (verify).
- Data-center gas demand raises the cost of outages.
- Stranded-asset politics in MA (DPU 20-80-B), CA and NY.
- Multimodal models can read handwriting and circular pressure charts.
- The workforce that knows the old records is retiring.
- TSA security directives squeeze offshore indexing.
- **Counter-signal:** the 2025-26 deregulatory push (EO 14192) could extend milestones or narrow MCA scope.

## Wedge and business model (as proposed)
- Fixed-price "gap-list sprint" of 8-12 weeks on 50-300 miles: a base fee of $50-150k plus a success fee per attribute resolved.
- Then a platform at $150-600k/yr covering 192.607 dig capture, management of change, inspection packets and Part R reporting.
- First targets: mid-size interstate pipelines (Southern Star, Boardwalk, Northern Natural, etc.) and LDCs exposed to shareholder-funded costs.
- Realistic ceiling: $15-40M revenue.

## What's good
- Real, quantifiable, safety-relevant pain, with a regulator-defined verification standard (TVC) that suits a rules engine.
- Strong original ideas:
  - ILI-to-construction-tally joint-length alignment;
  - mill-history plausibility checks (the San Bruno "30-inch seamless X42" pattern);
  - corroborating records from purchasing and plant accounting;
  - predicting which box in storage holds the missing record.
- Pipelines on FERC negotiated rates, and LDCs where shareholders bear the cost, have aligned incentives.
- Value per found record rises as the remaining segments skew toward single-feed urban laterals that are hard to take out of service.
- Little capital needed; no verified AI-native competitor.

## What's bad (strongest skeptic points)
- **Competition lens:** the money is structurally taken. Records can't fix (a)(2) grandfathered pipe. The (a)(1) residual is what 2011-2021 searches failed to find, so a 3-5% hit rate is as plausible as 10-30%. Incumbents hold the MSAs, custody of the data and cleared staff. ILI and in-situ NDT are making paper obsolete every year.
- **GTM lens:** the value is priced against the wrong counterfactual. Against ECA or pressure reduction, a found record is worth $20-150k, not $1M+. Success fees invite disputes and look like a conflict of interest to regulators. Work for 2028 is already booked, so a 12-18 month sale lands in a trough. CAC of $300-600k against 1-3 sprints per account gives an LTV:CAC of about 0.5-1.5x.
- **Feasibility lens:** inference is not evidence. Fingerprinting, plausibility checks and ledgers produce Method 3/6 inputs that need a PE, not TVC records. One misread grade recreates San Bruno, so humans verify everything and margins look like services. Engineering licensure (certificate of authorization), $5-10M E&O insurance, and a plausibility engine that creates discoverable "knowledge" all slow legal sign-off. Deploying in each customer's tenant prevents a cross-customer data moat.
- **All three:** a deadline-driven market exposed to deregulation, a concentrated base of about 30-60 motivated accounts, and the need for a credentialed co-founder.

## Non-obvious insights
1. Rate recovery can work against the sale. Averch-Johnson means a rate-of-return LDC earns on replacement. CPUC D.12-12-030 (from memory) made PG&E shareholders fund the gaps.
2. The binding constraint is usually grade or seam type, not the test record. The punitive defaults (24 ksi yield, 0.60 seam factor) mean one MTR can double design pressure.
3. **Most important:** the backlog market is adversely selected. The durable value is in records being created now, through 192.607 digs and Method 1/4 work, not in archaeology.
4. A tool that surfaces wrong "TVC" records is both a sales hook and a legal liability ("willful blindness" friction).

## Cheapest validation test (2 weeks, <$1k)
- Run 12-15 interviews ($0-500 in LinkedIn and gift cards) with ex-PG&E, Sempra and interstate MAOP/records leads and with integrity boutique engineers. Ask four questions:
  1. What share of your remaining gap list is (a)(1) versus (a)(2)?
  2. What method was chosen for those segments, and what does it cost per segment?
  3. How hard were the files already searched?
  4. Who owns contractor turnover QA, and how many days or dollars does a closeout package fix take?
- Ask one operator for a 20-segment redacted sample gap list.
- **Kill the backlog thesis** if (a)(1) is under 30% of the list or ECA/pressure reduction dominates.
- **Advance Born-TVC** if 3 or more interviewees describe turnover-package rework costing more than $50k per project.

## Unresolved questions
- Are the 2028/2035 milestones and MCA scope unchanged after the 2025-26 deregulatory actions and PIPES Act reauthorization?
- How do (a)(1) and (a)(2) mileage split nationally, according to PHMSA annual-report Part R data?
- What is the real recovery rate on an already-searched residual list?
- Would PHMSA or state inspectors accept ILI-tally alignment or accounting ledgers as TVC corroboration?
- Is there an AI-native TVC or turnover-QA entrant (YC or stealth, 2025-26)?
- For Born-TVC, who funds turnover QA (owner or EPC), and do existing construction-document and weld-tracking tools already cover it?

## Sources (none fetched this run; verify)
- 49 CFR Part 192 (192.607, 192.619, 192.624): https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-D/part-192
- PHMSA Gas Transmission Final Rule, 84 FR 52180 (Oct 1, 2019) and its regulatory impact analysis: https://www.federalregister.gov/documents/2019/10/01/2019-20306
- PHMSA ADB-2012-06, Verification of Records (77 FR 26822, May 7, 2012)
- NTSB PAR-11/01, San Bruno: https://www.ntsb.gov/investigations/AccidentReports/Reports/PAR1101.pdf
- NTSB PAR-19/02, Merrimack Valley: https://www.ntsb.gov/investigations/AccidentReports/Reports/PAR1902.pdf
- PHMSA pipeline mileage data: https://www.phmsa.dot.gov/data-and-statistics/pipeline/gas-distribution-gas-gathering-gas-transmission-hazardous-liquids
- CPUC D.12-12-030; MA DPU 20-80-B; EO 14192 (Jan 31, 2025); Baker Hughes/Quest Integrity (2022); Applus+ take-private (2024). All from memory.
