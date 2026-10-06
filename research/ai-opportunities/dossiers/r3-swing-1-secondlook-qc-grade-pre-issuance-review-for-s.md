# R3 Swing 1: SecondLook, QC-grade pre-issuance review for SNAP (then Medicaid)

**Date:** 2026-10-06 · **Round:** 3 (swing) · **Previous score:** 0 (scout and deep dive, never scored by the IC) · **New score: 32/100** · **Verdict: PASS.** Reopen only on the channel trigger in section 11.

> **One-liner (as refined):** A system-agnostic layer that reads SNAP case evidence (paystubs, employer letters, self-employment records, shelter bills), reconciles it against the data the caseworker keyed, deterministically recomputes the allotment, and flags only differences above the federal QC tolerance. Each flag cites the source line and the policy rule. It is sold first to state QC and error-reduction units, then moved upstream to pre-issuance.

> **Evidence limits:** This round I used 2 WebSearch calls (the budget). WebFetch was blocked by the egress proxy for maximus.com and floridaphoenix.com, the same blocks as earlier rounds (usda.gov, statescoop, govexec, cornell LII and others). GitHub API access to PolicyEngine repos was not enabled for this session. Facts marked **[V]** come from search snippets or from earlier-round verification (the PolicyEngine-mirrored FNS FY2025 PER table). **[M]** means from memory and unverified. **[E]** means estimate. No company or figure is invented. Anything that could not be opened is flagged.

---

## 1. Verdict and score rationale

**32/100. PASS.** For calibration, round-1 finalists scored 40-45, and 70+ means genuinely compelling.

The pain is real, dated, budgeted and large:
- The 75% state admin share went live Oct 1, 2026 [V, NPR].
- Benefit cost share starts FY2028 at 0/5/10/15% by PER tier [V].
- The FY2025 national PER was 10.62%, and only 9 states are under 6% [V].
- The state bill at steady state is roughly $9-12B/yr [E; Polimetrics headline $12B, PolicyEngine-based computation about $9.4B FY2028 / $11.1B steady state].

That is the best "risk shifted onto the buyer by statute" setup in our pipeline. As a startup opportunity for this founder, though, it fails most of our screens:

1. **It is not an empty market.** In 2026 the exact feature (AI reads the case file before issuance and flags wrong or missing data) shipped or was funded at Maximus (Jan 2026), Nava with Amplifi (a Google-funded open-source assistant piloting in Riverside County, plus the Pennsylvania contract), Code for America + Anthropic, SAS (Nevada), Gainwell, and NC's in-house build on a $1.75M PTIG grant. Florida posted its $4M RFQ on July 27, 2026, with the award due by Sept 1, 2026 [V, DCF status report via search]. The largest near-cliff buyer is probably locked.
2. **The moat layers are commoditized.** PolicyEngine-US (AGPL) already encodes SNAP federal rules plus state options [V, prior round cloned repo]. Frontier labs give away extraction. Incumbents own the workflow.
3. **The incentive is non-monotonic for the biggest buyers.** At a PER of 13.33% or higher, cost share is delayed to FY2029/FY2030. Florida's unofficial FY2026 rate is about 14.49%, and local press literally ran "Increasing SNAP error rates could be good news for Florida" [V, Florida Phoenix/WLRN, Sept 2026].
4. **The ROI cannot be proven inside a runway.** FY2028 and FY2029 liability are set by years that have already closed. FY2027 is the first year a vendor can influence, and it drives FY2030 liability. A startup realistically ships into FY2028 measurement, which drives FY2031. The per-state PER standard error is about 1.15 pp, wider than half of a 2-point band [V, PolicyEngine bootstrap].
5. **Founder fit is the worst profile.** Single-buyer RFP sales, past-performance gates, StateRAMP and IRS Pub 1075, and SI-controlled integration all work against a capital-light technical team.

**Why it is not lower:** The QC-unit workbench pivot (all three red teams converged on it) is a real, honest, capital-light product. It needs no SI hook, has no beneficiary exposure, uses data the buyer owns, and serves a concentrated universe of 53 buyers. But it is a $20-60M SNAP SAM services-flavored business [E], not the opportunity we are hunting.

---

## 2. Fact-check of the scout's key claims

