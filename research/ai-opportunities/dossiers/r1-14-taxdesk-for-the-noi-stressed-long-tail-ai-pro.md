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

## Round 2 diligence (2026-10-06)

> Verification caveat: WebFetch was egress-blocked again this round. appealiq.org and reservetax.com were re-tried on 2026-10-06 and both came back EGRESS_BLOCKED. Two things are fully verified: the Ryan/Altus press release and Texas Prop 9 (Ballotpedia), both from fact-check search results. The CCAO GitHub org was confirmed by fetch and `git ls-remote`. Every competitor detail comes from search snippets only. Buyer interviews are **simulated composite personas**, not real calls.

### Score change: 42 → 30, verdict PASS (revisit only on a narrow Cook County trigger)

| Dimension | R1 | R2 | Why |
|---|---|---|---|
| Market size | 5 | 4 | The tooling SAM is gated by low ACV. Bottom-up willingness to pay is about $25-75 per commercial income file, $0-5 per residential or equity file, and $600-2k a year for a TX solo, so the realistic SAM is at the low end of $150-400M |
| Pain intensity | 6 | 5 | The pain is real but sits in a slice: income parcels are about 15-25% of a book (estimate). TX equity work and residential are already templated |
| Whitespace | 3 | 1 | **Contradicted twice.** The direct-filer lane has Reserve Tax at 18% contingency with licensed counsel nationwide. The firm-tooling lane has AppealIQ, Tax Appeal Plus (Oct 2025), V7 Labs and CRE Agentic. The enterprise lane has Avalara AvaMPT (Aug 2025) plus a May 2026 platform, and Ryan's itamlink |
| AI leverage | 6 | 5 | The T-12 normalizer is now a template from a horizontal vendor (V7) and is reproducible with a ChatGPT or Claude prompt library |
| GTM feasibility | 4 | 3 | Prospects already name 2-3 alternatives. There is one sales window a year, and buyers want local or private-tenant deployment |
| Defensibility | 4 | 3 | CCAO's open models are **residential and condo only** (verified at github.com/ccao-data), so the headline Cook County commercial rebuttal moat is not there. Outcome data belongs to the firms |
| Founder fit | 5 | 5 | Unchanged. A licensed insider is still required |

**Why it moved:**
- Both whitespace premises failed: "Ryan won't serve the long tail" and "only pre-LLM tooling serves representatives".
- Fee compression to 15-18% is already happening at Reserve Tax.
- The buyer simulation puts willingness to pay 2-4x below the dossier's $50-300 per parcel.
- AppealIQ's reported $15k one-time license (snippet, unverified) sets a low price anchor.

**What stops it going lower:**
- None of the firm-facing tools shows funding or traction.
- Venue depth (NY RPTL I&E, Cook County BOR/PTAB format), settlement prediction and the retiring-book roll-up have no visible owner. These gaps are unverified absences, not confirmed whitespace.

