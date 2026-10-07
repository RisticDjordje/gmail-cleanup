# WDO Scribe: AI-drafted California termite (WDO) reports and repair bids

**One-liner:** The inspector talks and takes photos while walking the crawlspace. Before they leave the driveway, the app has produced a draft California WDO report with every finding linked to a photo, a structure diagram, a consistency check and a priced bid from the firm's own price sheet. The inspector reviews and signs it.

**Source playbook → target industry:** The YC companies below turn field capture into a regulated report. This dossier carries that pattern to pest control, specifically termite / wood-destroying-organism reports for home sales.
- ValueMate (Sp25): LiDAR walkthrough to a regulator-ready appraisal.
- Opusense AI (Sp25): a construction inspector speaks and snaps photos, and the app drafts the report.
- Vetnio (W25): vet scribe.
- Revion (W26): auto-technician reports.
- Adjacent proof outside YC: Spectora's AI Report Assist for home inspectors, about 25% less time per inspection (snippet-level).

## Score: 44 / 100. Verdict: PASS as a standalone company (re-open only if the conversion test below passes)

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 6 | Filling a schema with citations, a linter and a diagram editor is real engineering. The core AI feature (voice plus photos to a report) is close to a commodity. |
| no_domain_required | 5 | The forms and the Act are public. Section 1 / Section 2 classification, further-inspection rules and board liability still need a licensed Branch 3 advisor from day one. |
| bootstrap_to_raise | 6 | Buyers pay $59-99 per inspector by card and AI costs are low. A $10-30M core market is not fundable without expansion. |
| product_not_services | 9 | Pure SaaS. |
| market_size | 3 | WDO-specific spend is about $10-30M. Expanding to all pest documentation gives a bottom-up ceiling of about $50-80M. Volume rises and falls with home sales. |
| ai_advantage_vs_competitors | 4 | TermiteKiosk is a purpose-built California WDO tool that already claims "reports in minutes." FieldRoutes and PestPac own the system of record and are adding AI. Any edge comes from depth and speed, not a gap in the market. |
| gtm_without_network | 6 | The SPCB licensee and filing data is a public lead list, and the "your last 3 jobs become finished reports" demo works cold. Selling a liability document from a founder with no license slows trust. |

The deep dive scored this about 50, the steelman 58, and the two skeptics 44 and 42. I land at 44. Two facts surfaced late weighed most: a California-native incumbent (TermiteKiosk) exists, and WDO reports may already be assembled from canned finding codes, which would shrink the time saved.

## Thesis
A California WDO report is a legal document. It is also the pest company's main sales document: Section 1 findings (active infestation or infection) and Section 2 findings (conducive conditions) turn into treatment and wood-repair work. Incumbents put the form on a screen, but the inspector still keys in the fields, draws the diagram and prices the bid. An AI-native tool could cut evening paperwork and raise how often reports convert into jobs. The second effect is the only part that is venture-relevant, and it is unproven.

## Workflow today
- The NPMA-33 is the national WDI form for HUD/VA-type lending. California, Arizona (WDIIR) and Ohio (OAC 901:5-11-13) have their own rules or forms.
- In California this is Branch 3 work. In 2021, 1,257 companies filed about 900k WDO activities (inspections plus completions) with the Structural Pest Control Board (SPCB 2021 board materials, snippet).
- The inspector crawls the substructure and attic, photographs findings, fills the form and draws the structure diagram. The diagram needs the footprint, a north arrow, additions, the substructure type and area markers keyed to findings. The inspector then writes recommendations and bids, and the report goes into the escrow, agent and lender chain under a closing deadline.
- Fumigation note (correction): Branch 3 firms do not fumigate. Fumigation is Branch 1 work, so Branch 3 reports recommend it and the fumigation is subcontracted. The revenue story is local treatment and wood repair.
- 81.4% of the 16,565 US pest firms run one or two locations (NPMA 2025).

