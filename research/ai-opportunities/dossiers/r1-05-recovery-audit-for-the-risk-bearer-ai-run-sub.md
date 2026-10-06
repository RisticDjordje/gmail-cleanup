# Recovery Audit for the Risk-Bearer (AI-run subrogation lookback)

**One-liner:** Subrogation recovery on contingency, run by AI, for the parties that own the loss dollars. As originally pitched it is a lookback sold to fronting carriers and reinsurers. The stronger version drops the TPA middleman: a white-label recovery engine *for* TPAs, plus direct third-party damage recovery for asset owners (utilities, DOTs/municipalities, fleets).

> **Evidence caveat:** No agent in this chain (scout excepted) could reach the web. The shared 200-call WebSearch budget ran out and WebFetch was egress-blocked. My own spot-check searches were refused for the same reason. Every number below is model knowledge or explicit arithmetic. Items marked [verify] must be checked before acting.

## Verdict & scores

| Dimension | Score (1-10) | Note |
|---|---|---|
| Market size | 5 | Realistic fee pool is low hundreds of $M/yr, not the scout's $2-4B |
| Pain intensity | 5 | Recoveries are "found money", so nobody's job is on fire |
| Whitespace | 5 | No AI-native contingency recovery firm found, but TPAs, BPOs and detection vendors surround the space |
| AI leverage | 6 | File triage and demand drafting are strong; negotiation and licensed sign-off stay human |
| GTM feasibility | 3 | Three-party sale, TPA conflict, audit rights don't grant authority to act on files |
| Defensibility | 3 | Services moat; incumbents can cut their contingency rate at will |
| Founder fit | 3 | Needs a NASP-credentialed ex-carrier leader, adjuster licensing, SOC 2, working capital |

**Overall: 40/100. Verdict: promising_with_pivot.** As pitched (sell a lookback to fronts and reinsurers) it is close to a pass. The pivots below are worth a 2-week test.

## Revised thesis
The delegated-authority stack (MGA + front + reinsurer + TPA) does split the file from the economics, but a startup cannot sell into that split. Fronts are lukewarm sponsors who earn a fee on premium. Reinsurers lack the authority to act on files. TPAs earn their own 15-25% subrogation fee and will resist. The best AI-native play goes where **one party holds both the file and the economics, and liability is documented by a third party**:
1. **Asset-owner third-party damage recovery**: utilities and telecoms (excavator strikes against 811 tickets, vehicle-into-pole), municipalities and DOTs (guardrail and signal strikes with police crash reports), fleets and lessors. No TPA, no deductible or made-whole split, no waiver-of-subrogation issue. The adverse party is usually auto- or GL-insured. Files are high-frequency and $2-20K, the exact size where AI collapses cost per file.
2. **White-label recovery engine for mid-tier and AI-native TPAs**, priced as a revenue share of the TPA's own subrogation fee. This turns the gatekeeper into distribution.
3. Keep **run-off and receivership lookbacks** as opportunistic, deal-by-deal work, and **FNOL evidence preservation** (48-hour spoliation letters plus CPSC recall matching) as a later module for product and fire subrogation.

## How the work is done today
- Adjusters with 100-150+ pending files tick a "subro potential" flag in Guidewire, Duck Creek, Origami or a TPA platform. Rule engines (Shift, CLARA, CCC/Safekeep) add keyword flags.
- Senior subrogation specialists ($70-110K) spend 2-6 hours per file, so files under about $10-25K get dropped.
- Carrier vs. carrier claims go through Arbitration Forums E-Subro Hub (Guidewire integration Dec 2024). Others become demand letters, then counsel (Cozen, de Luca Levine, Grotefeld Hoffmann, MWL) at 25-33% contingency.
- Product and fire claims need the failed part preserved and notice given within 1-3 weeks; otherwise spoliation kills them.
- WC third-party recovery is mostly lien assertion after the worker's PI lawyer sues.
- Utility and DOT damage today: in-house damage-claims clerks or specialist vendors [verify names and share]. Many strikes are never billed.

