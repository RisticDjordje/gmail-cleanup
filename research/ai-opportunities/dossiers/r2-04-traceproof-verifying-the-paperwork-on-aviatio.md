# TraceProof: verifying the paperwork on aviation parts (8130-3 / Form 1 / back-to-birth trace)

**One-liner:** AI review of the airworthiness and trace paperwork on used and repaired aviation parts, plus a network that confirms with the repair station that it really issued a given cert. Later expansion: forensic checks on metals mill certs.

> **Research caveat.** In this run the shared WebSearch budget was already used up (200/turn), and WebFetch was blocked for every relevant domain (justice.gov, faa.gov, ecfr.gov, aviationsuppliers.org, provenair.com, rotabull.com and others). The same was true for the scout, the deep dive and all three red-team critiques. Every incident detail, regulation number, company and funding figure below comes from model knowledge (through mid-2026) and is **unverified**.

## Verdict

**PASS** for a technical founder without industry credentials, at **37/100**. It becomes a conditional "promising with pivot" (about 45) only with an industry co-founder and the sell-side records pivot described below.

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 4 | The aviation and A&D core is about $250-400M US. Venture scale needs the industrial extensions, which have different buyers. |
| Pain intensity | 5 | Fraud does severe damage but is rare. Labor ROI on routine checks is close to break-even. |
| Whitespace | 4 | No issuer registry exists. The trace-review side is crowded (ProvenAir, Bluetail, flydocs, AMROS, AerData). |
| AI leverage | 6 | Extracting data from messy, multilingual traces from the 1990s is real AI work. The detection that matters (asking the issuer) needs no AI. |
| GTM feasibility | 3 | Buyers are conservative quality organizations. Part 145 and AS9100 require tool validation. Small-business ACVs. Lessors and primes take 9-24 months to buy. |
| Defensibility | 4 | Extraction is a commodity. The network is a neutral-utility problem, and signed e-certs remove the need for it. |
| Founder fit | 3 | It needs an ex-MRO QA, technical-records or ASA insider, plus CMMC for defense metals. |
| **Overall** | **37** | |

## Revised thesis

The scout's core idea, a consortium that pools heat numbers across buyers, catches the wrong frauds. Bradken had one customer, and its fraud showed up in the statistics of a single source. AOG Technics forged tags, not mill certs. Only the Spirit/TIG laundered titanium fits the cross-buyer pattern. Every headline fraud was caught by **asking the source of truth**, not by analyzing the document.

The best version therefore makes no money from verification on the buy side. The best surviving thesis is a hybrid of the GTM and feasibility pivots:

1. **Sell-side records operations, for revenue now.** Assemble back-to-birth LLP traces, fix gaps and compile teardown packets for mid-size engine traders, teardown/USM sellers and engine lessors. Price per engine or module at $8-25k, delivered by records specialists using in-house AI. The ROI is asset value: a complete trace raises sale price and liquidity. The customer *wants* the trace found, so the product does not expose them to liability for what it surfaces.
2. **Signed e-cert issuance for the long tail of issuers, which seeds the network.** Offer cheap issuance (ATA Spec 2000 Ch.16-compatible) to small Part 145 shops, with a free QR or API check for buyers. The registry grows from the supply side, and the product only attests what the issuer signed, so it never has to judge whether a document is authentic.
3. **Provenance scores, later.** Sell verified-issuer badges and provenance scores to marketplaces (ILS, PartsBase), insurers and appraisers. Hand registry governance to ASA early.

Even done well, this is a services-heavy business doing about $10-30M in revenue. It becomes venture-scale only if step 3 works.

## How the work is done today

- **Raw-material receiving (AS9100 shops).** Inspectors check the MTR or CoC against the PO, the spec revision and the heat marking. Most *skim* the conformance statement, at roughly 2-5 minutes per cert. A full check runs 15-45 minutes. The paperwork lives in ProShop, Epicor, JobBOSS or Plex ERPs and Excel. Larger docks also take handheld XRF readings.
- **Aviation parts (MROs, distributors, airlines).** Inspectors review the 8130-3/Form 1, block 11/12 and the remarks under AC 20-62 and AC 21-29, and call the issuer if something looks off. That call is how AOG Technics was caught in 2023. LLP back-to-birth review at lease return takes days to weeks per engine and is often done by outside records consultants. There is no central registry of issued forms. E-cert adoption is believed to be low (unverified).

