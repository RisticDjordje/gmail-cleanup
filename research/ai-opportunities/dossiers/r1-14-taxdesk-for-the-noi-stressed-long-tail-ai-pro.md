# TaxDesk: AI Property Tax Representation for the NOI-Stressed Long Tail

**One-liner (original):** Outcome-priced AI property tax appeals for $1-25M commercial and small multifamily parcels that Ryan-type firms won't serve, sold through property managers in TX/GA/FL.
**One-liner (revised):** An evidence and settlement engine for the people who already hold the licenses and the agent designations. It serves property tax attorneys in attorney-only venues and registered consultants, and adds an AI-enabled roll-up of retiring consultant books as an optional second leg.

> Research caveat: this run's shared WebSearch budget was exhausted and WebFetch was blocked by the egress proxy for every domain tried (ownwell.com, statutes, TDLR, Comptroller). This is the third consecutive run on this idea without primary-source verification. All funding figures, statute citations and policy outcomes below come from model knowledge (cutoff mid-2026) and are marked *unverified* where it matters.

## Verdict: PROMISING WITH PIVOT, 42/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | About $1-1.8B national fee pool (est.). Agent-friendly underserved SAM about $130-220M |
| Pain intensity | 6 | Taxes are the #1-2 controllable opex line for TX multifamily. But most owners already have an agent |
| Whitespace | 3 | Texas is crowded: O'Connor, Ownwell, thousands of registered consultants, CAD self-serve portals |
| AI leverage | 6 | Strong on T-12 normalization and income narratives. Weak on the real bottleneck: hearings, relationships, acquisition |
| GTM feasibility | 4 | One sales window a year, agent-of-record lock-in, 6-9 month receivables, distressed-sponsor bad debt |
| Defensibility | 4 | Drafting is commoditized. Outcome data and channels accrue to whoever holds the most designations, which today is the incumbents |
| Founder fit | 5 | No personal license needed, but a TDLR registrant or attorney partner is required from day one. The pivot fits a technical founder better |

**Why not pass:** contingency is a proven willingness-to-pay model, the evidence step really is document-heavy and LLM-shaped, and attorney-only venues (NY certiorari, Cook County, NJ) are a moat for a tooling vendor even though they block a direct filer. **Why not pursue as scoped:** in the wedge market, AI cuts the wrong cost, and the venture math only closes with a software layer that the original plan treats as speculative.

## Revised thesis
Direct-to-owner AI filing in Texas is a price war against firms that automated equity grids a decade ago. The defensible version is to sell the AI layer to the people who already hold the licenses and the clients. Contingency tax-certiorari and appeal firms (NY RPTL income-and-expense filings, Cook County and PTAB, NJ and PA) and Texas, Georgia and Florida registered consultants run paralegal-heavy books of thousands of parcels each.

The product:
- Ingests T-12s and rent rolls and normalizes them with a line-item audit trail.
- Attacks the assessor's own published model inputs. Cook County's CCAO models are open source.
- Generates venue-formatted packets.
- Predicts settlement ranges from historical outcomes, including Texas CAD portal offer behavior.
- Runs the deadline calendar as software, which is the real E&O exposure.

Pricing is per parcel ($50-300) or per seat. The licensee signs, so TDLR and unauthorized-practice-of-law exposure, owner CAC, collections risk and most seasonality move off the startup's books. Optional leg two, once the engine works: acquire retiring consultants' sticky Form 50-162 books at about 0.75-1.5x fees with seller-financed earnouts and run them on the stack. This inherits the lock-in instead of fighting it. Assessment-shock scores for small-balance lenders and servicers are a later data line.

## How the work is done today
Notices go out (TX April-May with a May 15 deadline; GA 45-day window; FL 25 days after the August TRIM notice). The owner or property manager forwards the notice to a consultant, who holds a persistent agent designation (TX Form 50-162). Evidence comes from three routes:
- **Equity:** TX Tax Code 41.43(b)(3). Roll data only, already automated with tools like TaxNetUSA.
- **Sales comps:** hard in non-disclosure Texas, where they mean CoStar, which carries license risk.
- **Income approach:** 3-8 analyst hours per messy parcel.

Next comes informal settlement (often an algorithmic CAD portal offer), then a 15-minute sworn ARB, BOE or VAB hearing. The fee is 25-40% of first-year savings, billed on the tax bill (Oct-Jan in TX), so cash arrives 6-9 months after the work. A consultant handles about 300-1,000 parcels per season, and that capacity is bound by hearings and relationships more than by Excel.