| Claim | Status | Evidence |
|---|---|---|
| Cost-share tiers 0/5/10/15% from FY2028 | **Verified (snippets)** | Ballotpedia, CRS IN12723 |
| 75% state admin share from FY2027 | **Verified** | NPR, Oct 1, 2026 |
| 41 states at or above 6% on FY2025 PER; national 10.62% | **Verified** | USDA June 24, 2026 release (via snippets / PolicyEngine mirror) |
| "Few/no AI-native entrants" | **Contradicted** | Maximus Accuracy Assistant, Nava/Amplifi (Google $1.5M), CfA + Anthropic, SAS, Gainwell, Hyperscience, NC in-house |
| "Beneficiary-neutral, raises underpayments as often as it catches overpayments" | **Contradicted** | FY2025 national overpayments 9.28% vs underpayments 1.33%, so about 87% of error dollars are overpayments [V, FNS table] |
| Later years use an earlier year's rate | **Verified, and worse than pitched** | FY2028 uses the state's choice of FY2025 or FY2026. FY2029+ uses the 3rd preceding year (7 USC 2013(a)(2), per the PolicyEngine rulespec) [V prior round] |
| Very-high-error states get delays | **Verified** | PER x 1.5 >= 20% (that is, 13.33% or higher) means a delayed start. AK, NM, DE, GA, IL, OR, DC on FY2025 [V, Cato] |
| Florida $4M AI appropriation | **Verified, now likely awarded** | RFQ posted Jul 27, 2026; award by Sept 1, 2026 [V, DCF report via search]. Awardee not identified |
| "$5.7B startup" targeting benefit fraud | **Identified this round** | Checkr (background checks, about $5B valuation from its 2022 round), pursuing identity verification for benefits. Fraud/identity framing, not payment accuracy [V, Yahoo/AOL via BI snippet] |
| Eligibility interviewers about 140-150k at $50-55k | **Unverified [M]** | BLS not reachable |

---

## 3. Thesis (strongest honest version)

SNAP has become a state-liability program on a clock. The state system already does the benefit math. Dollar errors come from **wrong or stale inputs** (misbudgeted earned income, household composition, unacted changes, wrong state-option deductions). The defensible product is therefore an **evidence-to-keyed-data reconciler** that applies the federal QC reviewer's method (FNS Handbook 310 [M]) to 100% of actions instead of about 900 sampled cases a year. A deterministic recompute shows that each flagged discrepancy moves the allotment by more than the $58 FY2026 tolerance [V]. The pitch: "your QC reviewer, on every action, before the benefit goes out."

**Why that thesis does not make a venture-backable startup for this team:** Every layer of it (extraction, rules, workflow, risk scoring) is now owned or given away by someone else. The outcome metric cannot be attributed to the vendor. The highest-pain buyers either already bought or are paid to stay bad.

---

## 4. Workflow today (condensed)

1. Application (online, paper or phone), then a mandatory interview.
2. Verification checklist. The client returns documents within about 10 days, often as phone photos, into an EDMS (OnBase or Northwoods [M]).
3. The caseworker keys income, deductions and household into an SI-run eligibility system: Deloitte, Accenture, Conduent, Gainwell, Maximus, or state-built such as CalSAWS or ACCESS Florida. The system's rules engine computes the allotment.
4. Data matches (state wage records, The Work Number, SAVE, IEVS/NDNH) arrive as backlogged alerts.
5. Supervisor second-party review on a small sample, then issuance to EBT.
6. Semiannual reports, interim changes and recerts repeat steps 2-5. Interim changes and earned-income re-budgeting are where errors cluster [M].
7. **Federal QC:** a state sample of 197-1,137 cases/yr (median about 920) [V], with independent third-party verification and a $58 tolerance. FNS re-reviews a subsample, then arbitration, then official PER each June.
8. Corrective action plans and spreadsheet "case reading," often with consultants (PCG, Change & Innovation Agency [M]).

**Structural blind spot:** Client-caused errors (unreported income or members) are not in the file. A file-only review cannot see them. CAPER (improper denials and terminations) is outside PER [M], so a PER optimizer quietly rewards denials.

---

## 5. TAM / SAM

