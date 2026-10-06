# Docket Desk: proceeding intelligence and discovery for utility rate and large-load cases

**One-liner:** AI for state PUC proceedings. It drafts data-request (DR) responses from a utility's own workpapers, ties every number in testimony back to the revenue-requirement model, and searches witness positions and precedent across state dockets. A mirror tier serves intervenors and consumer advocates.

> **Research caveat:** No live verification was possible this run. The shared WebSearch budget was used up, and the egress proxy blocked WebFetch to halcyon.io, powerlines.org, the PUC sites and others. The deep dive and all three red-teams therefore also worked from model memory, up to about mid-2026. Treat every figure and competitor claim as unverified until it is re-checked.

## Verdict: promising with pivot. Overall 37/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 3 | Core software TAM is about $200-400M (estimate) across about 70-100 holding-company logos. SOM by the deep dive's own math is about $10M ARR. |
| Pain intensity | 5 | Real capacity crunch in a record case cycle. But under cost-of-service rules, savings flow to ratepayers, not the buyer. |
| Whitespace | 5 | No direct AI-native rate-case tool is known. S&P RRA, Halcyon (from memory), Workiva and Copilot each cover a layer. |
| AI leverage | 6 | Long-context drafting and cross-docket search are real, but outputs are sworn, so a human must review everything. |
| GTM feasibility | 3 | 6-12 month InfoSec and CEII review, gated by the rate-case calendar. Counsel and consultants act as gatekeepers. Review-side buyers are poor. |
| Defensibility | 3 | The public corpus can be copied. Protective orders block the private-data flywheel. Tie-out is being absorbed into Excel agents. |
| Founder fit | 3 | Needs an ex-rates director or regulatory attorney co-founder to get through the first meeting. |

**Call:** The original idea (per-case utility software sold to the VP of Regulatory) is a **pass**: incentives are misaligned, the ceiling is about $10M ARR, and procurement is calendar-gated. The engine is worth keeping only if it is pointed at a buyer that keeps the savings or has thousands of logos (see Revised thesis).

## Revised thesis
The best reframe is the down-market pivot from the competition skeptic: an **AI-native rate-study and small-utility rate-case firm**. It would serve municipal electric and water utilities, co-ops and small regulated water and wastewater systems, sold as a tech-enabled service.

The target buyers are numerous:
- about 2,000 public power utilities
- about 800 distribution co-ops
- tens of thousands of community water systems
- thousands of small investor-owned water utilities filing simplified PUC cases (all counts from memory)

These buyers face forced rate increases from lead service line replacement (LCRI), PFAS treatment capex and data-center load. They have no rates staff. Today they pay $100-300k for a Raftelis, NewGen or Black & Veatch-type study, or skip updates for years.

**Product:**
- Ingest the general ledger, plant records and billing data.
- Generate the cost-of-service model, rate design and bill impacts, the council or board deck, and (where regulated) the filing package and DR answers.
- A credentialed rates analyst signs off on every study.

Price $30-80k per study plus a rates-monitoring subscription. The competitor becomes a consulting study, not Harvey or S&P, and the LLM's cost advantage decides the sale. The IOU and intervenor corpus becomes a later up-market move, not the wedge.

The second-best option is large-load tariff intelligence for data-center developers. It is profit-motivated and uses only public documents, but it is crowded (Cleanview, Paces, Grid Status, Enverus, Halcyon).

## How the work is done today
- **Timeline:** a general rate case runs 9-11 months.
- **Pre-filing (4-9 months):** the team builds the revenue requirement in Excel or PowerPlan and assembles state filing packages (Florida MFRs, the Texas RFP, PA 53.52, FERC Statements A-P). Each case has 10-30 witnesses. ROE, depreciation and lead-lag studies are outsourced to Concentric, ScottMadden, 1898 & Co. and Gannett Fleming.
- **Discovery:** hundreds to thousands of DRs, each answered in 3-14 days. The chain is coordinator, then SME, then analyst, then counsel, then sponsoring witness. Cost is about 3-10 hours, or $500-5,000, per DR (estimate).
- **Intervenor side:** consultants (Synapse, Exeter, Larkin, GDS, Kennedy, Brubaker) audit the filing for advocates, staff and industrials.
- **Endgame:** rebuttal, settlement (a large share of cases settle) and order.
- **Tools:** Excel, PowerPlan, SharePoint/ShareFile, 50 different e-filing systems, S&P RRA, PUR/Westlaw, Copilot.

