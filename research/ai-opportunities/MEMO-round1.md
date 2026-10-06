# AI Opportunity Hunt: Partner Memo (Round 1)

*Date: 2026-10-06. Audience: the founder (assumed technical and product-minded, small team, limited capital).*

> **Read this first.** No live web verification was possible in the late stages of this run. The shared 200-search budget was used up, the proxy blocked direct fetches, and the dossiers contain no source URLs. Market sizes, competitor funding and statutory details come from scout notes and model knowledge up to mid-2026. Treat them as **estimates to verify**, not facts. Section 8 lists the load-bearing claims to check before you spend any money.

---

## 1. TL;DR

**Top 5 picks**
1. **Claims Integrity for mid-tier manufacturers** (Debit Desk, pivoted). AI validates the special-pricing-agreement (SPA) and ship-and-debit claims that distributors send to $100M-$3B electrical, plumbing and foodservice manufacturers. Pure software, no license, and the same engine extends to other industries. *Two of the three investment-committee (IC) reviewers ranked it #1.*
2. **TaxDesk**: an evidence engine for licensed property-tax appeal firms, plus buying retiring consultants' client books (Form 50-162 agent designations) with seller financing. Contingency fees prove willingness to pay, and it is the best cash-flow business on the list.
3. **Florida open-permit closeout**: resolve open permits that surface at real-estate closings, sold through title agents. Licensed private providers sign; you route the work and own the evidence. A deadline-driven payer, cheap to test, Florida-only.
4. **Medicaid hours and exemption evidence rail**: clinician-signed exemptions plus home-care visit logs (EVV) and payroll hours for the OBBBA Medicaid work requirements (from about Jan 2027). Big if states accept the evidence; heavily exposed to policy.
5. **Vehicle service contract (VSC) claims agent for repair shops**: voice AI handles adjuster authorization calls across many warranty administrators. The one place where the "revenue-cycle management (RCM) for X" analogy really holds. Unverified.

**Single strongest recommendation:** spend the next 2-4 weeks validating **manufacturer-side SPA claims integrity**. Build it as the **first vertical of a horizontal "B2B claims adjudication engine"**: contract in, claim in, validate, reason-coded response out. Design it to carry over to VSC claims, LTL freight rebills and foodservice deviations. If you would rather run a cash-flowing operating company than raise venture money, **TaxDesk's book roll-up** is the better path.

---

## 2. Method

1. Scouts produced a longlist of traditional, large-TAM US industries ([01-longlist.md](01-longlist.md)), shortlisted into 24 round-1 ideas and 8 gap-round ideas.
2. Each idea got a deep dive, then a 3-lens red team (competition, go-to-market, feasibility) with kill votes and pivots, then a judge's score out of 100 and a verdict.
3. Round-1 lessons were fed back into the gap round (`r2-*`).
4. Three IC personas ranked the finalists: a seed VC, a bootstrapper and a PE operator.

---

## 3. Leaderboard (all 32 judged ideas)

Verdicts: **PWP** = promising with pivot. **Pass** = do not pursue. "K" = number of red-team kill votes.