| Layer | Figure | Basis |
|---|---|---|
| Penalty pool (state cost share, steady state) | about $9.4B FY2028 / $11.1B steady state | [V computed in prior round from PolicyEngine states.json on $95.7B FY2025 issuance]; Polimetrics headline about $12B |
| SNAP pre-issuance software SAM | about $100-300M/yr | [E] about 45-55M actions/yr x $2-5, or about 41 states x $1-4M ACV plus counties |
| SNAP QC-workbench SAM (pivot) | about $20-60M/yr | [E] 53 QC units x $150-400k, plus analytics and arbitration support |
| Integrated eligibility incl. Medicaid six-month redeterminations | about $300-600M/yr | [E] expansion adults; OBBBA Medicaid error penalties later [M] |
| Labor benchmark | about $7-8B wages (about 140-150k interviewers) | [M] context only |

The scout's $0.5-1.5B SNAP software figure is too high by about 3-5x. Effective SAM is also already split among at least 6 funded players.

---

## 6. Competitors

| Name | Type | What they do | Scale / funding | URL |
|---|---|---|---|---|
| Maximus Accuracy Assistant | Public BPO/SI (direct match) | Launched Jan 27, 2026. Analyzes SNAP case files, flags high-risk cases and missing info, verifies data before issuance. Licensable | NYSE: MMS [M multi-$B rev] | https://maximus.com/news/maximus-launches-snap-accuracy-assistant (blocked; via snippets) |
| Nava PBC + Amplifi | Civic-tech PBC, open source | PA H.R.1 SNAP PER contract. AI assistant that flags incorrect or missing data during eligibility work, phase 2 pilot in Riverside County, CA | $1.5M Google GenAI Accelerator grant [V] | https://www.navapbc.com/news/pennsylvania-snap-hr1 |
| Code for America + Anthropic | Nonprofit + frontier lab | Claude-based SNAP caseworker pilot (scope unverified). Publishes PER-reduction guidance | Nonprofit; in-kind [unverified] | https://statescoop.com/code-for-america-anthropic-ai-snap-caseworkers/ |
| SAS Institute | Analytics incumbent | Nevada SNAP payment-integrity AI (June 2026) | Private, about $3B rev [M] | https://www.sas.com/en_in/news/press-releases/2026/june/nevada-snap-payment-integrity.html |
| Gainwell Technologies | PE-owned SI | Predictive models and data validation in SNAP case workflows | Veritas-owned [M] | https://www.gainwelltechnologies.com/resources/news/gainwell-technologies-advances-snap-accuracy-with-predictive-analytics-and-data-intelligence/ |
| NC DHHS (in-house) | State build | ML error-risk model trained on QC data, plus an evidence-flag UI | $1,747,704 PTIG FY2026 [V] | https://www.fna.usda.gov/grant/snap/ptig-2026 |
| Florida DCF AI vendor | Procurement | $4M. RFQ Jul 27, 2026, award by Sept 1, 2026. Awardee not found | $4M appropriation [V] | https://floridaphoenix.com/2026/08/04/florida-democrats-press-desantis-administration-for-details-about-ai-contract-for-snap/ |
| PolicyEngine | Open-source rules-as-code | SNAP federal plus state-option rules (AGPL); SNAP PER explorer and liability rulespec | Nonprofit [M] | https://github.com/PolicyEngine/policyengine-us |
| Hyperscience | AI-native IDP | Pitches SNAP error reduction through document extraction | Venture-backed [M] | https://www.fiercehealthcare.com/sponsored/how-technology-can-help-states-reduce-snap-errors-and-manage-risk |
| Checkr | Well-funded AI background-check co. | Pursuing government identity verification for benefits (fraud framing) | About $5B valuation (2022) [V snippet] | https://www.aol.com/articles/5-7-billion-startup-wants-112101926.html |
| Deloitte / Accenture / Conduent / Optum | Eligibility SIs | Own systems of record and the pre-issuance integration point. Deloitte KY IE contract over $157M | Large | https://kffhealthnews.org/insurance/state-medicaid-work-requirements-eligibility-systems-deloitte-accenture-optum/ |
| PCG, Change & Innovation Agency | Consultants | Manual QC support, case reading, process redesign | Private [M] | (none verified) |

---

## 7. Wedge and business model (as proposed, and as pivoted)

**As proposed:**
- Phase 0: back-test on the state's QC sample ($50-150k).
- Phase 1: QC copilot ($150-400k/yr).
- Phase 2: pre-issuance per-action ($2-5) or per-household pricing, for a $0.5-5M ACV.
- Funding through PTIG grants and state AI earmarks.
- Target states in the 6-13% bands near a cliff. Avoid states above 13.33%.

