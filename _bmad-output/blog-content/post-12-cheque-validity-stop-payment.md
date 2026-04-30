# Blog Post #12 — Cheque Validity + Stop Payment (Operational Workflow)

## How to Use This Document (Field-by-Field → Sanity Studio)

| Doc section | Sanity field | Purpose |
|---|---|---|
| Slug, Tags, Author, Order, Is HowTo, Has FAQ | `slug`, `tags`, `author`, `order`, `isHowTo`, `hasFaq` | URL, taxonomy, sort order, and which optional schema blocks render. |
| Scheduled publish date | Sanity "Publish schedule" | Triggers the post going live. |
| Primary/Secondary keywords, Reading time, URLs | *reference only* | Guides writing focus and GSC indexing. |
| Cover Image | `image` (required) | Blog card, hero, and Open Graph / Twitter preview. |
| Titles (EN/HI/GU) | `title_en`, `title_hi`, `title_gu` | Rendered as `<h1>` AND as `<title>` / `og:title` / `twitter:title` meta tags. |
| Descriptions (EN/HI/GU) | `description_en`, `description_hi`, `description_gu` | Rendered as `<meta name="description">`, `og:description`, `twitter:description`. |
| Body (EN/HI/GU) | `body_en`, `body_hi`, `body_gu` | The actual article content. |
| CTA Block (EN/HI/GU) | *pasted as the LAST paragraph of each `body_*`* | Conversion element — drives app.cheqify.app signups. Not a separate Sanity field. |
| HowTo Steps | `howToSteps` | Only when `isHowTo = true`. Generates Google HowTo rich snippet. |
| FAQ Items | `faqItems` | When `hasFaq = true`. Generates FAQPage schema → "People Also Ask". |

---

## Why This Topic

Two adjacent high-intent queries combined — "cheque validity in India" and "how to stop payment on cheque" are both searched heavily, neither is covered by your 10 published posts. This post captures both intents with one article and fills the operational-workflow gap between your existing security and printing posts.

---

## Sanity Fields

