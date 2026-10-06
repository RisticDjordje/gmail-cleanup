# Exposure Assurance: AI-native premium audit and program oversight for small-commercial WC/GL

**One-liner:** Use payroll ingestion, LLM class-code mapping and voice/email document chasing to make WC/GL premium audits 3-5x cheaper. The better company is probably one level up: continuous exposure and audit oversight that fronting carriers and reinsurers buy to monitor their MGA programs.

> **Evidence caveat.** No stage of this run could reach the web. The shared WebSearch budget (200 per turn) was used up, and WebFetch egress was blocked for every domain tried. All figures come from the scout's cited sources (not re-fetched) or from model knowledge as of mid-2026. Treat every number, deal and statute reference as **unverified**.

## Verdict

**Promising with pivot. Overall 40/100.** As scouted, "audit 100% of the long tail for gain-share" is a feature, not a company. The leakage pool is tens of millions of dollars, not billions. The pivot to delegated-authority oversight for fronts and reinsurers deserves its own diligence.

| Dimension | Score | Why |
|---|---|---|
| Market size | 4 | Audit labor about $0.8-1.2B. Loss control adds about $1B. Leakage gain-share only about $10-50M a year. |
| Pain intensity | 5 | Real but diffuse. Vendor backlogs and audit-bill shock hurt, yet the line is small on a carrier's P&L. |
| Whitespace | 6 | No AI-native audit firm found (search not verified). Incumbents can absorb the AI. |
| AI leverage | 6 | Document chasing, parsing and reconciliation are automatable. Final judgment and sign-off stay human. |
| GTM feasibility | 3 | 6-18 month procurement, vendor panels controlled by fronts, low ACV, heavy security and AI-governance reviews. |
| Defensibility | 3 | Davies' labor is variable cost, so there is no innovator's dilemma. Insurity and Verisk own the software and the classification content. |
| Founder fit | 3 | Needs a premium-audit domain co-founder plus carrier relationships. Payroll PII and TCPA exposure. |

## Revised thesis

Premium audit is a labor-heavy services budget of roughly $1B (estimate). It runs on 1099 piece-rate auditors and document chasing at Davies/Overland, Pro Global, regional shops and in-house teams. AI can cut the cost of a remote audit sharply. But the incumbents capture most of that saving, because they bill per audit and their labor cost is variable. So "cheaper audits" alone is a services business with a 2-4x revenue multiple.

The defensible version sells to the party that has to **prove oversight across many MGAs**: fronting carriers, reinsurers and capacity providers. The product continuously ingests each program's bordereaux, exposure and payroll data, COIs and audit outcomes. It then flags misclassification at bind, under-reported exposure, incomplete or poor-quality audits, and premium leakage, program by program, each month.

Remote final audits become a module and the land-and-expand product, delivered through an AI stack plus a subcontracted credentialed auditor network. Pricing is per program per month plus per-audit fees.

ACV could be $0.2-1M+ per front, against $35 per audit. The approach avoids adversarial calls to small businesses, keeps errors as flags rather than final bills, and uses data the MGA is contractually obliged to give the front. Fallback for a bootstrapped founder: buy a small regional audit firm and deploy the AI stack internally to expand margin.

## How the work is done today

1. **Bind.** Payroll or sales is estimated by class (NCCI/state bureau for WC, ISO for GL). Agents misestimate in both directions.
2. **Assign at expiration by premium threshold:**
   - Voluntary/mail audit for small policies. Poor response; carriers fall back to estimated audits or non-compliance charges.
   - Phone/virtual audit.
   - Physical audit for large accounts or where statute requires it (CA Ins. Code §11665 threshold; verify).
3. **Execute.** Auditors chase payroll registers, 941s, SUTA reports, GL and 1099s, and subcontractor COIs, then classify using NCCI Scopes or ISO PAAS. Turnaround is 30-90 days. Vendors bill roughly $40-80 for a phone audit and $125-350 for a physical (insider estimate).
4. **Output and collection.** A worksheet goes into Guidewire, Duck Creek, Insurity or Majesco, followed by an additional-premium (AP) or return-premium bill and unit-statistical reporting. Small-business AP is often written off.
5. **Budget line.** The underwriting/acquisition expense ratio, **not LAE** as the scout said. MGAs often pay audit costs out of their commission.

## TAM (estimates)

