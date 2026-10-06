# R3 Swing 3: Claim-level statutory ledger for workers' comp and casualty claims

**Date:** 2026-10-06 · **Round:** 3 (swing) · **Previous score:** 0 (scout and deep dive, never scored by the IC) · **New score: 24/100** · **Verdict: PASS.** The TPA claims-QA pivot in section 10 is a different company. It could earn a fresh scout, but it does not rescue this one.

> **One-liner (as refined by the deep dive):** A per-claim statutory ledger for workers' comp and casualty claims. For each claim it holds average weekly wage (AWW), the benefit rate, payment due dates, Section 111 ORM/TPOC dates and the accepted ICD-10 code set, with evidence behind each. It proves late-payment penalties and Medicare cash leaks from the buyer's own payment history, then flags drift before a payment or report goes out. Wedge: California and Florida indemnity timeliness plus Section 111 and conditional-payment code governance.

> **Evidence limits:** This session's WebSearch budget was already used up by the shared pool, and my one search was refused. WebFetch was egress-blocked for dir.ca.gov, towermsa.com and furtherai.com, the same blocks the deep dive and red teams hit on cms.gov, verisk.com, bls.gov and others. Every fact marked **[V]** comes from search-result snippets gathered by earlier agents in this chain. None comes from an opened page. **[M]** means from memory and unverified. **[E]** means estimate. No company or figure is invented. Anything that could not be opened is flagged.

---

## 1. Verdict and score rationale

**24/100. PASS.** For calibration, round-1 finalists scored 40-45, and 70+ means genuinely compelling.

The scout's pitch rested on three money pools. Verification shrank all three:

1. **CMS Section 111 civil money penalties (CMPs) are now near zero per entity [V].**
   - CMS samples 250 records per quarter across all GHP and NGHP reporters combined, about 1,000 a year nationally.
   - An NGHP record is penalized only if it was reported more than one year late.
   - The rule targets lateness, not code accuracy.
   - The corrected tiers are $378/$756/$1,512 per day, with a $551,880 cap per record. That cap is frightening on a slide, but with this sampling rate almost no single entity will ever face it.
2. **State regulatory penalties are small even in the largest state [V, search snippets of the DWC 2024 Audit Annual Report].**
   - California's DWC Audit Unit cited 4,531 violations and $1,347,527 in administrative penalties statewide in 2024, of which $1,010,939 was collectible.
   - It issued 275 notices of compensation due, totaling about $442k.
   - In 2022 the figures were $739,519 cited and $155,659 collectible.
   - Administrators at or under the PAR standard (1.58582 for 2026) pay no administrative penalty, only the unpaid compensation.
3. **The self-imposed late-payment increases are real but small per event [E].**
   - CA LC 4650(d) adds 10% and FL 440.20(6) adds 20% to the late installment only, roughly $100-400 per incident.
   - A 24-month look-back on a mid-size portfolio is likely to find tens of thousands of dollars. That barely covers a $15-50k audit fee, and a 20-30% contingency fee comes to single-digit thousands.

What survives is Medicare conditional-payment leakage tied to overbroad ICD-10 sets. This is where the scout's non-obvious insight lives, and it is real. But it is **already marketed by incumbents**:
- Tower MSA's Section 111 dashboard is sold on managing "ICD 10 codes or ORM termination, to avoid unnecessary conditional payments" [V, snippet].
- Verisk publishes "Section 111 Reporting: CMS's Road Map to Conditional Payment Recovery" [V, title].
- No per-claim leakage dollar figure was found anywhere in this chain.

Feasibility review adds two **legal hazards** that make the product worse the better it works:
- A 100% look-back documents unpaid compensation, which creates knowledge of benefits due and is discoverable unless privileged.
- "Code narrowing" sold as leakage reduction invites MSP double-damages and inaccurate-reporting theories.

Two of three red teams said kill and the third raised serious concerns. All three converged on the same structural problem: **the data sits with the party being audited (the TPA), and the dollars sit in tiny penalty pools.** Bottom-up SAM is about $0.2-0.4B even before the CA penalty data, and realistically lower.

**Why it is not lower:**
- The rules-library engineering is a real asset.
- Strategic acquirers are active in the space: CCC bought EvolutionIQ for about $730M [V].
- The pivots point at a genuinely larger budget, TPA QA headcount plus client-retention risk.

