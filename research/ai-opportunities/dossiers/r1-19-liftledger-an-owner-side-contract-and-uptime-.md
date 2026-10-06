# LiftLedger: owner-side contract and uptime layer for elevators

**One-liner:** AI that reads elevator maintenance contracts, invoices and public inspection data so owners (or, after the pivot, independent elevator contractors) can find overpriced, auto-renewing OEM service contracts and the 90-120 day window when they can be broken.

> **Evidence caveat:** No live web checks were possible for the scout, the deep dive, all three red teams or this verdict. The shared WebSearch budget of 200 calls per turn was already used up, and the egress proxy blocked WebFetch. Every figure here comes from model training knowledge (cutoff mid-2026) and is labeled approximate or "verify". Treat this as a hypothesis memo, not completed diligence.

## Verdict: PASS as framed (overall 37/100)

The underlying insight is real and reusable: the money sits in the evergreen renewal window and in the information gap over modernization decisions. But the owner-side SaaS and sensor business is small, sells slowly and is easy to copy.

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | $10-15B service pool, but owner-side software is only about $0.1-0.6B |
| Pain intensity | 5 | Real but episodic: pain spikes at renewal every 3-5 years and at modernization every ~25 years |
| Whitespace | 6 | No verified US AI-native player. Uptime (France) and WeMaintain exist in Europe |
| AI leverage | 5 | LLM contract abstraction works but is commoditized. Sensor inference is noisy |
| GTM feasibility | 3 | Each building's board votes separately. The champion (the property manager) is the party being audited |
| Defensibility | 3 | Pricing benchmark has a cold-start problem. Kings III and the OEMs own the hardware channel |
| Founder fit | 4 | Licensing, a credible QEI-certified reviewer, union politics, and capital for the managed-maintenance path |

## Revised strongest thesis

Drop the owner-side sensors and the "catch missed visits" pitch. The visit interval is set by the contractor itself under ASME A17.1 §8.6, so the owner has no contractual number to hold it to. Drop the POTS-gateway Trojan horse as well, because in-car work needs a licensed installer and OEMs and Kings III already take that visit.

The surviving idea is a **"renewal-window radar" and takeover kit sold to independent elevator contractors and PE-backed roll-ups**:
- Join public device, inspection and violation data (NYC Open Data/DOB, Chicago, Florida DBPR) with LLM-abstracted OEM contracts.
- Use the result to time outbound sales to the 90-120 day notice window before an evergreen renewal.
- Generate the termination letter and a competing proposal.

The conflict of interest is open: this is the independent's tool, not a neutral audit. Independents buy fast and have a clear ROI per won building.

There are two ways to venture scale, and neither suits a small, lightly funded team:
- (a) Buy a licensed independent contractor and run it AI-first, the WeMaintain playbook in the US. This captures the OEMs' ~20-25% service margin.
- (b) Widen the radar to every service contract a building must carry by law (fire, sprinkler, backflow, boiler).

## How the work is done today
- Four OEMs (Otis, KONE, Schindler, TKE) plus regional independents maintain about 0.9-1.05M US units (approximate). Otis service is about 60% of ~$14B revenue at mid-20s% segment margin (verify in the 10-K).
- Contracts have 3-5 year terms, auto-renew for 5 years unless notice arrives 90-120 days before the anniversary, carry escalators often indexed to IUEC wages, and exclude "obsolete parts" and overtime.
- Mid-size owners file the contract and approve invoices. Large owners hire consultants (Lerch Bates, VDA, KJA): about $1-5k per audit and about 4-8% of modernization value (estimates).
- MCP records increasingly live in OEM handheld apps, not paper logs, so "LLM reads handwritten logs" is a 2015 pitch.

## TAM (estimates)
- US service plus modernization: about $10-15B per year (two bottom-up methods converge).
- Owner software: about $0.3-0.6B theoretical. The competition skeptic puts realistically serviceable demand at about $100-200M.
- Rebid fees about $50-90M per year. Modernization bid management about $120-200M per year.
- Independent-side tooling about $15-35M. Thin on its own, but a door to (a) or (b).
- One deal at the small end: a 2-car condo with a 20% saving yields a fee of about $600, once every 3-5 years.

## Competitors

| Name | Type | Relevance |
|---|---|---|
| Otis ONE / eService | Incumbent IoT | Free owner portal, in-car cellular, buys independents |
| KONE 24/7 Connected Services | Incumbent IoT | Monitoring tiers and APIs, can bundle "transparency" |
| Schindler Ahead | Incumbent IoT | Connectivity box marketed as replacing the analog phone line (verify) |
| TK Elevator MAX | Incumbent IoT | PE-owned (Advent/Cinven) |
| Kings III, Avire (Halma), Rath, SafeLine | Emergency-phone vendors | Already own the POTS swap and the monthly line |
| Granite EPIK, Ooma AirDial, Telguard | POTS replacers | Migrating lines now |
| Lerch Bates, VDA, KJA, Persohn/Hahn | Consultants | Hold trust and QEI talent, likely to adopt LLM tools themselves |
| WeMaintain (FR/UK/APAC) | AI-native maintainer | Shows value went to becoming the contractor. Not in the US (unverified) |
| Uptime (France) | AI-native owner-side | Closest analog. Niche, European, status unverified |
| Yardi, AppFolio Realm-X, MRI (Leverton), Evisort/Workday, ChatGPT/Claude | Horizontal AI | Commoditize contract abstraction |
| SiteCompli | NYC compliance tracker | Already owns the public-violation scorecard |
| MCE/Nidec, Smartrise, GAL | Controller makers | Own diagnostics on non-proprietary controllers |
| Aquant, Dynamics 365 / Salesforce Field Service copilots | Horizontal field-service AI | Block a standalone diagnostic copilot |