## TAM
| Layer | Estimate | Basis |
|---|---|---|
| US property tax | About $780-850B/yr | Census QTAX (unverified) |
| Commercial, industrial and 5+ unit apartments | About $250-300B | 30-38% share (est.) |
| $1-25M band tax base | About $120B | About 2M parcels x about $60k |
| First-year winnable savings | About $2.4-3.6B | 20-30% win x about $6k |
| Contingency fee pool | About $0.7-1.1B (up to $1.8B with multi-year) | 30% fee |
| Agent-friendly underserved SAM (TX/GA/FL) | About $130-220M | Deep dive |
| **Pivot SAM: tooling for representatives** | About $150-400M (est.) | Roughly 5-10M parcels appealed per year nationally x $30-50 per parcel software take, plus seats. Very rough |

## Competitors
| Name | Type | Relevance |
|---|---|---|
| Ownwell | AI-native, VC-backed (reported about $50M Series B 2025, *unverified*) | Already runs precomputed-savings outbound and markets investor and commercial appeals. Can add an income engine in a quarter |
| O'Connor & Associates | High-volume incumbent | Already serves the TX long tail cheaply; claims 100k+ protests per year (*unverified*) |
| Ryan LLC (+ Altus tax practice, reported 2025) | Incumbent | Upmarket consolidator; owns REIT and NNN-landlord appeals |
| Popp Hutcheson, Harding & Carbone, Hegwood, Marvin Poer, Paradigm | Incumbents | Sticky commercial and multifamily books |
| Thousands of TDLR solo consultants | Fragmented | The real competitor in the wedge. Also pivot customers and roll-up targets |
| TaxNetUSA, True Prodigy | Tooling and data | Equity grids automated pre-LLM. Closest analog to the pivot in TX |
| K.E. Andrews, DuCharme McMillen, ONESOURCE | BPP compliance | Own multi-unit franchisee BPP |
| Cotality Tax Services, LERETA | Lender tax services | Own the escrow and lender channel |
| AppFolio, Yardi, RealPage, Entrata | PM platforms | Gate the T-12 data. Could bundle a protest partner |
| CAD online portals; ChatGPT/Claude | Free substitutes | Absorb easy-win, low-fee parcels |
| Tyler CAMA, CCAO open models | Assessor-side AI | Shrink systematic error over time |

## Why now
- Values sit 20-40% below 2022 peaks while assessments lag 1-3 years.
- Homestead relief (TX $140k, FL, GA HB 581) shifts the levy to non-homestead property.
- Office appeal wins push burden onto everyone else (Cook County 2024-25).
- The sponsor NOI crisis makes tax savings worth roughly 15x in asset value at a 6.5% cap rate.
- LLMs read scanned T-12s cheaply.
- Hearings and settlements are virtual or online.

**Headwinds:**
- The value-lag window closes by 2027-28.
- The TX 20% non-homestead cap applies to property of $5M or less.
- TX Prop 9 ($125k BPP exemption, believed passed Nov 2025) and Indiana SEA 1 ($2M) erase SMB BPP.

## Wedge and business model (revised)
1. **Design partners (months 0-6):** 3-5 contingency appeal firms in one attorney venue (Cook County or NYC Tax Commission I&E filings) plus 3-5 TX consultants. Run their prior-season parcels through the engine and measure analyst-hours saved and settlement-prediction accuracy.
2. **Product:** T-12 and rent-roll normalizer with audit trail; venue packet generator; assessor-model rebuttal (CCAO); deadline engine; settlement predictor.
3. **Pricing:** $50-300 per parcel, or $10-30k per seat per year. SaaS margins, no receivables risk.
4. **Leg two (optional, year 2+):** acquire 1-3 retiring TX or GA consultant books with seller financing to own outcome data and prove a margin lift from about 30% to 50%+.
5. **Leg three:** an assessment-shock and over-assessment score feed for small-balance lenders and CMBS special servicers.

## What's good
- Proven willingness to pay (contingency norm, over 1M TX protests per year est.). Tax is the largest controllable opex line in TX multifamily.
- The income-approach step is truly document-heavy and LLM-shaped, and the T-12 normalizer is reusable across venues.
- Multi-year mechanics (GA 3-year freeze under O.C.G.A. 48-5-299(c); TX 23.01(e)) are underpriced. That is a pricing edge for whoever models them.
- The Texas non-disclosure insight is correct: equity-route engines run in TX, sales and income engines elsewhere.
- Attorney-only venues block filers but welcome vendors, so the representation rules become a moat for a tooling company.
- Agent-of-record stickiness makes acquired books durable.

