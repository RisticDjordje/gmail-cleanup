# OriginProof: from a shipper-side LTL density certificate to a rebill adjudication agent for LTL 3PLs

**One-liner (revised):** An AI agent for mid-tier LTL 3PLs and brokers, the bill-to party. For every carrier reweigh or reclass rebill, it pulls the carrier's own W&I certificate and dimensioner images and decides whether to dispute, eat the charge, or pass it to the customer. It files the wrong ones inside the 180-day window and sends the shipper a clear evidence packet for the legitimate ones. It also checks shipper-declared density class at quote time.

> Research caveat: the shared WebSearch budget was used up and the egress proxy blocked fetches during this run, for the deep dive, all three red-teamers and this verdict. No funding figure or market statistic below was re-verified live. Statutes are cited from knowledge. Vendor stats (5-10% correction rate, 1.24% damage rate, >70% dimensioner penetration) come from vendor or marketing sources.

## Verdict

**PROMISING WITH PIVOT: 41/100.** The original thesis (a phone LiDAR "density certificate" that flips the burden of proof on carriers) does not survive. A non-NTEP phone reading cannot override a legal-for-trade carrier dimensioner. Phone error (±5-10% volume) is about the same size as the gaps between class breakpoints. And the winnable disputes can be proven from the carrier's own images anyway. All three skeptics independently reached the same pivot: sell rebill adjudication to the bill-to 3PL. That convergence is the strongest signal in this file.

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Revenue pool about $300-900M. Winnable disputes are only $100-450M industry-wide. |
| Pain intensity | 6 | Reclass pain after July 2025 is real but decays as SKU masters get remapped. 3PL churn and bad-debt pain is sharper. |
| Whitespace | 3 | Loop, Evos, Freehand, CorePiper, Kargo, Freightsnap, audit incumbents, and 3PL agent startups all overlap. |
| AI leverage | 6 | Multimodal adjudication of W&I images plus multi-portal and email dispute agents is a real step change. Phone dimensioning is commodity. |
| GTM feasibility | 4 | Shipper-direct ACV is about $6-10k and the shipper is often not bill-to. The 3PL route has concentrated buyers but long cycles. |
| Defensibility | 3 | The only real moat is carrier- and terminal-specific adjudication data. |
| Founder fit | 6 | No licenses, capital-light, technical. Needs a freight insider for 3PL sales. |

## Thesis (revised)

The July 19, 2025 NMFC density overhaul (Docket 2025-1, about 2,000 items moved to a 13-tier density scale) turned class into a measurement. It also broke legacy SKU-to-class tables. Most resulting corrections are *legitimate*. The party that absorbs them is often the SMB-focused 3PL that quoted from shipper-declared class. That 3PL then either eats the rebill or sends a surprise bill that churns the customer. The opportunity is not to win arguments with an origin photo. It is to **run the rebill operations of 3PLs and brokers**:

- Retrieve and adjudicate every W&I certificate automatically. Flag dimensioner artifacts, wrong subprovision, duplicate inspection fees and linear-foot misapplication.
- Dispute the wrong ones using the 3PL's volume leverage.
- Turn the legitimate ones into collectible, low-churn pass-throughs.
- Prevent repeats by validating shipper-declared density against the shipper's W&I history at quote time.

The data asset (which carriers, terminals and denial reasons can be reversed) is the only compounding moat. Carmack claims and cargo-insurer subrogation are later expansions, not the core.

## How the work is done today

- **Shipper dock:** freight is weighed and dimensions are taped or guessed. Class is keyed from a stale product master. The BOL is signed "subject to correction."
- **Carrier terminal:** an NTEP dimensioner scans outermost dimensions, including pallet, overhang and wrap tails. A mismatch triggers a W&I certificate, a corrected class and a rebill, plus a $50-150 inspection fee.
- **After invoice:** the carrier bills the 3PL, which rebills the shipper. A clerk requests the W&I images and disputes by email or portal at 20-60 minutes per item. Small items ($40-150) go unfiled. 49 U.S.C. 13710 sets a 180-day contest window, which large shippers often waive under 14101(b) contracts.
- **Damage:** Carmack (49 U.S.C. 14706) allows 9 months to file. 49 CFR 370 requires acknowledgment in 30 days and disposition in 120, with no forced payment after that. Denials cite clean delivery receipts, "improper packaging" or released-value caps. Small claims get written off. 3PLs often file claims for customers for free.

