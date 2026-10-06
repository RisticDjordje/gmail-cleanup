# Order Enforcement Intelligence (Duty-Evasion Radar)

**One-liner:** An AI evidence engine that finds AD/CVD and Section 232/301 duty evasion (transshipment, false origin, misdeclared metal content). The original pitch packaged cases for EAPA allegations and competitor-relator False Claims Act (FCA) suits. The recommended version points the same engine at the parties that carry the liability: customs sureties and Section 232 derivative importers.

> **Verification caveat:** No live research was possible in this run or the three red-team runs. The shared WebSearch budget was used up and WebFetch was egress-blocked, including edrm.net in this run. The 2026 facts below come from the scout's cited URLs and were not re-fetched: the $549.5M Perfectus settlement, the >$1B task-force tally, and the Sept 2026 Fraud Division memo. Funding figures and the status of the Zafirov appeal come from memory. Treat all of them as unverified.

## Verdict: PROMISING WITH PIVOT — 36/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Enforcement side is about $100-400M including a lumpy bounty pool. 5-yr SOM $8-25M. |
| Pain intensity | 5 | Real for the coalitions that need it, but episodic. Acute for sureties hit by importer-of-record (IOR) defaults. |
| Whitespace | 6 | No AI-native petitioner-side evidence engine. Altana, Sayari and Exiger sit adjacent. |
| AI leverage | 5 | Entity resolution, capacity models and document cross-checks are real gains. The decisive evidence (labs, investigators, insiders) is not AI work. |
| GTM feasibility | 3 | Sold through 15-30 relationship-gated trade firms. About 300 logos. Churn when a case succeeds. |
| Defensibility | 4 | Data is commoditized and EAPA outcome labels are public. Client-side private signal is the only real moat. |
| Founder fit | 2 | A credentialed ex-CBP/TRLED official or trade attorney is mandatory. Legal and ethics structuring is heavy. |

The original "qui tam case factory" alone scores roughly 28 (pass). The surety / Section 232-documentation pivot raises it into the mid-30s to low-40s, depending on how many surety logos can be signed.

## Revised thesis
Trade enforcement in 2025-26 became a joint public-private effort: the DOJ Trade Fraud Task Force, customs fraud added to the DOJ whistleblower pilot, and record FCA settlements. The bounty side is still a poor business. Public manifests carry no values or duties. They also miss truck, rail and air freight. The government sees more than any private party, and the outcome money is lagged, lumpy, and legally fragile (Zafirov, Polansky, the public-disclosure bar, Rule 5.4).

The better business uses the same evasion graph for **risk-bearers who can compel documents**. Customs surety carriers and their agencies absorb retroactive AD/CVD and penalty bills when shell IORs vanish. Section 232 derivative importers must document metal content and melt/pour origin. Both can supply non-public documents (invoices, mill certificates, bills of materials, entry data). Cross-checking those documents against manifests, mirror trade, registries and capacity is where LLMs actually excel. A thin, separate enforcement desk can produce sector "Order Watch" reports and refer the strongest cases to petitioner counsel. Treat it as an option and a source of labeled outcome data, not the core business.

## How the work is done today
- **Signal:** A domestic producer loses bids below the duty-inclusive floor. The GC escalates to the trade counsel that won the order (Wiley, Kelley Drye, Cassidy Levy Kent, Picard Kentz & Rowe, Schagrin, King & Spalding).
- **Evidence:** Paralegals and economists (Capital Trade, Georgetown Economic Services) pull Panjiva, Datamyne or ImportGenius manifests and Census/DataWeb unit values, and search foreign registries (Qichacha, SSM). Investigators (Kroll, Nardello, K2, Mintz) visit "factories" at $15-75k per trip (estimate). Labs fingerprint goods: honey isotopes, alloy trace elements, wood DNA.
- **Routes:**
  - EAPA (19 USC 1517): CBP decides on initiation in 15 business days and imposes interim measures by 90 days. Determination takes 300-360 days. Cost is about $60-400k per allegation (estimate). The filer gets no payout.
  - Commerce circumvention inquiry (19 USC 1677j): 6-12+ months.
  - FCA qui tam: 2-5+ years under seal. The relator gets 15-30% of the recovery.
- **Sureties today:** They underwrite on financials and collateral and demand more collateral after losses. There is little origin or transshipment analytics.

## TAM (estimates)
- **Enforcement SaaS:**
  - About 250 coalitions × $60k = $15M
  - About 30 trade firms × $100k = $3M
  - 1-3k non-coalition 232/301-protected producers × $15-30k = $15-90M
  - Subtotal about $35-110M.
