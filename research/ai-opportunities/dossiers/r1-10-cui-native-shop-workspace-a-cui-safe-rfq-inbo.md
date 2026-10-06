# CUI-Native Shop Workspace (CMMC Scope-Shrinker for small defense suppliers)

**One-liner:** A managed CUI-safe RFQ inbox and job-packet workspace that keeps the CMMC Level 2 boundary small for 15-80 person defense machine shops. It would be sold as a fixed-fee managed service with a readiness guarantee, through primes and MSPs.

> **Research caveat:** the shared WebSearch budget ran out and the egress proxy blocked fetches during the deep dive, all three red-team passes and this verdict. My own spot-checks (Exostar ProStack, Atomus funding) were also refused. Regulatory dates and DoD counts come from the scout's sources. Competitor funding, C3PAO counts and settlement amounts are from memory and must be verified.

## Verdict: PASS as scoped (33/100). The only path worth testing is the prime-side pivot.

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 6 | About $0.9-2.9B/yr of small-firm L2 spend at steady state. A real but narrow serviceable market (SAM) |
| Pain intensity | 7 | A condition of award plus False Claims Act exposure for the affirming official. Sticker shock is real |
| Whitespace | 3 | PreVeil, Exostar ProStack, Cuick Trac, Totem, CyberSheath, GCC High MSPs, Purview |
| AI leverage | 4 | Channel routing beats classification. The AI's "not CUI" calls are a liability |
| GTM feasibility | 3 | MSP blocks access, primes won't endorse, about 1.1k/5.6k in-market small firms in years 1/2 |
| Defensibility | 3 | Architecture is copyable. The only moat (assessor track record) takes years |
| Founder fit | 2 | CCA/CCP or DIB credentials effectively required. US-person staff, on-site work, E&O exposure |
| **Overall** | **33** | Pain is real, but this is a crowded services business |

## Thesis (revised)
The original idea, an AI that classifies CUI as it arrives and shrinks the sub's boundary, does not survive red-teaming. Classifying after arrival can't take systems out of scope, because once CUI has landed on a server or laptop that asset is already a CUI asset. Reliable scope reduction comes from moving the point of entry, which is a routing change that existing VDI and enclave vendors already sell without AI. In a 15-80 person shop the drawing *is* the work. It passes through the estimator, CAM, DNC, inspection, outside processors and shipping, so the enclave ends up covering most knowledge workers anyway. The biggest costs don't depend on scope: the C3PAO fee ($30-60k quoted, about $76.7k in DoD's estimate), SIEM/MDR, incident response and owner time. A "$20k problem" is not arithmetically possible.

**The strongest surviving version moves upstream to the prime, where CUI originates.** Under DFARS 252.204-7021, primes must verify subs' CMMC status before flowing CUI to them, and supplier attrition hurts their programs. A prime-side **"CUI Flowdown Minimizer / supplier RFQ exchange"** would work like this:
1. AI checks and fixes markings on outbound RFQ packages.
2. AI drafts a minimized quote package (envelope, material, key tolerances, quantities) for a marking authority to approve. Losing bidders never touch CUI, and only the awarded sub receives the full technical data.
3. It tracks which supplier holds which CUI and their CMMC/SPRS status.

This is enterprise software running inside the prime's own GCC High/GovCloud environment. A human makes every release decision, and one sale reaches hundreds of subs. It is still a hard sale for a small, uncredentialed team, and it faces a legal question that could kill it: whether a derivative package can be treated as non-CUI when decontrol authority sits with the originating DoD component. Exostar is the incumbent there.

## How the work is done today
- **Trigger:** a flowdown letter or prime portal (often Exostar) asks for an SPRS score, CMMC level and target date. Phase 1 self-assessments have appeared in solicitations since Nov 10, 2025. Phase 2 C3PAO L2 requirements start Nov 10, 2026.
- **Who:** the owner (also the affirming official), an office manager or "IT person", a generic MSP, and an RPO consultant ($150-250/hr). Internal effort is about 200-500 hours.
- **Path:** gap assessment ($5-20k) → architecture choice (whole-company GCC High at $15-50k migration plus $40-90/user/mo, *or* an enclave via PreVeil, Cuick Trac VDI or Totem, *or* decline CUI work) → 6-12 months of remediation on 110 controls (FIPS crypto, MFA, logging/SIEM, IR) → SSP, POA&M and inventory → mock assessment ($8-25k) → C3PAO assessment. CNC, CMM and OT equipment are documented as Specialized Assets (32 CFR 170.19), so the shop floor is already mostly carved out of full assessment.
- **Total:** about $80-200k first cycle for a ~30-person shop (estimate), and 12-18 months.

