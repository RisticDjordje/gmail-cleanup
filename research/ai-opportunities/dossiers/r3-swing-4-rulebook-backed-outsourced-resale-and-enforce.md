# Rulebook Desk: outsourced resale and enforcement for regional HOA/condo managers (FL/TX)

**One-liner:** A machine-readable "association rulebook" built from CC&Rs, amendments, bylaws, rules and minutes, combined with a per-state statutory checker. The original plan was to sell finished estoppel and resale certificates, lender questionnaires and violation due-process packets to regional Florida and Texas management companies, priced as a share of the statutory fee the closing seller pays.

> **Research caveat (2026-10-06):** This round had no new live verification. The shared WebSearch budget was used up on the first call, and the egress proxy blocked WebFetch to flsenate.gov again, as it did for the deep dive and all three red teams. Facts marked **verified** come from earlier-stage search snippets cited in the deep dive or red teams, not from pages read in full. Facts marked **memory** or **estimate** are unverified. The key legal facts are still unverified: whether Fla. Stat. 468.431(2) covers estoppel preparation as licensed community association management, and the full text of the 718.116(8) / 720.30851 waiver rule.

## Verdict: promising with pivot. Overall 33/100

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 4 | Revenue share on the statutory fee pool is about $130-400M/yr nationally, and about $35-120M in FL+TX (estimate). Certificates alone top out near $10-20M ARR for one vendor. |
| Pain intensity | 4 | Real for associations and boards, which bear binding understatements. Weak for the buyer: the management company keeps the fee and produces 2-3 certificates a day with salaried clerks. |
| Whitespace | 2 | Vantaca/HOAi ($300M at $1.25B, Oct 2025) and RealPage/HomeWiseDocs (9M+ homes) hold the ledger, documents and order UI. Mosaic, HOA-OS, PayHOA and CommunityPay already market estoppel automation to the self-managed segment. |
| AI leverage | 6 | Extracting fees, approvals and fine schedules from amendments and minutes is a real LLM-plus-deterministic fit. Speed ("5-minute certificate") is already table stakes. |
| GTM feasibility | 3 | Fragmented buyers, a 4-9 month cycle (estimate), unpaid onboarding labor, delivery inside competitors' portals, and a cyclical revenue share. |
| Defensibility | 3 | Rulebook depth and cross-system neutrality are thin moats against incumbents that can bundle the feature. The warranty, the only real differentiator, is an uninsurable liability tail. |
| Founder fit | 4 | A technical founder can build the engine. But the desk likely needs licensed Florida CAMs (memory), E&O cover and ops headcount, which breaks the small-team constraint. |

**Call:** The idea as scoped is a **pass**: a per-certificate resale desk sold to management companies on revenue share. All three red-team lenses (competition, GTM, feasibility) reached `serious_concerns` independently, and **all three converged on the same pivot**. That convergence is the strongest signal in this file, and it is why the verdict is "promising with pivot" rather than "pass." The pivot is below.

## Revised thesis (the pivot all three lenses landed on)
**Enforcement and collections due-process engine for community-association law firms and collection firms (Florida and Texas first), with a white-label API for mid-tier AMS vendors that have no HOAi equivalent (CINC, Enumerate, smaller regional systems).**

The product is a pre-issuance enforceability check:
- Before a fine, lien letter, collection referral or foreclosure notice goes out, it rebuilds the violation or delinquency history.
- It checks that history against the CC&Rs, amendments and statute: FL 720.305 and 718.303 for fines; FL 720.3085 and 718.116 for liens and collections; TX 209.006-.007 for notice, cure and hearing and 209.0064 for notice before a collection agent. All citations are from memory and need legal verification.
- It outputs a cited enforceability memo plus corrected notices.

Why this fixes the original flaws:
1. **The risk-bearer pays.** A defective notice voids recovery and exposes the firm to fee-shifting. Collection and enforcement fees are generally recoverable from the delinquent or violating owner (memory), so the pass-through economics survive.
2. **Licensing is handled.** Lawyers sign the output and already carry malpractice cover. That removes the CAM-licensing and unauthorized-practice-of-law questions the resale desk raised.
3. **Buyers are concentrated.** A few dozen firms per state each represent hundreds to thousands of associations. That rebuilds the cross-management-company data view the original thesis lost to HomeWiseDocs.
4. **The cycle works in its favor.** Collections volume rises when housing softens, while certificate volume falls.
5. **The incumbents' blind spot.** Vantaca and RealPage sell to managers, not to association law firms.

Estoppel prep stays as a byproduct of the same rulebook. It would be sold as an **unwarranted** pre-issuance QA flag report, never as a warranted certificate, through the law firms' management-company clients.