## TAM

All figures are estimates.

- About 150M LTL shipments a year (about $53B ÷ about $350).
- Corrections: 5-10%, worth about $0.6-1.6B a year. Of that, 15-30% is winnable, about $100-450M. The rest is preventable mis-declaration.
- Damage: the scout's $470M gap mixed units, comparing incidence with claims-paid ratio. Rebuilt bottom-up, the recoverable pool after caps is about $300-900M, with very wide error.
- Vendor revenue pool: about $300-900M across contingency, SaaS and per-shipment fees. SAM in density-sensitive verticals is about $100-200M.
- **Pivot SAM:** about 50-150 meaningful LTL 3PLs and brokers × $0.25-1 per shipment on about 30-60M 3PL-routed shipments ≈ **$15-60M of per-shipment fees**, plus recovery share. With claims and insurer expansion, a $100-200M opportunity. Venture-scale only if it expands into multi-mode accessorial and claims ops for brokers.

## Competitors

| Name | Type | Relevance / scale (unverified unless noted) |
|---|---|---|
| Loop | AI-native audit & pay | $95M Series C Apr 2026, about $210M total (per scout). Could add a reclass agent in a quarter. |
| Evos (getevos.ai) | AI-native LTL audit | Explicitly targets reclass and reweigh. Funding unknown. |
| Freehand, CorePiper | AI claims agents | CorePiper about $2.50/case, which sets a commodity floor. |
| Kargo, Arvist | Dock vision | Kargo $42M Series B Dec 2025 (per scout). Passive outbound pallet images with no behavior change. |
| HappyRobot, Augment, Vooma, Pallet | 3PL/broker agents | Already in the pivot buyer's inbox. The main threat to the pivot. |
| Freightsnap, Cubiscan, Mettler Cargoscan, Zebra | Dimensioning hardware | Own the legal-for-trade measurement. Freightsnap is prior art for shipper reclass defense. |
| Cass, U.S. Bank, AFS, Intelligent Audit, CTSI, nVision, Trax | Audit incumbents | Percent-of-savings recovery already sold. Adding AI. |
| WWEX Group, CHR/Freightquote, Echo, TQL | 3PL / bill-to | Gatekeepers. Large ones will build in-house. |
| NMFTA ClassIT+, SMC3, project44 | Standards / plumbing | Commoditize density lookup. Own image retrieval rails. |
| Warp, Flock Freight | Substitute networks | Shippers can escape class pricing instead of fighting it. |

## Why now

1. The NMFC density docket (July 2025) created a rebill wave and broke master data.
2. Carriers increasingly expose W&I images and PDFs on portals and APIs, which makes automated adjudication possible.
3. Multimodal LLMs make $40-150 disputes economical to file.
4. NMFTA Digital LTL Council eBOL standards create a slot for structured evidence.
5. FedEx Freight separation (2026) and post-Yellow carrier discipline drive accessorial scrutiny.

**Decay risk:** the reclass spike is partly a one-time master-data shock that started 15 months ago.

## Wedge & business model

- **Wedge:** 3-5 mid-tier LTL brokers or digital LTL marketplaces outside the WWEX and CHR orbit. Run a free 90-day lookback on their rebill queue showing $ reversed plus $ collected from customers versus written off.
- **Pricing:** $0.25-1 per adjudicated correction or per shipment, plus 20-30% of reversed rebills. Target ACV $100k-1M.
- **Onboarding hook:** a one-time NMFC density remap of each shipper's SKU catalog, delivered through the 3PL portal.
- **Later:** white-label Carmack claims for 3PL customers. Sell a subrogation feed to shipper-interest cargo insurers (Falvey, Loadsure).
- **Margins:** 40-55% gross for 12-24 months (human in the loop on denials), with a 75%+ target.

