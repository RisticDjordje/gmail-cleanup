# Round 3 Longlist: Scouting Pool and Advisor Picks

Date: 2026-10-06

Six scouts each ran 8 searches and no page fetches. Ideas are numbered #0-#29 in pool order. Every figure marked as an estimate or "from memory" is unverified.

---

## Advisor pick rationale

I picked these from the scouts' pool text and our round 1-2 lessons. I ran no new searches, so every "no AI-native found" below still needs a deeper red-team search before it counts.

1. **#15 DisputeShield (FCRA defense for furnishers).** This fits our lessons best. It sells to the side that pays (labor costs plus FCRA lawsuits), and a vendor that sees disputes across hundreds of furnishers builds a data asset no single furnisher can copy. That fingerprinting of template-mill and CRO-prepared disputes compounds as it grows. The legal filter is already in the rules (12 CFR 1022.43(b)(1)(iii) and (f)), and the lead list is public (PACER, WebRecon). No license is needed. Two targeted searches found no AI-native on the receiving side. Main threats: Quavo extending from Reg E disputes, core-vendor bundling, and slow e-OSCAR integration. Verify via RMAI and ACA vendor lists.
2. **#25 Margin-first distribution ERP.** This takes our 54-point SPA idea and adds a path to a bigger market (estimated $2-5B ERP SAM). Funded players (Lark, Endeavor, Doss) all chose the agent-on-top-of-the-ERP position, and Lark says so explicitly. That leaves room for "own the margin data, then migrate." The wedge alone is the existing 54 idea, so the downside is roughly that score. The red team must test whether capital needs and wedge-to-ERP conversion sink it.
3. **#11 CRE evaluations and portfolio re-valuation for community lenders.** Evaluations below the threshold (about $500K, from memory, verify) and no-new-money renewals avoid the trap where licensees win. The lender carries the loss and already owns the predictive data (rent rolls, financials). The CRE maturity wall gives recurring quarterly re-valuation, not one-off work. Serviceable market is an estimated $0.8-2B. Bowery is adjacent (appraisals, not evaluations). Main risks: the cost of CoStar comps and bank sales cycles. Confirm the threshold rule with counsel.
4. **#5 ACV Check (B2B2C, first of two required).** The strongest consumer-side idea. The GAP issuer pays every dollar the carrier shaves off a total-loss value, so a portfolio-level B2B payer turns one-off consumer disputes into a recurring flow. CCC cannot bundle a feature that argues against its own carrier customers. No funded AI-native was found. Two critical checks: whether this counts as public adjusting state by state, and whether GAP contracts let the issuer contest the valuation. If both pass, the TAM and credit-union channel could beat 54.
5. **#12 AI-native fire protection design bureau.** Large design spend (estimated $1-2B). The scarce input is designer hours, not a license that we would have to hold (NICET designers sign, and we hire them). Logging every inspector comment builds a per-jurisdiction rule base, and optimized hydraulics can save enough pipe to pay the design fee. Crowding was NOT searched, so this is the highest-variance pick and the red team must search it first.
6. **#10 Outsourced RA/QA department for small medtech companies.** Large, unglamorous market (reachable slice estimated $1-2B). No license is needed to do regulatory affairs work. The 510(k) wins the customer and the post-market and QMSR retainer keeps it, which matches our "recurring prevention renews" lesson. Each client builds a design-and-risk history that is hard to move. Only software tools (i-GENTIC, Smarteeva) were found, not an AI-native services firm. Risks: services margins, E&O liability, and the need for named senior RA hires, which weakens founder fit.
7. **#13 Cost segregation through CPA firms (B2B2C, second required).** Market estimated at $1-3B. The 100% bonus depreciation restored under the OBBBA (from memory, verify) makes a study an immediate first-year cash event, and white-labelling through CPAs avoids becoming a lead-gen business. It is the weaker B2C pick: it fails the recurring lesson (one study per acquisition), and Cosegra and other low-cost providers already exist. It beat #6 (Add-On Recovery: small market, RefundAuto exists), #7 (unauthorized practice of law and public-adjuster risk), #8 (crowded, prices anchored at $0 by a free nonprofit) and #9 (unverified on every axis).

**Excluded under the hard filters:**
- #26 trade-credit MGA and #28 product-liability MGA: running an MGA needs insurance licensing and a carrier backing it.
- #3, #29: crowded with AI-native entrants.
- #14, #24: crowded categories.
- #4: CCC and Mitchell own the estimate format and are one feature away from bundling it.
- #16, #23, #18, #19: small buyer universes or markets.

**Close misses, in order:** #1 Co-op Autopilot, #20 OperatorOS, #0 Restoration supplements (public-adjuster exposure and several small players), #2 dealer warranty (ForgeDrive), #27 inventory exchange (best treated as a later add-on to #25).

---

## Scout 1: Analog mapper (#0-#4)

