# Suspense Desk + Heirship Registry: AI curative for O&G royalty suspense

**One-liner:** An AI-run, outcome-priced service that clears oil and gas royalty suspense (dead owners, unprobated heirs, bad addresses, missing TINs). **Recommended pivot:** an inbound AI owner-relations and transfer-of-ownership agent for operators, with a get-in-pay subscription for mineral funds.

> **Verification caveat:** the shared web-search budget (200 calls) was used up and the egress proxy blocked statute and court sites, so nothing in this dossier was re-sourced in this session. Statute readings, rates, case outcomes and market sizes come from domain knowledge (to mid-2026) and are marked *verify*. The red-team objection rests on statute text, and that text must be checked before anyone acts on this dossier.

## Verdict: PROMISING WITH PIVOT (weak), overall 39/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | Curative alone is about $0.3–0.7B/yr SAM. The back office overall is about $1.6–2.7B, but BPO and system-of-record vendors already own most of it. |
| Pain intensity | 4 | The pain is real for owners, weak for operators: they keep the float and escheat is cheap. |
| Whitespace | 6 | No funded AI-native focused on suspense was confirmed. |
| AI leverage | 6 | Strong on document reading and genealogy. Weak on the real bottleneck: getting heirs to sign, finding witnesses, notarizing. |
| GTM feasibility | 3 | 6–12+ month cycles, purchases driven by trigger events, GC and privilege friction, SOC 2 and E&O required. |
| Defensibility | 3 | Recorded curative becomes public. MSAs and GLBA/DPPA rules block reuse in a registry. |
| Founder fit | 4 | A technical outsider needs a landman or attorney partner from day one, plus O&G relationships. |

## Thesis (revised)
The original pitch was "clear suspense to stop 12–18% statutory interest." It probably fails because the AI-heavy records (unprobated, fragmented heirships) are the unmarketable-title records. Statutes treat those leniently: TX NRC §91.402(b) allows withholding without interest, and OK PRSA §570.10 applies a prime-linked rate instead of 12% compounded (*verify*). The high-rate exposure sits on cheap address, TIN and unsigned-DO fixes. Escheat after about 3 years of dormancy is also a cheap exit with no further liability.

**Stronger thesis:** stop chasing the operator's backlog and stop suspense from forming in the first place. Build an **inbound AI owner-relations agent**: heirs and executors call or email with death certificates, wills, letters testamentary, small-estate affidavits and W-9s. The agent sorts and extracts the documents, checks them against the operator's curative standards, and drafts the transfer order or DO change so an analyst can approve it in one click. It also answers "why is my check low" questions. It is priced per owner per year and integrates with Quorum, P2 and W Energy. Because the contact is inbound, the FCC's AI-voice TCPA rule doesn't apply. The operator's licensed staff make every decision, so there is no UPL problem and the payor keeps the liability. The product replaces G&A headcount in a roughly $60-oil environment.

**Second line:** a **get-in-pay subscription for mineral funds**, the buyer who actually owns the cash. Agents track each operator's DO queue, assemble conveyance packages, and catch decimal and payment errors. Old-backlog curative becomes a fixed-fee add-on, used for M&A deck conversion and audit cleanups only.

## How the work is done today
- After the DOTO, the DO analyst builds the owner deck in Quorum, P2 Excalibur/BOLO, W Energy or an Enverus-type system. Interests that can't be paid get suspense codes: deceased, address unknown, no W-9, unsigned DO, title requirement, litigation, minimum pay.
- A deceased-owner record is worked by hand: obituary search, then probate indexes in two counties, then people-search (Accurint, TLO, CLEAR), then a family tree, then an affidavit of heirship (TX: disinterested witness, Estates Code ch. 203), a stipulation, or OK judicial heirship (attorney). Then each heir must be found, persuaded, notarized and sent a W-9. A 1/8 royalty can fragment into 15–40 heirs.
- Cost is about $300–2,500 per record fully loaded, or 4–40 hours (estimate). New-well work always comes first, so old records age until they are escheated.

