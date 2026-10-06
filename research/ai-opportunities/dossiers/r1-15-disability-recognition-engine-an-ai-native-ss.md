# Disability Recognition Engine: an AI-native SSA representative paid by the parties who save when SSDI is awarded

**One-liner:** An AI-run SSA representative organization that wins SSDI awards for group long-term-disability (LTD) claimants. Carriers would pay because every SSDI dollar is offset against the LTD benefit. The proposed starting point was a "dormant-offset sweep" of open LTD claims held by mid-tier carriers, TPAs and closed-block owners.

> **Verification caveat:** The shared WebSearch budget was used up for this run. ecfr.gov, ssa.gov, federalregister.gov, allsup.com and atticus.com were blocked by the egress proxy for the deep dive, all three red-team agents and this verdict (two spot-check searches and one eCFR fetch were refused). Every figure below comes from model knowledge (cutoff mid-2026) and is labelled FACT or EST. Check the items under Unresolved questions before spending money.

## Verdict: PASS as framed (36/100). Salvage it as a module of r1-11, not as a standalone company.

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | LTD-channel fees about $300-550M (EST). All SSA rep fees about $1-1.5B, and that pool is shrinking |
| Pain intensity | 3 | Carriers have had record profits from 2022 to 2025, and the estimated-offset clause already covers them on non-compliant claimants |
| Whitespace | 5 | No AI-native firm in the insurer channel, but the incumbents charge carriers close to nothing |
| AI leverage | 6 | Medical chronology, listings and grid mapping, and form drafting are real wins. Hearings stay human |
| GTM feasibility | 3 | About 15 carriers, 9-18 month vendor onboarding, plus 8-24 months before cash comes in |
| Defensibility | 3 | Chronicle Legal, DigitalOwl and EvenUp-type tools give incumbents the same efficiency within about 24 months |
| Founder fit | 4 | Needs an SSA representative entity, EDPNAs, an attorney for hearings, SOC 2, and working capital |

## Thesis (revised)
The original idea was to win SSDI awards for LTD claimants and charge carriers an outcome fee on top of the SSA representative fee. That breaks on three points:
1. **The fee stack.** From memory, 20 CFR 404.1720(e) lets SSA skip authorizing a third-party-paid fee only when the claimant is free of liability and the representative waives in writing any fee from the claimant. So it is one revenue stream per case, not two.
2. **The buyer is already covered.** Carriers have an estimated-offset clause, and incumbents operate on a "no cost to the carrier" model funded by the SSA fee.
3. **The wedge is adversely selected.** The "dormant" cohort is mostly weak files, claims already under an estimated offset, or claims the carrier is preparing to terminate. For that last group, a carrier-funded award creates MetLife v. Glenn exposure.

**Best salvage:** keep the engine, which turns a messy medical record into a disability determination (listings and grid scoring, evidence chronology, SSI/SSDI application drafting). Sell it where the buyer has a new, deadline-driven budget: Medicaid MCOs and safety-net health systems facing the OBBBA work-requirement exemptions (medically frail or disabled) from about Jan 2027, with SSI conversion as the upsell. SSI moves a member into ABD capitation and triggers state Interim Assistance Reimbursement.

This is essentially the r1-11 (Medicaid Continuity Ops) thesis plus a disability-conversion module, so pursue it there. The secondary fallback is to sell the file-building workbench as SaaS to existing SSD firms and insurer-channel vendors. That has a ceiling of about $20-50M ARR and competes directly with Chronicle Legal.

## How the work is done today
1. An employee moves from STD to LTD around 90-180 days. The policy requires an SSDI application and offsets primary and usually auxiliary benefits. If the claimant does not comply, the carrier applies an estimated offset.
2. At months 3-6 the carrier refers the claimant to a vendor (Allsup, The Advocator Group, GENEX/Enlyte, Citizens Disability) or to an in-house SSA unit.
3. Paralegals and EDPNAs file the SSA-1696, 3368, 827 and 3373 forms, chase records by fax or through release-of-information vendors, and ask treating sources for opinions. Each handles about 80-150 files (EST).
4. Stages: DDS initial decision in about 7-8+ months (35-40% allowed, EST), reconsideration about 6-7 months (about 13-15%), ALJ hearing about 8-10 months (about 50-55%, EST).
5. SSA pays the representative 25% of past-due benefits, capped at **$9,200** (FACT, for agreements from Nov 30, 2024). The carrier then recovers the retro overlap, net of the rep fee, as an LTD overpayment.

