# Post-Clearance QA/RA Operations as a Service for Small US Device Makers

**One-liner:** An AI-native outsourced quality and regulatory department for US medical device companies with 5 to 200 employees. The retainer covers complaint intake, MDR reportability rationale and eMDR filing, CAPA, management review and internal audit, QMSR inspection readiness, and add-ons for Section 524B cybersecurity and PCCP upkeep. The 510(k) is a loss-leader or partner-delivered entry point, not the profit center.

**Verdict: PASS. Score 41/100.** That is below the SPA recovery benchmark (54) and above the round-1 cluster (24-33). The best pivots reach about 44-48: a usage-priced complaint-to-MDR desk for multi-510(k) holders, a US Agent plus complaint front door for foreign manufacturers, or tooling sold to fractional RA/QA consultants. None of them clearly reaches 54.

Date: 2026-10-06. Pipeline: scout (ai-native-services), then deep dive, then red team (competition, GTM, feasibility), then buyer simulation, then managing-partner verdict. The verdict step ran one additional search, which found no funded AI-native firm selling post-market QA operations as a service. It did re-surface Klaris and Flinn.ai as AI tooling. Evidence is mostly snippet-level and is labelled.

---

## Thesis (strongest honest version)

**The original pitch was wrong.** A fixed-fee AI 510(k) at $45-75K does not work as the lead offer:
- The market already prices this work lower. Fixed-fee 510(k) preparation is quoted at $15-25K by i3CGlobal and about $17.5K by Medical Device Academy. MDI Consultants quotes $15-80K+.
- AI-native submission players are chasing the cheapest part of clearance: Complizen, Cruxi (with a $100 launch promo), FormlyAI ($2M seed), Klaris ($1M pre-seed) and i-GENTIC.
- Most of the $150-350K "cost to clearance" is testing and FDA user fees, not regulatory writing.

**The refined version is coherent.** It flips to recurring post-market operations:
- It sells to the side that carries the loss: 483s, warning letters, late MDRs and recalls.
- The manufacturer stays the legal signer. That fits the "evidence layer, not licensed signer" lesson, and no license is required.
- The why-now is real and verified. QMSR took effect Feb 2, 2026. QSIT was withdrawn. Inspections now run under compliance program 7382.850.

**It still fails on four counts that matter for this program:**
1. **Incumbent systems of record bundle the AI layer.**
   - Greenlight Guru shipped a first-party MCP connector in Q2 2026 and Qualio a CI Agent plus REST API in Feb 2026 (snippet-level, gxpsoft.ai).
   - Smarteeva and Flinn.ai sell AI complaint and vigilance triage.
   - A client's own $142K QA manager with an LLM pointed at the QMS gets most of the leverage the pitch relies on.
   - The "living design-and-risk graph" lives in the client's QMS. The switching cost belongs to the QMS vendor, not to us.
2. **The service already exists from brand-name sellers at the same price.**
   - NAMSA and Emergo by UL sell QA/RA outsourcing.
   - USDM and SJ MedTech sell outsourced complaint handling.
   - Fractional boutiques sell the same retainer: Fractional Quality Partners, Practical QARA, TRCG and Cannon.
   - Minimum retainers are about $5-18K/month (Qualio snippet), and the proposed $6-10K/month falls inside that band.
   - Ketryx ($55M+ raised) is hiring QA/RA consultants, so the best-funded AI tooling player is adding services itself.
3. **AI leverage is weakest exactly in the target segment.**
   - Single-device small firms see tens of complaints a year (estimate). Their quality hours go to judgment and on-site work: CAPA, supplier audits, design changes, inspection hosting.
   - The "12-20 clients per specialist" target is unproven; 4-8 is more realistic.
   - Medical Device Academy says review and approval of MDRs cannot be outsourced, which caps the "we run it" promise.
4. **The ceiling is a services ceiling.**
   - Gross margin is 60-75%, capacity is gated by hiring, and the sale is trust-led on a named RA veteran.
   - Realistic SAM is about $400-800M (estimate). Revenue reaches roughly $10-25M at steady state once structural churn is counted: client death, acquisition, and in-house hiring.
   - Founder fit is poor. A technical founder without RA credentials cannot close the core sale.

**The genuine kernel is narrow.** Multi-510(k) private-label firms, specification developers and contract manufacturers with 300+ complaints a year and 1-3 QA staff have real recurring volume and a hiring problem. The buyer simulation's only "yes" came from that group, and it was for staff augmentation inside their existing eQMS, priced at $4-7K/month. That is a decent small services business, not a venture breakout.

## Workflow today

