"use client";

import { useTranslations } from "next-intl";
import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";

const SUBJECT_KEYS = ["general", "support", "enterprise", "feedback"] as const;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpznqkdl";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tInfo = useTranslations("contact.info");
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border/15 bg-white p-8 shadow-[0_20px_40px_rgba(8,28,50,0.06)] dark:bg-card md:p-12">
        <CheckCircle className="mb-4 h-16 w-16 text-primary" />
        <p className="text-center text-lg font-semibold">{t("success")}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border/15 bg-white p-8 shadow-[0_20px_40px_rgba(8,28,50,0.06)] dark:bg-card md:p-12">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              {t("nameLabel")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t("namePlaceholder")}
              className="w-full rounded-xl border-none bg-muted px-5 py-4 text-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              {t("emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              className="w-full rounded-xl border-none bg-muted px-5 py-4 text-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            {t("subjectLabel")}
          </label>
          <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            className="w-full appearance-none rounded-xl border-none bg-muted px-5 py-4 pr-12 text-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40"
          >
            {SUBJECT_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`subjectOptions.${key}`)}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={t("messagePlaceholder")}
            className="w-full resize-none rounded-xl border-none bg-muted px-5 py-4 text-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Consent */}
        <div className="flex items-center gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="h-5 w-5 cursor-pointer rounded border-none bg-muted text-primary focus:ring-primary"
          />
          <label
            htmlFor="consent"
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {t("consent")}
          </label>
        </div>

        {/* Error State */}
        {state.errors && Object.keys(state.errors).length > 0 && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>{t("error")}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            "flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-5 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90 active:scale-[0.98]",
            state.submitting && "cursor-not-allowed opacity-70"
          )}
        >
          {state.submitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              {t("submit")}
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        {/* Response Time */}
        <div className="pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {tInfo("responseTime")}{" "}
            <span className="font-semibold text-primary">
              {tInfo("responseTimeValue")}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