## TAM (estimates, from the deep dive, adjusted)

| Segment | US estimate |
|---|---|
| 8130-3/Form 1 receipt checks (6-12M/yr × $2-6) | $15-70M |
| LLP and lease-transition records review (US share) | $40-120M capture |
| USM trace packets | $5-45M |
| A&D metals certs (about 40M/yr × $1-3) plus risk data | $60-180M |
| Industrial extensions (Section 232/BABA origin, nuclear CGD, PMI) | $300-600M |
| **Total** | **about $0.6-1.2B, but the core is about $250-400M** |

The GTM skeptic's correction: there are only low hundreds of ASA-accredited distributors, so realistic ACVs are $15-40k. Year-5 ARR is plausibly **$4-8M on software alone**, against the deep dive's $10-25M.

## Competitors

| Name | Type | Relevance |
|---|---|---|
| ProvenAir | AI-native | LLP back-to-birth trace for lessors and traders. Direct overlap with the best-paying wedge. |
| Bluetail, AMROS, flydocs | AI-native / records | AI records digitization for business aviation, airlines and lessors |
| AerData STREAM + ILS (Boeing) | Incumbent | Lessor records plus a parts marketplace. Boeing can attach "verified trace" itself. |
| CAMP (Hearst), Veryon (PE) | Incumbent | Maintenance systems of record |
| AMOS (Swiss-AS/LHT), TRAX, IFS Maintenix, Ramco, Quantum Control | Incumbent | Where parts receipt happens. The natural place for e-cert signature checks. |
| Rotabull, ePlaneAI, SkySelect | AI-native | Already parse distributor and airline documents, so trace checks are a short step |
| Net-Inspect, 1Factory, DISCUS, Q-Pulse, ETQ | Incumbent | Validated tools for supplier quality and receiving inspection |
| Exiger (Supply Dynamics), Altana, Interos | Adjacent | Raw-material consortium across primes, and origin/provenance |
| Honeywell GoDirect Trade, Moog VeriPart, Aerotrax | Prior attempts | Pedigree networks that stalled over incentives, not technology |
| ASA, the post-AOG integrity coalition, PRI/Nadcap, OASIS | Neutral bodies | The most dangerous competitor: they could make the registry a free utility |
| Reducto, Extend, frontier vision APIs | Horizontal | Extraction is a commodity |

## Why now

- The fraud precedents: AOG Technics (2023), Spirit/TIG titanium (June 2024) and Bradken (sentencing in 2023).
- The USM boom, driven by CFM56/LEAP and GTF shortages.
- Boeing re-absorbing Spirit under FAA scrutiny.
- The defense ramp bringing in new suppliers.
- Vision-LLMs make digitizing legacy traces cheap.
- DFARS 252.225-7052 magnet/tungsten rules expected around 2027, plus Section 232 at 50% and BABA, push mills toward signed certs.

**Counterpoint:** by late 2026 the urgency is three years old.

## Wedge and business model (deep dive's version)

- "Trace Check" for USM and rotables at $3-8 per form and $25-75 per packet, with a $1.5-5k/month minimum.
- A per-engine AI-enabled review service at $5-20k.
- A free issuer portal.
- Later, network data sold for $100-500k per year.
- Blended gross margin of 65-75%, with about 40% services in years 1-2.

## What's good

- It targets a real and catastrophic failure mode, and it sits where dollars per document are highest (a six-figure LLP that becomes scrap without its trace).
- Lessors and engine traders already pay outside records firms per engine, so a budget line exists.
- The deep dive's best insight: make issuer confirmation one click before adding exotic ML.
- Commercial aviation avoids ITAR/CUI at the start.
- Physical ground truth (XRF), combined with checking a mill's certs statistically against its own history, is a credible metals detector later.
- The flipped model (issuers sign, buyers check free) fits where the industry is heading rather than fighting it.

## What's bad

