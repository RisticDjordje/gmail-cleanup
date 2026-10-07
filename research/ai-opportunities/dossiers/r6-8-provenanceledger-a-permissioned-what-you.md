# ProvenanceLedger

**One-liner:** A permissioned engine that turns a person's photo library, order history, card charges and receipts into a deduplicated, valued, evidence-linked schedule of what they owned. The first buyer would be wildfire mass-tort plaintiff firms, followed by public adjusters, subrogation teams, carriers and a prosumer home ledger.

**Score: 38/100. Verdict: PASS as the primary company.** Keep the entity-resolution engine as a reusable capability. For calibration, 54 was the best idea under the old generic profile and 70+ is compelling. Inputs: base dossier 40, steelman ~52, competition/GTM skeptic 37, tech/regulatory skeptic 30-35.

## Rubric (this founder)

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 6 | Matching one item across sources and inferring where it lived is real ML and systems work. Item detection and valuation are free (Bevel, ChatGPT). Precision is the only moat, and there is no scalable ground truth to train it on. |
| no_domain_required | 7 | No license is needed because the firm or adjuster is the attesting party. Trust within the plaintiff bar still matters. |
| bootstrap_to_raise | 3 | Revenue follows litigation dockets. SCE's Eaton direct program closes Nov 30, 2026. Damages discovery ran Jan-Mar 2026 and the bellwether trial starts Jan 25, 2027. Formula valuation and no-inventory advances shrink demand. |
| product_not_services | 5 | The software has cheap compute (~$3-5/claimant), but a sworn proof of loss forces human QA and attestation on every schedule. |
| market_size | 3 | The wedge is about $1-5M/yr and lumpy. The SAM without carriers is about $20-60M. $100M+ depends on carrier adoption or a prosumer breakout, both unproven. |
| whitespace | 4 | Bevel, ProofList, ClaimLedger AI, ClaimReady and Invntry all launched after the LA fires. Supio and EvenUp own the plaintiff-firm relationships. Verisk and Encircle own the carrier and restorer side. |
| gtm_without_network | 4 | Each docket has about 5-15 elite firms whose decisions run on relationships. Public adjusters can be found through state license lists, which is the one cold-outbound channel. |

## Thesis

The defensible product is not "AI lists your stuff from photos," which is already commoditized. It is a high-precision ownership ledger with these properties:

- Photo libraries are scanned on the device with PhotoKit and MediaStore, which works around the Google Photos Library API restriction and the lack of an iCloud API.
- Retailer exports and receipts are parsed.
- Items are matched to SKUs.
- Each physical item is merged across sources (order + card charge + 40 photos = one sofa).
- Photos from other homes are flagged, returns cancel items, depreciation is calculated, and every line carries a hash-anchored evidence pointer.

This is a good engineering fit for an applied-AI full-stack engineer with B2C instincts, because claimant drop-off is a consumer-UX problem. The weakness is commercial. The wedge buyer is small and lumpy, the timing has largely passed for Eaton, and the scale buyer (carriers) is structurally hostile to a claimant-side tool that raises severity.

## Workflow today

- **Survivors** rebuild 1,000-5,000 lines by hand from Amazon exports (which can take up to ~30 days), card statements, email and memory. Many take a no-inventory advance instead. California insurers historically paid 75-100% of contents limits without itemization. For Eaton, United Policyholders cites up to 30% of contents, capped at $250k, with no inventory.
- **Insurers** price contents through Verisk XactContents/ClaimXperience, Enservio and Cotality.
- **Utility programs:**
  - SCE Eaton: more than 4,000 claims covering about 12,000 individuals and entities, more than $775M offered, closing Nov 30, 2026.
  - The PG&E Fire Victim Trust valued personal property by formula from structure attributes. Receipts and photos were optional.
- **Plaintiff firms** have paralegals build damages spreadsheets with no evidence schema. Defense experts attack them.
- **Free consumer AI** (Bevel and others) already produces photo-to-inventory spreadsheets.

## TAM (estimates unless marked)