- **Slug:** `cheque-validity-period-stop-payment-india`
- **Tags:** `Banking & RBI`, `Cheque Guide`
- **Author:** Cheqify Team
- **Order:** verify current max `order` in Sanity and set to `max + 2` (publishes right after Post #11)
- **Is HowTo:** YES (stop-payment is a step-by-step)
- **Has FAQ:** YES

---

## Publishing Metadata

- **Scheduled publish date:** Thursday 2026-04-30, 10:00 IST
- **Primary keyword:** `cheque validity period india`
- **Secondary keywords:** how to stop payment on cheque, stale cheque, cheque cancellation, 3 month cheque rule
- **Reading time:** ~6 min
- **Final URLs:**
  - EN: `https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india`
  - HI: `https://cheqify.app/hi/blog/cheque-validity-period-stop-payment-india`
  - GU: `https://cheqify.app/gu/blog/cheque-validity-period-stop-payment-india`

---

## Cover Image (Required)

- **Dimensions:** 1200 × 630 px
- **Format:** WebP (quality 80)
- **Filename:** `cheque-validity-stop-payment-cover.webp`
- **Subject:** Calendar with "3 months" highlight on one side + bank counter with "STOP PAYMENT" stamp on the other. Clean, informative.
- **Alt text:** Cheque validity period and how to stop payment in India.
- **OG image:** Same as cover.

---

## Titles

- **EN:** Cheque Validity Period in India & How to Stop Payment (2026 Guide)
- **HI:** भारत में चेक की वैधता अवधि और भुगतान कैसे रोकें (2026 गाइड)
- **GU:** ભારતમાં ચેકની માન્યતા અવધિ અને ચુકવણી કેવી રીતે અટકાવવી (2026 ગાઇડ)

---

## Descriptions

- **EN:** Cheques in India are valid for 3 months from the date of issue. Learn the stale cheque rule, how to stop payment on a cheque, fees, timelines, and legal impact — full 2026 guide.
- **HI:** भारत में चेक जारी होने की तारीख से 3 महीने तक वैध होते हैं। स्टेल चेक नियम, चेक पर भुगतान कैसे रोकें, शुल्क, समय सीमा और कानूनी प्रभाव — पूर्ण 2026 गाइड।
- **GU:** ભારતમાં ચેક જારી થયાની તારીખથી 3 મહિના માટે માન્ય હોય છે. સ્ટેલ ચેક નિયમ, ચેક પર ચુકવણી કેવી રીતે અટકાવવી, ફી, સમય મર્યાદા અને કાનૂની અસર — સંપૂર્ણ 2026 ગાઇડ.

---

## HowTo Steps (fill in Sanity HowTo section)

> Note: The Sanity schema stores HowTo steps in English only.

1. **Identify the cheque** — Note the cheque number, amount, payee name, and date of the cheque you want to stop.
2. **Contact your bank immediately** — Call the branch or use the net banking / mobile app stop-payment facility. Speed matters — if the cheque is presented before your instruction reaches the bank, it will clear.
3. **Submit written instruction** — Fill the stop-payment form at the branch OR submit via net banking with all cheque details.
4. **Pay the stop-payment fee** — Typically ₹100–₹300 depending on the bank and account type.
5. **Get confirmation** — Obtain written or SMS confirmation of the stop-payment instruction from the bank.
6. **Monitor for 3 months** — The stop-payment instruction remains active until the cheque expires (becomes stale) or you cancel the instruction.

---

## Body (English)

Paste the following into Sanity's Body (English) rich text editor. Use heading buttons for H2/H3. Insert internal links using the anchors listed below.

---

### [H2] The 3-Month Rule: Cheque Validity in India

The Reserve Bank of India issued a circular in April 2012 that reduced cheque validity from 6 months to 3 months. This rule applies uniformly to all cheques, demand drafts, and pay orders issued in India.

The 3-month clock starts from the date written on the cheque itself — not from the date you received it, and not from the date it was issued. So if a cheque is dated 1 January, it must be presented to the bank on or before 31 March.

### [H2] What is a Stale Cheque?

A cheque presented after its 3-month validity is called a "stale cheque" or "time-barred cheque." Banks will return such cheques unpaid with the remark "stale cheque" or "exceeds validity period."

Importantly, this kind of return is **not** a Section 138 criminal offence. It is an administrative dishonour — the cheque simply lost its legal force. You cannot file a criminal case against the drawer for presenting a stale cheque late; the fault is with the payee for missing the deadline.

### [H2] Can a Stale Cheque Be Revalidated?

If a cheque you hold has gone stale, it can still be made valid again, but only by the drawer. There are two options:

The drawer can write a fresh cheque with a new date. This is the cleanest option and is usually what banks recommend.

Alternatively, the drawer can re-date the original cheque by writing the new date above the old one and signing next to the correction with their full signature. Not all banks accept altered cheques — so confirm first before relying on this option.

### [H2] How to Stop Payment on a Cheque — Step by Step

Stop payment is a formal instruction you give to your bank telling them not to honour a specific cheque when presented. Here is exactly how to do it.

### [H3] Step 1: Identify the Cheque

Note down the cheque number, amount, payee name, and the date on the cheque. Without these details, the bank cannot process your stop-payment instruction accurately.

### [H3] Step 2: Contact Your Bank Immediately

Speed is critical. If the cheque is presented for clearance before your stop-payment instruction reaches the bank, the cheque will clear and you will have lost the money. Call the branch immediately, or use the stop-payment option in your net banking / mobile banking app.

### [H3] Step 3: Submit Written Instruction

Whether you use net banking or the branch, the stop-payment must eventually be recorded in writing. Fill the stop-payment form with the cheque details or submit the online form in your banking app.

### [H3] Step 4: Pay the Stop-Payment Fee

Banks charge a fee for stop-payment instructions — typically between ₹100 and ₹300 per cheque for savings accounts, and slightly higher for current accounts. Some banks waive the fee for cheques reported as lost or stolen.

### [H3] Step 5: Get Confirmation

Never leave the branch or close the banking app without a confirmation — either a stamped acknowledgement slip, an SMS, or an email. This is your proof that the instruction was received.

### [H3] Step 6: Monitor for 3 Months

The stop-payment instruction stays active until the cheque expires (becomes stale) or until you formally cancel the instruction. Monitor the account for 3 months to confirm the cheque was not cleared despite the stop-payment.

### [H2] When Can You Stop Payment Legitimately?

Stop payment is intended for genuine situations, not as a tool to avoid paying legitimate debts. Legitimate reasons include:

- The cheque was lost or stolen after you issued it.
- The payee and you have a genuine dispute that has made the transaction void.
- You wrote the wrong amount or wrong payee name on the cheque.
- The cheque was issued by mistake — for example, issued twice for the same payment.

### [H2] When Stop Payment Becomes Risky

Here is the part many people miss: stop payment does not automatically protect you from legal consequences.

If the cheque was issued for a genuine, legally enforceable debt and you stop payment to avoid paying, the payee can still file a Section 138 case against you. The Negotiable Instruments Act treats "payment stopped by drawer" as a form of dishonour — it is legally equivalent to a cheque bouncing due to insufficient funds.

So if you are considering stop payment to escape a real obligation, get legal advice first. There are usually better options — renegotiation, partial payment, or mediation — that do not expose you to criminal liability.

### [H2] How Cheque Tracking Prevents Stop-Payment Headaches

Most stop-payment situations start from chaos: a cheque book is misplaced, a duplicate cheque is issued, or a vendor disputes an already-issued cheque. The common cause is the same — lack of a single record of what was issued, to whom, for how much.

Cheqify fixes this by logging every cheque you issue: payee, amount, date, cheque number, and status. When you need to stop a payment, you know exactly which cheque number to reference. When a vendor claims "I never received it," you can check the status instantly. Most stop-payment scenarios can be avoided altogether with disciplined tracking.

### [H2] Conclusion

Cheque validity in India is 3 months from the date on the cheque. Stop payment is a legal right of the drawer, but it is not a shield against Section 138 if the underlying debt is genuine. Use both carefully, and always keep a complete record of every cheque you issue.

---

## Body (Hindi)

Paste the following into Sanity's Body (Hindi) rich text editor:

---

### [H2] 3-महीने का नियम: भारत में चेक की वैधता

भारतीय रिज़र्व बैंक ने अप्रैल 2012 में एक सर्कुलर जारी किया जिसने चेक की वैधता 6 महीने से घटाकर 3 महीने कर दी। यह नियम भारत में जारी सभी चेक, डिमांड ड्राफ्ट, और पे ऑर्डर पर समान रूप से लागू होता है।

3 महीने की अवधि चेक पर लिखी तारीख से शुरू होती है — उस तारीख से नहीं जब आपने इसे प्राप्त किया, और न ही जारी होने की तारीख से। इसलिए अगर चेक की तारीख 1 जनवरी है, तो इसे 31 मार्च या उससे पहले बैंक में प्रस्तुत किया जाना चाहिए।

### [H2] स्टेल चेक क्या है?

3 महीने की वैधता के बाद प्रस्तुत किया गया चेक "स्टेल चेक" या "time-barred cheque" कहलाता है। बैंक ऐसे चेकों को "stale cheque" या "exceeds validity period" की टिप्पणी के साथ अदत्त लौटा देते हैं।

महत्वपूर्ण बात यह है कि इस प्रकार की वापसी धारा 138 का आपराधिक अपराध **नहीं** है। यह एक प्रशासनिक अनादर (administrative dishonour) है — चेक ने बस अपनी कानूनी शक्ति खो दी। आप स्टेल चेक को देर से प्रस्तुत करने के लिए drawer के खिलाफ आपराधिक मामला दर्ज नहीं कर सकते; गलती समय सीमा चूकने के लिए प्राप्तकर्ता की है।

### [H2] क्या स्टेल चेक को फिर से वैध किया जा सकता है?

अगर आपके पास एक चेक है जो स्टेल हो गया है, तो इसे फिर से वैध बनाया जा सकता है, लेकिन केवल drawer द्वारा। दो विकल्प हैं:

drawer नई तारीख के साथ एक नया चेक लिख सकता है। यह सबसे साफ विकल्प है और आमतौर पर बैंक इसी की सिफारिश करते हैं।

वैकल्पिक रूप से, drawer पुरानी तारीख के ऊपर नई तारीख लिखकर और सुधार के बगल में अपना पूरा हस्ताक्षर करके मूल चेक को re-date कर सकता है। सभी बैंक बदले हुए चेक स्वीकार नहीं करते — इसलिए इस विकल्प पर भरोसा करने से पहले पुष्टि कर लें।

### [H2] चेक पर भुगतान कैसे रोकें — स्टेप बाय स्टेप

Stop payment एक औपचारिक निर्देश है जो आप अपने बैंक को देते हैं ताकि जब कोई विशिष्ट चेक प्रस्तुत हो तो वे उसे स्वीकार न करें। यह ठीक से कैसे करें।

### [H3] स्टेप 1: चेक की पहचान करें

चेक नंबर, राशि, प्राप्तकर्ता का नाम, और चेक पर लिखी तारीख नोट करें। इन विवरणों के बिना, बैंक आपके stop-payment निर्देश को सटीक रूप से प्रोसेस नहीं कर सकता।

### [H3] स्टेप 2: तुरंत अपने बैंक से संपर्क करें

गति महत्वपूर्ण है। अगर आपका stop-payment निर्देश बैंक पहुंचने से पहले चेक क्लीयरेंस के लिए प्रस्तुत कर दिया जाता है, तो चेक क्लियर हो जाएगा और आप पैसे खो देंगे। तुरंत शाखा को कॉल करें, या अपने नेट बैंकिंग / मोबाइल बैंकिंग ऐप में stop-payment विकल्प का उपयोग करें।

### [H3] स्टेप 3: लिखित निर्देश जमा करें

चाहे आप नेट बैंकिंग का उपयोग करें या शाखा का, stop-payment अंततः लिखित रूप में दर्ज होना चाहिए। चेक विवरण के साथ stop-payment फॉर्म भरें या अपने बैंकिंग ऐप में ऑनलाइन फॉर्म जमा करें।

### [H3] स्टेप 4: Stop-Payment शुल्क का भुगतान करें

बैंक stop-payment निर्देशों के लिए शुल्क लेते हैं — सेविंग्स अकाउंट के लिए आमतौर पर प्रति चेक ₹100 से ₹300 के बीच, और करंट अकाउंट के लिए थोड़ा अधिक। कुछ बैंक खोए या चोरी हुए चेकों के लिए शुल्क माफ कर देते हैं।

### [H3] स्टेप 5: पुष्टि प्राप्त करें

बिना पुष्टि प्राप्त किए कभी शाखा न छोड़ें या बैंकिंग ऐप बंद न करें — चाहे वह मुहर लगी पावती पर्ची, SMS, या ईमेल हो। यह आपका प्रमाण है कि निर्देश प्राप्त हो गया था।

### [H3] स्टेप 6: 3 महीने तक निगरानी करें

Stop-payment निर्देश तब तक सक्रिय रहता है जब तक चेक समाप्त (स्टेल) नहीं हो जाता या जब तक आप औपचारिक रूप से निर्देश रद्द नहीं करते। यह पुष्टि करने के लिए 3 महीने तक खाते की निगरानी करें कि stop-payment के बावजूद चेक क्लियर नहीं हुआ।

### [H2] आप कब वैध रूप से भुगतान रोक सकते हैं?

Stop payment वास्तविक स्थितियों के लिए है, कानूनी ऋणों के भुगतान से बचने के लिए उपकरण के रूप में नहीं। वैध कारणों में शामिल हैं:

- आपके जारी करने के बाद चेक खो गया या चोरी हो गया।
- प्राप्तकर्ता और आपके बीच वास्तविक विवाद है जिसने लेनदेन को अमान्य कर दिया है।
- आपने चेक पर गलत राशि या गलत प्राप्तकर्ता का नाम लिखा।
- चेक गलती से जारी किया गया — उदाहरण के लिए, एक ही भुगतान के लिए दो बार जारी।

### [H2] Stop Payment कब जोखिम भरा हो जाता है

यहां एक बात है जो कई लोग नहीं जानते: stop payment आपको कानूनी परिणामों से स्वचालित रूप से सुरक्षित नहीं करता।

अगर चेक एक वास्तविक, कानूनी रूप से लागू ऋण के लिए जारी किया गया था और आप भुगतान से बचने के लिए stop payment लगाते हैं, तो प्राप्तकर्ता अभी भी आपके खिलाफ धारा 138 का मामला दर्ज कर सकता है। Negotiable Instruments Act "payment stopped by drawer" को अनादर के एक रूप के रूप में मानता है — यह कानूनी रूप से अपर्याप्त धन के कारण चेक बाउंस होने के बराबर है।

इसलिए अगर आप वास्तविक दायित्व से बचने के लिए stop payment पर विचार कर रहे हैं, तो पहले कानूनी सलाह लें। आमतौर पर बेहतर विकल्प होते हैं — पुनर्बातचीत, आंशिक भुगतान, या मध्यस्थता — जो आपको आपराधिक दायित्व के संपर्क में नहीं लाते।

### [H2] चेक ट्रैकिंग Stop-Payment मुसीबतों को कैसे रोकती है

अधिकांश stop-payment स्थितियां अराजकता से शुरू होती हैं: एक चेक बुक खो जाती है, एक डुप्लिकेट चेक जारी होता है, या एक वेंडर पहले से जारी चेक पर विवाद करता है। सामान्य कारण एक ही है — क्या जारी किया गया, किसे, कितने के लिए — इसका एक भी रिकॉर्ड नहीं होना।

Cheqify हर जारी चेक को लॉग करके इसे ठीक करता है: प्राप्तकर्ता, राशि, तारीख, चेक नंबर, और स्थिति। जब आपको भुगतान रोकने की जरूरत होती है, तो आप ठीक से जानते हैं कि किस चेक नंबर का संदर्भ देना है। जब वेंडर दावा करता है "मुझे कभी नहीं मिला," तो आप तुरंत स्थिति जांच सकते हैं। अधिकांश stop-payment परिदृश्यों को अनुशासित ट्रैकिंग से पूरी तरह टाला जा सकता है।

### [H2] निष्कर्ष

भारत में चेक की वैधता चेक पर लिखी तारीख से 3 महीने है। Stop payment drawer का कानूनी अधिकार है, लेकिन यह धारा 138 के खिलाफ ढाल नहीं है अगर अंतर्निहित ऋण वास्तविक है। दोनों का सावधानी से उपयोग करें, और हमेशा जारी किए गए हर चेक का पूर्ण रिकॉर्ड रखें।

---

## Body (Gujarati)

Paste the following into Sanity's Body (Gujarati) rich text editor:

---

### [H2] 3-મહિનાનો નિયમ: ભારતમાં ચેકની માન્યતા

ભારતીય રિઝર્વ બેંકે એપ્રિલ 2012 માં એક પરિપત્ર જારી કર્યો જેણે ચેકની માન્યતા 6 મહિનાથી ઘટાડીને 3 મહિના કરી. આ નિયમ ભારતમાં જારી કરાયેલા બધા ચેક, ડિમાન્ડ ડ્રાફ્ટ, અને પે ઓર્ડર પર સમાન રીતે લાગુ પડે છે.

3 મહિનાનો સમયગાળો ચેક પર લખેલી તારીખથી શરૂ થાય છે — જ્યારે તમે તેને પ્રાપ્ત કર્યો તે તારીખથી નહીં, અને જારી કર્યાની તારીખથી પણ નહીં. તો જો ચેકની તારીખ 1 જાન્યુઆરી છે, તો તેને 31 માર્ચ કે તે પહેલા બેંકમાં રજૂ કરવો પડશે.

### [H2] સ્ટેલ ચેક શું છે?

3 મહિનાની માન્યતા પછી રજૂ કરાયેલો ચેક "સ્ટેલ ચેક" કે "time-barred cheque" કહેવાય છે. બેંકો આવા ચેકોને "stale cheque" કે "exceeds validity period" ની ટિપ્પણી સાથે અચૂક પાછા આપે છે.

મહત્વની વાત એ છે કે આવા પરત આવવાને કલમ 138 નો ફોજદારી ગુનો **નથી** ગણવામાં આવતો. તે એક વહીવટી અનાદર (administrative dishonour) છે — ચેકે માત્ર તેની કાનૂની શક્તિ ગુમાવી દીધી. તમે સ્ટેલ ચેક મોડો રજૂ કરવા માટે drawer વિરુદ્ધ ફોજદારી કેસ દાખલ કરી શકતા નથી; સમય મર્યાદા ચૂકવાનો દોષ પ્રાપ્તકર્તાનો છે.

### [H2] શું સ્ટેલ ચેકને ફરીથી માન્ય કરી શકાય?

જો તમારી પાસે રહેલો ચેક સ્ટેલ થઈ ગયો છે, તો તેને ફરીથી માન્ય કરી શકાય છે, પણ માત્ર drawer દ્વારા. બે વિકલ્પો છે:

drawer નવી તારીખ સાથે નવો ચેક લખી શકે છે. આ સૌથી સ્વચ્છ વિકલ્પ છે અને બેંકો સામાન્ય રીતે આ જ ભલામણ કરે છે.

વૈકલ્પિક રીતે, drawer જૂની તારીખ ઉપર નવી તારીખ લખીને અને સુધારાની બાજુમાં પૂરો સહી કરીને મૂળ ચેકને re-date કરી શકે છે. બધી બેંકો સુધારેલા ચેક સ્વીકારતી નથી — તેથી આ વિકલ્પ પર વિશ્વાસ કરતા પહેલા પુષ્ટિ કરી લો.

### [H2] ચેક પર ચુકવણી કેવી રીતે અટકાવવી — સ્ટેપ બાય સ્ટેપ

Stop payment એ ઔપચારિક સૂચના છે જે તમે તમારી બેંકને આપો છો જેથી જ્યારે કોઈ ચોક્કસ ચેક રજૂ થાય ત્યારે તેઓ તેને સ્વીકારે નહીં. તે યોગ્ય રીતે કેવી રીતે કરવું.

### [H3] સ્ટેપ 1: ચેક ઓળખો

ચેક નંબર, રકમ, પ્રાપ્તકર્તાનું નામ, અને ચેક પર લખેલી તારીખ નોંધો. આ વિગતો વિના, બેંક તમારી stop-payment સૂચનાને સચોટ રીતે પ્રોસેસ કરી શકતી નથી.

### [H3] સ્ટેપ 2: તરત જ તમારી બેંકનો સંપર્ક કરો

ઝડપ મહત્વપૂર્ણ છે. જો તમારી stop-payment સૂચના બેંક પહોંચે તે પહેલાં ચેક ક્લિયરન્સ માટે રજૂ થઈ જાય, તો ચેક ક્લિયર થઈ જશે અને તમે પૈસા ગુમાવશો. તરત જ શાખાને કૉલ કરો, અથવા તમારી નેટ બેંકિંગ / મોબાઈલ બેંકિંગ એપમાં stop-payment વિકલ્પનો ઉપયોગ કરો.

### [H3] સ્ટેપ 3: લેખિત સૂચના સબમિટ કરો

ભલે તમે નેટ બેંકિંગ વાપરો કે શાખાનો ઉપયોગ કરો, stop-payment આખરે લેખિત સ્વરૂપમાં નોંધાયેલું હોવું જોઈએ. ચેક વિગતો સાથે stop-payment ફોર્મ ભરો અથવા તમારી બેંકિંગ એપમાં ઓનલાઈન ફોર્મ સબમિટ કરો.

### [H3] સ્ટેપ 4: Stop-Payment ફી ચૂકવો

બેંકો stop-payment સૂચનાઓ માટે ફી લે છે — સેવિંગ્સ એકાઉન્ટ માટે સામાન્ય રીતે ચેક દીઠ ₹100 થી ₹300, અને કરંટ એકાઉન્ટ માટે થોડી વધુ. કેટલીક બેંકો ખોવાયેલા કે ચોરાયેલા ચેક માટે ફી માફ કરી દે છે.

### [H3] સ્ટેપ 5: પુષ્ટિ મેળવો

ક્યારેય પુષ્ટિ મેળવ્યા વિના શાખા છોડશો નહીં કે બેંકિંગ એપ બંધ કરશો નહીં — પછી તે સ્ટેમ્પ કરેલી રસીદ હોય, SMS હોય, કે ઈમેલ હોય. આ તમારું સાબિતી છે કે સૂચના મળી હતી.

### [H3] સ્ટેપ 6: 3 મહિના સુધી દેખરેખ રાખો

Stop-payment સૂચના ત્યાં સુધી સક્રિય રહે છે જ્યાં સુધી ચેક સમાપ્ત (સ્ટેલ) ન થાય અથવા તમે ઔપચારિક રીતે સૂચના રદ ન કરો. stop-payment છતાં ચેક ક્લિયર થયો નથી તે પુષ્ટિ કરવા 3 મહિના સુધી ખાતાની દેખરેખ રાખો.

### [H2] તમે ક્યારે કાયદેસર રીતે ચુકવણી અટકાવી શકો છો?

Stop payment વાસ્તવિક પરિસ્થિતિઓ માટે છે, કાનૂની ઋણોની ચુકવણીથી બચવાના સાધન તરીકે નહીં. કાયદેસર કારણોમાં શામેલ છે:

- તમે જારી કર્યા પછી ચેક ખોવાઈ ગયો કે ચોરાઈ ગયો.
- પ્રાપ્તકર્તા અને તમારી વચ્ચે વાસ્તવિક વિવાદ છે જેણે વ્યવહારને અમાન્ય કર્યો છે.
- તમે ચેક પર ખોટી રકમ કે ખોટું પ્રાપ્તકર્તાનું નામ લખ્યું.
- ચેક ભૂલથી જારી કરાયો — દાખલા તરીકે, એક જ ચુકવણી માટે બે વાર જારી.

### [H2] Stop Payment ક્યારે જોખમી બને છે

અહીં એક વાત છે જે ઘણા લોકો ચૂકી જાય છે: stop payment તમને કાનૂની પરિણામોથી આપોઆપ સુરક્ષિત કરતું નથી.

જો ચેક વાસ્તવિક, કાનૂની રીતે લાગુ ઋણ માટે જારી કરવામાં આવ્યો હતો અને તમે ચુકવણીથી બચવા stop payment લગાવો છો, તો પ્રાપ્તકર્તા હજુ પણ તમારા વિરુદ્ધ કલમ 138 નો કેસ દાખલ કરી શકે છે. Negotiable Instruments Act "payment stopped by drawer" ને અનાદરનો એક પ્રકાર ગણે છે — તે કાનૂની રીતે અપૂરતા ભંડોળને કારણે ચેક બાઉન્સ થવા બરાબર છે.

તેથી જો તમે વાસ્તવિક જવાબદારીથી બચવા માટે stop payment વિચારી રહ્યા છો, તો પહેલાં કાનૂની સલાહ લો. સામાન્ય રીતે વધુ સારા વિકલ્પો છે — પુનઃચર્ચા, આંશિક ચુકવણી, કે મધ્યસ્થી — જે તમને ફોજદારી જવાબદારીના સંપર્કમાં લાવતા નથી.

### [H2] ચેક ટ્રૅકિંગ Stop-Payment મુશ્કેલીઓ કેવી રીતે અટકાવે છે

મોટા ભાગની stop-payment પરિસ્થિતિઓ અવ્યવસ્થામાંથી શરૂ થાય છે: ચેક બુક ખોવાઈ જાય છે, ડુપ્લિકેટ ચેક જારી થાય છે, કે વેન્ડર પહેલેથી જારી થયેલા ચેક પર વિવાદ કરે છે. સામાન્ય કારણ એક જ છે — શું જારી થયું, કોને, કેટલા માટે — તેનો એક જ રેકોર્ડ ન હોવો.

Cheqify દરેક જારી કરેલા ચેકને લૉગ કરીને આ ઠીક કરે છે: પ્રાપ્તકર્તા, રકમ, તારીખ, ચેક નંબર, અને સ્થિતિ. જ્યારે તમારે ચુકવણી અટકાવવાની જરૂર હોય, ત્યારે તમે બરાબર જાણો છો કે કયા ચેક નંબરનો સંદર્ભ આપવો. જ્યારે વેન્ડર દાવો કરે છે કે "મને ક્યારેય મળ્યું નથી," તમે તરત જ સ્થિતિ ચકાસી શકો છો. મોટા ભાગના stop-payment દૃશ્યો અનુશાસિત ટ્રૅકિંગથી સંપૂર્ણપણે ટાળી શકાય છે.

### [H2] નિષ્કર્ષ

ભારતમાં ચેકની માન્યતા ચેક પર લખેલી તારીખથી 3 મહિના છે. Stop payment એ drawer નો કાનૂની અધિકાર છે, પણ તે કલમ 138 સામે ઢાલ નથી જો અંતર્ગત ઋણ વાસ્તવિક હોય. બંનેનો સાવચેતીથી ઉપયોગ કરો, અને હંમેશા જારી કરેલા દરેક ચેકનો સંપૂર્ણ રેકોર્ડ રાખો.

---

## Internal Links — Insert Inside Body

| Anchor text (EN) | Link target |
|---|---|
| "post-dated cheques" | `/en/blog/post-dated-cheques-rules-and-best-practices` |
| "Section 138 proceedings" | `/en/blog/section-138-ni-act-cheque-bounce-india` *(link to post #11 once live)* |
| "cheque bounce" | `/en/blog/cheque-bounce-reasons-and-solutions` |
| "cheque tracking" / "lifecycle tracking" | `/en/features` |
| "free" / "zero cost" | `/en/pricing` |

---

## CTA Block (append at end of each language body)

### English
> **Never lose track of a cheque again.** Cheqify logs every cheque you issue with date, amount, and status — so stop-payment or reconciliation is instant.
>
> **[Track cheques free →](https://app.cheqify.app/register)**

### Hindi
> **फिर कभी किसी चेक का ट्रैक न खोएं।** Cheqify आपके जारी किए गए हर चेक को तारीख, राशि और स्थिति के साथ लॉग करता है — ताकि भुगतान रोकना या मिलान तुरंत हो।
>
> **[मुफ्त में चेक ट्रैक करें →](https://app.cheqify.app/register)**

### Gujarati
> **ફરી ક્યારેય કોઈ ચેકનું ટ્રૅક ન ગુમાવો.** Cheqify તમારા જારી કરેલા દરેક ચેકને તારીખ, રકમ અને સ્થિતિ સાથે લૉગ કરે છે — જેથી ચુકવણી અટકાવવી કે મિલાન તાત્કાલિક થાય.
>
> **[મફત ચેક ટ્રૅક કરો →](https://app.cheqify.app/register)**

---

## FAQ Items (fill in Sanity FAQ section)

### Q1
- **Question:** What is the validity period of a cheque in India?
- **Answer:** Under RBI guidelines, cheques, demand drafts, and pay orders are valid for 3 months from the date written on the instrument. After this period, the cheque becomes "stale" and banks will not honour it.

### Q2
- **Question:** How much does it cost to stop payment on a cheque?
- **Answer:** Stop-payment charges vary by bank — typically ₹100 to ₹300 per instruction for savings accounts, and slightly higher for current accounts. Some banks waive the fee for cheques reported lost or stolen.

### Q3
- **Question:** Can I stop payment on a cheque that has already been cleared?
- **Answer:** No. Once a cheque has been cleared and the funds have been debited from your account, stop payment cannot be placed. Stop-payment instructions must reach the bank before the cheque is presented for clearance.

### Q4
- **Question:** Does stopping payment protect me from a Section 138 case?
- **Answer:** No. If the cheque was issued for a legally enforceable debt and you stop payment to avoid paying, the payee can still file a Section 138 case against you for dishonour due to "payment stopped by drawer."

### Q5
- **Question:** How to calculate cheque validity in India?
- **Answer:** Cheque validity is calculated from the date written on the cheque (not the date of issue or signing). Add 3 calendar months to that date — that is the last day the cheque can be deposited. For example, a cheque dated 15 January 2026 is valid up to 14 April 2026. After that, it becomes stale and the bank will reject it.

### Q6
- **Question:** How to check cheque validity?
- **Answer:** Look at the date printed on the cheque and add 3 months. If today's date is on or before that, the cheque is still valid. Banks reject any cheque presented after 3 months from its written date — this is a CTS-2010 mandate from RBI.

### Q7
- **Question:** How long can a cheque be valid?
- **Answer:** A cheque, demand draft, or pay order is valid for 3 months from the date written on it. This applies to all banks in India under RBI rules effective since 1 April 2012. Older 6-month validity rules no longer apply.

### Q8
- **Question:** What is the validity of cheque date?
- **Answer:** "Validity of cheque date" refers to the 3-month window starting from the date written on the cheque. If a cheque is post-dated, the 3-month clock starts on the post-dated future date, not the date of issue.

### Q9
- **Question:** What is the bank cheque validity period in India?
- **Answer:** All Indian banks follow the same RBI rule: 3 months from the date written on the cheque. This is uniform across SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Kotak Mahindra, and every other scheduled commercial bank.

### Q10
- **Question:** Cheque ki validity kitni hoti hai?
- **Answer:** Bharat me cheque ki validity 3 mahine hoti hai — jo date cheque par likhi hai us se 3 mahine tak. RBI ke niyam ke anusaar, 3 mahine ke baad cheque "stale" ho jata hai aur bank usse accept nahi karta. Yah niyam sabhi Indian banks par lagu hota hai.

### Q11
- **Question:** What is the validity period of a cheque in India under RBI rules?
- **Answer:** RBI mandates a 3-month validity period for cheques, demand drafts, banker's cheques, and pay orders. This rule has been in force since 1 April 2012 (replacing the earlier 6-month rule). Banks must reject any instrument presented after 3 months from its written date.

---

## Post-Publish Checklist

- [ ] Cover image uploaded in Sanity; `isHowTo` + `hasFaq` toggles ON.
- [ ] 6 HowTo steps entered in `howToSteps` array.
- [ ] Scheduled publish confirmed for 2026-04-30 10:00 IST.
- [ ] Internal link to post #11 (Section 138) added once that post is live.
- [ ] GSC → URL Inspection → Request Indexing for all 3 locale URLs.
- [ ] LinkedIn post using the social copy below.
- [ ] Share in 1 Indian CA / SMB finance community.

---

## Social Copy (LinkedIn)

> Two cheque questions every Indian business eventually asks — "how long is this cheque valid?" and "how do I stop payment?" We answered both in one guide, with bank fees, timelines, and the Section 138 risk you should know before using stop-payment as a shortcut.
>
> https://cheqify.app/en/blog/cheque-validity-period-stop-payment-india
>
> #chequemanagement #MSME #India #banking