## TAM (estimates)
- **Delegated channel:** $100-128B MGA premium (sources conflict: $102.8B vs $128B) x 55-60% loss ratio, times 35-45% subrogation-relevant lines (probably generous given E&S casualty and catastrophe mix), times a 1.5-3% incremental recovery rate, gives about $300M-1B of recoveries. At 20-25% that is **$60-250M/yr in fees**, plus a $75-300M one-time lookback pool. The skeptics argue the AF-eligible incremental slice is only tens of millions.
- **Self-insured WC liens:** about $30-75M fees. **Run-off and receiverships:** about $20-60M, lumpy.
- **Asset-owner damage recovery:** CGA DIRT counts about 200K underground damages a year [verify], plus pole, guardrail and signal strikes. I estimate $1-3B of repair cost with weak recovery, giving a $50-200M fee pool (low confidence).
- **SOM:** $20-50M revenue in 5-7 years. $50-100M+ needs the adjacent pools or a software line.

## Competitors

| Name | Type | Relevance |
|---|---|---|
| Sedgwick | TPA incumbent | Holds files, sells subrogation (~15%), gen-AI tooling; gatekeeper and competitor |
| Crawford/Broadspire, Gallagher Bassett, CorVel, ESIS | TPA incumbents | Subrogation fee lines an outside auditor cannibalizes |
| EXL, WNS (Capgemini), Genpact | Offshore BPO | Already sell cheap subrogation file review and lookbacks |
| Cozen O'Connor + subrogation boutiques | Law firms | Own litigated product, fire and complex property |
| CCC (Safekeep), Shift, CLARA, Charlee.ai | AI detection features | Detection only; shrink the "missed" pool |
| Guidewire / Duck Creek / Origami / Riskonnect | Systems of record | Native AF integration; can add LLM triage |
| Arbitration Forums | Rails | Enabler; covers signatories only, has caps and exclusions [verify] |
| Accelerant | Front/exchange | Owns cross-MGA data; likely to build in-house |
| Avallon AI (YC), Reserv, Five Sigma, Pace | AI-native | Claims agents and AI TPAs could add recovery execution as a feature |
| EvenUp / Eve / Supio | Adjacent | Demand-package generation is commoditizing |
| Optum/Equian, Machinify/Performant, Rawlings | Health recovery | Prove contingency recovery scales and consolidates |
| PRGX | Analog | Cautionary: recovery-audit revenue stagnated as clients fixed their processes |

## Why now
LLMs read whole unstructured files (notes, police reports, leases, invoices) for cents. The MGA/fronting stack is about $100-128B / about $30B. AF and Guidewire offer programmatic filing rails. Florida HB 837 cut the limitation period to 2 years, so inventory expires faster. Adjuster attrition is thinning desks. Rising repair costs make each recovery larger.

## Wedge & business model
- **Pivot wedge:** one mid-size utility, telecom/fiber builder or county DOT. Ingest 24 months of damage work orders, then match them to state crash reports and 811 tickets, identify the carrier, draft the demand and chase payment. Price: contingency of 20-30%, plus an optional small platform fee to smooth cash.
- **P&C wedge (secondary):** a white-label engine for 1-2 regional or AI-native TPAs at 30-50% of their subrogation fee, or a per-demand fee.
- **Original wedge:** a front-sponsored lookback at 20-25%, go-forward work at 12-18%. Gross margin is 35-45% in year 1, 60-70% at scale only on the AF slice. Working capital needed is $1.5-4M.

## What's good
- No budget fight: fees net out of recovered dollars.
- AI genuinely removes the 2-6 hour per-file cost that made small files uneconomic.
- Lookback recoveries are clearly incremental, so there is no attribution fight there.
- Schedule P salvage-and-subrogation ratios offer a free benchmark for lead generation.
- Sharp diligence insights: spoliation kills product claims on lookback, waiver-of-subrogation clauses kill yield, and MGA incentives depend on profit commission.
- The asset-owner pivot avoids nearly every structural objection.

