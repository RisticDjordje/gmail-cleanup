# r5-6: Not-at-Fault Claim Manager (B2C auto claims)

**One-liner:** A self-help AI agent plus licensed-appraiser review that turns a not-at-fault driver's third-party property claim (diminished value, loss of use, rental, out-of-pocket costs) into an evidence package and demand letter the at-fault carrier will pay, with a pre-filled small-claims packet as the backstop. A compliant bodily-injury (BI) routing line is the optional expansion.

## Scores by founder profile

Reference points: the best profile-0 idea so far (SPA recovery) scored 54, and 70+ means genuinely compelling.

| Profile | Score | Why |
|---|---|---|
| 0: technical outsider, little capital | **38** | Has no money for the legal memo, licensed comp data, appraiser network or E&O cover, and can't outbid PI firms on accident-intent search. Ends up competing with SnapClaim on price. |
| A: technical founder, $3-5M seed, domain cofounder | **51** | Can pay for the legal structure (attorney network or an AZ ABS law firm), the data licenses, outcome testing and a brand. BI routing is the only route above $50M, and it changes what kind of company this is. |
| B: domain insider (ex-adjuster, MV appraiser, PI-firm ops) | **46** | Removes the licensing dependency, knows carrier playbooks and has shop relationships. Still stuck with one-time CAC and the ~$350 price ceiling. A good lifestyle business to $5-15M. |
| C: search fund buying an appraisal firm | **38** | The targets (independent DV appraisers) earn well under $1M EBITDA and their value sits in the owner's licenses. Too small to buy and roll up. |

None of the four reaches 54. A Profile A founder with a Profile B cofounder comes closest. The steelman scores that pairing 62, but only if BI routing proves out.

## Thesis

The at-fault carrier owes the not-at-fault driver under tort law. Every state except Nebraska allows third-party DV [S]. The carrier owes the claimant no first-party good-faith duty and almost never volunteers DV or loss of use. Lawyers ignore property-only claims worth $1-3k. Small-claims court is built for people representing themselves, and defending there can cost a carrier more than the claim.

The product sells evidence plus self-help documents at a flat fee. It never negotiates on contingency, because courts treat adjusting a third-party claim for the claimant as the practice of law [S]. Volume is about 6M third-party property claims a year at about $6,770 average, roughly $40B of flow [S, secondary aggregator]. About 2M of those are DV-eligible [E].

The honest ceiling for property-only B2C is $20-50M ARR. Getting past $100M requires becoming the consumer intake front-end for injury law.

## Workflow today