## Why now
- LLMs make contract and invoice abstraction cost almost nothing.
- Copper (POTS) line retirement: AT&T plans to exit most copper by about 2029.
- The IUEC-NEII national agreement is believed to expire around mid-2027, so escalator-clause increases are coming (verify).
- NYC door-lock-monitoring retrofit deadline, believed to be about Jan 2027 (verify).
- Florida post-Surfside reserve laws (SB 4-D, SB 154).
- The 1980s-90s installed base is reaching modernization age.

## Wedge and business model (pivoted)
1. **Free public-data scorecard** of every NYC, Chicago and Florida building: overdue tests, violations, equipment age.
2. **Paid radar for independents:** $500-2k per month per contractor, plus a per-qualified-building lead fee. It flags OEM-held buildings near renewal, abstracts uploaded contracts, and drafts the notice letter and proposal.
3. **Later:** field-service and MCP software for independents, a diagnostic copilot on non-proprietary controllers, and optionally an acquisition of a licensed contractor.

## What's good
- A real information-gap market. Service is the OEMs' profit engine, and the owner does not own the data.
- The evergreen notice window is a sharp, concrete hook that is cheap to deliver with an LLM.
- Public device and violation data allows targeted outbound with no hardware.
- No verified US AI-native competitor, and OEMs are structurally unable to sell "audit your OEM".
- Independents are motivated, fast buyers with a measurable ROI per won building.

## What's bad (red-team strongest points)
- **GTM (verdict: kill):** Unit economics fail. Fee about $270-1,080 per building per rebid against about $2-3k CAC through board-governed sales. LTV/CAC is below 1. The property manager, cast as champion, is the one being audited. The price anchor is zero, because independents already give free contract reviews. A sensor install needs a licensed elevator mechanic ($500-1,500 per car), and replacing the emergency phone means running a staffed 24/7 life-safety call center.
- **Competition:** The POTS Trojan horse is already taken by OEM cellular gateways, Kings III/Avire and generic POTS replacers. Contract abstraction is a commodity (Yardi, MRI, ChatGPT). The rebid needs three or more credible bids, but proprietary controllers and mechanic scarcity make the threat a bluff outside NYC, Chicago, Florida and California.
- **Feasibility:** Sensor visit detection is unreliable, and a false accusation creates defamation and tortious-interference risk. The visit interval is not contractual. Being a "truth layer" on safety-critical equipment pulls the startup into the liability chain. Managed maintenance needs a NYC DOB agency license or state contractor licenses plus IUEC-signatory subcontractors.
- Revenue is episodic and churn after the rebid is structural.

## Non-obvious insights
- The value is in **contract timing** (the evergreen notice window), not in uptime telemetry.
- "Missed visits" is a weak claim: A17.1 §8.6 lets the contractor set its own intervals, so evidence has no contractual baseline.
- WeMaintain's path, where it had to become the licensed maintainer to capture value, suggests the auditor layer cannot stand alone.
- An IUEC wage-indexed escalator ahead of a ~2027 contract reset is a timely renegotiation hook (verify).
- The same audit pattern (a mandated contract, an information gap, public violation data) repeats across every required building system. Elevators are the most consolidated beachhead, but probably not the business.

## Cheapest validation test (2 weeks, under $1k)
1. Pull the NYC DOB elevator device and violation datasets (free), and build a list of about 500 OEM-maintained mid-rise buildings with recent violations.
2. Cold-call or email 15 NYC and South Florida independent elevator contractors and PE roll-ups.
3. Offer 20 free "renewal-radar" target dossiers and ask for a paid pilot at $500 per month or $200 per qualified building.
4. In parallel, ask 5 managing agents to upload 10 contracts each, to test willingness and measure same-city price dispersion.

**Kill if** fewer than 2 contractors commit to pay, or price dispersion is under about 20% like-for-like.

## Unresolved questions
- What share of NYC and Florida mid-rise units run proprietary OEM controllers that independents cannot serve?
- Do the top-4 OEM US contracts bar third-party devices or carry pricing confidentiality clauses?
- Is the POTS swap already mostly locked up by OEMs and Kings III in the target metros?
- Realized (not quoted) savings and switch rates when owners rebid.
- The status of Uptime (France) and whether WeMaintain plans US entry.
- When does the IUEC-NEII agreement actually expire, and when is the NYC door-lock-monitoring deadline?

## Sources (not fetched this session; verify against these)
- https://investors.otis.com
- https://www.kone.com/en/services/24-7-connected-services/
- https://www.schindler.com/en/digital-products/schindler-ahead.html
- https://www.tkelevator.com
- https://www.kingsiii.com
- https://www.halma.com
- https://www.wemaintain.com
- https://www.uptime.ai
- https://data.cityofnewyork.us
- https://www.nyc.gov/site/buildings/property-or-business-owner/elevators.page
- https://www.asme.org/codes-standards/find-codes-standards/a17-1-csa-b44-safety-code-elevators-escalators
- https://www.bls.gov/ooh/construction-and-extraction/elevator-installers-and-repairers.htm
- https://www.fcc.gov
- https://www.eiwpf.org
- https://www.sitecompli.com
- https://ec.europa.eu/commission/presscorner/detail/en/IP_07_209