### Fact-check
| Claim | Status | Evidence |
|---|---|---|
| Ownwell about $50M Series B in 2025 | Partially true | Announced **Feb 2026**: $30M equity (Alpha Edison, Mercato) plus $20M Western Alliance debt, $74M raised in total. Claims 1M+ appeals, $400M+ saved, 86% success. New product is a residential AI "National Appeals Packet". [prnewswire](https://www.prnewswire.com/news-releases/ownwell-raises-50m-launches-national-service-to-streamline-property-tax-appeals-and-make-home-ownership-more-affordable-302692103.html), [HousingWire](https://www.housingwire.com/articles/ownwell-property-tax-appeal-funding/) |
| Ownwell is a near-term commercial income-approach threat | Unverifiable | Coverage is homeowner-focused; ownwell.com/commercial blocked. Its new capital looks aimed at residential |
| Ryan acquired Altus property tax | **Verified** | Closed Jan 2, 2025 for CAD $700M (about US$518M). Altus PT revenue CAD $263M (FY23), about 1,000 staff. Includes itamlink software. [ryan.com](https://ryan.com/about-ryan/press-room/2025/altus-groups-property-tax-services-business-acquisition/) |
| TX Prop 9 ($125k BPP exemption) passed | **Verified** | Nov 4, 2025, 65.04% yes. BPP exemption goes from $2.5k to $125k from TY2026. [Ballotpedia](https://ballotpedia.org/Texas_Proposition_9,_Authorize_$125,000_Tax_Exemption_for_Tangible_Property_Used_for_Income_Production_Amendment_(2025)) |
| Closest pivot analogs are pre-LLM (TaxNetUSA, True Prodigy) | **Contradicted** | Four or more AI tools are sold to appeal professionals: [AppealIQ](https://appealiq.org/), Tax Appeal Plus, [V7](https://www.v7labs.com/agents/ai-agent-for-property-tax-consultants), [CRE Agentic](https://creagentic.ai/tax-appeal) |
| $1-25M commercial long tail is whitespace | **Contradicted** | [Reserve Tax](https://reservetax.com/): AI valuation plus licensed counsel, 18% contingency, nationwide commercial and multifamily |
| Contingency 25-40%, compressing to 15-20% | Partially true | Reserve Tax cites a 25-35% norm and prices at 15-18%. A TX competitor blog claims 40-50% (biased). Ownwell charges 25% |
| Incumbent tooling is pre-LLM | **Contradicted** | Avalara AvaMPT agentic appeals (Aug 2025) plus an AI platform (May 2026). [CPA Practice Advisor](https://www.cpapracticeadvisor.com/2025/08/22/avalara-unveils-ai-infused-property-tax-managed-services-to-streamline-enterprise-compliance/167715/) |
| US property tax about $780-850B/yr | Unverifiable | census.gov blocked; model estimate |
| Cook County BOR, NY cert and NJ are attorney-only for entities, a moat for a tooling vendor | Unverifiable | No primary rules fetched. Reserve Tax already targets attorney venues, which weakens the moat |
| $50-300 per parcel or $10-30k per seat achievable | Unverifiable, likely too high | No public tool pricing except a snippet: AppealIQ about $15k one-time plus about $1.2k/yr. Simulated WTP is $25-75 per commercial file |
| O'Connor 100k+ protests; TX 20% cap at $5M or less | Unverifiable | Fetches blocked |
| CCAO open models enable commercial rebuttal | **Contradicted (new)** | github.com/ccao-data publishes res/condo AVMs, ptaxsim and sales-val. No commercial income model |

### New competitors
| Name | Type | Threat | Funding or scale | URL |
|---|---|---|---|---|
| Reserve Tax Group / Reserve Tax AI | AI-native appeal firm (licensed counsel) plus SaaS (late 2026, 25 founding seats, annual SaaS plus 15% of wins) | **Highest**: hits both the original and the pivot | Unknown | https://reservetax.com/ |
| AppealIQ | Local or on-prem AI for commercial advisory firms, tax attorneys and CPAs (triage, case build, portfolio scan) | High: exact pivot ICP; privacy is its selling point | Unknown; about $15k one-time (snippet) | https://appealiq.org/ |
| Tax Appeal Plus | Workflow software for high-volume appeal pros (Oct 2025) | Medium-high: deadline and workflow layer | Unknown | https://aijourn.com/tax-appeal-launches-to-modernize-property-tax-appeal-management/ |
| V7 Labs appeal agent | Horizontal document AI template: I&E extraction, comps, packages | High: commoditizes the T-12 normalizer | V7 is VC-backed | https://www.v7labs.com/agents/ai-agent-for-property-tax-consultants |
| CRE Agentic Tax Appeal Agent | CRE agent suite | Medium | Unknown | https://creagentic.ai/tax-appeal |
| Avalara AvaMPT plus AI platform | Enterprise BPP and compliance with agentic appeals | Medium (upmarket) | Large incumbent | link above |
| Ryan itamlink | Incumbent software | Medium (upmarket) | Part of the CAD $700M deal | link above |
| ProtestMax.ai, AppealDesk, Appeal Pro, Smart Appeal AI, Owlue, TaxRival | Consumer and prosumer AI packets | Low-medium: commoditize drafting | Small | https://protestmax.ai/, https://www.appealdesk.com/, https://www.appealproai.com/ |
| C3 AI Property Appraisal | Assessor-side AI | Low-medium: shrinks systematic error | Public | https://c3.ai/products/c3-ai-property-appraisal/ |
| PropertyTax.io, LightBox | Cited as appeal-firm tooling (snippet) | Unknown | Unknown | https://zipdo.co/best/property-tax-appeal-software/ |

### Buyer interview highlights (simulated composites)
- **Cook County 5-attorney contingency firm** (6-9k PINs, 300-600 commercial files). Verdict: MAYBE, a near-free pilot on commercial only.
  - *"The bottleneck isn't the form. It's chasing owners for their income and expense statements… then getting one of my analysts to turn a scanned T-12 into something the Board will read."*
  - *"My analyst costs about $67K. If your tool saves 40%… that's worth maybe $15-20K a year to me, not $50K."*
  - *"I tried ChatGPT. It made up a cap rate."*
  - WTP: a flat $12-25k a year, or $40-90 per commercial file. No percentage of savings to a vendor. Wants the tool in their tenant or local, with page-level provenance.
- **TX solo consultant, age 60-68** (500-1,200 accounts). Verdict: NO on software.
  - *"The software side is solved. I've had equity grids for years."*
  - WTP: $50-150 a month, paid annually before season.
  - Open to a book sale: *"I want most of it in cash, and I want to know my clients will be treated right."* Anchors at 1.5-2x fees (estimate), above the dossier's 0.75-1.5x.
- **Multifamily VP of asset management** (30-60 properties). Verdict: NO on filing tools.
  - *"I have no idea whether my consultant got the best number… Nobody shows me the work."*
  - Might pay $250-1k per property a year for a consultant scorecard, which is a channel conflict with the startup's intended customers.
- **Labor anchors** (job-post snippets, unverified): Homewood, IL commercial appeals analyst at $67k; Oak Brook, IL high-volume appeal paralegal at $20-30/hr.
- **Willingness to pay overall** (estimate): $10-30k a year per attorney-venue firm and $40-100k for multi-state firms (likely to build or buy V7 or AppealIQ). First-year ARR from 5-10 design partners is about $75-250k. Seat SaaS likely compresses to $3-10k per seat within 12-24 months.

### Pre-mortem: top failure modes
| Mode | P (est.) | Early warning |
|---|---|---|
| Tooling ACV ceiling: income parcels are a minority, paralegals are cheap, the $15k one-time anchor plus general LLMs hold prices down | 60% | Partners won't commit above $10k a year; income parcels under 25% of book; prompts copied into ChatGPT or Claude |
| Commoditization and vertical integration: Ownwell, Reserve Tax AI, V7 and $45-49 packet tools; value accrues to whoever owns the owner relationship | 50% | Prospects name 2+ alternatives on the first call; a partner loses clients to a direct filer |
| One season per venue means slow learning, and the predictor never beats the naive baseline | 45% | No outcome-labeled set above 2k parcels by month 6; less than 15% error improvement against prior-year reduction % by assessor and class |
| Roll-up execution: attrition, fixed hearing labor, 6-9 month cash lag, earnout disputes turning the company into a low-multiple services business | 35% if pursued | Over 15% of designations not renewed; margin under 40%; days-to-cash over 240 |
| Macro or policy window closes (value lag catches up 2027-28; Prop 9; assessor AVMs improve) | 30% | Reduction rates fall year over year in partner venues |
| No licensed insider co-founder | 30% | Under 30% of cold outreach converts to calls; repeated venue-format errors |
| E&O incident (missed deadline or hallucinated exhibit number) | 10-15% | Any near-miss; unsupported numbers found in packets |

**Root cause in one line:** AI cuts the cost of packet drafting. That is neither the industry's bottleneck (acquisition, hearings, relationships) nor priced high enough to fund a venture, and the market has one sales window a year.

**Kill criteria:**
- **Day 45:** kill if fewer than 3 of 15 reps share 50+ prior-season files with outcomes.
- **Day 45:** kill if income or document-heavy parcels are under 25% of the median partner's book.
- **Day 60:** kill if no licensed co-founder or equity advisor has joined.
- **Day 60:** kill if time saved on 30 real income parcels is under 40%, or there is more than 1 material numeric error per 10 packets.
- **Day 75:** kill the data-moat thesis if the predictor beats the naive baseline by less than 15% on 500+ parcels.
- **Day 90:** kill if no paid pilot is signed at $100+ per parcel or $15k+ a year recurring, or if the median firm's software budget is under $20k.
- **Day 90:** kill if 2 of 5 partners say an existing tool (AppealIQ, V7, ChatGPT and the like) is good enough, or if Reserve Tax or Ownwell already arms firms in your launch venues.
- **Day 90, roll-up:** drop leg two if fewer than 2 of 10 retirees will sell at 1.5x or less with a seller note, or if any book shows over 20% attrition risk or days-to-cash over 270.

### Discovery-call script (do not pitch)
1. Walk me through your last commercial file, from notice to decision. Who touched it, and for how long?
2. Of your last 50 contested commercial files, how many were decided on income vs equity vs sales? Can you pull the real number?
3. What format do T-12s and rent rolls arrive in, and what does your analyst do to them? Can you show me a redacted one?
4. Tell me about the last time an analyst left. What did it cost you that season?
5. What have you tried to speed up prep (templates, outsourcing, ChatGPT, V7, AppealIQ, Reserve Tax)? Why did you keep it or drop it?
6. Tell me about the last deadline you nearly missed. Who keeps the calendar today?
7. When an offer comes in, how do you decide whether to accept or go to hearing? What data do you wish you had?
8. What is your annual spend on software, data (CoStar, comps) and seasonal help? Who approves it, and when?
9. If we processed 20 of your closed 2025 files, what result makes you pay, and what makes you walk?
10. (Retiring consultants) What happens to your clients when you stop? Have you ever discussed it with anyone?

### Who to call first
1. **Cook County small and mid contingency appeal attorneys.** The BOR township cycle is live now. Target the managing partner plus the senior commercial analyst. Seeds: cookcountytaxappeal.com, Gertner & Gertner, the Homewood and Oak Brook firms behind the job posts, and the top filers in BOR data (datacatalog.cookcountyil.gov; availability unverified).
2. **NY tax-certiorari firms** (Westchester, Nassau, Suffolk, NYC Tax Commission), e.g. Goldburd McCone.
3. **TX registered consultants aged 55+ with 500+ accounts.** Call for the succession conversation only; source names from the TDLR registrant search.
4. **2-3 multifamily VPs of asset management**, only to test the consultant-scorecard angle.
5. **Competitive intel first:** demo V7 Go, AppealIQ and Reserve Tax AI. On every call, ask "who else pitched you this year?"
6. **Communities:** IPT property tax track and symposium, IAAO, the ISBA SALT section, the NYSBA tax and real property sections.

### First 30 days (only if the founder chooses to test despite PASS)
- **Days 1-5:** demo AppealIQ, V7 Go, Reserve Tax AI and Tax Appeal Plus. Write down exactly what each fails to do on a Cook County commercial file in BOR format.
- **Days 1-15:** run 15 discovery calls (8 Cook County, 4 NY cert, 3 TX retirees). Log income share of book, minutes per file, current vendor, budget and approval timing.
- **Days 10-25:** build a local or private-tenant T-12 and rent-roll normalizer with page-cited provenance. Add a draft rebuttal of Cook County commercial valuation assumptions, built from the Assessor's published commercial valuation reports (availability unverified; no open model exists). Run it on 20 closed files from 2 firms.
- **Day 30 gate:** continue only if 2+ firms commit files plus a named analyst to a pilot priced at $25+ per commercial file (target $15k+ a year), or 2+ TX consultants take a second book-sale meeting. Otherwise stop.
