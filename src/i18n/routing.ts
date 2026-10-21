import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["gu", "en"],
  defaultLocale: "gu",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];