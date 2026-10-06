# Warranty Revenue Integrity for Dealers (AI warranty back office)

**One-liner:** An "RCM for OEM warranty" back office for franchised dealers: AI pre-submit claim QA, chargeback defense, recovery of unbilled entitlements and annual retail-rate refiles, sold first on contingency. The verdict pivots it toward multi-payer claims (vehicle service contracts and fleet-side truck warranty), where the healthcare-RCM analogy actually holds.

> **Research caveat:** No live research was possible for this verdict, the deep dive, or any of the three red-team passes. The shared WebSearch budget (200 calls) was used up, and the egress proxy blocked nada.org, armatusdealeruplift.com, warrcloud.com and others. All figures below are model knowledge (cutoff mid-2026) or explicit estimates. **The biggest open fact is whether a funded AI-native dealer-warranty entrant appeared in 2025-26.** Check this before anything else.

## Verdict: promising_with_pivot, 42/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | Auto-only revenue pool about $0.6-1.0B and heavy on services; the truly recurring leakage pool may be only $120-250M |
| Pain intensity | 6 | Chargebacks and audits hurt; routine rejections are mostly reworked by the clerk already |
| Whitespace | 6 | No known AI-native in dealer warranty (unverified); Armatus owns retail-rate; DMS vendors could bundle |
| AI leverage | 6 | Policy-manual checks and portal agents are real wins, but narrative generation creates fraud exposure, so the safe product delivers less lift |
| GTM feasibility | 3 | Relationship-driven 20-Group sales, threatened clerk-users, OEM-retaliation fear, about 6-10 OEM rule engines per group |
| Defensibility | 4 | Cross-dealer adjudication graph is plausible, but OEM policy-manual confidentiality may block it |
| Founder fit | 3 | Needs dealer-network access, OEM portal know-how and law-firm partners; hard for an outsider |

## Thesis (revised)
The original framing treats the OEM as payer and the dealer as provider. That is elegant, but in franchised auto the analogy breaks where it matters:
- There is **one payer per franchise**, and that payer also writes the dealer agreement.
- There is **no mandated standard transaction** like healthcare's 837/835. Portal access is at the OEM's pleasure.
- Recoverable dollars are **time-boxed**: resubmission windows of about 30 days and appeal windows of about 30 days (recall).

Retail-rate optimization is a feature that Armatus has run for over 15 years.

**Strongest version:** a *claims-recovery agent for repair facilities facing multi-payer, adversarial adjudication.* Lead hypothesis: **vehicle service contract (VSC/extended-warranty) claims.** Franchised service departments (used and aging vehicles) and large independents file these against dozens of administrators (Assurant, CNA National, Zurich, Endurance, AUL, and others; recall). The work runs on adjuster phone calls, inspection requests and labor-rate haggling.
- Voice AI handles pre-authorization calls; document assembly handles claim packaging and appeals.
- Pricing is per authorized claim or a percentage of authorized dollars.
- Distribution is embedded in shop-management systems (Tekmetric, Shopmonkey, Shop-Ware) rather than fighting the DMS.

**Secondary bet:** fleet-side truck warranty recovery (Cummins, Allison, Bendix, OEM). It has many payers, high dollars per claim, a VP of Maintenance who owns a clear P&L, and no franchisor retaliation dynamic.

Keep franchised OEM warranty only as an add-on: a chargeback-defense evidence vault, ideally white-labeled with Armatus or a dealer-law firm. An alternative path for capital-light founders: acquire a remote warranty-admin BPO book (100-300 rooftops) and AI-enable it.

## How the work is done today
- **Staffing:** one warranty admin per rooftop, roughly $40-65k a year and high turnover (recall). Large groups centralize in shared-service centers.
- **Workflow:**
  - The advisor writes the concern on the RO.
  - The tech diagnoses (TAC or prior approval on big jobs) and writes the 3C story. Flat-rate pay discourages detail, which is the root cause of rejections.
  - The admin checks the claim against a several-hundred-page OEM policy manual and submits through the DMS or OEM portal (GM GWM, Ford OASIS, Stellantis DealerCONNECT, Toyota Dealer Daily; recall).
  - The admin works rejections within about 30 days and reconciles the warranty receivable.
  - OEM audits debit the dealer months later, within the state lookback cap.
