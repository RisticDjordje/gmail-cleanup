# SurchargeAudit: recovery audit of tariff surcharges, a contingency-priced "freight audit for tariffs"

**One-liner:** An AI audit of mid-market buyers' accounts payable that finds tariff surcharges that should be refunded or credited back: surcharges whose underlying duty was refunded (IEEPA, Section 122), surcharges that never stepped down after a rate cut, and surcharges billed on non-subject goods. It is paid on contingency.

> **Research caveat.** This verdict rests on the scout's cited sources plus background knowledge through about June 2026. The shared WebSearch budget (200 calls) ran out before this stage, and WebFetch was egress-blocked in every upstream stage. I tried two spot-check searches (PRGX tariff offering; B2B refund-share demands) and both were refused. Everything after June 2026 is **UNVERIFIED**: the CIT's Section 122 ruling, the new Section 301 "forced-labor" tariffs, the count of 21 class actions, and CAPE throughput.

## Verdict: PROMISING ONLY WITH A PIVOT. As specified, it is close to a pass. Overall score: 37/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | One-time fee pool about $0.5-2.5B (deep dive). Skeptics put the startup-reachable share in the low hundreds of millions. Recurring under $1B unless it broadens. |
| Pain intensity | 5 | Real money, but buyers rank supplier relationships above clawbacks. |
| Whitespace | 5 | No named "tariff surcharge audit" product found, but it is one rule pack away for PRGX, Apex, AppZen, Ramp and Coupa. |
| AI leverage | 6 | Parsing invoices and clauses is trivial. The hard parts (inferring origin and IOR, legal entitlement) aren't AI problems. |
| GTM feasibility | 3 | Contingency fees are hard to attribute, cash takes 9-18 months, and the PE and GPO channels are already occupied. |
| Defensibility | 3 | The "surcharge graph" is thin, and the explicit-surcharge cohort won't repeat. |
| Founder fit | 5 | Needs no license if it avoids CBP filings, but it needs trade and legal judgment plus working capital. |

## Revised thesis (after the pivots)
The durable fact isn't the 2026 refund window. It's that tariffs now look like a permanent $150B+/yr cost with constant regime churn (Sections 232, 301 and 122, exclusions, USMCA). The buyer-side clawback rests on weak law: voluntary-payment doctrine, express-contract bars on unjust enrichment, refunds paid to an IOR two tiers up. It also lands in a window that is closing. **The strongest version is a recurring "tariff cost-flow engine" built on data the customer actually owns.** Two candidates:
- **(A) Duty minimization for $5-150M importers (competition skeptic, preferred).** Covers Section 232 metal-content valuation, first-sale valuation (19 USC 1401a), USMCA and other preference substantiation, and 9802 US-content deductions. Paid as gain-share and then a subscription, with a licensed-broker partner. AI collects supplier bills of materials, mill certificates and multi-tier invoices into audit-proof origin, content and value files. Today that work is done by Big 4 trade teams, and only for enterprises.
- **(B) Surcharge governance for distributors (feasibility skeptic).** A P21/NetSuite-native module that computes defensible per-SKU surcharges from the distributor's own ACE and landed-cost data, steps them down automatically, and produces the refund-vs-customer-owed reconciliation for auditors and counsel.

Under either option, the original buyer-side surcharge scan survives only as a free lead magnet ("upload your AP, see what tariffs cost you"). A third route is the GTM skeptic's GPO contract price-compliance agent, which fixes collective leverage and CAC, but GPOs are slow enterprise buyers.

## How the work is done today
1. **Government refund (IOR to CBP).** Brokers file CAPE claims and protests (CAPE has been live since Apr 20, 2026) from ACE ES-003 reports. This layer is commoditizing (Pax, Zollback, brokers), and large importers filed protective CIT suits in 2025.
2. **Downstream pass-through.** Controllers and general counsel grep ERP AR lines for "tariff surcharge", read escalator clauses, and decide on credit memos, at outside-counsel rates of $500-1,200/hr.
3. **Upstream claims (buyer to supplier).** Ad-hoc procurement emails ("we expect our share") that get traded off at the next renewal. Big retailers use PRGX-style audit rights; the mid-market has nothing.