## TAM
- DoD: 337,968 entities affected, about 229,818 small. Roughly 76k need L2 C3PAO certification; small firms are perhaps 55-60k after attrition (estimate).
- Phase-in for small firms needing C3PAO L2: **1,104 (yr 1) → 5,565 (yr 2) → 18,554 (yr 3).** Demand is back-loaded to 2027-29.
- Steady-state TAM: 35-48k firms × $25-60k/yr ≈ **$0.9-2.9B**. SAM for the workspace and evidence layer: $250-700M. Realistic 5-year SOM: $27-72M ARR.
- An assessor-side copilot caps out around $25-55M TAM, so it works as a feature, not a company.

## Competitors
| Name | Type | Relevance |
|---|---|---|
| PreVeil | Incumbent enclave | Default small-DIB CUI email/file enclave. Could add LLM triage cheaply |
| Exostar (ProStack) | Incumbent channel | Prime-sponsored GCC High environment for subs. Owns the prime-to-sub channel and is the main rival to the pivot |
| MS 365 GCC High + Purview, AOS-G MSPs (Summit 7, Agile IT, Steel Root) | Incumbent + AI feature | Purview auto-labeling and trainable classifiers already exist (E5/G5). Bringing them to lower tiers is a licensing decision |
| Cuick Trac, Totem, CyberSheath | Incumbent enclave/MSP | Already ship scope-shrinking VDI enclaves without AI |
| Kiteworks, Virtru | Incumbent | FedRAMP content network (~$456M round 2024, from memory) and data-centric encryption |
| Vanta / Drata / Secureframe / Ignyte / FutureFeed / Kaseya CM | GRC | SSP and evidence generation is a commodity |
| RegScale, Paramify, Atomus, Kovr.ai, Delve | AI-native | Compliance-as-code / CMMC-as-a-service. Funding unverified |
| Paperless Parts, ProShop, ECI, CADDi | Adjacent | Own RFQ intake and drawings, and are moving to GovCloud/ITAR hosting. This blocks the workflow expansion |

## Why now
The rules are final: 32 CFR 170 (effective Dec 16, 2024) and DFARS 48 CFR (Nov 10, 2025), with Phase 2 on Nov 10, 2026. Annual named-official affirmations plus DOJ Civil Cyber-Fraud FCA settlements (MORSECORP, Raytheon/Nightwing, from memory) give it legal teeth. Frontier LLMs are available inside GovCloud and Azure Government, so compliant in-boundary inference is now possible. Assessor scarcity makes first-pass success valuable.

## Wedge & business model (as proposed)
A "CUI Inbox" plus enclave plus an SSP/evidence binder generated from configuration. "L2 in 120 days" at $15-25k setup plus $1.5-2.5k/mo, with a readiness guarantee. Gross margin 45-55% at first (pass-through seats, 50-60% human services). The plan targets 40-60 accounts per engineer, against an RPO norm of 10-15. Fallback: white-label the classifier and boundary-evidence engine to CMMC MSPs at $300-600 per managed org per month (80%+ margin, small ceiling).

## What's good
- Hard deadline with personal legal exposure. Owners face a bid-or-exit decision, so willingness to pay exists.
- Correct architectural insight: anything that reads CUI must sit in-boundary, and most SaaS GRC tools are on the wrong side of that line.
- Two real problems that are not yet solved: derivative CUI (CAM, FAI and traveler files have no markings) and ERP attachments that pull the ERP into scope.
- Low churn once certified, in theory. There is a genuine verification gap for primes (supplier CMMC status).