| # | Idea (as pivoted) | Industry | Model | Score | Verdict | One-line why | Dossier |
|---|---|---|---|---|---|---|---|
| 1 | FL open-permit closeout + inspection evidence layer over licensed signers | Construction permitting | B2B | 45 | PWP (K0) | The payer has a closing deadline; you route work to licensed signers. Florida-only, statute unverified | [r1-01](dossiers/r1-01-licensed-ai-native-private-provider-for-flori.md) |
| 2 | Debit Desk → manufacturer claims integrity (SPA / ship-and-debit) | Industrial distribution | B2B | 44 | PWP (K0) | First-party data, accuracy-aligned incentives, $100-400k ACV, extends to other verticals | [r1-09](dossiers/r1-09-debit-desk-ai-claims-assurance-and-denial-man.md) |
| 3 | Medicaid continuity → exemption and hours evidence engine | Medicaid / safety net | B2B | 44 | PWP (K0) | Dated statutory shock; evidence the state can't get itself. Political and timing risk | [r1-11](dossiers/r1-11-medicaid-continuity-ops-outcome-priced-eligib.md) |
| 4 | Payer-Conversion → long-term-care Medicaid lookback workbench for eligibility firms | Skilled nursing revenue cycle | B2B | 42 | PWP (K0) | Under-tooled, sells fast, but the OBBBA urgency mostly disappears; ceiling around $20-35M | [r1-12](dossiers/r1-12-payer-conversion-desk-ai-run-service-that-get.md) |
| 5 | TaxDesk → evidence engine for licensed filers + book roll-up | Property tax appeals | B2B | 42 | PWP (K0) | Proven contingency willingness to pay; representation rules protect a vendor. Cyclical tailwind | [r1-14](dossiers/r1-14-taxdesk-for-the-noi-stressed-long-tail-ai-pro.md) |
| 6 | Dealer warranty → VSC claims voice agent / fleet warranty / warranty BPO roll-up | Auto fixed ops | B2B | 42 | PWP (K0) | Franchised OEM warranty is dead; the VSC multi-payer pivot is unverified | [r1-23](dossiers/r1-23-warranty-revenue-integrity-for-dealers-an-ai-.md) |
| 7 | Qualified Occupancy → independent LIHTC file reviewer for syndicators | Affordable housing compliance | B2B | 42 | PWP (K0) | Independence becomes a feature; only 20-40 buyers | [r2-08](dossiers/r2-08-qualified-occupancy-desk-an-ai-run-syndicator.md) |
| 8 | OriginProof → rebill adjudication agent for LTL 3PLs | LTL freight | B2B | 41 | PWP (K1) | Real regulatory shock (July 2025 freight-class change); crowded agent market | [r1-08](dossiers/r1-08-originproof-a-shipper-side-ltl-tender-evidenc.md) |
| 9 | Free-Care → Medicaid-readiness documentation checker for school-service providers | K-12 school Medicaid | B2B | 41 | PWP (K0) | Provider-side buyers move fast; PCG owns the data; zero error tolerance | [r1-13](dossiers/r1-13-free-care-claiming-engine-an-ai-enabled-reven.md) |
| 10 | DA Census → claims QA for casualty MGAs + evidence room for capacity providers | Specialty P&C | B2B | 41 | PWP (K0) | Vanta-style flip; needs an insider co-founder; overlaps #12 | [r2-01](dossiers/r2-01-da-census-audit-an-ai-native-audit-firm-for-d.md) |
| 11 | Subcontract Rights Guard (bid-vs-subcontract diff, rights calendar) | MEP subcontractors | B2B | 40 | PWP (K2) | Right moment to intervene; one feature away for Adaptive, Siteline and Trimble | [r1-03](dossiers/r1-03-subcontractor-cash-leak-finder-a-contingency-.md) |
| 12 | Demand Shield → delegated claims exposure scan → AI-native TPA | P&C bodily-injury claims | B2B | 40 | PWP (K0) | Plaintiff-AI arms race is real; the endgame needs licenses and capital | [r1-04](dossiers/r1-04-demand-shield-tender-desk-time-limited-demand.md) |
| 13 | Recovery Audit → third-party damage recovery for asset owners (utilities, DOTs) | Subrogation | B2B | 40 | PWP (K0) | Liability already documented in 811 locate tickets and police reports; slow public procurement | [r1-05](dossiers/r1-05-recovery-audit-for-the-risk-bearer-ai-run-sub.md) |
| 14 | Exposure Assurance → delegated-authority oversight for fronting carriers | Premium audit / P&C | B2B | 40 | PWP (K0) | Fronts are the hidden lever; incumbents keep the AI savings | [r1-06](dossiers/r1-06-exposure-assurance-ai-native-premium-audit-an.md) |
| 15 | Bereavement Desk → pre-death beneficiary remediation + death-signal fraud tool | Banks / credit unions | B2B | 40 | PWP (K1) | Priced per member rather than per death; post-death operations don't pencil out | [r1-16](dossiers/r1-16-bereavement-desk-ai-run-deceased-customer-ser.md) |
| 16 | Check-fraud warranty recovery → inbound claims triage for sponsor banks | Bank fraud ops | B2B | 40 | PWP (K1) | Respondent side has budget, deadlines and exam pressure; check volume is shrinking | [r1-24](dossiers/r1-24-warranty-recovery-desk-contingency-priced-ai-.md) |
| 17 | Air Headroom: parcel-level Clean Air Act capacity data + white-label permit engine | Environmental permitting | B2B | 40 | PWP (K0) | "Air capacity is an unpriced land attribute" is a genuinely new idea; niche and cyclical | [r2-05](dossiers/r2-05-behind-the-meter-air-desk-ai-enabled-air-perm.md) |
| 18 | Suspense Desk → inbound owner-relations agent + get-in-pay service for mineral funds | Oil & gas royalties | B2B | 39 | PWP (K1) | Heirship backlog is legally low-value; prevention plus mineral funds survive | [r1-22](dossiers/r1-22-suspense-desk-heirship-registry-ai-curative-f.md) |
| 19 | Commissioning → controls and power-monitoring readiness engine | Data-center construction | B2B | 38 | PWP (K1) | Deterministic point verification; OEMs are absorbing commissioning | [r1-02](dossiers/r1-02-ai-native-commissioning-firm-for-liquid-coole.md) |
| 20 | Total-loss contents → provenance-tagged damages workup for mass-tort firms | P&C / mass tort | B2B | 38 | PWP (K3) | California SB 872/495 removes the consumer pain; mass-tort niche remains | [r1-17](dossiers/r1-17-total-loss-contents-and-depreciation-recovery.md) |
| 21 | SurchargeAudit → recurring duty-minimization engine for importers | Trade compliance | B2B | 37 | PWP (K3) | Refund clawback rests on weak law; first-sale and Section 232 content work may survive | [r1-07](dossiers/r1-07-surchargeaudit-recovery-audit-of-tariff-surch.md) |
| 22 | LiftLedger (elevator contract renewal radar) | Vertical transportation | B2B | 37 | **Pass** (K1) | Price anchor of $0, LTV/CAC below 1; only a capital-heavy roll-up works | [r1-19](dossiers/r1-19-liftledger-an-owner-side-contract-and-uptime-.md) |
| 23 | TraceProof (aviation parts paperwork) | Aerospace MRO | B2B | 37 | **Pass** (K0) | Verification ROI is negative; signed e-certs make it free | [r2-04](dossiers/r2-04-traceproof-verifying-the-paperwork-on-aviatio.md) |
| 24 | Docket Desk → rate studies for small utilities / large-load tariff intelligence | Utility regulation | B2B | 37 | PWP (K2) | Regulated utilities pass savings to ratepayers, so they don't value them; down-market water rate studies are interesting | [r2-06](dossiers/r2-06-docket-desk-proceeding-intelligence-and-disco.md) |
| 25 | Disability Recognition Engine (SSA rep for long-term-disability offsets) | Disability insurance | B2B2C | 36 | **Pass** (K1) | Fee stacking likely barred; folds into #3 | [r1-15](dossiers/r1-15-disability-recognition-engine-an-ai-native-ss.md) |
| 26 | Desktop-first environmental due diligence → bank review copilot / back-book rescreening | CRE environmental | B2B | 36 | PWP (K0) | Borrower pays and data is controlled by EDR/LightBox; pre-LOI parcel screening survives | [r1-18](dossiers/r1-18-desktop-first-ai-native-environmental-due-dil.md) |
| 27 | Order Enforcement → importer-of-record risk scoring for customs sureties | Customs enforcement | B2B | 36 | PWP (K2) | Bounty business is fragile; small surety market | [r1-20](dossiers/r1-20-order-enforcement-intelligence-an-ai-evidence.md) |
| 28 | Guaranty Shield (SBA 7(a) servicing and purchase back office) | SBA lending | B2B | 36 | **Pass** (K0) | False Claims Act knowledge trap; no mandate forces anyone to buy | [r2-02](dossiers/r2-02-guaranty-shield-an-ai-run-back-office-for-sba.md) |
| 29 | CUI scope-shrinker (CMMC compliance for small defense suppliers) | Defense industrial base | B2B | 33 | **Pass** (K2) | Classifying after arrival can't undo scope; enclave vendors already own the category | [r1-10](dossiers/r1-10-cui-native-shop-workspace-a-cui-safe-rfq-inbo.md) |
| 30 | Taft-Hartley payroll-compliance audit engine | Union benefit funds | B2B | 33 | **Pass** (K1) | Every channel gatekeeper loses from it; the contractor-side remittance autopilot is the only survivor | [r2-07](dossiers/r2-07-ai-payroll-compliance-audit-engine-for-buildi.md) |
| 31 | Box Liberation (disposition of offsite paper records) | Records storage | B2B | 31 | **Pass** (K3) | About $2 per box, once; spoliation optics | [r1-21](dossiers/r1-21-defensible-disposition-as-a-service-ai-audit-.md) |
| 32 | GapList Zero (pipeline MAOP records) | Gas pipeline integrity | B2B | 30 | **Pass** (K3) | Paper can't fix grandfathered pipe; the "Born-TVC" pivot is a separate idea | [r2-03](dossiers/r2-03-gaplist-zero-ai-run-records-sprints-that-take.md) |

