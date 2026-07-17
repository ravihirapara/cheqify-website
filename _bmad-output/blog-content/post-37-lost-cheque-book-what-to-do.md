# Blog Post #37 — Lost or Stolen Cheque Book? The Emergency Stop-Payment & FIR Guide (2026)

## How to Use This Document (Field-by-Field → Sanity Studio)

| Doc section | Sanity field | Purpose |
|---|---|---|
| Slug, Tags, Author, Order, Is HowTo, Has FAQ | `slug`, `tags`, `author`, `order`, `isHowTo`, `hasFaq` | URL, taxonomy, sort order, schema toggles. |
| Scheduled publish date | Sanity "Publish schedule" | Triggers the post going live. |
| Primary/Secondary keywords, Reading time, URLs | *reference only* | Guides writing focus and GSC indexing. |
| Cover Image | `image` (required) | Blog card, hero, OG/Twitter preview. |
| Titles (EN/HI/GU) | `title_en`, `title_hi`, `title_gu` | `<h1>` + `<title>` + og:title meta. |
| Descriptions (EN/HI/GU) | `description_en`, `description_hi`, `description_gu` | `<meta name="description">`, og:description. |
| Body (EN/HI/GU) | `body_en`, `body_hi`, `body_gu` | Article content. |
| CTA Block (EN/HI/GU) | *pasted as the LAST paragraph of each `body_*`* | Conversion element — drives app.cheqify.app signups. |
| FAQ Items | `faqItems` | Renders FAQPage schema → "People Also Ask". |
| HowTo Steps | `howToSteps` | Renders HowTo schema → step-by-step rich result. |

### Sanity block styles in this draft

**Apply as Callout block (grey rounded box):**
- `> **Know every leaf, so a lost book never means a mystery...** / **हर leaf को जानें, ताकि एक lost book कभी mystery न बने...** / **દરેક leaf ને જાણો, જેથી એક lost book ક્યારેય mystery ન બને...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A lost cheque book isn't fifty lost pieces of paper...** / **एक lost cheque book पचास खोए हुए कागज़ नहीं है...** / **એક lost cheque book પચાસ ખોવાયેલા કાગળ નથી...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Lost cheque book what to do" is a classic high-anxiety, act-now search — the reader arrives frightened and converts on clarity, not cleverness. Nothing in the live catalogue covers the emergency drill itself: the first-hour report, series-range stop payment on blank leaves, the FIR-and-liability question (who eats the loss when a forged cheque clears), and the post-dated-cheque corner of getting a fresh book. Direct product fit — Cheqify's register is literally the "which numbers are missing?" answer. Cluster fit: #12 (stop-payment mechanics), #3 (fraud prevention), #29 (Positive Pay, mentioned unlinked), #13 (register habit).

---

## Sanity Fields

- **Slug:** `lost-cheque-book-what-to-do`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (the lost-book emergency drill, 6 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `lost cheque book what to do`
- **Secondary keywords:** stolen cheque book India, stop payment lost cheque, FIR for lost cheque book, blank cheque stolen liability, lost cheque book application, cheque book missing bank complaint
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/lost-cheque-book-what-to-do`
  - HI: `https://cheqify.app/hi/blog/lost-cheque-book-what-to-do`
  - GU: `https://cheqify.app/gu/blog/lost-cheque-book-what-to-do`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `lost-cheque-book-what-to-do-cover.webp`
- **Subject:** An open desk drawer, empty where a cheque book clearly used to sit (a faint rectangular outline). Beside the drawer: a phone showing a "Cheque book blocked ✓" banking-app confirmation, a notepad with a handwritten cheque-number range (104226–104275) circled in red, and a police-complaint acknowledgment slip peeking from under it. Calm off-white background — urgency without panic. Cheqify wordmark bottom-right.
- **Alt text:** Lost or stolen cheque book in India — blocking the book in the bank app, listing the missing cheque numbers, and filing a police complaint.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Lost or Stolen Cheque Book? The Emergency Stop-Payment & FIR Guide (2026)
- **HI:** Cheque Book खो गई या चोरी हो गई? Emergency Stop-Payment और FIR Guide (2026)
- **GU:** Cheque Book ખોવાઈ ગઈ કે ચોરાઈ ગઈ? Emergency Stop-Payment અને FIR Guide (2026)

---

## Descriptions

- **EN:** A missing cheque book is a stack of blank instruments with your account number printed on every leaf — and the clock starts the moment you notice, not the moment someone misuses one. Here's the emergency drill: report and block within the hour, stop payment on the whole number series, list the exact missing leaves, file an FIR if it was stolen, reissue your post-dated cheques from the new book, and watch the account after. Plus the liability rule that decides who pays if a forged cheque clears.
- **HI:** एक missing cheque book blank instruments की एक stack है जिसकी हर leaf पर आपका account number printed है — और clock उस moment start होती है जब आप notice करते हैं, उस moment नहीं जब कोई एक misuse करे. यहाँ है emergency drill: घंटे भर में report और block करें, पूरी number series पर stop payment लगाएँ, exact missing leaves list करें, चोरी हुई हो तो FIR file करें, new book से अपने post-dated cheques reissue करें, और बाद में account पर नज़र रखें. Plus वो liability rule जो decide करता है कि forged cheque clear हो जाए तो कौन pay करता है.
- **GU:** એક missing cheque book blank instruments ની એક stack છે જેની દરેક leaf પર તમારો account number printed છે — અને clock એ moment start થાય છે જ્યારે તમે notice કરો છો, એ moment નહીં જ્યારે કોઈ એક misuse કરે. અહીં છે emergency drill: કલાકની અંદર report અને block કરો, આખી number series પર stop payment લગાવો, exact missing leaves list કરો, ચોરાઈ હોય તો FIR file કરો, new book થી તમારા post-dated cheques reissue કરો, અને પછી account પર નજર રાખો. Plus એ liability rule જે decide કરે છે કે forged cheque clear થઈ જાય તો કોણ pay કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