### #0 Restoration Claim Desk
- **Segment:** B2B (roofing and restoration contractors)
- **One-liner:** AI supplement agent that turns contractor photos, measurements, code citations and the carrier's Xactimate estimate into a line-by-line supplement package, priced as a share of approved dollars.
- **TAM:** est. $0.3-1B/yr in supplement fees.
- **Incumbents:** Verisk Xactimate/XactAnalysis; human supplement firms (The Estimate Company, IA Solutions); AccuLynx, JobNimbus, Leap; EagleView, Hover.
- **AI-natives:** Restoration AI; Netic ($23M Series B, general home services); Scooper AI; esxpress.org.
- **Insight:** The moat is cross-contractor data on how each carrier, region and adjuster responds to each line item, which only a contractor-side aggregator sees (the EvenUp move).
- **Distribution:** Roofing Facebook/YouTube communities, GAF/Owens Corning networks, CRM marketplaces, storm-tracking lead lists.
- **Red flags:** Several small players; Leap+Xactimate and Netic bundling risk; Verisk controls the format; state AOB/UPPA limits; storm-seasonal revenue. Self-score ~50-56.
- **Sources:** none listed per idea.

### #1 Co-op Autopilot
- **Segment:** B2B (non-auto durable-goods dealers)
- **One-liner:** Marketing autopilot whose ads are pre-qualified against each manufacturer's co-op/MDF rules and which files proof-of-performance claims automatically.
- **TAM:** est. $300M-1B/yr.
- **Incumbents:** Ansira/Sincro, BrandMuscle (payer side); PowerChord; local agencies; Motivated Marketing, COOPABLE (auto).
- **AI-natives:** AUTONOMi (auto); COOPABLE+Lotlinx (auto); none found for non-auto.
- **Insight:** Sell self-funding marketing, not backward co-op recovery; administrators work for brands, so the dealer side has no one.
- **Distribution:** Buying groups, distributor dealer meetings, manufacturer dealer-development teams, peer-group case studies.
- **Red flags:** Unclaimed figure ($14-35B, MediaPost) is old; many programs don't reimburse tool fees; programs can be cut; low ACV. Self-score ~48-55.
- **Sources:** none listed per idea.

### #2 Warranty Integrity for dealers
- **Segment:** B2B (heavy equipment, ag, truck, auto franchised dealers)
- **One-liner:** Voice capture of the technician's complaint/cause/correction story, scrubbed against OEM rules and telematics before submission, plus audit defense.
- **TAM:** est. $200-600M/yr SaaS.
- **Incumbents:** CDK, Reynolds, Tekion; e-Emphasys, IntelliDealer; Armatus; OEM portals; outsourced warranty admin.
- **AI-natives:** ForgeDrive.ai; Netflows360 (OEM side); Toma (adjacent); NextGen Warranty (content).
- **Insight:** Lead with heavy equipment/truck (higher claim values, telematics, slower DMS bundling); the claim is lost when the technician walks away.
- **Distribution:** Dealer-group 20 groups, equipment/truck dealer associations, warranty-manager communities.
- **Red flags:** DMS bundling (Tekion); ForgeDrive; OEM portal terms; thousands not tens of thousands of non-auto rooftops. Self-score ~46-52.
- **Sources:** none listed per idea.

### #3 Occupancy Cost Guard
- **Segment:** B2B (multi-unit tenants and franchise systems)
- **One-liner:** Annual CAM/opex reconciliation audits against the lease, disputes filed in window, landlord benchmark across tenants, sold through franchisors.
- **TAM:** est. $300M-1B/yr.
- **Incumbents:** Lease audit firms; Visual Lease, CoStar REM, Tango, RE BackOffice; CBRE/JLL/Cushman lease admin.
- **AI-natives:** LeaseMind (MightyBot); CAMAudit; LeaseGuard; Prophia (adjacent).
- **Insight:** Engine is commodity; moat is franchisor distribution and a cross-tenant landlord benchmark that acts like collective bargaining.
- **Distribution:** Franchisor partnerships, franchisee associations, multi-unit operator conferences.
- **Red flags:** Three AI entrants; lease-admin bundling; small recoveries per tenant; seasonality. Self-score ~40-46.
- **Sources:** none listed per idea.

### #4 Repair Plan Agent
- **Segment:** B2B (OEM-certified collision shops, MSOs)
- **One-liner:** OEM-procedure-compliant repair plan and supplement packet per repair order from teardown photos, scans and position statements.
- **TAM:** est. $200-500M/yr.
- **Incumbents:** CCC, Mitchell, Audatex/Solera, asTech/Repairify, OEM1Stop, ALLDATA.
- **AI-natives:** VaraFix; Tractable (carrier side).
- **Insight:** As carriers automate first estimates, the shop becomes the place scope is discovered; procedure records also sell as liability protection.
- **Distribution:** SCRS, 20 groups, certification networks, estimating trainers, MSO pilots.
- **Red flags:** CCC/Mitchell own the format and are one feature away; VaraFix; MSO DRP agreements. Self-score ~38-44.
- **Sources:** none listed per idea.

