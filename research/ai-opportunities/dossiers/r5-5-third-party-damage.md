# StrikeLedger: third-party damage recovery for infrastructure owners

**One-liner:** An AI-native operator that matches 811 tickets and police crash reports to asset-owner repair work orders, rebuilds the liability file, and collects from the at-fault party's carrier. It starts with small owners that have no recovery unit (fiber builders, co-ops, munis, counties). The long-term route is to become the claims administrator for public and utility assets, or to roll up regional recovery shops.

**Evidence level:** search snippets only. CMR's revenue and headcount are ZoomInfo estimates. Pole-strike counts and per-claim averages are assumptions.

## Score by profile

Reference points: 54 is the best profile-0 idea so far, and 70+ means genuinely compelling.

| Profile | Steelman | Skeptic (GTM) | Partner score | Why |
|---|---|---|---|---|
| 0: technical outsider, little capital | 52 | 42 | **45** | Buyers are utilities and agencies that buy on trust. The incumbents cost the buyer $0. Cash takes 60-180 days to arrive. |
| A: $3-5M seed plus domain cofounder | 67 | 50 | **57** | Capital covers the cash lag and the integrations. But it is still a better tool sold into a market where buyers already pay nothing, and the ceiling is $40-80M without a TPA move. |
| B: domain insider, modest capital | 64 | 56 | **60** | Relationships and one-call law knowledge, and it can start on contingency. Licensing, data costs and the cash lag remain. |
| C: search fund / acquirer | 68 | 63 | **65** | Buy a regional recovery or subrogation shop with contracts, licenses and history, then use AI to raise yield and margin. This avoids most of the GTM problem, but no target has been verified. |

## Thesis

Nearly every damage event on infrastructure already has a liability document someone else produced: an 811 locate ticket or a police crash report. Money leaks at two points. The first is the join between that document and the owner's repair work order, which is often written days later with no reference to it. The second is the slow manual chase of the at-fault party's insurer. Public recoveries are small next to the damage: ADOT has recovered about $45M since 2012, NCDOT about $8M since 2014, and WSDOT $6.9M in one year, while MnDOT's metro district alone spent about $9M a year on guardrail repair. Purdue found $2-4M a year left uncollected in Indiana. The pool is real and documented. The open question is whether an AI cost advantage turns into share and pricing power in a market that already has labor-priced specialists charging the buyer nothing.

## Workflow today