**Why it is lower than round-1 finalists (40-45):** Those finalists had at least one verified, large, risk-bearing budget and a reachable buyer. This idea has neither: the large budget is unverified, and the buyer who holds the data has a motive to block.

---

## 2. Fact-check of the scout's key claims

| Claim | Status | Evidence |
|---|---|---|
| CMP $250-$1,000/day, inflation-adjusted to about $368-$1,474, cap about $365k | **Outdated** | 2025 adjustment (Fed. Reg. Jan 28, 2026): $378/$756/$1,512/day, cap $551,880 [V, Verisk blog via snippet] |
| "Random quarterly audits of 250 records" for NGHP | **Correct number, misleading implication** | 250 per quarter across ALL GHP and NGHP reporters, allocated by volume. NGHP penalized only if more than 1 year late [V, CMS webinar Jan 15, 2026 via snippet] |
| Wrong ICD-10 codes create penalty exposure | **Contradicted** | The rule targets untimely reporting, not data accuracy [V, Tower MSA 2023 headline] |
| State penalties for late indemnity (CA, FL, NY) | **Partly verified** | CA LC 4650(d) 10% automatic and LC 5814 up to 25% [V]. FL 440.20(6) 20% after 7 days and a 95% timely-payment standard [V]. NY not verified |
| State audit fines are a meaningful pool | **Contradicted** | CA statewide 2024: $1.35M cited, $1.01M collectible [V, DWC report via snippet] |
| No AI-natives in statutory compliance | **Partly contradicted** | CLARA Analytics MSP Compliance (since 2021) [V]. Horizontal TPA AI agents: FurtherAI, Ushur, V7 [V, titles]. None found doing state-penalty math specifically |
| EvolutionIQ acquired by CCC | **Verified** | About $730M, closed Jan 6, 2025 [V, CCC IR via snippet] |
| 330k adjusters at about $75k (BLS) | **Unverified [M]** | bls.gov blocked all session |
| 21,000+ NGHP reporting entities, 88.29% under 500 beneficiaries/yr | **Verified (snippet)** | CMS rule materials via search summary |

---

## 3. Thesis (strongest honest version)

Workers' comp claims carry deterministic statutory obligations: AWW, TD rate, payment due dates, Section 111 reporting windows and the accepted-injury code scope. Today these are re-keyed across 3-4 vendors with no shared record. Errors surface only through sampled audits, demand letters or penalty checks. A versioned, cited rules library plus LLM extraction from messy wage records and medical notes could hold one ledger per claim and catch drift before money moves. The ledger would sell first as a look-back that proves dollars from the buyer's own data.

**Why it fails as a startup:**
- The provable dollars are small (CA regulator pool about $1M/yr; self-imposed increases in the hundreds of dollars per event).
- The large dollars (Medicare leakage) are unproven and already sold by MSP vendors.
- The buyer with budget (the self-insured) does not hold the data.
- The holder of the data (the TPA) is the party the product audits.
- Claims systems and reporting agents are each one feature away.

---

## 4. Workflow today (condensed from deep dive)

1. **FROI intake.** The claim is set up in Guidewire, Origami, Riskonnect/Ventiv or a TPA system. FROI/SROI go to the state via IAIABC EDI. FL measures first-payment timeliness [V].
2. **Compensability and indemnity set-up.** The adjuster computes AWW from messy wage data and schedules TD. In CA the first payment is due within 14 days, then every two weeks. Late payments get the 10% LC 4650(d) increase, self-imposed [V]. Subsequent installments are usually auto-scheduled in the claims system [M].
3. **Medicare status.** The reporting agent (Verisk, ExamWorks, Enlyte, CorVel, Tower, or in-house) queries CMS and reports ORM with ICD-10 codes, often picked from FROI body-part text. NGHP User Guide v8.4 (Apr 13, 2026) [V, file name].
4. **Conditional payments.** BCRC/CRC demands are disputed line by line by MSP vendors or law firms. Medicare Advantage plans pursue recovery separately, including double-damages suits [V, WorkersCompensation.com 2026 predictions].
5. **Settlement.** MSA vendor (CLARA, Tower, ExamWorks, Enlyte). TPOC reported.
6. **Oversight.**
   - CA DWC audits every adjusting location at least once every 5 years against the PAR standard [V].
   - Self-insureds and pools hire claim auditors or broker consultants who sample files once a year [M].