### Analog mapper observations
- Analog patterns reviewed (from general knowledge): EvenUp, Abridge, Tennr, Infinitus, voice front-door players (Assort, Hello Patient, Toma, Slang, Avoca), Owner.com, Basis/Rillet/Pilot, Crosby, Harvey/Hebbia, Anterior, Candid Health, Norm Ai, Sierra/Decagon, Pallet/Augment/Loop.
- Repeatable winner is EvenUp/Candid: sell to the fragmented side paid by a concentrated payer, run on every transaction, build cross-customer outcome data.
- Crowding found: duty drawback (Pax AI, Zollback, Freehand.ai); low-end cost segregation ($99 AI studies; OBBBA restored 100% bonus depreciation after Jan 19, 2025); fire-protection deficiency-to-quote (ZenFire AI, Uptick, ServiceTrade, Inspect Point, Essential, Deelo); CAM audits; dealer warranty (ForgeDrive); collision (VaraFix); auto co-op.
- Meta-signal: dev.to posts mass-produce these evidence-packet ideas; assume 2-5 small entrants per niche within months, so moat must be distribution or cross-customer data.
- None of the five clearly beats 54; best are #0 (~50-56) and #1 (~48-55).
- Unverified figures: co-op unclaimed, CAM overcharge, roofing claim counts, NADA rooftops, Zollback claims.
- Search budget 8/8, snippet-level.

---

## Scout 2: B2C agents (#5-#9)

### #5 ACV Check
- **Segment:** B2B2C (GAP issuers and credit unions; drivers direct)
- **One-liner:** Rebuilds the insurer's total-loss valuation line by line, sends a cited rebuttal, invokes the appraisal clause if needed; contingency on uplift.
- **TAM:** est. $0.5-1B/yr fees on >$50B settlement flow.
- **Incumbents:** CCC, Mitchell/Enlyte, Audatex/Solera; human appraisers (Total Loss Champions, Auto Praise, Appraisal Engine, IAS Claims Network, St Lucie Appraisal); GAP administrators.
- **AI-natives:** None funded found; adjacent XBuild, Avallon Labs.
- **Insight:** Every dollar shaved off ACV is paid by the GAP issuer, giving a B2B buyer a portfolio reason to audit every claim; CCC cannot bundle against its own customers.
- **Distribution:** Moment-of-loss SEO, Reddit/Facebook, body shop and tow-yard referrals, CUs via CUSOs and GAP administrators.
- **Red flags:** Public-adjuster rules by state; carrier hardening and appraisal costs; whether GAP contracts allow issuer to contest ACV; human appraisers adopting AI; uplift may be under ~$800.
- **Sources:** snapclaim.com, totallosschampions.com, auto-praise.com, totallossappraisals.com, iasclaimsnetwork.com, maine.gov, stlucieappraisal.net, insurancebusinessmag.com.

### #6 Add-On Recovery
- **Segment:** B2B2C (refi lenders, CUs; consumers)
- **One-liner:** Finds cancellable F&I add-ons in the free-look window and chases pro-rata unearned GAP/VSC refunds after payoff, trade, refi or total loss.
- **TAM:** est. $300M-1B/yr.
- **Incumbents:** Dealer F&I/asset-recovery staff; product administrators; RefundAuto, MyWarrantyRefund, gap-refund.com.
- **AI-natives:** RefundAuto, MyWarrantyRefund, gap-refund.com (funding unknown).
- **Insight:** Value is the last mile (obligor identification, refund math, follow-up) and the free-look audit as prevention at every loan.
- **Distribution:** "GAP refund" SEO, CUs/CUSOs, auto-refi marketplaces, finance creators, employer wellness.
- **Red flags:** Low per-case value; DIY tools; lienholder routing; indirect lenders resist; small TAM, better as a feature of #5.
- **Sources:** gap-refund.com, refundauto.com, mywarrantyrefund.com, dfi.wi.gov, revisor.mn.gov, builtin.com, businesswire.com.

### #7 Not-at-Fault Claim Agent
- **Segment:** B2C
- **One-liner:** Quantifies and negotiates diminished value, loss of use and out-of-pocket costs on property-only third-party claims at 20-25% contingency.
- **TAM:** est. $300-800M/yr.
- **Incumbents:** IAS Claims Network, Auto Praise, St Lucie Appraisal; PI firms; CCC, Mitchell.
- **AI-natives:** None found.
- **Insight:** Property-only third-party claims are too small for lawyers and outside appraisal clauses; agents can run the dealer-interview DV method at scale.
- **Distribution:** DV SEO, collision shop QR codes, rental counters, forums, CUs.
- **Red flags:** UPL and public-adjuster risk; carrier resistance and state limits; overlaps #5; all sizes estimated.
- **Sources:** iasclaimsnetwork.com, stlucieappraisal.net, auto-praise.com, maine.gov.

### #8 Charity Care Autopilot
- **Segment:** B2B2C (CUs, credit counselors, employers)
- **One-liner:** Screens hospital bills against the hospital's 501(r) financial-assistance policy, files and follows up; paid per resolved case by a sponsor.
- **TAM:** est. $50-200M/yr fee pool.
- **Incumbents:** Dollar For (free); Experian Health, Waystar; FairVisitHealth; Resolve, Justpaid, Sheer Health, Goodbill.
- **AI-natives:** FairVisitHealth; Sheer Health; Counterforce Health.
- **Insight:** Patients won't pay but their lender loses on delinquency; charity care is deterministic (income vs FPL).
- **Distribution:** CU/CUSO partnerships, credit-counseling agencies, HR benefits marketplaces.
- **Red flags:** Free nonprofit anchors price at $0; unproven sponsor willingness to pay; crowded; backward-looking.
- **Sources:** dollarfor.org, fairvisithealth.com, globenewswire.com, getclaimable.com, counterforcehealth.org.

