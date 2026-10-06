# r1-17: Total-Loss Contents and Depreciation Recovery Engine

**One-liner:** Rebuild a destroyed household's personal-property inventory from its digital records (order histories, card and email receipts, backgrounds of photos, listing photos), with each line tied to its evidence. The scouted product sold that inventory to consumers. The surviving version sells a provenance-tagged damages workup to whoever is paid to prove the loss: first mass-tort and utility-wildfire claimant firms and settlement administrators, then public adjusters and restorers.

> **Research caveat:** Live verification was not possible for this verdict. The shared WebSearch budget (200 per turn) was used up, and WebFetch was blocked for every domain the deep dive and red-team agents tried. The facts listed under "Unresolved questions" decide the verdict and must be checked before any build decision. Every figure in this document comes from training knowledge (cutoff mid-2026) or is a labeled estimate.

## Verdict

**PROMISING WITH PIVOT, but marginal. Overall 38/100.** The consumer and public-adjuster product as scouted is a **pass**; all three red teams voted kill, and I agree with them on that version. The core capability is real and not obvious: digital-records reconstruction of a lost household with provenance on every line. It earns a cheap validation test only if it is pointed at buyers whose payout is not capped by a policy limit and who already pay for case workup.

| Dimension | Score | Note |
|---|---|---|
| Market size | 4 | About 100-230k large-contents claims a year. After haircuts, the self-serve consumer pool is about 15-40k. Mass-tort dockets are lumpy but each claim is worth much more. |
| Pain intensity | 7 | 100-400 hours per total loss is real pain. California regulators are paying out without inventories to remove it. |
| Whitespace | 5 | No consumer-side AI player has been confirmed (unverified). The carrier side is crowded: Verisk, Cotality, Encircle, Tractable, Hosta. |
| AI leverage | 7 | Vision plus LLM normalization of messy records is now genuinely cheap. Pricing and negotiation still need humans. |
| GTM feasibility | 3 | B2C sells once, at the worst moment in someone's life, against free help. Public adjusters are small, churny, cyclical buyers. Carriers are adversaries to this product. |
| Defensibility | 3 | The core technology is a commodity. Free assistants (ChatGPT agent, Gemini with Gmail and Photos) cover 70-80% of the consumer job. |
| Founder fit | 5 | Technical work, light on capital. Public-adjuster licensing and fraud liability are serious if you sell to claimants directly. |

## Revised thesis

Do not sell "fill your Coverage C" to survivors. Three facts rule it out:
- California SB 872 already requires a 30% contents advance with no inventory. SB 495 (2025) reportedly raises that to about 60%, up to $350k.
- Florida's public-adjuster statute arguably covers preparing a claim for a fee.
- A free chatbot plus United Policyholders' spreadsheet does most of the job.

The defensible product is a **damages-workup engine with line-level provenance**. It ingests a claimant's consented data exports and outputs an auditable, deduplicated, ownership-attested personal-property schedule with an evidence link on every line.

**Buyer 1: plaintiff firms and claims administrators in utility-caused wildfire cases.** Examples include Eaton fire v. SCE, SCE's direct-compensation program, James v. PacifiCorp, Maui/HECO and Marshall/Xcel. Tort damages are not capped at Coverage C, firms handle thousands of claimants per docket, and they already pay for case workup. There is no licensing issue, because the firm is the licensed party.

**Buyer 2: public adjusters, restoration pack-out firms and subrogation units**, using the same engine.

**Later, if it works:** carriers pay for provenance-tagged intake during catastrophe surges.

This could plausibly reach a $10-30M ARR business. It becomes venture-scale only if it turns into the standard submission format in mass-loss settlements.

## How it's done today
- **Survivors:** rebuild 1,000-5,000 lines by hand from Amazon data requests (which take days to about 30 days), card statements (usually 2-7 years of history), email and photos. Many take the no-inventory advance or settle for a lump sum.
- **Carriers:** pay actual cash value first. They hold back 20-40% as recoverable depreciation until the policyholder proves replacement (36 months after a declared emergency in California). Vendors such as Enservio and XactContents price at lowest-found "like kind and quality."
- **Public adjusters:** take 10-20% of the whole claim (capped at 10% after declared emergencies in FL, CA and TX). They push contents work to juniors or offshore specialists at $8-45/hr, 40-200 hours per claim.
- **Mass-tort firms:** use paralegals and claims-administrator forms to work up personal-property damages per plaintiff, with no standardized evidence format.