---

## 5. TAM

| Layer | Basis | Estimate |
|---|---|---|
| Section 111/MSP governance | About 300 large entities at about $150k plus about 2,200 mid at about $25k (from 21,000+ NGHP entities, 88.29% small [V]) | about $100M [E] |
| State timeliness and benefit accuracy | 2-3M open indemnity claims [E, unverified] at $40-80/claim/yr | $80-240M [E], **likely overpriced** given CA penalty pool |
| Look-back audits | About 1,500 buyers at $20-50k | $30-75M/yr [E], self-eroding |
| **Direct wedge SAM** | | **about $0.2-0.4B [E], realistically lower** |
| Labor pool for expansion | About 330k adjusters at about $75k | about $25B [M, BLS unverified] |

The $5B+ story requires an unbuilt pivot into adjuster-workflow automation, the most crowded AI-in-insurance category.

---

## 6. Competitors

| Company | Type | Overlap | Source |
|---|---|---|---|
| Verisk (ISO MSP / Section 111) | Incumbent reporting agent | Owns the CMP and "Section 111 drives conditional payments" narrative; one feature from code validation | https://www.verisk.com/blog/the-section-111-connection-to-conditional-payments-and-claim-outcomes/ |
| Tower MSA Partners | MSP services and dashboard | Markets ICD-10/ORM accuracy management to avoid conditional payments and CMPs, which is the scout's core insight | https://towermsa.com/services/section-111-services/section-111-reporting/ (snippet only) |
| ExamWorks Compliance Solutions | MSP services (PE-owned) | Section 111 reporting, MSA, conditional-payment resolution | https://www.examworkscompliance.com/welcome/blog/cms-publishes-final-rule-on-section111-penalties |
| Enlyte (Mitchell, Genex, Coventry) | WC services suite (PE-owned) | Bill review, MSP, case management; entrenched distribution | not verified |
| CorVel; Sedgwick; Gallagher Bassett | TPAs with in-house compliance | Hold the data, can build in-house, motive to block audits | not verified |
| CLARA Analytics (MSP Compliance) | AI-native | AI MSA reports in days; closest AI-native on the Medicare side | https://claraanalytics.com/products/msp-compliance/ |
| CCC / EvolutionIQ | Incumbent that acquired an AI-native | About $730M (Jan 2025), WC and disability claims guidance | https://ir.cccis.com/news-releases/news-release-details/ccc-intelligent-solutions-completes-acquisition-evolutioniq |
| FurtherAI; Ushur; V7 Labs | Horizontal AI agents for TPAs and WC | Could add deadline and penalty flags as one more agent task | https://www.furtherai.com/blog/best-ai-claims-processing-and-adjudication-tpas ; https://ushur.ai/blog/ai-agents-in-workers-compensation ; https://www.v7labs.com/blog/ai-tpa-software-insurance |
| Guidewire, Origami Risk, Riskonnect/Ventiv | Claims systems of record | Payment diaries, auto-pay, Section 111 modules [M]; own the ledger | not verified |
| Aclaimant | WC claims software | Markets "audit-ready, timestamped records to avoid penalties" | https://www.aclaimant.com/blog/workers-compensation-software |
| Apptech LLC | Section 111 reporting software | Reporting validation | https://apptechllc.com/what-you-need-to-know-about-mmseas-civil-monetary-penalties-for-section-111-reporting/ |
| Wisedocs; Medata | AI-native adjacent (record review; bill review) | Could extend into ICD extraction and relatedness [M] | not verified |
| CA DWC Audit & Enforcement Unit | Regulator benchmark | PAR scorecard already defines and measures timeliness; claims orgs QA to it | https://www.dir.ca.gov/DIRNews/2025/2025-105.html |
| MSP law firms (Sanderson, Carr Allison, Gardner Law) | Services substitute | Manual MSP audits and disputes | https://www.sandersoncomp.com/blog/in-depth-cms-fina-rule-analysis |

---

## 7. Wedge and model (as proposed)

