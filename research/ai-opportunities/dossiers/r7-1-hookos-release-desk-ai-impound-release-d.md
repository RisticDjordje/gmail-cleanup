# HookOS Release Desk: AI impound release desk with payments, then a towing OS

**One-liner:** A voice/SMS agent plus a document-check-and-pay link that handles every impound release ("is my car here, what do I owe, what do I bring"). It sits next to Towbook/Omadi and is meant to grow into a towing system of record with a lien pipeline.

**Source playbook → target industry:** AI-native vertical system of record with payments built in. Parrot (YC Sp26) does this for auto repair shops, Nautilus (S25) for car washes and Zaplar (S26) for hotel PMS/POS. The target here is **towing, roadside and impound yards**, which none of the three serve.

## Score: 41 / 100. Verdict: PASS (the mechanism is worth reusing in another industry)

| Dimension | Score | Note |
|---|---|---|
| tech_insight_edge | 5 | Rules engine, VLM document checks and a voice agent tied to inventory are real engineering. None of them is a durable insight. |
| no_domain_required | 5 | The statutes are public, but city and county overlays plus edge cases (police holds, contested repos) need an operator. |
| bootstrap_to_raise | 5 | First revenue is fast, but realistically about $6-9k MRR at 20 yards, and seed investors will ask why this isn't a Towbook feature. |
| product_not_services | 7 | It is software. Building rules for each new jurisdiction drifts toward services work. |
| market_size | 3 | About 35k operators, about $285k average revenue, about 6.8% margins. The serviceable market is about $50-100M. |
| ai_advantage_vs_competitors | 4 | Towbook already has a plate/VIN lookup portal with online pay, and AgentZap already does release calls over Towbook's API for $109/mo. |
| gtm_without_network | 3 | A phone-first, tight-knit trade. Expect 3-8 mostly free pilots without an insider. |

Estimates so far: steelman 58, deep dive 45, two skeptics 38-40. I weighted toward the skeptics because their evidence is specific and the steelman doesn't answer it. The bull case's key assumption is that private yards lack online release, and the skeptics showed it is false: Towbook's own portal and AgentZap's Towbook integration already ship that flow. The second problem is that the largest revenue line, an owner-paid convenience fee shared with the yard, conflicts with existing card-surcharge rules (WA caps the fee at processing cost, max 4%; CA requires yards to take cards at release).

## Thesis

Impound release is a forced, price-regulated, urgent transaction. In theory that makes a strong commerce wedge: own the call, the document check, the payment and the condition record, then expand into lien, dispatch and all tow invoices. The Parrot/Nautilus/Zaplar pattern of an OS that also does the work and takes a cut of payments fits the industry's shape: fragmented owner-operators, old software and a counter where money changes hands.

On checking, the wedge is already split up among incumbents and cheap point tools. Lien is sold by TowLien, ADD and eImpound. The lookup portal and online pay are in Towbook and iStall. Release calls are handled by AgentZap. An off-the-shelf form template with document upload and Stripe exists (Paperform). What remains is VLM document checks and photo diffs, which are features. The buyer pool is small and margin-starved. This is a decent lifestyle business and a weak venture-backed one for a founder with no network.

## Workflow today

- Jobs arrive by phone, from motor clubs (Agero/Swoop, AAA, Honk, Urgently) and from police rotation lists. Staff key them into Towbook ($49-349/mo by call volume) or Omadi (from $50/mo).
- Small shops field 8-20 calls overnight, many of them about impounds (vendor snippet).
- Impound notices run on state deadlines. In Texas (Occ. Code 2303.151/.153) the yard must mail the owner and every lienholder between 24 hours and 5 days after intake, and the notice must include specific fields and the TDLR license number. In Florida (713.78) notice goes by certified mail within 7 business days and at least 30 days before any sale.
- Release: the owner calls, then walks in, often without the right document or payment. Damage disputes come down to whether anyone photographed the car at intake.

## TAM

IBISWorld counts about 40k towing businesses ($14.5B revenue); companydata counts about 30k. Core software at about $200/mo × 35k ≈ $84M. AI labor add-on ≈ $36-108M. Embedded payments take ≈ $15-40M (assumed). Total addressable ≈ $150-250M; serviceable ≈ $50-100M. Expanding into municipal, repo and self-storage programs could double it, but each is a separate GTM.

## Competitors

| Company | What they do | Threat to the wedge |
|---|---|---|
| Towbook | Incumbent system of record. Customer portal, plate/VIN lookup with online pay, automatic storage fees, notice reminders | High. Owns the inventory and can cut off sync |
| Omadi | Dispatch plus motor-club integrations; Florida lien workflow documented | Medium |
| AgentZap | AI agent on Towbook's API: checks the vehicle, quotes release fees, books pickup; from $109/mo | High. Already ships step 1 |
| Autura / TowLien | Lien search and notices; approved in 39 states; municipal systems | High on lien |
| ADD / DMV123, eImpound | DMV lookups and certified lien letters | High on lien |
| iStall, AutoReturn | Owner-side online impound payment (Canada; US municipal) | Medium |
| Generic AI receptionists (Layer3, Dialzara, Ciela…) | Cheap towing voice agents | They anchor the price of "AI answering" low |
| Dream (YC S26), Parrot (YC Sp26) | VLM damage capture; automotive voice agents | Possible expanders |

## How AI wins (if it does)