- About 6-8M auditable WC/GL policy-terms a year at a blended ~$77 = **~$540M** vendor-equivalent spend. In-house auditors add $270-450M (estimated 3-5K auditors). Total audit labor is about **$0.8-1.2B**.
- Commercial auto is mostly not auditable; the scout inflated TAM by including it.
- Loss-control surveys: **$0.7-1.5B** (low confidence).
- Gain-share pool: about $3B of waived or unaudited tail WC premium × 3-6% net uplift × 50-70% collectability × 20% share ≈ **$10-25M a year** (WC). GL might double that.
- SAM (MGAs, fronts, small carriers, state funds): about $200-350M in audits plus loss control.
- 5-year SOM for the audit-only business: **$25-50M ARR**.
- Pivot TAM: MGA/delegated premium is about $100B+ (AM Best/Conning; verify) across roughly 30-60 front and reinsurer buyers, plus larger carriers' program units. Oversight spend is unquantified.

## Competitors

| Name | Type | Threat |
|---|---|---|
| Davies Group / Overland | Incumbent vendor (PE: BC Partners, verify) | High. Variable-cost labor, so it adopts AI and keeps price. Bundles TPA and loss control. |
| Insurity Premium Audit (+ Valen) | Incumbent software | High. Already in MGA and small-carrier stacks. 130+ payroll connectors, "75% faster" AI claim. |
| Pro Global, Mueller and regional shops | Incumbent vendors | Medium. Also roll-up targets. |
| In-house carrier and state-fund audit teams | Status quo | High. Can build their own tools on Azure OpenAI or Copilot. |
| Offshore BPOs (EXL, WNS, Genpact, Patra) | Labor arbitrage | Medium. Shrinks the price gap to about $10-25 per audit. |
| Verisk ISO PAAS / NCCI | Content owners | High latent threat. Own the classification ground truth; licensing dependency. |
| Guidewire / Duck Creek / Majesco | Policy-admin audit modules | Medium. Own the integration surface and self-audit portals. |
| Audit1, NEXT/AP Intego (ERGO), Pie, ADP/Paychex agencies | Pay-as-you-go substitutes | Medium. Erode the small-employer true-up. |
| Gradient AI, Pibit, Kalepa, Federato, Carpe, LexisNexis prefill | Bind-time classification AI | Medium. Less leakage left for audit to find. |
| Roots Automation, Indico, YC "AI BPO for insurance" startups | Horizontal ops agents | Most likely AI-native entrant; audit is an easy module for them. |
| TrustLayer, myCOI, Jones | COI compliance | Adjacent to the subcontractor pain. |
| Bordereaux/DA tools (e.g., Sequel Delegate, Cytora; verify) | Pivot competitors | Unknown. Needs a fresh search. |

## Why now

- Voice and email agents automate the chasing, which is most auditor time.
- Payroll APIs (Finch and similar) and LLM document parsing make 941s, GLs and COIs machine-readable.
- WC has been profitable for 12 years with flat premium (about $41.6B in 2025, NCCI), so carriers hunt margin in expense and leakage rather than rate.
- The post-COVID shift to virtual audits normalized remote audits.
- Fronting scrutiny since Vesttoo (2023) and AM Best's concentration warnings push fronts and reinsurers to *evidence* program oversight. This is the key driver for the pivot.

## Wedge and business model

- **Audit wedge:** "remote audit in a box" for phone/virtual-eligible WC/GL policies under $25K premium.
  - Price: $35-50 per completed audit, with a 21-day SLA.
  - A credentialed reviewer signs every audit.
  - Physical audits are subcontracted.
  - Gain-share applies only to collected net AP on otherwise-waived audits, or is dropped.
- **Pivot wedge:** sign one fronting carrier with 10+ programs.
  - Monthly per-program oversight fee.
  - Audit completion and quality scorecard per MGA.
  - Remote audits sold to the programs that score badly.
- **Margins:** realistically 40-50% in years 1-3 while every audit gets human review. 60%+ requires proving that bureaus and carriers accept exceptions-only review.

## What's good

- Real, unglamorous services budget run on piece-rate labor, and the bulk of auditor time (chasing, reconciliation) is automatable.
- No AI-native audit firm found (unverified absence).
- Budget sits in the expense ratio, and MGAs paying from commission are price-sensitive, fast buyers.
- The fronting carrier is a genuine hidden lever: one deal can cover many MGAs.
- Continuous COI and subcontractor verification addresses the #1 contractor audit-bill driver. It is a credible retention story, not only a revenue grab.
- A credible services fallback exists (an AI-enabled roll-up of a small audit firm).

## What's bad (red team)