- **EAPA and circumvention evidence services:** about $20-40M/yr addressable spend.
- **FCA outcome pool:** $0.3-1.5B/yr in civil recoveries × about 18% relator share = $55-270M across all relators. The startup's realistic slice is $1-14M/yr, arriving 2-5 years late.
- **Pivot:**
  - Surety and bond underwriting analytics: tens of millions (a small number of carriers and agencies).
  - Section 232 derivative and origin documentation for mid-market importers: tens of thousands of importers × $20-150k, a plausible $0.5-2B. That market is crowded (Altana, Sayari, Exiger, Descartes, brokers, Flexport).
- **Context:** FY2025 customs duties about $195B (memory). A 1-3% evasion rate implies a $2-6B/yr evasion pool (rough).

## Competitors
| Name | Type | Relevance |
|---|---|---|
| Altana AI | AI-native (~$200M Series C, ~$1B val, 2024, memory) | Best graph. CBP customer. Conflicted against petitioner work but could enter importer assurance. |
| Sayari | AI-native (~$228M TCV round, 2024, memory) | Entity resolution for government and enterprise. Likely data supplier or fast follower. |
| Exiger, Kharon | AI-enabled risk platforms | Adjacent compliance buyers. Could add an evasion module. |
| Panjiva/PIERS, Datamyne, ImportGenius, ImportYeti, Trademo, Volza | Data vendors | Commoditized inputs. License terms may bar litigation use. |
| Petitioner trade bar + economists (Capital Trade, GES) | Services / gatekeeper | Both the channel and the substitute. Bill hours on exactly this work. |
| Whistleblower firms (Constantine Cannon, Phillips & Cohen, Kohn Kohn & Colapinto) | Services | Own the FCA lane. |
| Kroll, Nardello, K2, Mintz | Investigators | Supply the ground truth that decides cases. |
| CBP ATS/TRLED, DOJ Task Force | Government | Strictly better data. Cases the government originates have no relator. |
| Harvey, CoCounsel, deep-research agents | Horizontal AI | Commoditize registry reading and allegation drafting. |
| Gaia Dynamics, Flexport tariff tools, brokers | Importer-side AI | Occupy the pivot market. |
| Island Industries v. Sigma; Customs Fraud Investigations v. Victaulic | Precedents (memory) | Competitor-relator and relator-LLC customs FCA suits already work without a tech intermediary. |

## Why now
- Enforcement push: Task Force (about Aug 2025), customs fraud added to the DOJ whistleblower pilot (May 2025), Sept 2026 Fraud Division memo, Perfectus $549.5M (scout-sourced, unverified).
- Section 232 at 50% with derivatives taxed on metal content, a new and poorly monitored evasion surface.
- Record AD/CVD petition volume.
- Possible IEEPA invalidation (unverified) shifts the durable base to AD/CVD, 232 and 301.
- LLMs make multilingual registry and capacity analysis cheap.

## Wedge & business model
- **Recommended wedge:** one surety agency or carrier as design partner, plus one 232 derivative category (aluminum-content goods).
  - Per-importer risk review and portfolio monitoring.
  - Flags: IOR churn, manifest-confidentiality filings right after an order, shared forwarders, origin shifts, capacity impossibility.
  - Cross-checks bond-applicant documents.
  - Price per bond or review, plus an annual portfolio fee.
- **Secondary:** a $30-150k/yr "Order Watch" for 1-2 coalitions through a friendly petitioner firm, with a lost-bid capture tool for sales reps. Success shows up as EAPA initiations within months.
- **FCA:** refer only. Never structure around relator shares: fact-witness contingency and Rule 5.4 problems, and the precedent of DOJ dismissing healthcare relator LLCs (NHCA).

## What's good
- Strong enforcement tailwind and large evasion incentives.
- No AI-native in the petitioner niche.
- EAPA's statutory clock gives fast, visible proof points.
- Capacity-impossibility and mirror-trade analysis across every shipper in a lane is a real step change.
- Pooled client signal (lost-bid prices, samples) supplies the "original source" evidence an FCA relator needs.
- Sureties are an overlooked victim with real underwriting budgets and shorter cycles.
- Capital-light: a $1.5-3M seed is enough.

## What's bad (red team)
- **Competition skeptic (serious concerns):**
  - The paying layers are locked up: the trade bar owns the client, the government owns the data, and whistleblower firms own FCA.
  - Commodity data plus Harvey/ChatGPT plus a paralegal reproduces about 80% of the product.
  - Altana and Sayari haven't entered, which suggests the pool is small.
  - You can't be both bounty hunter and bodyguard: importer-side expansion conflicts with petitioner clients.