Residual risks of the pivot:
- The buyer universe is small (law firms are slow, partner-driven adopters).
- Per-matter pricing may cap ACV.
- Large firms (Becker, Kaye Bender Rembaum, names from memory; interest unverified) may build in-house or use general legal AI (Harvey, CoCounsel-type tools).
- No one has verified how often notice defects actually cost a recovery. That is the kill question.

## Workflow today (pieced together from practitioner knowledge; steps unverified)
**Resale/estoppel:**
1. A title agent, closing attorney, lender or seller orders through HomeWiseDocs (RealPage), CondoCerts, an AMS resale module, or by email to a volunteer treasurer for self-managed associations. In Florida, PropLogix chases estoppels for title agents.
2. The portal collects the fee and routes the order.
3. A clerk pulls the ledger and checks by hand for special assessments (often only in minutes), open violations and fines, legal fees, transfer or capital-contribution fees (often set in amendments), buyer-approval or right-of-first-refusal clauses, and insurance and litigation status.
4. The clerk fills the state form, attaches documents and sends within the window. Florida: 10 business days and a $299 base cap (**verified**, FS 720.30851 snippet), plus $119 expedited and $179 delinquent add-ons (GTM red team snippet). Texas and California timing are from memory.
5. Updates are reissued when closings slip.
6. The fee is remitted after closing, less the portal's convenience fee.

**Where it fails:** ledger timing, fees and approvals that live only in the documents, month-end rushes, turnover, and self-managed associations missing deadlines. Florida 718.116(8)(c): "An association waives the right to collect any moneys owed in excess of the amounts specified" (**partial snippet, verified**).

**Violation due process:**
- Inspection app → courtesy letter → formal notice with cure period → hearing notice. Florida (720.305) requires a non-board committee and about 14 days' notice (memory; 2024 HB 1203 amended this). Texas (209.006/.007) requires certified mail, a cure period and a hearing right (memory).
- Then fine, collections and lien.
- Managers pick templates by hand and skip steps, which leaves fines unenforceable and creates attorney-fee exposure.

**Florida condo safety:** milestone inspections, SIRS (structural integrity reserve studies) and website/records duties under 2022 SB 4-D, 2024 HB 1021 and 2025 HB 913 (bill numbers from memory). Tracked in spreadsheets.

## TAM (estimates unless marked)
- **Base (verified, CAI Foundation snippet):** about 373k associations, 78.1M residents, $124.2B in assessments (end of 2025), and 35.2% of US housing stock.
- **Layer 1, statutory document fee pool:**
  - About 1.4-1.6M association resales/yr x about 1.3 documents x $300-500 ≈ $0.55-1.0B, plus lender questionnaires at $0.1-0.35B.
  - Vendor revenue-share pool at 20-30% ≈ $130-400M/yr; FL+TX ≈ $35-120M.
- **Layer 2, per-door governance:** about 18-22M managed doors x $0.40-1.25/door/month ≈ $85-330M/yr.
- **Layer 3, Florida condo-safety compliance:** about 25-28k condo associations (memory) x $1-3k ≈ $25-85M/yr.
- **Firm-level check:** a 10k-door firm produces 500-700 certificates/yr, worth about $30-70k at $60-100 take. Most regional firms run 1-5k doors, so the realistic median account is $5-20k/yr (GTM red team).
- **Pivot TAM (rough):** association collections and enforcement matters across FL+TX law firms. Not sized this session. It needs a count of matters per firm per year from the validation calls.

## Competitors