- **Retail rate:** about once a year a consultant or lawyer assembles 100 sequential customer-pay ROs (or a 90-day window) and files.
- **VSC side:** advisors and service managers spend 20-60+ minutes per claim on hold with adjusters, plus inspection waits and haggling over labor rates (estimate).

## TAM
- **Base:** about 16.8-17k franchised rooftops, about $155-170B of service and parts sales, of which warranty and recall is about $21-28B (recall and estimate).
- **Auto value pools:**
  - Leakage: 2-4% gross per the deep dive. The feasibility skeptic puts truly unrecovered leakage under 1%, or about $120-250M of leakage and $30-60M of contingency revenue.
  - Retail-rate: about $225M first-year, then a recurring pool of about $40-80M.
  - Warranty-admin labor: about $1.1-1.4B.
- **Realistic auto revenue TAM:** $0.6-1.0B, mostly services. SAM about $350-450M; 5-year SOM about $28-42M ARR.
- **VSC pivot:** the US VSC market is roughly $40-50B+ of contract premium a year (recall, verify). Claims paid to repair facilities are likely $10-20B (estimate). A 3-5% per-claim service fee implies a $0.3-1B revenue pool before payer-side products.
- **Truck fleet recovery:** $100-300M (estimate).

## Competitors
| Name | Type | Threat |
|---|---|---|
| Armatus Dealer Uplift | Incumbent (retail-rate, contingency) | Owns the retail-rate wedge; likely acquirer |
| Dealer-law firms (Myers & Fuller, Bass Sox Mercer) and dealer CPAs (FORVIS, Crowe); recall | Incumbent / channel | Hold dealer trust on OEM disputes; UPL issues force partnering |
| CDK Global, Reynolds & Reynolds, Tekion, Cox/Dealertrack, PBS | DMS warranty modules | Can bundle AI claim QA cheaply; Reynolds gates access via its RCI program |
| OEM portal edits plus Tavant, Syncron/Mize, PTC, SAP, Pega, MSX International | Payer-side AI and BPO | Make adjudication stricter; commoditize QA from the payer side |
| Remote/offshore warranty-admin shops (WarrCloud? low confidence) | Incumbent BPO | Set the price ceiling; can adopt LLMs themselves |
| Decisiv, Procede/Excede, Karmak, Fullbay | Truck SRM/DMS | Occupy the truck multi-payer path |
| Viaduct | AI-native (OEM quality) | Kills the "sell defect data to suppliers" idea |
| Toma, Numa, Impel, Matador, Podium, myKaarma, UVeye | AI-native service lane | Have distribution to add warranty/evidence features |
| Unknown 2025-26 entrants | ? | **Unverified; check first** |

## Why now
- Record Ford recalls in 2025 (recall) and OEM warranty-cost pressure lead to stricter audits.
- EV and ADAS repairs bring new labor operations and evidence requirements.
- State franchise-law amendments create new entitlements.
- Customer-pay labor rates inflate about 5-8% a year, so retail rates go stale.
- After the 2024 CDK outage, dealers diversified vendors and APIs matured.
- LLMs can read policy manuals; browser and voice agents can work portals and adjuster calls.
- Caveat: recall volume is standardized, low-rejection work, so it is a weak why-now on its own.

## Wedge and business model
- **Auto version:**
  - A read-only "leakage audit" from report exports, priced at 25-30% contingency.
  - Then pre-submit QA plus an audit-defense evidence vault at $1-2k per rooftop per month.
  - Then warranty-admin-as-a-service. Its realistic price is $1.5-3k (GTM skeptic), not $3-5k.
  - Expected blended gross margin is 45-60%, i.e. tech-enabled services economics.
- **Pivot version (VSC):**
  - A voice agent handles adjuster authorization calls, plus claim packaging and denial appeals.
  - Pricing is about $15-40 per authorized claim or 2-4% of authorized dollars.
  - The product is embedded in shop-management systems.
  - The data asset is a cross-administrator approve/deny and labor-rate graph.

## What's good
- Real, unglamorous back-office pain with money attached. Chargebacks hit net profit directly.
- Dealer AI funding is concentrated at the front of the funnel (BDC, voice, marketing); fixed-ops back office is comparatively empty.
- Contingency pricing removes budget objections, and found money sells.
- The insight that **evidence capture at submission = audit insurance** justifies a recurring fee, because lookback caps make after-the-fact defense weak.
- Unbilled entitlements (loaner, sublet, towing, stop-sale storage, diagnostic time) are a genuinely under-measured leak.
- Dealer associations, CPAs and dealer-law firms are underrated channels.
- The pivot targets (VSC, fleet) keep the RCM playbook while removing the single-payer gatekeeper.