## TAM
These figures are assumption-based. Assuming 10-20% of the 109k US pest technicians do WDI/WDO work gives 11k-22k seats; at $79 per month that is about $10-21M. Pricing per report instead, 1.5-2.5M reports at $8-12 gives about $12-30M. California alone is about $5-6M. Extending to all pest and termite documentation gives about $50-80M. A $1-5M ARR bootstrap business is plausible. A venture outcome needs the conversion lever or a move into multiple trades.

## Competitors

| Company | What it does | Threat |
|---|---|---|
| A&K Systems TermiteKiosk | Purpose-built California Branch 3 WDO software; claims "WDO reports in minutes" | High: same wedge, already incumbent |
| FieldRoutes (ServiceTitan) | California Branch 3 WDO reporting, NPMA-33, diagrams, bids | High: owns the system of record and has AI budget |
| PestPac (WorkWave) | WDI/WDO forms; "AI text summarization" listed on G2 | Medium-high |
| GorillaDesk | SMB pest software sold by card; licensed for NPMA-33; damage diagrams | Medium |
| SmarterLaunch | California WDO add-on sold separately | Medium; also shows willingness to pay |
| Fieldproxy AI, InspectMind AI, PestReport Pro | Horizontal or light voice/photo-to-report tools | Medium: "good enough" substitutes |
| Spectora | AI Report Assist in home inspection | Low direct; shows the platform owner captured the AI scribe there |

## How AI wins (if it does)
1. **Schema-constrained filling.** Each form is a typed schema. Every field must cite a transcript span or a photo, and a field with no citation is rejected. The model fills fields; it does not write free text on a liability document.
2. **Fixed-rule linter and pricer.** The rules catch errors such as a Section 1 finding with no photo or a recommendation with no matching finding. Prices come only from the firm's own price sheet, never from the LLM.
3. **Learning from edits, per firm.** Each firm's wording and price memory, plus the inspectors' field-level edits, become eval and training data.
4. **Conversion follow-up.** Automated follow-up on unconverted Section 1 findings, with e-signature and financing. This is the most defensible value, and FSMs do it poorly today (an inference).

The honest caveat is that ServiceTitan or WorkWave can ship good-enough AI form filling within 12-24 months, so the window is short.

## Wedge → path to scale
California WDO only, sold as a mobile PWA at $99 per inspector per month or $8 per report. It exports a PDF plus structured data and does not replace the FSM. Expansion order: Arizona, Texas, Florida and the NPMA-33 (license needed), then report-to-proposal-to-revenue pricing, then all termite and commercial pest documentation. After that, either become an AI layer across the FSMs (an acquisition path) or carry the engine to other regulated field reports: septic, mold, chimney (NFPA 211), backflow and roofing.

## Steelman summary (58)
The playbook has worked four or more times. The report doubles as a sales document, so the pitch can be revenue won, not only time saved. The hard parts are software problems this founder can solve. The lead list is public and the demo is self-serve. Card-paid SaaS with roughly 90% gross margin. The engine transfers to other trades, which is the fundraising story.

## Skeptic summary (44 / 42)
- Spectora is the comparable, and it shows the system-of-record owner won the AI scribe.
- TermiteKiosk already serves this exact wedge.
- WDO reports may be short and code-based, which leaves little writing time to save.
- Crawlspaces defeat LiDAR, there is no public photo corpus, and recall on missed findings can only be measured with paid re-inspections.
- A PDF the inspector re-keys into the FSM adds work.
- Firms will want indemnity on the liability document.
- The NPMA license terms are unknown.
- Volume is cyclical.

## What's good
- Pure software. It fits the founder's voice-plus-LLM experience.
- Public lead list (SPCB) and a demo that works cold.
- Low AI cost per report (about $0.35-0.55) and card billing.
- The conversion lever could price on revenue won rather than seats.
- A reusable engine for other regulated field reports.

## What's bad
- Small, cyclical core market.
- Purpose-built and platform incumbents in the exact wedge.
- The time-saved claim is unverified and possibly small.
- Liability exposure. Domain nuance requires an advisor from day one.
- PDF-and-re-key workflow until integrations exist, and integration access may be gated by competitors.
- The conversion lift, the actual thesis, is unproven.