| Name | Type | Relevance | Scale | URL |
|---|---|---|---|---|
| Vantaca (HOAi, Scout) | AMS incumbent, AI-forward | Owns the ledger; HOAi markets agentic violation workflows; HomeWiseDocs and CondoCerts are partners | $300M at a reported $1.25B valuation, Oct 2025; HOAi acquired Nov 2024 | https://www.prnewswire.com/news-releases/vantaca-acquires-hoai-to-unlock-a-new-era-of-hoa-community-management-with-cutting-edge-ai-302310780.html |
| HomeWiseDocs (RealPage) | Resale ordering network | Owns the title-side order UI and fee remittance; markets processing "in under a minute" (snippet) | Acquired Dec 2021; 9M+ homes | https://www.realpage.com/news/realpage-agrees-to-acquire-homewisedocs/ |
| CondoCerts | Resale ordering portal | Integrated with Vantaca | Unverified | https://www.vantaca.com/partners |
| Mosaic | AI-native FL HOA ops | Auto-generates estoppels from the ledger with a statutory rule engine (snippet) | Unverified | https://mosaichoa.com/blog/florida-hoa-estoppel-certificates/ |
| HOA-OS | AI-native HOA software | AI agent; resale/estoppel deadline computation (snippet) | Unverified | https://www.hoa-os.com/ |
| PayHOA | Self-managed HOA software | In-app resale document processing | Unverified | https://www.payhoa.com/streamline-resale-documents-how-in-app-processing-saves-time/ |
| CommunityPay | HOA payments/ops | Florida estoppel content | Unverified | https://www.communitypay.us/concepts/florida-estoppel-certificate-requirements/ |
| Rexera | Title/escrow AI-agent ops | HOA resale and estoppel ordering for title (scope from memory) | Unverified | https://rexera.com/blog/hoa-resale-package/ |
| PropLogix | Title-side estoppel chasing (FL) | Occupies the self-managed demand node | Unverified | https://www.proplogix.com/services/hoa-estoppels/ |
| HOALife | Violation/inspection point solution | Parses governing documents into violation types | Unverified | https://managecasa.com/articles/best-hoa-ai-software |
| Assembly HOA | AI-native operator (YC S24) | Competes for associations, not vendors | Seed Aug 2024; Seedtable estimates $2-4M revenue | https://seedtable.com/companies/assembly-hoa |
| Kaloop | FL resident and board hub | Adjacent | Early stage | https://martechseries.com/predictive-ai/ai-platforms-machine-learning/kaloop-launches-ai-powered-community-hub-for-florida-hoas-and-condos/ |
| TenantEvaluation | FL buyer-approval/onboarding | Overlaps the transfer step | Unverified | https://blog.tenantevaluation.ai/resident-onboarding-software-florida-revenue/ |
| ManageCasa, HOA-i, PropMIS, TownSq | AI-branded HOA SaaS | Commoditize "AI makes the document" | Unverified | https://www.hoa-i.com/ |
| FirstService Residential, Associa | Large operators | In-house resale; possible self-builders | FSV public | n/a |
| EliseAI | Multifamily AI ops | Possible entrant | $350M raise (Bisnow) | https://bisnow.com/news/national/property-management/eliseai-raises-350m-funding-round-plans-automation-expansion |

## Wedge and model
**As proposed (rejected):**
- An outsourced resale desk for 3k-30k-door FL/TX firms.
- Rulebook built in about 48 hours at no upfront cost.
- Packages prepared inside HomeWiseDocs or CondoCerts; the manager clicks to certify.
- Statutory SLA, priced at 20-30% of the base fee or $50-90 flat.
- Second door: a free, fee-funded desk for Florida self-managed associations.
- Upsell: an E&O-backed accuracy warranty.

**Recommended:**
- Per-matter fee ($25-150 per collection or enforcement file, a guess to be tested) or a per-association retainer, sold to association law firms and collection agencies.
- White-label API for mid-tier AMS vendors.
- Estoppel QA flag report as an unwarranted add-on.
- No warranty and no operating inside portals.

## What's good
- Real, document-dependent liability: binding estoppel waiver (718.116(8)(c), partial text verified) and fines voided by due-process defects.
- An LLM-plus-deterministic architecture fits well. The model only builds the rulebook; deadlines, caps, ledger math and notice steps are rule checks.
- A large, stable base: 373k associations and $124.2B in assessments (verified snippet). Florida legislative churn creates recurring need.
- The rulebook asset is reusable across certificates, enforcement, architectural review and Florida condo-safety work.
- The pivot buyer (association law firms) is the actual risk-bearer, is licensed to sign, is concentrated, and is not targeted by Vantaca or RealPage.
- The pivot is counter-cyclical: collections rise when housing softens.

## What's bad, by lens
**Competition:**
- Incumbents own the ledger, documents and order UI, and can bundle "AI-prepared certificate" at zero marginal price.
- The self-managed second door is already contested (Mosaic, HOA-OS, PayHOA, CommunityPay, PropLogix, Rexera).
- The expansion modules are also occupied (HOALife, HOAi, TownSq).

**GTM:**
- The buyer keeps the fee and feels little of the risk. The pitch amounts to "give us 20-30% to save hours of a clerk you keep anyway."
- Median ACV is about $5-20k and cyclical. CAC is about $10-30k with a 4-9 month cycle (estimate) and unpaid onboarding.
- Roll-up consolidation churns the target segment.
- Fee caps are political and flat in real terms.