### #9 Mortgage Cost-Down Agent
- **Segment:** B2B2C
- **One-liner:** Checks value-based PMI cancellation eligibility, packages the servicer request, and audits escrow analyses.
- **TAM:** est. $200-600M one-time over the cohort.
- **Incumbents:** Servicers (Mr. Cooper, Rocket, Wells Fargo); MI companies (MGIC, Radian, Enact, Essent, Arch, National MI); appraisal/BPO vendors.
- **AI-natives:** None identified (not searched).
- **Insight:** 2020-2024 appreciation created a cohort eligible for PMI removal that no one is paid to tell; a future lender is the natural sponsor.
- **Distribution:** "Remove PMI" SEO, finance creators, CUs/HELOC lenders, agent past-client lists.
- **Red flags:** Unverified on every axis; decaying cohort; FHA MIP excluded; servicers can add a self-serve button.
- **Sources:** none.

### B2C agents observations
- Search budget 8/8; snippet-level; sizes are estimates.
- Fragmented-counterparty agent categories have commoditized: CarEdge AI (~$40-50; 159,738 negotiations, $67.5M saved), CarWhere ($34.99/mo), 7+ contractor-quote checkers. Treat car-buying and bid checking as closed.
- Contingency works against large institutions running biased algorithms with >$1k stakes; total-loss valuation fits, hence #5 ranks first.
- Free nonprofits cap health pricing (Counterforce, Dollar For); Claimable sells to drugmakers. Medical bills/appeals are crowded.
- Homeowner claim advocacy hits public-adjuster licensing and has entrants (JustClaims, Pocket Adjuster).
- Add-on refunds are better as a second product inside #5's CU relationship.
- Suggested round-4 synthesis: "Auto Claim and Contract Value" platform for CUs, GAP admins and refi lenders combining #5, #7, #6. Verify GAP contract rights, PA/UPL exposure, average uplift, total-loss volume.
- Untested: VA disability claims, senior-living placement, consumer debt settlement.

---

## Scout 3: AI-native services (#10-#14)

### #10 Outsourced RA/QA for small medtech
- **Segment:** B2B
- **One-liner:** Fixed-fee 510(k)/De Novo packages, then a monthly retainer for complaints, MDRs, post-market surveillance and QMSR upkeep; AI drafts, RA specialists sign off.
- **TAM:** est. $3-6B US device RA/QA outsourcing; reachable SMB slice $1-2B.
- **Incumbents:** Emergo by UL, NAMSA, MCRA, Rook Quality Systems, Greenlight Guru, MasterControl, USDM, hourly consultants.
- **AI-natives:** i-GENTIC AI (software); Smarteeva (software).
- **Insight:** The 510(k) acquires the customer; the retainer is the money; a per-client design-and-risk graph makes later submissions cheaper and is hard to move.
- **Distribution:** FDA 510(k)/De Novo database mining, accelerators and device VCs, QMSR/PCCP content, test-lab and CRO referrals.
- **Red flags:** E&O liability; FDA timing; lumpy revenue and 60-75% margins; consultancies adding AI; need named senior RA; crowding lightly searched.
- **Sources:** meddeviceguide.com, vitalcompliance.com, advamed.org, smarteeva.com, usdm.com, ncbi.nlm.nih.gov (PMC12126487).

### #11 CRE evaluation and re-valuation desk
- **Segment:** B2B (community banks, CUs)
- **One-liner:** Interagency-compliant CRE evaluations for sub-threshold loans and no-new-money renewals, plus quarterly whole-book re-valuation.
- **TAM:** est. serviceable $0.8-2B.
- **Incumbents:** Clear Capital, LightBox, Valcre, regional appraisers, CBRE/Newmark valuation, in-house evaluators.
- **AI-natives:** Bowery Valuation (appraisals); Automax.ai.
- **Insight:** Evaluations in the exempt band (≤$500K, from memory) need no licensed appraiser, and the bank already holds the predictive data.
- **Distribution:** State bankers association endorsements, CCO peer groups, CUSOs, targeting high-CRE-concentration banks from call reports.
- **Red flags:** CoStar comps cost; slow bank sales and vendor diligence; AMCs/Clear Capital entry; Bowery; threshold rules unconfirmed.
- **Sources:** housingwire.com, tracxn.com, inven.ai, thefractionalanalyst.com.

### #12 Fire protection design bureau
- **Segment:** B2B (sprinkler and fire-alarm contractors)
- **One-liner:** Remote bureau producing permit-ready sprinkler layouts, hydraulic calcs and alarm drawings in days, priced per square foot.
- **TAM:** est. $1-2B/yr design spend.
- **Incumbents:** In-house NICET designers, offshore CAD shops, AutoSPRINK, HydraCAD, Revit add-ins, FPE firms.
- **AI-natives:** None verified (not searched).
- **Insight:** Bottleneck is designer hours and AHJ first-pass approval, not a PE stamp; per-AHJ comment logs and pipe optimization pay the fee.
- **Distribution:** NFSA/AFSA chapters, state associations, PE-backed fire platforms, AHJ permit portal outbound.
- **Red flags:** Crowding unverified; E&O; AHJ variability; scarce NICET reviewers; format integration; construction cycle.
- **Sources:** none.