It starts with a hand coming out of a drawer empty.

The cheque book — the one that lives between the rent file and the stapler, the one that has sat there so long you stopped seeing it — isn't there. You check the car. The other drawer. The bag you carried to the bank last Tuesday. And somewhere around the fourth minute of searching, the real thought lands: *somebody could be holding a stack of blank cheques with my account number printed on every single one of them.*

Take one breath, and then move — because this is a solvable emergency, but it is an emergency, and the order of operations decides how it ends. Here's the full drill: what to do in the next ten minutes, what to do by tonight, and the one legal rule that decides who pays if the worst actually happens.

### [H2] The First Ten Minutes — Report Before You Keep Searching

Instinct says search harder. Overrule it. The single most valuable thing you can do with a missing cheque book is put the bank on notice *now*, because in every dispute that follows, the first question anyone asks is the same: *when did the bank know?*

Every bank gives you three channels that work at midnight:

- **Net-banking** — under cheque services, most banks carry a "report lost cheque book" or "block cheque book" option. Two clicks, done.
- **The mobile app** — the same service on a smaller screen, with the same legal effect.
- **The 24x7 phone-banking helpline** — the number printed on the back of your debit card. Ask for a complaint reference number, and write it down along with the exact time of the call.

That reference number and timestamp are not bureaucratic lint. A cheque misused *before* you reported is an argument you'll have to win; a cheque misused *after* the bank was on notice is, broadly, the bank's problem to explain. You cannot control when a thief acts. When the notice lands — that, you control to the minute.

And report even if you're eighty percent sure the book is just misplaced under a pile at home. A found book costs you one sheepish call and a fresh book request. An unreported one costs whatever a stranger decides to write.

### [H2] Stop Payment — Kill the Leaves, Not Just the Book

Reporting tells the bank the book is gone. **Stop payment** tells the clearing system which specific leaves to bounce on sight — and that's the instruction with teeth.

For a lost book you don't stop cheques one at a time; you stop the **entire number range** — say, 104226 to 104275 — in a single instruction. And yes, banks accept stop payment on blank, unsigned leaves: "instrument reported lost" is a standard reason on every stop form, and any leaf from that series that ever turns up in clearing comes back unpaid. The full mechanics, the charges, and how stop payment interacts with a cheque's validity window are in [our stop-payment guide](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india).

Three practical notes from the trenches:

- **Get the stop in writing.** A net-banking acknowledgment screen, an email confirmation, or a branch stamp on your written request — anything dated and provable.
- **Ask how the charge is structured.** Some banks price stop payment per leaf, others as one slab for a series; several waive or reduce it when the whole book is reported lost. Thirty seconds of asking can save a surprising line on your statement.
- **Confirm the stop covers the full series** — not just "the leaves after the last one I remember using." Memory is the weakest instrument in this whole story; the printed range on the bank's own record is the strongest.

> **A lost cheque book isn't fifty lost pieces of paper. It's fifty pre-printed invitations to your bank account, each one waiting for a stranger's pen — and stop payment is how you tear them up from a distance.**

### [H2] The List — Work Out Exactly Which Numbers Are Loose

The bank's first question will be brutally specific: *which cheque numbers?* The quality of your answer decides the quality of your protection.

The answer lives in three places, in descending order of convenience:

1. **Your cheque register** — if you log every leaf you issue (number, payee, amount, date, status), the missing-number list takes ninety seconds: the series minus the issued leaves equals the blank ones at large.
2. **The counterfoils** — if the lost book was a part-used one and you have the previous book's stubs, they tell you where your usage stopped.
3. **Net-banking's cheque status enquiry** — the bank's own record of which series was issued to you and which numbers have already cleared. Slower to read, impossible to misremember.

What you're building is two lists. The **used leaves** — issued and cleared — are your audit trail; nothing to fear there. The **blank remainder** is the threat list: that's the range you give the bank for the stop, and the range you watch for in the weeks ahead.

If you've never kept a register, this is the moment the habit sells itself. Nobody who has stood at a branch counter trying to reconstruct fifty cheque numbers from memory ever needs the lecture twice.

### [H2] Stolen? File the FIR — It's About Liability, Not Ceremony

