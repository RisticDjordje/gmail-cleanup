# Bereavement Desk / Death-Ops Rail: AI for deceased-customer operations at US financial institutions

**One-liner (revised):** Don't sell estate verification. Sell credit unions and community banks the two things around it: data clean-up before death and loss avoidance at the moment of death. That means AI remediation of legacy beneficiary and titling records, plus an early death signal fed by funeral homes. Both are priced per member or per account. A US "tell us once" rail stays a long-term option, not the plan.

> **Research caveat.** Live verification was not possible for any stage of this analysis: the deep dive, all three red teams and this verdict. The shared WebSearch budget was used up, and WebFetch egress was blocked (including phillips-cohen.com, empathy.com and deathnotificationservice.co.uk). All funding figures, competitor statuses and statute details come from model knowledge and must be re-verified.

## Verdict: PROMISING WITH PIVOT, 40/100

| Dimension | Score | Note |
|---|---|---|
| Market size | 5 | About $1.4-1.8B in-house labor pool (estimate), mostly not realizable; the wedge SAM is about $100-300M |
| Pain intensity | 4 | Executors feel acute pain but don't pay. For institutions it is a cost of about 1.5 FTE spread across part-time staff, so nobody can be cut |
| Whitespace | 6 | No US AI-native player on the institution side has been found (unverified); the UK has Exizent, Settld and Life Ledger |
| AI leverage | 6 | Strong on archaeology work: scanned signature cards and document classification. Weak where authenticity has to be confirmed at the source |
| GTM feasibility | 3 | 9-18 month credit-union procurement, critical-vendor third-party risk review, core-integration tolls, $13-85k ACV |
| Defensibility | 4 | The court graph and the network are both slow to build; core vendors and intake vendors can ship the feature |
| Founder fit | 4 | No license needed if the company never touches funds. SOC 2, GLBA, UPL and indemnity demands burden a small team |

Red team: competition said **serious concerns**, GTM said **kill**, feasibility said **serious concerns**.

## Thesis (revised)
About 3.1M US deaths a year (CDC, 2023 final) create roughly 15-19M institution-level deceased-customer cases (estimate). The deep dive's bull case pairs a per-case "bereavement desk" with a retention fee and a network. It fails on the numbers. The simple POD and joint cases it wants to automate cost institutions about $10-35 in-house, against a $40-60 price. The costly probate and trust cases are left to staff, and staff still approve every payout. Statutes also discharge holders who pay in good faith (e.g. Cal. Prob. Code 13106), so verification is not a large loss budget.

The money that does exist sits on either side of the death case:
1. **Before death.** Beneficiary and titling data is often missing or locked in 1990s-2010s scanned signature cards. Fixing it is pure AI archaeology. It can be priced per member (about $0.30-1.00 per member per year), which gives a 130k-member credit union a $40-130k ACV. It sells as protection of the deposit franchise, since a named POD heir is where retention is actually decided.
2. **At the signal.** Institutions learn of deaths weeks late, sometimes only through a Treasury reclamation notice for post-death federal benefit payments (31 CFR 210). By then former POA agents or joint holders may have drained the account. A death signal fed by funeral homes and bureau data, delivered as a batch file, fits a fraud/BSA budget whose ROI shows within a quarter.

Funeral homes (about 19k, per NFDA) are the right intake node. That is the Columba model from Germany, and it brings executors in at near-zero acquisition cost. A verified estate packet API for card issuers and deceased-account agencies comes only after density in a few states. The realistic exit is LexisNexis, a core vendor, or Early Warning Services / The Clearing House.

## How the work is done today
- **Signal.** A family member calls or walks into a branch, a Treasury reclamation notice arrives, or a bureau or LADMF match turns up. The public Death Master File has excluded state-reported deaths since 2011.
- **Freeze.** Staff flag the account as deceased in the core (Symitar, KeyStone, DNA, SilverLake), then stop ACH and autopays.
- **Ownership archaeology.** Staff read scanned signature cards to determine JTWROS, POD/TOD or trust titling.
- **Documents.** The family supplies a certified death certificate (they typically buy 5-15 copies), plus letters testamentary, a small-estate affidavit under a state threshold, or a trust certification. Brokerage transfers add a medallion signature guarantee.
- **Verification.** Facial review, sometimes a call to the court clerk, and informal next-of-kin payouts under internal limits of about $10-25k. Those informal payouts are where wrongful payouts cluster.
- **Tools.** The core, OnBase imaging, Excel, fax and phone; essentially no AI. Large banks run dedicated estate units and offshore captive teams. Smaller institutions spread the work across 2-15 part-time staff.

