# AI Opportunity Hunt: Final Partner Memo

*Date: 2026-10-06. For: the founder (technical, product-minded, small team, limited capital). Supersedes [MEMO-round1.md](MEMO-round1.md), which is kept unchanged for the record.*

---

## 1. TL;DR

- **The one strongest bet is distributor-side SPA / ship-and-debit debit recovery** (score 54, ranked #1 by all three IC personas). Mid-market electrical, HVAC and MRO distributors file special-pricing claims against manufacturers and silently write off the rejections and short-pays. You land with a free 2-week leakage audit, charge 20-25% contingency on recovered dollars, then sell a pre-submission validator. **It fits both founder types.** It is a $5-15M ARR cash-flow business first, and it becomes a venture story only if it turns into a two-sided claims rail.
- **#2: Rulebook Desk** (33), a due-process and enforceability checker for Florida and Texas HOA/condo collection law firms. **It fits a bootstrapper, or a niche-SaaS founder.** Before you build anything, run a cheap test of the one unmeasured number it depends on: how often notice defects void recoveries.
- **#3 (bootstrap only): an LTL rebill and pass-through capture desk** for mid-tier freight brokers (24). It uses the same recovery-desk muscles as #1 in a more crowded market. Pursue it only if you have a freight insider.
- **No candidate is a venture-grade seed check today.** Run validation, not decks.
- **Monday:** build a list of 150 Eclipse/P21 electrical distributors and start booking 25 calls with SPA coordinators, offering the free 12-month leakage audit. Phone SpeedyLabs, Rivvun, AD/IMARK and Epicor the same week.

---

## 2. How this was done

17 consultant scouts produced 116 longlist ideas ([01-longlist.md](01-longlist.md)), which we cut to a 24-idea shortlist. Each shortlisted idea got a deep dive, a 3-lens red team (competition, go-to-market, feasibility) and a judge's score out of 100. A gap round added 8 more, giving 32 judged ideas. A 3-persona IC (seed VC, bootstrapper, PE operator) then picked finalists.

Round 2 re-tested the 7 finalists and the round-1 "horizontal claims engine" thesis with live fact-checks, simulated buyer interviews and pre-mortems. A big-swing sweep deep-dived 5 larger-TAM ideas. A final IC ranked all 13.

**Honesty caveat.** WebFetch was blocked by the egress proxy in every round, and the shared search budget ran out repeatedly. Most "verified" facts come from **search-result snippets, not opened pages**. **Every buyer quote is a role-play composite, not a real interview.** Statute citations marked "from memory" are unverified. Treat dollar figures without a URL as estimates.

---

## 3. Final leaderboard (13 ideas re-tested in round 2)

PWP = promising with pivot. Score arrows show the earlier score → the final score.

| # | Idea | Industry | Model | Final score | Verdict | Venture vs cash-flow | Why, in one line | Dossier |
|---|---|---|---|---|---|---|---|---|
| 1 | Distributor-side SPA / ship-and-debit debit recovery | Industrial distribution (electrical, HVAC, MRO) | B2B | **54** (new; re-scope of the unscored "horizontal engine") | PWP | Cash-flow first ($5-15M ARR); venture only via a two-sided rail | Buyer loses the money and keeps the recovery; structured EDI data; no funded AI-native found | [r3-b2b-claims-engine](dossiers/r3-b2b-claims-engine.md) |
| 2 | Rulebook Desk: due-process engine for FL/TX HOA collection law firms | Community associations / legal | B2B | 42 → **33** | PWP | Niche SaaS ($10-40M ARR, est.) | Sells to the licensed party that bears the risk; rests on an unmeasured defect rate | [r3-swing-4](dossiers/r3-swing-4-rulebook-backed-outsourced-resale-and-enforce.md) |
| 3 | Debit Desk: claims integrity for mid-tier manufacturers | Industrial distribution | B2B | 44 → **32** | Pass | Cash-flow / tuck-in | Wrong side: manufacturers approve 90%+ of claims to keep channel peace | [r1-09](dossiers/r1-09-debit-desk-ai-claims-assurance-and-denial-man.md) |
| 4 | Medicaid frailty evidence copilot (OBBBA) | Medicaid / providers | B2B | 44 → **32** | Pass | Feature / acqui-hire | Real insight, but Fortuna and Perenna are one feature away and demand peaks in 2028 | [r1-11](dossiers/r1-11-medicaid-continuity-ops-outcome-priced-eligib.md) |
| 5 | SecondLook: QC-grade SNAP pre-issuance review | State benefits | B2G | **32** (new) | Pass | Services | Maximus, Nava, SAS, Gainwell and CfA+Anthropic own the feature; RFP sales | [r3-swing-1](dossiers/r3-swing-1-secondlook-qc-grade-pre-issuance-review-for-s.md) |
| 6 | TaxDesk: evidence engine for property-tax appeal firms (+ roll-up) | Property tax | B2B | 42 → **30** | Pass | Cash-flow | Drafting isn't the bottleneck; Reserve Tax and 4+ AI tools set a low price | [r1-14](dossiers/r1-14-taxdesk-for-the-noi-stressed-long-tail-ai-pro.md) |
| 7 | Florida open-permit closeout over licensed private providers | Construction permitting | B2B | 45 → **30** | Pass | $1-5M regional services | Inspektr/Tew & Taylor and Freedom Code already run this model | [r1-01](dossiers/r1-01-licensed-ai-native-private-provider-for-flori.md) |
| 8 | LIHTC independent file reviewer for syndicators | Affordable housing | B2B | 42 → **29** | Pass | $1-5M niche | TenantAudit targets syndicators at $49-99/mo; about 30 buyers | [r2-08](dossiers/r2-08-qualified-occupancy-desk-an-ai-run-syndicator.md) |
| 9 | VSC authorization voice agent for repair shops | Auto aftermarket | B2B | 42 → **28** | Pass | $1-15M services | Payers automate their side (Circuitry.ai); $8-20 per claim | [r1-23](dossiers/r1-23-warranty-revenue-integrity-for-dealers-an-ai-.md) |
| 10 | Union / prevailing-wage payroll verification for MEP subs | Construction payroll | B2B | **28** (new) | Pass | Cash-flow desk | Miter ($78M) computes correctly by design; LCPtracker validates for free | [r3-swing-2](dossiers/r3-swing-2-independent-union-and-prevailing-wage-payroll.md) |
| 11 | ClaimCare: LTCi benefit verification for home care | Senior care | B2B | **28** (new) | Pass | Tuck-in | 3-4 claims per site per year; no eligibility rail | [r3-swing-5](dossiers/r3-swing-5-claimcare-ltci-benefit-verification-and-claim.md) |
| 12 | LTL rebill adjudication / pass-through capture for brokers | LTL freight | B2B | 41 → **24** | Pass (bootstrap-viable) | $5-15M cash-flow | Lighthouz and Transflo sell the exact loop; the pass-through leak is the only open seam | [r1-08](dossiers/r1-08-originproof-a-shipper-side-ltl-tender-evidenc.md) |
| 13 | Workers' comp claim-level statutory ledger | P&C claims | B2B | **24** (new) | Pass | Consultancy | Provable dollars are tiny (CA admin penalties about $1.35M a year statewide) | [r3-swing-3](dossiers/r3-swing-3-claim-level-statutory-ledger-for-workers-comp.md) |

**How to read it.** Round 2 cut every round-1 finalist by 10-17 points, mostly because live searches found funded competitors the scouts had missed. The only score that rose belongs to the idea that changed sides of the transaction. B2C was allowed, but no B2C idea survived. The one serious B2C candidate (total-loss contents) died in round 1 to California regulation and free ChatGPT substitutes.

---

## 4. Top picks

### Pick 1: Distributor-side SPA / ship-and-debit debit recovery. Score 54. IC: VC #1 (conviction 6/10), bootstrapper #1 (7/10), PE #1 (6/10)

**Thesis.** Distributors sell manufacturer product at special pricing agreement (SPA) prices and then claim the difference back as a "debit." Claims go out as EDI 844 and come back as 849 (from memory; verify). Manufacturers reject or short-pay for mechanical reasons: an expired agreement, an end-customer mismatch, a catalog-number suffix, or a ship date outside the window. Ship date governing validity is confirmed by [CMR](https://computermarketresearch.com/automating-ship-and-debit-claims-a-2026-guide-to-channel-roi/). Nobody reconciles the rejections, so they age out and get written off.

The product works in three steps:
1. Ingest 12 months of claims and credits plus the SPA PDFs.
2. Use an LLM to turn the SPAs into versioned rules that a human approves.
3. Re-adjudicate the history deterministically, show leakage by root cause, and generate clause-cited rebuttal packets for claims still inside the window. Then sell a validator that checks claims before they go out.

**Why it's non-obvious.** Round 1 recommended the *manufacturer* side (Debit Desk). Round 2 showed that the manufacturer approves 90%+ of claims for relationship reasons and doesn't want to win. The distributor, the claimant, loses real dollars and keeps the recovery, and its data sits outside Model N, Vistex and Enable. The "horizontal claims engine" survives as internal architecture, not as the pitch.

**Competitors.**
- [Rivvun AI](https://thenextweb.com/news/rivvun-ai-seed-enterprise-spend-recovery-icertis): $7.55M seed (verified), Icertis alumni, horizontal "obligation to settlement." Enterprise and ERP-connected, so probably above Eclipse/P21 distributors (inference).
- [ChannelScaler](https://channelscaler.com/platforms/distributor-back-end-credits-becs-software/) (distributor back-end-credit software), [CMR](https://computermarketresearch.com/ship-and-debit-tool/) (matching tool), [Smyyth](https://www.smyyth.com/outtasking-services/ship-and-debit-audits/) (audit services). All legacy or services.
- [Enable](https://www.enable.com/blog/managing-spas-ship-debit-claimbacks-mdfs-and-more), Vistex and Model N on the manufacturer side.
- [SpeedyLabs](https://blog.speedylabs.ai/ship-and-debit/): possible AI entrant; product unverified.
- [Whitespace](https://www.ycombinator.com/companies/industry/supply-chain) (YC S2026): AI agents for wholesale distributors, the same buyer.
- Adjacent funded deductions AI (Glimpse, Stuut) validates the category but sits on the supplier side.

**What's good.**
- The structured claim-in / coded-response-out primitive fits "LLM extracts, deterministic engine decides."
- Two rounds of search found no funded AI-native competitor on the claimant side. Absence in search is not proof.
- The free audit produces a dollar figure nobody has seen. A CFO or controller signs a contingency agreement with no IT project and no 9-18-month cycle.
- Analyst decisions on exceptions build a compounding rules and data asset.

**What's bad (strongest red-team and pre-mortem hits).**
- **Feature, not company (45%, pre-mortem estimate).** Buying groups (AD, IMARK), Epicor or Whitespace-style startups could bolt it on.
- **Small pool.** Low thousands of mid-market distributors (estimate) at about $20-100k revenue per account (estimate) puts the ceiling near $5-15M ARR without a second wedge.
- **Determinism may break** on verbal exceptions and emailed extensions. Straight-through processing may stall below 50-70%.
- **Cash and politics.** Contingency cash arrives 60-120 days late, and attribution fights follow ("nothing on stuff my team would have won anyway"). Relationship politics cap how hard a distributor will push.
- **Founder fit.** The founder lacks channel-finance domain expertise.

**What buyers said (role-play composites).**
- A ~$350M Eclipse/P21 electrical distributor's SPA manager was the strongest buyer: *"Nobody reconciles rejected 849s against what we actually sold."* *"If you find $300k a year that we're writing off, I'd pay 20 to 25% of what you recover."* They would not sign a 3-year SaaS deal. The CFO signs below about $3k a month. *"If you make us look aggressive, the manufacturer rep calls my VP."*
- A ~$600M lighting manufacturer would not buy: *"We approve something like 90-plus percent of claims because rejecting them costs more than it saves."*

**IC split.** All three ranked it #1 with different emphases:
- **VC:** fund a 90-day validation, not a deck. The upside is a two-sided coded-claims rail plus rebates, billbacks, MDF and price protection.
- **Bootstrapper:** "the only candidate where cash shows up in the first quarter without anyone's permission."
- **PE operator:** the validator, not recovery, is the product that renews. Recovery decays once the backlog is cleared, and a claim filed correctly never needs a fight.

**Kill criteria** (from the dossier):
- **Day 30:** fewer than 25 calls with the exact title, or fewer than 40% of callers can size their rejections.
- **Day 45:** more than 50% say an incumbent, buying group or ERP vendor "handles it," or 3+ VC-backed AI-natives come up unprompted.
- **Day 60:** no 12-month dataset received under NDA.
- **Day 75:** leakage found is below 3x the annual fee, or correct adjudication on real data is below 50%.
- **Day 90:** fewer than 2 signed contingency pilots, or a projected cycle above 9 months.
- **Any time:** building vertical-2 connectors before these tests pass.

**First 30 days.**
- **Days 1-3:** build an ICP list of 150 distributors from NAED, HARDI and buying-group lists, and write a one-page audit offer plus NDA.
- **Days 1-10:** hold 25+ Mom-Test calls (script in dossier §6) and build a taxonomy of rejection codes.
- **Weeks 1-2:** primary checks on SpeedyLabs, Rivvun's down-market intent, ChannelScaler/CMR depth, AD/IMARK/Epicor programs and real 844/849 usage.
- **Days 8-20:** build the thinnest engine: CSV/EDI plus SPA PDFs in, report and spreadsheet out, no UI.
- **Days 15-30:** deliver 3-5 audits and convert them to 60-90-day contingency pilots.
- **Gate:** 25+ calls, 3+ datasets, and at least one audit showing $100k+ a year recoverable. Recruit an ex-SPA manager as advisor or cofounder in parallel.

---

### Pick 2: Rulebook Desk, a due-process engine for FL/TX HOA collection law firms. Score 33 (was 42 before the pivot). IC: #2 for all three (convictions 4, 4, 3)

**Thesis.**
1. An LLM builds a citation-linked "association rulebook" from scanned CC&Rs, amendments, minutes and fine schedules.
2. A deterministic per-state checker rebuilds the notice, cure and hearing history before a fine, lien letter, collection referral or foreclosure notice goes out. Statutes: FL 720.305, 720.3085, 718.116 and 718.303; TX 209.006-.007 and 209.0064 (citations from memory).
3. The output is a cited memo plus corrected notices, sold to the community-association law firms and collection agencies that sign the work.

**Why it's non-obvious.** The original idea, AI-prepared estoppel and resale certificates for management companies, dies three ways:
- Vantaca/HOAi and RealPage/HomeWiseDocs can bundle it for free.
- The manager keeps the fee while the association bears the loss.
- Preparing certificates may be licensed CAM work (Fla. Stat. 468.431(2), unverified).

Moving to law firms puts the product with the party that bears the risk, holds the license, signs the output and recovers fees from the owner.

**Competitors.**
- [Vantaca](https://www.prnewswire.com/news-releases/vantaca-acquires-hoai-to-unlock-a-new-era-of-hoa-community-management-with-cutting-edge-ai-302310780.html): $300M at a $1.25B valuation, Oct 2025; owns HOAi.
- [HomeWiseDocs/RealPage](https://www.realpage.com/news/realpage-agrees-to-acquire-homewisedocs/).
- [Mosaic](https://mosaichoa.com/blog/florida-hoa-estoppel-certificates/), [HOA-OS](https://www.hoa-os.com/), [PayHOA](https://www.payhoa.com/streamline-resale-documents-how-in-app-processing-saves-time/), [CommunityPay](https://www.communitypay.us/concepts/florida-estoppel-certificate-requirements/), [PropLogix](https://www.proplogix.com/services/hoa-estoppels/), [Rexera](https://rexera.com/blog/hoa-resale-package/), HOALife, and Assembly HOA (YC S24).
- No one was found targeting the law-firm buyer. General legal AI (Harvey/CoCounsel-type) is the nearest substitute.

**What's good.**
- **Large, stable base:** about 373k associations, $124.2B in annual assessments, 35.2% of US housing (CAI Foundation; snippet-verified).
- **Real liability:** fines issued without proper notice are unenforceable and can trigger fee-shifting. FL 718.116(8)(c) waives amounts left off an estoppel.
- **Recurring demand:** Florida rewrites association law nearly every session.
- **Counter-cyclical:** collections rise when home sales fall.
- **Concentrated buyers:** a few dozen firms per state, each covering hundreds to thousands of associations.

**What's bad.**
- **The thesis rests on an unmeasured number:** how often defects actually cost recoveries.
- **Slow buyers:** partner-driven firms in a small universe of perhaps 50-100 across FL and TX.
- **Unpaid onboarding:** building each rulebook from scanned CC&Rs is unpaid services work.
- **Licensing and UPL questions remain unverified** (flsenate.gov was blocked).

**What buyers said.** There was no buyer simulation for the law-firm pivot, which is a gap. In the original simulation, management companies would not give up 20-30% of a capped certificate fee.

**IC split.** All three called the pivot clever and ranked it #2, but none would build before measuring the defect rate. The PE operator: "Experienced collection firms already run templated, paralegal-checked workflows."

**Kill criteria.** Kill if any of these holds:
- Defects appear in fewer than about 2% of files.
- No firm will pay at least $25 per file.
- Counsel confirms the pivot itself needs licensure.

**First 30 days (under $2k).**
1. Pay a Florida association attorney for one hour ($300-500) to check 468.431(2), the 718.116(8) waiver text and UPL exposure.
2. Hold 10 calls with FL/TX collection partners.
3. If 2+ say defects happen "often," run 100-200 of their closed files through a spreadsheet-plus-LLM rulebook and measure the defects their attorneys missed.

---

### Pick 3 (bootstrap only): LTL rebill and pass-through capture desk for mid-tier brokers. Score 24 (was 41). IC: bootstrapper #3, VC #6, PE #9

**Thesis.** The NMFC density overhaul (Docket 2025-1, effective 2025-07-19, about 2,000 items, 13 density subs; verified) flooded broker billing queues with reclass and reweigh corrections. Run it as a recovery desk:
- Adjudicate each correction against the carrier's own weight-and-inspection images.
- Dispute the winnable ones.
- Most important, capture the pass-through charges that never get rebilled to the shipper, with customer-ready evidence packets.

**Why it's non-obvious.** The controller's problem is unbilled cost, not disputes. No named competitor attacks that pass-through leak head-on.

**Competitors.**
- [Lighthouz](https://lighthouz.ai/shipment-types/ltl) (YC S24): the same auto-dispute loop.
- [Transflo Workflow AI for LTL](https://www.transflo.com/products/workflow-ai/for-ltl/): launched 2026-01-22 and already owns the broker document flow.
- [Freehand](https://www.freehand.ai/articles/best-ai-freight-audit-and-payment-software), [Evos](https://www.getevos.ai/), and [Loop](https://techcrunch.com/2026/04/17/loop-raises-95m-to-build-supply-chain-ai-that-predicts-disruptions/) ($95M Series C).

**What's good.** Human auditors are paid to do this today (job postings exist). No license is needed. It is capital-light, and it shows dollars within 60 days.

**What's bad.**
- Directly crowded.
- The practical dispute window is often about 30 days, not 180.
- Brokers veto bot disputes.
- About 50-150 meaningful accounts, priced against a $15-60k auditor.
- Backlogs decay as the shock fades.

**What buyers said (role-play).**
- A broker billing manager: *"Most of the $60-90 ones? Nobody touches them. They just age out."* *"I don't want a bot spamming the ODFL or Saia disputes inbox."* $0.50 per shipment is "more than an auditor"; $3-6 per adjudicated correction is "a conversation."
- A large 3PL controller: *"Disputes aren't my problem. Unbilled cost is."* *"I'm not giving you 25% of [my revenue]."*

**IC split.** The bootstrapper sees a profitable small desk. The VC and PE operator see a feature, not a category.

**Kill criteria.** Continue only with a freight-insider cofounder and a controller who will pay for rebill capture that existing tools miss.

**First 30 days.**
1. One mid-tier broker hands over a month of rebills on a share-of-recovered-pass-through basis.
2. Hold 10 calls with broker billing managers and controllers.

---

### Pick 4 (not standalone): Debit Desk, the manufacturer-side mirror of Pick 1. Score 32 (was 44). IC: #3, #4, #3

**Thesis.** Validate incoming distributor SPA debits for mid-tier electrical and plumbing OEMs and return reason-coded 849s.

**Why it still matters.** It is the second side of Pick 1's two-sided claims rail at Series A. It should not be the starting wedge.

**Competitors.**
- [IMA360](https://ima360.com/solutions/) (automated SPA, ship-and-debit and chargeback claim validation).
- Stuut, Glimpse.
- Enable ($120M Series D, Nov 2023, at a $1.12B valuation).
- Vistex, Model N, CMR, Smyyth, Ximple and Vendavo.

**What's good.** a16z money in Glimpse and Stuut validates supplier-side claims AI. Model N and Vistex stay upmarket. The clerk-level pain is real: lines under $500 are auto-approved, and month-end runs in spreadsheets.

**What's bad.**
- Sales leadership blocks short-pays to top distributors, so the value collapses to labor savings (top pre-mortem failure mode, 45%).
- A few hundred OEMs at $40-80k ACV, giving a SAM of roughly $15-30M.
- 9-14-month cycles.
- Real over-claim rates are plausibly 1-3%.

**Kill criteria.** Revisit only with an insider cofounder, a design partner, and evidence that OEMs actually short-pay validated over-claims.

---

## 5. Big swings: what bolder ideas looked like

We ran the sweep to find larger-TAM ideas than round 1's niches. Five were deep-dived. **Four passed, and one survived only by shrinking.**

| Swing | The big version | What happened | Score |
|---|---|---|---|
| **Rulebook Desk** | An AI resale and enforcement back office for 373k associations | Shrank to a law-firm checker (Pick 2) | 33 |
| **SecondLook** | QC-grade review of 100% of SNAP actions as states take on cost share (75% admin share from Oct 2026; benefit cost share from FY2028; snippet-verified) | Maximus, Nava (Google grant), CfA+Anthropic, SAS and Gainwell already ship it; ROI noise (about 1.15pp standard error) matches the tier bands; RFP sales | 32 |
| **Union payroll verifier** | A payroll-agnostic checker that expands into AP, job cost and GL | Miter's $40M Series B on 2026-09-30 ([finsmes](https://www.finsmes.com/2026/09/miter-raises-40m-in-series-b-funding.html)); the checker re-reads the same inputs; discoverable underpayment logs | 28 |
| **ClaimCare** | "Benefits verification for private pay," starting with LTCi | No 270/271-style rail; median site sees 3-4 activations a year; the data holders give help away free | 28 |
| **WC statutory ledger** | A per-claim statutory system of record for WC and casualty | CA's statewide admin penalty pool is about $1.35M (2024); Tower MSA, Verisk and CLARA already sell code governance | 24 |

**Lesson.** Bigger TAM came with worse founder fit: government buyers, systems of record, or funded leaders already in place. Spin-offs worth a fresh scout (not validated): a daily claims-QA copilot for mid-size TPAs, a multi-payer "private-pay funding desk" for senior care, and structured LTCi intake for carriers.

---

## 6. The rest of round 1 (not re-tested in round 2)

Round-1 scores, never live-verified. Round 2 cut finalists by 10-17 points, so discount these similarly.

| Idea (as pivoted) | Score | Good | Bad |
|---|---|---|---|
| LTC Medicaid lookback workbench for eligibility firms ([r1-12](dossiers/r1-12-payer-conversion-desk-ai-run-service-that-get.md)) | 42 | Under-tooled, fast-buying intermediaries | OBBBA urgency fades; $20-35M ceiling |
| School-provider Medicaid documentation checker ([r1-13](dossiers/r1-13-free-care-claiming-engine-an-ai-enabled-reven.md)) | 41 | Provider-side buyers move fast | PCG owns the data; zero error tolerance |
| Claims QA for casualty MGAs ([r2-01](dossiers/r2-01-da-census-audit-an-ai-native-audit-firm-for-d.md)) | 41 | Defense side lags plaintiff AI | Needs an insider; discoverability veto |
| Subcontract Rights Guard ([r1-03](dossiers/r1-03-subcontractor-cash-leak-finder-a-contingency-.md)) | 40 | Intervenes at contract signing | One feature away for Adaptive, Siteline and Trimble |
| Delegated claims exposure scan → AI TPA ([r1-04](dossiers/r1-04-demand-shield-tender-desk-time-limited-demand.md)) | 40 | Real time-limited-demand clocks | Endgame needs licenses and capital |
| Third-party damage recovery for utilities and DOTs ([r1-05](dossiers/r1-05-recovery-audit-for-the-risk-bearer-ai-run-sub.md)) | 40 | Liability already documented in 811 tickets and police reports | Slow public procurement; incumbent recovery vendors unchecked |
| Delegated-authority oversight for fronting carriers ([r1-06](dossiers/r1-06-exposure-assurance-ai-native-premium-audit-an.md)) | 40 | Fronts are a hidden lever | Incumbents keep the AI savings |
| Pre-death beneficiary remediation for credit unions ([r1-16](dossiers/r1-16-bereavement-desk-ai-run-deceased-customer-ser.md)) | 40 | Priced per member; no payout liability | Post-death operations don't pencil out |
| Inbound warranty-claim triage for sponsor banks ([r1-24](dossiers/r1-24-warranty-recovery-desk-contingency-priced-ai-.md)) | 40 | Budget, deadlines, exam pressure | Check volume shrinking |
| Air Headroom: parcel-level air-capacity data ([r2-05](dossiers/r2-05-behind-the-meter-air-desk-ai-enabled-air-perm.md)) | 40 | A genuinely new data asset | Niche ($20-60M, est.), cyclical |
| Mineral-fund get-in-pay / owner relations ([r1-22](dossiers/r1-22-suspense-desk-heirship-registry-ai-curative-f.md)) | 39 | Funds lose IRR monthly | Heirship backlog is legally low-value |
| Data-center controls readiness ([r1-02](dossiers/r1-02-ai-native-commissioning-firm-for-liquid-coole.md)) | 38 | Deterministic point verification | OEMs absorbing commissioning |
| Mass-tort damages workup ([r1-17](dossiers/r1-17-total-loss-contents-and-depreciation-recovery.md)) | 38 | Provenance-tagged evidence | CA SB 872 removes the consumer pain |
| Importer duty-minimization engine ([r1-07](dossiers/r1-07-surchargeaudit-recovery-audit-of-tariff-surch.md)) | 37 | Tariff churn is permanent | Refund law weak; 3 kill votes |
| Small-utility rate studies ([r2-06](dossiers/r2-06-docket-desk-proceeding-intelligence-and-disco.md)) | 37 | LCRI/PFAS force rate cases | Down-market buyer unproven |
| Environmental DD pre-LOI screening ([r1-18](dossiers/r1-18-desktop-first-ai-native-environmental-due-dil.md)) | 36 | Real parcel-screening demand | EDR/LightBox control the data |
| Importer risk scoring for customs sureties ([r1-20](dossiers/r1-20-order-enforcement-intelligence-an-ai-evidence.md)) | 36 | Sureties carry the risk | Small market; bounty fragility |
| LiftLedger, elevator contracts ([r1-19](dossiers/r1-19-liftledger-an-owner-side-contract-and-uptime-.md)) | 37 Pass | Real overcharging | $0 price anchor; LTV/CAC below 1 |
| TraceProof, aviation paperwork ([r2-04](dossiers/r2-04-traceproof-verifying-the-paperwork-on-aviatio.md)) | 37 Pass | Real fraud risk | Signed e-certs make verification free |
| SSA disability recognition ([r1-15](dossiers/r1-15-disability-recognition-engine-an-ai-native-ss.md)) | 36 Pass | Clear offset value | Fee stacking likely barred |
| Guaranty Shield, SBA servicing ([r2-02](dossiers/r2-02-guaranty-shield-an-ai-run-back-office-for-sba.md)) | 36 Pass | Real purchase denials | Scanning creates False Claims Act knowledge |
| CUI scope-shrinker ([r1-10](dossiers/r1-10-cui-native-shop-workspace-a-cui-safe-rfq-inbo.md)) | 33 Pass | CMMC deadline | Mechanism logically impossible |
| Taft-Hartley audit engine ([r2-07](dossiers/r2-07-ai-payroll-compliance-audit-engine-for-buildi.md)) | 33 Pass | Real delinquency | Every gatekeeper loses from it |
| Box Liberation, records disposition ([r1-21](dossiers/r1-21-defensible-disposition-as-a-service-ai-audit-.md)) | 31 Pass | Huge box stock | About $2 per box, once |
| GapList Zero, pipeline records ([r2-03](dossiers/r2-03-gaplist-zero-ai-run-records-sprints-that-take.md)) | 30 Pass | Regulatory deadline | Backlog is adversely selected |

---

## 7. Graveyard and the rules it taught

1. **Sell to the side that loses money and keeps the recovery.** Debit Desk flipped to SPA recovery; estoppel QA moved from managers to law firms. *Killed by this rule:* Debit Desk, the original Rulebook, LiftLedger.
2. **If the payer or data holder controls the channel, you lose.** *Killed:* VSC voice agent (administrators automate and can block AI callers), ClaimCare (carriers hold the binding facts), WC ledger (the TPA holds the data and is the party audited).
3. **If the scarce asset is a license, the licensee wins.** *Killed:* FL permits (license plus E&O), LIHTC (HCCP sign-off), TaxDesk (representation rights).
4. **Government RFPs and partner-driven buyers kill capital-light teams.** *Killed:* SecondLook, Medicaid frailty.
5. **A checker that reads the same inputs as the system it checks finds only arithmetic errors.** *Killed:* union payroll verifier.
6. **Finding the defect can create the liability.** *Killed:* Guaranty Shield, WC look-back, union-payroll flag logs.
7. **Cutting the time to draft a document is not a business** when drafting isn't the bottleneck and a general LLM is a free substitute. *Killed:* TaxDesk, LTCi packets.
8. **Recovery revenue decays; prevention renews.** Every contingency idea needs a validator or prevention product behind the audit.
9. **Buyer-universe math.** Fewer than about 300 logos at under $50k ACV never made the cut.

---

## 8. Cross-cutting insights

### Crowding map: where AI-native money already is (October 2026)

Funding amounts are verified only where a URL is given; the rest are snippets.

| Area | Funded players |
|---|---|
| CPG / supplier deductions | Glimpse ($52M), Stuut ($29.5M), HighRadius agents. **Crowded.** |
| Freight audit / LTL | Loop ($95M C, $210M total), Lighthouz (YC S24), Transflo, Freehand, Evos. **Crowded.** |
| Construction payroll | Miter ($78M), Trayd ($15M). **Crowded.** |
| Construction workflow / permitting | PermitFlow ($54M B), Adaptive ($30M B), Trimble/Document Crunch. **Crowded.** |
| HOA management | Vantaca/HOAi ($300M at $1.25B), RealPage/HomeWiseDocs. **Bundled.** |
| Medicaid access | Fortuna ($22.3M), Perenna, Equifax/Experian verification. **Crowded.** |
| SNAP eligibility | Maximus, Nava, CfA+Anthropic, SAS, Gainwell. **Owned.** |
| Warranty / VSC | WarrCloud (about $40M), Forge AI, Circuitry.ai (payer side). **Crowded.** |
| Property-tax appeals | Ownwell ($74M), Reserve Tax, 4+ firm-facing tools. **Crowded.** |
| LIHTC compliance | TenantAudit, Pronto, Tire Swing, LeaseBase. **Crowded at a low price.** |
| WC / claims AI | CCC/EvolutionIQ (about $730M), CLARA, FurtherAI. **Crowded.** |
| Horizontal contract-to-settlement recovery | Rivvun ($7.55M seed). **Narrative taken.** |
| **Still open (no funded AI-native found; unverified absence)** | **Distributor-side SPA/ship-and-debit recovery**, HOA collection-firm due process, outbound VSC authorization calls, broker pass-through capture, and round-1 untested niches (air-capacity data, small-utility rate studies, asset-owner damage recovery) |

### Patterns that survive

- **"LLM extracts the rules, a deterministic engine recomputes, output is clause-cited evidence" is now table stakes.** Every dossier rediscovered it, and in most verticals a funded player or the system of record already has it. It is not a moat.
- **The moat is positional:**
  1. Sit on the side of the transaction that bears the loss.
  2. Use data the buyer can export without IT or an incumbent's API.
  3. Hold data rights that compound across customers.
  4. Have a credible path to a two-sided rail.
- **The right land motion is a free audit that produces a dollar figure, then contingency, then a subscription for prevention.**
- **Rule-change cadence is a durable demand driver** (Florida association law, NMFC dockets, OBBBA), but only when the rule change hits the party who pays.

### Trajectories to watch

- **OBBBA Medicaid work requirements** go live in more states (Iowa 2026-12-01). The frailty definition is being litigated (25 states plus DC). The self-attestation cap starts in 2028.
- **SNAP state cost share** (FY2028 onward) will keep states buying error-reduction tools from incumbents.
- **NMFC follow-on dockets in 2026** (an ODFL page suggests more).
- **Vertical AI consolidation** (Vantaca/HOAi, CCC/EvolutionIQ, Trimble/Document Crunch) means a tuck-in exit is the realistic base case for most ideas here.

### The "horizontal B2B claims engine" thesis

**Still supported as architecture, dead as a seed pitch.**
- Rivvun has the narrative and pedigree.
- Two of the four proposed starting verticals are funded AI-native categories.
- Every simulated buyer wanted a tool built for its own portals and codes ("I don't care that it also does freight rebills").

Build the engine internally and win vertical 1 (distributor SPA recovery). Earn the horizontal story at Series A with about $1M ARR and about 10 referenceable distributors, then extend to rebates, billbacks, MDF and price protection, or to VSC TPAs as a backup wedge.

---

## 9. Open questions: what we could not verify

1. **Real SPA leakage per distributor.** All leakage figures are vendor marketing or role-play. This is the load-bearing number for Pick 1.
2. **SpeedyLabs:** live product, customers, and whether it serves distributors outside foodservice.
3. **Rivvun:** down-market intent and the exact month of its round.
4. **Buying groups and ERPs:** whether AD, IMARK or Epicor (Eclipse/P21) already offer claim recovery.
5. **EDI 844/849 usage** across mid-market electrical, HVAC and MRO, versus portals and email (from memory).
6. **The HOA notice-defect rate**, plus Fla. Stat. 468.431(2) scope and the full 718.116(8) / 720.30851 waiver text (flsenate.gov was blocked).
7. **Whether any real buyer says what the composites said.** No real interviews were conducted.
8. **The mid-market distributor count** ("low thousands" is an estimate; size it from NAED and HARDI membership).
9. **Round-1 ideas never re-tested live** (§6). Their scores are likely inflated in the same way the finalists' were.

*Files: [MEMO-round1.md](MEMO-round1.md) · [01-longlist.md](01-longlist.md) · [dossiers/](dossiers/). Read first: [r3-b2b-claims-engine](dossiers/r3-b2b-claims-engine.md) (day-30 gate, call script, kill criteria), then [r3-swing-4](dossiers/r3-swing-4-rulebook-backed-outsourced-resale-and-enforce.md).*