- **Competition skeptic:** value sits with whoever issues the cert. Signed e-certs (Spec 2000 Ch.16, EU DPP, digital mill certs) turn verification into a signature check built into AMOS, TRAX and the marketplaces. The trace-review wedge would make this the sixth AI records vendor. A registry is a neutral-utility problem that ASA or the coalition owns. The likeliest outcome is a records consultancy or an acqui-hire.
- **GTM skeptic:** a $3-8 check against $1.50-3 of labor saved is ROI-negative on 90%+ of documents. There are only low hundreds of real distributor logos. Every customer needs a manual revision accepted by the FAA. Knowing about a suspect part triggers GIDEP and FCA duties, so general counsels stall. Earlier pedigree networks died over incentives, which AI does not fix.
- **Feasibility skeptic:** at fraud rates of 1 in 10k-100k, a detector raises hundreds of false alarms per real forgery, and inspectors will tune it out. Copy-paste forgeries beat template forensics. AMS and ASTM spec content must be licensed. With no antitrust safe harbor for competitor data pools since the 2023 withdrawal, primes need neutral governance. Plaintiffs will name a vendor that markets "verified" regardless of disclaimers. CMMC L2 and GovCloud cost $250k+ before any metals work with primes.
- **Founder fit:** this is close to disqualifying without an industry co-founder.

## Non-obvious insights

1. Every headline fraud was caught by asking the issuer, never by receiving inspection. The killer feature is a lookup, not AI.
2. The scout's consortium heat graph would have missed two of its own three examples. Each fraud type needs its own detector, placed where the data sits.
3. Selling to the **sell side** (traders and teardown shops assembling traces) avoids the "knowledge creates liability" trap that kills buy-side verification.
4. The DFARS counterfeit clauses the scout cited (252.246-7007/7008) cover electronics only. For metals, the clauses that bite are 252.225-7009 (melt country) and -7052 (magnets/tungsten). A compliance deadline sells better than rare-fraud ROI.
5. The defensible asset is issuance: whoever signs the cert owns the registry. Checking documents after the fact is a feature on its way to being commoditized.

## Cheapest validation test (2 weeks, under $1k)

1. Book 15 calls (via LinkedIn and ASA member lists) with quality heads at engine traders and teardown sellers, and records heads at mid-size engine lessors.
2. Ask for (a) the last 3 records invoices they paid per engine and the turnaround, (b) whether a complete trace changed a sale price, and (c) how many issuer confirmations they send a month and how many go unanswered.
3. Offer a **paid** $2-5k pilot to assemble one real LLP back-to-birth packet in 5 days using Claude plus a contract records specialist (about $500).
4. **Kill** if fewer than 2 of 15 accept a paid pilot, or if they report no price or liquidity premium for complete traces.
5. In parallel, ask 10 small Part 145 shops whether they would pay $100-300 a month for signed e-cert issuance.

## Unresolved questions

- The actual adoption rate of Spec 2000 Ch.16 e-certs, and whether AMOS, TRAX or OEMs ship signature verification by 2028.
- ProvenAir's and Bluetail's current pricing per engine, funding and scope. Do they already sell assembly on the sell side?
- Whether ASA or the post-AOG coalition is already scoping a registry, and whether it would pick a startup as operator.
- Whether complete traces earn a measurable price or liquidity premium in USM and engine sales.
- Whether aviation insurers would discount premiums for verified inventory.
- The final scope and timing of DFARS 252.225-7052.

## Sources (none fetched this run; all from model knowledge, so verify)

- FAA Suspected Unapproved Parts program: https://www.faa.gov/aircraft/safety/programs/sups
- UK SFO, AOG Technics: https://www.sfo.gov.uk
- US DOJ, WD Washington, Bradken / Elaine Thomas: https://www.justice.gov/usao-wdwa
- FAR 52.246-26; DFARS 252.225-7009, 252.225-7052, 252.246-7007/7008: https://www.ecfr.gov/current/title-48
- FAA AC 20-62, AC 21-29, AC 00-56: https://www.faa.gov/regulations_policies/advisory_circulars
- Aviation Suppliers Association: https://www.aviationsuppliers.org
- PRI Nadcap: https://www.p-r-i.org; IAQG OASIS: https://www.iaqg.org/oasis
- ATA e-Business Spec 2000 Ch.16: https://www.airlines.org
- BLS OEWS 51-9061: https://www.bls.gov/oes/current/oes519061.htm
- Reuters/NYT coverage of the Spirit/TIG titanium documentation case (June 2024)