**How to read the scores.** Everything falls between 30 and 45, so **no idea is a clean "yes" as originally pitched.** Every survivor got there by pivoting. A 2-4 point gap is noise. The IC disagreements below carry more information than the ordering.

---

## 4. Top picks

### Pick 1: Claims Integrity for mid-tier manufacturers (Debit Desk, pivoted). Score 44. IC ranks: VC #1, bootstrapper #4, PE #1

- **Thesis.** Manufacturers with $100M-$3B revenue (electrical, lighting, wire, plumbing, later foodservice) receive thousands of SPA debit claims (EDI 844) from hundreds of distributors each month. They are too small for Vistex or Model N, so channel-finance clerks validate the claims in Excel. AI ingests the SPAs the manufacturer issued, the distributor 844s and deductions, and the price letters. It validates each line (SPA active, quantity cap, end user, cost basis after tariff price letters) and returns reason-coded 849 responses. Rep agencies get an exception queue. Pricing is SaaS on claim volume plus a share of over-claims prevented.
- **Why it's non-obvious.** The obvious pitch, "recover unclaimed rebates for distributors," fails:
  - The ERP already auto-claims linked lines.
  - Back-claims are time-barred.
  - The unlinked pool looks like diversion to manufacturers.
  - A contingency fee rewards aggressive claiming against the distributor's key suppliers.

  Switching sides fixes incentives, confidentiality and antitrust at once. It is also the HighRadius / CPG-deductions playbook applied to industrial channels. The structure maps onto healthcare RCM (844 ≈ an 837 claim, 849 ≈ an 835 remittance with denial codes).
