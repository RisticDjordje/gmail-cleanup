# Warranty Recovery Desk: interbank check-fraud recovery for community FIs, best pivoted to inbound claims triage for depositary and sponsor banks

**One-liner:** A contingency-priced AI recovery desk that files and chases UCC 4-207/4-208 and Reg CC 229.34 breach-of-warranty claims for credit unions and community banks. The stronger version flips sides and sells inbound-claim triage and mule-account intelligence SaaS to the 50-150 depositary and sponsor banks that receive those claims.

> **Verification caveat:** Live verification was not possible in this session. WebSearch's shared budget was exhausted, and egress to ecfr.gov, fincen.gov, nacha.org, aba.com and federalreserve.gov was blocked. The deep dive and all three red-team critiques ran under the same limits. Every figure, rule citation and competitor claim below comes from analyst memory through mid-2026 and must be re-checked before anyone acts on it.

## Verdict: PROMISING WITH PIVOT, overall 40/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Core fee pool is about $200-450M/yr (estimate) and check volume falls about 7%/yr |
| Pain intensity | 6 | Losses are real and written off, but per-FI dollars are modest |
| Whitespace | 6 | No AI-native recovery player found (unverified). The ABA claims directory and core/case vendors cover parts of the problem |
| AI leverage | 4 | The bottleneck is legal leverage, not drafting. Bitonal 200-DPI Check 21 images limit what vision models can see |
| GTM feasibility | 4 | Contingency pricing satisfies the CFO but not TPRM, the ISO or legal. Expect 3-9 month cycles and $6-30k fees per FI |
| Defensibility | 3 | The respondent-behavior graph is real but thin. Utilities or a Reg CC rule could absorb the layer |
| Founder fit | 3 | Needs bank-ops credibility, a banking law firm and league relationships |

## Thesis (revised)
Mail-theft check fraud (washed or altered checks and forged indorsements) is legally the depositary bank's loss under UCC 4-207/4-208 and Reg CC 229.34, with the 229.38(i) presumption of alteration helping the claimant on electronic items. Community FIs still write off much of it because respondents stall and nobody sues a megabank over $4k. A claimant-side desk is a real but small, services-heavy business, and the back-book wedge is legally impaired: there is a 30-day notice discharge (to the extent delay caused loss) and a 1-year limit on Reg CC actions.

**The better company is on the respondent side.** Fintech sponsor banks, neobanks and large mobile-RDC depositary banks receive thousands of faxed and emailed warranty claims and Nacha R06/R17 requests every month, under deadlines and, for several of them, under 2024-25 consent-order scrutiny. Software that ingests each claim, matches it to the deposited item and account, checks validity (timeliness, altered vs counterfeit, presumption), recommends pay or deny with an evidence letter, freezes remaining mule funds and clusters claims into high-precision mule labels for BSA/SAR is an opex sale to well-funded buyers at $250k-$2M ACV. It carries no collection licensing, no contingency cash cycle and no relationship politics. A free structured-claim portal for community FIs then feeds standardized claims into it. That is the only version of the "two-sided exchange" in which both sides have a reason to join.