## What's good

- Real, dated regulatory shock with verifiable mechanics: density classes, the 180-day and 9-month clocks.
- The deep dive's self-correction is sharp: the money is in prevention, carrier images are retrievable, and the deadlines are the product.
- Capital-light, no licenses, AI-native workflow (vision on W&I images plus email and portal agents).
- The pivot buyer is concentrated, holds dispute rights and API access, and has measurable churn and bad-debt pain.
- The dataset of adjudicated outcomes compounds and is invisible to invoice-only auditors.

## What's bad (skeptics' strongest points)

- **Competition (kill):** The "density certificate" has no legal standing (NIST HB44 §5.58, carrier tariffs). The remainder is Loop's or Evos's feature. Kargo already captures tender images passively. 3PLs give claims filing away free. FAK pricing shrinks the reclass dollars.
- **GTM (serious):** At the actual wedge (50 pallets/week, about $0.7M spend) ACV is about $6-10k, not $35-40k. The shipper often is not bill-to (3PL holds carrier accounts) and not the claimant (FOB origin, so the consignee owns damage). Revenue self-cannibalizes, with a PRGX-like exit comp. Dock capture decays given 40%+ turnover and phone bans.
- **Feasibility (serious):** ±1 in per axis is about 6% volume, which flips class near 20-25%-spaced breakpoints. Evidence is not the binding constraint on claims: released-value caps hit light, high-$/lb freight hardest, 370 has no payment deadline, and claims ≤$10k are rarely litigated. Portal-scraping ToS risk. A "chronic disputer" tag from erroneous agent filings. 14101(b) contracts waive statutory clocks.
- **Manager's add:** the pivot walks straight into HappyRobot, Augment and Vooma territory. Winning needs LTL-specific depth plus a freight insider co-founder.

## Non-obvious insights

1. Pricing power after 2025 sits with whoever owns the *legal-for-trade* measurement. Shippers cannot cheaply acquire it, so stop trying and audit the carrier with its own images.
2. The real victim of reclass is the SMB 3PL rep, not the shipper. Selling a "pass-through packet" that preserves the customer relationship may be worth more than the reversed dollars.
3. Phone measurement is most accurate on clean cuboids where disputes are rare, and least accurate on irregular freight where they cluster.
4. Low claims ratios (about 0.1-0.35%) are partly an artifact of non-filing and caps, not low damage. The gap is real but locked behind released-value tariffs.
5. Linear-foot and cube-rule rebills on bulky freight are a less-watched second pool that invoice-only auditors struggle with.

## Cheapest validation test (2 weeks, <$1k)

- Get 6-12 months of rebill and W&I exports (CSV plus PDFs) from 3 LTL brokers or 3PL franchisees, under NDA, sourced via LinkedIn and FreightWaves community outreach.
- Hand-adjudicate 300 corrections with an LLM-plus-human script. Measure:
  - (a) % clearly winnable from carrier images
  - (b) $ per 1,000 shipments
  - (c) % FAK-neutralized
  - (d) % passed through vs written off
- **Kill if** winnable is under 15% or reversible plus avoided write-off is under $1.5k per 1,000 shipments.
- In parallel, run 10 calls with 3PL ops leads asking "what do you do with a rebill today, and would you pay $0.50/shipment to make it disappear?"

## Unresolved questions

- What share of density-sensitive mid-market LTL is 3PL-billed vs shipper-direct?
- Do carriers sanction API access to W&I images for third parties, and will they throttle bot-driven disputes?
- Real post-remap correction rates in late 2026: structural or decaying?
- Are Loop, Evos or HappyRobot already shipping rebill adjudication to brokers?
- Will shipper-interest cargo insurers pay per certificate for subrogation evidence?
- Are funding figures for Loop and Kargo, and Evos's existence and scope, accurate? (Not re-verified.)