1. The driver files with the at-fault carrier, or uses their own collision coverage and lets the carrier subrogate. On the subrogation path, DV and loss of use are usually lost.
2. The adjuster writes the estimate in CCC or Mitchell and often steers the repair to a DRP (direct repair program) shop. Rental is capped at a "reasonable" duration and rate, and loss of use is often not offered.
3. DV is offered only on request, usually as a low formula number (the "17c" method from Georgia's Mabry case) [M].
4. A driver who pushes back buys a $350 appraisal (SnapClaim [S] or human firms), writes a demand, haggles, and then takes a partial payment or gives up.
5. Small claims is the underused backstop. In most states the claimant has to name the at-fault driver rather than the carrier [M].
6. About 29 BI claims arise per 100 PD claims [S], and those go to PI firms that pay $950-5,000 in marketing per signed auto case [S].

## TAM (bottom-up)

- **DV:** about 2M eligible claims × $1-3k supportable DV gives $2-6B a year of potential DV, mostly unclaimed [E].
- **Fees:** 5% penetration × $250-350 = $25-35M. 15% penetration gives about $75-100M. With total loss and loss of use added, the serviceable pool is $150-400M a year.
- **BI routing:** about 1.7M BI claims a year. Routing 30-60k signed cases at $1-2k each gives $30-120M, but referral-fee rules constrain it.
- **Headline:** the fee TAM is about $0.5-1.5B with BI included, and the property-only SAM is about $150-400M.

## Competitors

| Player | What they do | Scale |
|---|---|---|
| SnapClaim | AI DV and total-loss reports, $350 flat. Pays shops $50 per referral plus $50 to AASP chapters (Sept 2026) | No venture round found |
| Mighty | AI platform for injured consumers to negotiate claims without a lawyer. Publishes DV content | About $15-26M raised historically |
| InsurifyAI, SetCalc, ClaimsMaximizer | AI demand letters, damages calculators, state-by-state DV SEO | Small, unknown |
| Collision Claims Advisors, IAS, Auto Praise, MYDVAC, TigerDV, Appraisal Engine | Human appraisal-to-demand chain. Some are adding AI | Small private firms |
| PI law firms | Do PD free as a loss-leader. Dominate DV search results | Very large aggregate ad spend |
| EvenUp | AI demand packages for PI firms. A partner or acquirer, not a direct competitor | $385M raised, $2B+ valuation (Oct 2025) [S] |
| CCC, Mitchell, Solera, Tractable, Ravin | Carrier-side estimating and valuation | Public, PE-owned or venture-backed |
| Free LLMs | Demand-letter drafting | Free; caps what customers will pay for text |

## Wedge, then path to scale

**Wedge:** third-party DV and loss of use for late-model cars with repairs over $3k, launched in GA and TX. The free entry point is a "What are you owed?" estimate from the repair estimate plus VIN. The paid product is a $199-299 package: a licensed-appraiser-reviewed DV report, a demand letter in the consumer's name, follow-ups the consumer approves, and a small-claims packet. Distribution is DV-intent SEO and independent (non-DRP) shops.

**Path to scale:**
1. **Years 0-2, $1-5M:** win on outcome data, meaning which evidence moves which carrier off its formula.
2. **Years 2-4, $10-25M:** add total-loss rebuttal for equity owners, rental disputes, and white-label distribution through credit unions and auto clubs.
3. **Getting past $50M** needs one of:
   - (a) BI routing through an AZ ABS or Utah-sandbox law firm, or compliant flat advertising fees;
   - (b) a B2B line serving fleet, lease and rental owners, where the owner holds the claim and UPL does not apply;
   - (c) a general consumer-vs-insurer claims OS.

The probability of reaching $100M is about 10-15% even for a well-funded team.

## Steelman summary

- Capital already flows to the plaintiff side of auto claims: EvenUp is valued above $2B. Nobody owns the consumer at first notice of loss, which is upstream of both the law firm and EvenUp.
- A cash-positive $250 property package is the cheapest possible way to acquire injury cases worth $1-5k each.
- Carrier AI is producing faster, lower first offers, which widens the gap the consumer side can capture.
- "One-time purchase" is also true of PI law, which is a huge industry.
- The UK accident-management and credit-hire industry (more than £900M as early as 2008) shows that not-at-fault recovery can be an industry in its own right.
- Steelman score for an A+B team: 62. Reaching 70 depends on median net recovery above $800 and BI conversion of at least 10%.

## Skeptic summary

- **Crowded and cheap:** SnapClaim, InsurifyAI, Collision Claims Advisors and DV appraisers adding AI. No funded winner exists, which more likely signals a low ceiling than an open field.
- **Search is expensive:** PI firms, whose cases are worth about 10x a package, own DV search terms. SnapClaim is already buying the shop channel.
- **The small-claims lever is softer than claimed:** the "carriers settle" evidence comes from sellers, the claimant usually has to sue the at-fault driver personally, and no recovery-rate data exists.
- **Texas's software carve-out (81.101(c)) covers products, not services** [V]. An agent that manages the back-and-forth looks like a service, and most launch states have no equivalent statute.
- **Liability tail:** an agent-guided release could waive an injury claim the driver didn't yet know about. Separately, the FTC's DoNotPay order shows marketing claims need outcome evidence behind them [V].
- **One-time CAC under about $150** against injury-case ad budgets.
- Skeptic scores: 0 = 37, A = 48, B = 45, C = 38.

## What's good

- It sits on a real, mostly unclaimed tort entitlement ($2-6B a year of DV) that carriers do not volunteer.
- Claimants keep the money: no lienholder capture and no appraisal-clause cost split, unlike the total-loss version (r4-4, scored 39).
- There is a clear, defensible legal structure: flat-fee evidence plus self-help, with escalation to licensed parties.
- Carrier-side automation keeps widening the underpayment gap.
- An outcomes database (carrier × state × evidence × stage) is a real data moat if it gets to volume.
- It is a natural feeder for injury-law economics and a plausible acquisition by EvenUp or a PI platform.

## What's bad

- Report generation is a commodity (SnapClaim at $350, free LLMs), so there is no pricing power on the core artifact.
- One-time purchase, so CAC has to be recovered on the first sale, against PI firms bidding on the same search terms.
- The core value proposition (carriers pay before court) is unmeasured.
- Contingency pricing, the one model that scales with recovery, is off-limits because of UPL rules.
- Getting past $50M means becoming an injury-law intake business, with referral-fee, ABS and reputational risk.
- Human appraisers have to sign reports in states like NC, and E&O cover adds fixed cost to a $190-contribution unit.

## Best founder profile and why

**A technical founder (Profile A) with a domain cofounder who is a licensed MV appraiser or an ex-PI-firm operations lead (Profile B).**

- The seed pays for what Profile 0 cannot: the legal memo, an attorney network or AZ ABS firm, comp-data licenses, E&O cover, and the outcome testing needed for FTC-safe marketing claims.
- The insider removes the appraiser dependency and brings carrier playbooks and shop relationships.
- Without BI routing, though, the right framing is a $20-50M property business, not a venture-scale company.

## First 30 days

1. **Legal memo (week 1-2):** UPL and self-help carve-outs in GA, TX, AZ and NC, motor-vehicle appraiser licensing, and fee-sharing rules for BI routing.
2. **Concierge pilot:** take 30-50 paid DV cases ($199) from Reddit, DV-intent search ads and 10 independent shops in GA/TX. Use a contract licensed appraiser and a hand-built demand-plus-small-claims packet.
3. **Instrument every case:** carrier, offer at each stage, evidence used, time to pay, whether a lawsuit was filed, and whether there was an injury.
4. **Kill metrics, extended to 300 cases by day 90:** carrier pay rate before filing at least 50%, median net recovery above $800, BI-routable share at least 10%, and blended CAC under $150.
5. **Talk to the exits:** 5 PI firms (case-buying appetite, compliant structure) and 3 credit unions (member-benefit pull).
6. **Price test:** run a flat $249 against $199 plus a money-back guarantee.

## Sources

- https://en.wikipedia.org/wiki/Diminished_value
- https://www.propertyinsurancecoveragelaw.com/blog/public-adjusters-should-not-adjust-third-party-liability-claims-because-that-is-the-unauthorized-practice-of-law/
- https://www.flsenate.gov/laws/statutes/2023/626.854
- https://www.dfs.ny.gov/insurance/ogco2001/rg102131.htm
- https://www.ncdoi.gov/documents/agent-services/information-about-adjuster-motor-vehicle-damage-appraisers-and-public-adjusters/open
- https://texas.public.law/statutes/tex._gov't_code_section_81.101
- https://www.abajournal.com/news/article/robot-lawyer-website-donotpay-settles-ftc-claims-it-couldnt-deliver-on-promises
- https://snapclaim.com/pricing/
- https://www.grecopublishing.com/aasp0926memberbenefitspotlight/
- https://www.mighty.com/blog/insurance-settlement-claims-with-ai
- https://www.crunchbase.com/organization/thatsmighty
- https://insurifyai.app/
- https://www.collisionclaimsadvisors.com/how-to-file-a-diminished-value-claim/
- https://www.claimsmaximizer.com/blog/diminished-value-claim-by-state
- https://appraisalengine.com/appraiser-blog/future-diminished-value-claims/
- https://www.businesswire.com/news/home/20251007138957/en/EvenUp-Raises-$150M-Series-E-at-$2B-Valuation-to-Redefine-Personal-Injury-Law-and-Level-the-Playing-Field-for-Injury-Victims
- https://en.wikipedia.org/wiki/Accident_management
- https://www.ventavid.com/blog/insurance-claims-statistics-2026
- https://rankings.io/blog/personal-injury-lead-costs/
- https://www.gastleylaw.com/small-claims-court-diminished-value/
- Internal: dossiers/r4-4-acv-check-an-acv-assurance-layer-that-audits-.md, 03-round3-longlist.md

Evidence labels: [S] snippet, [V] verified this round, [M] from memory, [E] estimate.