### #13 Cost segregation through CPA firms
- **Segment:** B2B2C
- **One-liner:** Flat-fee AI-drafted, engineer-reviewed cost seg studies in ~48 hours, white-labeled through CPA firms.
- **TAM:** est. $1-3B/yr.
- **Incumbents:** Engineered Tax Services, KBKG, Cost Segregation Services Inc., Big 4/regional CPAs, boutiques.
- **AI-natives:** Cosegra.
- **Insight:** OBBBA 100% bonus depreciation (from memory) makes a study a first-year cash event; the CPA channel is the moat.
- **Distribution:** CPA partnerships, investor communities, STR managers and lenders.
- **Red flags:** One study per acquisition; Cosegra and $99 providers; IRS scrutiny; under $10B; price compression.
- **Sources:** cosegra.com, technology.org, financialmodelslab.com.

### #14 Tax and payroll notice resolution back-office
- **Segment:** B2B (CPA firms, payroll bureaus, PEOs)
- **One-liner:** White-label notice desk that diagnoses IRS/state notices, drafts responses and tracks to closure; licensee signs.
- **TAM:** est. serviceable $0.5-1.5B.
- **Incumbents:** CPA staff, Canopy, Thomson Reuters/CCH, ADP SmartCompliance, Paychex, tax resolution firms.
- **AI-natives:** Warp ($60M Series B); Numeral, Taxwire (adjacent).
- **Insight:** Sell to licensees as their back office; payroll bureaus owe resolution when their errors caused the notice.
- **Distribution:** Payroll bureau and PEO associations, CPA alliances, outbound.
- **Red flags:** Warp could open up; Canopy/TR/CCH one feature away; per-notice price compression; weakest venture math.
- **Sources:** warp.co, dealroom.co, rutlandherald.com, alleywatch.com.

### AI-native services observations
- Commercial insurance brokerage is crowded (Harper $47M, Novella $21M, Rosella, Coverwatch, Corgi).
- Customs/tariffs/drawback crowded (Gaia Dynamics, Pax, Zollback, Tariff Refund HQ); IEEPA refund wave is one-time.
- Sales tax crowded (Numeral, Taxwire); Warp owns payroll notices for its customers.
- Appraisal: Bowery and Automax exist; open space is the non-licensed evaluation band.
- Cost seg has Cosegra and is under $10B.
- Device RA/QA is the most promising (self-score ~50-58); questions are senior RA hiring and deeper crowding search.
- Fire protection design: no search spent; needs 1-2 searches.
- Meta-lesson: $10B+ categories were funded in 2025-26; open space is $1-6B professional niches with hourly incumbents and thousands of buyers, scaled via project-to-retainer.
- Search budget 8/8.

---

## Scout 4: Second-order effects (#15-#19)

### #15 DisputeShield
- **Segment:** B2B (credit unions, banks, auto lenders, collectors, debt buyers)
- **One-liner:** AI investigator that triages ACDVs and direct disputes, screens out disputes not owed an answer, investigates against the furnisher's records and builds a litigation-ready file.
- **TAM:** est. $300-600M/yr software SAM.
- **Incumbents:** e-OSCAR, Bridgeforce, Finvi, Latitude by Genesys, FICO Debt Manager, Collect!, Fiserv, Jack Henry, Symitar, offshore BPOs, Quavo (adjacent).
- **AI-natives:** None found on receiving side (2 searches); attacker-side Dispute Beast, DisputeAI, SmartDispute.ai.
- **Insight:** Reg V 1022.43(b)(1)(iii) and (f) let furnishers skip CRO-prepared and frivolous disputes; cross-furnisher fingerprinting of mills compounds; every response becomes a litigation shield.
- **Distribution:** Public lead list (PACER, WebRecon), ACA/RMAI conferences, FCRA defense firms, E&O carriers, CU leagues/CUSOs.
- **Red flags:** Quavo extension; core bundling; e-OSCAR integration drag; legal exposure if screen is wrong; price-sensitive collectors; absence of competitors snippet-level.
- **Sources:** bridgeforcedatasolutions.com, receivablesinfo.com, webrecon.com, capwellconsulting.com, hlhunt.org, disputebeast.com, smartdispute.ai, g2.com, identitytheft.gov, burr.com, quavo.com.

### #16 PhantomLoad
- **Segment:** B2B (co-ops, public power, mid-size IOUs)
- **One-liner:** Credibility scoring of large-load (data center) requests plus benchmarking of protective tariff terms.
- **TAM:** est. $60-150M/yr.
- **Incumbents:** GridUnity; Burns & McDonnell, Black & Veatch, POWER, NewGen, PSE; Ascend Analytics; NRECA/APPA/LPPC.
- **AI-natives:** Paces, Pearl Street, Nira (developer side); none utility-side.
- **Insight:** Phantom load is identity resolution across shell LLCs using public records.
- **Distribution:** NRECA TechAdvantage, APPA, statewide associations, engineering consultants.
- **Red flags:** Hundreds of buyers; long cycles; GridUnity; AI capex cooling; SB 6 detail unverified.
- **Sources:** latitudemedia.com (2), utilitydive.com, lppc.org, ascendanalytics.com, enkiai.com.