Generic agents can't safely quote a fee or clear a release, because they lack inventory, holds, accrual and rules data. An AI-native product would win only by (1) a deterministic, versioned rules engine for each state and city, (2) VLM checks of ID, registration and authorization documents against the VIN and plate, (3) a timestamped intake-to-release photo diff, and (4) owning the payment. The catch: each of these is either an incumbent's next feature or depends on the incumbent's data. The AI edge is real but not big enough to overcome distribution.

## Wedge → path to scale

The wedge is the Release Desk alongside Towbook in TX/FL. Then add a lien pipeline for unclaimed cars (through ADD/TowLien partners), then AI dispatch and motor-club offer parsing, then migration off Towbook with embedded payments on every invoice. Later: municipal/police programs, repo redemption, self-storage lien auctions.

## Steelman summary (58)

Release is a payments product where the price is set by statute and the payer has to pay. Cities are adding online tow payment (Lubbock PD, April 2026). The hard parts are engineering, not credentials. It is free to adopt next to Towbook, ROI shows on the first invoice, and the release-plus-lien engine carries over to repo, storage and municipal markets. A credible bootstrap to $1-3M ARR.

## Skeptic summary (38-40)

Every piece of the wedge already ships: AgentZap for calls, the Towbook portal for lookup and pay, iStall/AutoReturn for payment, Paperform for forms. The release payer is a hostile one-time customer, so there is no retention loop. Faster release also cuts storage-day revenue the yard currently earns. The convenience-fee share is legally fragile and invites UDAP claims (unfair or deceptive practice). Accuracy has to be near perfect: a wrong fee is an overcharge and a wrong release is conversion liability. Rules vary by city. The founder becomes a discoverable party in disputes. Getting customers without a network is the weakest link.

## What's good

- Money moves at a regulated counter, so payments-led revenue could come before any seed round.
- Deterministic rules plus VLMs plus voice suits this founder's skills.
- No migration needed and the ROI is easy to explain.
- The release-and-lien engine carries over to adjacent "captive asset, statutory release" verticals.

## What's bad

- The core flow already exists inside Towbook, and an AI agent already runs on Towbook's API for $109/mo.
- The largest revenue line (convenience-fee share) may be capped or illegal in towing-regulated states.
- Small, low-margin buyer pool; serviceable market about $50-100M.
- Needs Towbook data access, and Towbook can revoke it.
- Liability and predatory-towing PR exposure; rules vary by jurisdiction, which pushes toward services.
- GTM is network-driven and phone-first.

## Build plan

Stack: TypeScript, Next.js, Supabase Postgres, Twilio plus Vapi/Retell, Claude for extraction, Stripe Connect, S3.

1. **W1:** TX/FL rules engine (versioned YAML with statute-cited tests), inventory schema, CSV import, `quote_fees` API.
2. **W2:** Voice agent with the tools `lookup_vehicle`, `quote_fees` and `send_release_link`. The LLM never makes up dollar figures. 50 scripted test calls; SMS fallback.
3. **W3:** Release link: document upload, VLM extraction, cross-check against VIN/plate, Stripe checkout, pickup booking.
4. **W4:** Intake PWA (plate/VIN OCR, condition photos) and dashboard; shadow mode at one yard, where a human always clicks release.

Cost per release is about $0.30-0.40 (voice plus VLM). The hardest risk is fresh inventory data without an official API.

## Bootstrap-to-raise plan (months 0-12)

- **M0-1:** Sign a TX operator advisor. Ask Towbook/Omadi about partner API access. Sit in on releases at 5-10 private-property-impound yards in one metro.
- **M1-3:** Shadow mode at 1-3 yards. Measure agent accuracy on fee quotes and how often release calls get handed to a human, against AgentZap.
- **M3-6:** Paid at 10-20 yards. SaaS of $99-199/mo; payment fee limited to cost pass-through where the law requires it. Target $8-15k MRR.
- **M6-12:** Lien pipeline via a partner, then a second state. Raise only if GMV and release-cycle data show a lead Towbook cannot copy in a quarter.

## Weekend prototype

Upload a CSV of yard inventory. A Twilio number answers "is my car here / what do I owe / what do I bring" using a TX fee and requirements table, then texts a link. The owner uploads ID and registration, a VLM checks them against the record, and Stripe takes payment. A side page diffs intake and release photos.

## Kill criteria

- Towbook won't give API or partner access and no daily export exists at 3 of 5 yards.
- AgentZap (or the Towbook portal) handles release calls with fewer than 15% handed to a human, which leaves no accuracy gap to win on.
- A compliant payment-share model can't be confirmed in TX or FL by month 2.
- Fewer than 5 yards paying by month 4, or fewer than 10 by month 6.
- Plate matching by voice stays below 90% against inventory.

## Sources

- IBISWorld towing business counts; companydata.com; gitnux (aggregator, unverified)
- Towbook pricing (Software Advice, G2); Towbook features (GetApp); Omadi (Capterra, Omadi KB on Florida lien)
- autura.com (TowLien, 39 states); add123.com; eImpound (Capterra)
- agentzap.ai/integrations/towbook; paperform.co vehicle impound release template; support.istall.ca; AutoReturn wiki
- Tex. Occ. Code 2303.153; FL 713.78 (flsenate.gov 2023/438); CA SB1024 (legiscan); WA SHB 1954; Anchorage 2025 towing bill of rights
- Lubbock PD online towed-vehicle payment (mylubbock.us, Apr 2026)
- Agero/Swoop (builtin, blog.agero.com); layer3labs, dialzara, ciela.ai
- YC: Parrot, Nautilus, Zaplar, Dream (data/yc-w25-f26.csv)