- **A. Utility-wildfire workup:** 18k Eaton plaintiff households (verified), times 25-40% who need itemization, times $150-500, gives **$0.7-3.6M per mega-docket**. There are about 0.5-2 such dockets a year.
- **B. Non-catastrophe and catastrophe total-loss contents** (public adjusters, restorers, firms): about 100-230k claims at $150-400, giving **$20-40M realistic**.
- **C. Carrier verified-contents intake:** 1-2M claims at $20-80, giving $20-160M theoretical. Depends on carrier adoption.
- **D. Prosumer home ledger:** historically weak willingness to pay. Under $10-30M serviceable without bundling.

## Competitors

| Company | What | Scale |
|---|---|---|
| Bevel | Free AI photo/video inventory for fire survivors | $500K seed (Jan 2026) |
| ProofList | Photo inventory with a free trial, then paid | Small |
| ClaimLedger AI | Cheaper alternative to a public adjuster's 10-15% fee | Early |
| ClaimReady | CV home inventory and valuation | PitchBook profile; funding unknown |
| Invntry (Sputnik Digital) | Inventory tool for insurers and policyholders | Launched Apr 2025 |
| Supio | Mass-tort AI for plaintiff firms | $25M Series A+ |
| EvenUp | PI demand letters, expanding into mass torts | Unicorn-scale |
| Verisk XactContents / ClaimXperience | Carrier contents pricing and policyholder portal | Public incumbent |
| Encircle | Restorer/adjuster contents documentation | VC-backed |
| BrownGreer, Epiq, JND, Kroll | Settlement administrators | Large services firms |
| ChatGPT / Gemini connectors | Free or $20/mo horizontal substitute | Platform |

## Why tech is (and is not) the moat

- **Not a moat:** object detection, rough valuation, and spreadsheet export.
- **Moat candidates:**
  1. Calibrated cross-source entity resolution.
  2. Residence and ownership inference (EXIF clustering, scene re-identification, returns and resales).
  3. A SKU-level price and depreciation dataset.
  4. On-device full-library ingestion.
  5. An auditable, hash-anchored evidence schema. Its value depends on adoption by administrators, which is unproven.
- **Compounding asset:** reviewer corrections become match and ownership labels, which lower QA minutes per claim.
- **Problem:** nobody can label "owned on the fire date" at scale, so the flywheel starts empty and gets feedback slowly and noisily.
- **Overall defensibility:** medium-low.

## Wedge → path to scale

1. **Wedge:** a per-claimant ledger for one firm's high-value Eaton claimants who expect to beat the formula. Pricing is $200-500 per claimant with a $5-15k pilot minimum, led by a "delta vs. formula" screen.
2. **6-18 months:** public adjusters and restorer pack-out teams for base-load total losses; then hurricane and condo-collapse plaintiffs and subrogation units. Insurers suing SCE need line-level proof too.
3. **18-36 months:** a carrier "verified contents submission" API or a prosumer ledger distributed through embedded insurance, warranty or renters MGAs.
4. **Odds:** about 10-20% for a $100M+ outcome. The likelier outcome is a $5-20M ARR niche or an acquisition by Supio, EvenUp, Verisk or Encircle.

## Steelman summary

The Hover analog fits: phone-captured property evidence moved from contractors to carrier intake and reached a $490M valuation with insurers as strategic investors. On the bull view:

- Precision, not detection, is the gap Bevel cannot close on $500K.
- Formula floors make the delta screen the hook.
- Public adjusters provide base load and a direct fee incentive, and they are findable cold.
- More than 100 insurers suing SCE over up to $17.5B of losses could make subrogation a budget buyer.

Bull score: ~52. That is still below 70 unless a carrier or administrator commits to accept machine-provenance schedules.

## Skeptic summary

- **Competition and GTM (37):**
  - At least five post-fire competitors already exist.
  - There are about 5-15 relationship-driven buyers per docket.
  - Eaton's discovery and trial calendar means a month-3 product arrives too late.
  - QA labor makes it look like services.
  - The scale path needs carriers, who do not want it.