## TAM (estimates; inputs scout-sourced where noted)
- IEEPA pool: about $166B across 53M+ entries and about 330k importers (Wharton and GHY, via the scout).
- 50-70% passed downstream, of which 10-25% was an explicit or contractual surcharge, gives $8-29B actionable. At 20-35% recovered and a 25% fee, that's **$0.5-2.5B one-time**, mostly 2026-28.
- **Skeptic haircuts:** the wedge verticals (MRO, fasteners, electrical, auto) are dominated by **Section 232** goods, which IEEPA reciprocal tariffs excluded and which were never struck down. Multi-tier IOR chains and no refund clauses cut further. Realistically that leaves low hundreds of millions reachable.
- Recurring surcharge audit: about $75-650M/yr. Pivot (A), duty minimization, sits on a $150-220B/yr duty base, and even 1-2% of duty saved at a 25% share is $0.4-1.1B/yr in fees (my estimate).

## Competitors
| Name | Type | Relevance |
|---|---|---|
| PRGX (Ardian, 2021), Apex Analytix | Contingency AP recovery audit | "Surcharge contrary to agreement" is already a claim category for them |
| Cass, CTSI-Global, nVision, Trax, Loop | Indexed-surcharge (freight) audit | The template this idea copies; Loop is AI-native |
| Ramp, Coupa, SAP Ariba, Sievo, AppZen, Bill, Brex | AP and spend platforms | Sit on the invoice data; could ship this as a free feature |
| Copilot for Finance, NetSuite AI, ChatGPT/Claude | Horizontal AI | A controller can do it themselves over an AP export in days |
| RSM, BDO, Grant Thornton, Baker Tilly, CBIZ; Big 4; trade law firms | Mid-market CPA and legal | Sell IEEPA refund and pass-through exposure work to the same buyer |
| CoreTrust, OMNIA, Prime Advantage; AArete, A&M, Efficio, ERA | GPOs and procurement consultancies | Already occupy the PE-portfolio channel |
| Pricefx, Zilliant, PROS, Vendavo; Enable, Vistex; HighRadius | Pricing, rebate and deductions | Own the supplier-side surcharge ledger seat |
| Pax AI ($4.5M seed), Zollback, Gaia Dynamics ($7M seed), Amari AI ($4.5M) | AI-native trade | One module away; Gaia holds the origin and HTS data the claims need |
| Hedge-fund claims buyers (Jefferies, Oppenheimer) | Capital | Monetize IOR refunds at 20-60 cents on the dollar |

## Why now
SCOTUS IEEPA ruling (Feb 20, 2026), then CAPE (Apr 2026), then Section 122 struck down at the CIT (May 2026, unverified) and expired Jul 24, then new Section 301 tariffs (unverified). Explicit "tariff surcharge" lines became common in B2B in 2025, and LLMs can now parse mixed invoice formats cheaply. **But** the "why now" for pass-through is closing: motivated buyers already sent their letters in Q2 2026.

## Wedge and business model (as proposed)
A no-recovery-no-fee audit of 18-24 months of AP plus price letters, delivered as a per-supplier claim pack framed as a *credit request* rather than a demand. The fee is 25-30%. The plan is to convert customers to $15-50k ACV monitoring and later expand to all indexed surcharges (fuel, metals, energy). Distribution through PE operating partners and buying groups.

## What's good
- The fuel-surcharge analogy is real. Indexed surcharges do get over-billed and are slow to come down.
- It is framed as a procurement budget line rather than a legal one, and contingency pricing makes the purchase a no-budget decision.
- It correctly identifies that refund filing is commoditized and that IOR is not the economic payer (DDP, couriers, nonresident IORs).
- It is sharp on accounting asymmetry (ASC 450-30 gain vs. ASC 606/450-20 liability), interest under 19 USC 1505, IRC 263A, and sales tax on refunded surcharges.
- It is capital-light and needs no license if it never files with CBP.

## What's bad (strongest skeptic points)
- **Competition lens:** It is a feature, not a company. PRGX, Apex, Ramp, Coupa and AppZen sit on the AP data. Copilot or Claude over an Excel export does it in days. RSM and BDO already sell to this buyer, and the PE channel is held by CoreTrust and procurement firms. Phase 3 (all indexed surcharges) runs straight into the most crowded market.
- **GTM lens:** Fees can't be attributed. When "recovery" shows up as a softer price at renewal, nobody can bill a contingency on it. First cash arrives 9-18 months after first contact, after the window has closed. The median deal is breakeven or negative once CAC (about $25-60k) and delivery cost (about $10-30k) are counted. Monitoring that alerts twice a year won't convert.
- **Feasibility lens:** The entitlement facts (IOR, origin, HTS, entry date, FIFO cost layer, whether a refund was received) are all in the supplier's systems. **Section 232 dominates the wedge verticals and isn't refundable.** Sticky surcharges are often legitimate (FIFO inventory landed at the old rate). A single wrong inference in a claim sent to a strategic supplier is costly, so every claim needs expert human review and margins fall.
- **Shared view:** Suppliers are moving to embedded pricing and "no pass-through" clauses, so the explicit-surcharge cohort is a one-time event.