## TAM
- **All SSA-paid rep fees:** about $1.0-1.5B a year (EST, roughly 250-350k represented awards × $4-5k). Volumes have been declining since the 2012-14 peak.
- **LTD channel:** about 55-70k awards a year × $5-6.5k ≈ $300-450M, plus at most about $50-150M in payer fees. The skeptics put realistic initial-level fees for LTD claimants at $2.5-4k, which would push this toward the low end.
- **Value moved to carriers:** about $60-150k of reserve relief per award, roughly $5B a year (EST). This value is real but the vendor does not capture it, because the carrier buys through an RFP.
- **Realistic year-5 outcome:** about $20-50M of services revenue at 40-60% gross margin. A good business, but not venture scale.

## Competitors
| Name | Type | Note |
|---|---|---|
| Allsup | Incumbent (since 1984) | Default insurer- and employer-channel SSDI vendor |
| The Advocator Group | Incumbent | Specialist in LTD-carrier referrals |
| GENEX / Enlyte | Incumbent (PE, Stone Point/KKR) | Can bundle SSDI advocacy into larger claims contracts as a loss leader |
| Citizens Disability, Premier Disability Services | Incumbent | High-volume EDPNA operations, already low cost |
| Carrier in-house SSA units | Incumbent | Can insource evidence work using AI tools |
| Sedgwick | Incumbent TPA | Can attach advocacy to absence/disability contracts |
| Morgan & Morgan, Hill & Ponton, ERISA plaintiff firms | Incumbent | Claimants can switch representatives at any time |
| Atticus | Tech-enabled, consumer side | Representative matching; funding unverified |
| Chronicle Legal, Filevine | AI-enabled software | Give incumbents the AI cost-down |
| EvenUp, Supio, Eve | Adjacent AI-native | Well-funded potential entrants |
| DigitalOwl, Wisedocs, Superinsight | Insurer-side AI | Enable carriers to build the evidence work themselves |
| PCG, Maximus; Conifer, Firstsource | Government and hospital channels | Hold the expansion paths |
| SSA/DDS (IMAGEN, Health IT, digital-first push) | Counterparty automation | Shrinks the premium a representative earns for a "complete file" |

## Why now (and why it is weaker than it looks)
- **Tailwinds:** fee cap raised to $9,200 (Nov 2024). The 5-year past-relevant-work rule (effective Jun 22, 2024) makes the grid rules decisive for claimants aged 50+. SSA cut about 7,000 staff in 2025 and has 1M+ initial claims pending. LLM medical chronologies are now proven in personal injury.
- **Headwinds:** initial-level wins carry small retro and small fees. SSA's push to cut the backlog shrinks retro further. The 2025 proposal to change how age is treated in the grid rules (status unverified) would directly hit the 50+ cohort the wedge depends on.

## Wedge & business model (as proposed)
- **The offer:** a sweep of open LTD claims older than 12 months with no SSDI award. The engine scores award probability and flags missed auxiliary benefits and appeal windows. The company then represents claimants who opt in.
- **Pricing:** a per-award fee or a 3-5% share of reserve release, plus the SSA fee.
- **Corrected version:** carrier-paid and claimant-free (no SSA fee), sold to closed-block owners and TPAs, limited to hearing-level rescue, where the representative's causal lift is largest. AI never authors sworn claimant statements or physician opinions.

## What's good
- SSA practice is one of the few US legal markets where non-lawyers can practice and own the business outright (EDPNAs, entity registration), with no ABS/MSO workaround needed.
- The payer genuinely holds the claimant and the file. Payer-side CAC is real if the channel can be won.
- Missed auxiliary (dependent) benefits and the 5-year PRW re-file cohort are concrete pools that incumbents may under-work.
- The engine itself (listings and grid scoring, chronology, record-chasing voice agent) carries over to Medicaid, SSI, hospital and workers' comp channels.