- **Tech and regulatory (30-35):**
  - A sworn proof of loss needs near-0% false ownership, while automated precision is plausibly 85-95%.
  - There is no ground truth.
  - Survivors may have lost their phones, and heirlooms and art usually have no receipts.
  - One bad line invites fraud allegations.
  - Selling direct to policyholders risks public-adjuster licensing (CA 15027, FL 626.854; unverified).
  - Full-library scanning creates heavy privacy exposure.

## What's good

- It fits the founder's applied-AI and full-stack skills almost exactly: on-device vision, entity resolution, calibrated confidence, and a consumer app.
- No credentials are required, and capital needed is under $50k.
- Compute COGS is tiny (~$3-5 per claimant).
- The engine is portable to subrogation, public adjusters, carrier intake, estates and moves.
- There are plausible acquirers (Supio, EvenUp, Verisk, Encircle).

## What's bad

- The wedge market is single-digit $M and episodic. Eaton's window is closing.
- Formula valuation and no-inventory advances regulate the pain away.
- The consumer itemization job is already free.
- Human attestation keeps margins services-like until precision is proven.
- The buyer is a relationship-driven elite trial bar, which is weak GTM for an outsider.
- The venture path needs a structurally hostile buyer.

## Build plan

**Architecture**

1. Native iOS capture: PhotoKit, Vision and Core ML on the device; only crops, perceptual hashes and EXIF are uploaded.
2. Ingestion of retailer CSVs, card CSVs, and a Gmail Takeout mbox or forwarding address (to avoid CASA).
3. Extraction: deterministic parsing plus cheap LLM JSON extraction plus vision SKU candidates.
4. Embeddings in pgvector and a catalog/price lookup.
5. Entity resolution: blocking, pair scoring, LLM adjudication only for ambiguous pairs, then clustering with calibrated confidence.
6. Deterministic checks: returns, GPS residence flags, post-fire dates, depreciation.
7. A reviewer queue sorted by dollar value × uncertainty, with one-pass claimant attestation.
8. Output: XLSX and PDF exhibits with a SHA-256 hash on every line, a Merkle root with an RFC 3161 timestamp, and a formula-delta report.

**Stack:** Swift; Python with FastAPI; Postgres and pgvector; S3; RQ or Celery; a Next.js reviewer UI; a pytest eval harness on a gold set.

**Weekends 1-4**

| Weekend | Build | Demand test |
|---|---|---|
| 1 | Notebook pipeline on own and friends' data; 300-item gold set | Email 10 wildfire firms and 15 public adjusters a redacted sample |
| 2 | Reviewer UI, export, delta calculator | Concierge offer: 3 claimants at $200 each |
| 3 | iOS TestFlight scan and upload | Process pilots and time QA minutes |
| 4 | Attestation and hash anchoring | Go/no-go on kill criteria |

**Data flywheel:** reviewer corrections become match pairs (reranker), residence labels and price/depreciation data. All three carry over to other buyers.

**Hardest risk:** at least 95% ownership precision after review, at under 45 QA minutes per household and over 70% recall of items above $500. If the week-1 gold-set test misses these, stop; firm interest will not fix it. Also test a 20k-photo scan on an older iPhone for battery and background limits.

## Bootstrap-to-raise plan (months 0-12)