**Pivot (red-team consensus):**
- A **QC review workbench plus measurement analytics**: digitize the reviewer's work, compute the variance against the $58 tolerance, prepare arbitration and federal re-review evidence (accuracy, not gaming), and run band-probability and error-element targeting analytics.
- Sold at $150-400k/yr under small-purchase or PTIG funding, or white-labeled through Nava, CfA or QC consultancies.
- Built on PolicyEngine, not a 50-state rules re-encode.
- Extends to Medicaid MEQC/PERM.

Gross margin 70-80% [E] if it stays software. In practice it drifts toward services.

---

## 8. What's good

- **The buyer carries the risk by statute.** States pay 75% of admin now and up to 15% of benefits from FY2028. These are the strongest risk-shift mechanics in our pipeline.
- **Dated, public, per-state pain.** Every state's PER and confidence interval is published, so targeting is precise.
- **Benefit math is closed-form.** The deterministic recompute is real, and the LLM's job (extraction) is well-scoped and auditable.
- **The QC-unit wedge is clean.** State-owned data, no beneficiary-facing decision, a concentrated universe of 53 buyers, and it builds a labeled corpus.
- **Grant money that bypasses the 75% squeeze exists.** PTIG is 100% federal (NC precedent).
- **Medicaid six-month redeterminations** (after Dec 31, 2026 [M]) give a second, longer-dated driver.

## 9. What's bad, by lens

**Competition**
- The exact feature is already shipped or funded by Maximus, Nava/Google, CfA/Anthropic, SAS, Gainwell and NC. Frontier-lab-subsidized open-source tools cap county ACVs near zero.
- PolicyEngine commoditizes the rules library. Extraction is a frontier-lab commodity.
- What remains is integration and services, which favors firms with existing contracts.

**GTM**
- The incentive inverts for FL (unofficial FY2026 about 14.49%) and other states above 13.33%. Nine states are already under 6%.
- FL, PA, NV and NC are spoken for. Each lost state is locked for a 3-5-year term.
- CAC of $300k-$1M+ per state [E] against 1-3 closes in two years.
- Past-performance gates favor incumbents, and contingency pricing is likely not allowable [M].
- Political scrutiny: FL Democrats and Rep. Frost publicly pressed DCF on the AI contract [V].

**Feasibility**
- "Pre-issuance" requires an SI change order. "System-agnostic" read-only extracts arrive after issuance, so the product cannot be both.
- About 87% of error dollars are overpayments, so the tool pushes reductions, with adverse-action notice and fair-hearing exposure.
- Per-state PER noise (median SE about 1.15 pp) makes ROI unprovable at renewal.
- Client-caused errors are invisible in the file.
- Phone-photo paystub extraction against a $58 tolerance risks false flags and alert fatigue.
- FTI under Pub 1075, SSA computer-matching limits, and the need for FedRAMP/StateRAMP LLM endpoints add 6-12 months of compliance before production data.

**Timing**
- FY2028 and FY2029 liability is already fixed by closed years.
- The startup's first measured influence is about FY2028 measurement, which drives FY2031 liability. That is 4-5 years from first meeting.

**Founder fit**
- Government go-to-market is the bottleneck, not engineering. The plan needs an ex-SNAP director or QC chief and a contract vehicle the team does not have.

---

## 10. Non-obvious insights worth keeping

1. **The delay carve-out makes the highest-error states the worst early buyers.** The 13.33% trigger rewards staying bad. Sell near-cliff 6-13% states only.
2. **"Beneficiary-neutral" is false by default** (about 87% overpayment dollars). Credibility requires checking CAPER and underpayments explicitly, and even then the tool's net effect is to cut benefits.
3. **Sampling noise is a product, not just a risk.** Band probabilities and noise ratios tell a state which 2-3 error elements to target with human review. This is the most defensible analytic insight here, and nobody is selling it (that is inference).
4. **The QC unit defines "error" and owns the labeled data.** It is the only beachhead without SI dependence or due-process exposure.
5. **Fixed liability years mean the sales story is about FY2027+ performance**, which most pitches in market get wrong.
6. **Pattern lesson for the pipeline:** When a statute shifts risk onto a concentrated public buyer with a public scoreboard, incumbents and frontier labs arrive within 6-9 months. The window had closed by the time we looked. This argues for screening "statute-created pain" ideas on time-since-enactment (OBBBA, July 2025 [M]).

