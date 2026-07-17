# Blog Post #43 — Cheque Endorsement Explained — What to Write on the Back & When (2026)

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
- `> **Every cheque you issue, tracked from print to clearing...** / **आपका issue किया हर cheque, print से clearing तक tracked...** / **તમારો issue કરેલો દરેક cheque, print થી clearing સુધી tracked...**` (final CTA paragraph in each body) → **Callout**

**Apply as Quote block (italic + left bar):**
- `> **An endorsement is the only signature in banking that keeps working after you've let go of the paper...** / **Endorsement banking का इकलौता signature है जो paper छोड़ देने के बाद भी काम करता रहता है...** / **Endorsement banking નું એકમાત્ર signature છે જે paper છોડી દીધા પછી પણ કામ કરતું રહે છે...**` (pull quote in each body) → **Quote**

**Do NOT paste:** `> **Editor note:** ...` lines — those are instructions to you, not body content.

---

## Why This Topic

"How to endorse a cheque" and "sign on back of cheque" are evergreen confusion queries with almost no competition that gets 2026 right — most Indian guides recycle pre-CTS textbook doctrine and never mention that an account-payee crossed cheque (which is what nearly every cheque book now pre-prints) cannot be endorsed to a third party at all. That gap is the post: the four endorsement types every banking exam still asks, the sign-exactly-as-written rules including the misspelt-name convention, and the honest business answer to "can I pass my customer's cheque to my vendor?" — a question Cheqify's SMB audience genuinely asks. Both schemas apply (HowTo: endorsing correctly, 5 steps; FAQ: 7 items). Cluster fit: #27 (crossing types — the direct sibling) and #19 (filling the front correctly).

---

## Sanity Fields

- **Slug:** `cheque-endorsement-explained-india`
- **Tags:** `Cheque Guide`, `Banking & RBI`
- **Author:** Cheqify Team
- **Order:** auto (Sanity max+1; do not set manually)
- **Is HowTo:** YES (endorsing a cheque for deposit or transfer, 5 steps)
- **Has FAQ:** YES (7 items)

---

## Publishing Metadata

- **Scheduled publish date:** Ravi-managed — no fixed date
- **Primary keyword:** `cheque endorsement`
- **Secondary keywords:** how to endorse a cheque India, sign on back of cheque, blank endorsement, restrictive endorsement, endorse account payee cheque, transfer cheque to another person, endorsement NI Act
- **Reading time:** ~8 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-endorsement-explained-india`
  - HI: `https://cheqify.app/hi/blog/cheque-endorsement-explained-india`
  - GU: `https://cheqify.app/gu/blog/cheque-endorsement-explained-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-endorsement-explained-india-cover.webp`
- **Subject:** The back of a cheque, flipped over on a desk, filling most of the frame. A fountain pen rests mid-signature; above the signature, the handwritten words "Pay to Sunil Traders only". Beside it, face-up, a second cheque shows the two parallel "A/c Payee" crossing lines — the wall. A subtle arrow motif from one cheque toward a second hand suggests transfer. Cheqify wordmark bottom-right. Off-white background.
- **Alt text:** Cheque endorsement in India — signing the back of a cheque with "Pay to name only", next to an account-payee crossed cheque that cannot be endorsed.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Endorsement Explained — What to Write on the Back & When (2026)
- **HI:** Cheque Endorsement Explained — Back पर क्या लिखें और कब (2026)
- **GU:** Cheque Endorsement Explained — Back પર શું લખવું અને ક્યારે (2026)

---

## Descriptions

- **EN:** The signature the teller asks for on the back of a cheque is a legal act, not a formality: depending on the words around it, it can transfer the money to a stranger, lock it to one account, or make you liable for someone else's bounce. Here's the full guide to cheque endorsement in India — blank, full, restrictive and conditional endorsements, the sign-exactly-as-the-front-reads rules (including the misspelt-name fix), and why an account-payee crossed cheque can't be endorsed to anyone at all.
- **HI:** Cheque की back पर teller जो signature माँगता है वो एक legal act है, formality नहीं: इसके आसपास के words के depending पर, ये पैसा किसी stranger को transfer कर सकता है, इसे एक account से lock कर सकता है, या आपको किसी और के bounce के लिए liable बना सकता है. यहाँ है India में cheque endorsement की full guide — blank, full, restrictive और conditional endorsements, sign-exactly-as-the-front-reads rules (misspelt-name fix समेत), और account-payee crossed cheque किसी को भी endorse क्यों नहीं हो सकता.
- **GU:** Cheque ની back પર teller જે signature માંગે છે એ એક legal act છે, formality નહીં: એની આસપાસના words ની depending પર, આ પૈસા કોઈ stranger ને transfer કરી શકે છે, એને એક account સાથે lock કરી શકે છે, કે તમને કોઈ બીજાના bounce માટે liable બનાવી શકે છે. અહીં છે India માં cheque endorsement ની full guide — blank, full, restrictive અને conditional endorsements, sign-exactly-as-the-front-reads rules (misspelt-name fix સહિત), અને account-payee crossed cheque કોઈને પણ endorse કેમ નથી થઈ શકતો.

---

## Body (English)

Paste into Sanity's Body (English) rich text editor.

---

The teller slides your cheque back under the glass and says four words: "Sign the back, please."

Most of us obey without a second thought — same pen, same signature, ten seconds. What almost nobody asks is what that signature just *did*. Because on the back of a cheque, a signature is not identification. It's a legal act with a hundred-and-forty-year-old name, and depending on the words written around it, it can transfer the money to a stranger, lock it to a single account, or quietly make you liable for a payment you never owed.

That act is **endorsement**. This is the guide to it: what the back of a cheque is legally for, the four kinds of endorsement and what each one does, the signature rules bankers actually check (including the misspelt-name convention every counter clerk knows), and the modern wall — account-payee crossing — that has turned most of this chapter of banking into history. If you run a business and have ever been tempted to pass a customer's cheque straight on to a vendor, the last two sections were written for you.