**Pre-market**
1. Pick a predicate from the 510(k) database, with an optional Pre-Sub.
2. Lab testing: ISO 10993, IEC 60601/EMC, software documentation, 524B cybersecurity, performance data.
3. An RA consultant or in-house lead builds the eSTAR and pays the user fee. From memory, not verified: about $24-26K standard, about $6-6.5K small business.
4. FDA review. Additional Information holds are common (rate unverified).
5. Clearance. 3,238 510(k) clearances in 2025 (verified, snippet-level, 510kdatabase.net).

**Post-market and QMS (the recurring part)**
1. Complaints arrive by email, phone, distributors and app reviews.
2. Each complaint is documented and assessed for MDR reportability under 21 CFR 803: 30 calendar days, or 5 work days for remedial-action events.
3. Investigation, trending, and links to CAPA.
4. ISO 13485 under QMSR covers management review, internal audits, supplier controls, design changes and ISO 14971 risk-file upkeep.
5. Under QMSR, management review and internal audit records are now inspection-visible. This is from memory of the final rule and was not re-verified.
6. Today this runs on one overloaded QA/RA manager (salary about $142K, snippet), a fractional consultant ($125-450/hr), or eQMS software (Greenlight Guru about $25-60K/yr, Qualio about $12-30K/yr per OpenRegulatory) that still needs a person to run it.

## TAM

All figures are estimates unless marked verified.

| Pool | Size (est.) | Notes |
|---|---|---|
| Submission writing for small and mid firms | $60-150M/yr | About 1,500-1,900 outsourced projects at $20-40K, plus Pre-Subs and AI-letter responses. Price compressing. |
| Outsourced recurring QA/RA today | $75-190M/yr | About 4,000 small US device firms (count unverified) x 35% outsourcing x $60-120K. |
| Labor pool an AI-leveraged service could attack | ~$600M/yr | 4,000 x about $150K first in-house hire. Theoretical. |
| 524B cyber and PCCP add-ons | $20-60K/client/yr | About 950 AI/ML authorizations by Aug 2024 (verified, PMC). |
| Foreign manufacturers selling into the US | Unquantified | Large volume but price-sensitive. i3CGlobal and MDI already serve it. |
| **Realistic SAM** | **$400-800M** | The original $3-6B is not supported for the SMB slice. |
| **Realistic SOM (yr 5-6)** | **$10-25M revenue** | 100-200 active clients at a $50-80K blended ACV (per the buyer simulation), after churn. |

## Competitors

| Name | Type | Relevance | Funding/scale |
|---|---|---|---|
| Complizen | AI-native FDA consulting (experts plus AI) | Near-identical model; post-market retainer is its obvious next step | Unverified |
| Ketryx | AI compliance/traceability for SaMD | Owns the 524B/PCCP-fit segment; hiring QA/RA consultants | $39M Series B, more than $55M total |
| Greenlight Guru | eQMS system of record | MCP AI connector (Q2 2026), ISO 42001 (snippet) | Large VC/PE-backed |
| Qualio | eQMS | CI Agent plus REST API (Feb 2026, snippet) | VC-backed |
| MasterControl / Veeva Vault QMS / ComplianceQuest | eQMS | Adding AI complaint/CAPA triage (snippet) | Large |
| Smarteeva | AI complaint/PMS platform on Salesforce | Claims up to 70% faster complaint processing | Unverified |
| Flinn.ai | AI vigilance/complaint triage | About 80% first-pass categorization time saved, per superkind.ai anecdote | Unverified |
| 3Analytics / AssurX | AI complaint handling on enterprise QMS | Claims up to 72% cost savings at volume | Unverified |
| NAMSA | CRO, QA/RA outsourcing line | Same product, brand trust | Large |
| Emergo by UL | Part-time QA/RA outsourcing incl. complaint handling | Same product | Part of UL Solutions |
| USDM, SJ MedTech, Skycom | Outsourced complaint/adverse-event handling | Same slice | Established / small |
| Fractional Quality Partners, Practical QARA, TRCG, Cannon, Elexes, Methodize | Fractional QA/RA retainers | Same retainer; can adopt the same LLMs | Small services firms |
| Cruxi, FormlyAI, Klaris, i-GENTIC | AI submission tools | Commoditize the 510(k) entry point | FormlyAI $2M seed; Klaris ~$1M pre-seed; others unverified |
| i3CGlobal, Medical Device Academy, MDI | Fixed-fee 510(k) shops | Set $15-25K price anchor; serve foreign manufacturers with US Agent and MDR work | Bootstrapped |
| Lattice Health | YC P2026, hospital-side AI-device monitoring | AI post-market monitoring is an active YC thesis | Unverified |

## Wedge and model (best version)

