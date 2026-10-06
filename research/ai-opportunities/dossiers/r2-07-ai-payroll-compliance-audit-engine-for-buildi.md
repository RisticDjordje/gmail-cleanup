# AI Payroll-Compliance Audit Engine for Building-Trades Taft-Hartley Funds

**One-liner:** AI reconciles employer payroll records against union benefit-fund remittances and the collective bargaining agreement (CBA) rate logic, so funds can audit every employer every year instead of every 3-4 years. The add-ons are certified-payroll matching through joint labor-management committees (JLMCs) and alerts before payment-bond claim deadlines expire.

> **Research caveat:** this is the third agent run on this idea that could not verify anything live. The shared WebSearch budget was used up, including at this verdict stage, and the egress proxy blocked direct fetches to pbgc.gov, dir.ca.gov, leginfo, lcptracker.com and others. Every figure below is domain knowledge or a labeled estimate. Not finding an AI-native competitor is **not the same as confirming there is none**.

## Verdict: PASS (overall 33/100)

The pivot to the contractor side is worth a cheap test, but it is a different and still small company.

| Dimension | Score | Note |
|---|---|---|
| Market size | 3 | Software TAM about $30-60M (all industries) and about $10-30M (construction). Services TAM about $200-500M, split across entrenched firms. |
| Pain intensity | 4 | Under-reporting leakage is real (est. 1-2% of $90-130B a year in contributions). But the buyer feels little cost pain, and the auditor feels revenue loss if the tool works. |
| Whitespace | 6 | No AI-native entrant known (unverified). Incumbents could ship a "good enough" feature cheaply. |
| AI leverage | 6 | Messy payroll-register extraction and CBA rate logic suit LLMs well. Horizontal tools commoditize the core reconciliation. |
| GTM feasibility | 3 | Four gatekeepers (TPA, CPA auditor, fund counsel, employer trustees). Quarterly consensus boards. 9-18 month cycles. |
| Defensibility | 4 | Moat is relationships, JLMC data access and labeled audit outcomes, not technology. |
| Founder fit | 2 | Needs a union-benefits insider. The services path needs a CPA-owned attest entity. Heavy PII and SOC 2 load. |

## Revised thesis (strongest version)

The scout's continuous public-data scan fails for three reasons:
- Certified payroll covers only public works, the most-policed segment of union construction.
- Federal copies redact worker names.
- Continuous access to private payroll is legally impossible outside a CBA audit clause.

The deep dive's audit-engine reframe fixes the economics but sells into a channel whose revenue it cuts.

The best version flips to the **contractor side of the pipe**: a *union remittance autopilot* for multi-craft signatory contractors.
- It connects to construction payroll systems (Viewpoint Vista, Foundation, Sage 300 CRE) or payroll APIs.
- It encodes every fund's CBA rates, classifications and reciprocity rules.
- It files each fund's monthly report and keeps an audit-ready trail.

The buyer is fast and single-decision. The return is avoided liquidated damages (typically up to 20%), interest and back-office hours. There are no trustee politics and no ERISA fiduciary exposure.

Phase 2 sells funds and TPAs clean e-remittance and a "verified remitter" tier with lighter audits, which turns employer trustees into allies. A JLMC prevailing-wage intelligence product and bond-deadline alerts are side hooks. The workers' comp premium audit option (about $55-60B in premium) is a separate company that must be validated on its own.

Even the pivot looks like a $10-30M ARR business unless it becomes the cross-fund remittance rail.

## How the work is done today