- **Wedge.** One vertical (electrical/lighting OEMs), plus tariff price-letter cost-basis disputes, which produce a 2025-26 wave of short-pays. Alternate wedge: SPA and rebate receivable diligence for PE roll-ups of distributors, sold through quality-of-earnings (QoE) firms.
- **Competitors.**
  - Ximple Solution (distributor-side SPA software).
  - Enable (rebate SaaS, about $276M Series D in 2022; verify).
  - Epicor Eclipse/P21 (Prism AI) and Infor SX.e (ERPs that could ship it as a feature).
  - Vistex and Model N (enterprise; Model N was taken private by Vista for about $1.25B in 2024; verify).
  - No AI-native SPA-claims player found (unverified).
- **Good.**
  - Pain is denominated in money: SPA dollars can rival a distributor's net income.
  - No license, modest capital.
  - LLM extraction of messy SPA PDFs only recently became reliable.
  - The same claim/denial structure exists in foodservice deviations, med-surg and jan-san chargebacks, and electronics ship-and-debit, a horizontal pool estimated at $0.7-1.5B.
- **Bad (strongest red-team hits).**
  - Leakage statistics (8-12% unclaimed, 5.2%) are vendor marketing. Real over-claim rates may be 1-4%.
  - Enterprise cycles of 9-18 months.
  - **PE operator:** "Electrical manufacturers fear their distributors." They may approve questionable debits rather than short-pay a large distributor. The product could then shrink to clerk-labor savings (2-6 FTE, ACV ceiling of $100-300k).
  - Effectively needs an ex-channel-finance or rep-agency co-founder.
- **IC disagreement.**
  - The VC would score it above 44 as "the cleanest software business on the list" and wants proof that the engine works in foodservice before Series A.
  - The bootstrapper ranks it #4 because the cycle is too long for a thin-capital team; would lead with PE diligence for faster cash.
  - The PE operator thinks the diligence wedge is overpriced: it is a $15-40k subcontract to QoE firms, not $50-150k.
- **Cheapest validation test.** 15 calls with channel-finance leads at $200M-$1B electrical and foodservice manufacturers. Ask three things:
  - What are your monthly debit line counts and current rejection rate?
  - Do you actually short-pay on flags, or only want to cut headcount?
  - Would you share 3 months of 844s and SPAs for a free accuracy test?

  **Kill if** fewer than 5 of 15 report rejection or over-claim rates above 2% and a willingness to short-pay.

### Pick 2: TaxDesk, an evidence engine for licensed filers plus a book roll-up. Score 42. IC ranks: VC #7, bootstrapper #1, PE #2

- **Thesis.** Don't file appeals directly against Ownwell and O'Connor. Do two things instead:
  - **Software:** sell an "EvenUp for property tax" to the people who already hold licenses and clients: NY tax-certiorari firms (RPTL), Cook County/PTAB attorneys, NJ and PA appeal counsel, and Texas, Georgia and Florida registered consultants. It normalizes T-12s and rent rolls, rebuts the assessor's own model inputs (Cook County's CCAO models are open source), generates venue-formatted packets, predicts settlements and tracks deadlines. Price: $50-300 per parcel.
  - **Roll-up:** buy retiring consultants' sticky Form 50-162 books at about 0.75-1.5x fees, seller-financed with earnouts tied to keeping the designations. Run them on the AI stack, taking margins from about 30% toward 50%+.
- **Why it's non-obvious.** Attorney-only representation rules block direct filers but welcome tool vendors, so regulation protects the vendor. Multi-year mechanics (Georgia's 3-year freeze, Texas 23.01(e)) are underpriced by incumbents.
- **Competitors.** Ownwell and O'Connor (direct filers in Texas), thousands of registered consultants, CAD self-service portals.
- **Good.** Willingness to pay has been proven for decades (25-40% contingency). The income-approach work fits LLMs. Acquired books produce cash flow in season one.
- **Bad.**
  - AI compresses fees toward 15-20%.
  - Cash arrives once a year, 6-9 months after the work.
  - The value gap from the 2022 peak is a 2-3 year harvest.
  - Underserved SAM is about $130-220M.
  - Cert firms are cheap, conservative buyers.
  - The client relationship belongs to the selling principal, so earnouts can fail on retirement.
  - Drop small-business personal property: Texas Prop 9 and Indiana SEA 1 exempt most of it.
