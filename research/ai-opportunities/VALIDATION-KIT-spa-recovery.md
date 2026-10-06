# 30-Day Validation Kit: Distributor-Side SPA / Ship-and-Debit Recovery (Pick 1)

*Date: 2026-10-06. Built from [MEMO.md](MEMO.md) §5 Pick 1 and [dossiers/r3-b2b-claims-engine.md](dossiers/r3-b2b-claims-engine.md). Ready to use from Monday 2026-10-12 (Day 1) to Tuesday 2026-11-10 (Day 30).*

> **Evidence labels used in this kit**
> - **[memo]**: from the memo or dossier. Buyer quotes there are role-play composites, not real interviews.
> - **[snippet]**: from a web-search result snippet this session. The page itself was not opened, because WebFetch is blocked.
> - **[memory]**: general industry knowledge, not checked this session. Verify it before you rely on it.
> - **[coach]**: my operating heuristic from earlier validation sprints. It is a planning assumption, not market data.
>
> No company, figure or date in this kit was invented. Where a number is a threshold I set, it says so.

---

## 0. What these 30 days must prove

You are testing five hypotheses. Only the last two are about the product.

| # | Hypothesis | Proven when (Day 30) | Source of threshold |
|---|---|---|---|
| H1 | **The buyer exists and will talk.** SPA/rebate claim staff at mid-market distributors can be reached cold. | 25+ discovery calls with the exact title | [memo] Day-30 kill criterion |
| H2 | **The problem can be measured.** They can size claim volume and rejections from a system, not from a guess. | 40%+ of calls can state monthly claims and rejections | [memo] |
| H3 | **Money leaks today.** Rejections and short-pays age out or get written off without a systematic rework. | 50%+ of calls describe write-offs or aging with no owner | [coach] |
| H4 | **The data can leave the building without IT.** They will export 12 months of claim and credit data under NDA. | 3+ datasets received | [memo] Day-30 gate |
| H5 | **There is a dollar figure worth a contract.** Re-adjudication finds recoverable money well above the fee. | 1+ audit showing $100k+/yr recoverable, and 2+ LOI conversations open | [memo] gate, plus [coach] |

Kill criteria for days 45-90 [memo] are carried forward in §8. Ask about them in every call so you have the data early.

---

## 1. Ideal customer profile (ICP)

### 1.1 Account profile