- **Wedge:** a "Penalty and Leakage Look-back" for CA/FL self-insureds, JPAs and TPAs. Inputs are 24 months of payment ledger, wage statements, notes and Section 111 response files. Outputs are penalties paid with root cause, benefit-rate errors, at-risk Section 111 records, and unrelated conditional-payment lines.
- **Model:**
  - $15-50k fixed fee or 20-30% contingency per look-back.
  - Then $40-80 per open indemnity claim per year plus $100-250 per Medicare-flagged claim per year, with a $25k minimum.
  - Later: a dispute module and a rules API licensed to claims systems.
  - All prices are [E].
- **IC view:** the look-back's dollar figure is likely too small to carry the fee, and the product erodes its own renewal case. Each finding also creates legal exposure for the buyer.

---

## 8. What's good

- The rules-library idea is sound: deterministic benefit and timing math with citations and effective dates, and the LLM limited to extracting inputs. That is the right architecture for regulated work.
- The non-obvious insight (code scope at ORM acceptance shapes later Medicare demands) is true, and the economic logic of leakage over penalty is correct.
- Self-imposed penalties appear as coded ledger lines, so ROI can be measured from the buyer's own data. That is a good sales mechanic, even if the number is small.
- FL's 95% timely-payment standard and CA's PAR scorecard are ready-made KPIs for a dashboard.
- Strategic M&A appetite is proven (CCC/EvolutionIQ about $730M), so exits exist.
- The founder can build it without deep domain co-founders. The rules are public statutes.

## 9. What's bad, by lens

**Competition (serious concerns)**
- The core insight is already in Tower MSA and Verisk marketing.
- Claims systems own the payment diaries.
- Horizontal TPA agent vendors (FurtherAI, Ushur, V7) can add penalty flags as a task.
- CLARA, CCC/EvolutionIQ, Wisedocs and Medata sit adjacent with data and distribution.

**GTM (kill)**
- The CA statewide penalty pool is about $1.35M a year [V], so no new budget line exists.
- Risk-bearer mismatch: TPA contracts may absorb penalties caused by TPA errors [E].
- Data access runs through the audited TPA.
- The look-back churns by design.
- The middle market is too thin: mid-size self-insureds are fully outsourced, and large TPAs build in-house.

**Feasibility and legal (kill)**
- Look-back findings create knowledge of compensation due, which can trigger LC 5814 exposure and is discoverable unless run under privilege.
- "Code narrowing" invites MSP double-damages and inaccurate-reporting risk.
- LLMs are weak at exact ICD-10 coding (NEJM AI 2024 "Large Language Models Are Poor Medical Coders" [M]).
- AWW judgment calls produce the very penalties the product promises to prevent.
- 50-state rule maintenance is a pure cost with liability attached.

**Market**
- Bottom-up SAM is about $0.2-0.4B [E] and probably lower.
- The $5B path requires an entirely different product.

---

## 10. Non-obvious insights worth keeping

1. **Penalty severity is not penalty exposure.** A $551,880 per-record cap with a sample of about 1,000 records a year nationally gives near-zero expected cost. Incumbents already use the CMP as fear marketing. Do not build on it.
2. **The largest state regulator's annual penalty haul is about $1M.** Any WC idea priced on "avoided state fines" should be checked against the DWC audit annual report first. This kills a whole class of WC-compliance ideas, not just this one.
3. **"Audit the TPA" products run into a data-custody wall.** Buy-side oversight is structurally right (incumbents cannot audit themselves), but it needs contract-backed export rights. The cleaner path is to sell to the TPA (the operator), who holds the data.
4. **The bigger budget is TPA QA headcount and client-retention risk, not penalties** [E, unvalidated]. TPAs are audited against each self-insured client's Special Handling Instructions, and audit scores decide account retention. A daily 100%-of-files QA copilot sold to a regional TPA's VP of Quality avoids the data-access blocker and churns less. That is the GTM red team's pivot. It is a different company, competing with FurtherAI-type agents.
5. **Privilege as product design.** Any claims-audit product for risk-bearers must run under counsel, or its findings become plaintiff evidence. Route through defense firms or broker consultants.

---

## 11. Cheapest validation test (for the pivot only; do not build the ledger)

