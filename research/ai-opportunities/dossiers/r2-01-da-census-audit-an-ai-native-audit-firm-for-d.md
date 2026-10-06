# DA Census Audit → "Capacity Defense": AI claims QA for casualty MGAs that produces evidence capacity providers accept

**One-liner:** Run continuous AI review of every claim file inside casualty MGAs and program aggregators. It catches unanswered time-limited demands, reserves below specials, missed excess or reinsurance notices and bordereau breaks before they turn into losses. As a by-product it produces a read-only evidence room that fronts and reinsurers can use in place of part of their sampled audit.

> **Research caveat:** Nothing in this dossier was verified live this run. The shared WebSearch budget (200 calls) was used up, including the two spot-checks the managing partner tried (an AI-native DA-oversight startup search and Reserv's funding). WebFetch was egress-blocked for the deep dive and for all three skeptics. Every figure, deal and date comes from model memory through mid-2026 or is an estimate. Treat this as a hypothesis memo.

## Verdict

**Promising with pivot. Overall 41/100.** The original version, a census audit sold to fronts and reinsurers, scores about 33. It runs into four problems at once: a buyer who has no incentive to look, a three-party data-access problem, liability from discoverable findings, and a small market. The pivot fixes data access and liability. It does not fix founder fit or the threat from TPAs and claims platforms.

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Core oversight spend about $0.3-0.7B (estimate); MGA-side QA adds about $0.1-0.3B; venture scale needs carrier and TPA QA |
| Pain intensity | 5 | The pain is real for whoever carries the extra-contractual exposure. Fronts mostly treat it as a compliance checkbox |
| Whitespace | 6 | No AI-native census DA auditor known from memory. Many adjacent players |
| AI leverage | 7 | Long-context reading of messy files is real 10-100x leverage. The judgment flags cannot be validated for years |
| GTM feasibility | 3 | Long InfoSec cycles, a GC veto, per-program integration, and roughly 100 meaningful logos in the original framing |
| Defensibility | 4 | Prompts are not a moat. A findings corpus takes 3-7 years of casualty tail to prove |
| Founder fit | 2 | Needs a former program-claims or DA executive plus signing auditors; a technical founder alone will not get file access |

## Thesis (revised)

Roughly $100B of US MGA premium (AM Best/Conning trend, unverified) is overseen through sampled annual audits. The original idea sold census audits to the risk-bearer. The skeptics showed that buyer's position is weak. Fronts keep 0-10% of the risk and earn a fee of about 3-7%. Each reinsurer holds only one slice of a panel. A census also creates "knew or should have known" evidence: in Florida, *Allstate v. Ruiz* (2005) makes claim-file work product discoverable in bad-faith cases. On top of that, the front is still the insurer of record, so bad-faith liability does not stay with the MGA.

**The better company sells to the party that owns the files and carries the operational fallout: casualty MGAs and multi-program aggregators.** An unanswered Stowers or Holt demand is their extra-contractual exposure, and losing capacity at renewal ends their business. For them, acting on a flag reduces liability instead of creating it. The product is continuous claims QA. Its secondary output is a capacity-provider evidence room, a Vanta-style "compliance automation the auditor consumes". Fronts and reinsurers become a channel: get 2-3 friendly fronts to cut on-site audit days for MGAs that run it.

A cash-funded companion line is a contingency **recovery** product for risk-bearers and PE acquirers: missed excess or reinsurance recoveries, subrogation, premium-audit additional premium, and bordereau and trust breaks. Each finding there is validated by someone paying cash. Expect a services-heavy $15-40M revenue business unless it extends into carrier-wide P&C claims QA and recovery.

## How the work is done today

- **Contracts.** A Program Administration Agreement and a Claims Administration Agreement set authority limits and reporting triggers. NAIC MGA Act #225 requires the insurer to have access to files and to review the MGA periodically (the model act says semi-annually; verify by state).
- **Bordereaux.** Monthly Excel or CSV premium and loss bordereaux, in a different layout for each MGA, with no US equivalent of Lloyd's CRS. They take 1-3 analyst-days per program per month. Claim narratives, demands and specials sit in the TPA's system, not in the bordereau.
- **Audits.** Annual or biennial underwriting and claims audits review 25-100 files each, sampled with a tilt toward risky files. They take 2-5 auditor-days and cost about $15-60k (estimate). They are often charged back to the MGA. Findings arrive 3-9 months late, and a multi-carrier MGA faces overlapping audits ("audit fatigue").
- **Human cost per file.** About $75-375 per file with onshore consultants, much less with offshore BPO (EXL, WNS, Genpact, Xceedance). LLM cost is under about $5 per file, but long litigated files can run past 300k tokens.

## TAM (estimates)

- About 3,000 programs × about $100k of all-party oversight spend gives **$0.2-0.47B**. The external-audit fee pool alone is about $60-150M (feasibility skeptic).
- MGA-side QA and audit prep: about 1,100 MGAs × $30-60k gives $35-65M today. A pivot priced at $3-10k per program per month across 1,100-1,300 casualty programs gives **$40-150M SAM**.
- Recovery pool: MGA paid losses of about $50-60B; recovering 1-2% at a 15-25% fee gives about $75-300M.
- Expansion (carrier-internal casualty QA, self-insured and TPA audits): $1-2B+ (rough estimate).
- Deep dive's year-5 SOM: **$15-30M ARR**.

## Competitors

| Name | Type | Threat |
|---|---|---|
| Accelerant (Risk Exchange; NYSE IPO Jul 2025, memory) | Front with in-house data platform | Builds rather than buys; possible acquirer |
| State National / Markel | Largest front | Builds in-house |
| Sedgwick (Sidekick), Gallagher Bassett, Crawford, CCMSI | TPAs that hold the files | Can ship free "self-certified" AI QA and slow-walk exports |
| Five Sigma (Clive), Snapsheet, Guidewire, Origami | Claims platforms | Can add file-quality scoring as a module |
| Reserv | AI-native TPA for MGAs and programs | Sells transparency as a built-in feature |
| EXL, WNS/Capgemini, Genpact, Xceedance | Offshore BPO plus GenAI | Price anchor; already holds the MSAs |
| Merlinos, Davies/Charles Taylor, Big 4, Milliman/Pinnacle | Audit and actuarial firms | Own the signature; can adopt LLMs within quarters |
| CLARA, CCC/EvolutionIQ, Gradient AI, Shift, Verisk Discovery Navigator, Wisedocs | Casualty claims AI | Reserve and litigation signals sold to claims operations |
| Federato, Mea, Cytora (Applied), Supercede, Quantemplate, Intrali/Ignite | Underwriting AI and bordereaux data tools | Cover the underwriting module and the spreadsheet layer |
| MindBridge | Analog | "Full population instead of sample" was absorbed by incumbent auditors |

## Why now

- MGA premium has roughly doubled since 2019 (unverified), so more premium is written by people the risk-bearer does not employ.
- Casualty reserve stress: commercial auto adverse development and nuclear verdicts (about $31B in $10M+ verdicts in 2024, Marathon Strategies, memory).
- Plaintiff AI (EvenUp and similar) increases the volume of time-limited demands, while rules shift by state (FL HB 837, GA SB 68 2025, TX Stowers).
- Long-context models make reading a whole file cheap.
- Counterpoints: **Vesttoo was a collateral and LOC fraud, which reading claim files would not catch** (competition skeptic). The 2025-26 reinsurance softening also eases capacity scarcity.

## Wedge and business model

- **Pivot wedge:** casualty and trucking program aggregators and MGAs seeking new or renewed capacity.
- **Product:** continuous QA covering time-limited demand clocks, reserves against specials, excess and reinsurance notice triggers, authority breaches, stale diaries, and bordereau-to-file reconciliation. Includes an evidence pack for capacity renewals.
- **Pricing:** $3-10k per program per month, or an aggregator platform fee.
- **Fast-cash side line:** PE and capacity-onboarding "claims and premium quality-of-earnings" at $50-150k per engagement, plus contingency recovery at 15-30% of recovered cash.
- **Later tier:** a read-only benchmarking seat for capacity providers once 50+ MGAs are on the platform.

## What's good

- Data access is a solved problem when the buyer is the file-holder. The original framing needs three organizations to cooperate.
- For an operator, error tolerance really is asymmetric: a flag goes to an adjuster, not into a consumer-facing decision.
- Bordereau-versus-file cross-checks (class code against loss description, bordereau reserve against system reserve) are a cross-discipline insight that single-discipline audits miss.
- The Lloyd's DA SATS precedent shows portable, shared audits work when someone sets the standard.
- Recovery findings have clean attribution and do not need a budget line.
- Casualty is the line where reinsurers are asking for proof of claims discipline.

## What's bad (strongest skeptic points)

- **Competition:** nobody in the chain is paid to find problems. TPAs, claims platforms and BPOs can bundle "100% AI QA" for free or cheaply. The MindBridge analog suggests census testing gets absorbed by the auditor who already holds the signature. Accelerant and State National will build.
- **GTM:** a PAA audit right is a right to inspect, not a bulk-export pipe, so each program takes 6-16 weeks to onboard. GCs will veto discoverable findings. The price anchor is a cheap sampled audit often charged back to the MGA. A portable standard would need a market body the US does not have. CAC of $150-350k against roughly 100 logos. Programs churn between fronts.
- **Feasibility:** at a 10% flag rate, 300-600 flags per program need 75-300 human hours, which pushes gross margin toward 25-45%. The trustworthy flags are simple rules (a feature, not a company); the judgment flags take 3-7 years to validate. A census that misses a file is vendor negligence, and a third party relying on a portable report raises Restatement §552 exposure. A wrong deadline call on a policy-limit demand is catastrophic.
- **Shared by all three:** the profit-commission "leak" is mostly handled by contract terms (corridors, carry-forwards, true-ups out to 48-84 months), and actuaries already load IBNR for weak case reserves.
- **Founder fit:** disqualifying without an insider co-founder.

## Non-obvious insights

1. **Liability flips with the buyer.** The same flag is a liability for the front (discoverable knowledge) and a protection for the MGA (evidence of timely remediation). Who pays determines whether census review helps or hurts.
2. **Integration is an N-TPA problem, only partly.** File truth concentrates in a few dozen systems, but in-house MGA claims units and regional TPAs leave a long tail. Expect 10-15 integrations to cover 40-60% of files, not "most".
3. **The ROI is at reinsurance renewal, not in the audit budget.** Evidence that wins continued capacity or better ceding commission is the only thing that justifies paying more than a sampled audit.
4. **A smart stratified sample captures most of the census value,** so "AI triage to choose the sample" is the incumbents' easy counter, and it is the feature the startup has to beat.

## Cheapest validation test (2 weeks, under $1k)

- Run 15-20 calls (LinkedIn, TMPAA/AAMGA contacts) with:
  - 6 heads of claims at casualty MGAs or aggregators;
  - 4 front or reinsurer program-oversight leads;
  - 2 bad-faith defense lawyers;
  - 2 PE MGA-deal partners.
- Ask four questions:
  1. Would you pay $3-10k per program per month for continuous QA if a front cut your audit days?
  2. Can you export complete claim files, and how?
  3. Would a front accept an evidence room in place of part of its audit?
  4. Would GC approve census findings?
- **Kill if:** fewer than 3 of 6 MGAs say yes at that price, or no front will even consider giving audit credit.
- **Parallel test:** get one redacted closed commercial-auto file set (or a public litigated file) and test deadline and specials extraction accuracy with an LLM, at about $100 of inference.

## Unresolved questions

- Is any AI-native already selling census DA claims review, or MGA-side capacity evidence? This could not be searched this run.
- What is the actual all-party oversight spend per casualty program, and who pays it (front or MGA)?
- Will a large TPA allow bulk document export to a third-party AI vendor, and at what cost?
- Would any front or reinsurer formally give audit credit or better terms based on continuous evidence?
- Can triage be held under about 10 human hours per program per quarter at acceptable recall?
- What are the current figures for MGA premium, hybrid-front count, Accelerant member count, and Reserv's funding and traction?

## Sources (to verify, none fetched this run)

- NAIC MGA Act Model #225: https://content.naic.org/sites/default/files/model-law-225.pdf
- NAIC Model Bulletin on AI Systems by Insurers (Dec 2023): https://content.naic.org
- NYDFS 23 NYCRR 500.11: https://www.dfs.ny.gov/industry_guidance/cybersecurity
- AM Best US MGA and hybrid fronting reports: https://news.ambest.com
- Conning MGA strategic study: https://www.conning.com
- Accelerant S-1 (2025): https://www.sec.gov/edgar
- Lloyd's DA / CRS / DDM: https://www.lloyds.com
- *Allstate Indemnity v. Ruiz*, 899 So.2d 1121 (Fla. 2005); *G.A. Stowers v. American Indemnity* (Tex. 1929); O.C.G.A. 9-11-67.1; FL HB 837 (2023); GA SB 68 (2025)
- Marathon Strategies 2025 verdicts report; CCC/EvolutionIQ (Dec 2024); Federato Series D (Aug 2025); Capgemini/WNS (Jul 2025)
- Round-1 dossiers in this workflow: r1-04 Demand Shield, r1-05 Recovery Audit, r1-06 Exposure Assurance