1. **Monthly remittance.** The employer reports hours by covered employee and classification against CBA rates for pension, health and welfare, annuity, apprenticeship and other funds. Reports arrive through the TPA portal, Excel or paper. The TPA posts them to hour banks. Late payment is easy to see; under-reporting is invisible.
2. **Delinquency collection.** Letters go out at 15-30 days and the account goes to counsel at 60-90 days. Counsel then sues under ERISA §515/§502(g)(2), with liquidated damages, interest, fees and claims on bonds.
3. **Payroll-compliance audit.** Each employer is audited every 3-4 years as an agreed-upon-procedures (AUP) engagement by a specialist CPA firm or in-house field auditor. The auditor reconciles the payroll register, 941s, W-3s, state wage reports (e.g., California's DE-9C), 1099s and the general ledger against remittances. Fees run an estimated $750-3k for a small employer and $5-15k+ for a large one. Elapsed time is driven by **employers stalling on documents**, not by desk time.
4. **Non-signatory leakage.** Union market-recovery staff and watchdogs (Foundation for Fair Contracting, California compliance centers) pull certified payrolls by hand. This work is outside the trust fund's budget.

## TAM (all estimates, unverified)

- Multiemployer defined-benefit plans: about 1,360-1,400 plans with about 11M participants, and about $30-35B a year in contributions. Including health and welfare and other funds: about $90-130B a year.
- Contributing employers: about 150-250k, of which 60-100k are construction signatories. That implies about 40-80k audits a year at $2-4k, or **$80-320M a year in audit spend**, plus about $100-200M in collections legal work.
- Software-only (per-employer pricing): **$30-60M**. Construction-only: $10-30M.
- SAM (building trades in states with electronic certified-payroll data, plus JLMC intelligence): about $35-75M. 5-year SOM: about $6-15M ARR.
- Contractor-side pivot: 60-100k signatories at $1.2-6k a year is about $70-600M on paper. Most are small shops already using payroll software, so the realistic paying base is perhaps 10-20k mid-size multi-craft contractors, about $25-80M.

## Competitors

| Name | Type | Threat |
|---|---|---|
| Taft-Hartley payroll-audit CPA firms (Calibre CPA, Lindquist, Miller Kaplan Arase, Legacy Professionals, Novak Francella; verify) | Incumbent | Own the trustee relationships and the recoverable audit-cost line. Bill hourly, so the tool cuts their revenue. Will adopt horizontal AI tools instead. |
| PE-backed CPA consolidators (Citrin/Blackstone, Grant Thornton/New Mountain, Baker Tilly, CBIZ-Marcum; verify) | Incumbent | Roll up niche practices and roll out central AI tooling. |
| TPAs (Zenith American, BeneSys, Associated, Wilson-McShane, TIC International, Carday, BPA; verify) | Incumbent and gatekeeper | Own the remittance data. Anomaly scoring is a feature they can build on data they already hold. |
| Vitech V3locity | Incumbent platform | Could add a contribution-risk module. |
| LCPtracker, Points North, Elations, eMars | Adjacent | Hold worker-level certified payroll. A union/JLMC portal from them would pre-empt the overlay. |
| DataSnipper (about $100M Series B 2024, about $1B valuation; recalled), MindBridge, Fieldguide, Copilot/Claude in Excel | Horizontal AI | Commoditize the "pre-audit packet" reconciliation. |
| Segal, Milliman, Horizon, Cheiron | Advisors | Have trustee mindshare every quarter. |
| Foundation Software, Viewpoint, Sage 300 CRE, Payroll4Construction | Adjacent (main threat to the pivot) | Already generate union fringe reports. Could add multi-fund e-filing. |
| Dodge, ConstructConnect | Adjacent | Compete for the JLMC intelligence budget. |
| AI-native Taft-Hartley compliance startups | Unknown | None known, **unverified**. |

## Why now

- Construction demand (data centers, fabs, grid, infrastructure law projects) adds covered hours and new contractors faster than auditor headcount grows.
- LLMs make extraction from arbitrary payroll exports, and encoding of CBA logic, cheap.
- State electronic certified payroll: California since about 2016; Illinois and Washington later (verify).

The scout's tailwinds are weak:
- Special Financial Assistance (SFA) went mostly to declining trucking and retail plans, e.g., Central States at about $35.8B. Its conditions (29 CFR 4262.16) do not cover payroll-audit monitoring.
- Prevailing-wage and apprenticeship credits under the Inflation Reduction Act were cut back in 2025, and those records are not public.

## Wedge and business model

- **Original wedge:** a pre-audit reconciliation packet for audit firms at $300-800 per audit. Skeptics argue the realistic price is $50-150, against $750-3k total fees, which gives a $3-10M revenue ceiling.
- **Services path:** an AI-native audit firm bidding 40-60% below incumbents. Gross margin 55-70%. Requires a CPA-owned attest entity.
- **JLMC intelligence:** $25-75k a year. Contingency pricing is allowed only for non-ERISA work (e.g., California Labor Code §1771.2).
- **Never** take a contingency or percent-of-recovery fee from ERISA plans: it creates §406(b) self-dealing and fiduciary-status risk.
- **Pivot:** contractor SaaS priced per fund-report or per employee per month. The upsell is fund-side e-intake and verified-remitter status.

## What's good

- Statutory fee-shifting under §502(g)(2) means delinquent employers pay for enforcement, so there is no "we'd have collected anyway" fight once a fund sues.
- The bond-claim deadline insight is real white space. Audits on a 3-4 year cycle routinely miss Miller Act and state payment-bond windows. This is the cleanest trustee ROI story.
- JLMC privileged access to certified payroll with worker names (California Labor Code §1776; verify) is a legal data edge that outsiders can't easily copy.
- Labeled audit outcomes ("reported vs. actual") compound into a proprietary risk model.
- No funded AI-native entrant is known, and the space is unglamorous enough to stay that way.

## What's bad (strongest skeptic points)

- **Competition lens:** a relationship cartel of TPA, CPA firm, counsel and actuary will absorb the AI layer. The core reconciliation is generic, and the defensible slivers sit on a $35-75M SAM. The likely end is a modest sale to a TPA, LCPtracker or a CPA roll-up.
- **GTM lens:** every party that has to say yes profits from the inefficiency, and employer trustees (half of every board) represent the contractors being audited. Annual 100% coverage multiplies document burden and is mostly unrecoverable plan expense, since audit costs shift only when deficiencies exceed a threshold. Add SOC 2, HIPAA business-associate terms and DOL EBSA cyber guidance before the first pilot.
- **Feasibility lens (kill):** AI does not touch the binding constraints: employer stalling, covered-work jurisdiction judgments, courtroom defensibility, and collectability against failing contractors. False positives become invoices with liquidated damages attached to trustees' own association members. The public-works overlay **looks where under-reporting is least likely**; cash pay, alter egos and private data-center work leave no third-party trail. Alter-ego status is a legal conclusion under NLRA tests, not a match score.
- A venture outcome depends on expansions (state enforcement, workers' comp premium audit) that have different buyers and incumbents, so this wedge does not de-risk them.

## Non-obvious insights

1. **Two buyers, two budgets.** Under-reporting by signatories is recoverable by the trust fund. Work done by non-signatories creates no ERISA claim at all and belongs to the union's market-recovery budget, which is faster to spend and carries no fiduciary rules.
2. **Time beats detection.** Missed bond-claim windows turn findings into permanent losses, so a docketing alert may beat any detection model on ROI.
3. **Monitoring fees are plan expense; audit fees can be recovered.** That pushes toward powering the auditor, which in turn conflicts with the channel.
4. **Selection bias.** Public certified payroll is the cleanest money in the system.
5. **The contractor side is the unguarded door.** Multi-fund, multi-portal, reciprocity-heavy remittance is a self-inflicted compliance cost that contractors would pay to remove, and whoever owns that pipe owns cross-fund ground truth.

## Cheapest validation test (2 weeks, under $1k)

1. Run 15 calls ($0-300 in LinkedIn InMail or Sales Navigator): 5 controllers or payroll managers at multi-craft union contractors (electrical, mechanical, signatory to 5+ funds), 5 fund-office audit or delinquency managers, and 5 California craft JLMC or compliance-center staff.
2. Ask the contractors three things: how many remittance reports they file a month, hours spent, liquidated damages and audit findings paid in the last 3 years, and whether their payroll software already files them.
3. Ask the fund offices what share of uncollectible delinquencies came from missed bond windows.
4. Pull 10 health-and-welfare and pension Form 5500s (free on the EFAST2 public search) for California construction funds to size their audit and legal admin expense.

**Kill if:**
- fewer than 3 of 5 contractors report 10+ hours a month or $10k+ in liquidated damages or audit findings over 3 years;
- or the payroll software already files multi-fund e-remittance;
- and no fund office can name a missed-bond-window loss.

**Advance if** 2+ contractors agree to a $500/month paid pilot on a spreadsheet-plus-LLM concierge version.

## Unresolved questions

- Does any AI-native Taft-Hartley contribution-compliance startup exist (check Crunchbase, YC, IFEBP and NCCMP exhibitor lists)?
- Does LCPtracker or a top TPA already offer union-fund access or anomaly scoring?
- Do construction payroll vendors or TPA portals already offer multi-fund e-remittance? IBEW and other unions run electronic reciprocity systems; verify.
- What is the actual under-reporting rate, and what share of it is on public works?
- What is the exact JLMC redaction scope in California Labor Code §1776(e), and in which other states do JLMCs get worker names?
- Do CBA and trust audit clauses require a CPA, and how often are audit firms paid fixed fees rather than hourly?
- How much do bond-window losses add up to at a typical regional construction fund?

## Sources (to verify; none fetched this run)

- https://uscode.house.gov (29 U.S.C. §1145, §1132(g)(2))
- https://www.pbgc.gov/about/factsheets/page/multi-facts
- https://www.pbgc.gov/arpa/sfa-application-status
- https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XL/subchapter-E/part-4262/section-4262.16
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1776
- https://www.dir.ca.gov/Public-Works/Certified-Payroll-Reporting.html
- https://www.dol.gov/agencies/ebsa/key-topics/retirement-benefits/cybersecurity
- https://www.efast.dol.gov (Form 5500 search)
- https://lcptracker.com
- https://nasba.org (Uniform Accountancy Act ownership rules)