## TAM (estimates)
- **Relationships.** About 5.9 institution relationships per decedent, or about 17-18M cases a year.
- **Labor pool.** About $1.4-1.8B a year: deposits about $560M, brokerage and retirement about $560M, cards about $125M, mortgage about $200M, insurers about $130M.
- **Per-case TAM** (30-50% of labor): about $0.6-1.0B. But the top 10 banks hold about half of deposits, and the card and brokerage oligopolies run their own estate units.
- **Wedge SAM** ($1-20B institutions, about 1,300-1,500 logos): $100-300M.
- **Pivot SAM** (per-member beneficiary remediation): about 75-85M unique credit-union members plus community-bank customers. At $0.30-1.00 per member per year that is about $50-150M, plus fraud/death-signal monitoring.
- **SOM in 5 years:** $10-25M ARR. Anything venture-scale depends on the network or on large FIs.

## Competitors
| Name | Type | Threat |
|---|---|---|
| In-house estate units (Chase, BofA, Wells, Fidelity, Schwab, Vanguard) | Incumbent | Hold most high-value volume; will automate in-house |
| Phillips & Cohen, DCM Services | Deceased-account recovery specialists (card issuers and lenders) | Already serve the card "second side", paid on contingency (unverified) |
| LexisNexis Risk, Experian, TransUnion, Equifax | Death data | Can bundle "estate verification" into data contracts |
| Fiserv, Jack Henry, FIS, Corelation, Q2, Alkami | Core and digital banking | Own the deceased flag, titling and portal; collect integration tolls |
| Eltropy, Glia, interface.ai, Posh, Kasisto | Credit-union conversational AI | Can add a "report a death" intent as a sprint |
| Pega, Salesforce FSC/Agentforce, ServiceNow | Horizontal case management | Bereavement is a template use case at large FIs |
| ICE MSP, Computershare, ServiceLink | Mortgage servicing | Gatekeep successor-in-interest and HECM workflows |
| Empathy (~$90M reported), Atticus, Alix, EstateExec | Executor-side startups | Empathy is already paid by insurers and employers; most likely to pivot to the institution side |
| Exizent, Settld, Life Ledger (UK); Closure (NL); Columba (DE) | Foreign templates | Possible US entrants |
| Early Warning Services / The Clearing House | Bank consortia | Could build the rail by fiat; natural acquirer |
| Firstsource, Genpact, Conduent, EXL | BPOs | Will add LLMs and price as AI-enabled bereavement services |

## Why now
- **Demographics.** Boomers are 62-80, and deaths are trending toward about 3.5M a year by the late 2030s.
- **Wealth transfer.** Cerulli projects about $124T through 2048.
- **AI capability.** LLMs and vision can now read messy scanned signature cards.
- **Rising fraud.** Generative-AI forgery is making facial document review unreliable, which strengthens a source-side death signal.
- **Counter-signals.** CFPB enforcement was curtailed in 2025. Deposit-flight urgency faded as rates fell.

## Wedge and business model (pivot)
1. **Beneficiary and titling remediation**, sold to $1-20B credit unions. A fixed-fee extraction project from scanned cards into structured core fields, then SaaS campaigns through Banno, Q2 or Alkami asking living members to add or confirm POD beneficiaries, priced per member per year. No payout liability, no contact with grieving families, and a clean data-quality story for compliance.
2. **Death signal and loss avoidance.** Funeral-home consent capture on days 1-3 plus a bureau-data fusion, delivered as a batch file. It flags post-death ACH, reclamation exposure and expired-POA activity. Priced per account monitored, or $5-15 per notice.
3. **Later**, a light post-death intake module (partner with Eltropy or Glia rather than compete), then a packet API for card issuers and recovery agencies.

**Rules throughout:** never touch funds and never advise on probate paths, to avoid money-transmitter licensing and UPL.

