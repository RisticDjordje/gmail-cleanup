# OperatorPath: a copilot for small-plant water and wastewater operators

**One-liner:** An SMS and mobile copilot for licensed water and wastewater operators. It starts as a free process-math engine and AI exam tutor, then becomes a plant-floor assistant that turns bench-sheet photos into shift logs and drafts the monthly DMR (discharge monitoring report) against permit limits.

**Source playbook → target industry:** technician-knowledge copilot. Proven by Pairio (Sp26, a photo of a broken factory machine returns the manual answer), Sidekick (S26, an SMS agent over a shop's own documents, "no app, no login"), Kebra (S26, field guidance plus warranty paperwork) and Bernard (S26, appliance-repair operations). All four are in `data/yc-w25-f26.csv` with teams of 1 to 9. Transferred to **municipal and small-utility water and wastewater treatment operations**, which none of them has reached.

## Score: 44 / 100. Verdict: promising with pivot

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 6 | Unit-safe process math and photo-to-log extraction are real engineering. Tutor explanations have become a commodity. |
| no_domain_required | 5 | Exam prep needs no credentials, but plant advice needs a retired-operator advisor from day 1. |
| bootstrap_to_raise | 4 | Exam revenue is small. Plant revenue sits behind council budgets. |
| product_not_services | 8 | Pure SaaS with about 95% gross margin. |
| market_size | 4 | SAM about $80-150M ARR. Mid-size, not venture-huge. |
| ai_advantage_vs_competitors | 5 | Clear upgrade over static question banks and SCADA dashboards, but WPI, free AI tutors, Nyad, Hach WIMS and Klir are all moving in. |
| gtm_without_network | 4 | SEO and Reddit work for the tutor. Rural water associations are a gatekeeper and also run a free substitute. |

The rubric average is about 51. I set the overall score lower, at 44, because the step the whole thesis depends on (B2C exam users turning into municipal plant subscriptions) has no evidence behind it, and because a free, USDA-funded substitute serves the same segment. That is below RegistryPilot (55). Inputs: deep dive 48, steelman 60, skeptics 42 and 40.

**The pivot:** do not treat exam prep as revenue. Use the tutor and calculator as free acquisition. Lead the paid product with the reviewed log-to-DMR workflow, sold to (a) mid-sized contract-operations firms, where one buyer covers many plants, and (b) industrial pretreatment and food-and-beverage wastewater operators. Those are private buyers who pay sewer surcharges and fines, so the source playbook's ROI logic carries over. Whether industrial buyers move faster is inferred, not verified.

## Thesis
The mechanism has been proven four times in one YC batch: deskless, licensed experts will use an AI copilot over SMS or photo. Water operations have the same structure. Snippet-level sources: EPA projects losing about 27,500 operators by 2031, NLC (2026) says more than 30% of the workforce is 55 or older, and there are about 10,000 operator openings a year. The 12,867 small POTWs (plants serving fewer than 10,000 people) are run by one to three people using paper bench sheets. The sharp angle is not "AI decision support for utilities", which Nyad and Aquasight already pitch. It is to be the operator's own tool first and then pull the plant subscription in bottom-up. The weakness, raised by the competition skeptic, is that a town plant is a cost center with an annual council budget. Faster troubleshooting does not show up on anyone's P&L.

## Workflow today
- Operators run bench tests (SVI, DO, chlorine residual, pH, ammonia) and record them on paper.
- They do process math by hand (F/M, MCRT, detention time, lbs/day).
- They troubleshoot upsets from O&M manuals or by calling a mentor, and some get help from NRWA circuit riders.
- Each month they transcribe results into NetDMR or a state portal.
- Larger plants use Hach WIMS or Klir. Small plants mostly use spreadsheets (inferred).
- Certification exams fail about half of candidates. NC DEQ's December 2024 wastewater pass rates were WW1 57%, WW2 40%, WW3 42% and WW4 61%.

## TAM (bottom-up, estimates)
| Segment | Math | Size |
|---|---|---|
| Exam prep | 15-25k takers/yr × $80-200 | $1.5-5M/yr. A channel, not a business. |
| Operator Pro | 300k workforce × 10% × $15/mo | ~$5M ARR |
| Small wastewater plants | 12,867 × $3-4.8k/yr | $39-62M |
| Small drinking-water plants | 5-10k × $2.4-3.6k/yr (the ~50k community water system figure is recalled) | $12-36M |
| **Realistic SAM** | including mid-size and contract-operated plants | **$80-150M ARR** |

## Competitors
| Company | What it does | Scale |
|---|---|---|
| Nyad | AI biological decision support, sold to plants of every size, including small rural ones | $1.3M pre-seed (Boost VC, Draper), March 2026 |
| Aquasight Copilot | Copilot on a SCADA-integrated analytics platform | Not verified |
| Hach WIMS | Operational data, LIMS and eDMR incumbent | Large vendor, quote-only pricing |
| Klir | Cloud compliance, sampling and reporting OS | Not verified |
| WPI app; open-exam-prep.com | WPI is an exam vendor whose app has an "AI learning assistant". open-exam-prep.com has a free AI tutor that explains mistakes. | Commoditize the tutor wedge |
| AWWA OpCert, American Water College, Teachable courses, iOS app | Static question banks, $47-229.99, or $19.99/mo | Hold association distribution |
| NRWA Circuit Rider (USDA) | Free O&M and compliance help for systems serving 10,000 people or fewer | Contract renewed in 2026, runs in every state |
| Sidekick / Pairio | Possible entrants. Their SMS-over-documents products could be repositioned to plants. | YC S26/Sp26 |

## How AI wins
1. **No integration needed.** A bench-sheet photo or a texted reading takes the place of SCADA connectors, which Aquasight and Hach depend on.
2. **The LLM never does arithmetic.** A typed, unit-safe engine shows its work, and parameterized problems give unlimited questions that are always correct.
3. **Permit-aware statistics.** Monthly average, weekly maximum and loading are computed against parsed NPDES limits, with alerts on the trend before a violation.
4. **A labeled incident corpus.** A 48-hour "did it fix it?" follow-up records symptom, readings, action and outcome. The tech skeptic notes these labels are noisy: activated-sludge upsets are underdetermined and results lag because of SRT.

What does not work as an edge: the step-by-step AI explanation in the tutor (WPI and free sites already have it), and generic troubleshooting chat, which free ChatGPT also answers.

## Wedge → path to scale
Free "wastewater math calculator" page and SMS bot → $19-29/mo adaptive tutor for 2-3 large states → plant tier at $250-400/mo (photo to shift log, DMR draft for human sign-off, SOP Q&A over the plant's own manuals) → contract-ops multi-plant rollups → industrial pretreatment and drinking water → licensing to state training programs (EPA runs a $20M+ workforce grant program).

## Steelman (60)
The playbook is validated, the whitespace is real, about half of exam candidates fail, and the founder's AI-tutor background fits the first step. Starting with operators avoids procurement for the first purchase. Photo-to-log works at a paper-only plant on day one. A pass-rate lift in one state plus one contract-operations contract could push the score toward 70.

## Skeptic summary (42 and 40)
- The source companies sell to private businesses where downtime costs money. Small POTWs have no such ROI.
- NRWA circuit riders give free help to exactly the TAM segment, and the rural water associations, which are the proposed channel, run them.
- The tutor is already commoditized.
- Trainees, the people the funnel converts, have no budget authority.
- Contract operations visible today are Veolia, Jacobs and Inframark, which are enterprise sales.
- One misread digit ends up in a DMR signed under 40 CFR 122.22. Every value needs human confirmation, so the product partly becomes OCR-assisted data entry.
- Liability is lopsided: real permit or public-health risk against a $300/mo price.

## What's good
- The mechanism is proven by four YC S26/Sp26 companies, none of them in water.
- The founder can ship and sell the first step alone, with card billing.
- Public data gives cheap targeting: pass rates, ECHO violation lists (recalled), and permits.
- Gross margins are very high, and switching costs build once log and DMR history live in the product.
- The prototype can be built in a weekend and validated for under $1k.

## What's bad
- The exam revenue base is tiny and the AI tutor is a commodity.
- The buyer is a municipal cost center with an annual budget. Selling 20 plants means 20 separate approvals over 9-15 months.
- There is a free government substitute, and the channel gatekeeper runs it.
- Liability and DMR-certification exposure. Criminal penalties apply to knowingly false reports under CWA §309(c)(4).
- State-by-state fragmentation in exams, permits and portals.
- The market is mid-size, and the moat builds slowly.

## Build plan
- One TypeScript monolith: Next.js, Postgres with pgvector, Twilio, Stripe, Inngest.
- Models: Claude Sonnet 5.5 for chat, Haiku 4.5 for routing, Opus 5.5 as a fallback for low-confidence extractions.
- Modules: ProcessMath engine (150+ golden problems, ship only at 100%), cited RAG over EPA and state O&M documents, photo extractor with a "reply Y or correct" loop, and a permit/DMR statistics module.
- Estimated COGS is $10-15 per plant per month against a $250-400 price.
- **Hardest risk:** accuracy on handwritten bench sheets. Week-1 eval on 30-50 real photos, pass bar of at least 97% field accuracy. If it fails, fall back to structured SMS entry.

## Bootstrap-to-raise plan (months 0-12)
- **M0-1:** Build the engine, golden set, calculator page and SMS bot. Sign a paid retired chief-operator advisor. Do 10 superintendent interviews and 5 contract-ops or industrial interviews before building the plant tier.
- **M1-3:** Launch the tutor in 2-3 states. Goal: 500 or more operator users and $2-5k MRR. Measure pass rates. Recruit from r/Wastewater, Facebook groups and ECHO-flagged plants.
- **M3-6:** Plant alpha with 5-10 free pilots: photo to log and DMR draft. Convert 3-5 of them at $250-400/mo. Pitch two mid-sized contract-operations firms and two food-and-beverage pretreatment sites.
- **M6-12:** Target 20-50 paying plants plus one multi-plant contract, about $100-250k ARR. Raise a seed on retention, daily SMS engagement and documented exceedances avoided.

## Weekend prototype
A Next.js app and Twilio number with a TypeScript engine for about 20 standard formulas (F/M, SVI, MCRT, detention time, chlorine dose, lbs/day, conversions) exposed as Claude tool calls, cited RAG over public EPA O&M PDFs, a quiz generator that explains wrong steps, and a bench-sheet photo to JSON extractor with SMS confirmation. Demo it to 5-10 operators from r/Wastewater and operator Facebook groups.

## Kill criteria
- Fewer than 5 of 10 small-plant superintendents say they would pay $250+/mo from their own discretionary budget without council approval.
- Field-level extraction accuracy on real bench sheets stays below 97% after per-plant templates.
- Fewer than 30% of trial operators text again within 7 days, or tutor MRR is below $2k by month 3.
- No contract-ops or industrial pilot is signed by month 6.
- Circuit riders or state associations actively discourage outside AI tools.
- Nyad or Hach ships an SMS or photo-first front end for small plants before OperatorPath has 20 paying plants.

## Sources
- Nyad: https://www.wwdmag.com/utility-management/news/55362829/nyad-launches-ai-tool-for-wastewater-operators-raises-13m-in-pre-seed-funding ; https://pulse2.com/nyad-1-3-million-raised-for-ai-wastewater-operations-software
- Aquasight: https://www.wateronline.com/doc/aquasight-unveils-aquasight-copilot-to-aid-assist-water-and-wastewater-utilities-0001
- NLC 2026: https://www.nlc.org/article/2026/04/20/building-a-resilient-water-workforce-in-u-s-cities/ ; EPA workforce: https://www.epa.gov/sustainable-water-infrastructure/water-sector-workforce
- Small POTWs: https://efcnetwork.org/clean-watersheds-needs-survey-and-small-system-needs/
- NC DEQ pass rates: https://www.deq.nc.gov/water-resources/pws/ww-operator-certification/202412-exam-ww-aw-pass-ratepdf/download
- Circuit Rider: https://www.rd.usda.gov/programs-services/water-environmental-programs/circuit-rider-program-technical-assistance-rural-water-systems ; https://eponline.com/articles/2026/05/08/usda-renews-five-year-rural-water-assistance-contract.aspx
- Exam prep: https://apps.apple.com/us/app/-/id6754835308 ; https://open-exam-prep.com/study-guides/mo-water-operator ; https://www.awwa.org/water-system-operations/awwa-opcert-exam-prep-app/ ; https://store.americanwatercollege.org/?p=192072 ; https://apps.apple.com/us/app/id6752021323
- Klir vs Hach WIMS: https://www.klir.com/resources/klir-vs-hach-wims-choosing-a-water-data-management-platform-that-makes-sense-for-you
- Academic chatbot prototype: https://journals.pcz.pl/instal/en/article/view/588
- Contract operations: https://www.wwdmag.com/utility-management/news/55408709/jacobs-selected-for-milwaukee-wastewater-operations-contract-amid-veolia-lawsuit
- Local: `research/ai-opportunities/data/yc-w25-f26.csv` (Pairio, Sidekick, Kebra, Bernard rows); `research/ai-opportunities/LANDSCAPE.md` (water flagged as a slow-buyer whitespace)