**Two weeks, about $0 and 15 conversations.**
- Interview 10 QA or quality leads at mid-size regional TPAs (LinkedIn, plus WC trade associations such as CA SIA and FL WC conferences [M]). Ask four questions:
  1. QA headcount and how many files per examiner they review per month.
  2. How many client audits a year, and has one ever cost them an account?
  3. What tools they use for file review today.
  4. Would they pay $X per examiner seat per month for daily review of 100% of files against SIH plus state rules?
- In parallel, ask 5 CA JPA risk managers for their last TPA audit report and what it cost.
- **Kill if** fewer than 3 of 10 TPAs report QA teams of 3 or more FTEs, or if none will share an anonymized client-audit scorecard for a pilot.
- For the original ledger, a single question settles it: ask 3 CA self-insureds for 24 months of LC 4650(d) self-imposed penalty totals. **If the median is under $50k, the wedge is dead** (expected).

---

## 12. Kill criteria (summary)

- 24-month self-imposed penalty totals for a typical CA/FL self-insured or JPA come in under about $50k.
- TPAs refuse ledger and notes exports without client litigation-level pressure in 2 of 3 pilot attempts.
- Defense counsel requires every look-back to run under privilege through a law firm (this converts the GTM into a law-firm channel).
- Verisk, Tower or Guidewire demos show existing ICD-10/ORM accuracy validation and benefit-timeliness checks.
- No verifiable conditional-payment over-recovery figure (dollars per Medicare claim) above about $1k can be sourced from 3 MSP practitioners.

---

## 13. Sources

Verified via search snippets in this chain (pages not opened, because WebFetch was egress-blocked):
- https://www.dir.ca.gov/dwc/AuditUnit/Audit-Annual-Report2024.pdf (DWC 2024 audit results; fetch blocked this session)
- https://www.dir.ca.gov/DIRNews/2025/2025-105.html (PAR 1.58582 for 2026)
- https://www.workcompcentral.com/news/article/id/0f555ebb823fb34ffda7ec12cf944bd595522c1e
- https://www.verisk.com/blog/cmss-s111-daily-cmps-rate-for-nghp-reporting-increased-to-1512/
- https://www.verisk.com/blog/the-section-111-connection-to-conditional-payments-and-claim-outcomes/
- https://www.cms.gov/files/document/january-15-2026-medicare-secondary-payer-certain-civil-money-penalties-non-group-health-plan-webinar.pdf-0
- https://cms.gov/medicare/coordination-benefits-recovery/mandatory-insurer-reporting-nghp/nghp-civil-money-penalties
- https://www.federalregister.gov/documents/2023/10/11/2023-22282/medicare-program-medicare-secondary-payer-and-certain-civil-money-penalties
- https://towermsa.com/2023/10/12/cms-section-111-penalties-rule-focuses-on-untimely-reporting/
- https://towermsa.com/services/section-111-services/section-111-reporting/ (fetch blocked this session)
- https://codes.findlaw.com/ca/labor-code/lab-sect-4650/
- https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499%2F0440%2FSections%2F0440.20.html
- https://claraanalytics.com/products/msp-compliance/
- https://ir.cccis.com/news-releases/news-release-details/ccc-intelligent-solutions-completes-acquisition-evolutioniq
- https://www.furtherai.com/blog/best-ai-claims-processing-and-adjudication-tpas (fetch blocked this session)
- https://ushur.ai/blog/ai-agents-in-workers-compensation
- https://www.v7labs.com/blog/ai-tpa-software-insurance
- https://www.aclaimant.com/blog/workers-compensation-software
- https://www.workerscompensation.com/expert-analysis/top-5-medicare-secondary-payer-predictions-for-2026/
- https://www.examworkscompliance.com/welcome/blog/cms-publishes-final-rule-on-section111-penalties
- https://www.sandersoncomp.com/blog/in-depth-cms-fina-rule-analysis
- https://apptechllc.com/what-you-need-to-know-about-mmseas-civil-monetary-penalties-for-section-111-reporting/

Unverified this session: BLS adjuster count and wage; US open indemnity claim inventory; TPA contract penalty-allocation norms; NY penalty statutes; NEJM AI ICD-coding study; claims-system feature depth.