## TAM (estimates; not re-verified)
- Private royalty and ORRI flow: about $45–70B/yr. Standing suspense backlog: about $3–10B (no public source).
- Operator spend on DO, owner relations and curative: about $0.45–0.5B/yr. Broader revenue-distribution back office: about $1.6–2.7B/yr (15–25k staff).
- Mineral-fund get-in-pay: about $50–150M. M&A deck projects: about $10–60M/yr.
- The deep dive's own 5-year SOM is $25–55M ARR-equivalent. That makes a good services firm. Venture scale only works if the product grows into the full owner-relations workflow.

## Competitors
| Name | Type | Relevance |
|---|---|---|
| Enverus (CourthouseDirect, EnergyLink, Instant Analyst) | Incumbent + AI feature | Owns courthouse data and the owner portal. Most likely to bundle AI suspense triage. Blackstone take-private in 2024, about $6B+ (*verify*). |
| Quorum Software | Incumbent SoR | Holds land, DO and owner relations; the myQuorum portal already handles address and W-9 updates. |
| P2 Energy Solutions (Excalibur/BOLO), W Energy | Incumbent SoR | Hold the suspense ledger and control integration access. |
| Accenture / Infosys / Wipro / TCS, majors' captive centers | BPO | Set the labor-price ceiling at $25–40/hr offshore. |
| Land brokerages, title attorneys | Services | The real labor substitute; hold licensing and witness networks. |
| Sovos, Equiniti/Keane, Ryan | Escheat compliance | Sell the cheap "escheat it" alternative. |
| Kelmar, TSG | State auditors | Drive demand, but their remedy is reporting, not curing. |
| Kemp & Associates; mineral buyers mining unclaimed-property lists | Heir-side | Reach the same heirs first. |
| Collide (Houston) | AI-native, horizontal O&G | Closest AI-native; seed funding about $5M (*unverified*). |
| Ancestry / FamilySearch AI, frontier research agents | Commoditizers | Make genealogy research nearly free for everyone. |

## Why now
Multimodal LLMs can now read scanned deeds and probate records. Remote online notarization (RON) and e-recording allow signing without a field landman. Mineral owners are aging and interests are fragmenting. The 2024–25 mega-mergers (Exxon–Pioneer, Diamondback–Endeavor, COP–Marathon, Expand, Viper–Sitio) forced deck integrations. At about $60 oil, G&A cuts favor outsourcing, and the DO and landman workforce is aging.

## Wedge & business model
1. **Suspense X-Ray** ($25–75k fixed): reclassifies suspense by its real cause, scores interest exposure and escheat deadlines, finds duplicate decedents. This is the lead magnet. Deliver it through outside counsel so it stays privileged.
2. **Inbound owner-relations agent** (core): about $3–8 per owner per year or a per-analyst-seat price; recurring.
3. **Mineral-fund get-in-pay**: $50–250k/yr per fund.
4. **M&A deck conversion**: $0.3–3M fixed fee, sold as a subcontract alongside Quorum or P2 services rather than against them.
5. Contingency curative only on high-balance records, partnered with an attorney or landman. Never take fees from owner proceeds.

Expected gross margin: 45–55% early.

## What's good
- A neglected, unglamorous back office with no confirmed AI-native competitor.
- Measurable outcomes (dollars released, records cleared, days to pay).
- The mineral-fund buyer feels IRR loss every month an interest is out of pay. That is a motivated, recurring buyer.
- M&A deck conversion has hard deadlines and budgets that already exist.
- Pivoting to inbound fixes the TCPA, UPL and wrong-heir liability problems in one move.

## What's bad (red-team, by lens)
- **Competition skeptic (verdict: kill):** "The back office is neglected because neglect is rational." Interest carve-outs cover exactly the heirship records, and escheat ends liability. The registry is not a moat: recorded affidavits are public, and MSAs assign the work product to the client. Overlap between operators is probably only 1.2–1.5x. Enverus or Quorum could ship a triage module in about a quarter.
- **GTM skeptic (verdict: serious concerns):** Tail economics: 4–8% of a $400 record is $16–32. Operators would cherry-pick the large records. Revenue drops off once the backlog is cleared. An operator's GC won't let a vendor document under-accrued interest because it becomes discoverable. CAC of $50–150k against mostly one-time ACV. Cline v. Sunoco was reportedly vacated by the 10th Circuit (*verify*), which weakens the class-action threat.
- **Feasibility skeptic (verdict: serious concerns):** Interest exposure and AI leverage fall on different records. Wrong-heir errors are binary and require 100% human review (Sr./Jr. name collisions, half-siblings, situs law, TX community property). AI can't be a disinterested affiant. OK heirship is attorney work. Under the FCC's Feb 2024 ruling (FCC 24-17), cold AI voice calls fall under the TCPA. The startup would depend on data owned by its most likely competitor.

