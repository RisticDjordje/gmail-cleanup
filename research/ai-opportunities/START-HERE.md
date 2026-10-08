# Start Here: The Plain-English Version

*Read this first. It explains the research, the industries and the top ideas in simple terms. The detailed brief is [FOUNDER-FIT.md](FOUNDER-FIT.md); the startup landscape is [LANDSCAPE.md](LANDSCAPE.md); the full history is [MEMO.md](MEMO.md).*

Any acronym, industry word or startup term on this page is defined in the [Glossary](#glossary) at the bottom.

## TL;DR

- **What was done.** Roughly 470 AI research agents, over 7 rounds, generated and tested about 200 startup ideas for using AI in "traditional" US industries such as importing, construction, insurance and wholesale. Each idea was scored, attacked by critic agents, and checked against about 1,360 recent Y Combinator (YC) startups and top venture capital (VC) deals to see who is already building it.
- **The honest bottom line: nothing is a slam dunk.** The best fit score is 55 out of 100; 70 would mean genuinely compelling. Every top idea already has competitors. No real customer was interviewed, so demand is still the biggest unknown.
- **#1 pick: RegistryPilot.** Since July 2026, every import regulated by the CPSC (Consumer Product Safety Commission, the federal product-safety agency) must carry safety-certificate data. RegistryPilot checks whether a factory's test report really covers a small online brand's product, from a lab the agency accepts.
- **Backup 1: PlanSet.** It guarantees a deck or pergola builder's permit gets approved by the city first time, with any resubmissions included in the price.
- **Backup 2: Switchboard.** It pulls data out of decades-old business software and proves, to the cent, that it moved correctly. Buyers are the firms that do these moves.
- **Why these three fit you.** None needs a license or industry contacts. All are mostly engineering. RegistryPilot could take card payments in month one. The catch: the ceilings are modest, and well-funded rivals exist (for example Complir, a YC company that raised $11M).
- **Treat each as a bootstrap test, not a venture pitch.** Each has a "kill test": a small paid trial with a set point at which you stop. For RegistryPilot, you stop if you sell fewer than 10 packs at $299 from 200+ emails in 30 days.
- **This week:** check Netflix's rules on outside work and on who owns what you build (IP). Publish web pages people will find on Google before the CPSC rule expands to mail shipments on 2026-10-22. Study Complir, and try Comply PRO+ (a filing tool for Amazon sellers) as a customer.

## How to read the scores

- **Fit (0-100)** is how well an idea suits *you*: a full-stack, applied-AI engineer with no industry background and little money, who wants to bootstrap first and raise later. 54-55 is the best found; 70+ would be compelling. Scores fell twice: deep dives cut 5-14 points, and the competitor check cut another 4-6.
- **Crowding:** **open** = no direct competitor found. **Contested** = direct competitors exist, but a narrow slot is free. **Taken** = someone already owns the space.
- The detailed brief adds three sub-scores out of 10: **B→R** (start cheaply, raise later?), **Prod** (software rather than manual service?) and **NoDom** (doable without years inside the industry?).

## The big picture in plain English

"AI applied to traditional industries" means using AI for the clerical work that keeps old businesses running: reading PDFs, entering orders, answering phones, filling in government forms, checking invoices.

Take Maya, who runs a three-person kids' toy brand on Shopify and buys from factories in China. Since July 2026, every shipment needs about 16 fields of safety-certificate data per product. Her factories send test reports from 5-20 different labs, and nobody on her team knows whether a given PDF actually covers the toy she is importing. Multiply Maya by thousands of businesses and you get the opportunity.

These industries run on paperwork, clerks and old software, and skilled workers are retiring. Across about 500 recent startups, the most common pitch was "replace the outsourced back-office seat": do with software the job a company now pays an outside clerk to do.

**Crowded areas to avoid:** phone-answering bots for specific industries (35+ companies); medical billing and insurance pre-approval (about 25); turning emailed orders into entries in a wholesaler's order system (about 25); construction estimating from drawings; month-end accounting; and tools for insurance brokers. Top VC firms write $25-55M checks to the leaders here.

**The gaps come in two kinds:**
- **Messy data and old systems,** where the AI must read the buyer's own operating data or old software (data migration, warranty analysis).
- **Slow-moving buyers,** such as water utilities, telecom, oil and gas back offices and farm co-ops. Real gaps, but wrong for bootstrapping.

## The recurring lessons

- **Sell to whoever loses money when the process breaks.** Several ideas only survived after switching to the side that takes the loss and keeps whatever is recovered.
- **Be the checker, not the licensed signer or the filer.** If the scarce thing is a license, the license holder wins, and filing is already sold cheaply. The free slot in every top pick was a neutral "is this right?" check beside the existing tool.
- **Avoid ideas that need an insider's contacts or data.** SPA Claims Autopilot scored 50 but gets "pass unless an insider joins," because the key data sits with industry people you don't know.
- **Don't build on a platform that can copy you.** If Shopify, a claims system or the main industry software holds the customer's records, it can add your feature for free.
- **Look for a rule or gatekeeper that forces the work.** A new government deadline, or a city reviewer who rejects permits, means people already have to pay. Public rules and online searching let you reach buyers without a network.
- **Avoid slow buyers, and expect copycats.** Government contracts and committee decisions kill small teams; prefer customers who decide in days. An easy demo gets copied within about 6-12 months. A lasting edge comes from data that builds up across customers, such as a growing library of verified reports.

## The top ideas, explained simply

| Idea | In one plain sentence | Fit | Crowding |
|---|---|---|---|
| RegistryPilot | Checks whether a factory's safety test report really covers what a small online brand imports. | 55 | Contested |
| PlanSet | Produces a deck builder's permit package that the city approves first time. | 50 | Contested |
| Switchboard | Moves a small business's records out of 1990s software and proves nothing was lost. | 50 | Contested |
| SPA Claims Autopilot | Wins back discounts manufacturers refused to repay to wholesalers. | 50 | Contested |
| CodeTab | Phone app that trains contractors to look up answers fast in open-book licensing exams. | 49 | Open (not re-checked) |
| PrequalPassport | Keeps a small contractor's safety paperwork current so big clients keep letting them on site. | 49 | Contested |
| FieldSignal | Finds money an equipment maker loses on dealers' repair bills. | 48 | Contested |
| Air Headroom | Maps where a new on-site power plant can still get an air-pollution permit. | 47 | Open |

---

### RegistryPilot: Checks factory safety test reports for small online brands

**The industry in 30 seconds.** Products sold to US consumers, especially kids' products, must meet CPSC safety rules. The seller proves this with a certificate, a short document saying "this product passed these tests," backed by a lab's test report. Since July 8, 2026, every regulated import must carry that certificate data (about 16 fields per product). Mail shipments join on October 22, 2026. The players: the CPSC, big testing labs, Shopify and Amazon, customs brokers, and roughly 40-80k small importers (unverified).

**The problem.** Back to Maya. Her customs broker asks for certificate data. She guesses which of dozens of rules apply to a teething toy. The factory emails a PDF that may be in Chinese, issued to a different company or product, or from a lab not approved for that test. She can't tell. She re-types 16 fields per product into the government registry, and a new color or factory means starting over. If Amazon rejects her certificate, it pulls the listing and the product stops selling. Lab websites only handle their own reports; consultants charge per product.

**What you'd build.** Maya uploads the factory PDF and connects her catalog → the AI works out which rules apply to each product and checks: does the report cover this product and rule, is the lab approved, was it issued to someone else? Unsure cases go to a human → she gets a verdict, a list of gaps and a certificate ready to file.

**How it makes money.** Card payments: about $199-499 for a one-time certificate pack, then $49-399 a month to keep certificates in sync with the catalog.

**Why it's interesting for you.** No license or contacts needed, because the rules are public. Reading messy PDFs is an applied-AI problem. Revenue could come in month one.

**The catch.** Filing is crowded: labs, Shopify's built-in fields, Comply PRO+ and Complir (YC-backed, $11M raised). Only checking is open, perhaps for 6-12 months. Nobody has shown how often shipments get held, so the pain may be mild. A wrong "you're covered" on a kids' product could get you sued. A CPSC-only tool probably tops out around $20-50M a year in revenue.

**Score:** 55/100 (was 61), contested.

Full details: [dossier](dossiers/r6-4-registrypilot-cpsc-certificate-autopilot.md)

---

### PlanSet: Gets deck builders' permits approved by the city first time

**The industry in 30 seconds.** A US deck, pergola or patio cover usually needs a permit, the city's official OK. The builder submits drawings and a site plan (a map of the lot showing where the structure sits relative to the property lines). A city plan reviewer checks these against local building rules. Americans build roughly 3-4 million decks a year; about 1-1.5 million go through permits. Drawings are cheap: hardware makers Simpson and MiTek give away deck-design tools, and freelance drafters charge $50-200.

**The problem.** Mike runs a 6-person deck company. He prints the free Simpson plan, marks up the lot map by hand and submits. The reviewer rejects it because the site plan is unclear, which some cities name as a common reason. He fixes it and waits again. Each round costs days to weeks (not verified), while his crew sits idle. Every city's checklist differs.

**What you'd build.** Mike sends an address plus a sketch, photo or Simpson export → the AI turns it into a structured deck model he confirms; plain code, not AI, checks the structural rules; the system pulls lot boundaries from public county maps, draws the site plan and formats everything to that city's checklist → a permit package, resubmissions included.

**How it makes money.** Card payments: about $99-179 per permit or $199-399 a month. Each package costs under $1.50 to make.

**Why it's interesting for you.** Uses your full-stack, applied-AI and mapping skills, needs no license, and could earn money within about 90 days.

**The catch.** Small ceiling, roughly $5-20M a year. Site Plans AI and BluePrints AI already sell AI site plans. Cities are adding AI pre-checks (Archistar, in 30+ cities), making rejections cheaper. County map lines can be off by feet. Per-city setup can turn this into manual service work.

**Score:** 50/100, contested.

Full details: [dossier](dossiers/r6-5-planset-a-permit-autopilot-for-outdoor-l.md)

---

### Switchboard: Moving small businesses' data out of decades-old software

**The industry in 30 seconds.** Many vet clinics, dentists, auto repair shops and insurance agencies still run desktop programs from the 1990s and 2000s, storing data in old formats that are hard to read without the original vendor. Newer cloud software companies want these customers, so they must move years of records into their own product, a "conversion." Roughly 1-1.5 million such businesses exist and about 5-6% switch each year: about $60-130M a year in conversion fees. Players: cloud vendors (Tekmetric, Digitail, ezyVet), specialist converters (Bitwerx, RecordLinker) and AI migration startups; in April 2026 accounting software maker Sage bought one, Doyen AI.

**The problem.** Priya runs sales at a cloud startup for auto repair shops. A shop is ready to sign, then asks: "Can you bring over my 15 years of customers and unpaid invoices?" Her team has scripts for common old programs, but not this one. Conversions take roughly 2-8 weeks and are only partly checked, by hand, so errors surface as support tickets for weeks. Fees of about $500-2,500 are often waived to close the deal. Some deals are lost.

**What you'd build.** A toolkit for converters and vendors' migration teams. Raw database files from the shop's PC → rebuild the tables without the vendor's documentation, have a language model guess each column's meaning and test those guesses against the data, map everything to the new product's import format → clean data plus a signed report proving balances match to the cent.

**How it makes money.** About $300-1,000 per conversion at first, later about $2-3K a month per vendor. Realistic ceiling: about $10-40M in yearly recurring revenue, or a sale to a bigger company.

**Why it's interesting for you.** The buyers are software companies; the work is reverse engineering, data pipelines and testing. No license or insider knowledge.

**The catch.** Specialists already cover several industries. Each industry has fewer than 20 buyers. The work stays partly manual for a long time. Old-software vendors can lock or encrypt their files. You could be sued if a conversion is wrong.

**Score:** 50/100, contested.

Full details: [dossier](dossiers/r6-1-switchboard-a-source-side-extraction-and.md)

---

### SPA Claims Autopilot: Wins back discounts manufacturers refused to pay

**The industry in 30 seconds.** Electrical and HVAC (heating, ventilation and air conditioning) distributors are wholesalers: they buy wire, lights and equipment from manufacturers and resell to contractors. To help win a big job, a manufacturer often grants a one-off discount, a special pricing agreement (SPA). The distributor sells at the low price, then claims the difference back from the manufacturer. There are roughly 2,500-4,700 such US distributors. Software incumbents: Enable (valued at $1.12B), Canals ($35M raised) and Epicor.

**The problem.** Dana is pricing manager at a $300M electrical distributor. Her company is owed about $5-16M a year in these claims across about 40 manufacturers, each with its own rules. Some claims come back rejected or short-paid (paid less than owed), often over small mismatches like an expired agreement or a wrong part-number ending. Her team has no time to fight these, so after 90-120 days they write them off. Roughly 3-6% of claim value leaks away: about $150k-1M a year for Dana, of which about $50-500k is still recoverable. (Unmeasured estimates.)

**What you'd build.** Dana uploads exports from her ERP (main ordering and accounting system), the SPA PDFs and rejection notices → the AI reads each agreement, matches each rejected claim to the right agreement and customer, judges whether the rejection was fair and ranks fixable claims by dollars → a Recovery Report, then corrected claims ready to send, each citing the exact clause.

**How it makes money.** A free review of the last 12 months, keeping 20-25% of what you recover (about $10-125k per customer, once). Then a subscription of $1.5-4k a month plus a per-claim fee, roughly $18-48k a year.

**Why it's interesting for you.** The hard parts are record matching and measuring AI accuracy, which fit your machine-learning skills. Almost no money needed.

**The catch.** You need an insider: strangers rarely get confidential pricing data. Verdict: pass unless a former SPA manager joins as cofounder. Enable, Canals and SpeedyLabs (YC) are each a few weeks of work from shipping this. Manufacturers pay 60-120 days after refiling, so first cash arrives around months 5-8. Year one looks like audit services, not software.

**Score:** 50/100, contested.

Full details: [dossier](dossiers/r6-7-spa-claims-autopilot-a-recovery-first-cl.md)

---

### CodeTab: A phone app that trains contractors to find answers faster

**The industry in 30 seconds.** In most states, builders, electricians and plumbers must pass a licensing exam. Some are "open-book": you bring approved reference books, marked with your own tabs, and look up answers against the clock. Roughly 210,000-370,000 trade exams are taken each year. Prep comes from $499-999 courses, AI question apps (EstatePass is free) and Spanish-language schools.

**The problem.** Carlos, a Spanish-speaking builder in Miami, is taking the Miami-Dade County contractor exam, open-book and offered in Spanish. He knows the material, but every timed question means flipping through a thick book. Prep schools say "find it in under 60 seconds," but nobody measures whether candidates can. First-try pass rates are reported at about 50% for one Florida exam (weakly sourced). Failing means paying again and waiting weeks.

**What you'd build.** Carlos sets the app beside his real, tabbed book → it asks questions and times his lookups; the AI finds which sections slow him down, drills those and explains answers in Spanish → a readiness score predicting whether he is fast enough to pass.

**How it makes money.** About $99 per exam, or $149 with a capped retake guarantee. Later, bulk licenses for trade schools.

**Why it's interesting for you.** It reuses almost all of your adaptive-tutor work. First revenue in about 6 weeks, on less than $3k.

**The catch.** Small market: about $2-6M for the Spanish starting segment, ceiling roughly $5-20M a year. Easy to copy, and EstatePass is free. Customers leave the day they pass. Mapping copyrighted books could bring legal trouble. California's exam is closed-book, so the bigger Spanish-speaking market is out. Most important, slow lookup may not be why people fail; 5 paying candidates in week 1 would settle that.

**Score:** 49/100, open (not re-checked). Verdict: a side experiment, not the company.

Full details: [dossier](dossiers/r6-3-codetab-a-trainer-for-finding-answers-fa.md)

---

### PrequalPassport: Keeps small contractors approved for big-client work

**The industry in 30 seconds.** Before a refinery, utility or pipeline company lets an outside crew on site, the crew must pass a safety check called "prequalification." Three online platforms run most of these: ISNetworld (ISN), Avetta and Veriforce. The contractor pays the platform, fills out a long questionnaire, uploads safety documents and gets a grade. No passing grade, no work. Roughly 150,000-250,000 US firms are on at least one (an estimate).

**The problem.** Rosa runs a 25-person industrial maintenance company near Houston. Her biggest client requires an ISN subscription (about $1,700-5,000 a year) and a grade of B or better. She uploads her yearly injury summary (the OSHA 300A government form), insurance certificates, training records and written safety programs. Every document expires. When an insurance certificate lapses, her grade turns yellow and her crews can't start until she fixes it. This eats weeks of office time, or about $5,000 for a consultant.

**What you'd build.** Rosa uploads the documents she has → the AI pulls out dates, injury numbers and coverage amounts while plain code re-checks the math → draft questionnaire answers, a gap list, an expiry calendar and draft safety programs. If a reviewer rejects something, she pastes in the note and gets a fixed version. She still submits it herself.

**How it makes money.** About $149-499 a month plus a one-time $500-1,500 "get to green in 14 days" setup fee, with a free gap scan to bring people in. Estimated core market: roughly $110-430M a year.

**Why it's interesting for you.** Contractors already pay just to be listed, and the rules are public. The hard part is extracting and checking facts from documents. Buyers can be reached through web search, not a network.

**The catch.** Avetta says it will give contractors real-time feedback on submissions in 2026, free inside a tool they already pay for. A small tool, PrequalPilot, already writes AI answers for ISN. The platforms hold the data on what passes, and their terms of service may restrict outside help. AI-written safety programs carry legal risk, so a certified safety professional must review them, which pulls you toward services.

**Score:** 49/100, contested. A backup; fundable only if it grows into the contractor's main compliance record system.

Full details: [dossier](dossiers/r7-8-prequalpassport-an-ai-stay-green-autopil.md)

---

### FieldSignal: Finds wasted money in equipment repair claims

**The industry in 30 seconds.** When you buy a trailer, boat or riding mower, the maker promises to pay for repairs for a set time: a warranty. When it breaks, the dealer repairs it and bills the maker: a warranty claim. About 1,500-3,000 US makers with $50M-$2B in yearly sales run these programs, from trailers and boats to small farm machines and commercial kitchen equipment. Warranty costs them about 1.5-2.5% of sales, roughly $9-15B a year combined. Big makers buy AI tools from Axion and Viaduct; smaller ones use claims software (such as ServiceCPQ) plus Excel.

**The problem.** Dave is warranty manager at a trailer maker with about $300M in sales, paying out about $4.5-7.5M a year in claims. One to five staff approve claims by eye. Padded labor hours, duplicate claims and out-of-coverage units slip through. Many failures trace to a supplier's bad part, but billing suppliers back happens over email, so little money returns. Every claim has a technician's note ("brake drags, replaced caliper"), but nobody reads thousands of them, so new defects surface only in the monthly Excel "top 10."

**What you'd build.** Dave uploads 24 months of claims → a large language model (LLM) maps his messy columns to a standard format; fixed rules flag overbilling and duplicates; the LLM extracts symptom, part and cause from each note, and statistics group failures and link them to suppliers → within 72 hours, a dollar report: money lost to bad claims, money billable to suppliers (with evidence) and emerging defects.

**How it makes money.** A one-time audit at about $15-25k, credited toward a subscription of about $40-100k a year.

**Why it's interesting for you.** Pure data work: text extraction, record matching, statistics on small datasets. No license.

**The catch.** ServiceCPQ and Syncron already sell AI overbilling checks and supplier bill-back to these makers. Claims software companies own the data and could add this cheaply. Makers are slow to share data, so a first sale takes about 2-6 months. Flagged money isn't cash, since makers rarely claw back paid claims. Verdict: watch; best sold under a claims software company's brand (white-label).

**Score:** 48/100 (down from 53), contested.

Full details: [dossier](dossiers/r6-6-fieldsignal-warranty-claims-analysis-and.md)

---

### Air Headroom: A map of where new on-site power plants still fit

**The industry in 30 seconds.** AI data centers need more power than the grid can deliver quickly, so many build their own gas turbines or big engines. Anything that burns fuel needs a state air permit capping its pollution. Air-quality consultants write these permits. US air consulting is roughly $2-4B a year; the data-center slice is about $100-330M. Trinity Consultants is the largest.

**The problem.** Each area has limited "air headroom": how much more pollution, like nitrogen dioxide or fine dust, the air can take before breaking federal health limits. It is first-come, first-served, and the numbers sit in scanned state permit PDFs nobody has compiled. Jordan runs power planning at a 10-person firm that prepares land for data centers. He is choosing between three plots near Abilene, Texas. To learn which has room for his engines, he must hire a consultant to model the air, often 100-600+ expert hours. A smaller permit costs about $40-150k; a large one about $300k-1.5M+ over 9-18 months. Guess wrong, and he loses megawatts or the site.

**What you'd build.** A plot and planned generators → language models read state permit PDFs and EPA records and extract every nearby smokestack and its numbers; the EPA's free air-spread model estimates the room left → a map and report on remaining headroom and likely permit path, plus alerts when a neighbor files a permit that would eat it.

**How it makes money.** Land developers, site-selection firms, lenders and utilities pay about $5-15k per site, then $50-250k a year. Later, small air consultancies could license it.

**Why it's interesting for you.** A document-AI and map-data problem nobody has organized. It only screens and is never filed, so no engineering license is needed.

**The catch.** Small and boom-and-bust: a ceiling of about $20-60M revenue, tied to a power boom an AI spending pullback could end. Site-finding startups Paces and Transect already sell to these buyers and could add this. Fuel cells and looser rules could shrink permit work. Facts were not checked against live sources.

**Score:** 47/100, open (only power-grid tools overlap).

Full details: [dossier](dossiers/r2-05-behind-the-meter-air-desk-ai-enabled-air-perm.md)

---

## Glossary

| Term | Plain meaning |
|---|---|
| Air headroom | How much more pollution an area's air can take before breaking federal health limits; the first builder uses it up. |
| Air permit | State permission to run fuel-burning equipment, with a cap on its pollution. |
| ARR | Annual recurring revenue: what a business earns per year from subscriptions and repeat customers. |
| Bootstrap | Funding a company from its own sales instead of investors. |
| Certificate | A seller's short document stating a product meets safety rules, backed by a lab test report (a CPC for kids' products, a GCC for others). |
| Contingency fee | Being paid a percentage of money recovered, so the customer pays nothing if nothing is found. |
| Conversion | Moving a customer's historical records from old software into new software (also called data migration). |
| CPSC | Consumer Product Safety Commission, the US agency that sets safety rules for consumer products. |
| Customs broker | A firm that clears imported goods through US customs, often the first to ask for certificate data. |
| Distributor | A wholesaler that buys from manufacturers and resells to contractors. |
| EPA | Environmental Protection Agency, the US agency that sets pollution limits. |
| ERP | A company's main ordering, inventory and accounting software. |
| Fuel cells | Power units that make electricity without burning fuel, so they need little air permitting. |
| Grade (green / yellow / red) | A prequalification platform's status for a contractor; anything but green usually means the crew can't start. |
| HVAC | Heating, ventilation and air conditioning. |
| IP | Intellectual property: ownership of what you create, such as code, which employers often partly claim. |
| ISNetworld / Avetta / Veriforce | The three main platforms that collect and grade contractors' safety documents. |
| Kill test | A small paid trial with a target set in advance; miss it and you drop the idea. |
| LLM | Large language model: AI that reads and writes text, like Claude or ChatGPT. |
| On-site power | Electricity a data center makes on its own land instead of buying it all from the grid (also "behind the meter"). |
| OSHA 300A | A yearly US government form summarizing a company's workplace injuries (OSHA is the workplace-safety agency). |
| Permit | Official city approval to build something, given after a reviewer checks the plans. |
| SaaS | Software as a service: software sold by subscription and used online; "vertical SaaS" serves one industry. |
| Seed round | A startup's first sizable round of outside investment. |
| Services business | A company where each sale needs lots of human hours, so it grows like a consulting firm, not software. |
| Site selector | A firm that finds or prepares land with power access for data centers. |
| SMB | Small or medium-sized business. |
| SPA | Special pricing agreement: a one-off manufacturer discount for a specific job, which the wholesaler later claims back. |
| TAM | Total addressable market: yearly revenue available if every possible customer bought. |
| Terms of service | A platform's user agreement, which may limit what outside tools can do for its users. |
| VC | Venture capital: firms that invest in young, fast-growing companies for a stake. |
| White-label | Selling your product under another company's brand, inside its software. |
| YC | Y Combinator, the best-known startup accelerator, which invests small amounts in batches of very early startups. |