- **Month 0 (Oct 2026):** gold-set precision test; 25 conversations with public adjusters (license lists), 5 with subrogation counsel and 10 with Eaton firms.
- **Month 1:** concierge pilots at $150-400 per claim with 2-3 public adjusters. One Eaton litigated-tail pilot if a firm bites. Target: first $2-5k.
- **Month 2:** iOS app; measure QA minutes and the dollar uplift versus formula or adjuster baseline.
- **Month 3:** convert to per-claim contracts with 5+ public adjusters or restorer pack-out arms. Target: $10-20k cumulative.
- **Months 4-6:** subrogation pilot (line-level proof for one insurer's SCE recovery). Free claimant tier through United Policyholders or LTRGs for data. Target: $50-150k run-rate.
- **Months 7-9:** repeat purchase without the founder in the loop; QA under 30 minutes per claim.
- **Months 10-12:** carrier or administrator LOI.

**Fundable milestone:** a carrier or claims administrator commits in writing to accept and route verified-contents submissions, plus at least 10 repeat professional buyers, at least $15k MRR, and at least 95% ownership precision. Without the carrier or administrator signal, this is a niche, not a venture.

## Cofounder needed

- **Not required to start.** The best addition would be a claims insider: an ex-public adjuster, an ex-carrier contents or subrogation lead, or a plaintiff-side claims consultant. This person brings buyer trust and acceptance by administrators.
- **A second technical founder is lower priority.** A mobile/CV specialist would help only if the on-device scan becomes the bottleneck.

## First 30 days

1. Hand-label 300 items from 3 households and measure dedup and ownership precision and recall plus QA minutes.
2. Make 40 outbound conversations (public adjusters, subrogation counsel, Eaton consortium firms, Corey Gibbs).
3. Get one paid concierge pilot at $150+ per claim.
4. Confirm the regulatory boundary: sell only to licensed professionals, with no contingency fees.
5. Decide by day 30 whether to continue or fold the engine into a broader "personal data → structured evidence" platform.

## Kill criteria

- No paid pilot at $150-200+ per claim within 60 days of 40 buyer conversations.
- Ownership precision below 95% or QA above 45 minutes per household after review.
- Firms or adjusters say formula or no-inventory paths make itemization moot.
- No carrier or administrator willing to discuss accepting machine-provenance schedules by month 9.
- Public adjusters do not reorder without founder hand-holding.

## Sources

- SCE claims: https://www.sce.com/claims
- BusinessWire (SCE Eaton offers): https://www.businesswire.com/news/home/20260730834716/en/
- BusinessWire (Eaton plaintiffs): https://www.businesswire.com/news/home/20260804438821/en/
- PG&E Fire Victim Trust Claims Resolution Procedures: https://www.firevictimtrust.com/Docs/Fire Victim Claims Resolution Procedures.pdf
- Bevel (NBC LA): https://www.nbclosangeles.com/news/local/bevel-new-app-helps-document-belongings-disaster-palisades-fire/3800554/?amp=1
- Bevel funding (vcbacked.co): https://www.vcbacked.co/company/bevel
- ProofList (Trustpilot): https://www.trustpilot.com/review/proof-list.com
- ClaimReady (PitchBook): https://pitchbook.com/profiles/company/1459576-36
- Invntry (Beinsure): https://beinsure.com/news/sputnik-digital-launches-ai-tool-invntry/
- Supio Series A (BusinessWire): https://www.businesswire.com/news/home/20240827541338/en/
- Eaton trial dates (Casey Gerry): https://caseygerry.com/blog/new-eaton-fire-trial-dates-announced/
- Eaton damages discovery (Daily Journal): https://dailyjournal.com/article/385336-judge-orders-damages-discovery-to-start-in-eaton-fire-case
- Contents workshop (United Policyholders): https://uphelp.org/events/contents-personal-property-insurance-claim-help-workshop-2-2/
- Google Photos Library API changes: https://developers.googleblog.com/en/google-photos-picker-api-launch-and-library-api-updates/
- Hover Series D (TechCrunch): https://techcrunch.com/2020/11/17/hover-secures-60m-for-a-3d-imaging-platform-used-to-assess-and-fix-properties/
- Courthouse News (insurers vs. SCE): https://courthousenews.com/socal-edison-sidesteps-insurers-inverse-condemnation-bid-over-eaton-fire/
- Edison International SEC 8-K: https://www.sec.gov/Archives/edgar/data/0000827052/000082705225000081/eix-20250915x8k.htm
- CDI personal property bulletin: https://www.insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/ResidentialPersonalPropertyCoverageForWildfireInsuranceClaims.pdf
- Prior dossier: research/ai-opportunities/dossiers/r1-17-total-loss-contents-and-depreciation-recovery.md