### [H2] What an Endorsement Actually Is

The Negotiable Instruments Act, 1881 — the law every Indian cheque lives under — defines it in Section 15: when the holder of a cheque **signs it, usually on the back, for the purpose of negotiation**, that signature is an endorsement. Negotiation is the Act's word for transfer. The signer (the **endorser**) passes every right in the cheque to the receiver (the **endorsee**), who can present it for payment — or endorse it onward again. A cheque can carry a whole chain of endorsements, each holder adding a signature like a relay runner passing the baton.

That's the transfer sense. There's also a humbler, everyday sense: when you deposit a cheque into your *own* account and the bank asks you to sign the back, nothing is being negotiated — you aren't transferring the cheque to anyone. That signature is a bank-side habit: part receipt, part identity confirmation, part protection for the bank if a dispute surfaces later. Harmless — and for account-payee cheques deposited by the named payee, many banks don't even insist on it. But it's worth knowing that the same patch of paper carries both meanings, which is exactly why what you *write* around a back-of-cheque signature matters as much as the signature itself.

### [H2] The Four Kinds of Endorsement — and What Each One Does

The words next to the signature decide everything. Four patterns cover the field:

**1. Blank (general) endorsement — signature only.** The payee simply signs, no words. Legally, this converts an order cheque into a **bearer instrument**: whoever holds the paper can now claim the money. That is the entire problem with it. A blank-endorsed cheque that slips out of a folder in an auto belongs, practically speaking, to whoever picks it up. If you ever endorse in blank, do it at the bank counter — not before the ride there.

**2. Full (special) endorsement — "Pay to [Name]" + signature.** The endorser writes *Pay to Sunil Traders* above the signature. Now only Sunil Traders can collect the cheque or endorse it onward. This is the correct form for any deliberate transfer — the cheque stays an order instrument with a named owner at every step.

**3. Restrictive endorsement — "Pay [Name] only" + signature.** One word — *only* — slams the door. Sunil Traders can collect, but cannot endorse the cheque any further; negotiation ends there. Use it whenever you want the transfer to be final, which for a business is essentially always.

**4. Conditional endorsement — "Pay [Name] on delivery of goods" + signature.** A condition rides along with the transfer. The catch worth knowing: the condition binds the endorser and endorsee *between themselves*, but the **paying bank ignores it entirely** — the bank's job is the instrument, not your contract. Rare in practice, and best kept out of business dealings altogether; a condition belongs in the agreement, not on the cheque.

One more pattern for completeness: a cheque payable to **two payees jointly** ("Rakesh Sharma and Sunil Verma") needs *both* signatures on the back — either alone is an incomplete endorsement, and banks return it as such.

### [H2] How to Endorse Correctly — the Rules Bankers Actually Check

The mechanics take thirty seconds; the return memo for getting them wrong takes a week. The rules:

- **Sign exactly as the front reads.** If the drawer wrote *Rakesh Kumar Sharma* on the payee line, the back must say *Rakesh Kumar Sharma* — not *R.K. Sharma*, not the stylised squiggle you use on delivery slips. The bank matches the endorsement against the payee name, character for character. (Getting the payee line right in the first place is [its own field-by-field discipline](https://cheqify.app/en/blog/how-to-fill-cheque-correctly).)
- **The misspelt-name rule.** If the drawer botched your name — *Rakhesh* for *Rakesh* — sign the wrong spelling first, exactly as written, then sign your correct name beneath it. Two signatures, stacked. Every banker knows this convention; together they certify "the person named, however spelt, is me."
- **Top of the back, blue or black ink, no corrections.** Endorse in the top portion of the reverse, keep it compact, and never overwrite. A scratched-out endorsement invites a return the same way a corrected payee line does.
- **Companies and firms sign in their capacity.** A business endorsing (or simply depositing) signs through its authorised signatory: rubber stamp *For XYZ Trading Pvt Ltd*, signature, designation. A bare signature without the capacity stamp can leave the signatory personally exposed on the instrument — the stamp is not decoration.

### [H2] The Account-Payee Wall — Why Most Cheques Can't Be Endorsed Anymore

Here is the section that makes half the older advice on this subject obsolete. If a cheque is crossed **"Account Payee"** — two parallel lines with *A/c Payee* written between them — banking practice, RBI directions, and court-recognised custom all converge on one instruction: the proceeds may be credited **only to the bank account of the named payee**. Not to an endorsee. Not to a helpful relative. The named payee's own account, full stop.

Which means an account-payee cheque **cannot, in practice, be endorsed to a third party at all**. You can sign the back as elaborately as you like; no collecting bank will accept the cheque for anyone but you. RBI reinforced this in the CTS era for a plainly practical reason — cheques now travel between banks as images, and a paying bank staring at a scan cannot verify a chain of ink endorsements on paper it will never physically hold. (The one narrow carve-out RBI allowed — co-operative credit societies collecting for their own members under tight conditions — is irrelevant to ordinary business.)

And because most cheque books issued today come **pre-printed with the account-payee crossing**, the honest summary of Indian endorsement law in 2026 reads like an epitaph: the doctrine is alive, the four types are still examinable, and the instrument that would let you use them is nearly extinct. The full map of crossings — general, special, account payee, and what each permits — is [its own guide](https://cheqify.app/en/blog/crossed-cheque-vs-account-payee).

### [H2] Endorsing a Customer's Cheque to a Vendor — the Honest Business Answer

The tempting move every trader has considered at least once: a customer's ₹40,000 cheque is sitting in the drawer, a vendor is owed ₹40,000, and the arithmetic begs to become a single signature. Can you endorse it over?

Only if three stars align. The customer's cheque must be an **uncrossed order cheque** (or a bearer cheque) — which, in 2026, it almost never is. Your vendor must be willing to accept a third-party instrument. And your vendor's bank must agree to collect it — many banks now refuse third-party cheques outright as a fraud-control policy, whatever the doctrine technically permits. Three conditions, each individually unlikely, multiplied together.

The cleaner pattern costs one extra clearing day and buys a great deal: **deposit the customer's cheque into your own account, then pay the vendor with your own cheque.** Your books show a receipt and a payment instead of a payment that vanished sideways; GST and audit trails stay legible; and each leg of the transaction is a document you control from your own cheque book. Endorsement saves one leaf and muddies the ledger. For a business, that trade is never worth it.

### [H2] Liability Rides on the Back

One more thing travels with an endorsement, and it's the reason to respect the act even in its twilight: **liability**. Under the NI Act, every endorser effectively guarantees the instrument to everyone who takes it after them. If the cheque bounces in the endorsee's hands, the claim comes back up the chain — to you.

> **An endorsement is the only signature in banking that keeps working after you've let go of the paper — every name on the back stays on the hook until the cheque finally clears.**

Play that out in the vendor scenario. You endorse your customer's cheque to your vendor; the customer's account turns out to be dry; the cheque returns unpaid. Your vendor's remedy isn't against your customer — a stranger to them — it's against *you*, the endorser who handed the paper over. You have inherited a dishonour problem on a cheque you never wrote, with a working relationship as collateral. (The Act does permit a *sans recourse* endorsement — "without recourse to me" — that disclaims this liability, but try offering one commercially and watch how fast the vendor's smile fades.)

The quiet takeaway of the whole subject: the back of a cheque is not a formality. It is the one part of the instrument where *your* pen, not the drawer's, decides what happens next — so when a signature goes there, it should go there with the right words around it, or with a clear understanding that none are needed.

---

> **Every cheque you issue, tracked from print to clearing — no guessing what happened after the handover.** Cheqify prints account-payee cheques on 300+ Indian bank layouts with auto amount-in-words, and its lifecycle register records every leaf's journey — issued, deposited, cleared, bounced — so your books never depend on memory or on what someone wrote on the back. 100% free. [Start at app.cheqify.app](https://app.cheqify.app/register).

---

## FAQ Items (Sanity `faqItems` field — required for FAQPage schema)

1. **Q:** What is endorsement of a cheque?
   **A:** Under Section 15 of the Negotiable Instruments Act, 1881, endorsement is the holder of a cheque signing it — usually on the back — for the purpose of negotiation, i.e., transferring their rights in the cheque to someone else. The signer is the endorser, the receiver is the endorsee, and the endorsee can collect the cheque or endorse it onward again. A signature alone (blank endorsement) or a signature with directions like "Pay to [Name]" both qualify.

2. **Q:** Can an account payee cheque be endorsed to another person?
   **A:** No — in practice it cannot. An account-payee crossing instructs banks to credit the proceeds only to the named payee's own bank account, and RBI's CTS-era directions bar banks from collecting such cheques for third parties (with a narrow co-operative-society exception). Signing the back changes nothing; no collecting bank will accept the cheque for anyone but the named payee. Since most cheque books are pre-printed account payee, most cheques today simply cannot be transferred by endorsement.

3. **Q:** What should I do if my name is misspelt on a cheque?
   **A:** Use the standard banking convention: sign the misspelt version first, exactly as the drawer wrote it, then sign your correct name directly beneath it. The two signatures together certify that the person named — however spelt — is you. Banks accept this for minor spelling errors; if the name is wrong outright (a different name entirely), ask the drawer for a fresh cheque instead.

4. **Q:** What is a blank endorsement and why is it risky?
   **A:** A blank (general) endorsement is the payee's signature alone on the back, with no accompanying words. It legally converts an order cheque into a bearer instrument — whoever physically holds the paper can claim the money. Lose a blank-endorsed cheque and the finder is effectively holding your funds. If you must endorse in blank, do it at the bank counter at the moment of deposit, never in advance.

5. **Q:** Can a business endorse a customer's cheque to pay a vendor?
   **A:** Only if the customer's cheque is an uncrossed order or bearer cheque — rare in 2026 — and the vendor and the vendor's bank both accept a third-party instrument, which many banks now refuse as fraud-control policy. The cleaner pattern is to deposit the customer's cheque into your own account and pay the vendor with your own cheque: the books show a clean receipt and payment, and you avoid endorser liability if the customer's cheque bounces.

6. **Q:** Is the endorser liable if an endorsed cheque bounces?
   **A:** Yes. Under the NI Act, every endorser effectively guarantees the instrument to all subsequent holders — if the cheque is dishonoured, the endorsee's claim runs back up the chain of signatures to you, even though you never wrote the cheque. A "sans recourse" endorsement can disclaim this liability, but counterparties rarely accept one in commercial practice.

7. **Q:** Do I have to sign the back of a cheque when depositing it into my own account?
   **A:** Banks often ask for it, but it isn't a negotiation — nothing is being transferred. The signature works as a receipt-and-identity habit and protects the bank if a dispute surfaces later. Many banks skip it entirely for account-payee cheques deposited by the named payee. It's harmless to sign; just sign only — add no words, since stray directions on the back can confuse processing.

---

## HowTo Steps (Sanity `howToSteps` field — required for HowTo schema)

| # | Name | Text |
|---|---|---|
| 1 | Check the crossing before anything else | Look at the front first: if the cheque carries an "Account Payee" crossing, it cannot be endorsed to anyone — it can only be deposited into the named payee's account. Endorsement for transfer applies only to uncrossed order or bearer cheques. |
| 2 | Turn it over and pick the spot | Use the top portion of the back, in blue or black ink. Keep the endorsement compact and never overwrite — a scratched-out endorsement invites a return the same way a corrected payee line does. |
| 3 | Sign exactly as the front reads | Match the payee name character for character, not your everyday short signature. If the drawer misspelt your name, sign the misspelt version first and your correct signature beneath it. Businesses endorse through the authorised signatory with the company stamp and designation. |
| 4 | Add the words that match your intent | Depositing into your own account: signature alone is enough. Transferring: write "Pay to [Name]" above the signature. Ending further transfer: "Pay [Name] only". Skip conditions entirely — the paying bank ignores them and they only muddy the instrument. |
| 5 | Record it and move it promptly | Note the cheque number, endorsee, and date in your register, then hand over or deposit without delay. The cheque's 3-month validity keeps running from its date — and as endorser you stay liable on the instrument until it finally clears. |

---

## Body (Hindi)

> **Editor note:** Paste into Sanity's Body (Hindi). Hinglish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Teller आपका cheque glass के नीचे से वापस slide करता है और चार words कहता है: "Sign the back, please."

हममें से ज़्यादातर बिना दूसरी सोच के obey करते हैं — same pen, same signature, दस seconds. जो almost कोई नहीं पूछता वो ये है कि उस signature ने अभी *किया* क्या. क्योंकि cheque की back पर एक signature identification नहीं है. ये एक legal act है जिसका नाम एक सौ चालीस साल पुराना है, और इसके आसपास लिखे words के depending पर, ये पैसा किसी stranger को transfer कर सकता है, इसे एक single account से lock कर सकता है, या quietly आपको एक ऐसी payment के लिए liable बना सकता है जो आपने कभी owe ही नहीं की.

वो act है **endorsement**. ये उसकी guide है: cheque की back legally किस लिए है, endorsement के चार kinds और हर एक क्या करता है, वो signature rules जो bankers actually check करते हैं (वो misspelt-name convention समेत जो हर counter clerk जानता है), और modern wall — account-payee crossing — जिसने banking के इस chapter के ज़्यादातर हिस्से को history बना दिया है. अगर आप business चलाते हैं और कभी customer का cheque सीधे vendor को pass करने के लिए tempted हुए हैं, तो last दो sections आपके लिए लिखे गए हैं.

### [H2] Endorsement Actually है क्या

Negotiable Instruments Act, 1881 — वो law जिसके under हर Indian cheque जीता है — इसे Section 15 में define करता है: जब cheque का holder इसे **negotiation के purpose से sign करता है, usually back पर**, वो signature एक endorsement है. Negotiation transfer के लिए Act का word है. Signer (**endorser**) cheque का हर right receiver (**endorsee**) को pass करता है, जो इसे payment के लिए present कर सकता है — या आगे फिर endorse कर सकता है. एक cheque endorsements की पूरी chain carry कर सकता है, हर holder relay runner की तरह baton pass करते हुए एक signature add करता है.

वो transfer sense है. एक humbler, everyday sense भी है: जब आप अपने *own* account में cheque deposit करते हैं और bank आपसे back sign करने को कहता है, कुछ negotiate नहीं हो रहा — आप cheque किसी को transfer नहीं कर रहे. वो signature एक bank-side habit है: part receipt, part identity confirmation, part bank के लिए protection अगर बाद में कोई dispute surface हो. Harmless — और named payee के deposit किए account-payee cheques के लिए कई banks insist भी नहीं करते. पर ये जानने लायक है कि paper का same patch दोनों meanings carry करता है, जो exactly वजह है कि back-of-cheque signature के आसपास आप क्या *लिखते* हैं वो signature जितना ही matter करता है.

### [H2] Endorsement के चार Kinds — और हर एक क्या करता है

Signature के बगल के words सब कुछ decide करते हैं. चार patterns field cover करते हैं:

**1. Blank (general) endorsement — सिर्फ़ signature.** Payee बस sign करता है, कोई words नहीं. Legally, ये एक order cheque को **bearer instrument** में convert करता है: जो भी paper पकड़े है वो अब पैसा claim कर सकता है. यही इसकी पूरी problem है. Auto में folder से फिसला एक blank-endorsed cheque, practically speaking, उसका है जो इसे उठा ले. अगर कभी blank endorse करें, bank counter पर करें — वहाँ की ride से पहले नहीं.

**2. Full (special) endorsement — "Pay to [Name]" + signature.** Endorser signature के ऊपर *Pay to Sunil Traders* लिखता है. अब सिर्फ़ Sunil Traders cheque collect कर सकते हैं या आगे endorse कर सकते हैं. किसी भी deliberate transfer के लिए यही correct form है — cheque हर step पर एक named owner के साथ order instrument रहता है.

**3. Restrictive endorsement — "Pay [Name] only" + signature.** एक word — *only* — दरवाज़ा बंद कर देता है. Sunil Traders collect कर सकते हैं, पर cheque आगे endorse नहीं कर सकते; negotiation वहीं ख़त्म. जब भी आप चाहें कि transfer final हो, इसे use करें — जो एक business के लिए essentially हमेशा है.

**4. Conditional endorsement — "Pay [Name] on delivery of goods" + signature.** Transfer के साथ एक condition सवार होती है. जानने लायक catch: condition endorser और endorsee को *आपस में* bind करती है, पर **paying bank इसे entirely ignore करता है** — bank का काम instrument है, आपका contract नहीं. Practice में rare, और business dealings से पूरी तरह बाहर रखना best है; condition की जगह agreement में है, cheque पर नहीं.

Completeness के लिए एक और pattern: **दो payees को jointly** payable एक cheque ("Rakesh Sharma and Sunil Verma") को back पर *दोनों* signatures चाहिए — कोई एक अकेला एक incomplete endorsement है, और banks इसे ऐसा ही return करते हैं.

### [H2] Correctly Endorse कैसे करें — वो Rules जो Bankers Actually Check करते हैं

Mechanics तीस seconds लेती है; इसे ग़लत करने का return memo एक हफ़्ता. Rules:

- **Exactly वैसे sign करें जैसे front पढ़ता है.** अगर drawer ने payee line पर *Rakesh Kumar Sharma* लिखा है, back पर *Rakesh Kumar Sharma* होना चाहिए — *R.K. Sharma* नहीं, delivery slips पर use होने वाला stylised squiggle नहीं. Bank endorsement को payee name से match करता है, character for character. (Payee line को पहली जगह सही लिखना [अपनी अलग field-by-field discipline](https://cheqify.app/hi/blog/how-to-fill-cheque-correctly) है.)
- **Misspelt-name rule.** अगर drawer ने आपका नाम बिगाड़ दिया — *Rakesh* की जगह *Rakhesh* — तो पहले wrong spelling sign करें, exactly जैसी लिखी है, फिर उसके नीचे अपना correct name sign करें. दो signatures, एक के नीचे एक. हर banker ये convention जानता है; दोनों मिलकर certify करते हैं "named person, spelling चाहे जो हो, मैं ही हूँ."
- **Back का top, blue या black ink, कोई corrections नहीं.** Reverse के top portion में endorse करें, compact रखें, और कभी overwrite न करें. एक scratched-out endorsement उसी तरह return invite करता है जैसे corrected payee line.
- **Companies और firms अपनी capacity में sign करती हैं.** Endorse (या simply deposit) करता एक business अपने authorised signatory से sign करता है: rubber stamp *For XYZ Trading Pvt Ltd*, signature, designation. Capacity stamp के बिना एक bare signature signatory को instrument पर personally exposed छोड़ सकता है — stamp decoration नहीं है.

### [H2] Account-Payee Wall — ज़्यादातर Cheques अब Endorse क्यों नहीं हो सकते

यहाँ है वो section जो इस subject पर आधी पुरानी advice को obsolete बना देता है. अगर एक cheque **"Account Payee"** crossed है — दो parallel lines जिनके बीच *A/c Payee* लिखा है — तो banking practice, RBI directions, और court-recognised custom सब एक ही instruction पर converge करते हैं: proceeds **सिर्फ़ named payee के bank account** में credit हो सकते हैं. किसी endorsee को नहीं. किसी helpful relative को नहीं. Named payee का own account, full stop.

जिसका मतलब है कि एक account-payee cheque **practice में किसी third party को endorse हो ही नहीं सकता**. आप back पर जितना elaborate चाहें sign करें; कोई collecting bank cheque आपके सिवा किसी के लिए accept नहीं करेगा. RBI ने इसे CTS era में एक plainly practical reason से reinforce किया — cheques अब banks के बीच images की तरह travel करते हैं, और एक scan को घूरता paying bank उस paper पर ink endorsements की chain verify नहीं कर सकता जो वो कभी physically पकड़ेगा ही नहीं. (RBI ने जो एक narrow carve-out allow किया — tight conditions के under अपने members के लिए collect करती co-operative credit societies — वो ordinary business के लिए irrelevant है.)

और क्योंकि आज issue होते ज़्यादातर cheque books **account-payee crossing के साथ pre-printed** आती हैं, 2026 में Indian endorsement law की honest summary एक epitaph की तरह पढ़ती है: doctrine ज़िंदा है, चारों types अभी examinable हैं, और वो instrument जो आपको इन्हें use करने देता वो nearly extinct है. Crossings का full map — general, special, account payee, और हर एक क्या permit करती है — [अपनी अलग guide](https://cheqify.app/hi/blog/crossed-cheque-vs-account-payee) है.

### [H2] Customer का Cheque Vendor को Endorse करना — Honest Business Answer

वो tempting move जो हर trader ने कम से कम एक बार consider किया है: customer का ₹40,000 का cheque drawer में बैठा है, vendor का ₹40,000 owed है, और arithmetic एक single signature बन जाने की भीख माँगता है. क्या आप इसे endorse कर सकते हैं?

सिर्फ़ तभी जब तीन stars align हों. Customer का cheque एक **uncrossed order cheque** (या bearer cheque) होना चाहिए — जो, 2026 में, almost कभी नहीं होता. आपका vendor एक third-party instrument accept करने को willing होना चाहिए. और आपके vendor का bank इसे collect करने को agree होना चाहिए — कई banks अब third-party cheques को fraud-control policy के तौर पर outright refuse करते हैं, doctrine technically चाहे जो permit करे. तीन conditions, हर एक individually unlikely, आपस में multiplied.

Cleaner pattern एक extra clearing day cost करता है और बहुत कुछ ख़रीदता है: **customer का cheque अपने own account में deposit करें, फिर vendor को अपने own cheque से pay करें.** आपकी books एक receipt और एक payment दिखाती हैं, sideways गायब हुई payment नहीं; GST और audit trails legible रहते हैं; और transaction का हर leg एक document है जो आप अपनी own cheque book से control करते हैं. Endorsement एक leaf बचाता है और ledger को गंदा करता है. एक business के लिए, वो trade कभी worth नहीं है.

### [H2] Liability Back पर सवार रहती है

Endorsement के साथ एक और चीज़ travel करती है, और यही वजह है कि इस act को इसके twilight में भी respect करें: **liability**. NI Act के under, हर endorser effectively उस हर person को instrument guarantee करता है जो उसके बाद इसे लेता है. अगर cheque endorsee के हाथों में bounce होता है, तो claim chain से ऊपर वापस आता है — आप तक.

> **Endorsement banking का इकलौता signature है जो paper छोड़ देने के बाद भी काम करता रहता है — back पर हर नाम तब तक hook पर रहता है जब तक cheque finally clear न हो जाए.**

इसे vendor scenario में play out करें. आप customer का cheque अपने vendor को endorse करते हैं; customer का account सूखा निकलता है; cheque unpaid return होता है. आपके vendor का remedy आपके customer के against नहीं है — जो उनके लिए एक stranger है — वो *आपके* against है, वो endorser जिसने paper hand over किया. आपने एक ऐसे cheque पर dishonour problem inherit की है जो आपने कभी लिखा ही नहीं, एक working relationship को collateral बनाकर. (Act एक *sans recourse* endorsement permit करता है — "without recourse to me" — जो ये liability disclaim करता है, पर commercially एक offer करके देखें और vendor की smile कितनी fast fade होती है वो देखें.)

पूरे subject का quiet takeaway: cheque की back एक formality नहीं है. ये instrument का वो इकलौता part है जहाँ *आपका* pen, drawer का नहीं, decide करता है कि आगे क्या होता है — तो जब वहाँ एक signature जाए, तो उसके आसपास right words के साथ जाए, या इस clear understanding के साथ कि किसी word की ज़रूरत नहीं है.

---

> **आपका issue किया हर cheque, print से clearing तक tracked — handover के बाद क्या हुआ इसका कोई guessing नहीं.** Cheqify 300+ Indian bank layouts पर auto amount-in-words के साथ account-payee cheques print करता है, और इसका lifecycle register हर leaf की journey record करता है — issued, deposited, cleared, bounced — ताकि आपकी books कभी memory पर या back पर किसी ने क्या लिखा इस पर depend न करें. 100% free. [app.cheqify.app पर start करें](https://app.cheqify.app/register).

---

## Body (Gujarati)

> **Editor note:** Paste into Sanity's Body (Gujarati). Gujlish blend, same structure as English. Keep the pull-quote and CTA callout.

---

Teller તમારો cheque glass ની નીચેથી પાછો slide કરે છે અને ચાર words કહે છે: "Sign the back, please."

આપણામાંથી મોટાભાગના બીજા વિચાર વગર obey કરીએ છીએ — same pen, same signature, દસ seconds. જે almost કોઈ નથી પૂછતું એ છે કે એ signature એ હમણાં *કર્યું* શું. કારણ કે cheque ની back પર એક signature identification નથી. આ એક legal act છે જેનું નામ એકસો ચાળીસ વર્ષ જૂનું છે, અને એની આસપાસ લખેલા words ની depending પર, આ પૈસા કોઈ stranger ને transfer કરી શકે છે, એને એક single account સાથે lock કરી શકે છે, કે quietly તમને એક એવી payment માટે liable બનાવી શકે છે જે તમે ક્યારેય owe જ નથી કરી.

એ act છે **endorsement**. આ એની guide છે: cheque ની back legally શેના માટે છે, endorsement ના ચાર kinds અને દરેક શું કરે છે, એ signature rules જે bankers actually check કરે છે (એ misspelt-name convention સહિત જે દરેક counter clerk જાણે છે), અને modern wall — account-payee crossing — જેણે banking ના આ chapter ના મોટાભાગના હિસ્સાને history બનાવી દીધો છે. જો તમે business ચલાવો છો અને ક્યારેય customer નો cheque સીધો vendor ને pass કરવા tempted થયા છો, તો last બે sections તમારા માટે લખાયા છે.

### [H2] Endorsement Actually છે શું

Negotiable Instruments Act, 1881 — એ law જેની under દરેક Indian cheque જીવે છે — આને Section 15 માં define કરે છે: જ્યારે cheque નો holder આને **negotiation ના purpose થી sign કરે છે, usually back પર**, એ signature એક endorsement છે. Negotiation transfer માટે Act નો word છે. Signer (**endorser**) cheque નો દરેક right receiver (**endorsee**) ને pass કરે છે, જે આને payment માટે present કરી શકે છે — કે આગળ ફરી endorse કરી શકે છે. એક cheque endorsements ની આખી chain carry કરી શકે છે, દરેક holder relay runner ની જેમ baton pass કરતાં એક signature add કરે છે.

એ transfer sense છે. એક humbler, everyday sense પણ છે: જ્યારે તમે તમારા *own* account માં cheque deposit કરો છો અને bank તમને back sign કરવા કહે છે, કંઈ negotiate નથી થઈ રહ્યું — તમે cheque કોઈને transfer નથી કરી રહ્યા. એ signature એક bank-side habit છે: part receipt, part identity confirmation, part bank માટે protection જો પછી કોઈ dispute surface થાય. Harmless — અને named payee ના deposit કરેલા account-payee cheques માટે ઘણી banks insist પણ નથી કરતી. પણ આ જાણવા જેવું છે કે paper નો same patch બંને meanings carry કરે છે, જે exactly કારણ છે કે back-of-cheque signature ની આસપાસ તમે શું *લખો* છો એ signature જેટલું જ matter કરે છે.

### [H2] Endorsement ના ચાર Kinds — અને દરેક શું કરે છે

Signature ની બાજુના words બધું decide કરે છે. ચાર patterns field cover કરે છે:

**1. Blank (general) endorsement — ફક્ત signature.** Payee બસ sign કરે છે, કોઈ words નહીં. Legally, આ એક order cheque ને **bearer instrument** માં convert કરે છે: જે પણ paper પકડ્યું છે એ હવે પૈસા claim કરી શકે છે. આ જ એની આખી problem છે. Rickshaw માં folder માંથી સરકેલો એક blank-endorsed cheque, practically speaking, એનો છે જે એને ઉઠાવી લે. જો ક્યારેય blank endorse કરો, bank counter પર કરો — ત્યાંની ride પહેલા નહીં.

**2. Full (special) endorsement — "Pay to [Name]" + signature.** Endorser signature ની ઉપર *Pay to Sunil Traders* લખે છે. હવે ફક્ત Sunil Traders cheque collect કરી શકે છે કે આગળ endorse કરી શકે છે. કોઈ પણ deliberate transfer માટે આ જ correct form છે — cheque દરેક step પર એક named owner સાથે order instrument રહે છે.

**3. Restrictive endorsement — "Pay [Name] only" + signature.** એક word — *only* — દરવાજો બંધ કરી દે છે. Sunil Traders collect કરી શકે છે, પણ cheque આગળ endorse નથી કરી શકતા; negotiation ત્યાં જ ખતમ. જ્યારે પણ તમે ઇચ્છો કે transfer final હોય, આને use કરો — જે એક business માટે essentially હંમેશા છે.

**4. Conditional endorsement — "Pay [Name] on delivery of goods" + signature.** Transfer સાથે એક condition સવાર થાય છે. જાણવા જેવો catch: condition endorser અને endorsee ને *અંદરોઅંદર* bind કરે છે, પણ **paying bank આને entirely ignore કરે છે** — bank નું કામ instrument છે, તમારો contract નહીં. Practice માં rare, અને business dealings થી આખું બહાર રાખવું best છે; condition ની જગ્યા agreement માં છે, cheque પર નહીં.

Completeness માટે એક વધુ pattern: **બે payees ને jointly** payable એક cheque ("Rakesh Sharma and Sunil Verma") ને back પર *બંને* signatures જોઈએ — કોઈ એક એકલું એક incomplete endorsement છે, અને banks આને એમ જ return કરે છે.

### [H2] Correctly Endorse કેવી રીતે કરવું — એ Rules જે Bankers Actually Check કરે છે

Mechanics ત્રીસ seconds લે છે; આને ખોટું કરવાનો return memo એક અઠવાડિયું. Rules:

- **Exactly એમ sign કરો જેમ front વંચાય છે.** જો drawer એ payee line પર *Rakesh Kumar Sharma* લખ્યું છે, back પર *Rakesh Kumar Sharma* હોવું જોઈએ — *R.K. Sharma* નહીં, delivery slips પર use થતું stylised squiggle નહીં. Bank endorsement ને payee name સાથે match કરે છે, character for character. (Payee line ને પહેલી જગ્યાએ સાચી લખવી [પોતાની અલગ field-by-field discipline](https://cheqify.app/gu/blog/how-to-fill-cheque-correctly) છે.)
- **Misspelt-name rule.** જો drawer એ તમારું નામ બગાડી દીધું — *Rakesh* ની જગ્યાએ *Rakhesh* — તો પહેલા wrong spelling sign કરો, exactly જેમ લખી છે, પછી એની નીચે તમારું correct name sign કરો. બે signatures, એકની નીચે એક. દરેક banker આ convention જાણે છે; બંને મળીને certify કરે છે "named person, spelling ગમે તે હોય, હું જ છું."
- **Back નો top, blue કે black ink, કોઈ corrections નહીં.** Reverse ના top portion માં endorse કરો, compact રાખો, અને ક્યારેય overwrite ન કરો. એક scratched-out endorsement એ જ રીતે return invite કરે છે જેમ corrected payee line.
- **Companies અને firms પોતાની capacity માં sign કરે છે.** Endorse (કે simply deposit) કરતું એક business પોતાના authorised signatory થી sign કરે છે: rubber stamp *For XYZ Trading Pvt Ltd*, signature, designation. Capacity stamp વગર એક bare signature signatory ને instrument પર personally exposed છોડી શકે છે — stamp decoration નથી.

### [H2] Account-Payee Wall — મોટાભાગના Cheques હવે Endorse કેમ નથી થઈ શકતા

અહીં છે એ section જે આ subject પર અડધી જૂની advice ને obsolete બનાવી દે છે. જો એક cheque **"Account Payee"** crossed છે — બે parallel lines જેમની વચ્ચે *A/c Payee* લખ્યું છે — તો banking practice, RBI directions, અને court-recognised custom બધા એક જ instruction પર converge કરે છે: proceeds **ફક્ત named payee ના bank account** માં credit થઈ શકે છે. કોઈ endorsee ને નહીં. કોઈ helpful relative ને નહીં. Named payee નું own account, full stop.

જેનો મતલબ છે કે એક account-payee cheque **practice માં કોઈ third party ને endorse થઈ જ નથી શકતો**. તમે back પર જેટલું elaborate ઇચ્છો sign કરો; કોઈ collecting bank cheque તમારા સિવાય કોઈના માટે accept નહીં કરે. RBI એ આને CTS era માં એક plainly practical reason થી reinforce કર્યું — cheques હવે banks ની વચ્ચે images ની જેમ travel કરે છે, અને એક scan ને તાકતી paying bank એ paper પર ink endorsements ની chain verify નથી કરી શકતી જે એ ક્યારેય physically પકડશે જ નહીં. (RBI એ જે એક narrow carve-out allow કર્યો — tight conditions ની under પોતાના members માટે collect કરતી co-operative credit societies — એ ordinary business માટે irrelevant છે.)

અને કારણ કે આજે issue થતી મોટાભાગની cheque books **account-payee crossing સાથે pre-printed** આવે છે, 2026 માં Indian endorsement law ની honest summary એક epitaph ની જેમ વંચાય છે: doctrine જીવતી છે, ચારેય types હજુ examinable છે, અને એ instrument જે તમને આ use કરવા દેત એ nearly extinct છે. Crossings નો full map — general, special, account payee, અને દરેક શું permit કરે છે — [પોતાની અલગ guide](https://cheqify.app/gu/blog/crossed-cheque-vs-account-payee) છે.

### [H2] Customer નો Cheque Vendor ને Endorse કરવો — Honest Business Answer

એ tempting move જે દરેક trader એ ઓછામાં ઓછું એક વાર consider કર્યો છે: customer નો ₹40,000 નો cheque drawer માં બેઠો છે, vendor નું ₹40,000 owed છે, અને arithmetic એક single signature બની જવાની ભીખ માંગે છે. શું તમે આને endorse કરી શકો?

ફક્ત ત્યારે જ્યારે ત્રણ stars align થાય. Customer નો cheque એક **uncrossed order cheque** (કે bearer cheque) હોવો જોઈએ — જે, 2026 માં, almost ક્યારેય નથી હોતો. તમારો vendor એક third-party instrument accept કરવા willing હોવો જોઈએ. અને તમારા vendor ની bank આને collect કરવા agree હોવી જોઈએ — ઘણી banks હવે third-party cheques ને fraud-control policy તરીકે outright refuse કરે છે, doctrine technically ગમે તે permit કરે. ત્રણ conditions, દરેક individually unlikely, અંદરોઅંદર multiplied.

Cleaner pattern એક extra clearing day cost કરે છે અને ઘણું બધું ખરીદે છે: **customer નો cheque તમારા own account માં deposit કરો, પછી vendor ને તમારા own cheque થી pay કરો.** તમારી books એક receipt અને એક payment બતાવે છે, sideways ગાયબ થયેલી payment નહીં; GST અને audit trails legible રહે છે; અને transaction નો દરેક leg એક document છે જે તમે તમારી own cheque book થી control કરો છો. Endorsement એક leaf બચાવે છે અને ledger ને ગંદો કરે છે. એક business માટે, એ trade ક્યારેય worth નથી.

### [H2] Liability Back પર સવાર રહે છે

Endorsement સાથે એક વધુ વસ્તુ travel કરે છે, અને આ જ કારણ છે કે આ act ને એના twilight માં પણ respect કરો: **liability**. NI Act ની under, દરેક endorser effectively એ દરેક person ને instrument guarantee કરે છે જે એના પછી આને લે છે. જો cheque endorsee ના હાથમાં bounce થાય છે, તો claim chain થી ઉપર પાછો આવે છે — તમારા સુધી.

> **Endorsement banking નું એકમાત્ર signature છે જે paper છોડી દીધા પછી પણ કામ કરતું રહે છે — back પરનું દરેક નામ ત્યાં સુધી hook પર રહે છે જ્યાં સુધી cheque finally clear ન થાય.**

આને vendor scenario માં play out કરો. તમે customer નો cheque તમારા vendor ને endorse કરો છો; customer નું account સૂકું નીકળે છે; cheque unpaid return થાય છે. તમારા vendor નો remedy તમારા customer ની against નથી — જે એમના માટે એક stranger છે — એ *તમારી* against છે, એ endorser જેણે paper hand over કર્યું. તમે એક એવા cheque પર dishonour problem inherit કરી છે જે તમે ક્યારેય લખ્યો જ નથી, એક working relationship ને collateral બનાવીને. (Act એક *sans recourse* endorsement permit કરે છે — "without recourse to me" — જે આ liability disclaim કરે છે, પણ commercially એક offer કરી જુઓ અને vendor ની smile કેટલી fast fade થાય છે એ જુઓ.)

આખા subject નો quiet takeaway: cheque ની back એક formality નથી. આ instrument નો એ એકમાત્ર part છે જ્યાં *તમારો* pen, drawer નો નહીં, decide કરે છે કે આગળ શું થાય છે — તો જ્યારે ત્યાં એક signature જાય, તો એની આસપાસ right words સાથે જાય, કે આ clear understanding સાથે કે કોઈ word ની જરૂર નથી.

---

> **તમારો issue કરેલો દરેક cheque, print થી clearing સુધી tracked — handover પછી શું થયું એનું કોઈ guessing નહીં.** Cheqify 300+ Indian bank layouts પર auto amount-in-words સાથે account-payee cheques print કરે છે, અને એનું lifecycle register દરેક leaf ની journey record કરે છે — issued, deposited, cleared, bounced — જેથી તમારી books ક્યારેય memory પર કે back પર કોઈએ શું લખ્યું એના પર depend ન કરે. 100% free. [app.cheqify.app પર start કરો](https://app.cheqify.app/register).

---

## Internal-Link Strategy

**Forward links from this post (LIVE targets only):**
- Post #19 (`how-to-fill-cheque-correctly`) — the payee line on the front, linked from the sign-exactly-as-written rule. LIVE — safe.
- Post #27 (`crossed-cheque-vs-account-payee`) — the crossing map, linked from the account-payee wall section. LIVE — safe. This is the strongest sibling of the cluster: crossing is *why* endorsement is nearly dead.

**Bonus internal-link work (after publish):**
- Edit post #27 (`crossed-cheque-vs-account-payee`, all 3 locales) to add a "and this is why an account-payee cheque can't be endorsed onward" link here — strongest reciprocal.
- Edit post #19 (`how-to-fill-cheque-correctly`, all 3 locales) to add a "what happens on the back of the cheque" link here.

---

## Pre-Publish Quality Gate

- **AI-detector score:** Must hit Human ≥90% / AI ≤10% per `[[feedback_blog_low_ai_score]]`. The teller-window opening, the relay-runner and epitaph imagery, and the three-stars-multiplied vendor arithmetic carry the voice.
- **Fact-check before publish (CRITICAL):**
  1. **NI Act Section 15** — endorsement definition (signing for negotiation, usually on the back or on a slip/allonge). Stable; verify wording.
  2. **Blank endorsement → bearer effect** — Sections 16/54 territory; the "order cheque becomes bearer" framing is standard doctrine. Verify.
  3. **Account-payee crossing = credit only to named payee's account** — banking custom recognised by the Supreme Court; RBI's CTS-era instruction barring third-party collection of account-payee cheques, with the narrow co-operative credit society exception (sub-member collection under conditions, small-value cap). Verify the current circular text and any value cap before publish.
  4. **Endorser liability** — Section 35 NI Act (every endorser liable to subsequent parties unless contrary provision); *sans recourse* endorsement under Section 52. Verify sections.
  5. **Joint payees need all endorsements** — standard practice under Section 45 territory; kept directional, verify.
  6. **Misspelt-name double-signature convention** — universal banking practice, not statute; framed as convention in the body. Safe as framed.
- **Internal link order:** #19 and #27 are both LIVE — safe, no sequencing risk.
- **Word count:** EN body must be >1200 words (target 1,700–2,100). Current draft: ~1,850 words.
- **Sanity toggles:** `isHowTo: ON` (5 steps), `hasFaq: ON` (7 items).
- **Slug check after publish:** paste-verify the slug reads exactly `cheque-endorsement-explained-india` per `[[project_sanity_slug_corruption_gotcha]]`.

---

## After Publish

1. Run `npm run blog:index`.
2. Move new URLs into the next available block in the GSC indexing queue.
3. Confirm sitemap.xml after Netlify rebuild.
4. Bonus reciprocal-link work — post #27 first (strongest reciprocal), then post #19.
5. IndexNow auto-pings on publish.