## Non-obvious insights
- **Interest is set by the reason code, not by age.** Under OK PRSA, marketable versus unmarketable title switches the rate between 12% compounded and prime-linked. The dangerous records are cheap admin fixes miscoded as title holds, not hard heirships.
- **Escheat is the real competitor.** The urgent buyers are M&A integrators, companies under audit, and holders in high-rate states, not the general market.
- **Sell to whoever owns the cash.** Mineral funds and heirs gain from release; operators gain from delay.
- **Prevention beats cleanup.** Most hard suspense starts as a poorly handled inbound death notice. Capture it on day 1 with the right documents and it never reaches the backlog.
- **The bottleneck is people, not research.** Genealogy is nearly free now; witness networks and heir signatures are not.
- **Mineral buyers already mine unclaimed-property lists.** That proves hidden value and is also a race for the same heirs. A principal variant (an AI-native buyer of fragmented heir interests) is the highest-upside pivot but needs a lot of capital.

## Cheapest validation test (2 weeks, <$1k)
1. Get 3 anonymized suspense ledger exports, through NADOA/AAPL contacts or a fractional DO consultant (budget about $500 for a consultant's time or an intro). Measure: share of dollars in interest-bearing, marketable-title codes; median curable balance; count of records above $5k; share that are inbound-death-notice-originated.
2. Pay an OK/TX O&G attorney for one hour (about $300–450) to confirm how §91.402(b) and §570.10 treat deceased-owner suspense.
3. Interview 5 DO managers and 3 mineral-fund ops leads: "Would you pay per owner per year for an inbound owner-relations agent?" and "What does a month out of pay cost you?"

**Kill if:** less than 20% of dollars are interest-bearing curable records, the median curable balance is under $2k, and no mineral fund will name a price.

## Unresolved questions
- Exact interest and title carve-out text in TX, OK, NM and ND, and Cline v. Sunoco's final appellate status.
- Real distribution of suspense balances by reason code and size.
- Whether Enverus, Quorum or P2 already have an AI owner-relations or suspense module on their roadmap.
- How much DO and owner-relations work at mid-size operators is already offshored.
- Whether MSAs would ever allow cross-operator reuse of heirship data.
- Mineral funds' willingness to pay, and whether operator DO queues (not research) are the real get-in-pay bottleneck.

## Sources (to verify; none fetched this session)
- TX NRC ch. 91 §91.401–.406: https://statutes.capitol.texas.gov/Docs/NR/htm/NR.91.htm
- TX Estates Code ch. 203: https://statutes.capitol.texas.gov/Docs/ES/htm/ES.203.htm
- OK PRSA 52 O.S. §570.10: https://www.oscn.net
- ND §47-16-39.1: https://www.ndlegis.gov/cencode/t47c16.pdf
- NM Proceeds Payment Act NMSA §70-10: https://nmonesource.com
- Cline v. Sunoco (10th Cir.): https://www.ca10.uscourts.gov
- FCC 24-17 AI voice / TCPA: https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal
- 15 CFR Part 1110 (DMF): https://www.ecfr.gov/current/title-15/subtitle-B/chapter-XI/part-1110
- TX Comptroller Unclaimed Property: https://comptroller.texas.gov/programs/unclaimed-property/
- Blackstone–Enverus: https://www.blackstone.com/news/press/
- Viper–Sitio: https://ir.viperenergy.com
- EIA production/prices: https://www.eia.gov/petroleum/
- NADOA: https://www.nadoa.org ; AAPL: https://www.landman.org ; NARO: https://naro-us.org
