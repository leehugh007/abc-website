import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles-data";
import { CONCEPTS } from "@/lib/concepts-data";

const BASE_URL = "https://abcmetabolic.com";

const TYPES_SLUGS = [
  "high-rpm",
  "burnout",
  "roller-coaster",
  "power-save",
  "steady",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/method`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/types`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/program`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/protein`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/tools/waist-hip`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/tools/insulin-check`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/tools/fatty-liver`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/for/postpartum`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/for/health-check`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/for/sedentary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Type detail pages
  const typePages: MetadataRoute.Sitemap = TYPES_SLUGS.map((slug) => ({
    url: `${BASE_URL}/types/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Article pages
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Concept pages
  const conceptPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/concepts`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...CONCEPTS.map((concept) => ({
      url: `${BASE_URL}/concepts/${concept.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...typePages, ...articlePages, ...conceptPages];
}