## What's bad (skeptics' strongest points)
- **Competition lens (kill):** the enclave is the standard category since about 2020 (PreVeil, ProStack, Cuick Trac, GCC High MSPs). The AI classifier is a Purview/Gemini feature. Incumbents can point to hundreds of passed assessments, and buyers trust only that.
- **GTM lens (serious concerns):** the scope lever is weakest in tiny shops (8-20 computer users, and the drawing touches everyone), worth about 10-20% of total cost. The incumbent MSP blocks access, primes won't name a single vendor, and CAC of $12-25k against about $10-12k gross profit/yr doesn't work. Expect certify-then-churn and a thin in-market cohort through 2027.
- **Feasibility lens (kill):** classifying after arrival can't undo scope. Rules at the channel level beat models. Unmarked CUI needs ~100% recall, and "the model said not CUI" is no defense under 7012's "developed or used in performance" prong. Hallucinated SSPs and SPRS scores create FCA co-defendant risk. Hosting each customer's tenant is MSP operations, not SaaS. The guarantee is uncapped exposure.

## Non-obvious insights
1. The scope problem is in office IT and the job-shop ERP, not the shop floor. The rule already covers CNC/OT as Specialized Assets.
2. Rules at the channel level ("everything from Prime X goes to the enclave") beat content classification for scoping. AI only matters for derivatives and for the prime's outbound packages.
3. The right buyer is the **source** of CUI (the prime), not where it ends up (the sub). Minimizing what goes into RFQ packages shrinks the CMMC burden of the whole bidding supply base at once.
4. Prime channels give attention (listings, webinars), not money. Model them as lead generation, not revenue.
5. Certification becomes a pricing asset if 20-40% of subs exit: "win the work competitors can't bid."

## Cheapest validation test (2 weeks, <$1k)
- Run 8-10 calls through LinkedIn and NDIA chapter contacts with prime/Tier-1 supply-chain security and supplier-development leads. Ask whether they would let an AI draft minimized quote packages for marking-authority approval, whether CUI decontrol rules allow it, and whether this year's budget includes supplier RFQ distribution or 7021 verification.
- In parallel, interview 10 small-shop owners and 2-3 C3PAOs. Ask for an itemized first-cycle cost and how much of it is truly scope-dependent.

**Kill criteria:** fewer than 2 primes see minimized packages as lawful and valuable, *and* scope-dependent cost comes in under 30% of the total.

## Unresolved questions
- Can a minimized derivative quote package lawfully be non-CUI, and who holds that authority (the originating component, the CO, or the prime)?
- Current counts of C3PAOs, CCAs and issued certificates, and the real pace of L2 clauses in 2027 solicitations.
- Does Exostar ProStack or PreVeil already do AI marking and derivative detection? What are Atomus, Kovr and Delve's funding and CMMC depth?
- Will Microsoft move Purview CUI auto-labeling down to E3/G3?
- Do C3PAOs accept telemetry-backed out-of-scope evidence?
- Which state CMMC grant programs are live, and how big are they?

## Sources
- https://defensescoop.com/2025/09/09/cmmc-dfars-final-rule-amendment/
- https://www.squirepattonboggs.com/insights/publications/the-cmmc-dfars-final-rule-goes-live-ready-or-not-here-it-comes/
- https://www.arnoldporter.com/en/perspectives/advisories/2025/09/cmmc-final-rule-key-takeaways-for-defense-contractors
- https://www.hklaw.com/en/insights/publications/2025/09/cmmc-goes-live-new-cybersecurity-requirements
- https://thedefensecompliancereport.com/research/cmmc-statistics/
- https://secureframe.com/blog/cmmc-small-business
- https://www.preferreddata.com/blog/cmmc-48-cfr-final-rule-deadline-defense-contractors-north-carolina-2026
- https://www.federalregister.gov/documents/2025/09/10/2025-17359/defense-federal-acquisition-regulation-supplement-assessing-contractor-implementation-of-cybersecurity-requirements (from memory)
- https://www.federalregister.gov/documents/2024/10/15/2024-22905/cybersecurity-maturity-model-certification-cmmc-program (from memory)
- DoD CIO FedRAMP Moderate Equivalency memo, Dec 21, 2023 (from memory); DOJ Civil Cyber-Fraud settlements on justice.gov (from memory, verify)