### #17 TagCut
- **Segment:** B2B (sub-1MW commercial sites in PJM/ERCOT)
- **One-liner:** Predicts coincident-peak hours and automatically sheds load to cut capacity and transmission tags; gain-share.
- **TAM:** est. $150-400M/yr.
- **Incumbents:** Voltus, Enel X, CPower, NRG, energy brokers, JCI/Siemens/Honeywell.
- **AI-natives:** Voltus, Leap, GridBeyond.
- **Insight:** Tag avoidance on the site's own bill needs no market enrollment or minimum size.
- **Distribution:** Energy brokers, HVAC/controls contractors, dealer/grocery associations, auction-result content.
- **Red flags:** Crowded upmarket players can go down; small per-site economics; rule changes; comfort complaints.
- **Sources:** voltus.co, utilitydive.com, enelnorthamerica.com, rtoinsider.com, pjm.com, avalonenergy.us, energy-news.aes-energ.com.

### #18 SourceCheck
- **Segment:** B2B (pet insurers first)
- **One-liner:** Verifies claim invoices against the issuer's system (vet PIMS) instead of forensics.
- **TAM:** est. $20-60M pet; $100-250M extended.
- **Incumbents:** Shift Technology, Truepic/Attestiv, Guidewire/Duck Creek, IDEXX, Covetrus, Shepherd, Trupanion direct pay.
- **AI-natives:** Hesper AI, Attestiv, Lemonade.
- **Insight:** Forensics decays; source verification does not (Argyle/Plaid pattern); clinics opt in for faster pay.
- **Distribution:** NAPHIA, founder-led to ~15 carriers, PIMS marketplaces, vet consolidators.
- **Red flags:** Tiny buyer universe; IDEXX/Covetrus bundling; Trupanion; clinic data reluctance.
- **Sources:** ecommercetimes.com, insurancebusinessmag.com, carriermanagement.com, claimsjournal.com, iamagazine.com, simplesolve.com, gethesperai.com.

### #19 ConsentLayer
- **Segment:** B2B (AI voice/chat vendors and their customers)
- **One-liner:** Consent SDK and evidence log for wiretap exposure after SB 690.
- **TAM:** est. $30-100M/yr.
- **Incumbents:** OneTrust, Osano, Usercentrics, Ketch, Transcend, ObservePoint, defense firms, Talkdesk/Five9/Genesys.
- **AI-natives:** ConsentPixel, Rain Intelligence, Melurna (scope unverified).
- **Insight:** SB 690 shifts plaintiffs to s.631; vendor inability to use data is an engineerable defense.
- **Distribution:** Voice-AI vendor partnerships, privacy defense firms, dealer association newsletters.
- **Red flags:** Legal-theory dependency; self-build; unproven WTP; crowded CMPs.
- **Sources:** sidley.com, privacylaw.proskauer.com, alston.com, ppc.land, consentpixel.com, rainintelligence.com.

### Second-order observations
- AI makes sending cheap so receivers pay; best targets combine a statutory clock, private right of action and thousands of receivers. FCRA furnishers fit all three.
- FCRA suits: 6,305 through July 2026 (+44.6% YoY), 7,274 through August (WebRecon). No furnisher-side AI-native in 2 searches; Quavo most likely entrant.
- Colorado replaced its AI Act with SB 26-189 (May 14, 2026); state AI-compliance thesis collapsed.
- SB 690 removes s.638.51 pixel claims but leaves s.631.
- PJM 2027/28 cleared at $333.44/MW-day cap, 6,623 MW short; ERCOT phantom load; neither idea clearly beats 54.
- Insurance AI-fraud stats are often marketing; "$308.6B" is misattributed.
- Document forensics decays; issuer-side rails are durable.
- Search budget 8/8.

---

## Scout 5: Labor cliff (#20-#24)

### #20 OperatorOS
- **Segment:** B2B (contract water/wastewater operators, roll-ups)
- **One-liner:** Copilot that writes MORs and DMRs, keeps sampling calendars, triages alarms and captures retiring operators' knowledge so one licensee covers more systems.
- **TAM:** est. $100-250M US SAM.
- **Incumbents:** Hach WIMS, Xylem, Klir, 120Water, state portals/NetDMR.
- **AI-natives:** Nyad ($1.3M).
- **Insight:** Sell "more systems per license" to private contract operators and roll-ups; per-plant knowledge graph compounds.
- **Distribution:** Rural water associations, CEU courses, roll-up ops teams.
- **Red flags:** Nyad and incumbents; domain credibility; state formats; buyer universe unverified; low budgets. Self-score ~50-58.
- **Sources:** michiganpublic.org, greatlakesnow.org, hypepotamus.com, nlc.org, adem.alabama.gov, wateronline.com.

