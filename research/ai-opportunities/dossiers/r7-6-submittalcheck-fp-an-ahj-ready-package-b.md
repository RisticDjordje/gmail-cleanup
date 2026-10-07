# SubmittalCheck FP: AHJ-ready package builder and pre-check for fire sprinkler and alarm contractors

**One-liner:** Drop in the CAD export or PDF set. The tool assembles the package the local fire marshal (the AHJ, or authority having jurisdiction) asks for, checks it against that AHJ's published checklist and the NFPA 13/72 rules, and returns fixes with page citations before submission.

**Source playbook → target industry:** Permitify (YC W25, AI copilot for city plan reviewers), Structured AI (YC F25, AI QA/QC of A/E drawing sets) and Avoice (YC W26, architect QA/QC and submittals) show that buyers pay for AI review of drawing sets against written rules. This round moves that mechanism to **fire protection trade contractors' shop-drawing submittals**, a different buyer and a different trade from the building-permit and A/E slices those companies serve.

## Score: 44/100. Verdict: PASS as a standalone bet (a 10-interview fire alarm probe is the only follow-up)

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 6 | Turning messy PDFs into data and running cited deterministic checks plays to this founder's strengths. The checks that matter (calc vs plan, spacing, alarm compatibility) are hard CV problems. |
| no_domain_required | 5 | The rules are public, but credibility needs a NICET III/IV advisor, and liability sits on stamped designs. |
| bootstrap_to_raise | 5 | Cheap to build and >95% gross margin, but about 20 customers at $400/month is $8k MRR. Slow to reach and too small to raise on. |
| product_not_services | 7 | Pure SaaS, but keeping rules current across AHJs and NFPA cycles can slide into service work. |
| market_size | 4 | An estimated 3,000-6,000 firms (unverified). Contractor-side SAM is about $12-36M. |
| ai_advantage_vs_competitors | 5 | Nobody owns the contractor pre-check step, but AutoSPRINK PRO already auto-prints data sheets from the model, which weakens the builder wedge. |
| gtm_without_network | 3 | Buyers are reached through AFSA/NFSA chapters, trade shows and CAD vendors. This founder has none of those. |

Calibration: RegistryPilot = 55. Deep dive 47, steelman 57, both skeptics 40. I land at 44. The skeptics' AutoSPRINK finding removes the main part of the "builder, not checker" thesis.

## Thesis
Fire marshals publish item-by-item submittal checklists (Austin, Round Rock, Bastrop, Novi, Utah, Nevada, Idaho, Dallas, Franklin TN, Westminster CO, Long Beach NFPA 72, South Carolina, and others). A missing item gets the package returned, sometimes with a re-review fee. The mechanism transfers cleanly and the rulebook is public, so the founder could build a 50-AHJ rule library before talking to anyone. But the buyer is the opposite of Permitify's. A sprinkler designer submits to the same 3-10 AHJs over and over and knows their checklists by heart. The upside depends on interviews showing frequent rejections caused by quantitative errors that existing CAD tools do not catch, and no rejection-rate data turned up this round.

## Workflow today
1. A NICET-certified designer lays out the system in HydraCAD, AutoSPRINK or SprinkCAD and runs the hydraulic calcs.
2. The designer assembles the AHJ package: scope of work, a scaled plan with a north arrow, an NFPA 170 legend, an NFPA 13 compliance note, data sheets for every component, water supply and hydrant flow test data, and the calc summary. Fire alarm packages add battery and voltage-drop calcs, device data sheets and a sequence of operations.
3. The AHJ reviews it. If anything is missing, the package comes back for resubmittal, which can mean a re-exam fee and 1-3 weeks of slip on rough-in and the certificate of occupancy (CO).
4. State forms (Utah, South Carolina) add a patchwork of formats. A Fiverr gig selling pre-permit review shows people pay something for this step.

