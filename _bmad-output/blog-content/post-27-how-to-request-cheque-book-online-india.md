# Blog Post #27 — How to Request a Cheque Book Online — SBI, HDFC, ICICI, Axis, Kotak (2026)

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
- `> **Never get ambushed by an empty cheque book again...** / **खाली cheque book से फिर कभी...** / **ખાલી cheque book થી ફરી ક્યારેય...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The cheque book request is the easiest banking task there is...** / **Cheque book request सबसे आसान banking task है...** / **Cheque book request સૌથી સહેલું banking task છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"How to request cheque book online SBI / HDFC / ICICI" is a classic evergreen banking search with steady volume — every account holder hits it the day the book runs dry, and bank help pages bury the answer under menu jargon. The answerable angle: one generic flow that works at every bank, the five big banks' channels in plain words, the pre-checks that prevent failed requests (stale address, KYC pending), delivery timelines, and the leaf-tracking habit that prevents the next emergency. HowTo schema fits naturally. Cluster fit: #16 (cheque number), #19 (fill correctly), #15 (CTS-2010), #14 (bulk printing for businesses that burn books fast).

---

## Sanity Fields

- **Slug:** `how-to-request-cheque-book-online-india`
- **Tags:** `Cheque Guide`, `Cheque Productivity`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (6 steps — the generic any-bank flow)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Monday 2026-06-22, 10:00 IST (auto-set in Sanity)
- **Primary keyword:** `how to request cheque book online`
- **Secondary keywords:** cheque book request SBI online, HDFC cheque book request, ICICI cheque book online, Axis Bank cheque book request, Kotak cheque book request, cheque book delivery time, cheque book charges
- **Reading time:** ~7 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/how-to-request-cheque-book-online-india`
  - HI: `https://cheqify.app/hi/blog/how-to-request-cheque-book-online-india`
  - GU: `https://cheqify.app/gu/blog/how-to-request-cheque-book-online-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `how-to-request-cheque-book-online-india-cover.webp`
- **Subject:** A smartphone in the foreground showing a simplified banking-app screen with a "Request Cheque Book ✓" confirmation; behind it, a fresh cheque book half out of a postal envelope. Five small bank-style monogram chips (S / H / I / A / K — generic, no real logos) along the bottom edge. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Requesting a cheque book online in India — banking app confirmation with a new cheque book arriving by post, covering SBI, HDFC, ICICI, Axis and Kotak flows.
- **OG image:** Same as cover.

---

## Titles

- **EN:** How to Request a Cheque Book Online — SBI, HDFC, ICICI, Axis, Kotak (2026)
- **HI:** Cheque Book Online कैसे Request करें — SBI, HDFC, ICICI, Axis, Kotak (2026)
- **GU:** Cheque Book Online કેવી રીતે Request કરવી — SBI, HDFC, ICICI, Axis, Kotak (2026)

---

## Descriptions

- **EN:** Out of cheque leaves? You don't need a branch visit. Here's the one flow that works at every Indian bank — log in, Service Requests, pick leaves, confirm address — plus the exact channels at SBI, HDFC, ICICI, Axis and Kotak, the pre-checks that stop failed requests, what delivery really takes, and the leaf-tracking habit that means you never run dry again.
- **HI:** Cheque leaves खत्म? आपको branch visit की ज़रूरत नहीं. यहाँ है वो one flow जो हर Indian bank पर काम करता है — log in, Service Requests, leaves pick करें, address confirm करें — plus SBI, HDFC, ICICI, Axis और Kotak के exact channels, वो pre-checks जो failed requests रोकते हैं, delivery में really क्या लगता है, और वो leaf-tracking habit जिससे आप फिर कभी dry नहीं होते.
- **GU:** Cheque leaves ખતમ? તમને branch visit ની જરૂર નથી. અહીં છે એ one flow જે દરેક Indian bank પર કામ કરે છે — log in, Service Requests, leaves pick કરો, address confirm કરો — plus SBI, HDFC, ICICI, Axis અને Kotak ના exact channels, એ pre-checks જે failed requests રોકે છે, delivery માં really શું લાગે છે, અને એ leaf-tracking habit જેનાથી તમે ફરી ક્યારેય dry નથી થતા.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

You reach for the cheque book, flip to the back, and there it is: one leaf left, and a payment due tomorrow.

The good news — and it genuinely is good news — is that ordering a new book is the single easiest task in Indian banking. No forms, no queue, no branch. Every major bank lets you do it in under two minutes from the app or net banking, and the book lands at your registered address by post within the week-or-so range.

The catch is that everyone does it *late*. So this guide covers two things: how to place the request at each of the big five banks today, and the small habit that means you never hit the one-leaf panic again.

### [H2] Before You Order — Three 30-Second Checks

A failed cheque book request is almost always one of these three. Check them first:

**1. Is your registered address current?** The book ships by post to the address on the bank's file — not to where you actually live, if those have drifted apart. If you've moved since you last updated KYC, fix the address *first*, then order. A cheque book bouncing back undelivered is a weeks-long detour.

**2. Is your KYC complete and the account active?** Banks quietly block service requests on KYC-pending or dormant accounts. If the request button is greyed out or errors without explanation, this is usually why.

**3. Do you know your free quota?** Most savings accounts include a free leaf allowance per year — beyond it, books are charged a few rupees per leaf. Current accounts have their own slabs. The numbers vary by bank and account tier and get revised quietly, so treat your bank's service-charge page as the source of truth, not a blog (including this one).

One more thing you don't need to worry about: compliance. Every book issued today is CTS-2010 compliant by default ([what that standard actually means](https://cheqify.app/en/blog/cts-2010-cheque-format-compliance-india)) — you can't accidentally order a non-compliant book.

### [H2] The One Flow That Works Everywhere

Strip away each bank's menu names and the request is identical everywhere:

1. **Log in** to net banking or the mobile app.
2. **Find the services section** — it's called *Service Requests*, *Requests*, or just *Services*, but it's always there.
3. **Pick "Cheque Book Request"** and select the account (if you hold more than one).
4. **Choose the number of leaves** — typically 10, 25, or 50 where the bank offers options.
5. **Confirm the delivery address** — this is the moment to catch a stale address.
6. **Submit and note the request number.** You'll get an SMS/email confirmation, and most banks let you track the request and the postal dispatch.

That's the whole skill. The bank-specific notes below are just "where the button lives."

> **The cheque book request is the easiest banking task there is — two minutes in the app. The only people who find it stressful are the ones who start with one leaf left.**

### [H2] State Bank of India (SBI)

Net banking (onlinesbi) and the **YONO** app both carry the request — look under the requests/services area for *Cheque Book Request*. SBI typically offers a choice of leaf counts and dispatches by post to the registered address. SBI also accepts cheque book requests at its **ATMs** — useful if a parent or relative doesn't use the app. Savings accounts get a small free-leaf quota per financial year; beyond it the book is charged per the current service-charge schedule.

### [H2] HDFC Bank

**NetBanking → Request** section, or the mobile app's service-request area. HDFC's flow is short — pick account, confirm address, submit — and the bank emails/SMSes dispatch details. HDFC savings accounts come with a yearly free-leaf allowance; charges apply past it. If your account offers *managed* relationship banking, your RM can also raise it for you.

### [H2] ICICI Bank

Internet banking's **Service Requests** section, or **iMobile Pay → Services**. Same pattern: account, leaves, address, submit. ICICI shows the request under your service-request history so you can track status without calling the phone line. Free quota and per-leaf charges depend on account variant — check the schedule of charges for yours.

### [H2] Axis Bank

Internet banking **Services / Service Requests**, or the **Axis Mobile** app. Pick the account, confirm the address, done. Axis, like the others, dispatches to the registered address only — no third-party delivery addresses, which is a fraud-control measure, not bureaucracy.

### [H2] Kotak Mahindra Bank

Net banking **Service Requests**, or the **Kotak** app's services section. Kotak's flow follows the same six steps. For Kotak 811 and other digital-first variants, note that some account types are designed around digital payments and carry smaller cheque facilities — if the option is missing, your account variant may be the reason.

**A note on all five:** banks rename menus more often than they redesign cheques. If the path above has shifted by the time you read this, search "cheque book" inside the app — every one of these apps has a search bar now, and it's faster than navigating.

### [H2] Delivery — What Actually Happens After You Tap Submit

The book is printed centrally and dispatched by post or courier to your registered address. In metros it commonly shows up within a few working days; elsewhere allow a week or somewhat more. You'll usually get a dispatch SMS with a tracking reference.

Three delivery realities worth knowing:

- **Someone should be available to receive it.** Undelivered books go back, and the re-dispatch dance is slow.
- **It will not be redirected.** Banks ship to the registered address, full stop. (This is the address check from earlier, biting.)
- **When it arrives, count and check.** Confirm the leaf series is continuous and the account details printed on the leaves are correct ([where the cheque number lives and what it encodes](https://cheqify.app/en/blog/cheque-number-in-cheque-book-explained)). Report anything off immediately — a gap in the series is worth a phone call.

### [H2] When Online Fails — The Branch Fallback

Sometimes the button genuinely won't work: KYC pending, account dormant after long inactivity, a hold on the account, or signatures/mandates under update. Then it's the old way — a requisition slip (there's one bound into the back of your current book, that's what it's for) handed in at the branch. If even the requisition slip is gone, the branch has a form. Carry ID.

And if you're a business burning through books faster than the post can deliver them, the deeper fix isn't ordering more books more often — it's making each book go further. Most wasted leaves die to handwriting errors, not payments ([the mistakes that quietly eat cheque books](https://cheqify.app/en/blog/cheque-printing-mistakes-indian-businesses)).

### [H2] The Habit That Beats the Emergency

The one-leaf panic has a boring cause: nobody counts leaves until there's almost nothing to count.

Fix it with a threshold, not vigilance. When a fresh book arrives, find the leaf that sits ten from the end and mark the corner. When you reach the marked leaf — order. Ten leaves of runway comfortably covers any bank's delivery time, and the rule costs you nothing to maintain.

Or let software hold the threshold for you. If your cheques are tracked — every leaf issued, cleared, voided, remaining — the "running low" moment is a number on a screen instead of a surprise at the back of the book. That's the lifecycle idea ([how cheque lifecycle tracking works](https://cheqify.app/en/blog/cheque-lifecycle-management-explained)), and it's the difference between *managing* cheques and being ambushed by them. Businesses writing a book a month should also be filling those leaves by printer, not pen ([how to fill a cheque correctly](https://cheqify.app/en/blog/how-to-fill-cheque-correctly) covers the manual rules — and why printing skips most of them).

Order the book before you need it. Everything else in this post is detail.

---

> **Never get ambushed by an empty cheque book again.** Cheqify keeps a live register of every leaf — issued, cleared, voided, remaining — so "running low" is a number you see coming, not a surprise. Plus printing on 300+ Indian bank layouts so the leaves you have go further. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** How do I request a new cheque book online?
   **A:** Log in to your bank's net banking or mobile app, open the Service Requests (or Requests/Services) section, choose Cheque Book Request, select the account and number of leaves, confirm your registered address, and submit. You'll get a confirmation with a request number, and the book is dispatched by post to your registered address. The flow is essentially identical at SBI, HDFC, ICICI, Axis, and Kotak.

2. **Q:** How long does cheque book delivery take?
   **A:** The book is printed centrally and sent by post or courier to your registered address — commonly within a few working days in metro cities, and up to a week or somewhat more elsewhere. Most banks send a dispatch SMS with a tracking reference. If nothing arrives well past that window, check the request status in your app and raise a follow-up with the request number.

3. **Q:** Is a new cheque book free?
   **A:** Usually partly. Most savings accounts include a free leaf quota per year, after which books are charged a few rupees per leaf; current accounts have their own slabs. The exact numbers vary by bank and account tier and are revised periodically, so check your bank's official schedule of charges rather than relying on any third-party figure.

4. **Q:** Can I get the cheque book delivered to a different address?
   **A:** No — banks dispatch only to the registered address on file, as a fraud-control measure. If you've moved, update your address through the bank's KYC process first, then place the cheque book request. Ordering against a stale address is the most common reason a cheque book never arrives.

5. **Q:** Can I request a cheque book without net banking?
   **A:** Yes. Options include the bank's ATM (SBI, among others, supports cheque book requests at ATMs), phone banking, or the branch — using the requisition slip bound into the back of your current cheque book, or a branch form with ID if the slip is gone. Online is fastest, but every offline channel still works.

6. **Q:** Why is the cheque book request option not working for me?
   **A:** The usual culprits are pending KYC, a dormant/inoperative account, a hold on the account, or — on digital-first account variants — a product that carries limited cheque facilities. If the option is greyed out or errors, check KYC status and account activity first; if both are clean, contact the bank with the error details.

7. **Q:** What should I check when the new cheque book arrives?
   **A:** Three things: the leaf series is continuous with no missing numbers, the account details printed on the leaves are correct, and the book matches the account you requested it for. Report any gap or misprint to the bank immediately — a missing leaf in a fresh book is worth a phone call the same day.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Log in to net banking or the mobile app | Use your bank's official app or internet banking portal. Don't use links from SMS or email — type the address or open the installed app. |
| 2 | Open the Service Requests section | It may be labelled Service Requests, Requests, or Services depending on the bank — or use the app's search bar and type "cheque book". |
| 3 | Select Cheque Book Request and the account | Choose the cheque book request option, then pick which account the book is for if you hold more than one. |
| 4 | Choose the number of leaves | Select the leaf count where options are offered (typically 10, 25, or 50). Mind your free-quota allowance — leaves beyond it are charged. |
| 5 | Confirm the delivery address | The book ships only to your registered address. If it's outdated, stop and update KYC/address first, then order — this prevents the most common delivery failure. |
| 6 | Submit and track the request | Note the request/reference number from the confirmation SMS or email. Track dispatch in the app, and when the book arrives, verify the leaf series is continuous and the printed details are correct. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

आप cheque book की तरफ़ हाथ बढ़ाते हैं, पीछे तक flip करते हैं, और वो रहा: एक leaf बची, और एक payment कल due.

Good news — और ये genuinely good news है — ये है कि नई book order करना Indian banking का single easiest task है. कोई forms नहीं, कोई queue नहीं, कोई branch नहीं. हर major bank आपको app या net banking से two minutes के अंदर ये करने देता है, और book post के through आपके registered address पर week-or-so की range में land होती है.

Catch ये है कि हर कोई इसे *late* करता है. तो ये guide दो चीज़ें cover करती है: आज पाँचों बड़े banks में request कैसे place करें, और वो small habit जिससे आप फिर कभी one-leaf panic पर नहीं पहुँचते.

### [H2] Order करने से पहले — तीन 30-Second Checks

एक failed cheque book request almost always इन तीन में से एक है. पहले इन्हें check करें:

**1. क्या आपका registered address current है?** Book bank की file पर वाले address पर post से ship होती है — वहाँ नहीं जहाँ आप actually रहते हैं, अगर वो दोनों अलग हो गए हैं. अगर आप last KYC update के बाद से move हुए हैं, *पहले* address fix करें, फिर order करें. Undelivered वापस bounce होती cheque book एक weeks-long detour है.

**2. क्या आपकी KYC complete है और account active?** Banks KYC-pending या dormant accounts पर service requests quietly block कर देते हैं. अगर request button greyed out है या बिना explanation के error देता है, usually यही reason है.

**3. क्या आप अपना free quota जानते हैं?** ज़्यादातर savings accounts में साल का एक free leaf allowance included है — उसके beyond, books कुछ rupees per leaf charged होती हैं. Current accounts के अपने slabs हैं. Numbers bank और account tier से vary करते हैं और quietly revise होते हैं, तो अपने bank के service-charge page को source of truth treat करें, blog को नहीं (इसको भी नहीं).

एक और चीज़ जिसकी आपको worry नहीं करनी: compliance. आज issue होने वाली हर book default से CTS-2010 compliant है ([वो standard actually क्या mean करता है](https://cheqify.app/hi/blog/cts-2010-cheque-format-compliance-india)) — आप accidentally non-compliant book order नहीं कर सकते.

### [H2] वो One Flow जो हर जगह काम करता है

हर bank के menu names हटा दें और request हर जगह identical है:

1. **Net banking या mobile app में log in करें.**
2. **Services section ढूँढें** — इसे *Service Requests*, *Requests*, या बस *Services* कहते हैं, पर ये हमेशा वहाँ है.
3. **"Cheque Book Request" pick करें** और account select करें (अगर आपके पास एक से ज़्यादा हैं).
4. **Leaves की संख्या choose करें** — typically 10, 25, या 50 जहाँ bank options offer करता है.
5. **Delivery address confirm करें** — यही moment है stale address पकड़ने का.
6. **Submit करें और request number note करें.** आपको SMS/email confirmation मिलेगा, और ज़्यादातर banks आपको request और postal dispatch track करने देते हैं.

बस यही पूरी skill है. नीचे के bank-specific notes सिर्फ़ "button कहाँ रहता है" हैं.

> **Cheque book request सबसे आसान banking task है — app में two minutes. इसे stressful सिर्फ़ वो लोग find करते हैं जो एक leaf बचने पर शुरू करते हैं.**

### [H2] State Bank of India (SBI)

Net banking (onlinesbi) और **YONO** app दोनों request carry करते हैं — requests/services area के under *Cheque Book Request* देखें. SBI typically leaf counts की choice offer करता है और registered address पर post से dispatch करता है. SBI अपने **ATMs** पर भी cheque book requests accept करता है — useful अगर कोई parent या relative app use नहीं करता. Savings accounts को per financial year एक small free-leaf quota मिलता है; उसके beyond book current service-charge schedule के per charged होती है.

### [H2] HDFC Bank

**NetBanking → Request** section, या mobile app का service-request area. HDFC का flow short है — account pick करें, address confirm करें, submit — और bank dispatch details email/SMS करता है. HDFC savings accounts एक yearly free-leaf allowance के साथ आते हैं; उसके past charges apply होते हैं. अगर आपका account *managed* relationship banking offer करता है, आपका RM भी ये raise कर सकता है.

### [H2] ICICI Bank

Internet banking का **Service Requests** section, या **iMobile Pay → Services**. Same pattern: account, leaves, address, submit. ICICI request को आपकी service-request history के under दिखाता है ताकि आप phone line call किए बिना status track कर सकें. Free quota और per-leaf charges account variant पर depend करते हैं — अपने वाले के लिए schedule of charges check करें.

### [H2] Axis Bank

Internet banking **Services / Service Requests**, या **Axis Mobile** app. Account pick करें, address confirm करें, done. Axis, बाकियों की तरह, सिर्फ़ registered address पर dispatch करता है — कोई third-party delivery addresses नहीं, जो एक fraud-control measure है, bureaucracy नहीं.

### [H2] Kotak Mahindra Bank

Net banking **Service Requests**, या **Kotak** app का services section. Kotak का flow same six steps follow करता है. Kotak 811 और बाकी digital-first variants के लिए, note करें कि कुछ account types digital payments के around designed हैं और smaller cheque facilities carry करते हैं — अगर option missing है, आपका account variant reason हो सकता है.

**पाँचों पर एक note:** banks menus को cheques redesign करने से ज़्यादा often rename करते हैं. अगर ऊपर का path आपके पढ़ने तक shift हो गया है, app के अंदर "cheque book" search करें — इन सभी apps में अब search bar है, और ये navigate करने से faster है.

### [H2] Delivery — Submit Tap करने के बाद Actually क्या होता है

Book centrally print होती है और post या courier से आपके registered address पर dispatch होती है. Metros में ये commonly कुछ working days के अंदर show up होती है; बाकी जगह एक week या कुछ ज़्यादा allow करें. आपको usually एक dispatch SMS मिलेगा tracking reference के साथ.

तीन delivery realities जो जानने लायक हैं:

- **Receive करने के लिए कोई available होना चाहिए.** Undelivered books वापस चली जाती हैं, और re-dispatch का dance slow है.
- **ये redirect नहीं होगी.** Banks registered address पर ship करते हैं, full stop. (ये पहले वाला address check है, काटता हुआ.)
- **जब ये आए, count करें और check करें.** Confirm करें कि leaf series continuous है और leaves पर printed account details correct हैं ([cheque number कहाँ रहता है और क्या encode करता है](https://cheqify.app/hi/blog/cheque-number-in-cheque-book-explained)). कुछ भी off हो तो immediately report करें — series में एक gap एक phone call के लायक है.

### [H2] जब Online Fail हो — Branch Fallback

कभी-कभी button genuinely काम नहीं करेगा: KYC pending, लंबी inactivity के बाद dormant account, account पर एक hold, या signatures/mandates update के under. तब पुराना तरीका — एक requisition slip (आपकी current book के पीछे एक bound है, वो इसी के लिए है) branch पर hand in करें. अगर requisition slip भी गई, branch के पास form है. ID carry करें.

और अगर आप एक business हैं जो books को post के deliver करने से faster burn करता है, deeper fix ज़्यादा books ज़्यादा often order करना नहीं है — हर book को आगे तक ले जाना है. ज़्यादातर wasted leaves handwriting errors से मरती हैं, payments से नहीं ([वो mistakes जो quietly cheque books खाती हैं](https://cheqify.app/hi/blog/cheque-printing-mistakes-indian-businesses)).

### [H2] वो Habit जो Emergency को हराती है

One-leaf panic का एक boring cause है: कोई leaves count नहीं करता जब तक count करने को almost कुछ नहीं बचता.

इसे vigilance से नहीं, एक threshold से fix करें. जब fresh book आए, वो leaf ढूँढें जो end से दस पहले बैठती है और corner mark करें. जब आप marked leaf पर पहुँचें — order करें. दस leaves का runway किसी भी bank के delivery time को comfortably cover करता है, और इस rule को maintain करने का cost कुछ नहीं.

या software को threshold hold करने दें. अगर आपके cheques tracked हैं — हर leaf issued, cleared, voided, remaining — "running low" moment screen पर एक number है, book के पीछे का surprise नहीं. यही lifecycle idea है ([cheque lifecycle tracking कैसे काम करती है](https://cheqify.app/hi/blog/cheque-lifecycle-management-explained)), और यही फ़र्क़ है cheques *manage* करने और उनसे ambush होने में. महीने में एक book लिखने वाले businesses को वो leaves printer से भरनी चाहिए, pen से नहीं ([cheque correctly कैसे भरें](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly) manual rules cover करता है — और printing उनमें से ज़्यादातर को skip क्यों करती है).

Book को ज़रूरत से पहले order करें. इस post में बाकी सब detail है.

---

> **खाली cheque book से फिर कभी ambush मत होइए.** Cheqify हर leaf का live register रखता है — issued, cleared, voided, remaining — ताकि "running low" एक number हो जो आपको आता दिखे, surprise नहीं. Plus 300+ Indian bank layouts पर printing ताकि आपकी leaves आगे तक जाएँ. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

તમે cheque book તરફ હાથ લંબાવો છો, પાછળ સુધી flip કરો છો, અને એ રહ્યું: એક leaf બચી, અને એક payment કાલે due.

Good news — અને આ genuinely good news છે — એ છે કે નવી book order કરવી Indian banking નું single easiest task છે. કોઈ forms નહીં, કોઈ queue નહીં, કોઈ branch નહીં. દરેક major bank તમને app કે net banking થી two minutes ની અંદર આ કરવા દે છે, અને book post ના through તમારા registered address પર week-or-so ની range માં land થાય છે.

Catch એ છે કે દરેક જણ આ *late* કરે છે. તો આ guide બે વસ્તુઓ cover કરે છે: આજે પાંચેય મોટા banks માં request કેવી રીતે place કરવી, અને એ small habit જેનાથી તમે ફરી ક્યારેય one-leaf panic પર નથી પહોંચતા.

### [H2] Order કરતા પહેલા — ત્રણ 30-Second Checks

એક failed cheque book request almost always આ ત્રણમાંથી એક છે. પહેલા આ check કરો:

**1. શું તમારું registered address current છે?** Book bank ની file પરના address પર post થી ship થાય છે — ત્યાં નહીં જ્યાં તમે actually રહો છો, જો એ બંને અલગ થઈ ગયા છે. જો તમે last KYC update પછી move થયા છો, *પહેલા* address fix કરો, પછી order કરો. Undelivered પાછી bounce થતી cheque book એક weeks-long detour છે.

**2. શું તમારી KYC complete છે અને account active?** Banks KYC-pending કે dormant accounts પર service requests quietly block કરી દે છે. જો request button greyed out છે કે explanation વગર error આપે છે, usually આ જ reason છે.

**3. શું તમે તમારો free quota જાણો છો?** મોટાભાગના savings accounts માં વર્ષનું એક free leaf allowance included છે — એના beyond, books થોડા rupees per leaf charged થાય છે. Current accounts ના પોતાના slabs છે. Numbers bank અને account tier થી vary કરે છે અને quietly revise થાય છે, તો તમારા bank ના service-charge page ને source of truth treat કરો, blog ને નહીં (આને પણ નહીં).

એક બીજી વસ્તુ જેની તમારે worry નથી કરવાની: compliance. આજે issue થતી દરેક book default થી CTS-2010 compliant છે ([એ standard actually શું mean કરે છે](https://cheqify.app/gu/blog/cts-2010-cheque-format-compliance-india)) — તમે accidentally non-compliant book order નથી કરી શકતા.

### [H2] એ One Flow જે દરેક જગ્યાએ કામ કરે છે

દરેક bank ના menu names હટાવી દો અને request દરેક જગ્યાએ identical છે:

1. **Net banking કે mobile app માં log in કરો.**
2. **Services section શોધો** — એને *Service Requests*, *Requests*, કે બસ *Services* કહે છે, પણ એ હંમેશા ત્યાં છે.
3. **"Cheque Book Request" pick કરો** અને account select કરો (જો તમારી પાસે એકથી વધારે છે).
4. **Leaves ની સંખ્યા choose કરો** — typically 10, 25, કે 50 જ્યાં bank options offer કરે છે.
5. **Delivery address confirm કરો** — આ જ moment છે stale address પકડવાનો.
6. **Submit કરો અને request number note કરો.** તમને SMS/email confirmation મળશે, અને મોટાભાગના banks તમને request અને postal dispatch track કરવા દે છે.

બસ આ જ આખી skill છે. નીચેના bank-specific notes ફક્ત "button ક્યાં રહે છે" છે.

> **Cheque book request સૌથી સહેલું banking task છે — app માં two minutes. એને stressful ફક્ત એ લોકો find કરે છે જે એક leaf બચે ત્યારે શરૂ કરે છે.**

### [H2] State Bank of India (SBI)

Net banking (onlinesbi) અને **YONO** app બંને request carry કરે છે — requests/services area ની under *Cheque Book Request* જુઓ. SBI typically leaf counts ની choice offer કરે છે અને registered address પર post થી dispatch કરે છે. SBI પોતાના **ATMs** પર પણ cheque book requests accept કરે છે — useful જો કોઈ parent કે relative app use નથી કરતા. Savings accounts ને per financial year એક small free-leaf quota મળે છે; એના beyond book current service-charge schedule ની per charged થાય છે.

### [H2] HDFC Bank

**NetBanking → Request** section, કે mobile app નું service-request area. HDFC નો flow short છે — account pick કરો, address confirm કરો, submit — અને bank dispatch details email/SMS કરે છે. HDFC savings accounts એક yearly free-leaf allowance સાથે આવે છે; એની past charges apply થાય છે. જો તમારું account *managed* relationship banking offer કરે છે, તમારો RM પણ આ raise કરી શકે છે.

### [H2] ICICI Bank

Internet banking નું **Service Requests** section, કે **iMobile Pay → Services**. Same pattern: account, leaves, address, submit. ICICI request ને તમારી service-request history ની under બતાવે છે જેથી તમે phone line call કર્યા વગર status track કરી શકો. Free quota અને per-leaf charges account variant પર depend કરે છે — તમારા વાળા માટે schedule of charges check કરો.

### [H2] Axis Bank

Internet banking **Services / Service Requests**, કે **Axis Mobile** app. Account pick કરો, address confirm કરો, done. Axis, બાકીઓની જેમ, ફક્ત registered address પર dispatch કરે છે — કોઈ third-party delivery addresses નહીં, જે એક fraud-control measure છે, bureaucracy નહીં.

### [H2] Kotak Mahindra Bank

Net banking **Service Requests**, કે **Kotak** app નું services section. Kotak નો flow same six steps follow કરે છે. Kotak 811 અને બાકી digital-first variants માટે, note કરો કે કેટલાક account types digital payments ની around designed છે અને smaller cheque facilities carry કરે છે — જો option missing છે, તમારું account variant reason હોઈ શકે છે.

**પાંચેય પર એક note:** banks menus ને cheques redesign કરવા કરતા વધારે often rename કરે છે. જો ઉપરનો path તમારા વાંચવા સુધી shift થઈ ગયો છે, app ની અંદર "cheque book" search કરો — આ બધી apps માં હવે search bar છે, અને એ navigate કરવા કરતા faster છે.

### [H2] Delivery — Submit Tap કર્યા પછી Actually શું થાય છે

Book centrally print થાય છે અને post કે courier થી તમારા registered address પર dispatch થાય છે. Metros માં આ commonly થોડા working days ની અંદર show up થાય છે; બાકી જગ્યાએ એક week કે થોડું વધારે allow કરો. તમને usually એક dispatch SMS મળશે tracking reference સાથે.

ત્રણ delivery realities જે જાણવા લાયક છે:

- **Receive કરવા માટે કોઈ available હોવું જોઈએ.** Undelivered books પાછી જતી રહે છે, અને re-dispatch નો dance slow છે.
- **આ redirect નહીં થાય.** Banks registered address પર ship કરે છે, full stop. (આ પહેલા વાળો address check છે, કરડતો.)
- **જ્યારે આ આવે, count કરો અને check કરો.** Confirm કરો કે leaf series continuous છે અને leaves પર printed account details correct છે ([cheque number ક્યાં રહે છે અને શું encode કરે છે](https://cheqify.app/gu/blog/cheque-number-in-cheque-book-explained)). કંઈ પણ off હોય તો immediately report કરો — series માં એક gap એક phone call ના લાયક છે.

### [H2] જ્યારે Online Fail થાય — Branch Fallback

ક્યારેક button genuinely કામ નહીં કરે: KYC pending, લાંબી inactivity પછી dormant account, account પર એક hold, કે signatures/mandates update ની under. ત્યારે જૂનો તરીકો — એક requisition slip (તમારી current book ની પાછળ એક bound છે, એ આના માટે જ છે) branch પર hand in કરો. જો requisition slip પણ ગઈ, branch પાસે form છે. ID carry કરો.

અને જો તમે એક business છો જે books ને post ના deliver કરવા કરતા faster burn કરે છે, deeper fix વધારે books વધારે often order કરવી નથી — દરેક book ને આગળ સુધી લઈ જવી છે. મોટાભાગની wasted leaves handwriting errors થી મરે છે, payments થી નહીં ([એ mistakes જે quietly cheque books ખાય છે](https://cheqify.app/gu/blog/cheque-printing-mistakes-indian-businesses)).

### [H2] એ Habit જે Emergency ને હરાવે છે

One-leaf panic નો એક boring cause છે: કોઈ leaves count નથી કરતું જ્યાં સુધી count કરવા માટે almost કંઈ નથી બચતું.

આને vigilance થી નહીં, એક threshold થી fix કરો. જ્યારે fresh book આવે, એ leaf શોધો જે end થી દસ પહેલા બેસે છે અને corner mark કરો. જ્યારે તમે marked leaf પર પહોંચો — order કરો. દસ leaves નો runway કોઈ પણ bank ના delivery time ને comfortably cover કરે છે, અને આ rule ને maintain કરવાનો cost કંઈ નહીં.

કે software ને threshold hold કરવા દો. જો તમારા cheques tracked છે — દરેક leaf issued, cleared, voided, remaining — "running low" moment screen પર એક number છે, book ની પાછળનો surprise નહીં. આ જ lifecycle idea છે ([cheque lifecycle tracking કેવી રીતે કામ કરે છે](https://cheqify.app/gu/blog/cheque-lifecycle-management-explained)), અને આ જ ફરક છે cheques *manage* કરવા અને એમનાથી ambush થવામાં. મહિનામાં એક book લખતા businesses એ એ leaves printer થી ભરવી જોઈએ, pen થી નહીં ([cheque correctly કેવી રીતે ભરવો](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly) manual rules cover કરે છે — અને printing એમાંથી મોટાભાગનાને skip કેમ કરે છે).

Book ને જરૂર પહેલા order કરો. આ post માં બાકી બધું detail છે.

---

> **ખાલી cheque book થી ફરી ક્યારેય ambush ન થાઓ.** Cheqify દરેક leaf નું live register રાખે છે — issued, cleared, voided, remaining — જેથી "running low" એક number હોય જે તમને આવતો દેખાય, surprise નહીં. Plus 300+ Indian bank layouts પર printing જેથી તમારી leaves આગળ સુધી જાય. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## ⚠️ Pre-publish fact-check required

1. **Bank menu paths** (SBI YONO, HDFC NetBanking → Request, ICICI iMobile → Services, Axis Services, Kotak Service Requests) are described loosely and hedged with the "menus get renamed — use in-app search" note. Do NOT tighten to exact click-paths without walking each flow at publish time; they change quarterly.
2. **SBI ATM cheque-book request** — long-standing SBI feature; re-confirm it's still offered before publish.
3. **Free-leaf quotas and per-leaf charges** are deliberately unstated as numbers (body says "varies, check the schedule of charges"). Keep it that way — these are the most frequently revised charges in retail banking.
4. **Delivery timelines** are directional ("few working days in metros, a week or somewhat more elsewhere"). No bank-committed SLA exists publicly; don't print one.
5. **Kotak 811 limited cheque facility** — confirm current 811 cheque book policy before publish; digital-variant terms shift.

---

## Internal-Link Strategy

**Forward links from this post:**
- Post #15 (`cts-2010-cheque-format-compliance-india`) — every new book is CTS-compliant.
- Post #16 (`cheque-number-in-cheque-book-explained`) — verify the leaf series on arrival.
- Post #9 (`cheque-printing-mistakes-indian-businesses`) — wasted leaves die to handwriting errors.
- Post #13 (`cheque-lifecycle-management-explained`) — leaf tracking as the anti-emergency habit.
- Post #19 (`how-to-fill-cheque-correctly`) — manual fill rules vs printing.

**Bonus internal-link work (after publish):**
- Edit post #16 (`cheque-number-in-cheque-book-explained`, all 3 locales) to link "when your book runs low" to this post.
- Edit post #19 (`how-to-fill-cheque-correctly`, all 3 locales) to add an "out of leaves? how to order online" link.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The five bank sections are structurally repetitive (detector-sensitive) — each one carries a distinct aside (ATM channel, RM, request history, fraud-control note, 811 variant) to break the pattern; don't flatten them.
- **Fact-check block:** Resolve all items — especially walking the five bank flows at publish time.
- **Word count:** EN body must be >1200 words (target 1,700–2,200). Current draft: ~1,850 words.
- **Sanity toggles:** `isHowTo: ON` (6 steps), `hasFaq: ON` (7 items).

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — post #16 and post #19.
5. IndexNow auto-pings on publish.