## What's bad (red team, by lens)
- **Competition:** retail-rate is the largest pool, but it is captured once and commoditized (Armatus, law firms). The DMS will bundle QA. OEMs control the rails and can retaliate. AI raises offshore BPO margins more than it creates a gap for entrants.
- **GTM:**
  - Per-rooftop math: about $1.4M of warranty per rooftop gives roughly $15-30k of truly incremental leakage, or about $4-8k of contingency revenue a year, against $15-40k CAC.
  - Contingency revenue decays after the backlog is cleared.
  - Attribution fights ("my clerk would've resubmitted that").
  - The warranty clerk can sabotage data access.
  - Dealers fear OEM retaliation; Toyota and Honda stores will decline.
  - About 6-10 OEM rule engines are needed before a group will sign.
  - M&A churn among small dealers.
- **Feasibility:**
  - Resubmission and appeal windows of about 30 days make a 12-month audit mostly unrecoverable.
  - Portal SSO and MFA plus dealer-agreement terms make browser agents a terms violation that can cut off a dealer's warranty cash flow.
  - LLM story-writing equals fraud exposure, and the safe evidence-only version has less lift.
  - Policy manuals are confidential, which may block the cross-dealer moat.
  - The clerk can't be removed (parts tagging, returns, TAC calls), so the SaaS stacks on top of payroll.

## Non-obvious insights
1. **The RCM analogy holds only where there are many payers and a standard transaction.** Franchised OEM warranty has neither. VSC claims and fleet warranty have many payers, adversarial adjusters and no franchisor who can cut access, so RCM tactics transfer there.
2. **Auto warranty leakage is time-boxed by statute and OEM policy.** The value sits in *flow* (pre-submit evidence), not *stock* (historical audits). Contingency wedges that promise backlog recovery overpromise.
3. **Under-measured leakage is unbilled lines, not rejections.** Dealers benchmark warranty receivables, but nobody tracks entitlements never filed.
4. **Retail-rate "window optimization" is constrained by anti-manipulation provisions and rebuttal rights.** The defensible asset is knowing what *survives rebuttal* per OEM and state, which is Armatus's tacit moat.
5. **Writing tech narratives is a fraud machine.** The only safe AI is verbatim evidence capture plus gap flagging, which shifts value toward the service lane at RO time (UVeye/Toma territory) rather than the back office.
6. **The capital-light route may be buying distribution, not building it.** AI-enabling an acquired warranty-admin BPO converts a 20-30%-margin book into 55-65% and skips the 20-Group CAC problem.

## Cheapest validation test (2 weeks, <$1k)
1. **Run the 30-minute entrant check first:** NADA Show 2026 exhibitors, Automotive News, YC/Crunchbase for "warranty," "VSC claims," "adjuster AI."
2. **Recruit 5 franchised rooftops** (Stellantis/Ford/GM, CDK or Tekion) via LinkedIn and a state dealer-association contact. Offer a free leakage readout from exports: 90-day rejection/short-pay report, debit notices, warranty receivable aging, a rental/sublet line sample.
   - Measure dollars **still inside** resubmit/appeal windows plus unbilled entitlements per rooftop per month.
   - **Kill auto if under about $3k per rooftop per month.**
3. **In parallel, interview 10 service managers** (5 franchised, 5 large independents) on VSC claims:
   - Minutes per adjuster call, claims per month, denial/short-pay rate.
   - Willingness to pay $20-40 per authorized claim.
   - **Pursue the VSC pivot if 10+ hours a week and 5/10 say yes to a paid pilot.**
4. **Ask 3 remote warranty-admin shops for pricing** to establish the BPO price ceiling and gauge acquisition openness.