## Non-obvious insights worth keeping
1. **How the increase was labeled decides liability.** Transparent explicit surcharges created refund exposure. Embedded price increases didn't. Expect every supplier to embed from now on, which kills future audit pools and pushes value to the importer side.
2. **IEEPA excluded Section 232 goods.** In metal-heavy categories the "tariff surcharge" is mostly 232 cost that won't be refunded. Anyone sizing pass-through by headline IEEPA totals overstates the industrial mid-market pool.
3. **The enduring value is in reducing duty paid, not clawing back past duty.** Section 232 content-value rules and first-sale valuation turn supplier documentation into recurring savings that grow as rates rise. Regime churn helps that business instead of ending it.
4. **A contingency firm can't sit on both sides of a dispute.** Software can stay neutral; a services firm has to pick a side.

## Cheapest validation test (2 weeks, under $1k)
1. Get 3-5 real AP exports from mid-market manufacturers or distributors through LinkedIn and PE-operator contacts, under NDA and free of charge. Run an LLM pass (Claude/GPT plus a script) to measure explicit tariff-surcharge lines as a % of spend, and split them into IEEPA, 232 and unknown. **Kill threshold:** explicit, IEEPA-attributable surcharges under 0.5% of spend, or more than 60% falling under 232 or unknown.
2. Run 15 calls with CPOs and CFOs. Ask: have you already settled pass-through? Would you sign a contingency deal that lets claims go to your top-5 suppliers? Would you accept a fee on credits applied to future purchases? **Kill threshold:** fewer than 4 of 15 say yes.
3. In parallel, test pivot (A). Ask 10 importers that pay Section 232 duty whether they declare metal content value or default to full value, and what supplier documentation they lack. If more than half default to full value, pivot (A) has a measurable savings pool.

## Unresolved questions
- Is the Section 122 CIT ruling on appeal, and are its refunds real? Have the new Section 301 tariffs been verified?
- Have PRGX, Apex, RSM, BDO, Ramp or Coupa launched tariff-surcharge recovery offers?
- What share of 2025 distributor increases were explicit line items rather than embedded in list prices?
- Has any B2B pass-through or consumer class action survived a motion to dismiss?
- How much of the surcharge pool in the wedge verticals is Section 232 versus IEEPA?
- For pivot (A): how big is the gap in 232 content-value documentation, and how does it compare to Gaia's and the Big 4's existing offers?

## Sources (scout-cited; not re-fetched in this run)
- https://budgetmodel.wharton.upenn.edu/p/2026-02-20-supreme-court-tariff-ruling/
- https://www.ghy.com/trade-compliance/cbp-cape-ieepa-refund-progress/
- https://www.skadden.com/insights/publications/2026/05/us-trade-court-strikes-down-section-122-tariffs
- https://globalimportblog.bakermckenzie.com/2026/07/24/united-states-new-10-to-12-5-section-301-forced-labor-tariffs-on-over-60-countries-take-effect-july-24-2026-replacing-current-10-section-122-duties/
- https://www.cov.com/en/news-and-insights/insights/2026/03/consumer-class-actions-arising-from-ieepa-tariff-refund-efforts
- https://openclassactions.com/tariff-class-actions.php
- https://fortune.com/2026/03/07/winners-supreme-court-tariff-ruling-hedge-funds-creating-100-billion-secondary-market-refunds-brandon-howard-lutnick/
- https://www.sidley.com/en/insights/newsupdates/2026/04/ieepa-tariff-refund-claims-key-considerations-for-lenders-borrowers-and-claims-purchasers
- https://www.paxai.com/blog/pax-ai-raises-4-5m-seed-funding-duty-drawback-ai-tariff-refunds
- https://www.zollback.com/blog/tariff-refunds-for-smbs
- https://pulse2.com/gaia-dynamics-raises-7-million-seed-round-led-by-corazon-capital/
- https://pear.vc/amari-ai-seed/
- Legal and statutory background (not fetched): 19 USC 1505, 1401a, 1592; 19 CFR Part 111; HTSUS 9802; ASC 450/606; IRC 263A; UCC 2-207; voluntary-payment doctrine.