## Build plan
- **Capture:** an offline PWA (Next.js, IndexedDB) records audio and photos with timestamps.
- **Pipeline:** speech-to-text with word timestamps, then a Claude structured-output call against a Zod schema with required citations, then the fixed-rule linter and pricer, then a Puppeteer PDF plus JSON/CSV export.
- **Diagram:** a rectangle/SVG editor where the LLM proposes marker positions from spoken locations. No LiDAR at first.
- **Infrastructure:** Supabase, Inngest, Stripe and Vercel.
- **Headline metric:** the share of fields accepted without edits.
- **Hardest risk:** correct Section 1 / Section 2 classification from noisy crawlspace speech.

## Bootstrap-to-raise plan (months 0-12)
- **Month 0-1:** 10-15 discovery calls with California Branch 3 inspectors who use TermiteKiosk or FieldRoutes. Sign a paid advisor (about $500 per month or small equity).
- **Month 1-2:** Build the gold eval set from public disclosure-packet WDO PDFs. Hit the go thresholds (below) before building the full app.
- **Month 2-6:** Trial flow, 30-60 firms, $5-15k MRR. Run an A/B on conversion follow-up for Section 1 findings.
- **Month 6-12:** Add Arizona, Texas and Florida and the NPMA-33. Ship the proposal, e-signature and financing module. Aim for $20-40k MRR, then raise a seed on "regulated field report → revenue," but only if the conversion data supports it.

## Weekend prototype
A web app: upload a voice walkthrough and 10-20 photos. The LLM fills a JSON schema of the California WDO form with a citation for every field. The linter flags gaps, and the app renders a PDF plus a drag-and-drop finding diagram. Test it against 20 real WDO reports with synthetic narration and added crawlspace noise.

## Kill criteria
- Inspectors report under 30 minutes of typing per report, or say they will not re-key output into their FSM.
- Field accuracy below 85%, or Section 1 recall below 95% after counting linter flags, on the gold set.
- Most target firms already use TermiteKiosk or FieldRoutes and see no gap they would pay $50+ per seat to close.
- Firms require vendor indemnity or E&O coverage before piloting.
- Pilots show no measurable lift in Section 1 conversion within 90 days. Without that lift, the scribe on its own is a feature, not a company.

## Sources
- SPCB 2021 board materials: https://pestboard.ca.gov/about/agenda/20220323_ix.pdf
- SPCB 2014 sunset report: https://www.pestboard.ca.gov/forms/sunset_2014.pdf
- California Structural Pest Control Act: https://www.pestboard.ca.gov/pestlaw/pestact.pdf
- CCR 16 §1990: https://regulations.justia.com/states/california/title-16/division-19/article-5/section-1990/
- NPMA 2025 industry figures: https://www.npmapestworld.org/your-business/latest-news/us-pest-control-industry-sustains-steady-growth-with-6-increase-in-2025/
- FieldRoutes: https://fieldroutes.com/solutions/termite-pest-control and https://www.fieldroutes.com/company/news/pestroutes-software-now-supports-california-branch-3-structural-pest-control
- PestPac: https://www.pestpac.com/field/termite-sentricon/ and https://www.g2.com/products/pestpac-by-workwave/features
- GorillaDesk: https://gorilladesk.com/npma-33-wdi-form/
- SmarterLaunch: https://demo.smarterlaunch.com/features/state-inspections and https://support.smarterlaunch.com/en/articles/13767223-california-wdo-add-on
- Fieldproxy AI: https://www.fieldproxy.ai/automations/pest-wood-destroying-report
- InspectMind AI: https://apps.apple.com/app/id6475725008
- TermiteKiosk (A&K Systems): https://www.nachi.org/ak-systems-deal.htm
- Spectora: https://www.spectora.com/r/spectora-introduces-new-ai-tools-reimagining-how-a-home-inspection-gets-done
- Structure-diagram requirements: https://open-exam-prep.com/study-guides/ca-pest-branch-3/wdo-inspection-reports/inaccessible-areas-structure-diagrams
- Ohio rule: https://codes.ohio.gov/ohio-administrative-code/rule-901:5-11-13
- Source YC companies: data/yc-w25-f26.csv (ValueMate, Opusense AI, Vetnio, Revion)