## Unresolved questions
- Is there a funded AI-native in dealer warranty or VSC claim authorization as of Oct 2026? Do VSC administrators already deploy AI adjusters or authorization APIs?
- How much leakage is truly unrecovered, net of clerk rework and inside the recovery windows?
- Do GM, Ford and Stellantis allow third-party vendor portal accounts or EDI submission rights, or enforce against automation?
- Do Tekion, CDK or Cox have AI claim QA on the NADA 2027 roadmap?
- Can OEM policy manuals legally be ingested into a multi-tenant system?
- What are offshore warranty-admin per-rooftop prices and margins?
- Retail-rate statute specifics (RO counts, lookback, anti-manipulation rules) in the top 10 states.
- Decisiv's actual coverage of fleet-side warranty recovery.

## Sources (pointers; none fetched this run)
- https://www.nada.org/nadadata (rooftop counts, service and parts sales)
- https://www.armatusdealeruplift.com (retail-rate incumbent)
- https://www.warrantyweek.com (OEM warranty accruals; VSC market data)
- https://www.nhtsa.gov/recalls (2025 Ford recall record)
- https://www.flsenate.gov/Laws/Statutes/2024/320.696 (example retail-rate statute)
- https://www.tekion.com, https://www.cdkglobal.com (DMS AI roadmaps; June 2024 CDK outage widely reported)
- https://www.tavant.com/warranty, https://www.syncron.com, https://www.viaduct.ai (OEM-side warranty AI)
- https://www.decisiv.com (truck SRM and warranty)
- https://www.authenticom.com (DealerVault data access)
- https://www.ycombinator.com/companies?query=warranty (entrant check)
- CDK Global v. Brnovich (9th Cir. 2021); Van Buren v. United States (2021)

## Round 2 diligence (2026-10-06)

> **Research caveat:** In this pass the managing partner ran 2 WebSearch calls. WebFetch was blocked by the egress proxy for every domain tried (cpscentral.com, coladv.com, autoremarketing.com, circuitry.ai), and the earlier round-2 passes hit the same blocks (warrcloud.com, forgedrive.ai, warrantyweek.com, reddit.com, flsenate.gov and others). Everything marked "snippet" comes from search-result titles or summaries, not pages read first-hand. Buyer interviews are **role-played composites**, not real people.

### Score change: 42 -> 28. Verdict: **pass** (as a venture bet). Keep one cheap option open (see "First 30 days").
- **The franchised OEM-warranty wedge is dead as a standalone startup.** The round-1 central unknown, "no AI-native in dealer warranty", is false:
  - WarrCloud is AI warranty-claims software, not a BPO. It has raised about $40M; its Series B was $20M in Oct 2024, led by Centana (snippet).
  - Forge AI (forgedrive.ai) files claims through the dealer's own OEM portal login (snippet).
  - Combined with GTM = 3, there is no room for an under-capitalized entrant.
- **The VSC pivot's core pain is being removed by the payer.** New this pass (snippet):
  - Hendrick Automotive Group uses Circuitry.ai on extended-warranty and service-contract claims.
  - Hendrick Autoguard / NationsGuard won a Warranty Innovations award for answering claims calls **in under 8 seconds, adjudicating in 15 minutes and paying within a day**.
  - CARS Protection Plus also deployed Circuitry.ai so its adjusters resolve claims faster.
  - This is the "30-60 min on hold" pain disappearing at AI-enabled administrators. The friction left over is negotiation and denials, which need humans. That makes the business BPO-like.
- **Buyer economics are a niche:**
  - Independents: $15-20 per authorized claim, about $5-7k ARR per shop.
  - MSOs: $6-10 per claim, about $90-180k ARR each, slow procurement.
  - Franchised groups: about $0 (low third-party volume, plus a conflict with their own reinsurance companies).
  - Every persona rejected percentage-of-dollars pricing.
  - Without a payer-side clearinghouse, the ceiling is roughly $5-15M ARR.
- **Market size is still unpinned:**
  - Snippets give about $33B a year of VSC spend (2015 white paper) and "up to $90B" for 2026 (low-quality aggregator), with loss ratios of 75-85%.
  - The only claims-paid figures found are $4.5B (scope unknown) and one provider's $342M of 2025 mechanical claims.
  - The phone-heavy, third-party, shop-side slice is plausibly well under the round-1 estimate of $10-20B.
- Dimension changes: Whitespace 6->3, Pain 6->4 (payer automation), Market 5->4, GTM 3->3, Defensibility 4->2 (voice is easy to copy; Vapi sells a warranty template), AI leverage 6->5, Founder fit 3->4 (a technical team can build the voice agent cheaply).

