# CodeTab: a lookup-speed trainer for open-book trade-license exams, Spanish first

**One-liner:** a phone-side trainer that measures and improves how fast a candidate finds answers in their own tabbed code book, then predicts whether they are ready. The first market is Spanish-dominant contractor candidates on open-book exams, starting with Miami-Dade and Florida CILB.

**Score: 49/100. Verdict: pass as the company to raise on.** It is acceptable only as a capped $1.5k, 6-week side experiment for learning paid acquisition.

| Dimension | Score | Why |
|---|---|---|
| tech_insight_edge | 4 | The drill and the Spanish tutor can be copied in a weekend. The readiness model is the only possible moat, and it can't be validated with sparse, self-reported outcomes. |
| no_domain_required | 8 | The books, statutes and exam outlines are all public. A bilingual reviewer on contract covers accuracy. |
| bootstrap_to_raise | 6 | First revenue in about 6 weeks is realistic. The traction doesn't transfer to a fundable story without a pivot. |
| product_not_services | 9 | Software margins above 90%. Human review per item is the only labor. |
| market_size | 4 | About $2-6M SAM for the Spanish wedge and a $5-20M ARR ceiling for trades. |
| whitespace | 3 | Dakota Prep, EstatePass (free), Zack Academy (Spanish CA), Mike Holt and many indie AI apps. |
| gtm_without_network | 6 | High-intent search plus Facebook groups. Spanish buyers lean toward walk-in, phone-first schools. |

## Thesis

Candidates fail open-book trade exams because they run out of time finding answers, not because they lack knowledge. Florida Business & Finance allows tabbed, highlighted books, and prep schools tell candidates to "find it in under 60 seconds." Nobody measures that skill. CodeTab would measure it, model it with knowledge tracing, and turn timed-lookup traces into a readiness score that could eventually price a pass guarantee. The idea fits this founder closely, because it is almost a direct port of his adaptive language-tutor stack.