## What's good
- A real, unglamorous, under-tooled workflow with essentially no AI. Demographics guarantee rising volume.
- Ownership archaeology is a strong AI fit that cores and chat vendors aren't built for.
- The funeral-home channel solves the executor acquisition problem that executor-side apps never cracked.
- A proven foreign template (UK DNS, Columba, Closure) with no US equivalent found.
- Multiple budgets (deposit franchise, fraud/BSA, operations) make a multi-threaded sale possible.

## What's bad (strongest skeptic points)
- **GTM (kill).** The operations saving is about 1.5 FTE spread across 3-8 part-time staff, so nothing is bankable. Willingness to pay is about $20-40k ACV against $60-150k CAC. Only about 1,300-1,500 logos are winnable. Retention is about $90k of net interest income a year per $2B credit union after a 12-month test, and an upsell to a grieving family raises UDAAP risk. Merger churn runs about 3-4% a year.
- **Feasibility.** Pricing inversion: in-house cost for simple cases is below the fee. Keeping liability with the institution kills automation. Small-estate statutes already shield payers in good faith. UPL exposure on path selection. Generative AI makes documents forgeable, so authenticity needs source access (EVVE, LADMF certification, dockets) that is gated. SSA death-file errors (reported April 2025) could freeze living customers.
- **Competition.** The volume is concentrated at banks that will never accept a startup's packet. Card estates are already outsourced to Phillips & Cohen and DCM. Mortgage work lives inside ICE. The UK DNS only notifies; it never became shared verification.

## Non-obvious insights
- The budget isn't the death case. It is the data before death (beneficiaries) and the signal at death (reclamation and fraud losses).
- Statutory good-faith discharge means verification accuracy is worth less to institutions than the pitch assumes. Consistency on informal payouts below the threshold is what matters.
- The UK rail required an oligopoly. The US version will be built either top-down by EWS/TCH or bottom-up through funeral homes, not through banks.
- Generative-AI forgery flips the value from reading documents to signals verified at the source.

## Cheapest validation test (2 weeks, under $1k)
- Run 20 structured calls via LinkedIn Sales Navigator (about $100) with heads of deposit operations, BSA or fraud at $1-10B credit unions in Florida, Arizona and Ohio. Ask for:
  - last year's Treasury reclamation write-offs;
  - the share of accounts with no structured POD data;
  - time-and-motion on 10 recent deceased cases.
- Offer 3 credit unions a free extraction run on 200 redacted signature-card scans (LLM cost about $50) and measure field accuracy.
- Call 10 funeral homes and 1 software vendor (Passare or Gather) about willingness to capture next-of-kin consent for notification.

**Kill if:** reclamation and fraud losses are under about $50k a year per institution, POD gaps are under 15%, or none of the 3 will name a budget line at $0.30 or more per member.

## Unresolved questions
- Exizent, Settld or Closure: any US launch? Is Empathy selling to banks yet?
- Do Jack Henry, Fiserv, Eltropy or LexisNexis have bereavement or beneficiary modules on their 2026-27 roadmaps?
- Private access to EVVE Fact of Death; Do Not Pay status after its pilot.
- Actual size of reclamation write-offs at credit unions.
- Will a top-10 issuer or a recovery agency pay per verified packet?

## Sources (not fetched this session; reference only)
- https://www.cdc.gov/nchs/fastats/deaths.htm
- https://www.cerulli.com/press-releases/cerulli-anticipates-124-trillion-in-wealth-will-transfer-through-2048
- https://www.deathnotificationservice.co.uk/ ; https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once
- https://www.ecfr.gov/current/title-31/subtitle-B/chapter-II/part-210 (reclamation)
- https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-G/section-1026.11 (Reg Z estates)
- https://www.consumerfinance.gov/rules-policy/regulations/1024/ (Reg X successor in interest)
- https://www.ntis.gov/ladmf/ladmf.xhtml ; https://www.naphsis.org/evve-fod ; https://fiscal.treasury.gov/dnp/
- https://www.federalregister.gov/documents/2023/06/09/2023-12340/interagency-guidance-on-third-party-relationships-risk-management
- https://leginfo.legislature.ca.gov/ (Cal. Prob. Code 13100-13116)
- https://www.phillips-cohen.com/ ; https://www.dcmservices.com/ ; https://www.empathy.com/ ; https://www.exizent.com/
- https://www.columba.de/ ; https://www.closure.nl/ ; https://lifeledger.com/ ; https://nfda.org/news/statistics
