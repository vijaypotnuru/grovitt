# SEO Pending Tracker

## Action Required (manual step)

- [ ] Set `GOOGLE_SITE_VERIFICATION` in `.env` with the token from [Google Search Console](https://search.google.com/search-console)

---

## Completed

- [x] Root layout: `twitter:site` / `twitter:creator` (`@grovittstudio`)
- [x] Root layout: `verification` meta (Google Search Console) — gated by env var
- [x] `next.config.ts`: `poweredByHeader: false`
- [x] `next.config.ts`: security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [x] `next.config.ts`: `trailingSlash: false` (explicit)
- [x] Root `not-found.tsx`: 404 page with `robots: { index: false }`
- [x] `src/lib/jsonld.ts`: `serviceJsonLd()` helper
- [x] `src/lib/jsonld.ts`: `localBusinessJsonLd()` helper
- [x] Home page: `ProfessionalService` JSON-LD
- [x] All 7 service pages: `Service` JSON-LD
- [x] All pages: page-level `keywords` array
- [x] All pages: `twitter:site` in metadata
- [x] Blog posts: `twitter:site` in dynamic metadata

---

## Future Improvements (nice-to-have)

- [ ] **Image sitemap** — `src/app/sitemap-image.ts` to include blog cover images
- [ ] **ISR revalidate** — Add `export const revalidate = 3600` on `/blogs` page for incremental static regeneration
- [ ] **loading.tsx** — Add loading skeletons to `/blogs` and `/blogs/[slug]` for perceived performance
- [ ] **error.tsx** — Add error boundaries at root and blog levels with SEO-friendly fallback metadata
- [ ] **Blog image optimization** — Replace `dangerouslySetInnerHTML` images with `next/image` or an HTML post-processor for lazy loading, WebP, and srcset
- [ ] **Analytics / RUM** — Integrate Vercel Analytics, Plausible, or custom Web Vitals monitoring via `useReportWebVitals`
- [ ] **hreflang alternates** — Only needed if launching multi-language/multi-region variants
- [ ] **Breadcrumb HTML markup** — Currently only JSON-LD; consider visible breadcrumb Schema alignment
- [ ] **Add `twitter:creator` to blog post detail metadata** — Tie articles to `@grovittstudio`