**Correction from review:** the original Spanish-first wedge, CSLB Law & Business and the CA trades, is **closed-book** ([CSLB B study guide](https://cslb.ca.gov/Resources/StudyGuides/BStudyGuide.pdf)). In California the lookup trainer does nothing, and what remains is a commodity Spanish question bank. The only wedge that survives is where open-book and Spanish overlap: **Miami-Dade County contractor exams, which are open-book and offered in English or Spanish** ([miamidade.gov](https://www.miamidade.gov/building/contractor-examinations.asp)). That overlap is much smaller.

## Workflow today

1. The candidate documents experience hours and applies to the board (DBPR/CILB, Miami-Dade, AZ ROC).
2. They buy the mandated copyrighted books (FS 455/489, the Builder's Guide to Accounting, the Florida Contractor's Manual, the NEC, the I-codes) plus tab kits or pre-tabbed packages.
3. They study through a $499-999 course, Mike Holt or Mometrix books, free AI banks (EstatePass) or YouTube. Union apprentices get prep paid by their JATC.
4. They take a timed PSI or Pearson exam, flipping through the physical book. Self-reported first-attempt pass rates are about 50% for FL B&F and 35-45% for the FL GC exam (low evidence).
5. Failing means paying again and waiting weeks, while missing out on the licensed-worker wage premium.

Lookup speed in step 4 is managed with a hand-written index sheet and "practice with your tabs."

## TAM (labeled estimate, no exam-count source found)

- **Trade and contractor exam attempts:** about 210-370k a year.
- **Software-capturable consumer spend:** about $10-55M a year. Including course and tab-kit spend now going to schools, about $60-150M.
- **Spanish-first SAM:** about $2-6M. The original estimate counted CSLB, so the open-book-only figure is likely at the low end.
- **B2B apprenticeship seats:** about $30-90M.
- **All occupational licensing:** $0.5-1.5B, unverified, and crowded.

## Competitors

| Player | What they do | Scale |
|---|---|---|
| Dakota Prep | NEC AI tutor and 3,000+ questions, all 50 states, 2026 NEC | Claims 20k+ students and 80+ apprenticeship organizations (self-reported) |
| EstatePass | Free AI prep for FL contractor exams, with explanations that cite where the answer is in the reference book | SEO-heavy, Product Hunt launch |
| Zack Academy | Spanish CA contractor prep, including a corporate version | Established online school |
| Contractors State License Schools | CA classroom schools, "se habla español", claims a 99% pass rate | Multi-location |
| Mike Holt | NEC training leader since 1974 | Dominant brand |
| 1 Exam Prep / CTC / AtHomePrep | Tabbed book packages and courses | Small private firms, $499-999 anchor |
| Code Compass, Sparky AI, App Store NEC apps | AI code drills and question banks | Indie |
| YC W25 Miyagi Labs and Alice.tech | General AI exam prep | Funded and could move into this space |

## Why tech would be the moat (and why it mostly isn't)

**Not moats:**
- LLM-generated questions.
- AI explanations.
- Spaced repetition.
- A Spanish toggle.
- The drill UI.

**Possible moats:**
1. **An outcome-calibrated readiness model** built from lookup traces joined to pass/fail results.
2. **A versioned "reference graph"** of structure for each state, edition and allowed book, rebuilt on each code cycle.
3. **Measuring behavior in the physical book.**

The skeptics' rebuttal holds:
- Boards don't release candidate results, so outcome labels are sparse and biased.
- N per exam stays in the low thousands.
- Page numbers vary by printing, so the graph is hand-built content work, not a pipeline advantage.

Distribution (EstatePass's SEO, Dakota's apprenticeship relationships) will matter more than model quality.

## Wedge → path to scale

- **Wedge:** Miami-Dade contractor exams in Spanish, then FL CILB Business & Finance in Spanish. $99 per exam, or $149 with a capped retake guarantee.
- **Expand:** AZ ROC, NC and NV (open-book at PSI), then TX/FL electrical and plumbing code-navigation packs.
- **B2B:** seat packs for Spanish-language contractor associations, trade schools and mid-size contractors.
- **Venture second act:** a readiness API and dashboard for apprenticeship sponsors and workforce boards (WIOA/DOL-funded), plus continuing education for recurrence.
- **Assessment:** the probability of a $100M+ outcome is low. The realistic outcome is a $1-5M ARR profitable niche, or an acquisition by a prep company.

## Steelman (bull, 64)

- It is the cleanest path to paying customers by month 2 for this founder.
- Lookup speed is unmeasured, and a data-backed guarantee changes the price anchor from free question banks to a guaranteed outcome.
- Magoosh (under $1M raised, cash-flow positive since 2012) and Pocket Prep (100+ exams, educator seats) show test prep can bootstrap into scale.
- Copyright risk is manageable if the product maps structure only.

## Skeptics (44 and 45)

- **The wedge contradicts itself:** CSLB is closed-book, so in California the moat and the market don't overlap.
- **Spanish CA prep is already served:** Zack Academy, schools advertising "se habla español", and CSLB's free study guides.
- **Pure acquisition business:** one-purchase LTV and copyable features. Foundation models make Spanish and tutoring free.
- **Copyright:** ICC and NFPA litigate (UpCodes), and the FL private books get no "the law is public" defense.
- **Guarantee and content risks:** UDAP scrutiny of pass guarantees and exam-security risk from LLM-memorized content.

## What's good

- Near-perfect skill reuse: adaptive tutoring, knowledge tracing and LLM generation with validation.
- Revenue within 4-8 weeks on less than $3k, with a findable, high-intent buyer.
- A real, unmeasured bottleneck (time to locate), and Miami-Dade offers the exam in Spanish.
- Software margins.
- A cheap way to learn paid acquisition and conversion.

## What's bad

- A small market, with a $5-20M ARR ceiling for trades.
- Free and AI-native incumbents, so the whitespace is about 3/10.
- The readiness moat can't be validated without board outcome data.
- Churn by design: every customer leaves the day they pass.
- Copyright exposure on structure maps of private books.
- Traction does not make the founder fundable for a different, bigger company.

## Build plan

**Architecture:**
- A mobile-first offline PWA that sits next to the physical book, with a Spanish/English toggle.
- A Postgres reference graph (book → edition → chapter → section → table → page range, plus the books allowed per exam), storing structure only.
- An offline LLM item pipeline. Every item must point to a graph node. Python recomputes numeric answers, embeddings catch duplicates, and the Spanish is back-translated to check it.
- Human review of every item by the founder plus a bilingual licensed instructor ($30-50/hr).
- Grading of the drill timer on section or table ID, not page number.
- A BKT/IRT learner model with a time-to-locate distribution.
- A Spanish tutor grounded only in graph metadata and public statutes.
- A 200-item golden eval set.

**Stack:** Next.js/TS, Supabase (pgvector), Stripe, Vercel, PostHog, Python, a batch LLM API plus a small fast model for the live tutor. About $50-100/mo fixed.

**Weekends 1-4:**
1. A one-hour IP-attorney consult, a Spanish landing page with a refundable $99 pre-sale, $300 of ads, and mapping the first book.
2. 150 reviewed items, the timer, section grading and Stripe.
3. Diagnostic, readiness score, Spanish tutor, and $20 back for a score-report screenshot.
4. The first paid cohort and weekly calls.

**Data flywheel:** drill traces plus outcome labels train the readiness model. That makes the guarantee priceable, which lifts conversion and brings in more outcomes.

**Hardest risk:** is lookup speed actually the binding constraint? Test it in week 1:
- Have 5 paid candidates do 30 timed lookups each.
- Compare their median time-to-locate with the exam's time budget per question.
- If most already fit comfortably inside it, stop.

## Bootstrap-to-raise plan (months 0-12)

- **Month 0:** confirm the exam rules (that Miami-Dade and CILB allow books, and that Miami-Dade offers Spanish) and get the IP consult. Run the lookup-speed test and the pre-sale page.
- **Month 1:** a drill MVP for one exam and 10 pre-sales. **Kill gate 1.**
- **Month 2:** paid launch with $1.5k of ads. **Kill gate 2:** 30 paid users. First revenue is about $3k.
- **Months 3-4:** a second exam (FL B&F in Spanish), SEO content in Spanish, and outcome surveys. Target $5k MRR.
- **Months 5-6:** a third and fourth exam (AZ ROC or NC). Pilot one B2B seat pack with a Spanish contractor association or trade school. Target $10k MRR.
- **Months 7-9:** reach 200+ verified outcomes and test whether lookup features predict pass/fail better than accuracy alone (AUC lift). Sign 2-3 B2B annual contracts.
- **Months 10-12:** decide.

**Fundable milestone:** all of these together:
- $25k+ MRR.
- More than 25% of revenue from B2B annual contracts.
- A readiness model with a demonstrated AUC lift and a profitable guarantee.
- One apprenticeship or workforce-board buyer.

Absent that, run it as a cash-flow side business and use it to fund the search for a bigger B2B idea.

## Cofounder needed

None to start. Hire a bilingual licensed contractor or exam instructor as a paid reviewer rather than an equity partner. Add a GTM or partnerships cofounder only if B2B apprenticeship sales show traction.

## First 30 days

1. Verify from first-party sources that the Miami-Dade and CILB exams allow books, and that Miami-Dade offers Spanish.
2. Run the 5-candidate lookup-speed study.
3. Get the IP-attorney consult.
4. Launch the Spanish pre-sale page and spend $300 on ads.
5. Map one book.
6. Ship the 150-item drill and Stripe.
7. Interview 15 candidates and 3 schools.

## Kill criteria

- Most candidates already fit inside the per-question time budget, so lookup speed is not the bottleneck.
- Fewer than 10 pre-sales in month 1, or fewer than 30 paid users in 6 weeks on $1.5k of ads.
- An IP attorney advises that structure maps of the FL private books are infringing, or a rights holder sends a cease-and-desist.
- Blended CAC above $60 on a $99 product.
- Under $5k MRR by month 6.
- Lookup features add no predictive lift by month 9.

## Sources

- https://cslb.ca.gov/Resources/StudyGuides/BStudyGuide.pdf
- https://www.miamidade.gov/building/contractor-examinations.asp
- https://www.cslb.ca.gov/Resources/IndustryBulletins/2023/23-02_Spanish_Study_Guides.pdf
- https://www.cslb.ca.gov/Resources/IndustryBulletins/2023/23-05SpanishLawExam.pdf
- https://open-exam-prep.com/study-guides/ca-general-contractor/cslb-law-and-governance/exam-logistics-two-exam-path
- https://open-exam-prep.com/study-guides/az-general-contractor/introduction/exam-facts
- https://contractortrainingcenter.com/products/online-package-north-carolina-building-contractor-exam-prep
- https://contractortrainingcenter.com/a/answers/3936597/What-books-do-I-need-to-pass-the-Florida-Business-and-Finance-exam
- https://www.estatepass.ai/contractor/best-contractor-exam-prep/
- https://www.estatepass.ai/contractor/pass-rate/
- https://www2.myfloridalicense.com/servop/testing/documents/cilb_faq.pdf
- https://apps.apple.com/us/app/-/id1673601265 (Dakota Prep)
- https://www.zackacademy.com/class/contractor-licensing-and-renewal/ca-contractor-license-exam-prep---spanish
- https://www.contractorsischool.com/contractors-license-courses
- https://mikeholt.com/examprep-master.php
- https://techcrunch.com/2020/11/16/a-court-decision-in-favor-of-startup-upcodes-may-help-shape-open-access-to-the-law
- https://en.wikipedia.org/wiki/Magoosh
- https://www.pocketprep.com/?p=1905
