# Demand Shield / Tender Desk: time-limited bodily-injury demand compliance (P&C claims)

**One-liner:** A defense-only AI desk that catches every time-limited, policy-limits bodily-injury (BI) demand, checks its conditions against state statutes, and documents a fast, compliant tender. Revised to start as a retrospective exposure audit sold to MGA capacity providers and excess carriers, then expand into the live desk.

> **Verification caveat:** this run's shared WebSearch budget (200 calls) was used up, and the egress proxy blocked WebFetch to every source domain. Neither the deep dive nor the three red-team agents, nor this verdict, could re-check sources live. Figures marked RECALL come from model memory and must be verified before any real decision.

## Verdict: PROMISING WITH PIVOT, 40/100

| Dimension | Score (1-10) | Why |
|---|---|---|
| Market size | 5 | Direct TAM is about $0.5-1.2B and SAM about $150-350M (EST). It is only large if the company expands into the roughly $70B A&O and $45B DCC pools. |
| Pain intensity | 6 | Each loss is severe (eight-figure excess verdicts) but rare: about 0-3 a year per mid-size book (EST). The pain is hard to see at renewal time. |
| Whitespace | 4 | No one obviously owns time-limited-demand (TLD) compliance. But CCC/EvolutionIQ, Verisk, Guidewire, intake AI vendors (Hyperscience, Indico, Roots), offshore BPOs and about 8 seed-stage defense-side startups are each one feature away. |
| AI leverage | 7 | Long-context extraction plus state-rule logic is a real step change. However, most conditions sit in a 3-15 page cover letter, so the extraction itself is easy. |
| GTM feasibility | 3 | PHI security review, SOC 2, NAIC AI-bulletin vendor oversight, and liability-cap fights. 9-18 month carrier cycles. "Billed per file as ALAE" mostly won't work because pre-suit work is booked as A&O. |
| Defensibility | 3 | Being the system of record for the audit trail and building a state rules engine give some stickiness. The data graph overlaps Verisk ClaimSearch and CLARA. |
| Founder fit | 2 | Claims executives buy from former claims executives. Needs a former Chief Claims Officer or insurance-defense partner as co-founder, plus E&O cover; the pivots also need licenses. |

## Revised thesis
Plaintiff-side AI (EvenUp at about $2B valuation and ~10K cases/week; Eve; Supio) has made policy-limits "set-up" demands nearly free to produce. The defense side still handles them by hand. Selling a real-time "no missed condition" SLA directly to thin-margin carriers is a weak business: incumbents can ship it as a feature, the vendor takes on catastrophic liability, the audit trail it creates is discoverable, and the ROI is a verdict that never happened.