## What's bad (the skeptics' strongest points)
- **Competition (kill):** fee stacking is very likely barred under 404.1720 and 404.1740. Incumbents already charge carriers close to nothing, so a lower cost structure wins nothing. The AI saving shows up in vendor margin, not in contract wins. The fee pool is shrinking, and Binder & Binder went bankrupt in 2015.
- **GTM (serious concerns):** "zero CAC" in practice means enterprise sales to 15 monopsony buyers with SOC 2, NAIC AI bulletin and NYDFS Part 500 requirements, at roughly $300-600k and 9-18 months per logo. The estimated-offset clause leaves carriers little marginal reason to pay. Claimants distrust representatives the insurer sends. A small team faces 2-3 years of burn.
- **Feasibility (serious concerns):** onset-date conflict. Amending onset to the 50th or 55th birthday helps the claimant but cuts the carrier's recovery, so the pitch of "moving onset earlier for the carrier" advertises a breach of loyalty. AI-drafted SSA-3373s and pre-filled medical source statements resemble the Eric Conn fraud and invite similarity-flagging. DDS develops the record itself, so initial-level lift is small and hard to attribute. Hearings, where the money is, cannot be automated.
- **Verdict-level:** closed blocks are mostly individual DI, which generally has no SSDI offset, so the "fast first customer" largely does not exist.

## Non-obvious insights
1. An SSDI award is a **cost transfer** from LTD carriers, Medicaid and states (via IAR) and reverse-offset workers' comp states to the federal trust fund. The durable product is "disability status as a service" for whichever payer gains, and today the buyer with the most pain is Medicaid, not LTD.
2. A carrier-funded SSDI award can be used as evidence against that carrier in a later LTD termination (MetLife v. Glenn, 2008). This is why carriers will not fund the "dormant" cohort they plan to terminate.
3. Overpayment is recovered net of the representative fee, so the SSA fee is effectively a carrier cost. The "two revenue streams" are one wallet.
4. The bottleneck has moved from ALJ hearings to DDS. AI is most useful at the initial level, which is also where fees are smallest. Only a very low-cost operator profits there, which favors SaaS over services.
5. Workers' comp is split by state. Only the roughly 15 reverse-offset states (CA, NY, FL, WA, NJ, OH and others) benefit from SSDI. Elsewhere, Medicare Set-Aside concerns make WC carriers prefer to avoid SSDI.

## Cheapest validation test (2 weeks, under $1k)
1. **Legal check:** pay about $300-500 for one hour with an SSA-practice attorney (ideally a former SSA OGC attorney) to confirm the 404.1720(e) waiver requirement and the onset-date conflict rules.
2. **Buyer interviews:** use LinkedIn to reach 10 claims leaders at mid-tier LTD carriers and absence TPAs (Mutual of Omaha, Reliance Matrix, Symetra, Securian, Matrix Absence, Sedgwick). Ask: "What do you pay your SSDI vendor per referral or award?" and "Would you pay $500 at intake for overflow capacity?" Kill the idea if fewer than 3 say they pay materially more than $0 or would.
3. **Evidence-gap probe:** in parallel, ask 3 SSD firm owners whether they would pay $50-150 per case for an AI chronology and grid brief. This tests the SaaS fallback.

## Unresolved questions
- Exact 404.1720(e) text, and whether SSA ever authorizes a claimant fee alongside a third-party fee.
- What carriers pay incumbents today: zero, flat per-referral, or award bonus.
- The real share of open LTD claims past 24 months with no award and no estimated offset applied.
- Current status of the 2025 grid-rule age-factor proposal, and FY2025-26 totals for representative fees.
- Atticus funding and whether it has moved into payer channels. Whether EvenUp, Supio or Eve have entered SSD.
- Whether SSA tolerates automated, representative-credentialed syncing of the ARS e-folder.

## Sources (canonical; none fetched live this run)
- https://www.ecfr.gov/current/title-20/chapter-III/part-404/subpart-R (404.1720 third-party fee exception; 404.1740 rules of conduct)
- https://www.ssa.gov/representation/fee_agreements.htm ($9,200 cap from Nov 30, 2024)
- https://www.ssa.gov/representation/eligibility.htm (EDPNA requirements)
- https://www.federalregister.gov/documents/2024/04/18/2024-08059 (5-year past-relevant-work rule; document number unverified)
- https://supreme.justia.com/cases/federal/us/554/105/ (MetLife v. Glenn, 2008)
- https://www.ssa.gov/open/data/ and https://www.ssa.gov/appeals/DataSets/ (pending claims, ALJ dispositions)
- https://secure.ssa.gov/poms.nsf/lnx/0452150000 (workers' comp reverse-offset states)
- https://www.congress.gov/bill/119th-congress/house-bill/1 (OBBBA Medicaid work requirements and retro-coverage changes)
- https://investors.unum.com/ (group disability benefit ratios)
- https://content.naic.org/ (NAIC AI Model Bulletin); https://www.dfs.ny.gov/industry_guidance/cybersecurity (NYDFS Part 500)
- https://www.allsup.com/ ; https://www.atticus.com/