## TAM (bottom-up, weak inputs)
- Firms: AFSA has about 750 members. Utah has 272 sprinkler and 319 alarm NICET technicians; scaling that by population gives roughly 25-30k of each nationally (my extrapolation). Working estimate: 3,000-6,000 firms.
- Contractor SAM: 3,000-6,000 firms × $4-6k/year ≈ **$12-36M ARR**.
- Expansion: AHJ/third-party review assist at about $20-60M (CodeComply is already there), plus ITM (inspection, testing and maintenance) documentation. Realistic ceiling: **$30-100M ARR** if the product becomes a trade-submittal platform.

## Competitors

| Company | Position | Threat |
|---|---|---|
| CodeComply.ai ($2M seed claimed; sold through CivicPlus) | AI review against NFPA 13/14/72 for AHJs | High. It could add a contractor pre-check portal. |
| AutoSPRINK / HydraCAD / SprinkCAD | Design CAD that already outputs the BOM, calc reports and (AutoSPRINK PRO) auto-printed data sheets | High. Submittal export is a natural feature for them. |
| FireDesign.ai | AI layout and hydraulics; markets "review-ready" packages | Medium. It could move downstream. |
| Tandm | Revit-native sprinkler placement rules | Low. It serves the BIM side. |
| Permitify / Structured AI / Avoice | Source playbooks; city reviewer, A/E QA and architect buyers | Low to medium. Structured AI could extend into MEP/FP drawing sets. |
| Freelance reviewers and FP consultancies | Human redlining | Shows willingness to pay. Software would replace them. |

## How AI wins
The tool reads PDF sets regardless of which CAD tool produced them, the same set the AHJ actually receives. It has a jurisdiction rule graph versioned by code cycle, and a parts library that maps data sheets to listed attributes (K-factor, temperature rating, listed spacing, panel compatibility, current draw), so verification is deterministic instead of LLM guessing. Each pass shows its evidence crop, and anything uncertain is marked "needs human check". The data that compounds is the AHJ return letters customers upload, which reveal each reviewer's unwritten rules. CAD vendors and AHJ-side tools never see these letters. The honest limit: public checklists and the parts library can be copied in 12-18 months, and the return-letter moat only exists once the product has customers.

## Wedge → path to scale
- **Wedge:** a package builder plus pre-check for sprinkler shops in 5-10 metros that publish checklists (Texas metros, Utah, Nevada). The stronger alternative wedge is **fire alarm**: device and panel compatibility checks against listings plus re-running battery and voltage-drop calcs, where no CAD incumbent stands out.
- **3-12 months:** 100+ AHJs, alarm checks, the return-letter flywheel, a $20-40k MRR target.
- **12-24 months:** a free AHJ intake portal for pre-checked packages, which turns AHJs into a distribution channel. Then expand to other trade submittals with the same structure (kitchen hood, clean agent, ERRCS, solar) and to ITM. Likely exits: a CAD vendor or APi Group.

## Steelman (57)
The step between CAD output and AHJ intake has no owner. CodeComply's success on the AHJ side would push contractors to pre-check with the same rules. NICET III designers are expensive, so saving 2-4 hours per package justifies $500-800/month. Margins are high, a prototype takes a weekend, and the same engine extends to every trade with a gatekeeper.

## Skeptics (40 / 40)
- **Competition and GTM:** AutoSPRINK PRO already auto-prints data sheets, so the "builder" comes down to filling a cover form plus a checklist diff, worth minutes per package. Designers who submit to the same AHJs repeatedly don't need it. The real money (Baltimore County's RFP for outsourced sprinkler plan review) is on the AHJ side behind procurement, where CodeComply sits. Getting to 20 customers without a network is slow.
- **Tech and regulatory:** The valuable checks need ≥95% precision on vector and hand-annotated PDFs and on several vendor calc formats. That is a multi-quarter CV project. Ground truth (return letters) is private. A "passes NFPA" claim invites reliance liability, and stale amendments become correctness bugs.

## What's good
- The rules are public and quantitative, which suits deterministic checks with citations, and that is this founder's skill set.
- Willingness to pay is real (re-review fees, Fiverr gigs, AHJ outsourcing RFPs).
- High gross margin and a cheap prototype.
- The engine could extend horizontally to other trade submittals.