## TAM
- **Large-contents claims:** about 100-230k a year. That is about 35-50k non-catastrophe major home fires, 10-25k catastrophe total losses, 50-150k hurricane and flood losses, and 5-10k other.
- **Consumer TAM:** about $100-575M. After removing households a public adjuster has already signed, statutory and no-inventory payouts, ACV-only NFIP policies and renters, it is realistically about $20-60M addressable.
- **Depreciation recovery:** $0.5-2B of unclaimed holdback (estimate). A fee on it is legally fraught, so the capturable amount is about $50-200M.
- **Public-adjuster and restoration software:** $80-260M.
- **Mass-tort damages workup** (estimate): a large utility wildfire docket has 5-20k+ claimants. At $300-1,500 per claimant, that is $2-30M per docket, a few dockets a year, lumpy.
- **Carrier verified intake** (pivot option): $0.3-1.6B in theory. Carriers have a structural incentive against it.

## Competitors

| Name | Type | Threat |
|---|---|---|
| Verisk (Xactimate, XactContents, ClaimXperience, ISO ClaimSearch) | Incumbent | Owns the format carriers accept, the pricing database and a policyholder portal. Most likely to add AI auto-itemization. |
| Cotality (formerly CoreLogic): Symbility, contents pricing | Incumbent | Carrier claims workspace. A natural place to bolt on contents intake. |
| Encircle | VC-backed adjacent | Contents tooling for restorers and adjusters plus a free consumer app. One model upgrade away from this product. |
| Enservio, Crawford, Sedgwick contents units | Incumbent | Carrier-paid pricing and replacement-in-kind, which bypasses holdback paperwork. |
| Shift Technology, Truepic, Attestiv | AI-native (carrier side) | Already sell fraud and provenance to carriers. |
| Tractable, Hosta a.i., Hover, Matterport (CoStar), DocuSketch | AI-native / adjacent | Property capture tools that could extend into contents. |
| ChatGPT agent and connectors, Gemini personal context, Photos search | Horizontal AI | Free or $20/mo substitute for the consumer job. |
| ClaimWizard, PowerClaim, offshore contents shops | Incumbent | Own the public adjuster's workflow and labor budget. |
| EvenUp, Supio | AI-native legal | Could extend from personal-injury demands into mass-tort property damages. The main threat to the pivot. |
| BrownGreer, Epiq, JND, Kroll | Claims administrators | Possible buyers, or could build this themselves. |
| United Policyholders, LTRGs, plaintiff firms | Free bundled help | Survivors already have free helpers in the largest catastrophes. |
| Consumer-side AI contents startups | Unknown | **Unverified.** Must check Crunchbase, Product Hunt, YC W25-F26 and r/LAFires. |

## Why now
- Multimodal models can itemize items in photo backgrounds, and LLMs can normalize receipts at near-zero marginal cost.
- Households now have 10-20 years of order data and 10-50k cloud photos.
- After the 2025 LA fires: utility litigation (Eaton/SCE) and direct-compensation programs need per-claimant damages at scale.
- AI-forged receipts and photos are rising in claims, so provenance is becoming a requirement, not a nice-to-have.
- Homeowners insurance is in crisis: non-renewals, FAIR Plan growth and underinsurance.

## Wedge & business model
- **Wedge:** a per-claimant damages-workup engine sold to one plaintiff firm or claims administrator on an active utility-wildfire docket.
  - Inputs: Amazon, Target and Costco exports, a Google Takeout or iCloud photo export, card CSVs, and listing photos preserved through the firm.
  - Output: a schedule with evidence links (order ID, photo hash, EXIF date), flags for photos taken at a prior address or someone else's home, and a one-pass ownership attestation by the claimant.
  - Pricing: $300-1,500 per claimant, or a docket license.
- **Second channel:** public-adjuster and restoration SaaS at $300-600 per total-loss claim, to cover non-catastrophe base load.
- **Third:** a depreciation-holdback tracker as a public-adjuster add-on, not consumer contingency revenue.
- **Keep:** a free claimant version through United Policyholders and LTRGs, for goodwill and data.