Misplaced somewhere at home is one story. Vanished with a stolen bag, a break-in, or a pocket picked on the train is another — and for that second story, go to the police station (or your state's online e-FIR/lost-report portal) and file a complaint the same day. It feels disproportionate for "some paper." It isn't, for three reasons:

1. **Banks often ask for it.** A police acknowledgment is a standard supporting document when a bank processes a forgery dispute or considers waiving its own charges on a stolen book.
2. **It's dated, third-party proof you acted like a victim.** If a forged cheque clears and the fight escalates to the banking ombudsman or a court, a complaint filed the day the book vanished outweighs any explanation offered months later.
3. **It pre-empts the ugliest scenario.** If someone fills in a stolen leaf and then claims *you* issued it — cheque-bounce cases have been built on thinner stories — your FIR and your stop-payment instruction, both dated before the leaf ever surfaced, demolish the claim before it starts.

And here is the liability rule itself, because it's the question underneath all the anxiety: **a forged signature is no signature.** Indian courts have held for decades that a bank which pays a cheque bearing a forged drawer's signature has paid without its customer's mandate, and generally cannot debit the customer's account for it. The loss falls on the bank — *unless* the customer's own negligence helped the forgery along, and the negligence courts weigh most heavily is exactly this one: knowing the cheque book was gone and staying silent about it. Your report timestamp, your stop-payment confirmation, and your FIR are the three documents that prove you were the careful customer. Hold all three and the law stands firmly on your side of the counter.

### [H2] The Fresh Book — and the Corner Everyone Forgets

Request a new cheque book the same day — through the app, net-banking, or the branch. It arrives with a **new number series**; enter it in your register on day one, before the first leaf is ever written, so the next emergency (may it never come) starts with a ninety-second answer instead of an archaeology project.

Now, the corner almost everyone forgets: **your stop payment killed your legitimate cheques too.** Any post-dated cheque you had issued from the lost book — an EMI, next month's rent, a vendor's advance — belongs to the blocked series now, and it will bounce when presented. That bounce is yours to prevent. List every live cheque from the dead series, call each payee, and reissue from the new book before the old dates arrive. One slightly awkward phone call today beats a returned EMI cheque and a penalty next month — or worse, a bounce memo landing in the middle of a relationship that runs on trust.

### [H2] The Weeks After — Watch the Account Like You Mean It

The emergency ends in a day; the vigilance shouldn't. For the next two to three months:

- **Turn on SMS and email alerts** for every debit, and read the cheque-clearing alerts especially — a stopped series should produce return memos, never debits.
- **Read the statement weekly, not monthly.** Unauthorised-debit disputes go better the faster they're raised; a debit you catch in three days is a phone call, one you catch in three months is a file.
- **Dispute anything unfamiliar in writing, immediately** — quoting your complaint reference number, the stop-payment confirmation, and the FIR. The paperwork you built in the first hour does its work here.
- **Consider Positive Pay for large cheques going forward.** You pre-notify the bank of each cheque's details — number, date, payee, amount — and clearing matches every presented cheque against your notification, so a forged or altered leaf simply fails the match. Banks already require it above certain high-value thresholds; people who have lived through a lost book tend to opt in below the threshold too, and sleep better for it.

And prevention — the boring paragraph that saves you the exciting ones. Keep the book locked away, never sign a blank leaf in advance, count the leaves whenever the book comes out of storage, and keep the register current. The [full fraud-prevention playbook](https://cheqify.app/en/blog/how-to-avoid-cheque-fraud-in-india) covers the rest.

Survived and settled, the whole episode compresses into one sentence: the person who knew exactly which leaves were missing, reported them within the hour, and had the paperwork to prove it — that person lost a cheque book, and nothing else. Everyone else risks losing more.

---

> **Know every leaf, so a lost book never means a mystery.** Cheqify's cheque register tracks every cheque you print — number, payee, amount, status — so if a book ever goes missing, your exact stop-payment list is one search away, not one shoebox of counterfoils away. Print on 300+ Indian bank layouts with auto amount-in-words, and track each leaf from issue to clearing. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is the first thing to do if my cheque book is lost or stolen?
   **A:** Report it to your bank immediately — before you finish searching. Use net-banking's "block/report lost cheque book" option, the mobile app, or the 24x7 phone-banking helpline, and note the complaint reference number with the exact time. The report timestamp matters legally: misuse after the bank is on notice is broadly the bank's problem, while an unreported loss weakens your position in any later dispute.

2. **Q:** Can I stop payment on blank, unsigned cheques?
   **A:** Yes. For a lost or stolen book, banks accept a stop-payment instruction against the entire cheque number range (for example 104226–104275) in one go — "instrument reported lost" is a standard reason on every stop form. Any leaf from that series that later appears in clearing is returned unpaid. Get the stop confirmation in writing and verify it covers the full series, not just the leaves you remember as unused.

3. **Q:** Is an FIR compulsory for a lost cheque book?
   **A:** For a book merely misplaced, a bank report plus stop payment is usually enough. If the book was stolen — with a bag, in a break-in, in a pickpocketing — file a police complaint or FIR the same day. Banks often ask for the police acknowledgment in forgery disputes, it is dated third-party proof you acted promptly, and it pre-empts anyone claiming a misused leaf was a cheque you actually issued.

4. **Q:** Who bears the loss if a forged cheque from my lost book is paid?
   **A:** Generally the bank. Indian courts have long held that a forged drawer's signature is no mandate at all, so a bank that pays against it cannot ordinarily debit the customer's account. The exception is customer negligence — and the negligence that matters most is knowing the book was gone and not reporting it. Your report timestamp, stop-payment confirmation, and FIR are the documents that keep the loss on the bank's side.

5. **Q:** What are the charges for stop payment on a lost cheque book?
   **A:** It varies by bank: some charge per cheque leaf, others one slab amount for a series instruction, and several waive or reduce the fee when an entire book is reported lost or stolen. Charges are also often lower via net-banking than at the branch. Ask your bank how the instruction is priced before it is keyed in — a series stop entered the right way can cost a fraction of fifty individual stops.

6. **Q:** What happens to post-dated cheques I issued from the lost book?
   **A:** The series stop blocks them too — a legitimate EMI or rent cheque from the lost book will bounce when presented. List every live cheque you had issued from that series, inform each payee, and reissue replacements from your new cheque book before the old dates arrive. Preventing that bounce is your job, not the bank's.

7. **Q:** How does Positive Pay protect me after losing a cheque book?
   **A:** Under Positive Pay you pre-notify the bank of each cheque you issue — number, date, payee, amount — and the clearing system matches every presented cheque against your notification. A forged or altered leaf fails the match and is flagged instead of paid. Banks mandate it above certain high-value thresholds, but you can opt in for lower amounts, which is a sensible upgrade after a lost-book scare.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Block and report immediately | Report the lost or stolen cheque book to the bank the moment you notice — via net-banking's block-cheque-book option, the mobile app, or the 24x7 helpline. Note the complaint reference number and the exact time; the timestamp decides liability if a leaf is misused. |
| 2 | Stop payment on the whole series | Place one stop-payment instruction covering the entire missing number range, not individual leaves. Banks accept stops on blank, unsigned cheques with "instrument reported lost" as the reason. Get written confirmation and check the charge structure. |
| 3 | List the exact missing numbers | Build the missing-leaf list from your cheque register, the counterfoils, or net-banking's cheque status enquiry. Separate used leaves (your audit trail) from blank ones (the threat list) and give the bank the precise blank range. |
| 4 | File a police complaint if stolen | If the book was stolen rather than misplaced, file an FIR or police complaint the same day. Banks may require the acknowledgment for forgery disputes, and the dated complaint protects you if a forged or misused cheque surfaces later. |
| 5 | Request the fresh book and reissue PDCs | Order a new cheque book and record its new number series in your register on day one. Then reissue every live post-dated cheque from the blocked series — EMIs, rent, vendor advances — and inform each payee before the old dates arrive. |
| 6 | Monitor the account and enable Positive Pay | For two to three months, keep debit alerts on, read the statement weekly, and dispute unfamiliar cheque debits in writing immediately. Opt in to Positive Pay for larger cheques so future leaves clear only against details you pre-notified. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

ये शुरू होता है drawer से एक हाथ के खाली बाहर आने से.

Cheque book — वो जो rent file और stapler के बीच रहती है, वो जो वहाँ इतने समय से पड़ी है कि आपने उसे देखना ही बंद कर दिया — वहाँ नहीं है. आप car check करते हैं. दूसरा drawer. वो bag जो आप पिछले Tuesday bank ले गए थे. और searching के चौथे minute के आसपास, असली thought land होती है: *कोई blank cheques की एक stack पकड़े हो सकता है जिसकी हर एक leaf पर मेरा account number printed है.*

एक साँस लें, और फिर move करें — क्योंकि ये एक solvable emergency है, लेकिन emergency है, और operations का order decide करता है कि ये कैसे ख़त्म होती है. यहाँ है पूरी drill: अगले दस minutes में क्या करना है, आज रात तक क्या करना है, और वो एक legal rule जो decide करता है कि worst actually हो जाए तो कौन pay करता है.

### [H2] पहले दस Minutes — ढूंढते रहने से पहले Report करें

Instinct कहती है और ज़ोर से ढूंढो. इसे overrule करें. एक missing cheque book के साथ आप जो single most valuable चीज़ कर सकते हैं वो है bank को *अभी* notice पर रखना, क्योंकि आगे आने वाले हर dispute में पहला question same है: *bank को कब पता चला?*

हर bank आपको तीन channels देता है जो midnight पर भी काम करते हैं:

- **Net-banking** — cheque services के under, ज़्यादातर banks में एक "report lost cheque book" या "block cheque book" option है. दो clicks, done.
- **Mobile app** — same service छोटी screen पर, same legal effect के साथ.
- **24x7 phone-banking helpline** — वो number जो आपके debit card के पीछे printed है. एक complaint reference number माँगें, और उसे call के exact time के साथ लिख लें.

वो reference number और timestamp bureaucratic lint नहीं हैं. आपके report करने से *पहले* misused एक cheque वो argument है जो आपको जीतना पड़ेगा; bank के notice पर आने के *बाद* misused cheque, broadly, bank की problem है explain करने के लिए. चोर कब act करेगा ये आप control नहीं कर सकते. Notice कब land होता है — वो आप minute तक control करते हैं.

और report तब भी करें जब आप eighty percent sure हों कि book बस घर में किसी ढेर के नीचे misplaced है. एक मिली हुई book का cost एक sheepish call और एक fresh book request है. एक unreported book का cost वो है जो कोई stranger लिखने का decide करे.

### [H2] Stop Payment — सिर्फ़ Book नहीं, Leaves को Kill करें

Report bank को बताता है कि book गई. **Stop payment** clearing system को बताता है कि कौनसी specific leaves देखते ही bounce करनी हैं — और यही वो instruction है जिसमें दम है.

Lost book के लिए आप cheques एक-एक करके stop नहीं करते; आप **पूरी number range** stop करते हैं — say, 104226 से 104275 — एक single instruction में. और हाँ, banks blank, unsigned leaves पर stop payment accept करते हैं: हर stop form पर "instrument reported lost" एक standard reason है, और उस series की कोई भी leaf जो कभी clearing में पहुँचे, unpaid वापस आती है. पूरी mechanics, charges, और stop payment cheque की validity window के साथ कैसे interact करता है — सब [हमारी stop-payment guide](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) में है.

Trenches से तीन practical notes:

- **Stop को writing में लें.** एक net-banking acknowledgment screen, एक email confirmation, या आपकी written request पर branch की stamp — कुछ भी dated और provable.
- **पूछें कि charge कैसे structured है.** कुछ banks stop payment को per leaf price करते हैं, कुछ एक series के लिए एक slab; कई पूरी book lost report होने पर waive या reduce करते हैं. तीस seconds का पूछना आपकी statement पर एक surprising line बचा सकता है.
- **Confirm करें कि stop पूरी series cover करता है** — सिर्फ़ "आख़िरी use की हुई के बाद की leaves" नहीं जैसा आपको याद है. इस पूरी story में memory सबसे weak instrument है; bank के अपने record पर printed range सबसे strong.

> **एक lost cheque book पचास खोए हुए कागज़ नहीं है. ये आपके bank account के पचास pre-printed invitations हैं, हर एक किसी stranger के pen का इंतज़ार करता — और stop payment वो तरीका है जिससे आप उन्हें दूर से फाड़ देते हैं.**

### [H2] List — Exactly कौनसे Numbers बाहर हैं, ये निकालें

Bank का पहला question brutally specific होगा: *कौनसे cheque numbers?* आपके answer की quality आपकी protection की quality decide करती है.

Answer तीन जगहों पर रहता है, convenience के descending order में:

1. **आपका cheque register** — अगर आप हर issued leaf log करते हैं (number, payee, amount, date, status), तो missing-number list में ninety seconds लगते हैं: series minus issued leaves equals बाहर घूमती blank leaves.
2. **Counterfoils** — अगर lost book part-used थी और आपके पास previous book के stubs हैं, तो वो बताते हैं कि आपका usage कहाँ रुका.
3. **Net-banking की cheque status enquiry** — bank का अपना record कि आपको कौनसी series issue हुई और कौनसे numbers already clear हो चुके. पढ़ने में slower, misremember करना impossible.

आप जो बना रहे हैं वो दो lists हैं. **Used leaves** — issued और cleared — आपका audit trail हैं; वहाँ डरने का कुछ नहीं. **Blank remainder** threat list है: वही range आप bank को stop के लिए देते हैं, और वही range आने वाले weeks में watch करते हैं.

अगर आपने कभी register नहीं रखा, तो यही वो moment है जब habit ख़ुद को बेच देती है. जो भी branch counter पर खड़े होकर memory से पचास cheque numbers reconstruct करने की कोशिश कर चुका है, उसे ये lecture दोबारा नहीं चाहिए.

### [H2] चोरी हुई? FIR File करें — ये Liability की बात है, Ceremony की नहीं

घर में कहीं misplaced होना एक story है. Stolen bag के साथ ग़ायब होना, break-in में, या train में pocket कटने में — ये दूसरी story है, और उस दूसरी story के लिए उसी दिन police station जाएँ (या अपने state का online e-FIR/lost-report portal use करें) और complaint file करें. "कुछ काग़ज़" के लिए ये disproportionate लगता है. है नहीं, तीन reasons से:

1. **Banks अक्सर इसे माँगते हैं.** जब bank एक forgery dispute process करता है या stolen book पर अपने charges waive करने पर consider करता है, तो एक police acknowledgment standard supporting document है.
2. **ये dated, third-party proof है कि आपने victim की तरह act किया.** अगर एक forged cheque clear हो जाए और लड़ाई banking ombudsman या court तक escalate हो, तो book ग़ायब होने के दिन filed एक complaint महीनों बाद दिए किसी भी explanation से ज़्यादा वज़न रखती है.
3. **ये ugliest scenario को pre-empt करती है.** अगर कोई stolen leaf भरकर claim करे कि *आपने* वो issue की थी — cheque-bounce cases इससे पतली stories पर बने हैं — तो आपकी FIR और आपका stop-payment instruction, दोनों leaf के surface होने से पहले dated, claim को शुरू होने से पहले demolish कर देते हैं.

और यहाँ है ख़ुद liability rule, क्योंकि सारी anxiety के नीचे यही question है: **एक forged signature कोई signature नहीं है.** Indian courts ने decades से hold किया है कि जो bank forged drawer's signature वाला cheque pay करता है, उसने अपने customer के mandate के बिना pay किया है, और generally उसके लिए customer का account debit नहीं कर सकता. Loss bank पर गिरता है — *unless* customer की अपनी negligence ने forgery की मदद की हो, और courts जिस negligence को सबसे heavily weigh करते हैं वो exactly यही है: पता होना कि cheque book गई और चुप रहना. आपका report timestamp, आपका stop-payment confirmation, और आपकी FIR — ये तीन documents prove करते हैं कि आप careful customer थे. तीनों पकड़े रखें और law counter की आपकी side पर firmly खड़ा है.

### [H2] Fresh Book — और वो Corner जो सब भूल जाते हैं

New cheque book उसी दिन request करें — app, net-banking, या branch से. वो एक **new number series** के साथ आती है; उसे day one पर अपने register में enter करें, पहली leaf लिखे जाने से पहले, ताकि अगली emergency (कभी न आए) एक archaeology project की जगह ninety-second answer से शुरू हो.

अब वो corner जो almost सब भूल जाते हैं: **आपके stop payment ने आपके legitimate cheques भी kill कर दिए.** Lost book से आपने जो भी post-dated cheque issue किया था — एक EMI, अगले महीने का rent, किसी vendor का advance — वो अब blocked series का हिस्सा है, और present होने पर bounce होगा. वो bounce रोकना आपका काम है. Dead series के हर live cheque की list बनाएँ, हर payee को call करें, और पुरानी dates आने से पहले new book से reissue करें. आज की एक थोड़ी awkward phone call अगले महीने के returned EMI cheque और penalty से बेहतर है — या worse, उस रिश्ते के बीच में एक bounce memo के land होने से जो trust पर चलता है.

### [H2] बाद के Weeks — Account पर सच में नज़र रखें

Emergency एक दिन में ख़त्म होती है; vigilance नहीं होनी चाहिए. अगले दो से तीन महीनों के लिए:

- **हर debit के लिए SMS और email alerts on करें**, और cheque-clearing alerts especially पढ़ें — एक stopped series को return memos produce करने चाहिए, debits कभी नहीं.
- **Statement weekly पढ़ें, monthly नहीं.** Unauthorised-debit disputes जितनी जल्दी raise हों उतने बेहतर जाते हैं; तीन दिन में पकड़ा एक debit एक phone call है, तीन महीने में पकड़ा एक file.
- **कुछ भी unfamiliar हो तो writing में, immediately dispute करें** — अपना complaint reference number, stop-payment confirmation, और FIR quote करते हुए. पहले घंटे में बनाया paperwork यहाँ अपना काम करता है.
- **आगे के लिए बड़े cheques पर Positive Pay consider करें.** आप bank को हर cheque की details pre-notify करते हैं — number, date, payee, amount — और clearing हर presented cheque को आपकी notification से match करती है, तो एक forged या altered leaf simply match fail करती है. Banks certain high-value thresholds के ऊपर इसे already require करते हैं; जो लोग एक lost book से गुज़र चुके हैं वो threshold के नीचे भी opt in कर लेते हैं, और बेहतर सोते हैं.

और prevention — वो boring paragraph जो आपको exciting वाले paragraphs से बचाता है. Book को locked रखें, कभी blank leaf advance में sign न करें, book storage से निकले तो leaves count करें, और register current रखें. बाक़ी सब [पूरी fraud-prevention playbook](https://cheqify.app/hi/blog/how-to-avoid-cheque-fraud-in-india) cover करती है.

Survive और settle होने के बाद, पूरा episode एक sentence में compress होता है: जिस person को exactly पता था कि कौनसी leaves missing हैं, जिसने घंटे भर में उन्हें report किया, और जिसके पास prove करने का paperwork था — उस person ने एक cheque book खोई, और कुछ नहीं. बाक़ी सब ज़्यादा खोने का risk लेते हैं.

---

> **हर leaf को जानें, ताकि एक lost book कभी mystery न बने.** Cheqify का cheque register आपके print किए हर cheque को track करता है — number, payee, amount, status — तो अगर कभी कोई book ग़ायब हो, आपकी exact stop-payment list एक search दूर है, counterfoils के एक shoebox दूर नहीं. 300+ Indian bank layouts पर auto amount-in-words के साथ print करें, और हर leaf को issue से clearing तक track करें. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

આ શરૂ થાય છે drawer માંથી એક હાથના ખાલી બહાર આવવાથી.

Cheque book — એ જે rent file અને stapler ની વચ્ચે રહે છે, એ જે ત્યાં એટલા સમયથી પડી છે કે તમે એને જોવાનું જ બંધ કરી દીધું — ત્યાં નથી. તમે car check કરો છો. બીજું drawer. એ bag જે તમે ગયા Tuesday bank લઈ ગયા હતા. અને searching ની ચોથી minute ની આસપાસ, અસલી thought land થાય છે: *કોઈ blank cheques ની એક stack પકડીને બેઠું હોઈ શકે છે જેની દરેક leaf પર મારો account number printed છે.*

એક શ્વાસ લો, અને પછી move કરો — કારણ કે આ એક solvable emergency છે, પણ emergency છે, અને operations નો order decide કરે છે કે આ કેવી રીતે પૂરી થાય છે. અહીં છે આખી drill: આગલી દસ minutes માં શું કરવાનું છે, આજે રાત સુધીમાં શું, અને એ એક legal rule જે decide કરે છે કે worst actually થઈ જાય તો કોણ pay કરે છે.

### [H2] પહેલી દસ Minutes — શોધતા રહેવા પહેલા Report કરો

Instinct કહે છે વધુ જોરથી શોધો. એને overrule કરો. એક missing cheque book સાથે તમે જે single most valuable વસ્તુ કરી શકો છો એ છે bank ને *અત્યારે* notice પર મૂકવું, કારણ કે આગળ આવનારા દરેક dispute માં પહેલો question same છે: *bank ને ક્યારે ખબર પડી?*

દરેક bank તમને ત્રણ channels આપે છે જે midnight પર પણ કામ કરે છે:

- **Net-banking** — cheque services ની under, મોટાભાગની banks માં એક "report lost cheque book" કે "block cheque book" option છે. બે clicks, done.
- **Mobile app** — same service નાની screen પર, same legal effect સાથે.
- **24x7 phone-banking helpline** — એ number જે તમારા debit card ની પાછળ printed છે. એક complaint reference number માંગો, અને એને call ના exact time સાથે લખી લો.

એ reference number અને timestamp bureaucratic lint નથી. તમારા report કરવા *પહેલા* misused એક cheque એ argument છે જે તમારે જીતવો પડશે; bank ના notice પર આવ્યા *પછી* misused cheque, broadly, bank ની problem છે explain કરવા માટે. ચોર ક્યારે act કરશે એ તમે control નથી કરી શકતા. Notice ક્યારે land થાય છે — એ તમે minute સુધી control કરો છો.

અને report ત્યારે પણ કરો જ્યારે તમે eighty percent sure હો કે book બસ ઘરમાં કોઈ ઢગલા નીચે misplaced છે. એક મળી ગયેલી book નો cost એક sheepish call અને એક fresh book request છે. એક unreported book નો cost એ છે જે કોઈ stranger લખવાનું decide કરે.

### [H2] Stop Payment — ફક્ત Book નહીં, Leaves ને Kill કરો

Report bank ને કહે છે કે book ગઈ. **Stop payment** clearing system ને કહે છે કે કઈ specific leaves જોતાં જ bounce કરવાની છે — અને આ જ એ instruction છે જેમાં દમ છે.

Lost book માટે તમે cheques એક-એક કરીને stop નથી કરતા; તમે **આખી number range** stop કરો છો — say, 104226 થી 104275 — એક single instruction માં. અને હા, banks blank, unsigned leaves પર stop payment accept કરે છે: દરેક stop form પર "instrument reported lost" એક standard reason છે, અને એ series ની કોઈ પણ leaf જે ક્યારેય clearing માં પહોંચે, unpaid પાછી આવે છે. આખી mechanics, charges, અને stop payment cheque ની validity window સાથે કેવી રીતે interact કરે છે — બધું [અમારી stop-payment guide](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) માં છે.

Trenches માંથી ત્રણ practical notes:

- **Stop ને writing માં લો.** એક net-banking acknowledgment screen, એક email confirmation, કે તમારી written request પર branch ની stamp — કંઈ પણ dated અને provable.
- **પૂછો કે charge કેવી રીતે structured છે.** કેટલીક banks stop payment ને per leaf price કરે છે, કેટલીક એક series માટે એક slab; ઘણી આખી book lost report થાય ત્યારે waive કે reduce કરે છે. ત્રીસ seconds નું પૂછવું તમારી statement પર એક surprising line બચાવી શકે છે.
- **Confirm કરો કે stop આખી series cover કરે છે** — ફક્ત "છેલ્લી use કરેલી પછીની leaves" નહીં જેમ તમને યાદ છે. આ આખી story માં memory સૌથી weak instrument છે; bank ના પોતાના record પર printed range સૌથી strong.

> **એક lost cheque book પચાસ ખોવાયેલા કાગળ નથી. આ તમારા bank account ના પચાસ pre-printed invitations છે, દરેક કોઈ stranger ના pen ની રાહ જોતું — અને stop payment એ રીત છે જેનાથી તમે એમને દૂરથી ફાડી નાખો છો.**

### [H2] List — Exactly કયા Numbers બહાર છે, એ કાઢો

Bank નો પહેલો question brutally specific હશે: *કયા cheque numbers?* તમારા answer ની quality તમારી protection ની quality decide કરે છે.

Answer ત્રણ જગ્યાએ રહે છે, convenience ના descending order માં:

1. **તમારું cheque register** — જો તમે દરેક issued leaf log કરો છો (number, payee, amount, date, status), તો missing-number list માં ninety seconds લાગે છે: series minus issued leaves equals બહાર ફરતી blank leaves.
2. **Counterfoils** — જો lost book part-used હતી અને તમારી પાસે previous book ના stubs છે, તો એ કહે છે કે તમારો usage ક્યાં અટક્યો.
3. **Net-banking ની cheque status enquiry** — bank નો પોતાનો record કે તમને કઈ series issue થઈ અને કયા numbers already clear થઈ ચૂક્યા. વાંચવામાં slower, misremember કરવું impossible.

તમે જે બનાવી રહ્યા છો એ બે lists છે. **Used leaves** — issued અને cleared — તમારો audit trail છે; ત્યાં ડરવાનું કંઈ નથી. **Blank remainder** threat list છે: એ જ range તમે bank ને stop માટે આપો છો, અને એ જ range આવનારા weeks માં watch કરો છો.

જો તમે ક્યારેય register નથી રાખ્યું, તો આ જ એ moment છે જ્યારે habit પોતાને વેચી દે છે. જે પણ branch counter પર ઊભા રહીને memory માંથી પચાસ cheque numbers reconstruct કરવાની કોશિશ કરી ચૂક્યું છે, એને આ lecture બીજી વાર નથી જોઈતું.

### [H2] ચોરાઈ ગઈ? FIR File કરો — આ Liability ની વાત છે, Ceremony ની નહીં

ઘરમાં ક્યાંક misplaced થવું એક story છે. Stolen bag સાથે ગાયબ થવું, break-in માં, કે train માં ખિસ્સું કપાવામાં — આ બીજી story છે, અને એ બીજી story માટે એ જ દિવસે police station જાઓ (કે તમારા state નું online e-FIR/lost-report portal use કરો) અને complaint file કરો. "થોડા કાગળ" માટે આ disproportionate લાગે છે. નથી, ત્રણ reasons થી:

1. **Banks ઘણીવાર આને માંગે છે.** જ્યારે bank એક forgery dispute process કરે છે કે stolen book પર પોતાના charges waive કરવા પર consider કરે છે, ત્યારે એક police acknowledgment standard supporting document છે.
2. **આ dated, third-party proof છે કે તમે victim ની જેમ act કર્યું.** જો એક forged cheque clear થઈ જાય અને લડાઈ banking ombudsman કે court સુધી escalate થાય, તો book ગાયબ થયાના દિવસે filed એક complaint મહિનાઓ પછી આપેલા કોઈ પણ explanation કરતાં વધુ વજન રાખે છે.
3. **આ ugliest scenario ને pre-empt કરે છે.** જો કોઈ stolen leaf ભરીને claim કરે કે *તમે* એ issue કરી હતી — cheque-bounce cases આનાથી પાતળી stories પર બન્યા છે — તો તમારી FIR અને તમારું stop-payment instruction, બંને leaf ના surface થવા પહેલા dated, claim ને શરૂ થવા પહેલા demolish કરી દે છે.

અને અહીં છે ખુદ liability rule, કારણ કે બધી anxiety ની નીચે આ જ question છે: **એક forged signature કોઈ signature નથી.** Indian courts એ decades થી hold કર્યું છે કે જે bank forged drawer's signature વાળો cheque pay કરે છે, એણે પોતાના customer ના mandate વગર pay કર્યું છે, અને generally એના માટે customer નું account debit નથી કરી શકતી. Loss bank પર પડે છે — *unless* customer ની પોતાની negligence એ forgery ની મદદ કરી હોય, અને courts જે negligence ને સૌથી heavily weigh કરે છે એ exactly આ જ છે: ખબર હોવી કે cheque book ગઈ અને ચૂપ રહેવું. તમારો report timestamp, તમારું stop-payment confirmation, અને તમારી FIR — આ ત્રણ documents prove કરે છે કે તમે careful customer હતા. ત્રણેય પકડી રાખો અને law counter ની તમારી side પર firmly ઊભો છે.

### [H2] Fresh Book — અને એ Corner જે બધા ભૂલી જાય છે

New cheque book એ જ દિવસે request કરો — app, net-banking, કે branch થી. એ એક **new number series** સાથે આવે છે; એને day one પર તમારા register માં enter કરો, પહેલી leaf લખાય એ પહેલા, જેથી આગલી emergency (ક્યારેય ન આવે) એક archaeology project ની જગ્યાએ ninety-second answer થી શરૂ થાય.

હવે એ corner જે almost બધા ભૂલી જાય છે: **તમારા stop payment એ તમારા legitimate cheques પણ kill કરી દીધા.** Lost book માંથી તમે જે પણ post-dated cheque issue કર્યો હતો — એક EMI, આવતા મહિનાનું rent, કોઈ vendor નું advance — એ હવે blocked series નો ભાગ છે, અને present થતાં bounce થશે. એ bounce રોકવો તમારું કામ છે. Dead series ના દરેક live cheque ની list બનાવો, દરેક payee ને call કરો, અને જૂની dates આવે એ પહેલા new book થી reissue કરો. આજની એક થોડી awkward phone call આવતા મહિનાના returned EMI cheque અને penalty કરતાં સારી છે — કે worse, એ સંબંધની વચ્ચે એક bounce memo ના land થવા કરતાં જે trust પર ચાલે છે.

### [H2] પછીના Weeks — Account પર સાચે જ નજર રાખો

Emergency એક દિવસમાં પૂરી થાય છે; vigilance નહીં થવી જોઈએ. આગલા બે થી ત્રણ મહિના માટે:

- **દરેક debit માટે SMS અને email alerts on કરો**, અને cheque-clearing alerts especially વાંચો — એક stopped series એ return memos produce કરવા જોઈએ, debits ક્યારેય નહીં.
- **Statement weekly વાંચો, monthly નહીં.** Unauthorised-debit disputes જેટલા જલદી raise થાય એટલા સારા જાય છે; ત્રણ દિવસમાં પકડાયેલો એક debit એક phone call છે, ત્રણ મહિનામાં પકડાયેલો એક file.
- **કંઈ પણ unfamiliar હોય તો writing માં, immediately dispute કરો** — તમારો complaint reference number, stop-payment confirmation, અને FIR quote કરતાં. પહેલા કલાકમાં બનાવેલું paperwork અહીં પોતાનું કામ કરે છે.
- **આગળ માટે મોટા cheques પર Positive Pay consider કરો.** તમે bank ને દરેક cheque ની details pre-notify કરો છો — number, date, payee, amount — અને clearing દરેક presented cheque ને તમારી notification સાથે match કરે છે, તો એક forged કે altered leaf simply match fail કરે છે. Banks certain high-value thresholds ની ઉપર આને already require કરે છે; જે લોકો એક lost book માંથી પસાર થઈ ચૂક્યા છે એ threshold ની નીચે પણ opt in કરી લે છે, અને સારું ઊંઘે છે.

અને prevention — એ boring paragraph જે તમને exciting વાળા paragraphs થી બચાવે છે. Book ને locked રાખો, ક્યારેય blank leaf advance માં sign ન કરો, book storage માંથી નીકળે તો leaves count કરો, અને register current રાખો. બાકી બધું [આખી fraud-prevention playbook](https://cheqify.app/gu/blog/how-to-avoid-cheque-fraud-in-india) cover કરે છે.

Survive અને settle થયા પછી, આખો episode એક sentence માં compress થાય છે: જે person ને exactly ખબર હતી કે કઈ leaves missing છે, જેણે કલાકની અંદર એમને report કરી, અને જેની પાસે prove કરવાનું paperwork હતું — એ person એ એક cheque book ખોઈ, અને બીજું કંઈ નહીં. બાકી બધા વધુ ખોવાનો risk લે છે.

---

> **દરેક leaf ને જાણો, જેથી એક lost book ક્યારેય mystery ન બને.** Cheqify નું cheque register તમારા print કરેલા દરેક cheque ને track કરે છે — number, payee, amount, status — તો જો ક્યારેય કોઈ book ગાયબ થાય, તમારી exact stop-payment list એક search દૂર છે, counterfoils ના એક shoebox દૂર નહીં. 300+ Indian bank layouts પર auto amount-in-words સાથે print કરો, અને દરેક leaf ને issue થી clearing સુધી track કરો. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #12 (`cheque-validity-period-stop-payment-india`) — stop-payment mechanics, charges, validity window. Linked in the "Stop Payment" section, all 3 locales.
- Post #3 (`how-to-avoid-cheque-fraud-in-india`) — prevention playbook. Linked in "The Weeks After" section, all 3 locales.
- Positive Pay and the cheque register are *mentioned unlinked* — do not add links to #29/#13 unless verified live at publish time.

**Bonus internal-link work (after publish):**
- Edit post #3 (`how-to-avoid-cheque-fraud-in-india`, all 3 locales) — add a "if the book is already gone, here's the emergency drill" link here. Strongest reciprocal.
- Edit post #12 (`cheque-validity-period-stop-payment-india`, all 3 locales) — add a "lost the whole book? stop the whole series" link here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The empty-drawer opening, the "memory is the weakest instrument" beat, and the forged-signature paragraph carry the voice.
- **Fact-check (CRITICAL, verify before publish):**
  1. **Stop payment on blank/unsigned leaves** — series-range stops with "instrument reported lost" are standard bank practice; confirm phrasing against 2–3 major banks' current forms (SBI/HDFC/ICICI).
  2. **Forged drawer's signature liability** — settled Supreme Court position (Canara Bank v. Canara Sales Corporation line of cases), deliberately cited as "Indian courts have held for decades" without naming the case; the customer-negligence carve-out (delay in reporting) is the accurate hedge. Verify framing.
  3. **Positive Pay thresholds** — kept deliberately directional ("certain high-value thresholds"); RBI framework is ₹50,000+ optional / many banks mandatory at ₹5 lakh+. Do not add hard numbers without checking current bank circulars.
  4. **Stop-payment charges** — kept directional (per-leaf vs slab, waivers for lost books); no hard figures in body. Safe.
  5. **e-FIR / online lost-report portals** — availability is state-dependent; body says "your state's online e-FIR/lost-report portal", which is the correct hedge.
- **Slug check:** `lost-cheque-book-what-to-do` exactly — no tag text appended (a corrupted slug 404s the post and breaks sitemap XML, per the post #32 incident).
- **Internal link order:** #3 and #12 are both long-live — safe.
- **Word count:** EN body must be >1,200 words (target 1,700–2,100). Current draft: ~1,750 words.
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild (and sanity-check the slug rendered correctly).
4. Bonus reciprocal-link work — posts #3 and #12 (both locales-complete edits).
5. IndexNow auto-pings on publish.