| Attribute | Tier A (call first) | Tier B | Exclude |
|---|---|---|---|
| Vertical | Independent **electrical** distributors (electrical supply, lighting, datacomm) | **HVAC/R** (HARDI-type) and **industrial/MRO** distributors | Pharma/healthcare wholesalers (a different 844 world), and retail |
| Revenue | ~$100M-$1B [memo] | $50-100M, or $1-2B regionals | National top-10 houses with in-house channel-finance teams and enterprise tools |
| ERP | **Epicor Eclipse** or **Prophet 21** [memo]; **Infor SX.e / CloudSuite Distribution** | Other distribution ERPs, if they can export flat files | Any account that needs a custom integration before an export (pre-mortem failure #4) |
| SPA intensity | 30+ manufacturer lines with SPA/ship-and-debit programs; dedicated SPA/rebate staff | Pricing team does SPA part-time | Mostly stock-and-sell with no claimback programs |
| Buying group | Member of a buying group (AD, IMARK, etc.) **or** independent (both fine; record which) | — | — |
| Signals | Open job posting for an SPA coordinator, rebate analyst or claims specialist; recent acquisition (messy SPA data after integration) | Rapid growth | Already outsources SPA audits on contingency (record the vendor, since this is also competitive intel) |

### 1.2 People (three roles per account)

| Role | Typical titles | What they care about | Your ask |
|---|---|---|---|
| **User / champion** | SPA Coordinator, Special Pricing Analyst, Vendor Rebate Analyst, Rebate & Claims Manager, Vendor Claims Specialist, Pricing Manager [memo] | Backlog, manufacturer portals, not looking bad | The discovery call; a sample export |
| **Economic buyer** | Controller, CFO, VP Finance, Director of Finance | Write-offs, margin, no IT project, cash. The CFO signs below ~$3k/month [memo role-play] | NDA, 12-month data, contingency LOI |
| **Potential blocker** | VP Purchasing, VP Vendor Relations, VP Sales/Operations | Manufacturer relationships ("If you make us look aggressive, the manufacturer rep calls my VP" [memo role-play]) | Approval rights over every resubmission (built into the LOI) |

**Target list size:** 150 accounts (100 electrical, 30 HVAC, 20 MRO) × about 2.3 contacts = **~350 contacts** [coach]. Electrical gets the weight because it is where the memo's evidence is strongest. Keep HVAC and MRO in the list so you can tell by Day 30 whether one segment is pulling ahead.

---

## 2. List-building recipe (Days 1-3)

### 2.1 LinkedIn Sales Navigator: lead searches

Sales Navigator accepts Boolean (AND, OR, NOT, quotes, parentheses) in the Keyword and Title fields [memory]. Run each search separately and save it as a saved search, so you get alerts for new matches.

**Common filters for all lead searches:** Geography = United States (add Canada for Eclipse users); Company headcount = 51-200, 201-500, 501-1,000, 1,001-5,000; Industry = the "Wholesale" family (check the current industry labels in the filter, because LinkedIn renamed them in recent years [memory]).

**S1. Champions, electrical**
- Current job title:
  ```
  ("SPA" OR "special pricing" OR "ship and debit" OR "ship & debit" OR "vendor rebate" OR "rebate analyst" OR "rebate coordinator" OR "rebate manager" OR "vendor claims" OR "claims specialist" OR "pricing analyst" OR "pricing coordinator" OR "pricing manager") NOT ("spa therapist" OR "massage" OR "esthetician" OR "day spa" OR "medical spa")
  ```
- Keywords (company/profile):
  ```
  ("electrical supply" OR "electric supply" OR "electrical distributor" OR "electrical distribution" OR "electrical wholesale" OR "lighting supply")
  ```

**S2. Champions, HVAC/R.** Same title string. Keywords:
```
("HVAC distributor" OR "HVAC supply" OR "HVACR" OR "heating and cooling supply" OR "refrigeration supply" OR "HARDI")
```

**S3. Champions, industrial/MRO.** Same title string. Keywords:
```
("industrial supply" OR "industrial distributor" OR "MRO distributor" OR "power transmission" OR "bearings" OR "fluid power")
```

**S4. Economic buyers** (run it against the account list you saved from S1-S3):
```
Title: ("controller" OR "CFO" OR "chief financial officer" OR "VP finance" OR "vice president of finance" OR "director of finance" OR "VP of accounting")
```

**S5. ERP technographics.** This finds admins and power users so you can tag each account's ERP. It is not an outreach list.
```
Keywords: ("Epicor Eclipse" OR "Eclipse ERP" OR "Prophet 21" OR "P21" OR "SX.e" OR "SXe" OR "CloudSuite Distribution" OR "Infor CSD") AND ("distributor" OR "supply")
```

**S6. Advisor / domain cofounder track** (the memo flags founder-market fit as a gap):
```
Past job title: ("SPA" OR "special pricing" OR "rebate" OR "vendor claims" OR "channel finance")
Past company keywords: ("electrical supply" OR "electrical distributor")
Current: "consultant" OR "retired" OR "advisor" OR "open to work"
```

### 2.2 Free and backup sources

- **Google X-ray** (if you have no Sales Navigator seat):
  `site:linkedin.com/in ("SPA coordinator" OR "special pricing analyst" OR "ship and debit") ("electric supply" OR "electrical supply")`
- **Job boards** (LinkedIn Jobs, Indeed): search `"SPA coordinator" OR "special pricing coordinator" OR "ship and debit" OR "vendor rebate analyst"`. An open posting is a pain signal, and postings often name the ERP. Tag these accounts Tier A.
- **Trade "Top" lists** for account names [memory, verify current editions]: *Electrical Wholesaling*'s annual Top 150 electrical distributors, *Modern Distribution Management* top distributor lists, and *Industrial Distribution*'s Big 50.
- **ERP partner and customer-story pages:** Epicor customer stories for Eclipse/P21, and Infor customer stories for SX.e/CSD. Partners such as Estes Group, DCKAP, 2W Tech and Mind Harbor showed up around P21/Epicor events [snippet]. They can also become referral partners later. Do not pitch them in week 1.

### 2.3 Associations and buying groups (for names, warm intros and credibility)

| Body | Segment | How to use it in 30 days | Evidence |
|---|---|---|---|
| **NAED** (National Association of Electrical Distributors) | Electrical | Public pages, regional event attendee/sponsor lists, award and committee rosters. NAED ran an initiative to "simplify and streamline" SPAs. **Ask every electrical call whether it changed anything**, because it could cut leakage or give you a data standard. | Initiative: [snippet] (Architect Magazine; date not visible). Membership details: [memory] |
| **HARDI** | HVAC/R | Member and sponsor lists; the annual conference (usually late in the year; verify the 2026 date) | [memory] |
| **IMARK Group**, **Affiliated Distributors (AD)** | Electrical / multi-vertical buying groups | Treat them as **competitive intel first** (do they offer claim recovery?) and channel second. Phone them in week 1 [memo] | [memo] |
| **IDEA** (electrical industry data standards body) | Electrical | Ask whether SPA claims flow over EDI or through the IDEA/IDW data hub, versus manufacturer portals | [memory, verify] |
| ISA (Industrial Supply Association), PTDA, ASA | MRO, power transmission, plumbing | Account names only for now | [memory] |

### 2.4 ERP user groups (warm-channel plays)

| Group | ERP | What's known | 30-day play |
|---|---|---|---|
| **Eclipse Users Group** ("Eclipse Users Group/UFO" on LinkedIn) | Epicor Eclipse | Independent group of distributors using Eclipse. Its members are said to be "over two thirds" of Eclipse users. Annual conference is called **Encounter** (2026/2027 dates not found) [snippet] | Follow the LinkedIn page. Find the finance/purchasing SIG or board contacts and ask them for a *research* conversation, not a pitch. Ask about sponsor/vendor rules for Encounter 2027. |
| **P21WWUG** (Prophet 21 Worldwide User Group) | Epicor Prophet 21 | **CONNECT 2026** ran Aug 16-19, 2026 in Orlando, so it is already over [snippet] | Look for session speakers on pricing, rebates or AP in the 2026 agenda. They are pre-qualified champions; email them and cite their session. Ask about the 2027 call for vendors. |
| **Epicor Insights** | Eclipse + P21 + Epicor | 2026 edition ran May 18-21, Nashville, with user-group meetings for P21WWUG, Eclipse Users Group and the Epicor Users Group [snippet] | Over. Use the 2026 sponsor/speaker lists for names. Note any Epicor Prism or rebate-related sessions for the Epicor check in §7. |
| **TUG** (TheUserGroup.org) | Infor SX.e / CloudSuite Distribution, FACTS, A+ | Independent since 1989. **TUG CONNECTS** says it draws 600+ users. The snippet gives May 18-21, Nashville for 2026, the same dates and city as Epicor Insights, so treat the date as unconfirmed [snippet] | Same play: past speaker lists, then research asks. Check whether vendors can join the community forums. |

**User-group etiquette** [coach]: never cold-post a pitch in a user forum. Ask a group leader, "I'm researching how distributors on {ERP} handle rejected SPA claims. Who in your community knows this best?" One referral from inside the group is worth about 20 cold emails.

### 2.5 Tracker columns (one row per contact)

`account | tier | segment | revenue_est | ERP | ERP_source | buying_group | contact | title | role (champion/econ/blocker) | source (S1-S6/xray/job/group/referral) | seq_variant (A/B/C) | step | replied (Y/N/positive) | call_date | commitment_level (0-4, see §4.5) | dataset_received | audit_$ | LOI_status`

---

## 3. Outreach copy

**Rules** [coach]: keep emails under 120 words and plain text, with no links in email 1 and one ask per email. Personalize the first line with something real (a job posting, ERP, buying group or recent acquisition). Send Tuesday-Thursday mornings in the recipient's time zone. **Never assert leakage figures you don't have.** The whole point of the audit is that nobody has the number yet.

### Variant A: problem question (to champions)

**Subject:** rejected SPA claims at {Company}

> Hi {First},
>
> Quick question from someone who builds software for distributor back offices. I'm studying ship-and-debit claims.
>
> When a manufacturer rejects or short-pays a SPA claim at {Company} (agreement expired, end-customer mismatch, a catalog-number suffix), what happens to it? Does someone rework it, or does it age out?
>
> I'm talking with SPA and rebate folks at about 25 distributors this month to map how this really works. No pitch on the call, and I'll send everyone the anonymized findings (top rejection reasons, how teams handle them).
>
> Worth 20 minutes next week?
>
> {Name}

### Variant B: audit offer (to Controller/CFO)

**Subject:** a number for written-off SPA debits

> Hi {First},
>
> Every SPA or ship-and-debit claim that gets rejected or short-paid and then passes its window becomes a write-off. Do you know what that number was for {Company} last year?
>
> I'm offering a handful of distributors a free audit. You export 12 months of claim and manufacturer-credit data (no system access, no IT project). Within 10 business days we return the dollars lost by root cause and by manufacturer, and which claims are still inside the resubmission window.
>
> If you then want help recovering, we're paid only a percentage of what actually comes back. Otherwise you keep the report.
>
> Open to a 15-minute call to see whether it's a fit?
>
> {Name}

### Variant C: ERP / peer angle (to champions or EDI/IT coordinators)

**Subject:** {ERP} + manufacturer short-pays

> Hi {First},
>
> I noticed {Company} runs {Eclipse / Prophet 21 / SX.e} ({where you saw it}). I'm working on matching manufacturer responses to SPA claims (849s, portal rejections, credit memos) back to the original invoice line.
>
> One thing I can't tell from the outside: does your team reconcile short-pays line by line against the claim, or net them at the vendor-account level?
>
> If you'd trade 20 minutes of your view for a summary of what 25 other distributors told me, I'd be grateful.
>
> {Name}

### Follow-up sequence (all variants)

| Step | Day | Content |
|---|---|---|
| 1 | 0 | Variant A, B or C |
| 2 | +3 | Reply in-thread: "Bumping this. Even a one-line answer helps: do rejected SPA claims at {Company} get reworked or written off?" |
| 3 | +7 | Give something: "Here's the rejection-reason list I've built so far (expired SPA, end-customer mismatch, catalog suffix, quantity overrun, ship date outside window, missing documentation). What's missing from your world?" |
| 4 | +14 | Breakup: "I'll stop here. If someone else at {Company} owns SPA claims, a name would be much appreciated." |

**Phone:** call Tier A champions directly between steps 2 and 3. SPA staff are desk-based and often answer. Voicemail: "{First}, {Name} here. I'm researching how distributors handle rejected SPA claims. I sent you a short note; I'd value 20 minutes of your view. {number}."

### LinkedIn connection note (under 200 characters)

> Hi {First}, I'm researching how electrical distributors handle rejected and short-paid SPA claims. No pitch; I'd value 15 min of your view and will share what I learn from 25 peers.

**After they accept:** "Thanks for connecting. One question: when a SPA claim gets short-paid at {Company}, who decides whether it's worth fighting?" Then ask for the call.

### Referral ask (end of every good call)

> "Who at another distributor fights the same battle? Would you be comfortable with a one-line intro, or should I mention your name?"

---

## 4. 20-minute discovery call script (Mom Test style)

**Ground rules.** Ask about past behavior, not opinions about the future. Don't describe the product until minute 16, and only if they ask. Dig into specifics ("the last time..."). Get numbers from a system. Silence is fine. One person talks and one takes notes, or record the call with consent.

### 4.1 Open (0:00-2:00)

> "Thanks for the time. I'm building software for distributor back offices and I'm still learning how SPA and ship-and-debit claims actually work. I'm not here to pitch you. I want to hear how it works at {Company}, and I'll send you the anonymized summary from all 25 calls. OK if I take notes?"

### 4.2 The last time (2:00-8:00)

1. "Walk me through the **last** SPA or ship-and-debit claim that got rejected or short-paid. Step by step, who touched it?" [memo Q1]
2. "What was the reason the manufacturer gave? Where did you see it: an EDI response, a portal, an email, a credit memo?" (Record the **channel**. This tests the 844/849 assumption.)
3. "What happened next? Was it resubmitted, left open or written off? Who made that call?" [memo Q3]

### 4.3 Size it from a system (8:00-12:00)

4. "Roughly how many claims went out last month, and how many came back rejected or partly paid? Where does that number live? Could you pull it right now?" [memo Q2] (Score **system** vs **guess**.)
5. "What reason codes come up most? Could you show me one?" [memo Q4]
6. "How many manufacturers do you claim against? Do they all use the same channel?"
7. "Where does the SPA itself live: a PDF, a portal, an ERP table, a rep's email? The last time an SPA was ambiguous, how did it get resolved?" [memo Q5]

### 4.4 Money, workarounds, competition (12:00-16:00)

8. "What have you tried already: a tool, a buying-group program, an audit firm, a hire? Why isn't it enough?" [memo Q6] (Record **every** vendor name, buying group or ERP feature mentioned **unprompted**. This feeds the day-45 kill test.)
9. "Who signs off on write-offs? Who would notice if they halved?" [memo Q7]
10. "What did you spend on this last year, counting people, audit firms and software? How was that approved?" [memo Q8]
11. "Has a manufacturer ever pushed back because you resubmitted too much? What happened?" (This sizes the relationship constraint.)
12. *(Electrical only)* "Did the NAED SPA streamlining effort change anything for you?"

### 4.5 Commitment ladder (16:00-19:00)

If they described real pain, offer the audit in one sentence and ask for the **next rung**. Do not ask for opinions on the idea.

> "We're running free leakage audits for a few distributors: 12 months of claim and credit exports in, and a dollar figure by root cause back in 10 business days. What could you export this week without involving IT?" [memo Q9]

| Level | Commitment | Counts as |
|---|---|---|
| 0 | "Sounds interesting, send me info" | **Nothing** (compliment, not commitment) |
| 1 | Agrees to a second call with the Controller/CFO, or shows a real rejection on screen | Time |
| 2 | Sends a sample export (one manufacturer, one month) | Effort |
| 3 | NDA signed and 12 months of data delivered | Reputation and data |
| 4 | Contingency LOI signed | Money |

### 4.6 Close (19:00-20:00)

13. "Who at another distributor deals with this? Will you introduce me?" [memo Q10] (A deflection here is a signal.)
14. "Is it OK if I follow up with what I learn?"

### 4.7 Scoring sheet (fill in within 10 minutes of each call)

| Field | Value |
|---|---|
| Sized from system (Y/N) | |
| Claims/month; rejected or short-paid % | |
| Self-reported rejected $/yr (and whether it is a guess) | |
| Rejections systematically reworked? (Y / partly / N) | |
| Write-off approver (title) | |
| Response channel mix (EDI 849 / portal / email / credit memo) | |
| Unprompted incumbent / buying group / ERP "handles it" (Y/N, which) | |
| Unprompted AI-native vendors named | |
| Relationship fear (none / some / blocking) | |
| Days to export without IT | |
| Commitment level reached (0-4) | |
| Referral given (Y/N) | |
| Verbatim quotes (exact words only) | |

**Green signals:** they pull the number while you're on the call; they name a write-off amount; they ask "when can you start?"; they offer a referral without being pushed.
**Red signals:** "our buying group does that"; "our ERP flags that"; "we resubmit everything already"; "the rejections are basically right"; they can't name who owns the write-off.

---

## 5. Free leakage-audit offer and data request

### 5.1 One-page offer (send after a level-1+ call, attach the NDA)

> **Free SPA / Ship-and-Debit Leakage Audit for {Company}**
>
> **What you get (within 10 business days of receiving the data):**
> 1. Total dollars rejected or short-paid over the last 12 months, **by root cause** (expired agreement, end-customer mismatch, catalog/part mismatch, quantity overrun, ship date outside window, missing documentation, other) and **by manufacturer**.
> 2. **Recoverable now:** the claims still inside each manufacturer's resubmission window, with dollar amounts.
> 3. **Preventable going forward:** the share of rejections a pre-submission check would have caught.
> 4. **Top 20 draft rebuttal packets** with the SPA clause and invoice evidence cited. You decide whether any are ever sent.
>
> **What it costs:** nothing. If you later want us to pursue recoveries, we're paid a percentage only of money that actually comes back, and you approve every submission.
>
> **What we need:** read-only exports (see the list below). No system access, no software install, no IT project.
>
> **What we won't do:** contact any manufacturer, or anyone outside your team, without your written approval.
>
> **Confidentiality:** mutual NDA. Data is held encrypted and deleted within 30 days after the readout unless you sign a pilot.

### 5.2 Data request (tiered so a "yes" is easy)

**Minimum viable set** (enough for a first number):

| # | File | Typical source | Key fields |
|---|---|---|---|
| D1 | **Outbound claims**: EDI **844** files or the ERP's SPA/contract-claim register export | ERP or EDI provider | claim #, claim date, manufacturer, SPA/agreement #, invoice #, invoice line, **ship date**, end-customer name/ID, part/catalog #, qty, into-stock cost, SPA cost, claimed $ |
| D2 | **Manufacturer responses**: EDI **849** files, portal rejection exports or emailed rejection lists | EDI provider, manufacturer portals, inbox | claim #, line, accepted/adjusted/rejected, paid $, **reason code / text**, response date |
| D3 | **Credits actually received**: manufacturer **credit memos** and AP deductions/remittances applied to claims | AP / vendor ledger | credit memo #, date, manufacturer, amount, referenced claim # (if any) |

**Full set** (enables rebuttal packets and the preventable-error analysis):

| # | File | Key fields |
|---|---|---|
| D4 | **SPA agreements**: PDFs, portal exports or the ERP SPA table | agreement #, manufacturer, end customer, eligible parts, SPA price, **start/end dates**, quantity caps, extension emails |
| D5 | Sales invoice lines for claimed items | invoice #, line, ship date, customer bill-to/ship-to, part, qty, sell price |
| D6 | Each manufacturer's claim-submission rules (claim windows, documentation required) | free text or PDF |
| D7 | Write-off log or journal entries against vendor receivables | date, manufacturer, amount, approver |

**Scope:** the 12 most recent months, plus any older claims still inside a resubmission window. Start with the **top 10 manufacturers by claimed dollars** if the full set is heavy.

**Formats:** CSV/XLSX exports, raw X12 files or PDFs are all fine. Don't clean anything; messy data is part of the test. **Transfer:** SFTP or an encrypted share link, never email attachments.

**Channel caveat.** Search snippets describe the 844 as a distributor's claim to a manufacturer for products sold at contract or special pricing, and the 849 as the manufacturer's accept / partial / reject response with reasons. They also note the 844 is used "particularly" in healthcare and pharma [snippet: Cleo, SPS Commerce, TrueCommerce]. **Assume many electrical/HVAC manufacturers answer through portals, flat files or email instead of EDI.** That is why D1-D3 accept any channel. Record the channel mix per account (scoring-sheet field) and confirm it with at least 3 EDI coordinators by Day 30.

### 5.3 Audit method and accuracy check (internal)

1. Join D1-D2-D3 on claim # and line, and fall back to invoice # + part + manufacturer.
2. LLM-extract D4 into versioned rules. A human approves every rule before it is used [memo].
3. Re-adjudicate deterministically. Label each rejection: *valid rejection*, *recoverable (in window)*, *recoverable (aged out)*, or *unknown / needs evidence*.
4. **Accuracy test:** the champion or your advisor blind-labels a random sample of **100 rejected lines**. Compare with the engine. Report % agreement (the day-75 floor is 50% [memo]; aim for 70%+ [coach]).
5. Report **cash-weighted** results, not event counts (memo pattern: "count cash, not events").

---

## 6. Contingency pilot LOI outline

> **Not legal advice.** This is an outline to speed up a conversation. Have a lawyer draft or review the actual document. Also ask that lawyer whether recovering commercial claims on a client's behalf triggers any state licensing or registration rules where you and your clients operate.

**Form:** a 2-3 page letter of intent. It is non-binding except for confidentiality, non-solicitation of staff, data handling and governing law. Then a short pilot agreement.

1. **Parties and purpose.** {Distributor} engages {You} for a 90-day pilot to find and recover rejected or short-paid SPA/ship-and-debit claims.
2. **Scope.** Named manufacturers (start with the top 5-10 from the audit); lookback period; claim types included (SPA/ship-and-debit only, with rebates, MDF and price protection excluded unless added in writing).
3. **Baseline / attribution** (the most important clause; it prevents the "my team would have won that anyway" fight [memo]):
   - The baseline list is the audit's set of claims that were **rejected or short-paid and had no open resubmission** on the baseline date. It is attached as a schedule and signed by both sides.
   - Fees apply only to recoveries on claims on that schedule, plus new claims added later by mutual written approval.
   - Claims the distributor's team already had in active resubmission on the baseline date are excluded.
4. **Fee.** {20-25}% of cash or credit **actually received** on scheduled claims [memo range]. Fees are due {30} days after the credit posts or is paid. There is no fee on unrecovered claims. Optional: a fee cap per manufacturer or per period.
5. **Distributor control.** Every rebuttal or resubmission needs written approval from the distributor before it goes out. The distributor keeps a **do-not-contest list** of manufacturers or programs. Submissions are sent under the distributor's name, through its channels, unless agreed otherwise.
6. **Tail.** Fees apply to scheduled claims submitted during the term and recovered within {120} days after the term ends (recovery cash arrives 60-120 days late [memo]).
7. **Reporting.** A weekly status report (submitted, pending, recovered, denied), plus a final report with root causes and recommendations for prevention.
8. **Data.** The distributor owns its data. {You} may use **de-identified, aggregated** patterns (for example, rejection-reason frequencies by manufacturer) to improve the service. Security controls apply, and data is deleted on request or at termination.
9. **Confidentiality.** Mutual, and it survives termination.
10. **Term and termination.** 90 days. Either side may terminate on {15} days' notice. Fees on scheduled claims already submitted survive.
11. **Path to subscription (non-binding).** If the pilot recovers at least ${X}, the parties intend to discuss a pre-submission validator subscription in the range of $1.5-4k/month [memo estimate], priced below the cost of one claims clerk.
12. **Signatures:** Controller or CFO (economic buyer). Recommended: a sign-off from VP Purchasing (the potential blocker).

---

## 7. Week-by-week plan

Day 1 = Mon 2026-10-12. Day 30 = Tue 2026-11-10.

**Calendar warning** [coach]: Controllers and CFOs disappear into month-end close for roughly the first 5 business days of each month. Book economic-buyer calls for Oct 13-28 and from Nov 9 onward. **Avoid Nov 2-6.** Champions are fine any time.

### Week 1 (Oct 12-16): list, launch, primary checks

| Day | Actions | Output |
|---|---|---|
| Mon-Tue | Run S1-S5, X-ray and job-board searches. Tier and tag the ERP. Draft the NDA and audit one-pager. Set up the tracker and a separate sending domain (warm it up or send low volume). | 150 accounts / ~350 contacts; NDA and one-pager ready |
| Tue | Send 50 emails (Variant A to Tier A champions, Variant B to 15 controllers), 30 LinkedIn notes, and 20 dials. | First replies |
| Wed-Fri | Send 50 emails per day across A/B/C, follow-ups and dials. Start S6 advisor outreach (10 messages). | ~200 first-touch emails; 8-10 calls booked |
| All week | **Primary checks** by phone or browser, outside this sandbox [memo]: (a) SpeedyLabs: live product, customers, distributor coverage; (b) Rivvun: down-market intent; (c) ChannelScaler, CMR, Smyyth: depth and pricing; (d) AD and IMARK: claim-recovery programs; (e) Epicor (Eclipse/P21, Prism) and **Canals**: do they already reconcile SPA rejections? (f) Whitespace: scope. (g) The status of the NAED SPA initiative. | One-paragraph finding per competitor |
| Fri | **Week-1 readout.** Reply rate by variant and segment; kill the worst subject line. | Week-1 metrics |

### Week 2 (Oct 19-23): calls and the thinnest engine

| Actions | Output |
|---|---|
| Hold 10-12 discovery calls. Fill the scoring sheet within 10 minutes of each. Build the rejection-reason taxonomy from verbatims. | 10-12 calls; taxonomy v1 |
| Push every level-1+ call to a sample export (level 2) and the NDA. | 2+ NDAs out, 1+ sample export |
| Write to the user-group leaders (Eclipse Users Group, P21WWUG speakers, TUG) and to 2026 session speakers. | 3+ warm intros |
| **Build the engine** (Days 8-20 [memo]): CSV/X12/PDF in; spreadsheet and report out; no UI. Test it on the first sample export. | Engine v0 on real data |
| Send step 3 (taxonomy) to all non-responders. This also works as a credibility asset. | — |

### Week 3 (Oct 26-30): datasets and the first audit

| Actions | Output |
|---|---|
| Calls 13-22. Book controller second calls before close starts. | 22 calls cumulative |
| Receive the 12-month datasets. Run the first full audit, including the 100-line accuracy sample. | 2+ datasets; first audit draft |
| Deliver audit #1 live (30 min with champion + controller). Walk the baseline schedule and introduce the LOI outline. | First LOI conversation |
| Advisor: 3+ conversations with ex-SPA managers. Offer advisor equity or a per-hour fee to review audit #1. | Advisor shortlist |

### Week 4 (Nov 2-6): complete the sample, deliver audits (champions only; controllers are in close)

| Actions | Output |
|---|---|
| Calls 23-28 (target 25 by Day 30; aim for 28 to absorb no-shows). | 25+ calls |
| Deliver audits #2-3 to champions; schedule the controller readouts for Nov 9-10. | 3 audits |
| Synthesize: segment-level results (electrical / HVAC / MRO), channel mix, incumbent mentions, AI-native mentions. | Synthesis sheet |

### Day 29-30 (Nov 9-10): controller readouts and the decision

- Hold the controller readouts for audits #2-3 and push LOIs to redline.
- Score every gate in §8. Write a one-page decision: **GO / EXTEND / PIVOT / KILL**.

**Daily minimums (weeks 1-3)** [coach]: 40-50 first-touch emails, all due follow-ups, 15-20 dials, 10 LinkedIn notes, and 2+ calls held from week 2 onward.

**Funnel math** [coach assumption, not market data]: 350 contacts × ~5-7% meeting rate over a 4-step sequence plus phone ≈ 18-25 cold calls. Referrals and user-group intros must cover the rest. If the meeting rate is under 4% by Friday of week 2, double down on phone and referrals rather than sending more email.

---

## 8. Go / kill thresholds

### 8.1 Funnel diagnostics (these fix the motion; they do not kill the idea)

| Metric | Healthy [coach] | Action if below |
|---|---|---|
| Positive reply rate (per first-touch, all steps) | 5%+ after 300 sends | Under 2%: change ICP or title before changing the idea. Test Variant C and phone. |
| Meeting rate per contact | 5%+ | Under 4% by day 10: shift effort to dials and referrals |
| Show rate | 80%+ | Send a calendar invite and a day-before reminder |
| Referral rate per call | 30%+ | Under 15% after 10 calls is a **soft red flag** that the pain is not shared among peers |

### 8.2 Day-30 decision gates (evidence about the market)

| # | Gate | GO (green) | EXTEND 2 weeks (yellow) | KILL / PIVOT (red) | Source |
|---|---|---|---|---|---|
| G1 | Discovery calls with the exact buyer title | **25+** | 15-24 | **Under 15** | [memo] 25 = kill line; yellow band [coach] |
| G2 | Calls that size claims and rejections **from a system** | **40%+** | 25-39% | **Under 25%** | [memo] 40%; red band [coach] |
| G3 | Calls describing rejections that age out or are written off with no systematic rework | **50%+** | 30-49% | **Under 30%** ("we resubmit everything") | [coach] |
| G4 | Calls where an incumbent, buying group or ERP "handles it" (unprompted) | **Under 30%** | 30-50% | **Over 50%** | [memo] day-45 line, pulled forward |
| G5 | VC-backed AI-natives named unprompted | 0-1 | 2 | **3+** | [memo] day-45 line |
| G6 | 12-month datasets received under NDA | **3+** | 1-2 | **0** (on track to miss the day-60 kill) | [memo] |
| G7 | Best audit: recoverable $/yr (in-window + aged-out with a credible rebuttal) | **$100k+** at 1+ account | $50-99k | **Under $50k** at every audited account | [memo] $100k; bands [coach] |
| G8 | Leakage ÷ proposed annual fee (validator at $1.5-4k/mo, or the contingency fee) | **3x+** | 2-3x | **Under 2x** | [memo] day-75 3x line, previewed |
| G9 | Engine agreement with human labels on the 100-line sample | **70%+** | 50-69% | **Under 50%** | [memo] 50% floor; 70% [coach] |
| G10 | Median days to export without IT | **10 or fewer** | 11-20 | **Over 20**, or more than 50% need IT | [coach]; pre-mortem #4 [memo] |
| G11 | Commitment: LOIs in redline or signed | **2+ in redline** | 1 | **0 and no controller second calls** | [coach]; day-90 gate needs 2 signed [memo] |
| G12 | Relationship veto (refuse any rebuttal even with approval rights) | **Under 30%** | 30-50% | **Over 50%** | [coach] |

### 8.3 Decision rules

- **GO** (proceed to the day-31-90 plan: convert to 2+ signed contingency pilots by Day 90 [memo]): G1, G2, G6 and G7 all green, **no red** anywhere, and at most 3 yellows.
- **EXTEND 2 weeks:** no red on G4, G5, G9 or G12, but one or more of G1, G2, G6, G7 is yellow. Re-run the gates on Day 44.
- **PIVOT** (do not kill the engine):
  - **G12 red, everything else green:** the recovery wedge is politically capped. Re-test as a **prevention-only validator** sold as SaaS (the PE persona's preferred product [memo]).
  - **One segment green and the others red** (minimum 8 calls per segment for any segment-level conclusion [coach]): narrow to the green segment.
  - **G4 red because of one buying group or ERP:** test selling *through* that party (an OEM/white-label conversation) before killing.
- **KILL** (on any one): G5 red; G4 red across segments; G1 red after the 2-week extension; G7 and G8 both red on 3+ audits; or G9 under 50% after one tuning cycle. If you kill, the memo's backup is **VSC TPAs** [memo]. Also ask whether any learning transfers to Pick 4 (the manufacturer-side mirror).
- **Always a kill signal** [memo]: starting vertical-2 connectors before these gates pass.

### 8.4 Gates carried past Day 30 [memo]

| Day | Kill if |
|---|---|
| 45 | More than 50% say an incumbent, buying group or ERP "handles it," or 3+ VC-backed AI-natives come up unprompted |
| 60 | No 12-month dataset received under NDA |
| 75 | Leakage found is below 3x the annual fee, or correct adjudication on real data is below 50% |
| 90 | Fewer than 2 signed contingency pilots, a projected sales cycle above 9 months, or more than 60 days of custom integration per account |

---

## 9. Objection quick reference

| Objection [memo role-play, expect these] | Response (then ask a question) |
|---|---|
| "Our SPA data is a mess." | "That's normal. Send it messy. Part of what we're testing is whether messy data still yields a number. Which manufacturer is worst?" |
| "40 manufacturers, each with its own portal and codes." | "Then start with the top 5 by claimed dollars. Which five would those be?" |
| "If you make us look aggressive, the rep calls my VP." | "You approve every submission and keep a do-not-contest list. The audit itself contacts no one. Which manufacturers are off-limits?" |
| "Our buying group / ERP may do this." | "Have they shown you anything? What does it do with a short-paid line?" (Record it for G4.) |
| "We won't sign a multi-year SaaS deal." | "Nothing to sign for the audit. After that it's contingency only, 90 days." |
| "Send me info." | That is level 0. Ask: "What would you need to see to send one month of one manufacturer's claims?" |

---

## 10. Sources

**This session (search snippets only; pages not opened):**
- EDI 844 / 849 definitions and the healthcare/pharma emphasis: [Cleo 844](https://www.cleo.com/edi-transactions/edi-844), [Cleo 849](https://www.cleo.com/edi-transactions/edi-849), [SPS Commerce 849](https://www.spscommerce.com/edi-document/edi-849-response-product-transfer/), [TrueCommerce 849](https://www.truecommerce.com/edi-transaction-codes/edi-849), [PartnerLinQ 849](https://www.partnerlinq.com/edi-transaction/edi-849-response-to-product-transfer-account-adjustment)
- Epicor Insights 2026 (May 18-21, Nashville; user-group meetings): [DCKAP](https://www.dckap.com/blog/epicor-insights-2026-what-to-expect/), [Epicor Insights](https://www.epicor.com/en-us/insights/americas/)
- P21WWUG CONNECT 2026 (Aug 16-19, Orlando): [Estes Group](https://www.estesgrp.com/solutions/erp-solutions/prophet-21/prophet-21-connect/), [Mind Harbor](https://www.mindharbor.com/p21wwug-connect-2026-orlando)
- Eclipse Users Group / Encounter: [LinkedIn](https://www.linkedin.com/company/eclipse-users-group)
- TUG / TUG CONNECTS (Infor SX.e/CSD): [TheUserGroup.org](https://www.theusergroup.org/), [TUG CONNECTS](https://www.tugconnects.com/)
- SPA mechanics and rejection reasons (vendor content): [CMR SPA guide](https://computermarketresearch.com/what-are-special-pricing-agreements-spa-a-2026-channel-guide/), [Enable](https://www.enable.com/resources/articles/managing-spas-ship-debit-claimbacks-mdfs-and-more/)
- NAED SPA streamlining initiative (date not visible in snippet): [Architect Magazine](https://www.architectmagazine.com/technology/lighting/naed-helps-standardize-manufacturer-distributor-rebate-process_o/)

**Upstream:** [MEMO.md](MEMO.md) §5 Pick 1, §10-11; [dossiers/r3-b2b-claims-engine.md](dossiers/r3-b2b-claims-engine.md) §4-8.