**Feasibility:**
- The warranty creates a heavy-tailed liability. One missed $30k special assessment wipes out the revenue from about 400 certificates.
- Florida 468.431(2) likely makes estoppel preparation licensed CAM work (memory, needs counsel).
- Data access is gated by the competitors, and the highest-loss facts are often missing from the repository (minutes uploaded late, invalid or unrecorded amendments).
- Statute maintenance is a recurring cost, not a moat.

## Non-obvious insights
1. The cross-firm order network the scout wanted to own already exists, and RealPage owns it (HomeWiseDocs, Dec 2021). The only open layer is judgment between the ledger and the certified answer.
2. Most costly estoppel errors are document-knowledge errors (amendment fees, assessments approved in minutes, approval rights), not ledger math. That is the real LLM edge.
3. The party that keeps the certificate fee (the manager) and the party that bears the loss (the association) are different. Any wedge has to sell to whoever bears the loss.
4. A warranty is the only thing that sets an AI certificate apart from incumbents, and it is the thing that kills the unit economics. Selling unwarranted QA to a licensed signer avoids that.
5. Enforcement and collections defects (voided fines, fee-shifting) are a bigger, recurring, less cyclical liability than certificates. The original thesis already named this as the expansion. All three red teams say to make it the wedge.

## Cheapest validation test (2-4 weeks, under $2k)
1. **One paid hour with a Florida association attorney** (about $300-500). Confirm or refute (a) whether 468.431(2) covers estoppel preparation and statutory-notice timing as licensed CAM work, (b) the full 718.116(8) / 720.30851 waiver text, and (c) whether a software vendor drafting fine and lien notices for law-firm review raises any unauthorized-practice issue.
2. **Ten discovery calls with FL/TX association-law and collection partners.** Ask how many fines, liens or collection files per year are lost, written down or fee-shifted because of notice, cure or hearing defects, and what they would pay per file to prevent it.
3. **If two or more firms say "often":** run 100-200 of their historical closed files through a hand-built rulebook-plus-checklist (spreadsheet plus LLM is fine). Measure material defects found that their attorneys missed.
4. **Kill if:** defects are rare (under about 2% of files), or no firm will pay at least $25 per file, or counsel confirms the pivot itself needs licensure.

## Sources
- https://www.flsenate.gov/Laws/Statutes/2024/720.30851 (snippet: 10 business days, $299 cap; page blocked)
- https://www.flsenate.gov/Laws/Statutes/2025/468.431 (fetch attempted 2026-10-06; blocked by egress proxy)
- https://foundation.caionline.org/research/industry-data/ (snippet: 373k associations, 78.1M residents, $124.2B, 35.2%)
- https://www.realpage.com/news/realpage-agrees-to-acquire-homewisedocs/
- https://www.realpage.com/community-associations/resale-documentation/
- https://www.businesswire.com/news/home/20211207005386/en/RealPage-Agrees-to-Acquire-HomeWiseDocs-The-Premier-Provider-of-Disclosure-Management-Services-to-the-Community-Association-Industry
- https://www.prnewswire.com/news-releases/vantaca-acquires-hoai-to-unlock-a-new-era-of-hoa-community-management-with-cutting-edge-ai-302310780.html
- https://www.wilmingtonbiz.com/vantaca_secures_300m_investment_to_fuel_growth/2025/10/15/vantaca_secures_300m_investment_to_fuel_growth/26930
- https://www.bisnow.com/national/news/proptech/the-4-newest-proptech-unicorns-show-ais-increasing-role-in-real-estate-133304
- https://www.vantaca.com/partners
- https://www.vantaca.com/blog/best-ai-driven-hoa-management-software-2026-comparison
- https://mosaichoa.com/blog/florida-hoa-estoppel-certificates/
- https://www.hoa-os.com/
- https://www.payhoa.com/streamline-resale-documents-how-in-app-processing-saves-time/
- https://www.communitypay.us/concepts/florida-estoppel-certificate-requirements/
- https://rexera.com/blog/hoa-resale-package/
- https://www.proplogix.com/services/hoa-estoppels/
- https://managecasa.com/articles/best-hoa-ai-software
- https://icsolutions.net/work/hoa-saas
- https://seedtable.com/companies/assembly-hoa
- https://martechseries.com/predictive-ai/ai-platforms-machine-learning/kaloop-launches-ai-powered-community-hub-for-florida-hoas-and-condos/
- https://blog.tenantevaluation.ai/resident-onboarding-software-florida-revenue/
- https://bisnow.com/news/national/property-management/eliseai-raises-350m-funding-round-plans-automation-expansion
- https://governingdocs.dev/blog/hoa-transfer-fees-hidden-costs/ (snippet: portal fees $25-400 per document)