### #21 Private-Provider Rail
- **Segment:** B2B (homebuilders; licensed private reviewers)
- **One-liner:** Two-sided network where AI pre-reviews permits and drafts inspections for licensed private providers in FL/TX.
- **TAM:** est. $150-400M take-rate revenue FL+TX.
- **Incumbents:** Bureau Veritas, SAFEbuilt, Willdan, CSG, FL private-provider firms, Accela, Tyler EnerGov, Milrose.
- **AI-natives:** PlanCheckPro.ai, InspectMind AI, Buildcheck ($5.9M), CivCheck, Archistar, PermitFlow.
- **Insight:** Where law lets a private provider replace the city, AI multiplies the scarce licensee; the rail is the moat.
- **Distribution:** HBA/FHBA, builder VP sales, BOAF recruiting.
- **Red flags:** Cold start; ops-heavy; city pushback; E&O; housing cycle; statutes unverified. Self-score ~45-55.
- **Sources:** plancheckpro.ai, globenewswire.com, ycombinator.com, milrose.com, rapideyeinspections.com.

### #22 DigProof
- **Segment:** B2B (excavation and fiber contractors)
- **One-liner:** Photographs and verifies locate marks against 811 tickets pre-dig and builds damage-claim defense packets.
- **TAM:** est. $150-300M SAM.
- **Incumbents:** Irth, KorTerra, BOSS811, USIC, UtiliQuest, one-call centers.
- **AI-natives:** iFactory.
- **Insight:** All 811 AI money is facility-owner side; the excavator absorbs damages and has no evidence tooling.
- **Distribution:** Contractor associations, damage-prevention councils, GL insurers, prime broadband contractors.
- **Red flags:** Irth/BOSS811 one feature away; crew adoption; claim economics unverified. Self-score ~40-48.
- **Sources:** korterra.com, irthsolutions.com (3), boss-solutions.com, ifactoryapp.com.

### #23 AutoStake
- **Segment:** B2B (electric co-ops, contract design firms)
- **One-liner:** Turns line-extension requests into draft staking sheets inside GIS/WMS.
- **TAM:** est. $60-150M.
- **Incumbents:** NISC, Futura, Partner Software, Milsoft, Esri/ArcFM, O-Calc, Katapult, IKE GPS, engineering firms.
- **AI-natives:** None found (not searched); iFactory.
- **Insight:** The software-fixable bottleneck is the desk-side designer; co-ops are private and peer-referenced.
- **Distribution:** Statewide associations, NRECA, G&Ts, contract design firms.
- **Red flags:** Crowding unsearched; NISC bundling; legacy integration; ~830 buyers. Self-score ~40-50.
- **Sources:** katapultengineering.com, ikegps.com, nextmiletech.com, ifactoryapp.com, broadstaffglobal.com.

### #24 PlanAudit
- **Segment:** B2B (CPA firms with EBP practices)
- **One-liner:** Runs standard 401(k)/403(b) audit tests and drafts cited workpapers.
- **TAM:** est. $80-240M.
- **Incumbents:** CaseWare, CCH, Thomson Reuters, DataSnipper, offshore support.
- **AI-natives:** Fieldguide; none EBP-specific (not searched).
- **Insight:** A few dozen recordkeepers produce most source reports, so parsers compound across firms.
- **Distribution:** AICPA EBP Audit Quality Center, state CPA societies, PE CPA roll-ups.
- **Red flags:** Crowded accounting AI; CaseWare/CCH bundling; slow seasonal buyers; SECURE 2.0 reduced plan counts. Self-score ~38-48.
- **Sources:** ycombinator.com.

### Labor cliff observations
- Search budget 8/8; "from memory" facts unverified.
- Home care scheduling (Zingage) and SNF MDS/PDPM (PointClickCare, MedaSync, Sage) are crowded.
- Title examiners: BLS 54,960 to 49,760 (2020-2024), but Titl, Qualia, Enverus; title plants fail data rights.
- Customs brokers: CBP Jan 2026 ruling; Gaia, KlearNow, Digicust, Tarifflo, Trava, Forge.
- Pole-attachment owned by Katapult/IKE; 811 screening by Irth/KorTerra; excavator side open.
- AI plan review filling up; open angle is a licensed-provider network.
- Water/wastewater least crowded (only Nyad); verify contract-ops buyer universe in round 4.
- Excluded from memory: 911 non-emergency, court reporting, adjusters, pharmacy prior auth.
- Meta-lesson: sell capacity multiplication to private fixed-fee employers of licensees, or build a licensee rail.
- Ranking: #20 most likely to match 54; #21 largest TAM but ops-heavy; others in the 40s.

---

## Scout 6: Big-TAM contrarian (#25-#29)