### Fact-check
| Claim (round 1) | Status | Evidence |
|---|---|---|
| No AI-native in dealer OEM-warranty claims | **Contradicted** | WarrCloud, about $40M raised ($6.5M A Nov 2023; $20M B Oct 2024, Centana) https://www.automotiveventures.com/blog/warrcloud-raises-20-million-in-series-b-funding-led-by-centana-growth-partners ; Forge AI files through dealer OEM logins https://www.forgedrive.ai/ (snippets) |
| WarrCloud is a low-confidence offshore BPO | **Contradicted** | VC-backed SaaS, a direct competitor https://pulse2.com/warrcloud-automated-warranty-processing-platform-company-raises-20-million-series-b/ |
| Browser agents on OEM portals violate terms and are a blocker | Partially true | Funded companies operate this way commercially; the dealer-agreement terms themselves were not checked |
| Fixed-ops warranty back office is empty | **Contradicted** | WarrCloud, Forge, Gruve "Warranty Agent" https://gruve.ai/blog/how-gruve-helps-automakers-cut-warranty-costs-and-increase-customer-loyalty/ |
| Franchised warranty and recall pool is $21-28B | Partially true | Warranty Week 2026 says vehicle-sector claims were $20.81B in 2025, but it covers US SEC filers only, so Toyota, Honda and Hyundai are excluded https://www.warrantyweek.com/archive/ww20260416.html (snippet) |
| US VSC premium is $40-50B+ | Unverifiable / range | $33B (2015 white paper, https://coladv.com/wp-content/uploads/Vehicle-Service-Contract-Industry-White-Paper-081517.pdf) to "up to $90B" in 2026 (aggregator, https://worldmetrics.org/vehicle-service-contract-industry-statistics/); both snippets |
| VSC claims paid to shops are $10-20B | Unverifiable, likely high | "$4.5B claims paid" (scope unknown) https://gwcwarranty.com/drivers/vehicle-service-contracts ; one provider paid $342M of mechanical claims in 2025 (snippet) |
| VSC administrators don't use AI adjusters or auto-authorization | **Contradicted** | Circuitry.ai at Hendrick Autoguard/NationsGuard (calls answered <8s, 15-minute adjudication) and at CARS Protection Plus https://www.autoremarketing.com/subprime/cars-protection-plus-taps-circuitry-ai-warranty-decision-intelligence-to-help-adjusters-resolve-claims-faster/ ; also Tavant, DART https://www.dartwg.com/claim-management/ |
| No outbound voice agent calls VSC administrators for shops | Partially true | About 10 searches across passes found only inbound receptionists (Famulor, Hermes, Vona, etc.) plus the Vapi template https://vapi.ai/custom-agents/customer-service-warranty-agent |
| Shop-management systems (SMS) are a viable distribution layer | Partially true | Third-party guides say cloud SMS integrate easily; no partner program or native VSC feature confirmed https://ainora.lt/blog/ai-voice-agent-auto-service-centers-2026 |
| 20-60+ min per VSC claim on hold | Unverifiable | No source found; Hendrick's <8s answer time shows it varies sharply by administrator |
| Florida 320.696 retail-rate specifics | Unverifiable | Fetch blocked |

### New competitors
| Name | Type | Funding / scale | Threat |
|---|---|---|---|
| WarrCloud https://warrcloud.com/ | AI SaaS, dealer OEM-warranty claims | About $40M (snippet) | Owns the dealer warranty seat; could extend to VSC |
| Forge AI https://www.forgedrive.ai/ | AI-native agent that files through OEM portals | Unknown | Already runs round 1's auto wedge |
| Circuitry.ai https://circuitry.ai/intelligent-ai-automation-service-contract-tpas-and-oems | Payer-side AI for TPAs and OEMs | Unknown; customers include Hendrick Autoguard/NationsGuard and CARS Protection Plus (snippet) | **Removes the phone pain at the source** |
| DART Warranty https://www.dartwg.com/claim-management/ | Administrator claims software, real-time approvals | Unknown | Same: payer-side automation |
| Tavant Warranty.AI https://tavant.com/blog/ai-agents-in-warranty-claims-revolutionizing-adjudication-automation/ | Incumbent AI agents | Enterprise | Adjudication automation |
| Gruve AI | OEM-side warranty agent | Unknown | Dealer-facing eligibility checks |
| Inbound shop voice AI (Famulor, Hermes, Vona, Dialzara, CallSphere, Carly/usecarly) plus Vapi template | Horizontal voice | Varies | Could add outbound calling to administrators cheaply |

### Buyer-interview highlights (composite personas, not real people)
- **7-bay independent (Tekmetric, ~25-40 VSC claims a month): "Maybe."**
  - Pain: "My writer calls in and waits on hold 30 or 40 minutes, then the adjuster wants an inspection."
  - Objections:
    - "The adjuster's going to ask my tech what the fluid looked like... Your robot doesn't know that."
    - "She's writing other ROs at the same time."
    - "The real problem isn't the call, it's that they deny things."
  - **WTP:** flinched at $40 a claim; accepts $15-20 per *successful* authorization or $199-299 a month flat. Rejected percentage pricing: "You're not my partner, you're a phone call."
  - Yes trigger: 10 free claims with a log, live handoff to the tech, and no coverage promises to the customer.
- **8-rooftop franchised fixed-ops director (CDK): "No."**
  - "Third-party service contracts are a rounding error for us."
  - "We own a reinsurance company on our service contracts. If your tool squeezes more claim dollars out... part of that comes out of my own reinsurance profit."
  - "Even free, it's not worth the integration meeting."
  - Would pay $1-2k per rooftop per month only for OEM chargeback defense, which WarrCloud and Forge now contest.
- **45-location PE-backed MSO VP Ops (4-person warranty desk, 1,200-1,500 claims a month): "Yes, conditionally."**
  - "You have to beat a trained person who knows every adjuster at AUL by first name."
  - "In two years is this bot talking to their bot? Then what am I paying you for?"
  - **WTP:** desk cost is about $11-14 per claim, so he would pay $6-10 per authorization, or $3-5k a month plus usage. "$20 a claim is more than my people cost."
  - Wants a 60-day pilot tied to SLAs, a human-in-the-loop console, and counsel sign-off on recording and AI disclosure.
- **Blended WTP: about $8-20 per claim.** $5M ARR needs 300-600k authorizations a year, i.e. a few dozen MSOs plus 500+ independents.

### Pre-mortem: top failure modes (probabilities are estimates)
1. **Shop unit economics (55%):** fewer than 10-15 third-party VSC claims a month per shop means $100-400 a month of revenue against $1.5-3k CAC, and churn follows claim volume.
2. **Administrators block AI callers or move the channel (40%):** callback checks, "tech must be on the line", or portal or instant auto-approval. The Hendrick/NationsGuard evidence makes this more likely.
3. **The payer dissolves the pain (35%, now arguably higher):** only the hard 30% of calls remains, which needs humans, so gross margin is about 45-50% and the company becomes a BPO.
4. **Market mis-sized (35%):** much franchised VSC volume is OEM-branded or captive and goes through portals.
5. **Distribution taken (30%):** an SMS or DMS bundles a free "warranty assist", or WarrCloud, Forge or an inbound voice vendor extends into it.
6. **Liability incident (25% damaging, 15% fatal):** the agent states facts not in the tech notes, the claim is charged back as misrepresentation, and the story spreads through 20-Groups.
7. **Legal (10-15%):** two-party call-recording consent, bot-disclosure laws, administrator rules on who may represent a facility.
- Root cause: the product would sit between an adversarial payer that controls the channel and fragmented, price-sensitive buyers. The only venture-scale escape is a payer-side clearinghouse (an "Availity for VSC"), and Circuitry.ai already sits with the payers.

### Kill criteria (carry forward)
- Day 30 claim census: kill if fewer than 6 of 10 locations have 15+ third-party VSC authorizations a month, or if median phone time per claim is under 25 minutes.
- Day 30 channel check: kill if 3 or more of the top 5 administrators by volume authorize more than 50% of claims through a portal or auto-approval.
- Week 1 competitor check: kill if a funded competitor already runs outbound administrator calls at more than 25 shops, or if an SMS or DMS demos a native version.
- Day 75: kill if under 50% of calls complete with no human, if adjusters demand a human on more than 15% of calls, or if authorized dollars fall below the human baseline.
- Day 90: kill if fewer than 3 paid conversions at $20+ per claim (or $400+ a month), or if no 5+ location group signs a paid LOI.
- Kill if any top-3 administrator issues a written refusal to deal with AI agents, or if 0 of 5 administrator ops leaders will discuss structured digital intake.
- Kill if no SMS (Tekmetric, Shopmonkey or Shop-Ware) grants API or marketplace access by day 60.
- Stop on any chargeback or misrepresentation flag traced to an agent call.

### Discovery-call script (past behavior, not opinions)
1. Walk me through the last third-party service-contract claim, from "I have a warranty" to money in the bank. Who did what, and when?
2. How many of those claims last month? Pull the number from Tekmetric, Shop-Ware or your POS now. Which 3 administrators were most of them?
3. On that claim, total minutes on the phone (hold, callbacks, inspector)? Tracked, or a feel?
4. The last denial or short-pay: how much was it, did you fight it, and what happened to teardown and diagnostic time?
5. While a car waits for authorization, what happens to the bay, the customer and the loaner? When did that last cost you a job?
6. What have you tried (a dedicated person, a handling fee, portals, refusing administrators, a BPO)? Why did you keep or drop it?
7. Do you charge customers a warranty-handling fee? How much, and how often do they push back?
8. When the adjuster asks something only the tech knows, how is that handled? How often per call?
9. Which administrators answer fast or auto-approve now? Has that changed in the last 12 months? *(new, to test payer-side automation)*
10. Who else must say yes, and which system must this live in? Ask: can we run your next 10 claims this month, and pay $X per authorized claim if we hit Y?

### Who to call first
0. **Before any buyer call:** confirm Circuitry.ai's deployments at Hendrick Autoguard/NationsGuard and CARS Protection Plus. Ask how many administrators already answer in under a minute or auto-approve. Check Carly, Toma, myKaarma and the Tekmetric/Shopmonkey roadmaps for outbound administrator calling.
1. **5 former VSC mechanical claims adjusters** (LinkedIn: "mechanical claims adjuster" AND "vehicle service contract"; DFW, Tampa, Atlanta, Phoenix). Ask whether administrators would block bots and how much is already auto-authorized.
2. **5 MSO operations leaders with central warranty desks.** They are the only buyer with real volume, at about $90-180k ARR each.
3. **10 high-VSC-volume independents** on Tekmetric, Shop-Ware or Shopmonkey, found through SMS user Facebook groups, ASA, and r/MechanicAdvice and r/Justrolledintotheshop.
4. Deprioritize franchised groups; at most 2 calls, on chargeback defense only. AAPEX/SEMA in early Nov 2026 (dates unverified) is the place to walk SMS booths.

### First 30 days (only if the founder insists; otherwise move on)
- **Week 1 ($0):** the competitor and payer check above, plus 5 ex-adjuster calls. **If ex-adjusters say most top-10 administrators already auto-authorize simple claims or answer in under 5 minutes, stop here.**
- **Weeks 2-3:**
  - Claim census at 10 locations (2 MSOs plus 8 independents): 90 days of VSC ROs by administrator, channel and phone minutes.
  - In parallel, a weekend prototype on an off-the-shelf voice stack: Tekmetric RO pull, disclosed AI caller, live transfer to the tech, authorization number written back to the RO.
- **Week 4:**
  - Run 30-50 disclosed, shop-authorized calls with one MSO desk, measuring completion rate, minutes saved and authorized-versus-requested dollars.
  - Ask for a paid pilot at $8-10 per claim.
  - Go/no-go against the kill criteria.
- **Expected outcome:** a $1-5M ARR tech-enabled service or an acqui-hire by an SMS. Not a venture outcome unless administrators agree to pay for structured intake.

Sources added this pass (snippets via WebSearch; fetch blocked): https://www.autoremarketing.com/subprime/cars-protection-plus-taps-circuitry-ai-warranty-decision-intelligence-to-help-adjusters-resolve-claims-faster/ ; https://circuitry.ai/blog/decision-intelligence/key-takeaways-from-warranty-service-contract-innovations-2026 ; https://www.warrantyweek.com/archive/ww20251002.html ; https://coladv.com/wp-content/uploads/Vehicle-Service-Contract-Industry-White-Paper-081517.pdf ; https://worldmetrics.org/vehicle-service-contract-industry-statistics/ ; https://gwcwarranty.com/drivers/vehicle-service-contracts