- **Phase 1 wedge:** "QMSR inspection-ready in 60 days." A $25-40K fixed fee: gap map to ISO 13485, rebuild complaint, MDR and CAPA files, produce a management review and internal audit pack, backfill MAUDE trending.
- **Phase 2 retainer, $6-10K/month:**
  - Complaint intake. AI drafts the cited reportability rationale and the 3500A/eMDR; a named RA lead reviews; the client approves.
  - Trending, CAPA, quarterly management review, annual internal audit.
- **Add-ons:**
  - 524B vulnerability triage and SBOM upkeep, $1.5-4K/month.
  - PCCP execution, $2-5K/month.
  - Submissions for retained clients, $20-40K.
- **Buyer-validated reality:**
  - Single-device firms that have never been inspected will pay about $1.5-3K/month recurring, plus $10-20K crisis packages after an inspection notice or a 483.
  - Multi-510(k) firms will pay $4-8K/month for complaint and MDR staff augmentation inside their own eQMS.
  - Blended ACV is about $50-80K, not $100-150K.

## What's good

- It sells to the party that carries the loss: late MDRs, 483s and warning letters land on the manufacturer.
- The manufacturer stays the legal signer and no license is required, so there is no licensee-wins wall.
- The why-now is real and verified: QMSR effective Feb 2, 2026, QSIT withdrawn, 7382.850 in force.
- It is recurring prevention, not backward-looking recovery, which matches the renewal-product lesson.
- The buyer universe is thousands of firms, not dozens, and there is no government or payer channel.
- One persona has real, quantified pain: multi-510(k) firms with complaint backlogs and roles they cannot keep filled. They would approve $4-7K/month quickly.
- 524B and PCCP obligations give a technical founder a credible product angle.

## What's bad, by lens

**Competition**
- Complizen is already running the near-identical expert-plus-AI model.
- NAMSA, Emergo, USDM and the fractional boutiques already sell the retainer.
- Ketryx ($55M+) is adding QA/RA consultants.
- The AI drafting layer is a commodity that every incumbent consultant can buy.

**Incumbent bundling ("one feature away")**
- Greenlight Guru's MCP connector and Qualio's CI Agent move AI triage into the system of record.
- The vendor works as a guest in someone else's validated QMS. Buyers said explicitly: "I'm not migrating our complaint files to your system."

**GTM**
- Urgency is driven by events: an inspection notice, a 483, diligence. Prevention retainers sell poorly to cash-constrained CEOs.
- Loaded CAC is more likely $25-50K than $8-15K.
- Churn is structural (client death, acquisition, in-house hire), so tenure is about 18-36 months (estimate).
- Content and SEO channels are saturated.

**Feasibility and economics**
- AI leverage is low at small-firm complaint volumes.
- LLM triage is QMS software that needs validation under ISO 13485 4.1.6, and each model upgrade raises a revalidation question.
- The vendor becomes each client's critical supplier, so expect supplier audits and indemnity demands.
- MDR approval cannot be outsourced.
- Services margins of 60-75% and capacity gated by hiring.

**Liability**
- An AI false negative on a death or serious-injury MDR is unbounded downside against a capped $6-10K/month fee.
- E&O limits are low relative to that exposure.

**Founder fit**
- The sale is trust-led on a named RA veteran's reputation. The first two hires effectively are the company.

**TAM**
- SAM is about $400-800M and revenue caps around $10-25M, which repeats the buyer-universe cap. It does not meet round 3's larger-TAM goal.

## Buyer-simulation highlights

These interviews are role-play informed by real pricing snippets, not real transcripts.

- **12-person single-device CEO, never inspected: NO on the retainer.**
  - "$8K a month to process 20 complaints a year? That's $5K a complaint."
  - Would pay $10-15K one time, but only after an inspection notice.
  - Today's spend is about $1.5-3K/month for a fractional consultant plus $12-25K/yr for eQMS.
- **60-person private-label firm, 6 cleared 510(k)s, 400-600 complaints/yr, 483 in 2023: CONDITIONAL YES.**
  - Would buy complaint and MDR staff augmentation at $4-7K/month, working inside their eQMS, with sign-off kept in-house and usage-based pricing.
  - This is the only real wedge.
- **Series A AI/SaMD VP RA/QA: NO.**
  - "Outsourcing quality is a red flag in diligence."
  - Would pay $1-2K/month at most for 524B triage embedded in Ketryx or Jira, and $25-50K for a PCCP review by a named ex-FDA reviewer.

## Comparison to SPA recovery (54)

SPA recovery scored higher for four reasons:
- The buyer's money is already lost and measurable.
- The data comes from the buyer's own ERP and is owed to it.
- Recovery is attributable dollar for dollar.
- No named-expert trust barrier sits in the way.

This idea's advantages are that it is recurring, its why-now is verified, and it is not blocked by a license. But it is a trust-led services business:
- The AI layer is being absorbed by the QMS systems of record.
- Brand-name incumbents already sell the identical product at the same price.
- AI leverage is weakest in the segment it targets.
- The founder lacks the credential the sale requires.