- **Underground strikes.** A crew repairs the line and closes a work order. An investigator, if there is one (often there isn't at co-ops and overbuilders), pulls the 811 ticket, locate photos and positive-response records. State one-call law, such as PA Act 287, protects compliant excavators, so locate accuracy is the main dispute. A demand goes to the excavator's GL carrier, and contested claims go to firms like Burke Moore. If the locator was at fault, the claim is a contract-indemnity matter with the owner's own locate vendor. Strikes by the owner's own contractors are often waived.
- **Vehicle strikes.** Police code the object struck. Days or weeks later a crew fixes the damage, and the work order usually has no crash-report number. A recovery-unit clerk or a vendor (CMR for GDOT) matches the two, identifies the carrier, sends a demand, and chases it into collections. Leaks come from late discovery, hit-and-runs, claims going stale after about 6 months, missing cost lines (overhead, equipment rates, loss-of-use), and small claims no one works.

## TAM

All figures are estimates.

- **Underground.** About 250-300K damages a year (DIRT recorded 197K in 2024 and undercounts). If 50-60% are recoverable at $3-8K each, that is about $0.4-1.3B.
- **Vehicle strikes on utility assets.** About $0.4-2.4B (assumed).
- **Roadway assets.** About $0.7-2.5B.
- **Gross recoverable:** about $1.5-6B a year, midpoint about $3B.
- **Fee pool:** a $0.4-1.2B ceiling at 15-30% fees. Outsourced spend today is about $100-250M. The serviceable pool in 7 years is about $250-500M, which gives an SOM of $30-70M.

$100M+ requires expanding into TPA work (inbound liability claims for utilities and public entities) or a roll-up.

## Competitors

| Competitor | Position | Scale |
|---|---|---|
| Claims Management Resources (CMR) | Direct specialist covering utilities, DOTs and munis. The responsible party pays its fee. Claims a recovery ratio over 80%. | Founded 1988; about 196 staff and about $34M revenue (est.) |
| Phoenix Loss Control | Outside-plant damage recovery for cable, telecom and utilities on contingency, with no fee upfront. **Already serves the fiber wedge.** | Private; scale unknown |
| Subrogation Division Inc., National Subrogation Services | Generalist third-party recovery | Subrogation Division says $1B+ recovered |
| Sedgwick, Crawford, Gallagher Bassett | TPAs that bundle subrogation; incumbents for the TPA expansion | Multi-billion-dollar revenue |
| In-house units (ADOT, WSDOT, TxDOT, NCDOT; large telcos and IOUs) | Status quo | Headcount-constrained |
| Law firms and collection agencies | Contested claims at 25-33% contingency | Fragmented |
| Irth, KorTerra | Systems of record for the 811 evidence. Could add recovery modules (threat) or partner. | Established vertical SaaS |
| Urbint | Damage-prevention AI. Sells to the same buyer and shrinks the pool over time. | About $144M raised |
| AI-native recovery startups | None found in targeted searches. Treat this as "not found", not "confirmed absent". | n/a |

## Wedge and path to scale

**Wedge.** A 24-month lookback plus go-forward monitoring for owners with no recovery unit. The pipeline geo- and time-matches crash and 811 records to work orders, identifies the insurer, builds a demand package with full cost lines, chases payment, and escalates to partner counsel. Pricing is contingency, or "responsible party pays" where the law allows, plus a monitoring fee. It wins on claim floor ($500-3K claims), late-discovered matches, speed and a transparent portal.

**Path to scale.**
- **Years 0-2:** 20-40 owners, $4-10M revenue.
- **Years 2-4:** DOT RFPs, mid-size IOUs, locator-indemnity claims, loss-of-use claims. $20-40M revenue, competing head-on with CMR.
- **Years 4-7:** either become the TPA for utilities and public entities, handling both inbound and outbound claims, or consolidate regional shops, possibly including CMR. Recovery alone probably caps at $40-80M.

## Steelman summary

Matching documents to work orders is a data problem, which suits AI. Lowering the cost per claim makes small and late-discovered claims collectible, which grows the market. EvenUp (over $2B valuation) showed that investors will pay for a services-shaped claims workflow once AI makes it cheap. Many fiber builders, co-ops and counties have no vendor at all. The joined data asset leads naturally into claims administration. The best version is A plus C: raise a seed, recruit a CMR or DOT cofounder, and buy a small shop in year one. That could reach 70+ if year-two data shows a clear lead over CMR on recovery ratio.

## Skeptic summary

The whitespace is narrower than claimed. Phoenix Loss Control already serves outside-plant and fiber recovery on no-risk contingency, CMR has a DOT practice, and generalists cover the rest. The price anchor is $0, so the AI advantage shows up as vendor margin, not as a buyer benefit, and buyers can't verify yield claims before signing. Small buyers bring enterprise-level acquisition cost with SMB-level contract values. At $1.5K average claims, 60% collection and a 25% fee, revenue is about $225 per claim, and any human touch erases that. On feasibility, hit-and-runs with no crash record can't be matched, false matches mean demands sent to innocent drivers, and underground fault is a legal judgment. Bulk crash data carries DPPA and litigation risk (LexisNexis paid a $5.13M settlement). NC, AZ and FL cap public contingency fees at about 25% and require AG approval. E&O exposure, licensing and PRGX-style decay all apply.

## What's good

- A real, documented, under-collected profit pool, with public evidence of the gap (Purdue/INDOT, the DOT figures).
- The core technical asset, a spatio-temporal matcher between crash records and work orders, is defensible, measurable and AI-friendly.
- Damage is not falling (CGA Index up from 94.0 to 96.7), and BEAD construction adds shallow new plant.
- Under-billed cost lines (loss-of-use, burden, equipment rates) raise yield per claim without new customers.
- It works as a search-fund play: cash-flowing acquired books plus AI margin expansion.

## What's bad

- Capable incumbents (CMR, Phoenix) with a $0-to-buyer price and decades of references.
- Pure recovery tops out around $40-80M, and $100M+ means fighting Sedgwick on licensing and SOC 2, or a roll-up.
- Public procurement, AG fee caps and political sensitivity about billing drivers.
- Uninsured and no-record claims, which make up much of the "leak", are largely uncollectible by anyone.
- Data access (crash-report fees and DPPA risk, Maximo or Cityworks integrations, 811 platforms as gatekeepers).
- Lookback revenue is one-time, and prevention slowly shrinks the pool.

## Best founder profile and why

**Profile C (65), with B close behind (60).** The binding constraints are trust, contracts, licensing and data feeds, not technology. An acquirer inherits all four and gets historical claims to train the matcher. AI then shows up as margin and yield on a book that already exists, which is the right shape for a search fund that doesn't need $100M+ outcomes. A domain insider can start on contingency through relationships but stays small. Profiles 0 and A face the $0-anchor sale head-on. No profile reaches 70 on recovery alone. Getting there needs proof of a recovery-ratio lead plus a credible TPA expansion.

## First 30 days (profile C framing)

1. Build a target list of 15-25 regional recovery and subrogation shops serving utilities, DOTs and telecom (Phoenix Loss Control, state-specific DOT vendors, cut-cable boutiques). Qualify on revenue ($2-10M), contracts and licenses.
2. Run 10 calls with damage-prevention and risk managers at co-ops, munis and fiber builders. Ask who recovers today, what their recovery rate is, and whether they pursue claims against their own contractors.
3. File public-records requests with 3 counties or DOT districts for work orders and crash data. Measure match rates on a 12-month sample to test the unidentified-driver claim.
4. Get a legal memo on AG contingency caps, collection and adjuster licensing, and DPPA exposure in 5 target states.
5. Model unit economics per claim band, including human-touch rates on contested claims.

**Kill criteria:** the automated match lifts identified claims by less than 15% over a clerk baseline, or no acquirable shop exists below $15M revenue at a reasonable multiple.

## Sources

- https://cmrclaims.com/ · https://cmrclaims.com/departments-of-transportation/ · https://www.zoominfo.com/c/claims-management-resources/40259951
- https://chattooga1180.com/georgia-dot-retains-top-national-firm-for-damage-claims-recovery/ · https://patch.com/georgia/monroe-ga/gdot-retains-collection-company-for-cost-of-crash-damages
- https://phoenixlc.com/ · https://www.subrodiv.com/ · https://www.cbinsights.com/company/national-subrogation-services
- https://azdot.gov/news/adot-insurance-recovery-unit-recoups-millions-highway-damage · https://www.startribune.com/when-guardrails-are-damaged-who-pays-and-when-are-they-fixed/600315696
- https://engineering.purdue.edu/JTRP/files/Recovering-Full-Repair-Costs-of-INDOT-Infrastructure-Damaged-by-Motor-Vehicle-Crashes.pdf · https://pdl.fdot.gov/api/procedures/downloadProcedure/225-085-002
- https://utilitycontractormagazine.com/cga-dirt-report/ · https://waterfm.com/report-underground-utility-damage-costs-america-83-2-billion-a-year/
- https://www.burkemoore.com/news/cut-cable-claims/ · https://www.pa1call.org/pocs/7bf4a38e-2dbf-43ce-89b2-aa1f03b2352e/PA-Act-287-as-amended
- https://www.wfsb.com/2025/10/30/states-collect-millions-by-selling-drivers-data-private-investigators-data-brokers/ · https://www.ncleg.net/enactedlegislation/statutes/html/bysection/chapter_114/gs_114-9.5.html · https://www.azleg.gov/ars/41/04803.htm
- https://techstartups.com/2025/10/07/evenup-raises-150m-series-e-funding-at-2b-valuation-to-redefine-personal-injury-law-with-ai/
- https://siliconangle.com/2024/10/24/urbint-raises-35m-enhance-disaster-response-tools-energy-sector/ · https://www.sedgwick.com/claims-administration/risk-and-recovery/
