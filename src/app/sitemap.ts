// app/sitemap.ts
import { MetadataRoute } from "next";
import { headers } from "next/headers";
const STATIC_DOMAIN="https://khushboo.blog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers(); // ✅ Await here
  const host = h.get("host") || STATIC_DOMAIN;
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const sections = ["", "#about", "#projects", "#education", "#skill", "#contact"];

  return sections.map((path, index) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8 - index * 0.05, // Priority decreases for lower sections
  }));
}