- **Competition:** Davies has no innovator's dilemma; it pockets the AI savings. Insurity is already the policy-admin system *and* the audit software for target MGAs. BPOs and horizontal insurance-ops agents shrink the price gap. Verisk owns the classification content.
- **GTM:** Slow responses from insureds are the real bottleneck, and AI calls don't fix that; TCPA (FCC 24-17) consent applies to AI voice calls to cell phones. Vendor choice is controlled by front panels, which means three approvals. Realistic MGA ACV is $100-250K against $50-300K CAC per logo, so payback is 18-36 months. Gain-share cash arrives 15-24 months after the work.
- **Feasibility:** Payroll APIs miss exactly the micro-employers in the long tail (cash, QuickBooks, 1099 crews). Human sign-off puts the cost floor at about $25-40 per audit, not $10. At least five classification systems apply (NCCI plus independent bureaus in CA, NY, PA, NJ, DE, MA, MN, MI). Carriers will apply the NAIC AI Model Bulletin and NYDFS Circular Letter 7 governance to the vendor. Minimum-premium policies only ever produce return premium.
- **All three skeptics independently** recommended the same pivot: oversight for fronts and reinsurers.

## Non-obvious insights

1. The "half of WC policies misclassified" stat comes from Valen, which Insurity owns. It is vendor marketing.
2. Long-tail leakage inverts on dollars. Small policies are most of the count but a small share of premium, and full audits often produce return premium.
3. Billed AP is not collected AP. Every ROI case must be built on cash.
4. Audit cost is an underwriting expense, not LAE, so the buyer is the COO/CFO, not claims.
5. Fronts must prove MGA oversight to reinsurers. That is a bigger budget and a less adversarial product than auditing small businesses.
6. Pay-as-you-go WC doesn't kill final audits; most states still require them. PAYG carriers are good customers for a cheap remote final audit.
7. Labor supply becomes a recruiting advantage: pay the best 1099 auditors more per hour as exception reviewers.

## Cheapest validation test (2 weeks, under $1K)

1. Run 15-20 calls, using LinkedIn plus NSIPA/AIPA networks:
   - 6 heads of program oversight at fronting carriers
   - 6 MGA COOs (contractor WC/GL)
   - 4 premium-audit VPs
2. Ask each:
   - "Who picks your audit vendor?"
   - "What do you pay per phone audit, and what's the turnaround?"
   - "How do you evidence audit completion and quality across programs today, and who asks?"
   - "Would you pay $X per program per month for that?"
3. In parallel, get one MGA to hand over 50 anonymized past audit files (worksheets, registers, COIs). Measure LLM class-mapping agreement and prep-time saved, using about $200 of API spend.
4. Kill criteria:
   - Fewer than 2 fronts describe oversight as a funded pain.
   - Phone-audit pricing is under $40.
   - Model agreement on hard calls is under 85%.

## Unresolved questions

- Actual Davies, Pro Global and BPO phone-audit pricing and turnaround in 2026.
- Share of target MGAs on Insurity, and whether its AI audit is real or shelfware.
- Whether any insurance-ops agent startup has launched a premium-audit or DA-oversight module (needs a fresh search).
- Existing bordereaux and DA-oversight vendors and their traction.
- State physical-audit thresholds and bureau acceptance of AI-prepared audits (CA WCIRB, NY, PA).
- PAAS and NCCI Scopes licensing terms for LLM use.
- Real response-rate uplift from AI chasing on voluntary-unreturned audits.

## Sources (scout-cited, not re-fetched this run)

- https://www.insurancebusinessmag.com/us/news/workers-comp/accurate-audits-key-to-combating-premium-leakage-in-workers-comp--pro-global-554209.aspx
- https://www.insurancejournal.com/news/national/2024/07/10/782931.htm
- https://www.carriermanagement.com/features/2014/09/16/129134.htm
- https://insurity.com/platform/premium-audit
- https://audit1.com/carriers
- https://davies-group.com/northamerica/premium-audit/
- https://www.smlcapitaladvisors.com/guide-premium-audit-vendors/
- https://www.ncci.com/Articles/Pages/AIS2026-SOTL-Guide-Redirect.aspx
- https://riskandinsurance.com/workers-compensation-remains-profitable-as-premium-dips-and-severity-climbs/
- https://ocmiworkerscomp.com/2026/07/workers-comp-premium-audit-what-to-expect-and-how-to-prepare/
- https://boost-usa.com/blog/compliance-tracking-for-loss-control-recommendations-in-insurance/
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=11665
- To verify: FCC 24-17 (AI voice under the TCPA); NAIC AI Model Bulletin adoption tracker; NYDFS Circular Letter No. 7 (2024); ERGO/NEXT 2025 deal; AM Best/Conning MGA reports.
