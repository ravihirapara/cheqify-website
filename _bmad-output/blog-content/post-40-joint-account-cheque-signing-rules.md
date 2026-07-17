# Blog Post #40 — Joint Account Cheques in India — Who Must Sign? Either or Survivor vs Jointly (2026)

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
- `> **Two partners, twenty cheques, one sitting...** / **दो partners, बीस cheques, एक sitting...** / **બે partners, વીસ cheques, એક sitting...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **The passbook records who owns the money. The mandate records who can move it...** / **Passbook record करती है कि पैसा किसका है...** / **Passbook record કરે છે કે પૈસા કોના છે...**` (pull quote in each body) → **Quote**

**Apply as Table (Sanity Table tool — do NOT paste as plain text):**
- The "Four Mandates, Side by Side" comparison table in each body → insert with the **Table** block (`@sanity/table`), 3 columns × 5 rows (header row + 4 mandates), in all three locales.

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"Either or survivor meaning" and "joint account rules India" are evergreen, high-volume searches that almost no result answers from the cheque-writer's side: the operating mandate is the single line that decides whose signature a joint-account cheque needs, and a missing signature is a guaranteed return regardless of funds. The topic serves two audiences at once — households choosing between Either or Survivor and Former or Survivor, and business partners who deliberately run "Jointly" for dual control (direct Cheqify fit: batch-printing a complete, legible cheque stack for a two-signature sitting, plus register tracking of half-signed leaves). Cluster fit: #18 (cheque types), #12 (validity/re-presentation of a returned leaf), #25 (cheque book requests on jointly operated accounts).

---

## Sanity Fields

- **Slug:** `joint-account-cheque-signing-rules`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** NO
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `joint account cheque signing rules`
- **Secondary keywords:** either or survivor meaning, former or survivor account, jointly operated account cheque, who signs cheque joint account, joint account survivorship vs nomination, change mode of operation bank account
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/joint-account-cheque-signing-rules`
  - HI: `https://cheqify.app/hi/blog/joint-account-cheque-signing-rules`
  - GU: `https://cheqify.app/gu/blog/joint-account-cheque-signing-rules`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `joint-account-cheque-signing-rules-cover.webp`
- **Subject:** One printed cheque on a desk with TWO signature spaces marked at the bottom-right — one signed, one conspicuously empty with a hovering second pen. Behind it, a partly visible account-opening form with a "Mode of Operation" section and four checkboxes (Either or Survivor / Former or Survivor / Jointly / Jointly or Survivor), the "Jointly" box ticked. Two pens crossed in the foreground. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Joint account cheque signing rules in India — a cheque awaiting its second signature next to an account form with the Jointly mandate ticked.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Joint Account Cheques in India — Who Must Sign? Either or Survivor vs Jointly (2026)
- **HI:** India में Joint Account Cheques — Sign कौन करे? Either or Survivor vs Jointly (2026)
- **GU:** India માં Joint Account Cheques — Sign કોણ કરે? Either or Survivor vs Jointly (2026)

---

## Descriptions

- **EN:** A joint account holds one balance and several names, but the cheque book obeys neither — it obeys the operating mandate ticked at account opening. Here's what Either or Survivor, Former or Survivor, Jointly, and Jointly or Survivor each mean for the cheque you're about to sign: who must sign, what happens when a signature is missing, survivorship vs nomination when a holder dies, why changing the mandate needs every holder's consent, and how business partners run "Jointly" without the friction.
- **HI:** एक joint account में एक balance और कई names होते हैं, पर cheque book दोनों में से किसी को obey नहीं करती — वो account opening पर ticked operating mandate को obey करती है. यहाँ है कि Either or Survivor, Former or Survivor, Jointly, और Jointly or Survivor उस cheque के लिए क्या mean करते हैं जो आप sign करने वाले हैं: sign कौन करे, एक signature missing होने पर क्या होता है, holder की death पर survivorship vs nomination, mandate बदलने के लिए हर holder की consent क्यों चाहिए, और business partners "Jointly" बिना friction के कैसे चलाते हैं.
- **GU:** એક joint account માં એક balance અને ઘણા names હોય છે, પણ cheque book બેમાંથી કોઈને obey નથી કરતી — એ account opening પર ticked operating mandate ને obey કરે છે. અહીં છે કે Either or Survivor, Former or Survivor, Jointly, અને Jointly or Survivor એ cheque માટે શું mean કરે છે જે તમે sign કરવાના છો: sign કોણ કરે, એક signature missing હોય ત્યારે શું થાય છે, holder ની death પર survivorship vs nomination, mandate બદલવા માટે દરેક holder ની consent કેમ જોઈએ, અને business partners "Jointly" friction વગર કેવી રીતે ચલાવે છે.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

Two partners open a current account for their firm. Same afternoon, same branch, same specimen card. Eight months later one of them signs a ₹1,40,000 vendor cheque alone, couriers it, and moves on — until the vendor calls. The bank has returned the cheque. The memo doesn't say insufficient funds. It says the account **requires all drawers' signatures**.

Nothing on that cheque was wrong. The date was current, the balance was healthy, the signature matched the specimen stroke for stroke. What failed was a single line both partners had ticked on the account-opening form and never read again: **mode of operation — Jointly.**

Every joint account in India carries a line like that. It's called the **operating mandate**, and it — not the names printed on the passbook, not who deposited the money, not who keeps the cheque book in their drawer — decides whose signature moves the money. This is the guide to the four mandates you'll actually meet, what each one means for the cheque you're about to sign, and what happens when the pen count comes up short.