## How the work is done today (paying-bank side)
Member reports a washed check 2-8 weeks after it posts → signs affidavit → FI reimburses (Reg E does not apply; decision rests on UCC 4-401/4-406 and the deposit agreement) → staff pull front and back images and read the BOFD indorsement → classify the item (altered or forged indorsement is recoverable; counterfeit is generally the paying bank's loss) → hunt for the BOFD claims contact → send a letter with images and affidavit by fax, email or mail → chase at 30/60/90 days → refer large claims to counsel, send claims above the bond deductible to the bond carrier, and write off the rest. Labor runs about $150-400 per claim against $2-8k of value. **The labor cost is not why claims die. Stalling respondents, deadlines, staff turnover and reluctance to litigate are.**

## TAM (estimates, unverified)
- Claimable paying-side pool at community and regional FIs: about $3-6B/yr. Incremental beyond what FIs already recover: about $1-2B. At 20% contingency that is a fee pool of about $200-400M, plus about $50-100M of SaaS. **Core is about $250-500M.**
- Respondent-side triage: about 50-150 institutions × $250k-$2M ≈ $75-200M, plus mule-intelligence and BSA upsell.
- Claimant SOM in year 5: about $15-25M ARR. That is a good services company, not a venture outcome on its own.

## Competitors
| Name | Type | Relevance |
|---|---|---|
| Nasdaq Verafin (~$2.75B acq., 2021) | Incumbent | Holds the case record; could add a claim-letter button for free |
| Abrigo (Carlyle) | Incumbent | Same bundling threat |
| Jack Henry / Fiserv / FIS item processing | Incumbent | Control the image archive; gate data access |
| ABA Check Fraud Claim Directory (~2023-24, from memory) | Adjacent | Largely removes the "find the counterparty" pain |
| Fed / ECCHO / TCH / Early Warning | Utility | June 2025 payments-fraud RFI; natural host for any claims portal or SLA (UK precedent: Pay.UK RCMS) |
| Mitek Check Fraud Defender, AFS TrueChecks, OrboGraph, EWS Deposit Chek | Detection | Shrink the recoverable pool |
| Quavo, Casap (AI-native, 2025 Series A) | Dispute automation | Natural adjacent entrants |
| Hummingbird, Unit21, Greenlite, Parcha | AI-native case/AML | Could add recovery or triage |
| Outside counsel, contingency collectors, bond carriers (TruStage) | Services | Today's real substitutes; the only parties with litigation leverage |
| Dedicated AI-native check-warranty recovery startup | — | **None found (unverified).** The gap may reflect poor economics rather than open whitespace |

## Why now
Check fraud stays high even as volume falls. Fraudulent deposits concentrate at mobile-RDC mule accounts at a few banks and sponsor banks, several under consent orders. Nacha's 2026 fraud-monitoring phases and the 10-banking-day R06 response rule are in force. The June 2025 interagency RFI keeps interbank communication on the agenda. LLMs can now parse unstructured fax and email claims at volume. Headwinds: the Treasury paper-check phase-out (EO 14247) and steady decline in check volume.

## Wedge & business model
- **Recommended:** respondent-side inbound claims triage for 3-5 fintech sponsor banks or neobanks (fast buyers with acute RDC-mule exposure), priced per claim or $250k-$2M/yr. Pair it with a free claimant portal so community FIs submit structured claims.
- **Claimant fallback:** skip the back-book. Sell a per-claim tool that files within 24 hours of the member's report (protecting the 30-day window), plus a pre-reimbursement check of positive-pay waivers and 4-406 timing. Distribute through one CUSO or a case-vendor marketplace, or co-contingency with a banking law firm, or sell through TruStage as a below-deductible loss program.

## What's good
- Recovery is an orphaned workflow next to a crowded detection market. Recovery-outcome data is scarce and no incumbent has it.
- Concentrated respondents allow per-respondent playbooks and evidence templates that improve with volume.
- Contingency pricing nets against the fraud-loss line, not IT capex.
- Two neglected levers: pre-reimbursement loss avoidance (positive-pay waivers, 4-406 timing) and the bond carrier as a channel, since deductibles sit above most items.
- The respondent side has real budget, real deadline pressure, examiner relevance (mule detection) and an unstructured-document LLM problem.

## What's bad (red-team, by lens)
- **Competition:** Every component a startup could own is commoditized or headed to a utility. The ABA directory handles contacts, Copilot or a Verafin feature handles drafting, and an SLA or portal from the Fed, ECCHO or EWS would handle persistence. Corporate CUs and bankers' banks are gatekeepers or builders, not neutral channels.
- **GTM (verdict: kill):** The back-book wedge is legally dead. The 30-day notice discharge, the 1-year Reg CC action limit and adverse selection toward already-denied or counterfeit items all cut against it. TPRM and SOC 2 are needed regardless of price, so cycles run 3-9 months. Net fees of $6-30k/FI against $30-60k CAC mean 3-5 year payback. Disputes over what the FI would have recovered anyway drive churn. Megabanks may refuse non-bank agents, and client boards veto pooled suits against their correspondents.
- **Feasibility:** Whether an item is altered or counterfeit is decided by the drawer's issued-check record, not by pixels, because bitonal TIFF images strip washing cues. A misclassified claim damages the client's standing with the respondent and creates E&O and GLBA exposure. Every claim needs human review, so gross margin is about 45-60%. Litigation leverage cannot be compressed by AI, and UPL and collection licensing apply state by state.

## Non-obvious insights
1. Recoverability is a **data-join problem** (positive-pay or issued-check file × presented item), not a vision problem. Whoever holds both files wins.
2. Claims die from **leverage gaps, not labor cost**. A product that only makes drafting cheaper misses the bottleneck.
3. Speed of notice matters more than the strength of the legal case: filing within 24 hours keeps the warranty intact and catches funds before the mule withdraws them. The back-book is the weakest pool, not "found money".
4. Incoming claims are the best mule-account label set in banking. The respondent side turns a cost center into BSA detection.
5. A rule mandating response deadlines would help a respondent-side vendor (more structured volume) and hurt a claimant-side persistence vendor.

## Cheapest validation test (2 weeks, <$1k)
- Interview 8-10 fraud managers at $500M-$3B CUs and banks (LinkedIn plus one state league). Ask for monthly claim count, share altered vs counterfeit, average size, recovery rate, days from report to notice, and top 10 respondents.
- Interview 3-5 claims and ops leads at fintech sponsor banks or neobanks. Ask for inbound claims per month, FTEs, tooling, deadline misses, and whether they would pay $250k+.
- Spend about $300 on one hour with a banking attorney to confirm the 30-day and 1-year rules, agent-letter UPL risk and claim assignability.
- Search Crunchbase, YC and league marketplaces for existing recovery or triage players, and confirm the ABA directory's scope.
- **Kill if** fewer than 5 recoverable claims/month at $1B FIs **and** no sponsor bank reports more than 500 inbound claims/month with 3+ FTEs on it.

## Unresolved questions
- Does an AI-native check-warranty recovery or triage startup already exist (YC 2024-26 or stealth)?
- How widely is the ABA Check Fraud Claim Directory adopted?
- Did the June 2025 RFI produce a Reg CC proposal (response SLA or portal) by Oct 2026?
- What is the real altered vs counterfeit mix at community FIs today, given the shift to counterfeits made from stolen images?
- Will megabanks and sponsor banks pay claims filed by a non-bank agent?
- Are warranty claims assignable, which would enable a claims-purchase model?
- Do sponsor banks see inbound claims volume as a budgeted pain?

## Sources (from memory; re-verify)
- FinCEN Alert FIN-2023-Alert003 (Feb 27, 2023): https://www.fincen.gov/sites/default/files/shared/FinCEN%20Alert%20Mail%20Theft-Related%20Check%20Fraud%20FINAL%20508.pdf
- FinCEN FTA, mail-theft check fraud (Sept 2024): https://www.fincen.gov/news/news-releases/fincen-issues-financial-trend-analysis-mail-theft-related-check-fraud
- 12 CFR Part 229 (229.34, 229.38(g), 229.38(i)): https://www.ecfr.gov/current/title-12/chapter-II/subchapter-A/part-229
- Reg CC presumption of alteration final rule (2017): https://www.federalreserve.gov/newsevents/pressreleases/bcreg20170531a.htm
- UCC Article 4 (4-207, 4-208, 4-111, 4-406): https://www.law.cornell.edu/ucc/4
- Fed/FDIC/OCC payments-fraud RFI (June 2025): https://www.federalreserve.gov/newsevents/pressreleases/bcreg20250616a.htm
- Nacha risk-management rules: https://www.nacha.org/rules/risk-management-topics
- Interagency third-party risk guidance (2023): https://www.federalreserve.gov/supervisionreg/srletters/SR2307.htm
- Fed Payments Study: https://www.federalreserve.gov/paymentsystems/fr-payments-study.htm
- EO 14247 (Mar 25, 2025): https://www.whitehouse.gov/presidential-actions/2025/03/modernizing-payments-to-and-from-americas-bank-account/
- UK PSR APP reimbursement / Pay.UK RCMS: https://www.psr.org.uk/our-work/app-scams/
- Nasdaq–Verafin: https://www.nasdaq.com/press-release/nasdaq-to-acquire-verafin-2020-11-19