## TAM
- Proceeding labor is about $1.8-3.0B a year: utility internal staff about $0.8B, outside spend $0.55-1.55B, review side $0.4-0.7B.
- Software capture of 10-15% gives **$200-400M**.
- SAM is about $30-35M ARR, or $60-100M with a services layer.
- 5-year SOM is about $10-11M ARR.

All figures are estimates. Venture scale needs expansion (FERC, large-load, IRP, or insurance SERFF filings), and each expansion is effectively a new company.

The pivot's TAM, at about 3,000 electric and about 5,000 sizeable water systems restudying every 3-5 years at $50k, comes to roughly $100-150M a year of studies plus subscriptions. That is a rough estimate, and it needs live counts of systems and study frequency.

## Competitors
| Name | Type | Threat |
|---|---|---|
| S&P Global RRA / Capital IQ Pro (ChatIQ, from memory) | Incumbent data, adding AI | High: owns normalized rate-case data and distribution |
| Halcyon (from memory; ex-BNEF team, seed) | AI-native energy filings search | High for the precedent-search wedge; unverified |
| Microsoft 365 Copilot / Excel Agent Mode; Claude for Excel | Horizontal AI | High: DR RAG over SharePoint and formula tie-out inside tools utilities already own |
| Workiva | Connected reporting | Medium-high: already does narrative-to-source tie-out at IOUs |
| Harvey, Legora, CoCounsel, Lexis+ AI | Horizontal legal AI | Medium: already used by outside counsel |
| PowerPlan (Roper) | System of record | Medium: controls the integration point; likely acquirer |
| PUR via Westlaw/Lexis | Precedent incumbent | Medium |
| Concentric, ScottMadden, 1898, Guidehouse, Big Four | Consultancies | Will absorb AI as margin, not resell a tool |
| Arcadia/Genability, Cleanview, Paces, Grid Status, Enverus | Tariff and siting data | Crowd the large-load pivot |
| Raftelis, NewGen, Black & Veatch, Stantec (rate studies) | Consultancies | The incumbents for the down-market pivot |
| Direct AI-native rate-case discovery vendor | — | None known (unverified) |

## Why now
- **Record rate requests:** about $29B requested in H1 2025 versus about $12B in H1 2024 (PowerLines, from memory).
- **Capex:** about $1.1T of IOU capex in 2025-29 (EEI).
- **Large-load tariffs are a new case type:** AEP Ohio (July 2025), the Dominion GS-5 class, Texas SB 6, and DOE's October 2025 letter on a FERC rulemaking.
- **Affordability politics:** PJM capacity prices and the Georgia PSC flips mean more scrutiny and more DRs.
- **Workforce and models:** the rates workforce is aging, and long-context models plus spreadsheet agents now make this work feasible.
- **For the pivot:** LCRI and PFAS capex forces small-system rate increases.

## Wedge and business model
- **Deep-dive wedge:** a witness dossier plus a 48-hour filing red-team for intervenor and utility-side consultancies ($15-40k per seat, $50-150k per firm). Then a utility "Discovery Desk" at $100-250k per case, or $250-750k a year enterprise.
- **Pricing constraints:** outcome-based pricing is a trap, since it would be disallowed as imprudent. Price per case or per DR, and invoice so the fee fits rate-case expense schedules.
- **Pivot model:** a fixed-fee study ($30-80k), an annual subscription ($5-15k), and a filing package plus DR support for regulated small water utilities, priced per case.

## What's good
- A real, measurable capacity crunch during a multi-year super-cycle of rate cases.
- Filing packages are state-standardized (MFR, RFP, Statements A-P), so templates can be productized state by state.
- Sworn testimony and orders are public in every state. Large-load precedent is forming right now and is being copied across states.
- Some intervenors are paid by others: Texas cities are reimbursed by the utility, California has intervenor compensation, and some commissions assess consultant costs to the utility.
- Texas 16 TAC 25.245 rate-case-expense dockets publish consultant invoices, giving free market sizing and a lead list.
- No known direct AI-native entrant.