### [H2] The Mandate Decides, Not the Names

A joint account is one balance with several owners. That part everyone understands. Less understood: ownership and operation are two separate columns in the bank's records. The names establish whose money it is. The mandate — the "mode of operation" box ticked at account opening — establishes who may instruct the bank to pay it out.

When a cheque is presented, the bank runs one check before anything else: does the signature set on this leaf satisfy the mandate on file? One signature where the mandate says *any one* — paid. One signature where the mandate says *all* — returned. It doesn't matter that the lone signer owns half the balance, and it doesn't matter which of [the many cheque types](https://cheqify.app/en/blog/cheque-types-india) the leaf happens to be — bearer, order, account-payee crossed — the mandate applies to every leaf identically.

> **The passbook records who owns the money. The mandate records who can move it. A joint account is not joint permission — it is exactly the permission you ticked on the opening form, enforced one signature at a time.**

Four mandates cover nearly every joint account in the country. Here they are, in rising order of control.

### [H2] Either or Survivor — Any One Pen Works

The default choice for couples and family accounts, and the one your bank will quietly assume if you shrug at the form. **Any one holder can sign any cheque alone** — withdraw, issue instructions, stop a payment. The account behaves, for each holder, almost like a personal account that happens to have a co-owner.

The "survivor" half answers the harder question: if one holder dies, the surviving holder simply continues operating the account, and the bank pays the balance to them without waiting for succession paperwork. Convenience is the whole design — and so is the risk. Either holder can empty the account with a single lawful signature, and the bank owes the other holder no warning. Choose it for trust, not for structure.

### [H2] Former or Survivor — One Named Pen, Fixed

Here the *order* of names matters. Only the **first-named holder** (the "former") can operate the account — sign cheques, withdraw, instruct — while they are alive. The second holder is, functionally, a passenger: their name is on the account, their signature is on the specimen card, and none of it moves money until the former holder dies, at which point the survivor steps in with full operating rights.

You'll meet this mandate on pensioner and senior-citizen accounts — a parent keeps sole control during their lifetime while ensuring the account passes to the child without probate friction. If you're the second name on a Former or Survivor account, understand it plainly: a cheque bearing your signature alone will come back, every time, whatever the amount, whatever the emergency.

### [H2] Jointly — Every Cheque Carries Every Signature

The control mandate. **All holders must sign every cheque**, every withdrawal form, every instruction. One missing signature and the instrument is incomplete — the bank returns it unpaid regardless of how much money sits in the account.

This is the mandate business partners choose on purpose. Neither partner can move firm money unilaterally; every outgoing rupee has passed under both pairs of eyes before it leaves. It's a real safeguard, and a real commitment: cheque signing becomes a two-person event, stop-payment instructions need everyone, and even [requesting a fresh cheque book](https://cheqify.app/en/blog/how-to-request-cheque-book-online-india) typically needs all holders' authorisation rather than one tap in an app.

The sting is at death. Plain "Jointly" has no survivorship clause — if a holder dies, the mandate can no longer be satisfied (a required signatory no longer exists), so the bank freezes operations until legal formalities settle who now stands in. Which is why banks offer the fourth option.

### [H2] Jointly or Survivor — Control, With an Exit

While all holders are alive, this behaves exactly like Jointly: every cheque needs every signature. But on the death of a holder, the survivorship clause activates — the surviving holders operate the account (jointly among themselves, if more than one remains) and receive the balance without the account seizing up. For partners who want dual control *and* continuity, this is usually the better tick than plain Jointly.

### [H2] The Four Mandates, Side by Side

| Mandate | Who signs a cheque | On the death of a holder |
|---|---|---|
| Either or Survivor | Any one holder, alone | Survivor operates and receives the balance |
| Former or Survivor | Only the first-named holder | Survivor steps in with full operating rights |
| Jointly | All holders, every cheque | Operations freeze pending legal settlement |
| Jointly or Survivor | All holders, every cheque | Survivors continue operating, jointly |

(Banks also offer "Latter or Survivor" — the mirror image, where the second-named holder operates — and custom mandates like "any two of three" for firms with several signatories. The logic never changes: the mandate names the pens, and every pen named must appear.)

### [H2] When a Signature Is Missing

A cheque signed short of its mandate is returned unpaid — the memo typically reads "requires all drawers' signatures" or "drawer's signature required". Three practical notes for the moment it happens:

- **The cheque isn't dead.** Get the missing holder's signature onto the same leaf — or write a fresh one — and re-present it. A returned cheque can go back through clearing [within its 3-month validity](https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india); the return costs you days and a bank charge, not the payment itself.
- **It reads badly anyway.** To your payee, a returned cheque is a returned cheque — the memo's fine print rarely survives the phone call. A vendor who has just heard "your payment bounced" is not soothed by "well, technically only half of it bounced".
- **It's preventable at your desk, not the bank's.** The failure happened when the cheque left your office with one signature. A simple issuing habit — no leaf leaves until the register shows the full signature set — deletes the entire category.

### [H2] Death, Survivorship, and Where Nomination Fits

Two different instruments answer "what happens to the money when a holder dies", and they are routinely confused.

**Survivorship** is built into the mandate itself. In Either or Survivor, Former or Survivor, and Jointly or Survivor accounts, the bank pays the surviving holder(s) and lets them operate — a banking arrangement, settled at the counter with a death certificate.

**Nomination** is a separate facility. The nominee receives the balance from the bank only *after all holders are gone* — and receives it as a trustee for the legal heirs, not automatically as owner. Nomination doesn't override a will, and it doesn't compete with survivorship; it queues behind it. A joint account with a survivorship clause plus a nomination covers the whole sequence: co-holder first, nominee after, succession law last.

The one arrangement with no cushion is plain **Jointly** with no survivorship — the death of any holder halts the account until the legal heirs establish their claim. If your firm's account carries that mandate today, this paragraph is your reminder to visit the branch.

### [H2] Changing the Mandate — All Pens Must Agree

No holder can change the mode of operation alone — not even to loosen it, not even the first-named holder. Banks require a **written request signed by all joint holders**, usually on a fresh mandate form, sometimes with fresh specimen signatures. The same all-hands rule applies to adding or removing a holder.

The practical advice hiding inside that rule: change the mandate *before* you need to. If one partner is travelling for a quarter, a temporarily amended mandate — or a properly executed power of attorney — is arranged in one branch visit. The alternative is a drawer of unpayable cheques, discovered one embarrassing return at a time.

### [H2] Running a Jointly Operated Account Without the Friction

For business partners, "Jointly" trades speed for control — but most of the lost speed is bad workflow, not the mandate. The clean pattern:

- **Batch the signing.** Don't chase your co-signer leaf by leaf. Prepare the week's cheques in one run — payee names exact, amounts in words done, dates uniform — and put the whole stack in front of both pens in one sitting.
- **Register before anyone signs.** A cheque register with a signature-status column tells you instantly which leaves are half-signed — precisely the population that causes mandate returns.
- **Treat a half-signed cheque as unissued.** It doesn't leave the office, it isn't couriered "to save time", it isn't handed over on trust with a promise of the second signature later. No full signature set, no handover.

A printed cheque earns its keep here more than anywhere: when the leaf reaches the second signer complete — payee, amount, words, date all filled and legible — the second signature takes four seconds. When it reaches them half-written, it takes a conversation.

---

> **Two partners, twenty cheques, one sitting.** Cheqify prints your joint-account cheques on 300+ Indian bank layouts with amounts in words auto-generated, so every leaf reaches the second signer complete — and its register shows at a glance which cheques still wait for a signature before they can leave the office. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** Who must sign a cheque on a joint account?
   **A:** Whoever the operating mandate names — not simply any account holder. Under "Either or Survivor", any one holder signs alone; under "Former or Survivor", only the first-named holder can sign; under "Jointly" and "Jointly or Survivor", every holder must sign every cheque. The bank checks the signature set against the mandate on file before paying, and a cheque signed short of the mandate is returned unpaid regardless of the balance.

2. **Q:** What does Either or Survivor mean in a bank account?
   **A:** It's the most common joint-account mandate: any one holder can operate the account independently — sign cheques, withdraw, give instructions — without the other's involvement. The "survivor" part means that if one holder dies, the surviving holder continues to operate the account and receives the balance without succession paperwork. Its convenience is also its risk: either holder can lawfully move the entire balance alone.

3. **Q:** What is the difference between Either or Survivor and Former or Survivor?
   **A:** Under Either or Survivor, any holder operates the account at any time. Under Former or Survivor, only the first-named holder can operate while alive — the second holder cannot sign cheques or withdraw at all, and gains operating rights only after the first holder's death. Former or Survivor is common on pensioner and senior-citizen accounts, where a parent keeps sole lifetime control while ensuring smooth transfer afterwards.

4. **Q:** What happens if a joint account cheque is missing one signature?
   **A:** On a Jointly or Jointly-or-Survivor account, the bank returns it unpaid — typically with a memo like "requires all drawers' signatures" — even if the account has ample funds. The cheque isn't dead: obtain the missing holder's signature (or write a fresh cheque) and re-present it within the 3-month validity period. You lose a few days and a return charge, plus some face with the payee.

5. **Q:** Can the mode of operation on a joint account be changed?
   **A:** Yes, but only with the consent of all holders. Banks require a written request signed by every joint holder, usually on a fresh mandate form, sometimes with new specimen signatures — no single holder can change it unilaterally, not even the first-named one. The same all-holders rule applies to adding or removing an account holder.

6. **Q:** What happens to a joint account when one holder dies — and does nomination matter?
   **A:** If the mandate includes a survivorship clause (Either/Former/Jointly *or Survivor*), the surviving holders operate the account and receive the balance against a death certificate. Plain "Jointly" has no survivorship, so operations freeze until legal formalities settle. Nomination is separate and queues behind survivorship: the nominee receives the balance only after all holders are gone, and holds it as trustee for the legal heirs — nomination never overrides a will.

7. **Q:** Which operating mandate should business partners choose?
   **A:** Most partners deliberately choose "Jointly or Survivor": every cheque needs every partner's signature (so no unilateral movement of firm money), while the survivorship clause keeps the account operable if a partner dies. Plain "Jointly" gives the same control but freezes on a death. The friction of dual signing is best managed by workflow — batch-print the cheques complete, sign the stack in one sitting, and track half-signed leaves in a register.

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

दो partners अपनी firm के लिए एक current account खोलते हैं. Same afternoon, same branch, same specimen card. आठ महीने बाद उनमें से एक अकेले एक ₹1,40,000 का vendor cheque sign करता है, courier करता है, और आगे बढ़ जाता है — जब तक vendor call नहीं करता. Bank ने cheque return कर दिया है. Memo insufficient funds नहीं कहता. वो कहता है account को **all drawers' signatures चाहिए**.

उस cheque पर कुछ भी wrong नहीं था. Date current थी, balance healthy था, signature specimen से stroke-for-stroke match करता था. जो fail हुआ वो एक single line थी जो दोनों partners ने account-opening form पर tick की थी और फिर कभी नहीं पढ़ी: **mode of operation — Jointly.**

India का हर joint account ऐसी एक line carry करता है. इसे **operating mandate** कहते हैं, और यही — passbook पर printed names नहीं, पैसा किसने deposit किया वो नहीं, cheque book किसके drawer में है वो नहीं — decide करता है कि किसका signature पैसा move करता है. ये उन चार mandates की guide है जो आप actually मिलेंगे, हर एक उस cheque के लिए क्या mean करता है जो आप sign करने वाले हैं, और जब pen count कम पड़ जाए तो क्या होता है.

### [H2] Mandate Decide करता है, Names नहीं

एक joint account कई owners के साथ एक balance है. वो part हर कोई समझता है. जो कम समझा जाता है: ownership और operation bank के records में दो अलग columns हैं. Names establish करते हैं कि पैसा किसका है. Mandate — account opening पर ticked "mode of operation" box — establish करता है कि bank को pay करने की instruction कौन दे सकता है.

जब एक cheque present होता है, bank बाकी सब से पहले एक check चलाता है: क्या इस leaf का signature set file पर मौजूद mandate को satisfy करता है? एक signature जहाँ mandate *any one* कहता है — paid. एक signature जहाँ mandate *all* कहता है — returned. इससे फ़र्क़ नहीं पड़ता कि अकेला signer आधे balance का owner है, और इससे भी नहीं कि leaf [cheque की कई types](https://cheqify.app/hi/blog/cheque-types-india) में से कौन सी है — bearer, order, account-payee crossed — mandate हर leaf पर identically apply होता है.

> **Passbook record करती है कि पैसा किसका है. Mandate record करता है कि उसे move कौन कर सकता है. एक joint account joint permission नहीं है — ये exactly वही permission है जो आपने opening form पर tick की थी, एक-एक signature पर enforce होती हुई.**

चार mandates देश के लगभग हर joint account को cover करते हैं. यहाँ हैं वो, control के rising order में.

### [H2] Either or Survivor — कोई भी एक Pen काम करता है

Couples और family accounts के लिए default choice, और वही जो form पर shrug करने पर आपका bank quietly assume कर लेगा. **कोई भी एक holder अकेले कोई भी cheque sign कर सकता है** — withdraw करना, instructions देना, payment stop करना. हर holder के लिए account लगभग एक personal account की तरह behave करता है जिसका बस एक co-owner भी है.

"Survivor" वाला आधा हिस्सा harder question का answer देता है: अगर एक holder की death हो जाए, surviving holder simply account operate करता रहता है, और bank succession paperwork का wait किए बिना balance उन्हें pay करता है. Convenience पूरा design है — और risk भी. कोई भी holder एक single lawful signature से account खाली कर सकता है, और bank दूसरे holder को कोई warning owe नहीं करता. इसे trust के लिए चुनें, structure के लिए नहीं.

### [H2] Former or Survivor — एक Named Pen, Fixed

यहाँ names का *order* matter करता है. सिर्फ़ **first-named holder** ("former") account operate कर सकता है — cheques sign करना, withdraw, instruct — जब तक वो ज़िंदा हैं. दूसरा holder functionally एक passenger है: उनका name account पर है, उनका signature specimen card पर है, और इनमें से कुछ भी पैसा move नहीं करता जब तक former holder की death नहीं होती, जिसके बाद survivor full operating rights के साथ step in करता है.

ये mandate आपको pensioner और senior-citizen accounts पर मिलेगा — एक parent अपने lifetime में sole control रखता है और ensure करता है कि account probate friction के बिना child को pass हो. अगर आप एक Former or Survivor account पर दूसरा name हैं, इसे plainly समझें: सिर्फ़ आपके signature वाला cheque हर बार वापस आएगा, amount चाहे जो हो, emergency चाहे जो हो.

### [H2] Jointly — हर Cheque पर हर Signature

Control mandate. **सभी holders को हर cheque sign करना होगा**, हर withdrawal form, हर instruction. एक missing signature और instrument incomplete है — bank उसे unpaid return करता है, account में चाहे कितना भी पैसा हो.

यही वो mandate है जो business partners जान-बूझकर चुनते हैं. कोई भी partner firm का पैसा unilaterally move नहीं कर सकता; हर outgoing rupee निकलने से पहले दोनों जोड़ी आँखों के नीचे से गुज़रा है. ये एक real safeguard है, और एक real commitment भी: cheque signing एक two-person event बन जाता है, stop-payment instructions को सबकी ज़रूरत होती है, और [एक fresh cheque book request करने](https://cheqify.app/hi/blog/how-to-request-cheque-book-online-india) को भी typically app में एक tap की बजाय सभी holders का authorisation चाहिए.

Sting death पर है. Plain "Jointly" में कोई survivorship clause नहीं — अगर एक holder की death होती है, mandate satisfy ही नहीं हो सकता (एक required signatory अब exist नहीं करता), तो bank operations freeze कर देता है जब तक legal formalities settle न करें कि अब कौन stand in करता है. इसीलिए banks चौथा option offer करते हैं.

### [H2] Jointly or Survivor — Control, एक Exit के साथ

जब तक सभी holders ज़िंदा हैं, ये exactly Jointly की तरह behave करता है: हर cheque को हर signature चाहिए. पर एक holder की death पर survivorship clause activate होता है — surviving holders account operate करते हैं (आपस में jointly, अगर एक से ज़्यादा बचें) और balance receive करते हैं, बिना account के seize हुए. जो partners dual control *और* continuity दोनों चाहते हैं, उनके लिए plain Jointly से usually यही better tick है.

### [H2] चारों Mandates, Side by Side

| Mandate | Cheque कौन sign करता है | एक holder की death पर |
|---|---|---|
| Either or Survivor | कोई भी एक holder, अकेले | Survivor operate करता है और balance receive करता है |
| Former or Survivor | सिर्फ़ first-named holder | Survivor full operating rights के साथ step in करता है |
| Jointly | सभी holders, हर cheque | Legal settlement pending, operations freeze |
| Jointly or Survivor | सभी holders, हर cheque | Survivors jointly operate करते रहते हैं |

(Banks "Latter or Survivor" भी offer करते हैं — mirror image, जहाँ second-named holder operate करता है — और custom mandates जैसे "any two of three" कई signatories वाली firms के लिए. Logic कभी नहीं बदलता: mandate pens को name करता है, और हर named pen appear होना चाहिए.)

### [H2] जब एक Signature Missing हो

Mandate से कम signed एक cheque unpaid return होता है — memo typically "requires all drawers' signatures" या "drawer's signature required" पढ़ता है. उस moment के लिए तीन practical notes:

- **Cheque मरा नहीं है.** Missing holder का signature उसी leaf पर लें — या एक fresh cheque लिखें — और re-present करें. एक returned cheque [अपनी 3-month validity के अंदर](https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india) फिर से clearing में जा सकता है; return आपको कुछ दिन और एक bank charge cost करता है, payment ख़ुद नहीं.
- **वैसे भी ये बुरा दिखता है.** आपके payee के लिए, एक returned cheque एक returned cheque है — memo का fine print phone call तक rarely पहुँचता है. जिस vendor ने अभी सुना "आपकी payment bounce हो गई", उसे "technically सिर्फ़ आधी bounce हुई" से तसल्ली नहीं मिलती.
- **ये आपकी desk पर preventable है, bank की नहीं.** Failure तब हुई जब cheque एक signature के साथ आपके office से निकला. एक simple issuing habit — जब तक register full signature set न दिखाए, कोई leaf बाहर नहीं जाता — पूरी category delete कर देती है.

### [H2] Death, Survivorship, और Nomination कहाँ Fit होता है

"Holder की death पर पैसे का क्या होता है" — इसका answer दो अलग instruments देते हैं, और वो routinely confuse होते हैं.

**Survivorship** ख़ुद mandate में built है. Either or Survivor, Former or Survivor, और Jointly or Survivor accounts में bank surviving holder(s) को pay करता है और उन्हें operate करने देता है — एक banking arrangement, death certificate के साथ counter पर settled.

**Nomination** एक अलग facility है. Nominee को bank से balance तभी मिलता है *जब सभी holders जा चुके हों* — और वो उसे legal heirs के trustee के तौर पर receive करता है, automatically owner के तौर पर नहीं. Nomination किसी will को override नहीं करता, और वो survivorship से compete नहीं करता; वो उसके पीछे queue करता है. Survivorship clause plus nomination वाला एक joint account पूरा sequence cover करता है: पहले co-holder, बाद में nominee, आख़िर में succession law.

बिना cushion वाला इकलौता arrangement plain **Jointly** है, बिना survivorship के — किसी भी holder की death account को रोक देती है जब तक legal heirs अपना claim establish न करें. अगर आपकी firm का account आज वो mandate carry करता है, ये paragraph branch जाने का आपका reminder है.

### [H2] Mandate बदलना — सभी Pens को Agree करना होगा

कोई भी holder अकेले mode of operation नहीं बदल सकता — loosen करने के लिए भी नहीं, first-named holder भी नहीं. Banks को **सभी joint holders का signed written request** चाहिए, usually एक fresh mandate form पर, कभी-कभी fresh specimen signatures के साथ. यही all-hands rule holder add या remove करने पर भी apply होता है.

उस rule के अंदर छिपी practical advice: mandate *ज़रूरत पड़ने से पहले* बदलें. अगर एक partner एक quarter के लिए travel कर रहा है, एक temporarily amended mandate — या एक properly executed power of attorney — एक branch visit में arrange हो जाता है. Alternative है unpayable cheques का एक drawer, एक-एक embarrassing return से discover होता हुआ.

### [H2] एक Jointly Operated Account बिना Friction के चलाना

Business partners के लिए "Jointly" speed को control से trade करता है — पर खोई हुई speed का ज़्यादातर हिस्सा bad workflow है, mandate नहीं. Clean pattern:

- **Signing को batch करें.** अपने co-signer को leaf by leaf मत chase करें. हफ़्ते के cheques एक run में prepare करें — payee names exact, amounts in words done, dates uniform — और पूरा stack दोनों pens के सामने एक sitting में रखें.
- **किसी के sign करने से पहले register करें.** Signature-status column वाला एक cheque register आपको instantly बताता है कि कौन सी leaves half-signed हैं — exactly वही population जो mandate returns cause करती है.
- **Half-signed cheque को unissued treat करें.** वो office से नहीं निकलता, "time बचाने के लिए" courier नहीं होता, दूसरे signature के promise पर trust में hand over नहीं होता. Full signature set नहीं, तो handover नहीं.

एक printed cheque यहाँ कहीं और से ज़्यादा अपनी जगह कमाता है: जब leaf दूसरे signer तक complete पहुँचती है — payee, amount, words, date सब filled और legible — दूसरा signature चार seconds लेता है. जब half-written पहुँचती है, वो एक conversation लेता है.

---

> **दो partners, बीस cheques, एक sitting.** Cheqify आपके joint-account cheques 300+ Indian bank layouts पर print करता है auto-generated amounts in words के साथ, ताकि हर leaf दूसरे signer तक complete पहुँचे — और इसका register एक glance में दिखाता है कि कौन से cheques office से निकलने से पहले अभी भी एक signature का wait कर रहे हैं. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

બે partners પોતાની firm માટે એક current account ખોલે છે. Same afternoon, same branch, same specimen card. આઠ મહિના પછી એમાંથી એક એકલો એક ₹1,40,000 નો vendor cheque sign કરે છે, courier કરે છે, અને આગળ વધી જાય છે — જ્યાં સુધી vendor call નથી કરતો. Bank એ cheque return કરી દીધો છે. Memo insufficient funds નથી કહેતો. એ કહે છે account ને **all drawers' signatures જોઈએ**.

એ cheque પર કંઈ પણ wrong નહોતું. Date current હતી, balance healthy હતો, signature specimen સાથે stroke-for-stroke match કરતું હતું. જે fail થયું એ એક single line હતી જે બંને partners એ account-opening form પર tick કરી હતી અને પછી ક્યારેય નથી વાંચી: **mode of operation — Jointly.**

India નું દરેક joint account આવી એક line carry કરે છે. એને **operating mandate** કહે છે, અને એ જ — passbook પર printed names નહીં, પૈસા કોણે deposit કર્યા એ નહીં, cheque book કોના drawer માં છે એ નહીં — decide કરે છે કે કોનું signature પૈસા move કરે છે. આ એ ચાર mandates ની guide છે જે તમને actually મળશે, દરેક એ cheque માટે શું mean કરે છે જે તમે sign કરવાના છો, અને જ્યારે pen count ઓછો પડે ત્યારે શું થાય છે.

### [H2] Mandate Decide કરે છે, Names નહીં

એક joint account ઘણા owners સાથે એક balance છે. એ part દરેક જણ સમજે છે. જે ઓછું સમજાય છે: ownership અને operation bank ના records માં બે અલગ columns છે. Names establish કરે છે કે પૈસા કોના છે. Mandate — account opening પર ticked "mode of operation" box — establish કરે છે કે bank ને pay કરવાની instruction કોણ આપી શકે છે.

જ્યારે એક cheque present થાય છે, bank બાકી બધા પહેલા એક check ચલાવે છે: શું આ leaf નો signature set file પર રહેલા mandate ને satisfy કરે છે? એક signature જ્યાં mandate *any one* કહે છે — paid. એક signature જ્યાં mandate *all* કહે છે — returned. એનાથી ફરક નથી પડતો કે એકલો signer અડધા balance નો owner છે, અને એનાથી પણ નહીં કે leaf [cheque ની ઘણી types](https://cheqify.app/gu/blog/cheque-types-india) માંથી કઈ છે — bearer, order, account-payee crossed — mandate દરેક leaf પર identically apply થાય છે.

> **Passbook record કરે છે કે પૈસા કોના છે. Mandate record કરે છે કે એને move કોણ કરી શકે છે. એક joint account joint permission નથી — આ exactly એ જ permission છે જે તમે opening form પર tick કરી હતી, એક-એક signature પર enforce થતી.**

ચાર mandates દેશના લગભગ દરેક joint account ને cover કરે છે. અહીં છે એ, control ના rising order માં.

### [H2] Either or Survivor — કોઈ પણ એક Pen કામ કરે છે

Couples અને family accounts માટે default choice, અને એ જ જે form પર shrug કરવા પર તમારી bank quietly assume કરી લેશે. **કોઈ પણ એક holder એકલો કોઈ પણ cheque sign કરી શકે છે** — withdraw કરવું, instructions આપવી, payment stop કરવી. દરેક holder માટે account લગભગ એક personal account ની જેમ behave કરે છે જેનો બસ એક co-owner પણ છે.

"Survivor" વાળો અડધો ભાગ harder question નો answer આપે છે: જો એક holder ની death થાય, surviving holder simply account operate કરતો રહે છે, અને bank succession paperwork ની રાહ જોયા વગર balance એમને pay કરે છે. Convenience આખું design છે — અને risk પણ. કોઈ પણ holder એક single lawful signature થી account ખાલી કરી શકે છે, અને bank બીજા holder ને કોઈ warning owe નથી કરતી. આને trust માટે પસંદ કરો, structure માટે નહીં.

### [H2] Former or Survivor — એક Named Pen, Fixed

અહીં names નો *order* matter કરે છે. ફક્ત **first-named holder** ("former") account operate કરી શકે છે — cheques sign કરવા, withdraw, instruct — જ્યાં સુધી એ જીવે છે. બીજો holder functionally એક passenger છે: એમનું name account પર છે, એમનું signature specimen card પર છે, અને આમાંથી કંઈ પણ પૈસા move નથી કરતું જ્યાં સુધી former holder ની death નથી થતી, જેના પછી survivor full operating rights સાથે step in કરે છે.

આ mandate તમને pensioner અને senior-citizen accounts પર મળશે — એક parent પોતાના lifetime માં sole control રાખે છે અને ensure કરે છે કે account probate friction વગર child ને pass થાય. જો તમે એક Former or Survivor account પર બીજું name છો, આને plainly સમજો: ફક્ત તમારા signature વાળો cheque દર વખતે પાછો આવશે, amount ગમે તે હોય, emergency ગમે તે હોય.

### [H2] Jointly — દરેક Cheque પર દરેક Signature

Control mandate. **બધા holders એ દરેક cheque sign કરવો પડશે**, દરેક withdrawal form, દરેક instruction. એક missing signature અને instrument incomplete છે — bank એને unpaid return કરે છે, account માં ગમે તેટલા પૈસા હોય.

આ જ એ mandate છે જે business partners જાણી જોઈને પસંદ કરે છે. કોઈ પણ partner firm ના પૈસા unilaterally move નથી કરી શકતો; દરેક outgoing rupee નીકળતા પહેલા બંને જોડી આંખો નીચેથી પસાર થયો છે. આ એક real safeguard છે, અને એક real commitment પણ: cheque signing એક two-person event બની જાય છે, stop-payment instructions ને બધાની જરૂર હોય છે, અને [એક fresh cheque book request કરવા](https://cheqify.app/gu/blog/how-to-request-cheque-book-online-india) ને પણ typically app માં એક tap ની જગ્યાએ બધા holders નું authorisation જોઈએ.

Sting death પર છે. Plain "Jointly" માં કોઈ survivorship clause નથી — જો એક holder ની death થાય, mandate satisfy જ નથી થઈ શકતો (એક required signatory હવે exist નથી કરતો), તો bank operations freeze કરી દે છે જ્યાં સુધી legal formalities settle ન કરે કે હવે કોણ stand in કરે છે. એટલે જ banks ચોથો option offer કરે છે.

### [H2] Jointly or Survivor — Control, એક Exit સાથે

જ્યાં સુધી બધા holders જીવે છે, આ exactly Jointly ની જેમ behave કરે છે: દરેક cheque ને દરેક signature જોઈએ. પણ એક holder ની death પર survivorship clause activate થાય છે — surviving holders account operate કરે છે (અંદરોઅંદર jointly, જો એકથી વધુ બચે) અને balance receive કરે છે, account seize થયા વગર. જે partners dual control *અને* continuity બંને માંગે છે, એમના માટે plain Jointly કરતાં usually આ જ better tick છે.

### [H2] ચારેય Mandates, Side by Side

| Mandate | Cheque કોણ sign કરે છે | એક holder ની death પર |
|---|---|---|
| Either or Survivor | કોઈ પણ એક holder, એકલો | Survivor operate કરે છે અને balance receive કરે છે |
| Former or Survivor | ફક્ત first-named holder | Survivor full operating rights સાથે step in કરે છે |
| Jointly | બધા holders, દરેક cheque | Legal settlement pending, operations freeze |
| Jointly or Survivor | બધા holders, દરેક cheque | Survivors jointly operate કરતા રહે છે |

(Banks "Latter or Survivor" પણ offer કરે છે — mirror image, જ્યાં second-named holder operate કરે છે — અને custom mandates જેમ કે "any two of three" ઘણા signatories વાળી firms માટે. Logic ક્યારેય નથી બદલાતું: mandate pens ને name કરે છે, અને દરેક named pen appear થવી જોઈએ.)

### [H2] જ્યારે એક Signature Missing હોય

Mandate થી ઓછો signed એક cheque unpaid return થાય છે — memo typically "requires all drawers' signatures" કે "drawer's signature required" વાંચે છે. એ moment માટે ત્રણ practical notes:

- **Cheque મર્યો નથી.** Missing holder નું signature એ જ leaf પર લો — કે એક fresh cheque લખો — અને re-present કરો. એક returned cheque [પોતાની 3-month validity ની અંદર](https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india) ફરીથી clearing માં જઈ શકે છે; return તમને થોડા દિવસ અને એક bank charge cost કરે છે, payment પોતે નહીં.
- **એમ પણ આ ખરાબ દેખાય છે.** તમારા payee માટે, એક returned cheque એક returned cheque છે — memo નું fine print phone call સુધી rarely પહોંચે છે. જે vendor એ હમણાં સાંભળ્યું "તમારી payment bounce થઈ ગઈ", એને "technically ફક્ત અડધી bounce થઈ" થી તસલ્લી નથી મળતી.
- **આ તમારી desk પર preventable છે, bank ની નહીં.** Failure ત્યારે થઈ જ્યારે cheque એક signature સાથે તમારી office માંથી નીકળ્યો. એક simple issuing habit — જ્યાં સુધી register full signature set ન બતાવે, કોઈ leaf બહાર નથી જતી — આખી category delete કરી દે છે.

### [H2] Death, Survivorship, અને Nomination ક્યાં Fit થાય છે

"Holder ની death પર પૈસાનું શું થાય છે" — આનો answer બે અલગ instruments આપે છે, અને એ routinely confuse થાય છે.

**Survivorship** ખુદ mandate માં built છે. Either or Survivor, Former or Survivor, અને Jointly or Survivor accounts માં bank surviving holder(s) ને pay કરે છે અને એમને operate કરવા દે છે — એક banking arrangement, death certificate સાથે counter પર settled.

**Nomination** એક અલગ facility છે. Nominee ને bank પાસેથી balance ત્યારે જ મળે છે *જ્યારે બધા holders જઈ ચૂક્યા હોય* — અને એ એને legal heirs ના trustee તરીકે receive કરે છે, automatically owner તરીકે નહીં. Nomination કોઈ will ને override નથી કરતું, અને એ survivorship સાથે compete નથી કરતું; એ એની પાછળ queue કરે છે. Survivorship clause plus nomination વાળું એક joint account આખો sequence cover કરે છે: પહેલા co-holder, પછી nominee, છેલ્લે succession law.

Cushion વગરનું એકમાત્ર arrangement plain **Jointly** છે, survivorship વગર — કોઈ પણ holder ની death account ને રોકી દે છે જ્યાં સુધી legal heirs પોતાનો claim establish ન કરે. જો તમારી firm નું account આજે એ mandate carry કરે છે, આ paragraph branch જવાનું તમારું reminder છે.

### [H2] Mandate બદલવો — બધી Pens ને Agree કરવું પડશે

કોઈ પણ holder એકલો mode of operation નથી બદલી શકતો — loosen કરવા માટે પણ નહીં, first-named holder પણ નહીં. Banks ને **બધા joint holders નું signed written request** જોઈએ, usually એક fresh mandate form પર, ક્યારેક fresh specimen signatures સાથે. આ જ all-hands rule holder add કે remove કરવા પર પણ apply થાય છે.

એ rule ની અંદર છુપાયેલી practical advice: mandate *જરૂર પડે એ પહેલા* બદલો. જો એક partner એક quarter માટે travel કરી રહ્યો છે, એક temporarily amended mandate — કે એક properly executed power of attorney — એક branch visit માં arrange થઈ જાય છે. Alternative છે unpayable cheques નું એક drawer, એક-એક embarrassing return થી discover થતું.

### [H2] એક Jointly Operated Account Friction વગર ચલાવવું

Business partners માટે "Jointly" speed ને control સાથે trade કરે છે — પણ ખોવાયેલી speed નો મોટાભાગનો ભાગ bad workflow છે, mandate નહીં. Clean pattern:

- **Signing ને batch કરો.** તમારા co-signer ને leaf by leaf chase ન કરો. અઠવાડિયાના cheques એક run માં prepare કરો — payee names exact, amounts in words done, dates uniform — અને આખો stack બંને pens ની સામે એક sitting માં મૂકો.
- **કોઈ sign કરે એ પહેલા register કરો.** Signature-status column વાળું એક cheque register તમને instantly બતાવે છે કે કઈ leaves half-signed છે — exactly એ જ population જે mandate returns cause કરે છે.
- **Half-signed cheque ને unissued treat કરો.** એ office માંથી નથી નીકળતો, "time બચાવવા" courier નથી થતો, બીજા signature ના promise પર trust માં hand over નથી થતો. Full signature set નહીં, તો handover નહીં.

એક printed cheque અહીં બીજે ક્યાંય કરતાં વધુ પોતાની જગ્યા કમાય છે: જ્યારે leaf બીજા signer સુધી complete પહોંચે છે — payee, amount, words, date બધું filled અને legible — બીજું signature ચાર seconds લે છે. જ્યારે half-written પહોંચે છે, એ એક conversation લે છે.

---

> **બે partners, વીસ cheques, એક sitting.** Cheqify તમારા joint-account cheques 300+ Indian bank layouts પર print કરે છે auto-generated amounts in words સાથે, જેથી દરેક leaf બીજા signer સુધી complete પહોંચે — અને એનું register એક glance માં બતાવે છે કે કયા cheques office માંથી નીકળતા પહેલા હજુ પણ એક signature ની રાહ જુએ છે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (all LIVE — safe):**
- Post #18 (`cheque-types-india`) — the mandate applies to every cheque type identically.
- Post #12 (`cheque-validity-period-stop-payment-india`) — re-presenting a mandate-returned cheque within its 3-month validity.
- Post #25 (`how-to-request-cheque-book-online-india`) — cheque book requests on jointly operated accounts need all holders' authorisation.

**Bonus internal-link work (after publish):**
- Edit post #33 (`cheque-signature-mismatch`, all 3 locales) to add a "on joint accounts, the mandate — not just the specimen — decides whether a signature set passes" link here — strongest reciprocal.
- Edit post #18 (`cheque-types-india`, all 3 locales) to link here from any joint-account/signatory mention.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The returned-partner-cheque opening, the "pens" motif, and the half-signed-cheque workflow section carry the voice.
- **Fact-check before publish:** (1) Either/Former/Jointly/Jointly-or-Survivor mandate behaviours and survivorship treatment — verify against current RBI guidance on joint deposit accounts (RBI has long-standing circulars on Either-or-Survivor / Former-or-Survivor survivorship payments); (2) nomination-as-trustee framing (nominee receives for legal heirs, doesn't override succession) — settled law, verify wording; (3) mandate change requiring all holders' signatures — standard bank practice across SBI/HDFC/ICICI, verify one bank's current form language; (4) plain "Jointly" freezing on death pending legal formalities — verify framing.
- **Internal links:** #18, #12, #25 all LIVE — safe in all three locales.
- **Table:** paste the four-mandate comparison as a Sanity Table block (3 × 5) in all three bodies, not as text.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,750 words.
- **Sanity toggles:** `isHowTo: OFF`, `hasFaq: ON` (7 items).
- **Slug check:** after publish, confirm slug is exactly `joint-account-cheque-signing-rules` with no stray characters per `[[project_sanity_slug_corruption_gotcha]]`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — posts #33 and #18.
5. IndexNow auto-pings on publish.
