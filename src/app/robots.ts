// ─────────────────────────────────────────────
// ID Home — robots.txt
// Site conçu et développé par DMC Kreatif
// https://dmckreatif.com
// ─────────────────────────────────────────────

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