## What's bad (strongest skeptic points)
- **GTM (kill):** cost-of-service incentive mismatch. Savings on rate-case expense pass to ratepayers, and the utility's real KPI (revenue granted) cannot be attributed to a tool or priced. A new AI line item invites its own DRs and expense sharing (Missouri-style). The mid-size tier is consolidating: NorthWestern/Black Hills, TXNM to Blackstone, ALLETE taken private (all from memory). Revenue is episodic, repeating every 2-4 years.
- **Feasibility (kill):** outputs are sworn, so every draft needs full review, and savings are about 20-40% of drafting time, not of total DR cost. Many DRs are ERP data pulls, not document lookups. AI drafts may themselves become discoverable. Protective orders bar intervenors from uploading confidential workpapers to a vendor and kill the cross-side flywheel. Tie-out is Workiva and Excel-agent territory.
- **Competition (serious concerns):** inconsistencies get fixed through errata; disallowances come from prudence and policy judgments, so the "highest-value" tie-out feature has a weak ROI story. Witnesses already list their prior testimony, and opponents keep archives. S&P RRA and Halcyon threaten the corpus layer. The top 20 IOUs will build their own. Insurance SERFF expansion is a different company.
- **Founder fit:** all three lenses agree that a technical founder without a former VP Rates or regulatory attorney co-founder fails at the first meeting.

## Non-obvious insights
1. **The "utility pays, ratepayers recover" feature is a bug.** A captive, recoverable payer is also an indifferent payer. Sell to buyers who keep the savings: small systems without staff, developers, or intervenors funded by reimbursement.
2. **Discovery responses are mostly not public.** Only testimony and orders form a universal corpus. The scout's "every DR" dataset exists only in a few states (Texas and Kentucky believed; verify).
3. **Down-market inverts the competition.** At $50k per study for a 10,000-meter water system, the alternative is a $150k consultant or doing nothing, not Harvey or S&P. Fixed-fee pricing turns AI efficiency into margin, not lost hours.
4. **The attack side has measurable ROI.** Dollars disallowed are a measurable outcome. The defense side's ROI is unattributable.
5. **Large-load tariff terms are being copied across about 200 utilities in real time.** That makes them the one public dataset with a profit-motivated buyer.

## Cheapest validation test (2 weeks, under $1k)
- **Pull the free data:** download 2023-26 rate-case-expense filings from Texas PUC Interchange (16 TAC 25.245) and 20 small-water rate cases from 2-3 state PUCs (PA, NC, TX). Quantify consultant fees per case and cost per DR.
- **Run 15 calls in parallel, about 5 per group:**
  - municipal or water utility finance directors, recruited via AWWA, state rural water associations and LinkedIn
  - intervenor boutique principals
  - large-load developer energy leads
- **Ask one question per group:**
  - Utilities: "Would you commission a $40k AI-assisted, analyst-signed rate study now?"
  - Boutiques: "Would you pay $50k a year for a firm license?"
- **Build a demo:** generate one complete cost-of-service model from a public small-utility filing using Claude, about $50 of API cost, and show it on the calls.
- **Kill / continue rule:** kill if fewer than 3 of 15 commit to a paid pilot or a letter of intent at the stated price, or if Halcyon or S&P already demos testimony-level search across most states.

## Unresolved questions
- Does Halcyon (or S&P ChatIQ) index testimony and exhibits across state PUCs at depth today?
- Is there a stealth or recently funded AI-native rate-case or rate-study startup (YC, EEI/NARUC/SURFA sponsors)?
- How many small systems actually commission rate studies each year, and at what price? What is Raftelis's scale?
- Have any commissions allowed or disallowed AI tooling as rate-case expense? Any PUC AI-disclosure rules?
- Which states publicly file DR responses?
- Do protective orders permit vendor processing if the vendor signs the agreement?
- Willingness to pay of hyperscaler and developer teams for tariff intelligence, versus buying consultants.

## Sources
All sources are from model memory and were not fetched this run.
- https://www.powerlines.org: rate request trackers
- https://www.eei.org: IOU capex projections
- https://interchange.puc.texas.gov and https://www.puc.texas.gov: 16 TAC 25.245
- https://psc.ky.gov
- https://www.efis.psc.mo.gov
- https://dis.puc.state.oh.us: AEP Ohio data-center tariff
- https://www.scc.virginia.gov
- https://www.spglobal.com/marketintelligence: RRA
- https://www.pur.com
- https://powerplan.com
- https://www.workiva.com
- https://halcyon.io
- https://www.arcadia.com
- https://cleanview.co
- https://www.cpuc.ca.gov: intervenor compensation
- https://eelp.law.harvard.edu: Peskoe & Martin 2025
- https://www.ferc.gov/ferc-online/elibrary
- https://www.serff.com
- https://www.epa.gov: LCRI and PFAS
- https://www.publicpower.org and https://www.electric.coop
