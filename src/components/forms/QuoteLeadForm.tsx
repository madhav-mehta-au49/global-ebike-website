"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/siteConfig";
import { models } from "@/lib/calculator";

export const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  area: z.string().min(2, "Area required"),
  dailyKm: z.string().optional(),
  model: z.string().optional(),
  testRideDate: z.string().optional(),
  message: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function QuoteLeadForm({
  variant = "card",
  compact = false,
  defaultModel,
}: {
  variant?: "card" | "inline";
  compact?: boolean;
  defaultModel?: string;
}) {
  const t = useTranslations("Contact");
  const th = useTranslations("Hero");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      model: defaultModel ?? "",
    },
  });

  const phoneField = register("phone");

  const onSubmit = (data: QuoteFormValues) => {
    setStatus("sending");
    setTimeout(() => {
      setStatus("done");
      const lines = [
        "Hello VoltRide E-Bikes, I want to book a test ride.",
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Area: ${data.area}`,
        data.dailyKm ? `Daily Commute: ${data.dailyKm} km` : "",
        data.model ? `Interested Model: ${data.model}` : "",
        data.testRideDate ? `Preferred Date: ${data.testRideDate}` : "",
        data.message ? `Message: ${data.message}` : "",
      ].filter(Boolean);
      window.open(whatsappLink(lines.join("\n")), "_blank");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 700);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={variant === "card" ? "card space-y-3 p-5" : "space-y-3"}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-bold text-navy-900">
          {compact ? th("formTitle") : t("formTitle")}
        </h3>
        {status === "done" && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">
            <CheckCircle2 size={15} /> Sent
          </span>
        )}
      </div>

      <InputField label={t("name")} error={errors.name?.message} {...register("name")} />
      <InputField
        label={t("phone")}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        error={errors.phone?.message}
        {...phoneField}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
          phoneField.onChange(e);
        }}
      />
      <InputField label={t("area")} error={errors.area?.message} {...register("area")} />
      {!compact && (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InputField
              label={t("dailyKm")}
              type="number"
              placeholder="e.g. 30"
              {...register("dailyKm")}
            />
            <div>
              <label className="mb-1 block text-xs font-semibold text-ink/70">
                {t("model")}
              </label>
              <select
                className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
                {...register("model")}
              >
                <option value="">{t("notSure")}</option>
                {models.map((m) => (
                  <option key={m.id} value={m.name}>
                    {locale === "gu" ? m.nameGu : m.name} · {m.rangeKm} km
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InputField
              label={t("testRideDate")}
              type="date"
              {...register("testRideDate")}
            />
            <InputField label={t("message")} {...register("message")} />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : compact ? (
          th("formSubmit")
        ) : (
          t("send")
        )}
      </button>
      {!compact && (
        <p className="text-center text-[11px] text-ink/50">{t("reply")}</p>
      )}
    </form>
  );
}

function InputField({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-ink/70">{label}</label>
      <input
        {...props}
        className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
      />
      {error && <p className="mt-1 text-[11px] font-medium text-red-600">{error}</p>}
    </div>
  );
}