## Sources

- https://www.dtsone.com/breaking-down-the-july-2025-nmfc-changes/
- https://freightplus.io/ltl-freight-class-nmfc-density-changes/
- https://www.wearewarp.com/avoid-ltl-reclass-reweigh-fees
- https://getltlrates.com/freight-reweigh-and-reclass
- https://cubiscan.com/why-ltl-shippers-are-seeing-more-reweighs-and-how-accurate-dimensioning-cuts-costs/
- https://synchrogistics.com/ltl-claims-ratio-index-update-3q25/
- https://www.flockfreight.com/wasted-space-wasted-dollars-research-study-24
- https://www.optioryx.com/blog/mobile-pallet-dimensioning
- https://siliconangle.com/2026/04/17/supply-chain-ai-startup-loop-secures-95m-investment/
- https://www.businesswire.com/news/home/20251222521900/en/Kargo.ai-Raises-$42M-Series-B-to-Scale-Global-Warehouse-Deployment-with-Enterprise-Clients
- https://www.getevos.ai/resources/blog/ltl-invoice-audit-operations-problem
- https://www.freehand.ai/articles/best-freight-claims-management-software
- 49 U.S.C. 13710: https://www.law.cornell.edu/uscode/text/49/13710
- 49 U.S.C. 14706: https://www.law.cornell.edu/uscode/text/49/14706
- 49 U.S.C. 14101: https://www.law.cornell.edu/uscode/text/49/14101
- 49 CFR 370: https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-370
- NIST Handbook 44 §5.58: https://www.nist.gov/pml/owm/publications/nist-handbooks/handbook-44

## Round 2 diligence (2026-10-06)

> Method caveat: the egress proxy blocked every live fetch in round 2. That includes this re-judge, which retried lighthouz.ai and transflo.com on 2026-10-06 and was blocked. Competitor facts below come from search-result snippets gathered in the round-2 fact-check. The buyer interviews are **synthetic role-plays**, not evidence of demand. Statutes are cited from knowledge.

### Score change: 41 -> 24. Verdict: PASS (keep as a feature/services fallback only)

**Why it fell:**
1. **The whitespace claim is contradicted.** The pivot's core loop is: check reweigh/reclass charges for an inspection or weight certificate, auto-dispute when it is missing, then invoice the customer. That loop is already sold to freight brokers by:
   - **Lighthouz AI** (YC S24): https://lighthouz.ai/shipment-types/ltl
   - **Transflo Workflow AI for LTL**, launched 2026-01-22 with Armstrong Transport Group as a named mid-tier broker reference: https://www.businesswire.com/news/home/20260122099350/en/
   - **Freehand**, which came out of stealth at Manifest 2026 as an agentic audit, dispute and payment platform.
   The incumbent, Transflo, already sits in the broker's BOL/POD document flow.
