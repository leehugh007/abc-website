# Graph Report - .  (2026-04-10)

## Corpus Check
- Large corpus: 273 files · ~5,693,532 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 71 nodes · 82 edges · 12 communities detected
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `handleCalc()` - 6 edges
2. `track()` - 5 edges
3. `handleGetReport()` - 4 edges
4. `handleGetStrategy()` - 4 edges
5. `generateClaimCode()` - 3 edges
6. `generateSessionId()` - 3 edges
7. `getRiskLevel()` - 3 edges
8. `handleCheck()` - 3 edges
9. `calcBMR()` - 2 edges
10. `getProteinRange()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `handleCalc()` --calls--> `calcBMR()`  [INFERRED]
  src/app/tools/waist-hip/page.tsx → src/app/tools/page.tsx
- `handleCalc()` --calls--> `getProteinRange()`  [INFERRED]
  src/app/tools/waist-hip/page.tsx → src/app/tools/page.tsx
- `handleCalc()` --calls--> `track()`  [INFERRED]
  src/app/tools/waist-hip/page.tsx → src/app/tools/fatty-liver/page.tsx
- `handleCalc()` --calls--> `calcSugarLimit()`  [INFERRED]
  src/app/tools/waist-hip/page.tsx → src/app/tools/sugar/page.tsx
- `handleCalc()` --calls--> `getRiskLevel()`  [INFERRED]
  src/app/tools/waist-hip/page.tsx → src/app/tools/fatty-liver/page.tsx

## Communities

### Community 0 - "page, page_aboutpage, page_asuanpage"
Cohesion: 0.1
Nodes (0): 

### Community 1 - "faq_data, header, header_header"
Cohesion: 0.12
Nodes (0): 

### Community 2 - "articles_data, articles_data_getallarticleslugs, a"
Cohesion: 0.2
Nodes (0): 

### Community 3 - "page_generateclaimcode, page_generatesessionid, pa"
Cohesion: 0.38
Nodes (7): generateClaimCode(), generateSessionId(), getRiskLevel(), handleCheck(), handleGetReport(), handleGetStrategy(), track()

### Community 4 - "page_calcbmr, page_calcsugarlimit, page_getprotein"
Cohesion: 0.5
Nodes (4): calcBMR(), calcSugarLimit(), getProteinRange(), handleCalc()

### Community 5 - "markdown, markdown_getarticlecontent, markdown_inj"
Cohesion: 1.0
Nodes (2): getArticleContent(), injectMidArticleCta()

### Community 6 - "types_data, types_data_getallslugs, types_data_get"
Cohesion: 0.67
Nodes (0): 

### Community 7 - "sticky_line_cta, sticky_line_cta_stickylinecta"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "returning_visitor, returning_visitor_returningvisi"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "not_found, not_found_notfound"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "next_env_d"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "next_config"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `sticky_line_cta, sticky_line_cta_stickylinecta`** (2 nodes): `sticky-line-cta.tsx`, `StickyLineCTA()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `returning_visitor, returning_visitor_returningvisi`** (2 nodes): `returning-visitor.tsx`, `ReturningVisitorBanner()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `not_found, not_found_notfound`** (2 nodes): `not-found.tsx`, `NotFound()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `next_env_d`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `next_config`** (1 nodes): `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `handleCalc()` connect `page_calcbmr, page_calcsugarlimit, page_getprotein` to `page, page_aboutpage, page_asuanpage`, `page_generateclaimcode, page_generatesessionid, pa`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Why does `track()` connect `page_generateclaimcode, page_generatesessionid, pa` to `page, page_aboutpage, page_asuanpage`, `page_calcbmr, page_calcsugarlimit, page_getprotein`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `handleGetReport()` connect `page_generateclaimcode, page_generatesessionid, pa` to `page, page_aboutpage, page_asuanpage`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `handleCalc()` (e.g. with `calcBMR()` and `getProteinRange()`) actually correct?**
  _`handleCalc()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `track()` (e.g. with `handleCalc()` and `handleGetReport()`) actually correct?**
  _`track()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `handleGetReport()` (e.g. with `generateClaimCode()` and `generateSessionId()`) actually correct?**
  _`handleGetReport()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `handleGetStrategy()` (e.g. with `generateClaimCode()` and `generateSessionId()`) actually correct?**
  _`handleGetStrategy()` has 3 INFERRED edges - model-reasoned connections that need verification._