---

## 11. Cheapest validation test (only if reopening)

**A 30-day channel test, near zero capital.**
1. Build a PolicyEngine-based QC variance calculator plus extraction on synthetic and public case examples (2 weeks).
2. Demo to Nava, Code for America, PCG and one mid-tier SI without an accuracy product. Ask for one thing: a signed LOI to white-label it as a QC re-review/arbitration-prep module.
3. In parallel, ask 3 QC directors in 6-13% states (e.g., TX at 9.34% or CA at 10.93% [V], or mid-size Midwest/Northeast states) whether they would pay $50-150k under small-purchase rules for a back-test of their own FY2025 QC sample.

**Reopen trigger:** 2 signed channel LOIs, or 1 paid QC back-test, within 90 days. Otherwise stay PASS.

**Kill criteria:**
- No channel LOI within 90 days.
- QC directors say federal re-review/arbitration support is already handled adequately by staff or consultants.
- Back-test recall on QC-cited dollar errors visible in the file is below about 50%, which would mean client-caused errors dominate.
- Maximus, Nava or CfA announce a QC-workbench module.

---

## 12. Sources

- https://news.ballotpedia.org/2026/07/13/usda-releases-snap-error-rate-data-that-could-determine-states-share-of-benefit-costs/
- https://www.usda.gov/about-usda/news/press-releases/2026/06/24/usda-announces-fy-2025-state-payment-error-rates-snap (blocked; via snippets)
- https://www.npr.org/2026/10/01/nx-s1-5985222/snap-benefits-program-october-change-funding
- https://www.congress.gov/crs-product/IN12723
- https://perc.tamu.edu/blog/2026/08/snap-farm-bill.html
- https://www.cato.org/blog/states-are-gaming-snap-error-rates-avoid-federal-penalties
- https://polimetrics.substack.com/p/snaps-new-error-rate-penalty-a-12
- https://floridaphoenix.com/2026/09/07/increasing-snap-error-rates-could-be-good-news-for-florida-really/
- https://www.wlrn.org/government-politics/2026-09-08/increasing-snap-error-rates-could-be-good-news-for-florida-really
- https://floridaphoenix.com/2026/08/04/florida-democrats-press-desantis-administration-for-details-about-ai-contract-for-snap/
- https://floridaphoenix.com/wp-content/uploads/2026/09/DCF-Monthly-QC-Report-9.1.26.pdf (RFQ Jul 27 / award by Sept 1, via search snippet; PDF blocked)
- https://frost.house.gov/media/press-releases/congressman-maxwell-alejandro-frost-and-florida-democrats-press-desantis-administration-for-answers-on-planned-use-of-ai-in-snap-eligibility-determinations
- https://www.clickorlando.com/news/florida/2026/05/28/florida-budget-considers-ai-for-snap-eligibility/
- https://maximus.com/news/maximus-launches-snap-accuracy-assistant (blocked)
- https://www.navapbc.com/news/pennsylvania-snap-hr1
- https://statescoop.com/code-for-america-anthropic-ai-snap-caseworkers/
- https://codeforamerica.org/news/reducing-payment-error-rates-for-snap/
- https://www.sas.com/en_in/news/press-releases/2026/june/nevada-snap-payment-integrity.html
- https://www.gainwelltechnologies.com/resources/news/gainwell-technologies-advances-snap-accuracy-with-predictive-analytics-and-data-intelligence/
- https://www.fna.usda.gov/grant/snap/ptig-2026
- https://github.com/PolicyEngine/policyengine-us
- https://github.com/PolicyEngine/snap-payment-error-rates (prior round; not re-accessed)
- https://kffhealthnews.org/insurance/state-medicaid-work-requirements-eligibility-systems-deloitte-accenture-optum/
- https://www.fiercehealthcare.com/sponsored/how-technology-can-help-states-reduce-snap-errors-and-manage-risk
- https://www.aol.com/articles/5-7-billion-startup-wants-112101926.html
- https://sg.finance.yahoo.com/news/5-7-billion-startup-wants-112101266.html
- https://www.csmonitor.com/USA/Society/2026/0929/snap-cuts-error-rate
