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