## What's good
- Real, quantifiable pain, and an insight that holds up: the household's digital records *are* the inventory. Pre-loss inventory apps failed for 15 years because they asked people to catalog in advance.
- Limit-filling (sort by value, stop at about 105% of the limit) cuts work sharply for underinsured households.
- Recoverable depreciation is a hidden pool of money that runs for years.
- Provenance-first design turns the AI-fraud headwind into a feature.
- Capital-light, technical build. Steady non-catastrophe fires (about 35-50k a year) give public-adjuster channels base load.
- The mass-tort pivot removes the policy-limit cap and the licensing problem in one move.

## What's bad (red-team lenses)
- **Competition:** Free assistants plus UP templates cover most of the consumer job. California law and carrier waivers remove the pain exactly where awareness is highest, and other wildfire states will copy it. Carriers will never fund a tool designed to raise severity; their provenance needs are already served by Verisk, Shift and Truepic. Verisk and Encircle can absorb the feature.
- **GTM:** There is no buyer with both budget and recurring volume. B2C acquisition at disaster sites is estimated at $1,500-5,000 against a one-time $499-2,499 fee. Fire-chasing public adjusters sign homeowners within 24-72 hours. Realistic public-adjuster ACV is $3-15k with 25-40% churn, so LTV/CAC is about 1-1.5x. Limit-filling helps less when Coverage C is $300-700k, which can exceed what the household actually owned.
- **Feasibility:** The output is part of a sworn proof of loss, and one hallucinated line can void the entire policy. Every line therefore needs human attestation, which erodes margin. Data access is hard:
  - Google Photos Library API restricted since March 31, 2025, so a Takeout export is required.
  - No iCloud server API.
  - Gmail restricted scopes require a CASA security assessment.
  - Amazon data requests take days to 30 days.
  - Plaid covers about 24 months of transactions.

  Florida 626.854 and California 15027 likely reach "documentation-only" for a fee.

## Non-obvious insights
1. The job is to reach the limit with lines you can defend, not to produce a complete inventory.
2. The money is in depreciation holdback and pricing disputes, not in proving items existed.
3. California is regulating the consumer market away. The durable demand is non-catastrophe fires, non-California catastrophes, and **tort damages, which have no policy cap**.
4. Mortgage servicers are the wrong channel: they co-sign dwelling checks, not contents checks.
5. Listing photos are among the best room-by-room evidence and disappear after a disaster. They also show the *previous* owner's furniture, which creates false positives.
6. The defensible asset is the provenance and ownership-attestation layer, not item detection.

## Cheapest validation test (2 weeks, <$1k)
1. Interview 8-10 people: 4 plaintiff-side wildfire firms or claims administrators (Eaton/SCE, PacifiCorp, Maui), 4 public adjusters, and 2 United Policyholders or LTRG staff. Ask:
   - What does a personal-property workup per claimant cost today?
   - Who does it?
   - Would you pay $500 per claimant for a provenance-tagged schedule?
2. Recruit 2-3 volunteer households, ideally past fire survivors or proxies using their real exports. Build schedules with off-the-shelf models plus a script, and measure:
   - Hours of work
   - False-positive ownership rate (target under 2% after one attestation pass)
   - Share of Coverage C reached
3. In parallel, run a 1-hour live competitor scan and confirm the exact terms of SB 495.

**Kill** if no firm commits to a paid pilot at $300 or more per claimant, or if false positives exceed 5% after attestation.

## Unresolved questions
- Exact final terms of SB 495. Do Colorado and Oregon have no-inventory advance laws?
- Does a funded consumer-side or mass-tort AI contents startup exist? Has EvenUp or Supio moved into property damages?
- What do plaintiff firms and claims administrators actually pay per claimant for personal-property workup?
- What is the exact reach of Fla. Stat. 626.854 and Cal. Ins. Code 15027 over flat-fee self-serve software?
- How much recoverable depreciation goes unclaimed? (No authoritative figure exists.)
- Has Verisk announced AI auto-itemization in ClaimXperience or XactContents?

## Sources (recalled; not fetched this run)
- https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB495
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=2061
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=15027
- http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0626/Sections/0626.854.html
- https://www.flsenate.gov/Session/Bill/2022A/2A
- https://www.insurance.ca.gov/0400-news/0100-press-releases/
- https://uphelp.org/claim-guidance-publications/inventory-tips-and-tools/
- https://www.verisk.com/insurance/products/claimxperience/
- https://www.getencircle.com/
- https://developers.google.com/photos/support/updates
- https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification
- https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-structure-fires
- https://openai.com/index/introducing-chatgpt-agent/