Its TAM is nominally larger than the SPA desk, but its realistic SOM is similar or lower. It scores **13 points below** SPA recovery.

## First 30 days (if pursued anyway, to falsify quickly)

1. **Build the target list.** Pull FDA Data Dashboard inspection and citation data (https://datadashboard.fda.gov). Join it to the 510(k) database by applicant. List firms that hold 4 or more Class II 510(k)s and had a 483 citing complaints, MDR or CAPA (820.198 / 803 / 820.100) in the last 3 years. Target 150 firms.
2. **Run Mom-Test calls.** Hold 15 calls with Directors or Managers of QA/RA at those firms. Ask:
   - "Walk me through your last MDR decision."
   - "What's your current backlog?"
   - "What did your last 483 response cost?"
   - "Have you tried to hire a complaint specialist?"
3. **Test commitment.** Offer a $5-10K paid pilot: triage last quarter's complaints with cited reportability rationales, working inside the client's eQMS.
4. **Run a parallel rail test.** Call 10 independent fractional RA/QA consultants. Ask whether they would pay $300-800/seat/month for cross-QMS tooling that lets one consultant carry 12-20 clients.
5. **Check foreign-manufacturer demand.** Quantify foreign establishments with US 510(k)s from FDA registration and listing data. Price a US Agent plus complaint-intake bundle against i3CGlobal and MDI.
6. **Get insurance quotes.** Obtain E&O quotes for MDR-reportability work and test whether limits are workable.
7. **Line up a co-founder.** Identify and approach 2-3 credentialed RA/QA veterans with public clearance records.

## Kill criteria

- Fewer than 3 of 15 multi-510(k) QA leads pay for a pilot within 45 days.
- Pilot data shows the vendor's specialist cannot carry 10 or more clients at target quality. That would mean AI leverage below the margin thesis.
- Buyers insist on recurring pricing below $4K/month, or refuse to give access to their eQMS.
- No credentialed RA/QA veteran will join as co-founder or early partner on equity terms within 60 days.
- E&O carriers will not quote MDR-reportability work at limits of $2M or more at viable premiums, or clients demand uncapped indemnity.
- Greenlight Guru, Qualio or Ketryx launches a certified-partner managed complaint and MDR service during the validation window.
- Fewer than 5 of 10 fractional consultants would pay for tooling. That kills the rail pivot.

## Sources

- https://www.complizen.ai/
- https://cruxi.ai/
- https://techfundingnews.com/formlyai-raises-2m-seed-to-accelerate-medical-device-certification/
- https://www.uktech.news/medtech/klaris-medical-device-pre-seed-20260217
- https://www.medtechdive.com/news/ai-ketryx-raises-39m-funding/759375/
- https://job-boards.greenhouse.io/ketryx/jobs/4894027008
- https://www.advamed.org/industry-updates/news/i-gentic-ai-launches-context-aware-medtech-agents-to-strengthen-fda-510k-submission-consistency/
- https://gxpsoft.ai/blog/current-state-of-ai-in-quality-management-vendors-2026-08-20
- https://www.greenlight.guru/greenlight-guru-ai
- https://superkind.ai/blog/ai-medical-devices
- https://www.smarteeva.com/platform/complaints-management
- https://www.assurx.com/overcoming-the-challenges-of-medical-device-complaint-handling-with-ai-how-3analytics-leads-the-way/
- https://namsa.com/services/consulting/global/qa-ra-outsourcing/
- https://www.emergobyul.com/services/short-term-or-part-time-medical-device-qara-outsourcing
- https://usdm.com/resources/blogs/outsource-your-complaint-and-adverse-event-management
- https://sjmedtech.com/blogs/outsourcing-complaint-handling-of-medical-devices-regulatory-risks-and-how-to-stay-in-control/
- https://medicaldeviceacademy.com/outsourcing-medical-device-complaints/
- https://www.qualio.com/blog/medical-device-regulatory-consulting-cost
- https://openregulatory.com/articles/greenlight-guru-price
- https://openregulatory.com/articles/qualio-price
- https://www.elexes.com/feeds/blog/outsourced-regulatory-affairs-companies-medical-devices
- https://www.practicalqara.com/
- https://www.fractionalquality.com/
- https://trcg.ai/fractional
- https://www.i3cglobal.com/us-fda-510k-consultants/
- https://mdiconsultants.com/510k-submissions-for-medical-devices/
- https://www.510kdatabase.net/clearances/
- https://www.fda.gov/medical-devices/quality-management-system-regulation-qmsr/quality-management-system-regulation-frequently-asked-questions
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12126487/
- https://datadashboard.fda.gov