- **GTM skeptic (kill):**
  - Coalitions fund petitions episodically and churn when a case succeeds (25-35%/yr).
  - CAC $80-150k against about $36k/yr gross profit gives LTV/CAC near 1x, with a hard ceiling of about 300 logos.
  - The EAPA bottleneck is TRLED capacity, not allegation supply.
  - Pooled pricing data raises Sherman Act §1 risk; the DOJ info-exchange safe harbors were withdrawn in 2023.
  - Post-employment rules (18 USC 207) limit ex-CBP hires.
- **Feasibility skeptic (kill):**
  - Manifests show only the misrepresented origin and no value. They miss Mexico/Canada truck and rail, the growth lane.
  - Origin shifts after an order are often lawful relocation, so false positives are high.
  - LLM-hallucinated ownership links bring defamation exposure.
  - Human review, investigators and labs eat the margin; the model is 60% services.
  - EAPA success shrinks FCA damages, so the wedge cannibalizes the bounty.
- **Partner view:**
  - The bull case's best defense is the client-relator / original-source framing, but it does not solve the TAM or channel problems.
  - The pivot is better on budgets and legal risk, but the market is small (surety) or crowded (importer assurance).

## Non-obvious insights
1. **Manifest-confidentiality filings as a signal.** Importers can ask CBP to keep their manifests confidential. A confidentiality request filed right after an AD/CVD order is itself a scoreable signal.
2. **EAPA cannibalizes FCA.** Wins collect duties via cash deposits and liquidation, which reduces the FCA damages and DOJ's interest in intervening.
3. **Fix FCA risk by choosing the relator.** The public-disclosure bar is beaten by the relator's own knowledge, not by more data. Product value lies in capturing tacit sales-floor knowledge.
4. **Sureties are the overlooked buyer.** They are the forced payer of last resort and can legally require documents that no outside party can see.
5. **Build only on statutory duties.** Build on AD/CVD, 232 and 301, never on IEEPA duties.

## Cheapest validation test (2 weeks, <$1k)
1. **Calls.** 10 calls: 4 customs surety underwriters or agencies (Roanoke, Avalon, IAC/Lexon, Great American; memory, verify), 3 petitioner-firm associates, 3 coalition GCs.
   - Ask about last year's IOR-default losses, current collateral triggers, and willingness to pay $X per importer review.
2. **Back-test.** Take one lane, e.g., aluminum extrusions via Malaysia/Vietnam, using ImportYeti (free) and Census DataWeb. Score shippers on origin shift, shared forwarders and capacity proxies. Check whether the top-decile flags overlap with CBP's published EAPA notices.
3. **Kill criteria.** Zero sureties willing to run a paid pilot, or less than 30% top-decile precision.

## Unresolved questions
- Status of the Zafirov 11th Circuit appeal and of the IEEPA Supreme Court ruling.
- Civil vs criminal split of the >$1B tally; customs FCA cash excluding Perfectus.
- EAPA allegation-to-initiation ratio for 2024-26 (is supply or capacity the constraint?).
- Surety market size, IOR-default loss history and data-sharing appetite.
- Manifest licensing cost for litigation and commercial use.
- Antitrust treatment of pooled lost-bid data.

## Sources
Scout-cited URLs (not re-fetched):
- https://edrm.net/2026/07/doj-and-dhs-issue-trade-fraud-guide-as-task-force-tally-exceeds-1-billion/
- https://www.morganlewis.com/pubs/2026/05/doj-announces-major-fca-settlement-relating-to-evaded-customs-duties
- https://www.shb.com/intelligence/newsletters/giwc/2026/schleppenbach-franklin-perfectus-fca
- https://www.foley.com/insights/publications/2026/09/dojs-new-fraud-division-memo-signals-heightened-trade-and-customs-enforcement-and-the-false-claims-act-is-a-central-tool/
- https://www.mayerbrown.com/en/insights/publications/2026/02/cody-herche-new-head-of-doj-trade-fraud-task-force-signals-aggressive-enforcement-shift
- https://www.afslaw.com/perspectives/investigations-blog/baseline-not-finish-line-fca-customs-enforcement-mid-year-2026
- https://altana.ai/resources/coo-determination-fta-qualification

Statutes, regulations and program pages:
- https://www.law.cornell.edu/uscode/text/31/3730
- https://www.law.cornell.edu/uscode/text/19/1517
- https://www.law.cornell.edu/cfr/text/19/103.31
- https://www.law.cornell.edu/uscode/text/19/1619
- https://www.law.cornell.edu/uscode/text/19/1592
- https://www.cbp.gov/trade/trade-enforcement/tftea/eapa

Cases (from memory):
- Polansky (2023)
- Schindler v. Kirk (2011)
- Victaulic (3d Cir. 2016)
- Integra Med Analytics (5th Cir. 2020)
- Island Industries v. Sigma (C.D. Cal. 2022)
- Zafirov (M.D. Fla. 2024)
