# Blog Post #46 — Security Cheques & Blank Cheques in India — The Risks Nobody Explains (2026)

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

### Sanity block styles in this draft

**Apply as Callout block (grey rounded box):**
- `> **Every cheque you sign should live in a register...** / **आपका sign किया हर cheque एक register में...** / **તમે sign કરેલો દરેક cheque એક register માં...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **A signed blank cheque is not a promise...** / **एक signed blank cheque कोई promise नहीं है...** / **એક signed blank cheque કોઈ promise નથી...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

Security cheques are the most common cheque transaction that nobody researches until it goes wrong: signed blank or undated leaves handed over for rent deposits, loan disbursals, vendor credit lines, and employment bonds. The signer's exposure is genuinely misunderstood — Section 20 NI Act makes a signed blank leaf completable by the holder, courts have generally allowed Section 138 to reach a presented security cheque where a debt exists, and stop payment is a weaker shield than people assume. Strong search intent ("security cheque bounce", "blank cheque risk", "undated cheque legal"). Balanced giver/receiver framing fits Cheqify's SMB audience on both sides of the desk. Cluster fit: #23 (loan repayment), #34 (rent + HRA), #12 (validity/stop payment); Section 138 and crossing topics reinforced in plain text.

---

## Sanity Fields

- **Slug:** `security-cheque-blank-cheque-risks`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `security cheque`
- **Secondary keywords:** blank cheque risks, undated cheque legal India, security cheque bounce 138, blank signed cheque misuse, security cheque for loan, cheque as collateral India
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/security-cheque-blank-cheque-risks`
  - HI: `https://cheqify.app/hi/blog/security-cheque-blank-cheque-risks`
  - GU: `https://cheqify.app/gu/blog/security-cheque-blank-cheque-risks`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `security-cheque-blank-cheque-risks-cover.webp`
- **Subject:** A signed but otherwise blank cheque leaf mid-handover between two hands across a desk — the amount and date fields conspicuously empty, the signature filled. Beside it, a one-page agreement with a highlighted line recording the cheque number, and a small padlock resting on the leaf. Muted, slightly tense palette. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** A signed blank security cheque being handed over in India — empty amount and date fields, with a written acknowledgement recording the cheque number.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Security Cheques & Blank Cheques in India — The Risks Nobody Explains (2026)
- **HI:** India में Security Cheques और Blank Cheques — वो Risks जो कोई नहीं बताता (2026)
- **GU:** India માં Security Cheques અને Blank Cheques — એ Risks જે કોઈ નથી કહેતું (2026)

---

## Descriptions

- **EN:** That signed, undated cheque your lender or landlord is holding is not a formality. Under Section 20 of the NI Act the holder can complete it and present it — and courts have generally held that a bounced security cheque can attract Section 138 where a debt exists. Here's what a security cheque legally is, the real risks to the signer, why stop payment isn't the escape hatch it looks like, and the checklist that protects you when you must hand one over.
- **HI:** वो signed, undated cheque जो आपका lender या landlord पकड़े है, कोई formality नहीं है. NI Act के Section 20 के under holder इसे complete करके present कर सकता है — और courts ने generally माना है कि debt exist करने पर एक bounced security cheque Section 138 attract कर सकता है. यहाँ है security cheque legally क्या है, signer के real risks, stop payment वो escape hatch क्यों नहीं जो दिखता है, और वो checklist जो देना ही पड़े तब आपको protect करती है.
- **GU:** એ signed, undated cheque જે તમારો lender કે landlord પકડીને બેઠો છે, એ કોઈ formality નથી. NI Act ના Section 20 ની under holder એને complete કરીને present કરી શકે છે — અને courts એ generally માન્યું છે કે debt exist કરતું હોય તો એક bounced security cheque Section 138 attract કરી શકે છે. અહીં છે security cheque legally શું છે, signer ના real risks, stop payment એ escape hatch કેમ નથી જે દેખાય છે, અને એ checklist જે આપવો જ પડે ત્યારે તમને protect કરે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The loan gets sanctioned on a Tuesday. Somewhere between the approval letter and the disbursal, the officer slides three cheque leaves across the desk — sign here, here, and here. No date. No amount. No payee. "Just security, sir. Standard procedure."

Most people sign. The landlord who asks for one alongside the rent deposit gets the same easy compliance, and so does the distributor onboarding a new retailer on credit. Almost nobody asks the only question that matters: *what exactly can be done with this piece of paper once it leaves my hand?*

More than you think. This is the answer nobody gives at the desk — what a security cheque legally is, the risks it quietly creates for the person who signs it, why "it was only security" is a weaker defence than it sounds, and the short checklist that protects you when handing one over is genuinely unavoidable.

### [H2] What a "Security Cheque" Actually Is (and Isn't)

Search the Negotiable Instruments Act for the phrase "security cheque" and you'll find nothing. It's trade slang, not a legal category — the everyday name for a cheque handed over **as collateral rather than as payment**: a promise, parked in someone else's drawer, that money would be recoverable if things go wrong.

The usual habitats:

- **Rent** — a signed cheque handed over with the deposit, "in case of damages" (the rest of the rent-by-cheque discipline is [its own guide](https://cheqify.app/en/blog/rent-payment-by-cheque-hra-proof))
- **Loans** — banks and NBFCs collecting signed, undated leaves at disbursal, held against [future EMIs](https://cheqify.app/en/blog/loan-repayment-by-cheque-india)
- **Vendor and distributor arrangements** — a cheque held against a credit limit or stock advanced on trust
- **Employment bonds** — an employer holding a cheque against a training-cost or notice-period clause

Now the first thing the law actually says about them, and it isn't reassuring. A signed cheque with blank fields is not void — under **Section 20 of the NI Act** it's an *inchoate instrument*, and handing it over gives the holder **prima facie authority to complete it**: to write in the amount, the date, even the payee. That authority is supposed to be capped by whatever you agreed — but the burden of proving the holder exceeded the agreement lands on *you*, the signer. Usually years later. Usually from memory. Usually against their paperwork.

Read that once more before the next signature: the blank spaces are not safety. They're delegation.

### [H2] What You Actually Handed Over — The Giver's Risks

Four risks, in ascending order of pain.

**One: the amount is theirs to write.** A blank-amount cheque is bounded by the holder's restraint and the underlying deal — in that order. If the relationship sours, the number that appears in the amount box is their opening position in the dispute, and your account is the venue.

**Two: the date is theirs to choose.** An undated cheque never goes stale in a drawer. The three-month validity window runs from the date *written on the leaf* — and the holder writes it at presentation time. A cheque you signed in 2023 can be dated, presented, and dishonoured in 2026, long after you've mentally closed the chapter.

**Three: loss and plain misuse.** A signed, uncrossed blank cheque that slips out of the holder's file is dangerously close to bearer paper — whoever finds it holds a completable instrument with your signature already on it. You are trusting not just the person you gave it to, but their drawer, their office moves, and their record-keeping.

**Four: the bounce.** If the cheque is eventually presented and your account can't cover whatever was filled in, you're not looking at an awkward conversation. You're looking at a possible criminal complaint — which deserves its own section.

### [H2] "It Was Only Security" — Why Section 138 Can Still Reach You

The instinct runs like this: it wasn't a payment cheque, it was collateral, so cheque-bounce law shouldn't apply. The case law is less comforting. **Courts have generally held** that the label on the cheque matters less than the state of the debt on the day it is presented: if a legally enforceable debt or liability exists at presentation — unpaid EMIs, unpaid rent, an unrecovered advance — the dishonour of a so-called security cheque can attract **Section 138** of the NI Act like any ordinary bounce. The "it was only a security cheque" defence has succeeded in narrow fact patterns — no debt due yet, an amount filled in beyond the agreement — and failed in many more. (Case-law positions shift; treat this paragraph as the general direction of the courts, not a substitute for advice on your specific facts.)

> **A signed blank cheque is not a promise — it is a pre-authorised withdrawal from your account, with the amount to be decided by someone else, on a date of their choosing.**

The honest summary for a signer: a security cheque is a live Section 138 exposure that switches on the moment you genuinely owe money and the holder decides to use the leaf. It is not decorative. Sign it with exactly that understanding, or negotiate an alternative.

### [H2] Stop Payment Is Not the Escape Hatch It Looks Like

The tempting move, once a relationship turns hostile, is to call the bank and stop the cheque. Do understand what that buys you — and what it doesn't.

A stop-payment instruction means the cheque returns with "payment stopped by drawer" instead of "insufficient funds." But courts have generally treated a stop-payment dishonour the same way where a real debt exists — the Section 138 machinery can still engage, because the question is whether you owed the money, not which return code the bank stamped. Stopping payment on a cheque against a live, admitted liability mostly converts a bounce into a bounce with extra evidence of intent.

Where stop payment *is* the right tool: a cheque that's been lost, a deal that was cancelled with documentation, an amount filled in beyond what was ever agreed — situations where your paper trail shows the debt itself is disputed or gone. The mechanics, timelines, and charges are covered in our guide to [cheque validity and stop payment](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india). The one-line rule: stop payment protects a documented position; it cannot un-sign what you signed.

### [H2] The Other Side of the Desk — Why Businesses Ask for Them

Balance demands the receiver's view, because it isn't irrational. For a lender, landlord, or supplier extending trust, a security cheque is the cheapest enforcement instrument in India: Section 138's quasi-criminal process is faster and far more motivating than a civil recovery suit, and the mere existence of the leaf changes payment behaviour. Businesses ask because it works.

But if you're the business asking, the same discipline applies in mirror image. An undocumented security cheque — no agreement recording its number and purpose, no cap, no return condition — is weaker in court and unfair to the signer. Record the cheque number in the contract, state what it secures and when it must be returned, and actually return it when the obligation ends. A drawer full of stale security cheques from closed accounts is not leverage; it's unmanaged liability with your name on the receiving end of the next dispute.

### [H2] How to Protect Yourself When You Must Hand One Over

Sometimes refusing isn't realistic — the loan needs the cheque, the flat needs the deposit. Then the goal shifts from avoidance to damage limitation:

1. **Cross it before it leaves your hand.** Write "A/C Payee" between two parallel lines, add "Not Negotiable." A crossed cheque can only land in the named payee's bank account — it can't be encashed over a counter by whoever ends up holding it.
2. **Fill in everything the deal allows.** Write the payee name yourself, always. If the arrangement permits a fixed figure — a deposit amount, a bond value — write the amount too. A cheque for ₹50,000 is a far smaller weapon than a blank one, and dating it forces re-negotiation before any far-future presentation.
3. **Paper the handover.** Get a written acknowledgement — a clause in the loan or rent agreement, or a simple signed letter — recording the cheque number, that it is held **as security** for a named obligation, and the condition on which it must be returned. This single paragraph is what turns "he gave me a cheque" into your version of events, in writing, dated before the dispute.
4. **Record the leaf.** Photograph it, and log the cheque number, payee, purpose, and handover date in your own cheque register. When something surfaces years later, you want to answer from a record, not a guess.
5. **Diarise the reclaim.** Note the date the obligation ends — loan closure, tenancy exit, bond completion — and treat recovering the cheque as part of closing the deal, not an optional courtesy.

### [H2] Getting the Cheque Back — The Step Everyone Forgets

Loans get closed, tenants move out, employees serve their notice — and the security cheque stays in a file, signed and patient. Closing the loop properly:

Ask for the physical leaf back at settlement, and check its number against your record — a returned cheque that doesn't match the one you logged means one is still out there. Tear it and keep the pieces, or mark it cancelled yourself. If the holder claims it's lost, get that in writing along with your closure letter or NOC, then place a stop-payment instruction with that correspondence as your paper trail — this is the one scenario where stop payment is unambiguous, because your documents show the obligation is over.

The pattern under all of this is one habit: a cheque you signed never stops being your problem until you can account for it. Which is, precisely, a register's job.

---

> **Every cheque you sign should live in a register — especially the ones you handed over as security.** Cheqify's cheque register tracks every leaf by number, payee, purpose, and status, so the security cheque you gave your landlord in 2024 is one search away — not one panic away. Print, track, and reconcile on 300+ Indian bank layouts. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is a security cheque in India?
   **A:** "Security cheque" is trade usage, not a legal category — it means a cheque handed over as collateral rather than as payment: to a lender against future EMIs, a landlord with a rent deposit, a supplier against a credit limit, or an employer against a bond. It's often signed but left blank or undated. Under Section 20 of the NI Act, such an incomplete signed cheque is an inchoate instrument that the holder has prima facie authority to complete.

2. **Q:** Is it legal to give a blank or undated cheque as security?
   **A:** Yes — a signed cheque with blank fields is valid, and handing it over authorises the holder to fill in the missing details within the terms of your agreement. That is exactly why it's risky: the authority to complete the cheque travels with the paper, while the burden of proving any misuse stays with you. If you must give one, cross it, fill in the payee yourself, and record the handover in writing.

3. **Q:** Can a bounced security cheque lead to a Section 138 case?
   **A:** Courts have generally held that it can. What matters is whether a legally enforceable debt or liability exists when the cheque is presented — not the "security" label. If EMIs, rent, or advances are genuinely unpaid, dishonour of a security cheque can attract Section 138 like any other bounce. The security-cheque defence has succeeded mainly where no debt was due yet or the amount filled in exceeded the agreement.

4. **Q:** Can I stop payment on a security cheque I gave?
   **A:** You can instruct the bank, but it isn't an escape hatch: where a real debt exists, courts have generally treated a "payment stopped by drawer" return the same as an insufficient-funds bounce for Section 138 purposes. Stop payment is the right tool when your paper trail shows the obligation is over or disputed — a closed loan, a cancelled deal, a lost cheque — not a way to cancel a live liability.

5. **Q:** What precautions should I take before handing over a security cheque?
   **A:** Five things: cross it "A/C Payee / Not Negotiable"; write the payee name yourself (and the amount and date, if the deal allows a fixed figure); get a written acknowledgement recording the cheque number, its purpose as security, and the return condition; photograph the leaf and log it in your cheque register; and diarise the date the obligation ends so you reclaim the cheque at closure.

6. **Q:** What if the person holding my security cheque loses it or misuses it?
   **A:** A signed, uncrossed blank cheque is close to bearer paper if lost — anyone can complete it. If you learn the leaf is lost, get the holder's written confirmation and place a stop-payment instruction immediately, keeping that correspondence as your trail. If an amount beyond the agreement is filled in and presented, your written acknowledgement recording the cheque's purpose and cap becomes your primary defence — which is why it must exist from day one.

7. **Q:** How do I get my security cheque back after the loan or tenancy ends?
   **A:** Treat it as part of the closure: ask for the physical leaf at settlement, verify its number against your record, and destroy or mark it cancelled. If the holder can't produce it, get a written statement that it's lost plus your closure letter or NOC, then stop payment on that cheque number with the documents on file. Never treat "we'll return it later" as done — an unreturned security cheque stays your exposure.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Loan Tuesday को sanction होता है. Approval letter और disbursal के बीच कहीं, officer तीन cheque leaves desk के across slide करता है — यहाँ sign करें, यहाँ, और यहाँ. कोई date नहीं. कोई amount नहीं. कोई payee नहीं. "बस security है, sir. Standard procedure."

ज़्यादातर लोग sign कर देते हैं. Rent deposit के साथ एक माँगने वाले landlord को वही easy compliance मिलती है, और credit पर नया retailer onboard करते distributor को भी. लगभग कोई वो एक question नहीं पूछता जो matter करता है: *ये paper मेरे हाथ से निकलने के बाद इसके साथ exactly क्या किया जा सकता है?*

आपकी सोच से ज़्यादा. ये वो answer है जो desk पर कोई नहीं देता — security cheque legally क्या है, वो risks जो ये sign करने वाले के लिए quietly create करता है, "ये तो सिर्फ़ security था" जितना sound करता है उससे weaker defence क्यों है, और वो छोटी checklist जो तब protect करती है जब एक hand over करना genuinely unavoidable हो.

### [H2] एक "Security Cheque" Actually क्या है (और क्या नहीं)

Negotiable Instruments Act में "security cheque" phrase search करें और आपको कुछ नहीं मिलेगा. ये trade slang है, legal category नहीं — उस cheque का everyday नाम जो **payment की जगह collateral के तौर पर** hand over किया जाता है: किसी और के drawer में parked एक promise कि चीज़ें ग़लत जाने पर पैसा recoverable होगा.

Usual habitats:

- **Rent** — deposit के साथ handed over एक signed cheque, "damages के case में" (rent-by-cheque की बाक़ी discipline [अपनी अलग guide है](https://cheqify.app/hi/blog/rent-payment-by-cheque-hra-proof))
- **Loans** — banks और NBFCs disbursal पर signed, undated leaves collect करते हैं, [future EMIs](https://cheqify.app/hi/blog/loan-repayment-by-cheque-india) के against held
- **Vendor और distributor arrangements** — credit limit या trust पर advanced stock के against held एक cheque
- **Employment bonds** — training-cost या notice-period clause के against एक cheque पकड़े employer

अब पहली चीज़ जो law actually इनके बारे में कहता है, और वो reassuring नहीं है. Blank fields वाला एक signed cheque void नहीं है — **NI Act के Section 20** के under ये एक *inchoate instrument* है, और इसे hand over करना holder को **इसे complete करने की prima facie authority** देता है: amount लिखने की, date की, यहाँ तक कि payee की भी. वो authority उस पर capped होनी चाहिए जो आपने agree किया — पर ये prove करने का burden कि holder ने agreement exceed किया, *आप* पर, signer पर, land होता है. Usually सालों बाद. Usually memory से. Usually उनके paperwork के against.

अगले signature से पहले इसे एक बार और पढ़ें: blank spaces safety नहीं हैं. वो delegation हैं.

### [H2] आपने Actually क्या Hand Over किया — Giver के Risks

चार risks, pain के ascending order में.

**एक: amount उनका लिखने का है.** एक blank-amount cheque holder के restraint और underlying deal से bounded है — इसी order में. Relationship sour हो जाए, तो amount box में appear होने वाला number dispute में उनकी opening position है, और आपका account venue.

**दो: date उनकी choose करने की है.** एक undated cheque drawer में कभी stale नहीं होता. Three-month validity window leaf पर *लिखी गई date* से चलती है — और holder वो presentation time पर लिखता है. 2023 में आपका signed cheque 2026 में dated, presented, और dishonoured हो सकता है, आपके mentally chapter close करने के बहुत बाद.

**तीन: loss और plain misuse.** Holder की file से निकल गया एक signed, uncrossed blank cheque bearer paper के dangerously क़रीब है — जो भी उसे पाए, उसके पास आपके signature के साथ एक completable instrument है. आप सिर्फ़ उस person पर trust नहीं कर रहे जिसे दिया, बल्कि उनके drawer, उनके office moves, और उनकी record-keeping पर भी.

**चार: bounce.** अगर cheque eventually present होता है और जो भी fill किया गया वो आपका account cover नहीं कर सकता, तो आप एक awkward conversation नहीं देख रहे. आप एक possible criminal complaint देख रहे हैं — जो अपनी अलग section deserve करती है.

### [H2] "ये तो सिर्फ़ Security था" — Section 138 फिर भी आप तक क्यों पहुँच सकता है

Instinct ऐसे चलती है: ये payment cheque नहीं था, collateral था, तो cheque-bounce law apply नहीं होना चाहिए. Case law कम comforting है. **Courts ने generally माना है** कि cheque पर label उससे कम matter करता है जितना present होने के दिन debt की state: अगर presentation पर एक legally enforceable debt या liability exist करती है — unpaid EMIs, unpaid rent, एक unrecovered advance — तो एक so-called security cheque का dishonour किसी भी ordinary bounce की तरह NI Act का **Section 138** attract कर सकता है. "ये तो सिर्फ़ एक security cheque था" defence narrow fact patterns में succeed हुई है — अभी कोई debt due नहीं, agreement से beyond fill किया गया amount — और कहीं ज़्यादा में fail. (Case-law positions shift होती हैं; इस paragraph को courts की general direction मानें, आपके specific facts पर advice का substitute नहीं.)

> **एक signed blank cheque कोई promise नहीं है — ये आपके account से एक pre-authorised withdrawal है, जिसका amount कोई और decide करेगा, उनकी choice की date पर.**

Signer के लिए honest summary: एक security cheque एक live Section 138 exposure है जो उस moment switch on होता है जब आप genuinely पैसा owe करते हैं और holder leaf use करने का decide करता है. ये decorative नहीं है. Exactly इसी understanding के साथ sign करें, या एक alternative negotiate करें.

### [H2] Stop Payment वो Escape Hatch नहीं जो दिखता है

Relationship hostile होते ही tempting move है bank को call करके cheque stop करना. समझ लें ये आपको क्या दिलाता है — और क्या नहीं.

एक stop-payment instruction का मतलब है cheque "insufficient funds" की जगह "payment stopped by drawer" के साथ return होता है. पर courts ने generally एक stop-payment dishonour को वहीं same treat किया है जहाँ एक real debt exist करता है — Section 138 की machinery फिर भी engage हो सकती है, क्योंकि question ये है कि आप पैसा owe करते थे या नहीं, न कि bank ने कौन-सा return code stamp किया. एक live, admitted liability के against cheque stop करना mostly एक bounce को intent के extra evidence वाले bounce में convert करता है.

जहाँ stop payment *सही* tool है: एक cheque जो lost हो गया, एक deal जो documentation के साथ cancel हुई, एक amount जो कभी agree हुए से beyond fill किया गया — वो situations जहाँ आपका paper trail दिखाता है कि debt ही disputed या gone है. Mechanics, timelines, और charges हमारी [cheque validity और stop payment](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) guide में covered हैं. One-line rule: stop payment एक documented position protect करता है; जो आपने sign किया उसे un-sign नहीं कर सकता.

### [H2] Desk की दूसरी Side — Businesses इन्हें क्यों माँगते हैं

Balance receiver का view demand करता है, क्योंकि वो irrational नहीं है. Trust extend करते एक lender, landlord, या supplier के लिए, security cheque India का सबसे सस्ता enforcement instrument है: Section 138 की quasi-criminal process एक civil recovery suit से faster और कहीं ज़्यादा motivating है, और leaf का mere existence payment behaviour बदल देता है. Businesses माँगते हैं क्योंकि ये काम करता है.

पर अगर आप माँगने वाले business हैं, तो same discipline mirror image में apply होती है. एक undocumented security cheque — कोई agreement नहीं जो इसका number और purpose record करे, कोई cap नहीं, कोई return condition नहीं — court में weaker है और signer के साथ unfair. Contract में cheque number record करें, state करें कि ये क्या secure करता है और कब return होना चाहिए, और obligation ख़त्म होने पर actually return करें. Closed accounts के stale security cheques से भरा एक drawer leverage नहीं है; ये unmanaged liability है जिसमें अगले dispute के receiving end पर आपका नाम है.

### [H2] जब देना ही पड़े तो ख़ुद को कैसे Protect करें

कभी-कभी refuse करना realistic नहीं — loan को cheque चाहिए, flat को deposit. तब goal avoidance से damage limitation पर shift होता है:

1. **हाथ से निकलने से पहले cross करें.** दो parallel lines के बीच "A/C Payee" लिखें, "Not Negotiable" add करें. एक crossed cheque सिर्फ़ named payee के bank account में land हो सकता है — जो भी इसे end up पकड़े, counter पर encash नहीं कर सकता.
2. **जो भी deal allow करे, सब fill करें.** Payee name ख़ुद लिखें, always. अगर arrangement एक fixed figure allow करता है — एक deposit amount, एक bond value — तो amount भी लिखें. ₹50,000 का cheque एक blank से कहीं छोटा weapon है, और date लिखना किसी far-future presentation से पहले re-negotiation force करता है.
3. **Handover को paper करें.** एक written acknowledgement लें — loan या rent agreement में एक clause, या एक simple signed letter — जो cheque number record करे, ये कि वो एक named obligation के लिए **as security** held है, और वो condition जिस पर return होना चाहिए. ये single paragraph है जो "उसने मुझे एक cheque दिया" को आपके version of events में बदलता है — writing में, dispute से पहले dated.
4. **Leaf record करें.** Photograph लें, और cheque number, payee, purpose, और handover date अपने cheque register में log करें. सालों बाद जब कुछ surface हो, आप एक record से answer करना चाहेंगे, guess से नहीं.
5. **Reclaim को diarise करें.** वो date note करें जब obligation ख़त्म होती है — loan closure, tenancy exit, bond completion — और cheque recover करना deal close करने का हिस्सा treat करें, optional courtesy नहीं.

### [H2] Cheque वापस लेना — वो Step जो सब भूल जाते हैं

Loans close होते हैं, tenants move out करते हैं, employees notice serve करते हैं — और security cheque एक file में रहता है, signed और patient. Loop properly close करना:

Settlement पर physical leaf वापस माँगें, और इसका number अपने record के against check करें — एक returned cheque जो आपके logged वाले से match नहीं करता, मतलब एक अभी भी बाहर है. इसे फाड़ें और pieces रखें, या ख़ुद cancelled mark करें. अगर holder claim करे कि lost है, तो वो writing में लें अपने closure letter या NOC के साथ, फिर उस correspondence को paper trail बनाकर एक stop-payment instruction place करें — ये वो एक scenario है जहाँ stop payment unambiguous है, क्योंकि आपके documents दिखाते हैं obligation over है.

इस सबके नीचे pattern एक habit है: आपका signed एक cheque तब तक आपकी problem रहना बंद नहीं करता जब तक आप उसका account नहीं दे सकते. जो, precisely, एक register का job है.

---

> **आपका sign किया हर cheque एक register में रहना चाहिए — especially वो जो आपने security के तौर पर hand over किए.** Cheqify का cheque register हर leaf को number, payee, purpose, और status से track करता है, ताकि 2024 में landlord को दिया security cheque one search away हो — one panic away नहीं. 300+ Indian bank layouts पर print, track, और reconcile करें. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Loan Tuesday ના sanction થાય છે. Approval letter અને disbursal ની વચ્ચે ક્યાંક, officer ત્રણ cheque leaves desk ની across slide કરે છે — અહીં sign કરો, અહીં, અને અહીં. કોઈ date નહીં. કોઈ amount નહીં. કોઈ payee નહીં. "બસ security છે, sir. Standard procedure."

મોટાભાગના લોકો sign કરી દે છે. Rent deposit સાથે એક માંગતા landlord ને એ જ easy compliance મળે છે, અને credit પર નવો retailer onboard કરતા distributor ને પણ. લગભગ કોઈ એ એક question નથી પૂછતું જે matter કરે છે: *આ paper મારા હાથમાંથી નીકળ્યા પછી એની સાથે exactly શું થઈ શકે છે?*

તમારી ધારણા કરતાં વધારે. આ એ answer છે જે desk પર કોઈ નથી આપતું — security cheque legally શું છે, એ risks જે આ sign કરનાર માટે quietly create કરે છે, "આ તો ફક્ત security હતું" જેટલું sound કરે છે એના કરતાં weaker defence કેમ છે, અને એ ટૂંકી checklist જે ત્યારે protect કરે છે જ્યારે એક hand over કરવો genuinely unavoidable હોય.

### [H2] એક "Security Cheque" Actually શું છે (અને શું નહીં)

Negotiable Instruments Act માં "security cheque" phrase search કરો અને તમને કંઈ નહીં મળે. આ trade slang છે, legal category નહીં — એ cheque નું everyday નામ જે **payment ની જગ્યાએ collateral તરીકે** hand over થાય છે: કોઈ બીજાના drawer માં parked એક promise કે વસ્તુઓ ખોટી જાય તો પૈસા recoverable હશે.

Usual habitats:

- **Rent** — deposit સાથે handed over એક signed cheque, "damages ના case માં" (rent-by-cheque ની બાકીની discipline [પોતાની અલગ guide છે](https://cheqify.app/gu/blog/rent-payment-by-cheque-hra-proof))
- **Loans** — banks અને NBFCs disbursal પર signed, undated leaves collect કરે છે, [future EMIs](https://cheqify.app/gu/blog/loan-repayment-by-cheque-india) ની against held
- **Vendor અને distributor arrangements** — credit limit કે trust પર advanced stock ની against held એક cheque
- **Employment bonds** — training-cost કે notice-period clause ની against એક cheque પકડેલો employer

હવે પહેલી વસ્તુ જે law actually આમના વિશે કહે છે, અને એ reassuring નથી. Blank fields વાળો એક signed cheque void નથી — **NI Act ના Section 20** ની under આ એક *inchoate instrument* છે, અને એને hand over કરવું holder ને **એને complete કરવાની prima facie authority** આપે છે: amount લખવાની, date ની, અરે payee ની પણ. એ authority એના પર capped હોવી જોઈએ જે તમે agree કર્યું — પણ એ prove કરવાનો burden કે holder એ agreement exceed કર્યો, *તમારા* પર, signer પર, land થાય છે. Usually વર્ષો પછી. Usually memory થી. Usually એમના paperwork ની against.

આગલા signature પહેલા આને એક વાર ફરી વાંચો: blank spaces safety નથી. એ delegation છે.

### [H2] તમે Actually શું Hand Over કર્યું — Giver ના Risks

ચાર risks, pain ના ascending order માં.

**એક: amount એમનો લખવાનો છે.** એક blank-amount cheque holder ના restraint અને underlying deal થી bounded છે — આ જ order માં. Relationship sour થઈ જાય, તો amount box માં appear થતો number dispute માં એમની opening position છે, અને તમારો account venue.

**બે: date એમની choose કરવાની છે.** એક undated cheque drawer માં ક્યારેય stale નથી થતો. Three-month validity window leaf પર *લખેલી date* થી ચાલે છે — અને holder એ presentation time પર લખે છે. 2023 માં તમારો signed cheque 2026 માં dated, presented, અને dishonoured થઈ શકે છે, તમે mentally chapter close કર્યાના ઘણા સમય પછી.

**ત્રણ: loss અને plain misuse.** Holder ની file માંથી નીકળી ગયેલો એક signed, uncrossed blank cheque bearer paper ની dangerously નજીક છે — જે પણ એને શોધે, એની પાસે તમારા signature સાથે એક completable instrument છે. તમે ફક્ત એ person પર trust નથી કરી રહ્યા જેને આપ્યો, પણ એમના drawer, એમની office moves, અને એમની record-keeping પર પણ.

**ચાર: bounce.** જો cheque eventually present થાય છે અને જે પણ fill થયું એ તમારો account cover નથી કરી શકતો, તો તમે એક awkward conversation નથી જોઈ રહ્યા. તમે એક possible criminal complaint જોઈ રહ્યા છો — જે પોતાની અલગ section deserve કરે છે.

### [H2] "આ તો ફક્ત Security હતું" — Section 138 તો પણ તમારા સુધી કેમ પહોંચી શકે છે

Instinct આમ ચાલે છે: આ payment cheque નહોતો, collateral હતો, તો cheque-bounce law apply ન થવો જોઈએ. Case law ઓછો comforting છે. **Courts એ generally માન્યું છે** કે cheque પર label એના કરતાં ઓછું matter કરે છે જેટલી present થવાના દિવસે debt ની state: જો presentation પર એક legally enforceable debt કે liability exist કરે છે — unpaid EMIs, unpaid rent, એક unrecovered advance — તો એક so-called security cheque નું dishonour કોઈ પણ ordinary bounce ની જેમ NI Act નું **Section 138** attract કરી શકે છે. "આ તો ફક્ત એક security cheque હતું" defence narrow fact patterns માં succeed થઈ છે — હજુ કોઈ debt due નહીં, agreement થી beyond fill થયેલો amount — અને ઘણી વધારેમાં fail. (Case-law positions shift થાય છે; આ paragraph ને courts ની general direction માનો, તમારા specific facts પર advice નો substitute નહીં.)

> **એક signed blank cheque કોઈ promise નથી — આ તમારા account માંથી એક pre-authorised withdrawal છે, જેનો amount કોઈ બીજું decide કરશે, એમની choice ની date પર.**

Signer માટે honest summary: એક security cheque એક live Section 138 exposure છે જે એ moment switch on થાય છે જ્યારે તમે genuinely પૈસા owe કરો છો અને holder leaf use કરવાનું decide કરે છે. આ decorative નથી. Exactly આ જ understanding સાથે sign કરો, અથવા એક alternative negotiate કરો.

### [H2] Stop Payment એ Escape Hatch નથી જે દેખાય છે

Relationship hostile થતાં જ tempting move છે bank ને call કરીને cheque stop કરવો. સમજી લો આ તમને શું અપાવે છે — અને શું નહીં.

એક stop-payment instruction નો મતલબ છે cheque "insufficient funds" ની જગ્યાએ "payment stopped by drawer" સાથે return થાય છે. પણ courts એ generally એક stop-payment dishonour ને ત્યાં same treat કર્યો છે જ્યાં એક real debt exist કરે છે — Section 138 ની machinery તો પણ engage થઈ શકે છે, કારણ કે question એ છે કે તમે પૈસા owe કરતા હતા કે નહીં, નહીં કે bank એ કયો return code stamp કર્યો. એક live, admitted liability ની against cheque stop કરવો mostly એક bounce ને intent ના extra evidence વાળા bounce માં convert કરે છે.

જ્યાં stop payment *સાચું* tool છે: એક cheque જે lost થઈ ગયો, એક deal જે documentation સાથે cancel થઈ, એક amount જે ક્યારેય agree થયેલાથી beyond fill થયો — એ situations જ્યાં તમારો paper trail બતાવે છે કે debt જ disputed કે gone છે. Mechanics, timelines, અને charges અમારી [cheque validity અને stop payment](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) guide માં covered છે. One-line rule: stop payment એક documented position protect કરે છે; જે તમે sign કર્યું એને un-sign નથી કરી શકતું.

### [H2] Desk ની બીજી Side — Businesses આમને કેમ માંગે છે

Balance receiver નો view demand કરે છે, કારણ કે એ irrational નથી. Trust extend કરતા એક lender, landlord, કે supplier માટે, security cheque India નું સૌથી સસ્તું enforcement instrument છે: Section 138 ની quasi-criminal process એક civil recovery suit થી faster અને ક્યાંય વધારે motivating છે, અને leaf નું mere existence payment behaviour બદલી નાખે છે. Businesses માંગે છે કારણ કે આ કામ કરે છે.

પણ જો તમે માંગનાર business છો, તો same discipline mirror image માં apply થાય છે. એક undocumented security cheque — કોઈ agreement નહીં જે એનો number અને purpose record કરે, કોઈ cap નહીં, કોઈ return condition નહીં — court માં weaker છે અને signer સાથે unfair. Contract માં cheque number record કરો, state કરો કે આ શું secure કરે છે અને ક્યારે return થવો જોઈએ, અને obligation પૂરી થતાં actually return કરો. Closed accounts ના stale security cheques થી ભરેલો એક drawer leverage નથી; આ unmanaged liability છે જેમાં આગલા dispute ના receiving end પર તમારું નામ છે.

### [H2] જ્યારે આપવો જ પડે ત્યારે પોતાને કેવી રીતે Protect કરવું

ક્યારેક refuse કરવું realistic નથી — loan ને cheque જોઈએ, flat ને deposit. ત્યારે goal avoidance થી damage limitation પર shift થાય છે:

1. **હાથમાંથી નીકળે એ પહેલા cross કરો.** બે parallel lines ની વચ્ચે "A/C Payee" લખો, "Not Negotiable" add કરો. એક crossed cheque ફક્ત named payee ના bank account માં land થઈ શકે છે — જે પણ એને end up પકડે, counter પર encash નથી કરી શકતું.
2. **જે પણ deal allow કરે, બધું fill કરો.** Payee name જાતે લખો, always. જો arrangement એક fixed figure allow કરે છે — એક deposit amount, એક bond value — તો amount પણ લખો. ₹50,000 નો cheque એક blank કરતાં ક્યાંય નાનું weapon છે, અને date લખવી કોઈ far-future presentation પહેલા re-negotiation force કરે છે.
3. **Handover ને paper કરો.** એક written acknowledgement લો — loan કે rent agreement માં એક clause, કે એક simple signed letter — જે cheque number record કરે, એ કે એ એક named obligation માટે **as security** held છે, અને એ condition જેના પર return થવો જોઈએ. આ single paragraph છે જે "એણે મને એક cheque આપ્યો" ને તમારા version of events માં બદલે છે — writing માં, dispute પહેલા dated.
4. **Leaf record કરો.** Photograph લો, અને cheque number, payee, purpose, અને handover date તમારા cheque register માં log કરો. વર્ષો પછી જ્યારે કંઈ surface થાય, તમે એક record થી answer કરવા માંગશો, guess થી નહીં.
5. **Reclaim ને diarise કરો.** એ date note કરો જ્યારે obligation પૂરી થાય છે — loan closure, tenancy exit, bond completion — અને cheque recover કરવો deal close કરવાનો ભાગ treat કરો, optional courtesy નહીં.

### [H2] Cheque પાછો લેવો — એ Step જે બધા ભૂલી જાય છે

Loans close થાય છે, tenants move out કરે છે, employees notice serve કરે છે — અને security cheque એક file માં રહે છે, signed અને patient. Loop properly close કરવો:

Settlement પર physical leaf પાછો માંગો, અને એનો number તમારા record ની against check કરો — એક returned cheque જે તમારા logged વાળા સાથે match નથી કરતો, મતલબ એક હજુ પણ બહાર છે. એને ફાડો અને pieces રાખો, અથવા જાતે cancelled mark કરો. જો holder claim કરે કે lost છે, તો એ writing માં લો તમારા closure letter કે NOC સાથે, પછી એ correspondence ને paper trail બનાવીને એક stop-payment instruction place કરો — આ એ એક scenario છે જ્યાં stop payment unambiguous છે, કારણ કે તમારા documents બતાવે છે obligation over છે.

આ બધાની નીચે pattern એક habit છે: તમારો signed એક cheque ત્યાં સુધી તમારી problem રહેવાનું બંધ નથી કરતો જ્યાં સુધી તમે એનો account નથી આપી શકતા. જે, precisely, એક register નું job છે.

---

> **તમે sign કરેલો દરેક cheque એક register માં રહેવો જોઈએ — especially એ જે તમે security તરીકે hand over કર્યા.** Cheqify નું cheque register દરેક leaf ને number, payee, purpose, અને status થી track કરે છે, જેથી 2024 માં landlord ને આપેલો security cheque one search away હોય — one panic away નહીં. 300+ Indian bank layouts પર print, track, અને reconcile કરો. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (all LIVE — safe):**
- Post #34 (`rent-payment-by-cheque-hra-proof`) — rent-deposit security cheque scenario, first section.
- Post #23 (`loan-repayment-by-cheque-india`) — loan/EMI security cheque scenario, first section.
- Post #12 (`cheque-validity-period-stop-payment-india`) — stop-payment mechanics section.

**Deliberately NOT linked (plain-text mentions only):** Section 138 (post #11), crossing types (post #27), cheque register/lifecycle (post #13) — brief allowed per the live-targets rule for this draft; add links only if the rule changes.

**Bonus internal-link work (after publish):**
- Edit post #23 (`loan-repayment-by-cheque-india`, all 3 locales) — its security-cheques-at-disbursal passage is the strongest reciprocal anchor to this post.
- Edit post #34 (`rent-payment-by-cheque-hra-proof`, all 3 locales) — add a deposit-security-cheque link here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The desk-side opening, the "blank spaces are delegation" turn, and the giver/receiver balance carry the voice.
- **Fact-check-lite (body is already hedged — verify direction holds):**
  1. **Section 20 NI Act (inchoate instruments)** — holder's prima facie authority to complete a signed blank cheque; stable statute text, verify wording.
  2. **Security cheque + Section 138** — body deliberately says "courts have generally held" and adds a shifting-case-law disclaimer; confirm the general direction (debt-at-presentation test) still holds at publish time.
  3. **Stop payment + Section 138** — "payment stopped by drawer" dishonour treated as within 138 where debt exists; also hedged as "courts have generally"; verify direction.
  4. **3-month validity from date written on the leaf** — RBI reduction to 3 months (2012); stable, matches post #12.
- **Internal link order:** #12, #23, #34 all live — safe.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,860 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Slug check after publish:** sanity-check the slug field for pasted-tag corruption per `[[project_sanity_slug_corruption_gotcha]]`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #23 and #34 (strongest reciprocals).
5. IndexNow auto-pings on publish.