### #25 Margin-first, migration-led distribution ERP
- **Segment:** B2B (mid-market wholesale distributors)
- **One-liner:** Start as the SPA/rebate margin layer on P21/Eclipse/SX.e, use the mapped data to make migration cheap, then replace the ERP.
- **TAM:** est. $2-5B ERP SAM; wedge $300-700M.
- **Incumbents:** Epicor (P21, Eclipse, Prelude, BisTrack), Infor SX.e, DDI Inform, Distribution One, Acumatica, NetSuite/Dynamics VARs.
- **AI-natives:** Lark (YC F2026, explicitly not an ERP replacement); Doss ($55M); Endeavor AI; Rillet, DualEntry, Tessera Labs (horizontal).
- **Insight:** All funded players sit on top of the ERP; owning the margin data turns the wedge into the migration tool.
- **Distribution:** Epicor user groups, NAED/AD/IMARK buying groups, PE operating partners, P21 job-posting targeting.
- **Red flags:** Long risky ERP sale; capital needs; Epicor bundling; Lark/Endeavor/Doss moving down; gap unverified; conversion untested.
- **Sources:** pool-level (trylark.ai, techcrunch.com Doss, endeavor.ai, erpresearch.com, portalerp.com, dualentry.com, erp.today).

### #26 Contractor-credit desk to trade-credit MGA
- **Segment:** B2B (building-products and MEP distributors)
- **One-liner:** AI credit desk scoring contractor accounts from pooled payment data, liens and permits, then insuring approved receivables.
- **TAM:** est. ~$1B MGA+SaaS SAM.
- **Incumbents:** Allianz Trade, Coface, Atradius, Securitas/WTW, NACM groups, D&B/Experian, Levelset.
- **AI-natives:** None found; adjacent Billd, Resolve, Slope, Hokodo, Mondu (from memory).
- **Insight:** Scarce asset is pooled payment-experience data on small contractors; insurance monetizes it.
- **Distribution:** NACM chapters, buying groups, ERP marketplaces, P&C brokers later.
- **Red flags:** Cyclical correlated losses; carrier reluctance; big three moving down; antitrust in pooling; insurance hires needed.
- **Sources:** pool-level (allianz-trade.com, coface.us, atradius.us).

### #27 Excess-inventory and interline exchange
- **Segment:** B2B (industrial, electrical, plumbing distributors)
- **One-liner:** AI-matched exchange for slow stock and stock-outs between distributors, fed by ERP connectors.
- **TAM:** est. $10-40B GMV; ~$1B+ revenue SAM.
- **Incumbents:** Liquidators, buying-group lists, NetComponents/Sourcengine, PartsBase, eBay/Amazon Business.
- **AI-natives:** None found (not specifically searched).
- **Insight:** ERP connector solves supply cold start; LLM cross-referencing enables equivalent matches.
- **Distribution:** PE operating partners, buying-group revenue share, #25 customers.
- **Red flags:** Competitor-trust; freight economics; distribution agreements; take-rate pressure; unverified.
- **Sources:** none per idea.

### #28 SKU-underwritten product-liability MGA
- **Segment:** B2B (small importers, private-label and marketplace sellers)
- **One-liner:** Underwrites product liability per SKU from listings, reviews, certifications and recall data.
- **TAM:** est. $2-5B premium; $0.5-1.2B MGA revenue.
- **Incumbents:** Hiscox, The Hartford, Travelers, Next, Insureon, Amwins, RT Specialty, CRC.
- **AI-natives:** Comeryx (contractors); Honeycomb (apartments); none for products.
- **Insight:** Liability risk concentrates in SKU attributes visible in public signals; continuous monitoring renews as loss prevention.
- **Distribution:** Seller communities, 3PLs, marketplace agencies, SEO, free SKU-risk report.
- **Red flags:** Long tails and catastrophic claims; capacity limits; churn; marketplace programs; insurance expertise.
- **Sources:** pool-level (natlawreview.com Comeryx, fortune.com Honeycomb).

### #29 Product-stewardship fee OS (EPR)
- **Segment:** B2B (mid-market CPG producers)
- **One-liner:** Accurate state EPR supply reports plus fee reduction via data correction and eco-modulated redesign.
- **TAM:** est. $0.5-1.2B by ~2030.
- **Incumbents:** Specright, Assent, Sphera, UL, 3E, Circular Action Alliance tools.
- **AI-natives:** Certivo, Trayak, Asuene.
- **Insight:** Money is in the gap between default categories and true composition; supplier specs compound across brands.
- **Distribution:** Co-packers and converters, trade associations, deadline-timed webinars.
- **Red flags:** Crowded; regulatory delays/preemption; small early fees; PRO acceptance.
- **Sources:** pool-level (certivo.com, trayak.com, asuene.com, circularactionalliance.org, mayerbrown.com).

### Big-TAM observations
- Search budget 8/8; snippet-level.
- Crowded: agency AMS (Outmarket, COVU, AGI, InsuranceAgency.AI); habitational MGA (Honeycomb); artisan E&S MGA (Comeryx); job-shop ERP (Fulcrum, Carbon, Doss); SMB acquisition marketplaces (Baton, Rejigg, Xavior, smb.co); EPR software; Miter ($40M construction).
- Whitespace: no funded AI-native full ERP for mid-market distributors; makes the 54 SPA idea a possible wedge to $2-5B.
- Recommendation: stack #25-#27 on one connector (margin, credit, inventory, then ERP and insurance).
- MGAs (#26, #28) have the largest pools but weakest founder fit.
- Unverified: Census wholesale counts and inventory, trade-credit and marketplace premium pools, CA SB 54 ~$500M/yr.