## What's bad
- The core builder feature already exists in incumbent CAD.
- Squeezed from both sides: CAD upstream, CodeComply/CivicPlus downstream.
- A small, low-software-spend niche reached through associations, which is the weakest possible GTM for this founder.
- The pain is unproven: no rejection-rate data, and experienced designers know their checklists.
- False passes on stamped designs destroy trust, and the data moat requires customers first.

## Build plan
Next.js/TS front end plus a Python FastAPI worker; Postgres/pgvector, R2 storage, Inngest queues; Claude Sonnet for vision extraction, Haiku for classification; Stripe. Pipeline: intake (PDF + BOM CSV + calc report) → AHJ resolver from the address → PyMuPDF text layer plus vision LLM, producing typed JSON with page/bbox citations → YAML DSL rule engine (deterministic checks first, LLM only for fuzzy items with a quoted page) → assembler (BOM → data sheets, pdf-lib form fill, bookmarked package) → report. A template parser for each CAD vendor's calc report. Cost is about $1-2 per package.

## Bootstrap-to-raise plan (months 0-12)
- **Month 0-1:** Gather 10 real submittals (advisor, Fiverr, public records) and label 15 fields each. Hold 10 interviews, **leading with fire alarm**. Hire a NICET advisor at about $500/month.
- **Month 1-3:** If the gates pass, launch in 4 AHJs and run 3-5 paid pilots at $300/month.
- **Month 3-6:** Expand to 30-50 AHJs, add the alarm compatibility and calc module, start the return-letter flywheel. Target 15 shops / $6k MRR.
- **Month 6-12:** 100+ AHJs, a pilot of the AHJ intake portal with one fire prevention bureau. Target $20-30k MRR before raising on a trade-submittal-platform story.

## Weekend prototype
Scrape 10 public sprinkler and alarm checklists (Austin, Round Rock, Bastrop, Novi, Utah, Nevada, Dallas, Franklin TN, Westminster CO, Long Beach) into DSL rules. Upload a sample submittal PDF. Sonnet extracts the sheet index, legend, scale, north arrow, notes, calc summary and data sheets, and the output is a pass/fail/needs-check list with page links and evidence crops.

## Kill criteria
- Interviews show package assembly takes under 30-60 minutes, or that shops already use AutoSPRINK/HydraCAD data-sheet output.
- First-pass approval is above 85-90%, or rejections are mostly judgment calls rather than missing or quantitative items.
- On the 10 labeled sets, precision on "present" is below 95%, or recall on "missing" is below 80%.
- Not a single shop will send its next live job for a paid pilot within 6 weeks.
- CodeComply or a CAD vendor ships a contractor pre-check before month 6.
- Fire alarm interviews show no compatibility or calc pain beyond what panel vendors' tools already cover.

## Sources
- Checklists: austintexas.gov AutoSprinkler checklist; firemarshal.utah.gov 2022 submittal form; roundrocktexas.gov; cityofnovi.org; cityofbastrop.org; westonfl.org; dorchestercountysc.gov; statefire.llr.sc.gov; longbeach.gov NFPA 72 PRC; westminsterco.gov; wdm.iowa.gov; fire.nv.gov; doi.idaho.gov; franklintn.gov; dallas.gov; knightdalenc.gov; carsoncity.gov; midwayfire.specialdistrict.org
- Competitors: civicplus.com CodeComply fact sheet; trysignalbase.com ($2M seed); nomic.ai fire protection comparison (FireDesign.ai, Tandm); Scribd AutoSPRINK levels and features; gitnux.org fire sprinkler software; meyerfire.com
- Market and demand: securityinfowatch.com (AFSA about 750 members); le.utah.gov 2018 (NICET counts); globenewswire.com ($3.74B product market); fiverr.com pre-permit review gig; samsearch.co (Baltimore County plan-review RFP); jobs.workable.com (NICET III posting)
- Internal: research/ai-opportunities/data/yc-w25-f26.csv (Permitify, Structured AI, Avoice); research/ai-opportunities/FOUNDER-FIT.md (RegistryPilot 55)

All external findings are snippet-level unless stated otherwise.