## What's bad (red team, by lens)
- **Competition:** Texas is the most crowded appeal market in the US. Ownwell already *is* the scout's product, and O'Connor already serves the long tail. AI lowers every competitor's costs, so fees compress from about 30% toward 15-20% and value flows to distribution. Ohio (Sharon Village, 1997), Cook County and NY are attorney markets, leaving GA and FL as the only greenfield, about $100-200M.
- **GTM:** AI cuts the wrong cost. The bottleneck is acquisition, switching and collections. Form 50-162 lock-in works *against* the entrant, with one sales window a year and 10x slower learning loops. The PM saves nothing from a 25% vs 30% fee, so there is no switching trigger. The distressed-sponsor ICP is a bad-debt trap (5-15% est.). PMs with 50-150 parcels may take protests in-house.
- **Feasibility:** Hearing and negotiation labor is fixed, so the 1,500-3,000 parcels per FTE claim is unproven. CAD portals settle easy parcels for free, which leaves an adversely selected residual. CoStar licensing and Yardi or RealPage integration gates block the data moat. Disclosing income data can hurt strong-NOI owners. Deadline misses are the real E&O tail. Regulatory backlash against AI mass filing is cheap to impose. Realistic gross margin is 45-55%, not 60-70%.

## Non-obvious insights
1. Texas is non-disclosure, so a sales-based reverse AVM fails there. Equity (roll-only) is the Texas engine, and it was industrialized long ago.
2. Under NNN leases the tenant bears the tax. Lessee standing (TX 41.413) exists, but REIT landlords usually control appeals centrally, so the franchisee wedge is narrower than it looks.
3. The economically important step is learning each CAD's settlement-offer function, not packet drafting.
4. A tooling vendor benefits from representation rules that block direct filers. The UPL wall becomes a moat.
5. Assessor transparency (CCAO open-source models) lets you rebut the assessor's cap-rate and vacancy assumptions line by line. That is a product feature, and only attorney-venue tools can monetize it.
6. Roll-up arbitrage: aging solo consultants hold sticky books with no succession plan. AI raises parcels per consultant, so a book bought at 1x fees can re-rate.

## Cheapest validation test (2 weeks, under $1k)
- Pull 2025 Fulton/DeKalb (GA) and Miami-Dade/Broward (FL) appeal and petition counts vs non-homestead $1-5M parcel counts (public rolls plus BOE/VAB stats) to measure the unappealed share. Kill the direct-filer variant if under 40% are unappealed.
- Run 15 calls: 6 NY tax-cert or Cook County appeal attorneys, 6 TX registered consultants, 3 PM ops VPs. Ask about analyst hours per parcel, current tooling, willingness to pay $50-300 per parcel, and appetite to sell their book.
- Prototype a T-12 normalizer plus Cook County CCAO-model rebuttal. Run 10 anonymized parcels free for 2 firms and measure minutes saved against their paralegals.
- **Pass signal:** 2+ firms ask to pay or pilot at $100+ per parcel, or 2+ consultants open book-sale talks.

## Unresolved questions
- Does Ownwell actually do income-approach commercial work, or is its commercial offering marketing only?
- Is entity attorney representation actually required at the Cook County BOR? What exactly do NY I&E filings and NJ requirements demand?
- Texas consultant registrant count, and book-sale multiples?
- TX Prop 9 result, current TX arbitration threshold, and extension of the 20% cap?
- Can CAD portal offers be scraped or modeled at scale? What are the ToS and data-access limits?
- What share of contested parcels is decided by income evidence vs equity?
- Yardi and RealPage third-party data terms; CoStar license constraints on hearing exhibits.

## Sources (none fetched this run; to verify)
- https://www.census.gov/programs-surveys/qtax.html
- https://www.eia.gov/consumption/commercial/
- https://comptroller.texas.gov/taxes/property-tax/
- https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm
- https://statutes.capitol.texas.gov/Docs/TX/htm/TX.23.htm
- https://www.tdlr.texas.gov/ptc/ptc.htm
- https://dor.georgia.gov/local-government-services/digest-compliance-section/property-tax-appeals
- https://floridarevenue.com/property/Pages/Taxpayers_ValueAdjustmentBoard.aspx
- https://github.com/ccao-data
- https://www.ownwell.com/commercial (blocked)
- https://www.poconnor.com/
- https://www.altusgroup.com/
- https://www.taxnetusa.com/
- https://www.appraisalfoundation.org/