The surviving version sells to the **party that actually pays for the excess verdict**: MGA capacity providers, fronting carriers, excess and umbrella carriers, and reinsurers behind commercial-auto and transportation programs in FL, GA, TX, MO and LA. Product 1 is a **retrospective "Delegated Claims Exposure Scan"**. It does read-only ingestion of an MGA's or TPA's open BI files and scores 100% of them (versus today's manual 50-100 file sample audit) for:
- unanswered or mishandled TLDs
- missing excess-carrier notices
- reserves below specials
- Medicare Section 111 gaps
- letter-of-protection and medical-factoring flags (FL 768.0427, GA SB 68)

It sells at $50-250K per program per year. Because the company is an auditor rather than the live system of record, its liability is much smaller. The capacity provider owns cross-program data rights, so the data moat forms naturally. Remediation then pulls in the live "Tender Desk" module top-down, avoiding a 9-18 month carrier sale. The end state, if the founding team adds a claims executive and licenses, is an AI-native pre-suit casualty TPA for transportation programs, which captures the per-claim handling fee (~$1.5-4K) instead of a $250 add-on.

## How the work is done today
1. **Intake:** the demand arrives by mail, fax or email, often to the wrong person (the insured, the agent, or the wrong office). This is why CA CCP 999 (2023) requires delivery to a designated address. Mailroom capture classifies it as generic correspondence.
2. **Triage:** an adjuster carrying 100-175 files opens it days later and hunts through it for the deadline, how it is counted, and the conditions: release scope, payment form and payee, no-other-coverage affidavit, dec page, lien representations.
3. **Evaluation:** a nurse, vendor or adjuster summarizes the records, and specials go into Colossus, Decision Point or CCC Casualty. All-in cost is about $250-900 per complex demand (EST).
4. **Remaining steps:** check limits and give excess notice; get authority through roundtable (where many 14-30 day clocks run out); respond; run the Medicare query; pay in the exact form demanded.

Most mid-size carriers and TPAs have no dedicated TLD system of record; they run on diaries, mailbox keyword flags and paralegal "demand desks."

## TAM (EST)
- **Volume:** about 1.7-2.4M represented liability BI demands a year (personal auto ~1.0-1.2M, commercial auto 0.25-0.4M, GL 0.3-0.5M, self-insured 0.1-0.3M). Roughly 30-50% are time-limited.
- **Direct TAM:** about $0.5-1.2B (intake and compliance at $150-300, plus evaluation at $200-400). SAM, excluding the top-10 personal-auto carriers: about 0.6-0.9M demands, or $150-350M.
- **Audit pivot:** about 1,000+ delegated-authority programs and TPA books (EST) × $50-250K comes to roughly $100-250M. This is a complement to the desk, not a replacement.
- **TPA pivot:** reaches part of the roughly $70B A&O pool (scout estimate from III ratios times ~$974B NWP).
- **Ceiling:** compliance alone tops out around $20-40M ARR.

## Competitors
| Name | Type | Threat |
|---|---|---|
| CCC Casualty + EvolutionIQ (~$730M acq., Dec 2024, RECALL) | Incumbent AI | Already ingests demand packages, so TLD detection is a cheap feature for it |
| Verisk Discovery Navigator / ISO ClaimSearch | Incumbent AI and consortium data | Medical summaries plus a cross-carrier attorney and provider data pool |
| Enlyte / Mitchell Decision Point, Genex | Incumbent | BI evaluation plus nurse review that it can bundle |
| Guidewire ClaimCenter / Duck Creek | Core claims systems | Own the diary, authority and payment steps where deadlines are actually missed |
| Hyperscience / Indico / Roots; Hyland, Exela | Intake AI and mailroom | Adding a "TLD" document class is a configuration change for them |
| EXL / Genpact / Capgemini-WNS (~$3.3B, 2025, RECALL) | Offshore BPO + AI | Human review at $10-15/hr |
| Sedgwick Sidekick, Gallagher Bassett Luminos, Crawford | TPA in-house AI | Both channel and competitor; protect their own nurse-review revenue |
| CLARA Analytics (~$60M total) | AI-native | Attorney and provider scoring, overlapping the graph moat |
| CaseGlide (RECALL) | AI-native, FL | Carrier litigation platform in the wedge geography |
| Wisedocs, DigitalOwl (→Datavant) | AI-native | Commoditized medical summarization |
| Hesper (YC), Theo, Turbo Law, Voltaire, OraClaim, Charlee.ai, LegalMation | Seed AI | One feature away from demand intake (not verified) |
| Reserv, Nirvana, Strala, Corgi | AI-native TPAs and insurers | Ideal wedge customers who will build in-house instead |
| EvenUp / Eve / Supio | Plaintiff AI | The adversary; better funded, will adapt templates |

## Why now
- Plaintiff demand production has been industrialized (EvenUp $150M at $2B, Oct 2025).
- A tort-reform wave: FL HB 837 (2023) 90-day safe harbor and LOP/factoring disclosure; GA SB 68 (2025) paid-vs-billed; CA CCP 999 and 30/60 minimum limits (2025); LA 2025 package.
- CMS Section 111 civil money penalties since Oct 2024 (RECALL).
- Long-context models are now cheap enough for 1-3K page packages.
- Adjuster attrition.
- Commercial-auto underwriting losses for more than a decade, which pushes capacity providers to enforce claims discipline on MGAs.

## Wedge & business model
- **Start:** a scan sold to 2-3 capacity providers or excess carriers behind FL, GA and TX transportation MGAs. Price per program per year, plus a per-file continuous-monitoring fee.
- **Expand:** a live Tender Desk ($150-300 per demand plus a $3-10K/month minimum) offered as the remediation the sponsor requires.
- **Pricing rule:** never price on settlement savings, because that hands plaintiffs a bad-faith narrative. Price on throughput, SLA or audit coverage.
- **Output design:** a good-faith record (conditions found, deadline, actions taken). Never a suggested settlement value tuned downward.
- **Margins:** 55-65% gross margin early because of human review.

## What's good
- Real, growing asymmetry: well-funded plaintiff AI against seed-stage defense tooling. Defense-only positioning is a trust moat that EvenUp can't cross.
- "Pay faster, not less" reframes AI from a jury liability into evidence of diligence. The FL safe harbor turns speed into legal protection.
- Tort reform turns into encodable product specs: LOP and factoring discovery, paid-vs-billed, and state deadline-counting rules that Colossus-era tools lack.
- The economic beneficiary (excess carriers, reinsurers) is financially strong and already pays for claims audits, so the audit pivot finds a real budget.
- Specials reconciliation (hallucinated or duplicate charges in AI-written demands) is measurable ROI that avoids the "lowball" narrative.

## What's bad
- **Competition lens:** the wedge is a feature. CCC, Verisk, Guidewire, intake AI or a TPA's in-house team can ship it in one release, while a startup needs 9-18 months to land a carrier. The graph moat overlaps ClaimSearch and CLARA. Tort reform standardizes demands into a checklist that is easy to copy. Likely outcome: a $5-20M ARR services business or an acqui-hire.
- **GTM lens:** the ROI is invisible (0-3 blowups a year), so "we had no misses, why pay?" at renewal. Mailbox forwarding *is* IT procurement (PHI, BAA, SOC 2 Type II, NAIC bulletin). Pre-suit work is booked as A&O, not ALAE. FL non-standard auto has $10K or no BI, so a $150-300 fee is 1.5-3% of indemnity. MGAs fail at high rates (15-30% logo loss, EST). Excess carriers "will take your meeting and not pay you" if the pitch is mandating a vendor.
- **Feasibility lens:** the near-100% recall requirement turns the product into a BPO. The vendor only sees mail that was routed correctly. Fulfillment (affidavits, payment form, authority) happens in systems it doesn't control. The duty of good faith can't be delegated, so the vendor adds discoverable evidence without transferring risk (Allstate v. Ruiz). Prompt injection by an adversarial counterparty. Subpoena and deposition load. Licensing and unauthorized-practice-of-law drift.
- **Managing partner view:** the best pivots (an AI-native TPA, or an Arizona ABS law firm) are better businesses but break the "technical founder, small capital, no licenses" constraint. The audit wedge is the only path that fits, and its TAM is modest.

## Non-obvious insights
1. The buyer is not the user. The party that eats the loss is the excess carrier, reinsurer or capacity provider, so sell the audit to them and let them pull the desk down to the MGA.
2. Everything the AI writes is discoverable. Design outputs as a good-faith process record, never as a valuation.
3. The real value sits in the hours before anyone summarizes anything: classifying, routing and calendaring. Summarization itself is a commodity.
4. FL 768.0427 makes factoring purchase prices discoverable, which turns "billed specials" into an extraction-and-discovery feature.
5. AI-generated demands can be fingerprinted, and reconciling them against the attached bills finds errors.
6. A trap the analysis surfaced: the timestamped audit trail can prove the carrier *knew* on day 1. Coverage counsel may veto it unless authority and payment workflows are also fixed.

## Cheapest validation test (2 weeks, <$1k)
- **Week 1:** 15 outreach conversations through LinkedIn and CLM/PLRB contacts with claims-audit leads at excess, umbrella and capacity providers, plus claims heads at FL, GA and TX transportation MGAs and mid-size TPAs. Ask three questions: (a) How many blown TLDs or ECO/XPL events in the last 3 years, and what did they cost? (b) What do you pay for delegated claims audits today? (c) Would you sign a $25-50K paid scan of one program?
- **Week 2:** build a prototype on 20-30 public or redacted demand letters (court-filed exhibits in FL and GA bad-faith suits are public). Measure condition and deadline extraction accuracy against attorney-labeled answers.
- **Kill if** fewer than 2 parties quantify losses above $1M a year or none will pay for a scan, or if extraction recall on cover letters is already about 99% with an off-the-shelf model, which would mean incumbents copy it trivially.
- **Also:** get one E&O broker quote on an auditor-style scope.

## Unresolved questions
- Frequency and severity of extra-contractual losses from mishandled TLDs per book (no public data).
- Have CCC, Verisk, Guidewire or Hesper already shipped TLD detection with state deadline logic as of Q3 2026?
- Will capacity providers pay for continuous audits and hold cross-program data rights?
- E&O availability and price for auditor scope versus live-desk scope.
- Is set-up demand volume shifting from FL and GA to MO, TX, SC and LA after reform?
- Details of GA SB 83 (pre-suit demand changes) and the status of TX 2025 reform.
- Live re-verification of EvenUp volume, Swiss Re verdict counts, and Wisedocs, CLARA and Hesper funding.

## Sources (scout-provided, not re-fetched this run)
- https://www.lawnext.com/2025/10/evenup-ai-platform-for-personal-injury-lawyers-raises-150m-at-2b-valuation.html
- https://abovethelaw.com/2025/10/from-startup-to-2-billion-evenup-is-transforming-personal-injury-practice/
- https://www.swissre.com/reinsurance/insights/verdicts-on-trial.html
- https://www.insurancejournal.com/news/international/2025/09/26/840755.htm
- https://www.claimsjournal.com/sponsored/wisedocs/2026/08/04/339234.htm
- https://www.propertyinsurancecoveragelaw.com/blog/is-ai-creating-claimslop-and-drowning-adjusters-in-emails/
- https://www.goldbergsegalla.com/news-and-knowledge/knowledge/navigating-the-time-limited-policy-limits-demand-best-practices-for-insurers-and-defense-counsel/
- https://www.fmglaw.com/business-litigation/the-dawn-of-tort-reform-governor-ron-desantis-signs-hb-837-into-law/
- https://www.kennedyslaw.com/en/thought-leadership/article/2025/georgia-enacts-sweeping-tort-reform-key-takeaways-from-sb-68/
- https://www.businesswire.com/news/home/20230907639068/en/CLARA-Analytics-Raises-$24M-in-Series-C-Funding-Accelerating-AI-Adoption-for-Insurance-Claims
- https://venturebeat.com/technology/digitalowl-raises-20m-to-analyze-medical-records-for-insurers
- https://www.wiley.law/assets/htmldocuments/AI%20in%20the%20Insurance%20Industry%20and%20Bad%20Faith%20Risk%20-%20Borja.pdf
- https://www.claimsjournal.com/news/national/2024/03/06/322258.htm
- https://www.ncci.com/Articles/Pages/AIS2026-SOTL-Guide-Redirect.aspx
- Legal references (recalled, not fetched): Fla. Stat. 624.155, 768.0427; Cal. CCP 999-999.5; OCGA 9-11-67.1; RSMo 537.058; Allstate v. Ruiz, 899 So.2d 1121 (Fla. 2005); First Acceptance v. Hughes, 305 Ga. 489 (2019); NAIC AI Model Bulletin (Dec 2023).
