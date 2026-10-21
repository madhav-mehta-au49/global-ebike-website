import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["gu", "en"];
  const paths = [
    "",
    "/about",
    "/packages",
    "/gallery",
    "/awards",
    "/contact",
    "/ebike-showroom-talaja",
    "/ebike-showroom-bhavnagar",
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: {
            gu: `${SITE_URL}/gu${path}`,
            en: `${SITE_URL}/en${path}`,
          },
        },
      });
    }
  }
  return entries;
}