- **IC disagreement.** The VC sees a ceiling ("property tax is not personal injury") and calls the roll-up "a search-fund deal, not seed venture." The bootstrapper (conviction 7, the highest on the list) and the PE operator see the most bankable deal in the set. **This is the right pick only if you want an owner-operated cash business.**
- **Cheapest validation test.**
  - 6 NY cert / Cook County firms: will they pay $100+ per parcel for a packet pilot?
  - 3 retiring Texas consultants: will they sell a book at about 1x on an earnout? (Lead list: TDLR consultant registry plus CAD agent-designation data.)

### Pick 3: Florida open-permit closeout and inspection evidence layer. Score 45 (highest). IC ranks: VC #4, bootstrapper #2, PE #3

- **Thesis.** Florida title searches flag open and expired permits. A seller with a closing date is a motivated payer (estimated $300-1,500 per permit, against about $129 from an indifferent HVAC contractor).
  - AI reads permit histories across county portals and diagnoses what each permit needs: the original contractor, a re-permit, a final inspection only, or an engineer's letter.
  - It generates guided, tamper-evident capture (GPS, continuous video, device attestation, product-approval and AHRI checks).
  - It routes the signature to existing licensed private providers or retired code officials on a 20-35% revenue share.
  - Expansion: bulk backlog cleanup for PE home-services platforms, then evidence-packet SaaS for building departments (to meet HB 267 shot clocks), then roof-attachment evidence for insurers and Citizens.
- **Why it's non-obvious.** The bottleneck is inspections and closeout, not plan review. Being the licensed signer means hurricane-correlated, uncapped liability, so stay the evidence and routing layer. The inspector retirement cliff creates a remote, part-time labor pool.
- **Competitors.**
  - PermitFlow ($54M; expediting, could aggregate signers).
  - City-side AI (Clariti/CivCheck, Govstream, Archistar).
  - Blitz (AI plan review).
  - Incumbent private providers (Willdan/Alpha, UES, BV, SAFEbuilt).
  - PropLogix-type lien and permit search firms already in the title channel.
- **Good.** A deadline-driven payer, concentrated channels, free lead lists (county portals), cheap to falsify, capital-light.
- **Bad.**
  - Fulfillment is bespoke and physical (defunct contractors, re-permits), so margins may land at expediter levels.
  - **PE operator flag (unverified):** Florida's 2019 HB 447 (F.S. 553.79(15)) may let building officials administratively close permits open 6+ years with no safety hazard. That could gut the old backlog.
  - Virtual-inspection rules (synchronous video? notice periods?) were never verified.
  - Florida-only; hundreds of jurisdictions.
  - Venture case depends on an untested insurer data line.
- **IC disagreement.** All three think 45 is overscored ("an elegant insight with ugly fulfillment"). The bootstrapper still likes it as a Tampa Bay cash business.
- **Cheapest validation test.**
  - 8 FL title and lien-search firms: how often open permits appear, what resolution costs today, what the 553.79(15) closure rule does in practice.
  - Get 3 seller-side parties to pay $300+ and sign one licensed private provider as partner.
  - Pull open-permit counts from 2 county portals.

### Pick 4: Medicaid hours and exemption evidence rail. Score 44. IC ranks: VC #2, bootstrapper #10, PE #6. **Most contested.**

- **Thesis.** From about Jan 2027, OBBBA work requirements and 6-month renewals mostly cause *procedural* loss of eligible people. Precedents: Arkansas 2018 (over 95% already compliant or exempt) and the unwinding (about 70% of disenrollments were procedural). The 80-hour test is effectively a roughly $580/month income test, so people fail because they are gig or shift workers, have uncoded exemptions, or live at stale addresses. Build two evidence sources the state cannot get on its own:
  - **Clinician-signed exemptions** drafted from the chart for one-click signature (EHR-embedded, distributed through FQHC networks such as OCHIN Epic). Sold to risk-bearing Medicaid value-based-care providers, FQHCs and hospitals.
  - **Hours attestations** from employer, EVV and staffing logs, delivered as an employer-to-state data rail.
- **Why it's non-obvious.** The MCO "AI caseworker" framing fails: about $600-900 of margin per retained member, not $6-8k of premium, and the state budgeted for the losses. The venture-scale piece is a Work-Number-style hours rail for shift and 1099 workers, extensible to SNAP work rules and income verification.
- **Competitors.**
  - Fortuna (AI-native, funded; verify).
  - mPulse/Icario (member engagement).
  - Maximus, Conduent, Deloitte, Gainwell (state integrators that will ship claims-based frailty flags).
  - R1, Experian Health, Waystar (hospital coverage discovery).
  - Equifax The Work Number.
- **Good.** Statutory and dated. Clinician attestation is what states trust and is safer under the False Claims Act. Risk-bearing providers lose revenue right away and decide in weeks.
- **Bad.**
  - States, the ultimate arbiters, have a fiscal motive to reject outside evidence.
  - Extensions to 2028 are possible.
  - SOC 2, HITRUST and BAAs are needed before the first dollar.
  - TCPA, Part 2 and 42 CFR 438.104 constraints.
  - Revenue comes in lumps around renewal waves.
  - The 2023-24 unwinding produced no venture-scale startup.
  - Needs a Medicaid-operator co-founder.