2. **"The deadlines are the product" is overstated.** In practice the operative dispute window is the carrier tariff or the contract, often about 30 days (https://getltlrates.com/freight-reweigh-and-reclass). 14101(b) contracts can waive the 180-day window in 13710. That leaves throughput and accuracy as the value, which every competitor already sells.
3. **Buyer simulation shows a thin budget.** The likely buyer, a broker billing manager, says "maybe" only after a free lookback shows dollars. She measures price against a $15-60k auditor and rejects per-shipment pricing. Agent offices have the pain but no dispute rights. Large 3PLs will build in-house and won't give up a share of pass-through revenue. Estimated ceiling: about $5-15M ARR before expanding into other modes.
4. **Partial offsets that did not change the verdict:**
   - The NMFC facts are verified, and ODFL references 2026 classification changes, so master-data churn may be slower to decay than feared.
   - Loop ($95M Series C, $210M total, verified) is drifting toward broad shipper supply-chain AI, which leaves the broker segment less contested *by Loop*.
   - Evos turns out to be horizontal rather than LTL-dedicated.

| Dimension | R1 | R2 | Change driver |
|---|---|---|---|
| Market size | 4 | 3 | Synthetic WTP implies a $5-15M ARR ceiling for the LTL-only wedge |
| Pain intensity | 6 | 6 | Real and possibly less decaying (2026 dockets), but buyers ignore $60-90 items |
| Whitespace | 3 | 1 | Lighthouz, Transflo and Freehand sell the exact loop to the exact buyer |
| AI leverage | 6 | 5 | Real, but now table stakes |
| GTM feasibility | 4 | 3 | Contingency-only pilots; carrier-relationship veto; security sign-off for portal credentials |
| Defensibility | 3 | 2 | Terminal-level reversal data is the only moat, and Transflo/LSP44 sit closer to the data |
| Founder fit | 6 | 5 | Still needs a freight-insider co-founder, now against funded incumbents |

### Fact-check

| Claim | Status | Evidence |
|---|---|---|
| NMFC Docket 2025-1, effective 2025-07-19: ~2,000 items, 13-tier density scale | Verified | Scale went from 11 to 13 subs (Sub 11: 30-35 pcf = Class 60; Sub 12: 35-50 = Class 55; Sub 13: 50+ = Class 50). ODFL "2026 NMFC Classification Changes" page suggests further dockets. https://www.whyloyalty.com/blog/freight-class-list-nmfc-guide/ |
| Loop $95M Series C (Apr 2026), ~$210M total | Verified | Led by Valor/Atreides; moving toward suppliers, trade, procurement and inbound. https://techcrunch.com/2026/04/17/loop-raises-95m-to-build-supply-chain-ai-that-predicts-disruptions/ |
| Evos is an AI-native LTL audit company | Partially true | Horizontal "autonomous AI for legacy industries"; LTL audit is one use case. Seed led by Anthemis, amount undisclosed. https://getevos.ai/about |
| Whitespace: no AI-native W&I check plus auto-dispute for brokers | **Contradicted** | Lighthouz LTL page; Transflo Workflow AI for LTL (2026-01-22). https://lighthouz.ai/shipment-types/ltl |
| 13710 180-day window is "the product" | Partially true | Statute from knowledge. Practical window is "usually 30 days from invoice." https://getltlrates.com/freight-reweigh-and-reclass |
| Carmack 9-month filing / 2-year suit window | Unverifiable (live) | Consistent from knowledge; LII blocked. https://www.law.cornell.edu/uscode/text/49/14706 |
| 49 CFR 370: 30-day acknowledgment / 120-day disposition | Unverifiable (live) | Consistent from knowledge; eCFR blocked |
| Kargo $42M Series B (Dec 2025) | Unverifiable | Only the BusinessWire URL slug supports it |
| Corrections hit 5-10% of shipments (~$0.6-1.6B pool) | Unverifiable | Transflo cites 30-40% LTL invoice *error* rate (all exceptions; vendor figure) |
| Freehand is a claims agent | Partially true | It is an agentic full freight audit and payment (FAP) platform, a direct competitor. https://www.freehand.ai/articles/best-ai-freight-audit-and-payment-software |
| US LTL market ~$53B | Unverifiable | Order of magnitude plausible (high-$40B to mid-$50B); shipment count is derived |
| CorePiper ~$2.50/case | Unverifiable | Not checked |
| FedEx Freight separation (2026) as a "why now" | Unverifiable | Spin-off targeted ~June 2026 (from knowledge); effects unverified |

### New competitors

| Name | Type | What it does | Scale |
|---|---|---|---|
| Lighthouz AI | YC S24, broker back-office AI | FTL/LTL AP audit, accessorial validation, reweigh/redim/reclass certificate check plus auto-dispute, AR invoicing. Claims 70-85% touchless emails and 40% lower back-office cost (vendor claims). https://lighthouz.ai/shipment-types/ltl | ~$500K (Tracxn; may be stale) |
| Transflo Workflow AI for LTL | Incumbent launch, 2026-01-22 | LTL audit plus invoice resolution for brokers and carriers; "two-click" resolution; audit trail. Armstrong Transport CFO: "up to a week" saved. https://www.transflo.com/products/workflow-ai/for-ltl/ | Established incumbent |
| Freehand | AI-native agentic FAP | Ingestion -> match -> discrepancy -> carrier dispute -> ERP posting, with no human queue. https://www.freehand.ai/articles/best-ai-freight-audit-and-payment-software | Unknown |
| LSP44 (project44 split, reported 2026-07-14) | Plumbing incumbent aimed at 3PLs and brokers | Owns carrier API rails (potential W&I retrieval). Single source: https://cxtms.com/blog/emerging-trends-technology | Unverified |
| Evos | Horizontal agentic builder | Custom agent in "24 hours"; LTL class recalculation from BOL. https://www.getevos.ai/ | Seed (Anthemis) |
| Expedock, ARDEM | AI-plus-BPO | Offshore freight audit and customer billing labor; sets a low price anchor | Job-post signals only |

### Buyer-interview highlights (SYNTHETIC role-plays)

- **"Dana", LTL billing manager, mid-tier broker (~200k LTL shipments a year). Verdict: "maybe."**
  - Pain: *"Since the density change, my queue is half reclasses... Most of the $60-90 ones? Nobody touches them. They just age out."*
  - Objections:
    - *"I don't want a bot spamming the ODFL or Saia disputes inbox."*
    - *"You'll find maybe 1 in 5 we can win."*
    - *"Evos and Loop have both emailed me, and our TMS vendor says they're adding audit."*
  - WTP:
    - $0.50/shipment across all shipments: *"that's more than an auditor."*
    - $3-6 per adjudicated correction: "a conversation."
    - 25% of reversed dollars: fine if net-positive.
- **"Rick", agent-office owner (15-30k shipments). Verdict: "no."**
  - *"That's corporate's job. I literally can't file a dispute."*
  - Would pay $100-200/month for quote-time class validation and would likely churn after about 3 months. He is a channel through the host network, not a buyer.
- **"Priya", Controller at a large 3PL (500k-1M+ shipments). Verdict: "probably not."**
  - *"Disputes aren't my problem. Unbilled cost is."*
  - *"I'm not giving you 25% of [my revenue]."*
  - *"Our IT team is building agents... could probably build the matching in a quarter."*
  - WTP: $50-150k/year SaaS after SOC 2 and 6-9 months of procurement, realistically in 2027.
- **WTP estimate (unvalidated):** target-segment ACV $40-150k, with year 1 more likely $25-60k. Ceiling of ~50-150 buyers × $50-100k = **$5-15M ARR**.
- **Strongest residual signal:** finance cares more about the *unbilled or late-rebilled pass-through* bucket than about disputes. That is the only angle that didn't hit a named competitor head-on.

### Pre-mortem: top failure modes (probabilities are estimates)

| Mode | P | Early warning |
|---|---|---|
| Revenue ceiling and self-cannibalization (LTL-only SAM $15-60M; contingency shrinks as the backlog clears) | 60% | Contingency is >40% of revenue and falling; NRR <110% |
| Reclass wave decays as SKU masters remap | 55% (likely lower if 2026 dockets continue) | Corrections per 1k shipments fall 3 months in a row; reclass share <40% |
| Feature absorption by audit, TMS and broker-agent vendors | 50%, now **observed** (Lighthouz, Transflo) | 2 or more of the first 10 prospects say "my vendor already flags it" |
| Brokers throttle filings to protect carrier relationships | 45% | <60% of recommended disputes approved; carrier complaint |
| GTM/team gap (no freight insider) | 40% | No insider with equity by day 60 |
| W&I retrieval friction / ToS | 40% | <70% automated image retrieval across the top 8 carriers by day 75 |
| FAK and contract time bars shrink the pool | 35% | >50% of volume on FAK, or dispute windows of 60 days or less |

**Kill criteria (any one triggers a stop):**
- Fewer than 3 of 15 brokers share 6 months of rebill and W&I exports by day 45.
- Winnable pool below 15%, or below $1.5k per 1,000 shipments, on 300+ corrections across 3 or more partners.
- Recent 3-month correction rate below 65% of the Q4-2025 level, with reclass below 40% of correction dollars.
- More than 50% of volume on FAK, or windows of 60 days or less.
- Automated retrieval below 70% by day 75.
- Live reversal rate below 50%, or any filing pause caused by a carrier complaint.
- No paid pilot of at least $3k/month by day 90.
- Write-off rate below 20% of correction dollars.
- 3 or more of the first 10 prospects say an existing tool (Lighthouz, Transflo, Evos, Loop, TMS) suffices.
- No freight-insider co-founder by day 60.
- Partners won't pay for FTL accessorial expansion.

### Discovery-call script

1. Walk me through the last reweigh/reclass rebill, from invoice to close.
2. How many corrections came in last month? How many had the W&I certificate actually opened? Is that from the TMS or a guess?
3. What share of legitimate corrections gets rebilled to the customer, and how late? Who decides to eat them? Does sales override?
4. When did a rebill last cost you a customer or a big short-pay?
5. Who works these today, at what loaded cost, onshore or offshore?
6. Which window do you actually work against: tariff, customer contract, or the 180-day statute? Have you lost money to a closed window?
7. Which carriers and terminals reverse, and which never do? Has any carrier pushed back on your dispute volume?
8. What have you tried: TMS audit, an audit provider, BPO, Lighthouz, Transflo, Evos, Loop, an internal LLM? Why did you keep it or drop it?
9. If I came back in a week with dollars reversible, never rebilled, and written off, who else must see it?
10. Will you give me last quarter's export under NDA this week? (A yes with a date is the only real signal.)

### Who to call first

- **Priority 1:** LTL billing, carrier settlement or freight audit managers at non-asset, LTL-heavy brokers with 50-500 employees, outside the CHR, WWEX, Echo and TQL orbits. The Controller is the signer. Candidate firms (fit unverified): NTG/FreightPros, Shiptli, Mothership, ShipPeek, ParcelPath, FreightPlus.
- **Fastest signal:** hiring managers posting "LTL Billing Auditor" or "LTL Audit Specialist" roles, for example the Dallas JobLeads/Jooble posting and the Virtual Vocations posting.
- **Also call:**
  - Lighthouz and Transflo customers (Armstrong Transport). Ask what those tools miss.
  - One host-network billing leader, for channel learning only.
- **Don't call first:**
  - Agent offices (no rights).
  - Large 3PLs (they will build in-house).
  - Shippers (often not the bill-to party).
- **Venues:**
  - TIA Capital Ideas
  - SMC3 JumpStart
  - NMFTA Digital LTL Council
  - Transportation & Logistics Council (TLC)
  - r/FreightBrokers

### First 30 days (only if the founder insists on testing this before moving to a less contested dossier)

- **Days 1-5:**
  - Run a teardown of Lighthouz, Transflo and Freehand: demo requests, pricing, which carriers they retrieve W&I images from, whether they handle pass-through packets and customer collections.
  - Send 40 outreach messages to the hiring managers and Sales Navigator lists above.
- **Days 6-15:**
  - Hold 15 discovery calls using the script. The goal is 3 NDA exports. Ask every call: "what does your current tool miss?"
- **Days 16-25:**
  - Hand-adjudicate at least 300 corrections across 3 partners.
  - Split the dollars into three buckets: (a) reversible from carrier images, (b) legitimate but never or late rebilled, (c) FAK-neutralized.
- **Day 30 gate:**
  - **Continue only if** bucket (b) is at least 20% of correction dollars, at least one partner's existing tool missed it, and one Controller agrees to a paid pilot of at least $3k/month for a *rebill-capture / pass-through packet* product (not a dispute bot).
  - Without a freight-insider co-founder lined up by then, drop it.
