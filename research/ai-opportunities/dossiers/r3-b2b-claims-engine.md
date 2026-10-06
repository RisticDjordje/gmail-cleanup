# R3 — Horizontal B2B Claims Adjudication Engine → re-scoped to Distributor-Side SPA / Ship-and-Debit Debit Recovery

**Date:** 2026-10-06 · **Round:** 3 (post round-2 diligence) · **Previous score:** 0 (synthesized by the round-1 IC, never scored) · **New score: 54/100** · **Verdict: PROMISING WITH PIVOT**

> **Evidence limits this round:** I made 2 WebSearch calls (the budget). WebFetch was blocked by the egress proxy (rivvun.ai, speedylabs.ai). Round-2 had the same block, so nearly all evidence comes from search-result snippets, not opened pages. Buyer interviews are **role-play composites, not real quotes**. Every $ figure for this company is an **estimate** unless a URL is cited.

---

## 1. Score change and why

**0 → 54.** The round-1 framing would score about 30 on its own: a "horizontal engine, start in one vertical, prove transfer" that leads with deductions, LTL or VSC. Round-2 kills the framing and leaves one wedge standing. The 54 is for that wedge, with the engine kept as internal architecture.

**What sinks the horizontal thesis:**
- **The horizontal narrative already belongs to a funded team.** Rivvun AI, founded by Icertis veterans (Anand Veerkar, Niranjan Umarane, Patrick Linton), raised a $7.55M seed led by Sitara Capital and 3one4. It sells an "autonomous AI execution layer" that connects to ERP/CRM/procurement to recover contractual obligations, with two product families: *Spend Assurance* (buy-side supplier rebates and pricing commitments) and *Margin Defense* (sell-side settlement variances and trade-term discrepancies). Target sectors are pharma, healthcare, banking, CPG, retail and industrial. This was **verified this round** via [TheNextWeb](https://thenextweb.com/news/rivvun-ai-seed-enterprise-spend-recovery-icertis), [NatLawReview PR](https://natlawreview.com/press-releases/2-trillion-year-never-makes-it-obligation-settlement-rivvun-ai-built-recover) and [StartupHub (2026)](https://www.startuphub.ai/ai-news/funding-round/2026/rivvun-ai-raises-7-55m-for-spend-recovery). The exact month is still unverified.
- **Two of the four starting verticals are funded AI-native categories.**
  - Deductions: Glimpse has $52M total including an a16z round ([NOSH](https://www.nosh.com/pr/2026/03/25/glimpse-raises-35m-to-bring-ainative-infrastructure-to-cpg-and-retail)), Stuut has a $29.5M a16z Series A ([PYMNTS](https://www.pymnts.com/news/investment-tracker/fintech-investments/2025/stuut-raises-29-million-dollars-ai-powered-accounts-receivable-automation-platform/)), and HighRadius markets deduction agents.
  - LTL audit: Loop raised a $95M Series C ([citybiz](https://www.citybiz.co/article/833883/loop-raises-95-million-series-c-to-expand-ai-supply-chain-platform/)), and Lighthouz is in the space.
- **Buyers don't buy horizontal.** All three personas wanted a tool built for their own portals, codes and catalog numbers. The manufacturer persona said: "I don't care that it also does freight rebills."

**What lifts it back to 54:**
- **The distributor (claimant) side of ship-and-debit / SPA debits is the least crowded vertical checked.** This round's search for an AI-native ship-and-debit recovery startup found only content pages: incumbents (Enable), Computer Market Research (CMR, a ship-and-debit tool and SEO guides), Incentive Insights, and SpeedyLabs (a blog, unverified product) ([search results](https://computermarketresearch.com/automating-ship-and-debit-claims-a-2026-guide-to-channel-roi/), [SpeedyLabs](https://blog.speedylabs.ai/ship-and-debit/)). I found no funded AI-native entrant. Absence in search is not proof.
- **The data is structured.** Claims and responses travel as X12 EDI 844/849 pairs (from memory, not verified this session). That is literally "claim in, coded response out." Rejection reasons are mechanical: expired agreement, end-customer mismatch, catalog-number suffix, ship date vs. order date. CMR confirms that ship date governs validity ([CMR](https://computermarketresearch.com/automating-ship-and-debit-claims-a-2026-guide-to-channel-roi/)).
- **The buyer and price fit a capital-light founder.** The distributor persona would sign on contingency (20-25% of recovered dollars) after a free leakage audit, with the CFO or controller signing and no enterprise cycle. The cash and proof come before SaaS revenue.
- **Rivvun is enterprise, ERP-connected and multi-sector.** A mid-market electrical/HVAC distributor running Eclipse or P21 sits below its likely ICP. That is an inference, not a verified fact.

**Why not higher than 54:**
- **The account pool is small.** Mid-size US electrical, HVAC and industrial distributors number in the low thousands (estimate). At $20-100k/account (estimate), reaching $20M+ ARR needs a second wedge or manufacturer-side expansion.
- **Contingency revenue arrives 60-120 days late.**
- **Others could bolt this on.** Buying groups (AD, IMARK) or ERP vendors (Epicor) could add it as a feature.
- **Relationships cap aggressiveness.** "If you make us look aggressive, the manufacturer rep calls my VP."
- **The claimant's own data is messy.** SPAs live in PDFs, portals and rep emails, so the deterministic promise will leak (the pre-mortem estimates 25-40% exceptions).
- **The founder has no channel-finance domain expertise.**

---

## 2. Fact-check table

| Claim | Status | Evidence |
|---|---|---|
| Few or no AI-natives in CPG deductions | **Contradicted** | Glimpse has $52M total (8VC, then a16z, Mar-2026), claims 125+ brands and a 91% win rate (company claim). Stuut and HighRadius agents also play here. [NOSH](https://www.nosh.com/pr/2026/03/25/glimpse-raises-35m-to-bring-ainative-infrastructure-to-cpg-and-retail) |
| Stuut is an AI-native AR/deductions competitor | **Verified** | $29.5M Series A, a16z lead, ~Nov 2025. Covers collections, cash application, deductions and disputes. [PYMNTS](https://www.pymnts.com/news/investment-tracker/fintech-investments/2025/stuut-raises-29-million-dollars-ai-powered-accounts-receivable-automation-platform/) |
| Endeavor AI is a deductions competitor | **Partially true** | $7M seed (Craft, Nov 2024). Focused on order entry and ops for manufacturers, so adjacent rather than a deductions product. [FinSMEs](https://www.finsmes.com/2024/11/endeavor-raises-7m-in-seed-funding.html) |
| Incumbents lack credible deduction AI | **Contradicted** | HighRadius markets "AI Agents for deductions" with 90%+ capture and 80%+ touchless resolution (vendor claims). [HighRadius](https://www.highradius.com/resources/Blog/what-is-agentic-ai-in-deductions-management-and-how-does-it-work/) |
| LTL rebill audit is underserved by AI | **Contradicted** | Loop raised a $95M Series C (Apr-2026). Lighthouz offers LTL-specific auto-disputes. [citybiz](https://www.citybiz.co/article/833883/loop-raises-95-million-series-c-to-expand-ai-supply-chain-platform/) |
| LTL reclass and reweigh is a material pain | **Partially true (vendor)** | One freight class step is +10-20%, reweigh fees run ~$25-40 (Evos blog, an estimate). [Evos](https://www.getevos.ai/resources/blog/ltl-invoice-audit-operations-problem) |
| VSC/warranty adjudication has no AI-natives | **Contradicted** | Circuitry.ai sells to TPAs and OEMs and names Hendrick Automotive. ServiceCPQ, Bruviti, Tavant and WarrantyHub are also active. [Circuitry](https://circuitry.ai/intelligent-ai-automation-service-contract-tpas-and-oems) |
| SPA/ship-and-debit is served only by legacy vendors | **Partially true** | Vendors seen are Enable, Vistex, Model N, CMR, ChannelScaler, Smyyth (audit services) and SpeedyLabs (unverified). No funded AI-native showed up in either round's searches. [Enable](https://www.enable.com/blog/managing-spas-ship-debit-claimbacks-mdfs-and-more), [ChannelScaler](https://channelscaler.com/platforms/distributor-back-end-credits-becs-software/) |
| Model N has an AI channel-claims product | **Unverifiable** | Nothing surfaced. Vista taking Model N private in 2024 is from memory. [Wikipedia](https://en.wikipedia.org/wiki/Model_N_(company)) |
| Time-limited demand statutes create a deadline workflow | **Verified (GA)** | O.C.G.A. 9-11-67.1 was amended in 2024 with insurer protections. Florida advanced a bill restricting AI in claim denials (Dec 2025). [Hall Booth Smith](https://hallboothsmith.com/if-at-first-you-dont-succeed-georgia-legislature-amends-pre-suit-demand-statute-to-provide-additional-protections-to-insurers/) |
| Nobody is building a horizontal contract-to-claim-to-response engine | **Contradicted (verified R3)** | Rivvun AI: $7.55M seed, Icertis alumni, buy-side and sell-side recovery agents, multi-sector. [TheNextWeb](https://thenextweb.com/news/rivvun-ai-seed-enterprise-spend-recovery-icertis) |
| Invalid fees cost up to ~10% of brand P&L | **Partially true (vendor)** | Glimpse PR only. iNymbus claims "3-8%" of revenue. No independent TAM. [Yahoo/Glimpse](https://finance.yahoo.com/news/glimpse-secures-10m-automate-deduction-120000847.html), [iNymbus](https://blog.inymbus.com/deduction-management-everything-you-need-to-know-about-this-process) |
| Manual channel spreadsheets carry a ~30% error rate | **Vendor claim, unverified** | CMR SEO content. Do not cite as data. [CMR](https://computermarketresearch.com/automating-ship-and-debit-claims-a-2026-guide-to-channel-roi/) |

---

## 3. Competitor map

| Name | Type | Relevance | Funding / scale | URL |
|---|---|---|---|---|
| **Rivvun AI** | AI-native horizontal obligation-to-settlement | **Most direct to the horizontal thesis.** Enterprise, ERP-connected. Could move down-market into distributors. | $7.55M seed (Sitara, 3one4), 2026 | [TNW](https://thenextweb.com/news/rivvun-ai-seed-enterprise-spend-recovery-icertis) |
| Glimpse | AI-native CPG deductions | Owns the deductions wedge | $52M total (8VC, a16z) | [NOSH](https://www.nosh.com/pr/2026/03/25/glimpse-raises-35m-to-bring-ainative-infrastructure-to-cpg-and-retail) |
| Stuut | AI-native AR (deductions inside the suite) | Bundles deductions into AR | $29.5M Series A (a16z) | [PYMNTS](https://www.pymnts.com/news/investment-tracker/fintech-investments/2025/stuut-raises-29-million-dollars-ai-powered-accounts-receivable-automation-platform/) |
| HighRadius | Incumbent O2C | Deduction agents | Large incumbent | [link](https://www.highradius.com/resources/Blog/what-is-agentic-ai-in-deductions-management-and-how-does-it-work/) |
| Loop | AI freight audit, now a logistics data platform | Owns the freight-audit wedge | $95M Series C (Apr-2026) | [citybiz](https://www.citybiz.co/article/833883/loop-raises-95-million-series-c-to-expand-ai-supply-chain-platform/) |
| Lighthouz AI | AI LTL audit for brokers | LTL reweigh/reclass auto-disputes | Unverified | [lighthouz.ai](https://lighthouz.ai/) |
| Freehand | AI freight claims and audit | Contingency freight recovery | Unverified | [Freehand](https://www.freehand.ai/articles/best-ai-freight-audit-payment-software-2026) |
| Circuitry.ai | AI for VSC TPAs and OEMs | Already in VSC (Hendrick) | Unverified | [link](https://circuitry.ai/intelligent-ai-automation-service-contract-tpas-and-oems) |
| ServiceCPQ / Bruviti / Tavant / WarrantyHub | Warranty adjudication AI | OEM warranty | Unverified | [ServiceCPQ](https://www.servicecpq.com/warranty-automation) |
| Enable | Rebate-management platform | SPA/claimback incumbent on the manufacturer side | VC-backed (from memory) | [Enable](https://www.enable.com/blog/managing-spas-ship-debit-claimbacks-mdfs-and-more) |
| Vistex / Model N | Enterprise pricing, rebates, chargebacks | Manufacturer-side system of record | Large; Model N private (Vista, from memory) | — |
| ChannelScaler | Distributor back-end-credit (BECS) / ship-and-debit software | **Closest distributor-side tool.** Legacy, not AI-native as far as seen. | Unverified | [ChannelScaler](https://channelscaler.com/platforms/distributor-back-end-credits-becs-software/) |
| Computer Market Research (CMR) | Ship-and-debit matching tool and content | Matches point-of-sale (POS) lines to SPAs | Unverified | [CMR](https://computermarketresearch.com/ship-and-debit-tool/) |
| Smyyth | Outsourced ship-and-debit audits | Services competitor on contingency or fee | Unverified | [Smyyth](https://www.smyyth.com/outtasking-services/ship-and-debit-audits/) |
| SpeedyLabs | Possible AI SPA/billback entrant | **Watch closely.** Product unverified; site blocked twice. | Unverified | [blog](https://blog.speedylabs.ai/ship-and-debit/) |
| Whitespace (YC S2026) | AI agents for wholesale distributors | Same buyer; could add claims | YC | [YC](https://www.ycombinator.com/companies/industry/supply-chain) |
| Paraglide AI | AI AR and finance ops | Adjacent | Unverified | [wiki](https://en.wikipedia.org/wiki/Paraglide_AI) |

**Crowding by vertical:**

| Vertical | Crowding | Notes |
|---|---|---|
| CPG deductions | High | Avoid |
| LTL audit | High | Avoid |
| VSC / warranty | Medium | Circuitry plus OEM warranty vendors |
| BI demands / Medicaid | Regulatory and liability heavy | Avoid |
| **Distributor-side SPA debits** | **Lowest seen** | Proceed, after primary validation |

---

## 4. Buyer-interview highlights (ROLE-PLAY composites, not real quotes)

**A. Director of Credit & Deductions, ~$400M CPG brand → unlikely buyer**
- Pain: "Half of what we write off isn't because we'd lose; it's because nobody got to it before the window closed."
- Objection: "I get three deductions-AI cold emails a week." "The contract is the problem, not the check."
- Willingness to pay (WTP): contingency only, nothing on disputes they would have won anyway. "I'm not paying $60k/year for another platform."

**B. Vendor Rebates & SPA Claims Manager, ~$350M electrical distributor (Eclipse/P21) → strongest buyer**
- Pain: "Nobody reconciles rejected 849s against what we actually sold." Rejections come from an agreement that "expired last Tuesday," an end-customer name mismatch, or a catalog-number suffix. Short-pays then sit for 120 days and get written off.
- Objections:
  - "40 manufacturers, each with its own portal, SPA format and rejection codes."
  - "Our SPA data is a mess."
  - "If you make us look aggressive, the manufacturer rep calls my VP."
  - "Our buying group or ERP vendor may bolt it on."
- WTP: "Show me the leakage number first. If you find $300k a year that we're writing off, I'd pay 20 to 25% of what you recover." They would not sign a 3-year SaaS deal. The CFO signs below about $3k/month.
- What gets a yes: a free 2-week leakage audit on 12 months of 844/849 or claim/credit files plus the SPA list.

**C. Channel Finance Manager, ~$600M lighting manufacturer (adjudicator) → would not buy**
- Context: "We approve something like 90-plus percent of claims because rejecting them costs more than it saves." "Half our SPA 'rules' are exceptions a regional manager approved verbally."
- WTP: a one-time overpayment audit at 15-25% contingency. A $50-100k subscription only if it replaces headcount.
- **Implication: sell to the claimant, not the adjudicator.** This inverts the original "adjudication engine" framing. The product is a pre-submit validator plus an engine that builds rebuttals for rejected claims.

**WTP summary (estimates):**
- 15-25% contingency on recovered dollars, at roughly $100-500k recoverable per distributor per year (hypothesis), giving about **$20-100k revenue per account per year**.
- SaaS fallback for the validator: $1.5-4k/month, capped at the cost of one claims clerk.

---

## 5. Pre-mortem: top failure modes

| # | Failure mode | Probability (est.) | Early warning | Mitigation |
|---|---|---|---|---|
| 1 | **Feature, not company.** Model N, Vistex, Enable, HighRadius, ERP vendors or buying groups ship LLM claim checks. | 45% | "Our rep showed us something similar." | Sell to the distributor side, where the data is not inside an incumbent. Price on recovered dollars. |
| 2 | **Premature horizontalization.** | 40% | Work on vertical 2 begins before ~$1M ARR or 10 referenceable customers. | Test "transfer" offline only. Raise on vertical-1 metrics. |
| 3 | **Determinism breaks** on verbal exceptions, emailed extensions and missing POS lines. | 35% | Straight-through processing stays below 50% after a month of tuning. | Make the exception workbench and evidence packet the product. Measure dollars recovered. |
| 4 | **Integration tax** turns this into a services business. | 35% | Implementation passes 60 days, or gross margin falls below 60%. | Flat-file/SFTP, EDI exports and email only. Standardize on Eclipse and P21. |
| 5 | **Wrong economics.** ACV is too small or the account pool is too thin. | 30% | Median ACV below $30k with no contingency pool. | Use contingency to lift the effective ACV. Size the pool with NAED, HARDI and buying-group counts. |
| 6 | **Runway** runs out against 60-120-day recovery lags. | 30% | Fewer than 5 paying accounts at month 9. | Start with historical-claims audits that recover cash quickly. |
| 7 | **Rivvun or SpeedyLabs move into mid-market distributors.** | 20% (est.) | Named in discovery calls. | Speed, plus depth in electrical catalog numbering and manufacturer portals. |

**Kill criteria (90-day):**
1. **Day 30:** fewer than 25 discovery calls with the exact buyer title, or fewer than 40% of callers can size claim volume and rejections.
2. **Day 45:** more than 50% say an incumbent, buying group or ERP vendor "handles it." Or 3 or more VC-backed AI-natives come up unprompted.
3. **Day 60:** no prospect has handed over at least 12 months of claim/credit data plus SPAs under NDA.
4. **Day 75:** recoverable leakage found is below 3x the proposed annual fee, or correct adjudication on real data is below 50%.
5. **Day 90:** fewer than 2 signed contingency or paid pilots. Or the median sales cycle is projected above 9 months. Or every account needs more than 60 days of custom integration.
6. **Any time:** the team starts building vertical-2 connectors before tests 1-5 pass.

---

## 6. Discovery-call script (Mom Test, distributor side)

1. Walk me through the last ship-and-debit claim that got rejected or short-paid. Step by step, who touched it?
2. How many claims did you submit last month, and how many came back rejected or partially paid? Where does that number live? Can you pull it now?
3. What happened to last quarter's rejections: resubmitted, written off? Who decided?
4. Show me an actual rejection (an 849, a portal screenshot, an email). What reason codes do you see most?
5. Where does the SPA itself live: PDF, portal, ERP table, a rep's email? The last time it was ambiguous, how was it resolved?
6. What have you tried already (a tool, a buying-group program, an audit firm, a hire)? Why is it not enough?
7. Who signs off on write-offs, and who would notice if write-offs halved?
8. What did you spend last year on this, including people, audit firms and software? How was that approved?
9. What could you export to us this week without involving IT?
10. Who at peer distributors deals with this, and will you introduce me? A deflection here is the signal.

---

## 7. Who to call first

1. **15-20 independent electrical distributors** at $100M-$1B revenue on Epicor Eclipse or Prophet 21.
   - Titles: SPA Coordinator, Special Pricing Analyst, Vendor Rebate Analyst, Rebate & Claims Manager, Vendor Claims Specialist, Pricing Manager, then Controller/CFO.
   - LinkedIn search: `("SPA coordinator" OR "special pricing" OR "ship and debit" OR "vendor claims" OR "rebate analyst") AND ("electrical distributor" OR "electrical supply")`
2. **The same titles at HVAC (HARDI members) and industrial/MRO distributors.**
3. **For contrast and possible audit deals:** Channel Finance or Ship-and-Debit Analysts at mid-size electrical/lighting manufacturers not running Model N or Vistex.
4. **Leverage points** (verify current names and dates, from memory): NAED meetings, HARDI Annual Conference, the finance councils of Affiliated Distributors and IMARK, Epicor Insights / Eclipse-P21 user groups, CRF forums.
5. **Find a domain cofounder or advisor:** an ex-SPA/rebate manager from a top-50 electrical distributor. This fixes the founder-market-fit gap.

---

## 8. First 30 days

| Days | Actions |
|---|---|
| **1-3** | Build an ICP list of about 150 electrical, HVAC and MRO distributors from NAED, HARDI and buying-group member lists and LinkedIn. Draft a one-page "free 2-week claims leakage audit" offer and NDA. |
| **1-10** | 25+ discovery calls using the script above. Record rejection reason codes verbatim and build a taxonomy (expired SPA, end-customer mismatch, catalog suffix, quantity overrun, ship-date-outside-window, missing documentation). Ask every caller for a 12-month 844/849 or claim/credit export. |
| **Primary checks (week 1-2)** | Do these by phone or browser, outside this blocked sandbox: <br>(a) Does SpeedyLabs have a live product and customers? <br>(b) Is Rivvun moving down to mid-market distributors? <br>(c) ChannelScaler and CMR feature depth and pricing. <br>(d) Do AD/IMARK or Epicor offer claim-recovery programs? <br>(e) Confirm the 844/849 usage pattern with a distributor EDI coordinator. |
| **8-20** | Build the thinnest engine. Ingest CSV/EDI exports plus SPA PDFs. LLM-extract SPA terms into versioned rules, approved by a human. Re-adjudicate historical claims and rejections. Output (1) dollars rejected by root cause, (2) dollars still recoverable inside claim windows, (3) draft rebuttal packets with clause citations. No integrations, no UI beyond a report and spreadsheet. |
| **15-30** | Deliver 3-5 leakage audits. Convert to contingency pilots at 20-25% of recovered dollars, 60-90 days, with a baseline agreed upfront. Track: recoverable $ per account, the correct-rebuttal rate against an analyst, and time-to-export. |
| **Day 30 gate** | Continue if: 25 or more calls done, 3 or more data sets received, at least one audit showing recoverable dollars of at least $100k per year. Otherwise apply the kill criteria and re-evaluate VSC TPAs as the backup wedge. |

**Venture vs. cash flow:** this starts as a **cash-flow, recovery-audit-style business**: contingency revenue, a services-heavy early phase, a finite distributor pool. It becomes venture-scale only if (a) the claimant-side network turns into a two-sided claims rail (distributors and manufacturers exchanging coded claims through the platform), and (b) the engine transfers to adjacent channel programs (rebates, billbacks, MDF, price protection) and other distribution verticals. Treat the horizontal story as a Series A narrative, earned with metrics, not a seed pitch.