- **IC disagreement.** The VC likes the hours rail as a TAM expander. The bootstrapper calls 44 "the most over-scored idea here." The PE operator says the named buyers (FQHCs, safety-net hospitals) are freezing vendor spend.
- **Cheapest validation test.** Get written evidence-acceptance rules from 3 early-implementing states. Then interview 5 risk-bearing Medicaid providers and 3 home-care agencies about paying per verified packet. **Kill if** states accept only their own ex parte data.

### Pick 5: VSC claims agent for repair facilities (warranty pivot). Score 42. IC ranks: VC #5, bootstrapper #8, PE #5

- **Thesis.** Leave franchised OEM warranty: one payer, OEM-owned rails, 30-day windows, and Armatus owns retail-rate work. Go to vehicle service contract and extended-warranty claims, which repair shops file against dozens of administrators (Assurant, Zurich, CNA National, Endurance, AUL, CarShield).
  - Voice AI handles adjuster pre-authorization calls; document assembly handles packaging and appeals.
  - Priced per authorized claim.
  - Embedded in shop-management systems (Tekmetric, Shopmonkey, Shop-Ware).
  - Data asset: a graph of which administrator pays which repair at what labor rate.
- **Why it's non-obvious.** It is the one place on the list where the RCM analogy (many payers, adversarial adjudication, phone-based prior authorization) really holds. The aging fleet (about 12.8 years) and rising VSC attach rates add volume.
- **Bad.**
  - Entirely unverified this run.
  - Administrators profit from friction and are likely deploying their own AI adjusters and portals.
  - A funded voice-AI startup may already serve shops.
  - Per-claim value is small.
  - Shop-management platforms can build it once it is proven.

  Secondary options: fleet-side truck warranty recovery (the VP of Maintenance owns the P&L), or an AI-enabled warranty-admin BPO roll-up (100-300 rooftops, margins from 20-30% toward 55-65%).
- **Cheapest validation test.** 10 independent-shop owners: hours per VSC claim, denial rate, willingness to pay per claim. Also search for existing voice-AI shop agents and administrator AI before building anything.

### Pick 6: LTL rebill adjudication agent for mid-tier 3PLs (OriginProof, pivoted). Score 41. IC ranks: VC #8, bootstrapper #3, PE #9

- **Thesis.** The July 2025 NMFC density overhaul turned freight class into a measurement. The 3PL that quoted from the shipper's declared class eats the rebill or churns the customer.
  - The agent pulls carrier weight-and-inspection (W&I) images, adjudicates each correction and disputes the wrong ones inside the 180-day window.
  - For legitimate corrections it produces a customer-facing evidence packet.
  - It validates declared density at quote time.
  - Priced at $0.25-1 per shipment plus a share of reversed rebills.
- **Good.** Concentrated buyers that hold the dispute rights. Can start as a service and show dollars in 60 days. Carrier- and terminal-level reversal data compounds.
- **Bad.**
  - The most crowded AI-agent buyer in logistics: HappyRobot, Vooma, Augment, Pallet, Loop ($95M) and Evos.
  - C.H. Robinson and WWEX build in-house.
  - The reclass spike is partly a one-time shock, now 15 months old.
  - About 50-150 meaningful buyers.
- **Cheapest validation test.** One mid-tier 3PL hands over a month of rebills on a share-of-reversals basis.

---

## 5. Honorable mentions and interesting pivots

- **Merged delegated-claims QA for casualty MGAs** (DA Census + Demand Shield, scores 41/40). This is one company counted twice.
  - The plaintiff-AI arms race (EvenUp at about $2B, Supio, Eve) leaves the defense side doing manual work.
  - Sell continuous claims QA to MGA program aggregators (time-limited demand clocks, reserves against specials, excess notices), with a read-only evidence room for fronts and reinsurers.
  - Endgame: an AI-native casualty TPA. **Pursue only with an ex-program-claims executive co-founder.** Discoverability (Allstate v. Ruiz) is a real GC veto.
