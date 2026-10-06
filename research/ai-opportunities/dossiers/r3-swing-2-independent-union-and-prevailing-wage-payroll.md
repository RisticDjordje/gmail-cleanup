# Independent Union and Prevailing-Wage Payroll Verification Layer (Commercial MEP Subs)

**Date:** 2026-10-06 · **Round:** 3 (swing idea 2) · **Previous score:** 0 (never scored) · **New score: 28/100** · **Verdict: PASS**

**One-liner:** a payroll-agnostic AI checker for union MEP and fire-protection subs with $20-300M revenue. It reads the payroll register and timecards from Vista, Sage 300 CRE, Foundation, ADP and others. It uses an LLM to turn CBAs and wage determinations into versioned rules, recomputes every hour with a deterministic engine, and flags fringe, classification, apprentice-ratio and remittance errors. The plan was to expand later into AP, job cost, WIP and finally the GL.

> **Research caveat:** at this stage I made one WebSearch call. A second was refused because the shared per-turn budget of 200 searches was used up. WebFetch was egress-blocked (hcmtradeseal.com returned EGRESS_BLOCKED, as did every domain the deep dive and red team tried). **Verified this session:** Miter's $40M Series B led by Battery Ventures, $78M total, and roughly 2 of every 100 US construction workers paid through it (finsmes, citybiz, pulse2, Yahoo Finance search results). The other facts come from search snippets the deep dive and red team collected. I mark them as snippet-verified, recalled, or estimated. Statute citations (ERISA §502(g)(2), FCA, 18 USC 1001) are from memory.

---

## 1. Verdict and score rationale

| Dimension | Score /10 | Note |
|---|---|---|
| Market size | 4 | Wedge SAM is about $200-300M (estimate). The $1-1.6B full-suite TAM needs an ERP expansion that a small team cannot fund. |
| Pain intensity | 3 | The pain is real but episodic: fund audits every few years and GC correction notices. The weekly, computable half is already checked for free in LCPtracker. |
| Whitespace | 2 | Miter ($78M, verified), Trayd ($15M), LCPtracker validation (50-80+ checks, snippet), and Dili, HCM TradeSeal, WagePath, Lumber, eBacon and Passport Workforce, which all sell some version of this checker (snippets, scale unverified). |
| AI leverage | 6 | Turning CBAs into rules is a real LLM win. But this is exactly where silent extraction errors happen, so it needs expert sign-off for each local. |
| GTM feasibility | 3 | No budget line. The free 3-year mock-audit sale is expensive to deliver and legally awkward. CPA and VAR channels have conflicts of interest. |
| Defensibility | 3 | Miter and Trayd build the same rule library inside payroll, where it gets used every week. Wage determinations on SAM.gov are public. |
| Founder fit | 4 | A technical founder can build the engine, but the business depends on scarce construction-payroll curators and construction-counsel credibility. |

**Why 28 and not 40+:** round-1 finalists scored 40-45 because each had a buyer with budget and either a clear contingency/recovery ROI or an open lane. This idea has neither. Four independent red-team findings stack up:

1. The wedge is crowded on both sides: funded payroll processors that are correct by design, plus free downstream portal validation.
2. The checker re-checks the payroll system against its own inputs. It cannot see misclassification or shifted hours, which are the violations that create real exposure.
3. A persistent log of flagged, unremedied underpayments could serve as scienter evidence under the False Claims Act. That cuts against the "evidence moat" and the mock-audit motion.
4. Success churn: once the rate tables are fixed, the exception queue goes quiet.

**Both red-team pivots point to a business we already passed on.** The "sell to trust funds, TPAs and fund-audit CPAs" pivot is in substance dossier **r2-07 (AI payroll-compliance audit engine for Taft-Hartley funds), scored 33/100 PASS**. Its problems were a software TAM of about $10-60M, quarterly trustee boards, and a channel whose revenue the tool cuts. Re-proposing it does not raise this idea's score.

---

## 2. Thesis (strongest version, and why it still fails)

**The strongest version:** do not process payroll. Be the independent, deterministic verification and evidence layer for union and prevailing-wage labor cost at union MEP subs that stay on Vista, Sage 300 CRE or Foundation. The selling points would be:

- No cutover, no year-end dependency, no payroll API, no tax-filing liability.
- It works mid-job.
- The land is a "mock fund audit" on 3 years of history.
- Expansion follows the same translate-with-LLM, verify-deterministically pattern: AP to cost code, WIP for the surety, and finally the GL, timed to Sage 300 CRE shops re-implementing anyway.

**Why it fails:**

- **The computable errors are already caught.** Vista and Foundation compute correctly once rates are keyed. LCPtracker Pro runs 50-80+ checks on every prevailing-wage upload and can block non-compliant submissions, usually paid for by the GC or agency (snippet from lcptracker.com via red team).
- **The expensive errors are invisible.** Misclassification, unreported or shifted hours, and travelers' fringes sent to the wrong fund all come from what happened in the field. The payroll register does not show them.
- **Funded processors will give the audit away.** Miter (just raised $40M, verified) and Trayd will run "import your last 12 months and we'll show your errors" as a free switching pitch.
- **What is left is a feature at about $15-22k ACV,** with high CAC and churn once the first cleanup is done.

---

## 3. How the work is done today (domain description, not verified)

- **Weekly payroll.** Foremen submit time on paper or through HCSS, busybusy, ClockShark, Rhumbix or Procore. The clerk keys hours by job, cost code, local, craft/class and shift/OT. Rate tables are maintained by hand: CBA sheets usually reset on a fixed annual date (often around June 1 for inside wiremen), Davis-Bacon wage determinations come from SAM.gov, and state determinations from agencies such as CA DIR, NY BOL and WA L&I. Reciprocity rules decide which fund gets a traveler's fringes. Gross-to-net runs in the ERP or a service bureau.
- **Certified payroll.** Each week, a WH-347 or state CPR goes up to LCPtracker, Elations, a state portal or the GC's system. The clerk answers correction notices and tracks apprentice ratios.
- **Monthly fringe remittance.** Each fund has its own report and payment: H&W, pension, annuity, NEBF, JATC, LMCC and dues check-off.
- **Fund audits.** Multi-year lookbacks. Delinquent contributions carry interest, liquidated damages of up to 20%, and attorneys' fees (ERISA §502(g)(2), from memory).
- **AP, billing and close.** Invoice coding, AIA G702/G703 pay apps (Siteline automates these), lien waivers, and WIP schedules for the surety and bank. Back-office staff is typically 2-6 people.

---

## 4. TAM (estimates unless marked)

- **Anchor (snippet-verified by deep dive):** NAICS 238 receipts were about $1.28T in the 2022 Economic Census.
- **Core ICP:** about 15-25k commercial MEP, fire-protection and sheet-metal subs with 50-500 field workers. Of those, about 50-60% are union or do recurring prevailing-wage work, which gives **about 8-15k firms**.
- **Wedge ACV:** $8-12 per field employee per month at about 150 FTE is about $15-22k. **Wedge SAM is about $200-300M.**
- **Full suite** (AP, job cost, WIP, GL): ACV about $60-90k, TAM about $0.9-1.6B. This depends on winning an ERP replacement against Sage Intacct Construction, Trimble Construction One and Acumatica, which is a capital-heavy step.
- **Practical ceiling:** if most of the pain-heavy prospects switch to Miter or Trayd and the rest are mature Vista shops, the realistic paying base is a fraction of the SAM. On its own, the wedge looks like a business of a few million to about $20M ARR (estimate).

---

## 5. Competitors