## What's bad (skeptics, by lens)
- **Competition:** The easy, documentary claims are already swept by TPAs, E-Subro Hub and CCC. The truly missed claims (product, fire) need evidence and lawyers that AI can't replace. Catastrophe losses and liability-heavy MGA mix shrink the base. Offshore BPOs already offer cheap review that buyers mostly haven't bought, so incentives, not cost, are the bottleneck.
- **GTM:** Audit rights are not extraction rights. Fronts won't antagonize MGAs for a vendor. Each program means a new TPA system, data-sharing agreement and security review. First cash arrives 18-30 months after the first call. The lookback is one-time revenue (year 2 is roughly 30-50% of year 1). The buyer universe is about 50-100 logos. The founder lacks claims credibility.
- **Feasibility:** Reinsurers can't direct recoveries. Commercial deductibles and made-whole rules send the first recovered dollars to the insured, gutting the small-dollar thesis. Errors on limitation dates or deductible splits mean malpractice or class-action exposure. The residual missed pool is adversely selected toward ambiguous liability, where LLMs are weakest. Detection becomes a standard feature within about 24 months.

## Non-obvious insights
1. The originally pitched buyer (front or reinsurer) has the motive but no authority. The TPA has the authority but a conflicting motive. Pick a customer who has both: the asset owner.
2. Police crash reports and 811 tickets are structured third-party liability evidence. They remove the hallucination risk that kills LLM liability inference on adjuster notes.
3. The PRGX analog means any audit model shrinks its own pool. Build go-forward monitoring (recurring feeds from work orders) from day one.
4. For P&C, "subrogation ratio vs. peers" from Schedule P could become a line item in program audits. Owning that benchmark is the only real moat.
5. WC is lien protection via docket monitoring, not demand drafting.

## Cheapest validation test (2 weeks, <$1k)
- Call 15 utility and telecom damage-claims managers and county/city risk managers (find them on LinkedIn; AGRiP and CGA member lists). Ask: annual third-party strike count, percentage billed, percentage collected, current vendor and fee.
- Pull 1 month of public crash data (several states publish open crash datasets with object-struck codes) and estimate guardrail and pole strikes per county.
- In parallel, interview 5 regional TPA subrogation leads on whether they'd pay a revenue share for a white-label engine.
- **Kill** if most asset owners already use a vendor at 15% or less and collect over 70%, or if TPAs refuse revenue share.
- **Go** if 3+ will share 6-12 months of work-order data under NDA for a free recovery estimate.

## Unresolved questions
- Who the incumbent infrastructure damage-recovery vendors are, and their fees and share [verify].
- Whether standard TPA service agreements make subrogation exclusive to the TPA.
- AF's current forum caps and product-liability exclusions, and whether small E&S GL carriers are signatories.
- Real lookback yield net of deductibles, waivers and limitation periods (needs one 2-5K-file pilot).
- Whether Avallon, Reserv, Five Sigma or Pace already ship contingency recovery execution.
- State rules capping contingency contracts for public entities, and collection-agency licensing for pursuing uninsured motorists.

## Sources (scout and deep-dive citations; not re-fetched this run)
- https://home.arbfile.org/about-us
- https://www.guidewire.com/about/press-center/press-releases/20241212/modernize-subrogation-with-arbitration-forums-new-guidewire-cloud-integration
- https://insurance-edge.net/2025/05/08/clara-analytics-uses-ai-to-make-subrogation-advances/
- https://www.shift-technology.com/resources/reports-and-insights/ai-for-subrogation-recover-more
- https://www.ycombinator.com/companies/avallon-ai
- https://www.sedgwick.com/claims-administration/risk-and-recovery/subrogation-claims/
- https://www.theinsurer.com/program-manager/news/conning-naic-data-shows-us-mga-premium-volume-hit-1028-billion-in-2025-2026-07-29/
- https://www.insurancebusinessmag.com/us/news/excess-surplus/us-mga-market-swells-to-128-billion-as-specialization-reshapes-distribution-584067.aspx
- https://www.insurancebusinessmag.com/us/news/property/unrated-reinsurers-creep-into-30bn-us-fronting-market-591776.aspx
- https://www.flsenate.gov/Session/Bill/2023/837
- https://app.leg.wa.gov/wac/default.aspx?cite=284-30-393
- https://commongroundalliance.com
- https://www.subrogation.org
- https://www.mwl-law.com
