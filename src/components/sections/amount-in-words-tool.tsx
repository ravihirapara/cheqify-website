"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Copy, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { rupeesToWords, formatIndianNumber } from "~/lib/amount-in-words";

const QUICK_AMOUNTS = [1000, 10000, 100000, 200000, 500000, 1500000];

export function AmountInWordsTool() {
  const t = useTranslations("amountInWords.tool");
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const amount = useMemo(() => {
    const cleaned = input.replace(/,/g, "").trim();
    const n = parseFloat(cleaned);
    return Number.isFinite(n) && n >= 0 ? n : null;
  }, [input]);

  const words = useMemo(() => (amount !== null ? rupeesToWords(amount) : ""), [amount]);
  const formatted = useMemo(() => (amount !== null ? formatIndianNumber(amount) : ""), [amount]);

  const handleCopy = async () => {
    if (!words) return;
    await navigator.clipboard.writeText(words);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-6 shadow-sm md:p-10">
      <label htmlFor="amount-input" className="mb-2 block text-sm font-semibold text-foreground">
        {t("label")}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
          ₹
        </span>
        <input
          id="amount-input"
          type="text"
          inputMode="decimal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("placeholder")}
          className="w-full rounded-xl border border-border bg-background py-4 pl-10 pr-4 text-lg font-medium text-foreground outline-none ring-primary/20 transition-shadow focus:ring-4"
          aria-describedby="amount-help"
        />
      </div>
      <p id="amount-help" className="mt-2 text-xs text-muted-foreground">
        {t("help")}
      </p>

      {amount !== null && (
        <div className="mt-6 rounded-xl bg-primary/5 p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            ₹ {formatted}
          </div>
          <div className="mt-2 break-words text-xl font-semibold leading-snug text-foreground md:text-2xl">
            {words}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleCopy}
            className="mt-4 h-9 px-4 text-sm"
            aria-label={t("copyAria")}
          >
            {copied ? (
              <>
                <Check className="mr-1.5 h-4 w-4" /> {t("copied")}
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-4 w-4" /> {t("copy")}
              </>
            )}
          </Button>
        </div>
      )}

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {t("quickAmounts")}
        </p>
        <div className="flex flex-wrap gap-2">
          {QUICK_AMOUNTS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setInput(String(q))}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              ₹{formatIndianNumber(q)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
