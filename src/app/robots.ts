// app/robots.ts
import { MetadataRoute } from "next";
import { headers } from "next/headers";
const STATIC_DOMAIN="https://khushboo.blog";
export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const host = h.get("host") || STATIC_DOMAIN;
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  return {
    rules: [
      {
        userAgent: "*", // All bots
        allow: "/", // Allow full site
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