| Name | Type | Scale / funding | Status | Threat to this idea |
|---|---|---|---|---|
| [Miter](https://www.finsmes.com/2026/09/miter-raises-40m-in-series-b-funding.html) | AI-native construction payroll/OS (union, Davis-Bacon, state PW, certified payroll, job cost) | $40M Series B (Battery, with Bessemer and Coatue), $78M total, about 2% of US construction workers paid | **Verified this session** | High. Correct by design, and a free payroll audit is its natural switching pitch. |
| [Trayd](https://alleywatch.com/2026/03/trayd-construction-payroll-workforce-management-platform-funding-specialty-trade-contractors-anna-berger/) | AI-native specialty-trade payroll and back office | $4.5M seed (Suffolk Technologies) + $10M Series A (White Star, with RXR), $15M total | Snippet (deep dive) | High. GC-backed, union and Davis-Bacon rules. |
| [LCPtracker](https://lcptracker.com/lcpcertified/) | Agency/GC certified-payroll portal with validation | Used by DOE, Caltrans, CDOT (snippets) | Snippet | High. Free-to-the-sub validation of the prevailing-wage half. |
| [Dili](https://www.dili.com/) | AI certified-payroll checking against prevailing-wage requirements | Unknown | Snippet | Direct. Buyer focus unverified. |
| [HCM TradeSeal](https://hcmtradeseal.com/risk-compliance/union-certified-payroll/) | Pre-payroll union wage and fringe validation | Unknown | Snippet (fetch blocked) | Direct. |
| [WagePath](https://wagepath.com/) | Union, prevailing-wage and remittance automation | Unknown | Snippet | Direct, including remittance reconciliation. |
| [Lumber](https://www.lumberfi.com/lp/union-reporting) / [Worklio](https://www.worklio.com/solutions/union-payroll) / [Dapt](https://www.dapt.tech/blog/union-payroll) / eBacon / [Passport Workforce](https://passportworkforce.com/certified-payroll-prevailing-wage) | Union and certified payroll products | Unknown | Snippet | Each bundles verification for free inside payroll. |
| [Sage HCM](https://www.sage.com/en-us/sage-construction/payroll/) / [hh2](https://www.hh2.com/) / [Kissinger](https://www.kissingerassoc.com/kissinger-products/union-payroll) / [Penta](https://penta.com/erp-solutions/construction-payroll/union-payroll/) | Incumbent-ecosystem union payroll add-ons | Sage plc public; others unknown | Snippet | Already hold the sits-beside-the-ERP position. |
| Trimble Viewpoint Vista / [Foundation](https://www.foundationsoft.com/learn/is-ai-safe-for-certified-payroll-and-compliance-reporting/) | Incumbent ERPs with mature union and certified payroll | Trimble public; Foundation private | Recalled / snippet | Can add LLM rate ingestion as a feature. |
| [Cru by Constrafor](https://cru.ai/) | AI-native sub financial OS (AP, job cost, billing) | $14M equity + $250M credit facility | Snippet | Blocks the first expansion step. |
| [Siteline](https://www.siteline.com/) | Sub pay apps and lien waivers | Funding unverified | Snippet | Owns billing. |
| [Adaptive](https://www.prnewswire.com/news-releases/adaptive-closes-19m-series-a-to-transform-construction-finance-with-ai-and-automation-302196928.html) | AI construction accounting (SMB/residential) | $19M Series A (verified PR) | Verified (scout) | Low near term. |

---

## 6. Wedge and model (as proposed)

- **Wedge:** a "Labor Cost Verifier" for IBEW/NECA and UA/SMACNA subs with 75-400 field workers on Vista or Sage 300 CRE, in 2-3 dense union and prevailing-wage states. Inputs come in through read-only exports or connectors. An LLM extracts the rules and a specialist approves each local's rule set. The deterministic engine produces an exceptions queue, a corrected WH-347/CPR, and a per-fund remittance reconciliation.
- **Pricing:** $8-12 per field employee per month with a $1,000-1,500/month floor. Modules for AP and job cost, the WIP/surety package and the GL. Conversion fee of $25-75k. A paid mock audit at $5-15k.
- **Channels:** construction CPAs, surety agents, NECA/MCAA/SMACNA and CFMA chapters, and GCs.
- **Unit economics (red-team estimate):** CAC $20-40k plus $5-10k onboarding against $15-22k ACV at 75% gross margin gives an 18-36 month payback. With 15-25% logo churn, LTV/CAC is about 1.5-3x. That does not clear the bar.

---

## 7. What's good

- **The problem is real and expensive when it hits.** Multi-local union fringe rules, reciprocity and state prevailing wage are hard to get right. ERISA delinquency, back wages and GC back-charges are real costs.
- **The technical pattern is sound.** Translating with an LLM and verifying deterministically suits CBA text plus arithmetic, and it is a reusable engine.
- **Demand and pricing power are validated.** Miter's $40M Series B (verified) and Trayd's Series A show investors and contractors will pay for union payroll complexity.
- **The refined wedge avoids the worst structural traps.** There is no cutover, no tax-filing liability and no payroll-API margin squeeze.
- **SAM.gov wage determinations reference specific local CBAs.** That gives a free public index for seeding a rule library (domain knowledge; format unconfirmed).

## 8. What's bad, by lens

**Competition**
- The "open lane" claim is false. Miter, Trayd, Dili, TradeSeal, WagePath, Lumber, eBacon, Passport and the incumbent add-ons all sell some form of the checker.
- Miter and Trayd customers will not buy a second checker. The Vista shops that remain feel the least pain.
- Every expansion step has a funded owner: Cru (AP and job cost), Siteline (billing), Sage, Trimble and Acumatica (GL).

**GTM**
- There is no budget line, and demand is reactive: compliance products sold on fear tend to close after an audit.
- The free 3-year lookback needs on-prem database access through IT or VARs, curation of the prospect's CBAs, and specialist review. That is thousands of dollars of pre-sales cost per prospect (estimate).
- The 30-90 day sales cycle is unsupported. 3-6 months is more realistic (estimate).
- CPA firms that audit for funds have a conflict pushing this tool to employers. Sage VARs earn on Intacct migrations.

**Feasibility and legal**
- The checker re-verifies the system against its own inputs, so it cannot attest to field truth.
- An LLM rule-extraction error gets applied confidently to every employee, producing false "clean" results (liability) and false alarms (churn).
- A discoverable exceptions log is potential FCA "reckless disregard" evidence against the customer that signs the WH-347 (counsel analysis, statute from memory). Counsel may insist on privileged structures, which slows every deal.
- Federal tailwind is weaker. Per snippets, DOL told a federal court on 25 Jun 2026 that it would no longer defend parts of the 2023 Davis-Bacon rule (operation of law, offsite workers, and the material-supplier distinction), and the court found those expansions unlawful. IRA prevailing-wage hooks were reduced by the 2025 reconciliation law (recalled).

**Market**
- The wedge SAM is about $200-300M. Venture scale depends on an ERP expansion that contradicts the small-team, limited-capital constraint.

## 9. Non-obvious insights

1. **An auditor has to be independent of the inputs, not just the vendor.** "Payroll-agnostic" is a distribution claim, not real independence. Only parties with their own evidence (trust-fund auditors with contractual audit rights, or tools that ingest field data such as daily reports and GPS) can catch the violations that cost money.
2. **The pain is concentrated at known moments.** Annual CBA rate resets (often around June 1), a fund-audit notice, a GC correction notice, a new prevailing-wage job. A product sold continuously against episodic pain will churn after its first success.
3. **Both red-team pivots point back to r2-07 (33, PASS).** The trust-fund-side audit engine has already been evaluated. Its small TAM and gatekeeper problems still hold.
4. **The only contractor-side version with a budget line is a managed "union and certified payroll desk"** paid from payroll-clerk headcount ($40-80k/yr). It handles weekly CPR uploads, per-fund remittances and audit prep using the same engine. That makes it a tech-enabled services business (cash flow), not a venture-scale software one, and it competes with service bureaus and Miter/Trayd onboarding.
5. **The engine's best exit may be as a supplier.** Licensing a curated cross-local CBA rule library by API to ADP, Paychex, LCPtracker or ERP vendors is a plausible small business or acqui-hire path. It is not a venture thesis on its own.

## 10. Cheapest validation test (2-3 weeks, under $5k)

Recruit 10 union MEP subs ($20-150M, on Vista, Sage 300 CRE or Foundation) through 2-3 construction CPAs or a NECA chapter. For each, take 12 months of payroll-register exports plus the CBA wage sheets for their top two locals. Recompute fringe and rate by hand, with spreadsheet help from a contract construction-payroll specialist. Measure three things:

- (a) Median dollar exposure found, against a $15-22k ACV.
- (b) The share of exposure that comes from computable rate or fringe errors versus field or classification issues the tool cannot see.
- (c) Whether the controller or counsel will accept a vendor-held exceptions record.

**Go only if** median exposure is at least about 2x ACV and recurs (not one-time cleanup), and at least 3 of 10 say they would pay before their next audit.

## 11. Kill criteria

- Median found exposure in 10 lookbacks is under about 2x the proposed ACV, or is mostly one-time rate-table cleanup.
- Fewer than 3 of 10 controllers commit to a paid pilot at $1k+/month, or most say "LCPtracker and my payroll system already do this".
- Construction counsel at 2 or more prospects refuses a vendor-hosted exceptions log without a privileged structure.
- Miter or Trayd ships a free "payroll health check / audit import" for non-customers.
- Curating one local's CBA to a production-grade rule set takes more than about 40 specialist hours, or LLM extraction error rates on CBA clauses stay above about 2% after review.

## 12. Sources

- Miter Series B (verified this session): https://www.finsmes.com/2026/09/miter-raises-40m-in-series-b-funding.html · https://www.citybiz.co/article/912194/ai-construction-platform-miter-raises-40m-led-by-battery-ventures/ · https://pulse2.com/miter-raises-40-million-series-b-for-ai-powered-construction-platform/amp/ · https://finance.yahoo.com/technology/ai/articles/miter-ai-platform-construction-raises-130000536.html · https://exchange.construction/news/miter-40m-series-b-construction-payroll-ai/
- Trayd: https://www.businesswire.com/news/home/20250204725270/en/Trayd-Meets-Rising-Demand-for-Construction-Payroll-Solutions-With-$4.5M-Seed-Round-Led-by-Suffolk-Technologies · https://alleywatch.com/2026/03/trayd-construction-payroll-workforce-management-platform-funding-specialty-trade-contractors-anna-berger/ · https://www.tipranks.com/news/private-companies/trayd-raises-10m-series-a-to-scale-construction-payroll-platform-amid-compliance-pressure
- LCPtracker: https://lcptracker.com/lcpcertified/ · https://lcptracker.com/lcptracker-pro/ · https://lcptracker.com/solutions/lcptracker · https://www.energy.gov/infrastructure/weekly-dba-payroll-tracking-lcptracker
- Checker competitors: https://www.dili.com/ · https://hcmtradeseal.com/risk-compliance/union-certified-payroll/ · https://wagepath.com/ · https://passportworkforce.com/certified-payroll-prevailing-wage · https://www.lumberfi.com/lp/union-reporting · https://www.worklio.com/solutions/union-payroll · https://www.dapt.tech/blog/union-payroll · https://enjoywurk.com/tax-compliance/union-reporting-construction/
- Incumbent ecosystem: https://www.sage.com/en-us/sage-construction/payroll/ · https://www.foundationsoft.com/learn/is-ai-safe-for-certified-payroll-and-compliance-reporting/ · https://www.hh2.com/construction-human-resources/ai-payroll-automation-and-compliance-risk-what-construction-cfos-need-to-know · https://www.kissingerassoc.com/kissinger-products/union-payroll · https://penta.com/erp-solutions/construction-payroll/union-payroll/ · https://www.altavistatech.com/blog/sage-300-cre-review · https://www.bakertilly.com/services/sage-300-cre-to-sage-intacct-construction
- Adjacent: https://cru.ai/ · https://www.constrafor.com/the-build-up/series-a-announce · https://www.siteline.com/ · https://www.prnewswire.com/news-releases/adaptive-closes-19m-series-a-to-transform-construction-finance-with-ai-and-automation-302196928.html
- Davis-Bacon 2026 status (snippets): https://dailyreporter.com/2026/08/27/department-of-labor-maintains-updated-davis-bacon-rule/ · https://www.ovabc.org/davis-bacon-repeal-and-the-june-2026-court-order-what-it-means-for-abc-ohio-valley-contractors/ · https://www.dol.gov/agencies/whd/government-contracts/construction/rulemaking-davis-bacon
- Census anchor (not fetched): https://data.census.gov/webpages?q=238%3A+Specialty+trade+contractors
- Related prior dossier: research/ai-opportunities/dossiers/r2-07-ai-payroll-compliance-audit-engine-for-buildi.md (trust-fund-side version, 33/100 PASS)