- **Asset-owner third-party damage recovery** (#13). Utilities, telecoms and DOTs recover from at-fault drivers and excavators. Liability is already documented in 811 locate tickets and police crash reports. The claimant owns the file, so there is no TPA gatekeeper. A clean, unglamorous, contingency-friendly business; check incumbent damage-recovery vendors first.
- **Rate studies for small water and wastewater utilities** (Docket Desk down-market, #24). Thousands of systems face forced rate increases from lead-line replacement (LCRI) and PFAS treatment and have no rates staff. Today they pay $100-300k for a consultant study or skip it. An AI study at $30-80k plus a credentialed sign-off is a sleeper idea with a durable regulatory forcing function.
- **Air Headroom** (#17). Cumulative NO2/PM2.5 headroom goes first-come, first-served, so the first data-center campus in a cluster uses up the room the next one needs. A parcel-level map built from scanned state permit PDFs is new data for powered-land developers and lenders. Niche ($20-60M), but genuinely original.
- **Inbound warranty-claim triage for sponsor banks** (#16). Respondent banks under consent orders get thousands of unstructured claims under deadlines. A $250k-$2M ACV opex sale with BSA/mule-detection upside.
- **Pre-death beneficiary and titling remediation for credit unions** (#15). Vision LLMs digitize 1990s signature cards. Priced per member ($40-130k ACV), with no payout liability.
- **"Born-TVC"** (from #32). QA of contractor turnover packages *as records are created* on pipeline and regulated-asset construction. It rides capex instead of fighting a deadline. Worth scouting as a separate idea.
- **Union remittance autopilot for signatory contractors** (from #30). Encodes every CBA rate table and files monthly fund remittances. Contractor-paid with clear avoided-penalty ROI. Small, but it could become the cross-fund remittance rail.
- **Get-in-pay for mineral funds** (from #18). Funds lose IRR every month an interest is out of pay. $50-250k per fund, recurring with each acquisition.
- **LIHTC independent reviewer** (#7), **LTC Medicaid workbench** (#4) and **school-provider Medicaid checker** (#9). Sound $10-35M businesses with concentrated, fast-buying intermediaries. Not venture-scale.

---

## 6. Graveyard: killed ideas and the lesson each teaches

| Idea | Killed because | Lesson |
|---|---|---|
| Box Liberation (#31) | About $2 per box, once. A fee per box destroyed undermines the good-faith defense | Don't sell a one-time slice of someone else's annuity |
| GapList Zero (#32) | Paper can't fix grandfathered pipe; the remaining records are the ones earlier searches never found | Backlogs that survived prior intensive searches are adversely selected |
| CUI scope-shrinker (#29) | Once CUI lands, the asset is in scope; enclaves (PreVeil, Exostar) already own the category | Check that the core mechanism is logically possible before checking the market |
| Taft-Hartley audit engine (#30) | TPA, CPA auditor, fund counsel and employer trustees all lose from efficiency | Never sell through a channel whose billable hours you cut |
| Guaranty Shield (#28) | Scanning before certification creates documented False Claims Act knowledge; no mandate forces a buyer | In some workflows, *finding* the defect creates the liability |
| Disability Recognition (#25) | Fee stacking likely barred (20 CFR 404.1720(e)); incumbents charge carriers about $0 | Check the fee rules before modeling revenue |
| TraceProof (#23) | A $3-8 check replaces $1.50-3 of labor; signed e-certs make verification free | A verification product dies once signing becomes standard |
| LiftLedger (#22) | About $270-1,080 per rebid against $2-3k CAC; the champion (property manager) is the party being audited | If the champion is the one being audited, expect pilots that never convert |
| Total-loss contents (B2C) (#20, 3 kills) | California SB 872/495 contents advances; free ChatGPT plus templates do most of the job; public-adjuster licensing | Regulation can remove the pain exactly where awareness peaks |
| SurchargeAudit (#21, 3 kills) | Refunds go to the importer of record; voluntary-payment doctrine; window closes in 2027 | The data must be the buyer's own, not the counterparty's |
| Order Enforcement bounty (#27, 2 kills) | About 300 episodic petitioner buyers; CBP and DOJ see more data; qui tam returns are fragile | Bounty economics are lumpy, slow and legally brittle |

---

## 7. Cross-cutting insights

**Crowding map (estimates, verify)**
- **Crowded. Avoid unless you have a sharp, narrow edge:**
  - plaintiff and legal-demand AI (EvenUp, Supio, Eve)
  - freight-broker agents (HappyRobot, Vooma, Augment, Pallet, Loop)
  - permitting software (PermitFlow, Clariti, Govstream, Archistar)
  - dealer front-of-funnel AI (Toma, Numa, Impel)
  - construction sub workflow (Adaptive, which raised a $30M Series B in Sep 2026; Siteline; Clearstory; Trimble/Document Crunch)
  - AI-native TPAs (Strala, Corgi)
  - direct property-tax filing (Ownwell, O'Connor)
  - CMMC enclaves
  - aviation records (ProvenAir, Bluetail, flydocs)
- **Open (no AI-native found, unverified):**
  - manufacturer-side SPA claims
  - VSC adjuster calls
  - LTC Medicaid application tooling
  - LIHTC investor review
  - school Medicaid for providers
  - O&G suspense and owner relations
  - sponsor-bank inbound claims
  - air-capacity data
  - small-utility rate studies

**Patterns that survive the red team**
1. **Sell to whoever writes the check when the process fails** (manufacturer, front, surety, mineral fund), not to a cash-poor victim.
2. **Be the evidence or flag layer, not the signer.** Licensed humans and institutions keep the liability.
3. **Deterministic verification beats generation.** The LLM turns messy documents into a formal model; rules and math check it. Anything where the LLM writes the substantive claim (3C stories, change orders, exemption attestations) got shredded.
4. **Prevention at the moment rights are created** (signature, closing, intake, quote) beats backward-looking contingency harvests. Lookbacks are time-barred, adversely selected and one-time, the PRGX pattern.
5. **The data must be owned by or contractually owed to the buyer.**
6. **Buyer-universe math.** Fewer than about 300 logos at under $50k ACV always failed. Survivors were either concentrated with high ACV, or reachable through one channel that onboards many.
7. **"One feature away"** is the default attack. Defensible positions are cross-party views that no single incumbent can build without channel conflict.
8. **The AI-enabled roll-up is the universal fallback.** It is real and bankable, but it breaks the small-team, limited-capital constraint. Decide up front whether you are a software founder or an owner-operator.

**The meta-insight the per-idea scoring missed.** At least five finalists share one primitive: **two-party commercial claims adjudication** (contract, claim, validation, denial or reason code, appeal). SPA debits, VSC claims, LTL rebills, time-limited demands and Medicaid evidence all fit it. One engine (contract ingestion, line matching, denial-code learning, evidence packets) proven in one vertical, then carried to a second, is a stronger venture thesis than any single vertical.

**Trajectories worth watching**
- **OBBBA Medicaid** (about Jan 2027) and the freeze of the eligibility simplification rule until about 2034.
- **Permanent, churning tariffs** (Sections 232, 301, 122) feed price-letter disputes and metal-content documentation.
- **Freight class is now a measurement** (NMFC, July 2025).
- **Data-center onsite power** drives air permits, commissioning and large-load tariffs.
- **Casualty reserve stress plus plaintiff AI** puts pressure on MGA capacity.
- **AI-forged documents** create demand for provenance and attestation, monetized on the risk-bearer side.
- **Retirement cliffs** (code inspectors, tax consultants, elevator independents, records-center owners) create book roll-up supply.
- **CMMC Phase 2** (Nov 10, 2026), **Florida HB 267 shot clocks**, and **LCRI/PFAS** forcing small-utility rate increases.

---

## 8. Recommended next 2 weeks

**Days 1-3: verify the load-bearing facts** (none were verified live this run)
- Real SPA over-claim and rejection rates at mid-tier OEMs, and whether Model N, Vistex or Enable have a down-market offering.
- F.S. 553.79(15) administrative closure of old permits, and Florida virtual-inspection rules (synchronous or asynchronous, notice period).
- Fortuna's funding and product; state evidence-acceptance guidance under OBBBA; CMS extension rules.
- Whether VSC administrators deploy AI adjusters, and whether any voice-AI startup already serves shops.
- PropLogix's current resolution services; current Texas consultant-book transaction multiples.

**Days 1-10: discovery calls (parallel; about 50 calls total)**
- **Pick 1 (primary):** 15 channel-finance leads (10 electrical/plumbing, 5 foodservice). Get debit volumes, rejection rates, willingness to short-pay, and one 3-month data sample.
- **Pick 3:** 8 FL title and lien firms, plus 1 licensed private provider as a potential partner.
- **Pick 2:** 6 NY/Cook County appeal firms, plus 3 Texas consultants near retirement.
- **Pick 5:** 10 repair-shop owners, by phone, shadowing one VSC adjuster call.
- **Pick 6:** 3 mid-tier LTL 3PLs.

**Days 4-12: build one thin prototype**
- A claims-validation demo: SPA PDF plus 844 CSV plus price letter in, line-level pass/fail with reason codes and an evidence trail out.
- Build it vertical-agnostic, so the same core can ingest a VSC contract or an LTL tariff.
- Use it in calls as a "send me 100 lines, I'll show you what I find" offer.

**Day 14: decision gate**
- **Go on Pick 1** if at least 5 of 15 manufacturers confirm over-claim or rejection exposure above 2%, at least 2 offer data, and an industry co-founder candidate has surfaced.
- **Pivot to TaxDesk roll-up** if you would rather run a cash business and a Texas book is available at about 1x on an earnout.
- **Keep Florida open-permit closeout as a cheap side test** only if title firms confirm frequent, paid resolution demand that the closure rule does not cover.
- **Shelve** Subcontract Rights Guard, OriginProof as a standalone, and the insurance QA idea unless an insider co-founder appears.

*Key files: [01-longlist.md](01-longlist.md), [dossiers/](dossiers/). Highest-signal dossiers: [r1-09](dossiers/r1-09-debit-desk-ai-claims-assurance-and-denial-man.md), [r1-14](dossiers/r1-14-taxdesk-for-the-noi-stressed-long-tail-ai-pro.md), [r1-01](dossiers/r1-01-licensed-ai-native-private-provider-for-flori.md), [r1-11](dossiers/r1-11-medicaid-continuity-ops-outcome-priced-eligib.md), [r1-23](dossiers/r1-23-warranty-revenue-integrity-for-dealers-an-ai-.md).*
