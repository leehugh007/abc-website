# ABC 代謝力重建官網 — 設計架構說明書

> 這份文件的讀者是「下一個改這個網站的人」——不管是一休本人、另一個 AI session、或未來的工程師。
> 改任何東西之前先讀這份，確保不會打破已經建好的系統。

---

## 1. 網站定位

**這是什麼：** ABC 代謝力重建瘦身法的官方網站（abcmetabolic.com）
**不是什麼：** 不是電商、不是 App、不是會員系統。這是一個純內容行銷網站，目標是教育 + 建立信任 + 導流到 LINE

**核心漏斗：**
```
FB 教育文 → 官網（教育/信任/工具）→ 代謝測驗 → 加 LINE → 說明會 → 報名課程
```

**轉換目標優先序：**
1. 做代謝測驗（`/quiz`）
2. 加入 LINE（`https://lin.ee/x41s2Su`）
3. 閱讀更多內容（留在站內、建立信任）

**定價頁 `/plans` 故意沒有導覽入口。** 一休的策略是先讓人知道價值再知道價格。加 LINE → 聽說明會 → 報名。不要加回導覽。

---

## 2. 品牌調性

### 一句話
像一個瘦過的朋友跟你聊天，不像教科書、不像推銷員。

### 核心原則

| 原則 | 意思 | 反面 |
|------|------|------|
| 不販賣焦慮 | 恐懼當鉤子可以，但一定要給出路 | 「你再不減就來不及了」 |
| 加法思維 | 告訴你可以吃什麼，不是不能吃什麼 | 「這個不能吃、那個不能碰」 |
| 不當大師 | 「我不是比你厲害，只是比你早犯錯」 | 「跟著我的方法就對了」 |
| 場景感 | 讀者看到文字要能「聞到味道」 | 抽象的健康知識條列 |

### 文字規範
- 台灣用語（不用「特別」當「很」、不用「你必須」）
- 品牌名：「ABC 代謝重建瘦身法」（不叫生酮）
- 結尾簽名：「我是一休，陪你健康的瘦一輩子」
- 一休的體重口徑：89→62 公斤（不用 90→59）

---

## 3. 設計系統

### 3.1 色彩 — Design Token

全站顏色定義在 `src/app/globals.css` 的 `@theme` 區塊，使用 Tailwind v4 token。

**硬規則：不准用 hardcode hex。** 用 `text-brand` 不是 `text-[#2a9d6f]`。

| Token | 色值 | 用途 | Tailwind 用法 |
|-------|------|------|---------------|
| `brand` | `#2a9d6f` | 主色翠綠 | `text-brand`, `bg-brand`, `border-brand` |
| `brand-dark` | `#1a5e3f` | 深綠區塊、文章粗體 | `bg-brand-dark`, `text-brand-dark` |
| `surface` | `#f8faf7` | 頁面背景（微綠米白） | `bg-surface` |
| `surface-green` | `#f3f9f5` | 淺綠卡片/區塊背景 | `bg-surface-green` |
| `ink` | `#2a2520` | 主要文字 | `text-ink` |
| `subtle` | `#6b6560` | 次要文字 | `text-subtle` |
| `muted` | `#78726e` | 輔助文字（WCAG AA 4.52:1） | `text-muted` |
| `edge` | `#eee9e5` | 邊框 | `border-edge` |
| `edge-dark` | `#ddd5cf` | hover 邊框 | `border-edge-dark` |
| `danger` | `#e74c3c` | 紅色（痛點/警示） | `text-danger`, `bg-danger/10` |
| `warning` | `#e67e22` | 橘色 | `text-warning` |
| `line-green` | `#06C755` | LINE 品牌綠 | `text-line-green`, `bg-line-green` |

**改品牌色：** 只改 `globals.css` 的 `@theme` 一行，全站自動生效。

### 3.2 字體

- **主字體：** 系統字體（`-apple-system, PingFang TC, Microsoft JhengHei, Noto Sans TC`）
- **手寫信風格：** `Noto Serif TC`（Google Fonts），只在 `/tools` 的「一休寫給你的」區塊用
- **字型載入：** Noto Serif TC 只在 `src/app/tools/layout.tsx` 載入，不在全域 layout。其他頁面不下載這 953KB 的字型

### 3.3 間距

沒有嚴格的間距 scale，但遵守這些慣例：
- Section 間距：`py-16`（大區塊）或 `py-12`（小區塊）
- 內容最大寬度：`max-w-2xl`（文章/內容頁）、`max-w-xl`（CTA 區）、`max-w-3xl`（Header/Footer）
- 卡片內距：`p-5` 或 `p-6`
- 頁面水平 padding：`px-5`

### 3.4 圓角

- 卡片/區塊：`rounded-2xl`（16px）
- 按鈕/pill：`rounded-full`
- 輸入框：`rounded-xl`（12px）
- 小標籤：`rounded-full`

---

## 4. 頁面架構

### 4.1 頁面分類

```
教育層（建立信任）          轉換層（推向行動）         工具層（提供價值）
├── /guide (Pillar)        ├── / (首頁)               ├── /tools (TDEE)
├── /articles (43篇)       ├── /quiz (測驗)            ├── /tools/protein
├── /concepts (10個)       ├── /program (課程)         ├── /tools/waist-hip
├── /types (5種)           ├── /plans (定價，隱藏)     └── /tools/insulin-check
├── /faq (15題)            ├── /for/postpartum
├── /testimonials          ├── /for/health-check
├── /about                 └── /for/sedentary
└── /method
```

### 4.2 導流邏輯

每個頁面都要有「下一步」，不能是死路。導流優先序：

1. **測驗** — 最高優先。幾乎每頁底部都有「30 秒測出你的代謝類型」
2. **LINE** — 第二優先。Sticky CTA + 底部連結
3. **相關內容** — 留在站內繼續閱讀

**CTA 主次分明原則：**
- 主 CTA 用大卡片（綠色背景、完整描述）
- 副 CTA 用小按鈕一排（LINE + 其他）
- 不要三個一樣大的對稱格

### 4.3 特殊頁面規則

| 頁面 | 規則 |
|------|------|
| `/quiz` | 靜態 HTML（`public/quiz/index.html`），不是 Next.js route。連結用 `<a>` 不用 `<Link>`，避免 RSC prefetch 404 |
| `/plans` | 故意沒有導覽入口。不要加回去 |
| `/faq` | Server component + `<details>/<summary>`。JSON-LD 在 `layout.tsx` server-side 渲染 |
| `/articles/[slug]` | Markdown 內容用 `remark-html`（sanitize: false）。內部備註由 `markdown.ts` 過濾，但新文章仍要人工檢查 |
| 工具頁 | 有輸入驗證（年齡 10-100、身高 100-250、體重 30-300）。手寫信風格的字型只在這裡載入 |

---

## 5. 元件規範

### 5.1 代謝類型卡片

```
┌──────────────────────────────────────┐
│ ▬▬▬▬▬▬▬ 頂部 1px 色帶 ▬▬▬▬▬▬▬▬▬▬▬ │  ← style={{ backgroundColor: type.color }}
│ ● 高轉速型                        → │  ← 3px 圓點 + 文字，不用 emoji
│   你不是不健康，你是太拼了            │
└──────────────────────────────────────┘
```

- 不用 emoji（🔴🟠🟡🟢🔵）做視覺標記
- 不用 `border-l-4` 彩色左邊框
- 顏色用 inline style（因為是動態值，不是 token）

### 5.2 CTA 區塊

**主次分明，不對稱：**
```
┌──────────────────────────────────────┐
│ 30 秒測出你的代謝類型            →   │  ← 主 CTA：大卡片，bg-surface-green
│ 免費，8 個生活小問題                  │
└──────────────────────────────────────┘
┌────────────────┐ ┌────────────────┐
│ LINE  問一休    │ │ ABC  看方法介紹 │    ← 副 CTA：小按鈕，border-edge
└────────────────┘ └────────────────┘
```

### 5.3 文章排版

- 最大寬度：`max-w-2xl`
- 使用 `@tailwindcss/typography` 的 `prose` class
- 粗體：`color: brand-dark`（深綠，不是黑色）
- blockquote：左邊框 `brand` + 背景 `surface-green`，不斜體
- 中段 CTA：由 `markdown.ts` 的 `injectMidArticleCta()` 自動在文章 50% 位置插入
- 文末三選一 CTA（測/問/讀）→ 已改為主次分明版

### 5.4 Sticky LINE CTA

- `StickyLineCTA` 元件，滾動 600px 後出現，接近底部隱藏
- LINE 綠色漸層按鈕，`fixed bottom-0`
- 全站共用（首頁、文章、Guide、工具頁都有）

### 5.5 Header

- Sticky + 毛玻璃（`bg-white/[0.97] backdrop-blur-md`）
- 手機版：「做測驗」按鈕 + hamburger menu
- Hamburger menu 分四組：主要 / 你的狀況（分眾頁）/ 學習 / 行動
- 按 Escape 關閉，`aria-expanded` 標記狀態

---

## 6. AI Slop 黑名單

以下模式已經從網站中移除，不准再出現：

| # | 模式 | 為什麼不行 |
|---|------|-----------|
| 1 | Emoji 做視覺標記（🔴🟠🟡） | 看起來像 AI 產出的 |
| 2 | `border-l-4` 彩色左邊框卡片 | 每個 SaaS 模板都這樣 |
| 3 | 三欄對稱 CTA（測/問/讀一樣大） | 沒有主次之分，像範本 |
| 4 | 所有 section 都 `text-center` | 均勻節奏讓人疲勞 |
| 5 | 圓形 icon + 標題 + 描述重複 3 次 | 最典型的 AI layout |
| 6 | 紫色/靛色漸層背景 | AI 預設色 |
| 7 | 裝飾性 blob/波浪 SVG | 空洞的裝飾 |
| 8 | 泛用英雄文案（「歡迎來到...」） | 沒有辨識度 |

**替代方案：**
- 視覺標記 → 頂部色帶 + 小圓點
- 對稱 CTA → 主大副小
- 全置中 → 混合左對齊和置中，讓節奏有變化

---

## 7. 效能規範

### 7.1 效能預算

| 指標 | 目標 | 當前值 |
|------|------|--------|
| FCP | < 1.8s | ~88ms |
| LCP | < 2.5s | ~111ms |
| Full Load | < 3s | ~111ms |
| JS Bundle (decoded) | < 700KB | 611KB |

### 7.2 效能規則

- **字型按需載入：** 特殊字型（如 Noto Serif TC）放在使用它的 layout，不放全域
- **圖片用 Next.js Image：** 必須設 `width`、`height`、`sizes`、`alt`
- **靜態頁面用 SSG：** 所有頁面都是 `generateStaticParams` 預渲染，不要改成 SSR
- **Quiz 是靜態 HTML：** 連結用 `<a>` 不用 `<Link>`，避免 RSC prefetch 404

### 7.3 Baseline

效能基線存在 `.gstack/benchmark-reports/baselines/baseline.json`。跑 `/benchmark` 會跟它對比。

---

## 8. 無障礙 (a11y) 規範

- **文字對比度：** 所有文字色都通過 WCAG AA（`muted` 色已調整到 4.52:1）
- **`<details>/<summary>`：** FAQ 頁用原生 HTML 折疊，不需 JS 也能看到內容
- **`aria-expanded`：** 手機 menu 的 hamburger button 有狀態標記
- **Escape 關閉：** 手機 menu 支援鍵盤 Escape 關閉
- **`prefers-reduced-motion`：** `globals.css` 有減少動畫的 media query
- **圖片 alt：** 所有 `<Image>` 都有描述性 alt text

---

## 9. SEO / AI 可讀性

### 結構化資料
- **全域：** WebSite + Organization（`layout.tsx`，server-side）
- **文章：** Article schema（`articles/[slug]/page.tsx`）
- **FAQ：** FAQPage schema（`faq/layout.tsx`，server-side）
- **課程：** Course + CourseInstance（`program/page.tsx`）
- **Guide：** Article schema（`guide/page.tsx`）

### Sitemap
- `src/app/sitemap.ts` 自動產生，涵蓋所有靜態頁、文章、概念、類型頁
- 文章的 `lastModified` 用文章的 `date` 欄位

### Markdown 內部備註過濾
`src/lib/markdown.ts` 會過濾這些 section：核心邏輯、分享動機分析、與 ABC 課程的連結、姊妹篇、封面圖 AI 提示詞、科學依據來源、Hashtag、延伸閱讀建議、版本紀錄、投放建議、預期效果。但不能 100% 依賴——新增文章仍要人工檢查。

### robots.txt
全開放，沒有封鎖任何 AI 爬蟲。

---

## 10. 新增頁面 Checklist

建新頁面之前，確認以下每一項：

### 設計
- [ ] 使用 design token，不用 hardcode hex
- [ ] 有明確的「下一步」CTA，不是死路
- [ ] CTA 遵守主次分明原則（主大副小）
- [ ] 不觸發任何 AI slop 黑名單模式
- [ ] 手機版排版是刻意設計的，不是桌面版堆疊

### 內容
- [ ] 站在讀者角度看——第一次來的 35 歲女性會看到什麼？
- [ ] 沒有內部備註外洩（核心邏輯、分享動機、提示詞）
- [ ] 品牌名用「ABC 代謝重建瘦身法」
- [ ] 結尾簽名正確

### 技術
- [ ] 加了 metadata（title + description）
- [ ] 有適當的 JSON-LD 結構化資料
- [ ] 圖片用 `<Image>` 元件，設好 `sizes` 和 `alt`
- [ ] 如果有表單：加了輸入範圍驗證 + 友善錯誤提示
- [ ] 連結到 `/quiz` 用 `<a>` 不用 `<Link>`
- [ ] 特殊字型只在需要的 layout 載入，不放全域
- [ ] `npx next build` 通過
- [ ] 加入 `sitemap.ts` 的路由列表

### SEO
- [ ] 加入 sitemap（`src/app/sitemap.ts`）
- [ ] 有 OpenGraph 標籤
- [ ] 標題簡潔有辨識度（不超過 60 字元）

---

## 11. 檔案結構速查

```
abc-website/
├── CLAUDE.md              ← AI 工作上下文（技術細節、文章審查規則）
├── DESIGN.md              ← 你正在讀的這份（設計架構全貌）
├── next.config.ts         ← Next.js 配置
├── public/
│   ├── quiz/index.html    ← 代謝測驗（獨立靜態 HTML）
│   ├── images/            ← 圖片資源
│   └── robots.txt
└── src/
    ├── app/
    │   ├── globals.css    ← @theme design tokens + 全域樣式
    │   ├── layout.tsx     ← 全域 layout（Header/Footer/JSON-LD/GA）
    │   ├── header.tsx     ← Sticky header + 手機 menu
    │   ├── sticky-line-cta.tsx  ← 浮動 LINE 按鈕
    │   ├── returning-visitor.tsx ← 回訪者個人化 banner
    │   ├── page.tsx       ← 首頁
    │   ├── tools/
    │   │   ├── layout.tsx ← 工具頁專用 layout（載入 Noto Serif TC）
    │   │   ├── page.tsx   ← TDEE 計算機
    │   │   ├── protein/   ← 蛋白質計算機
    │   │   ├── waist-hip/ ← 腰臀比計算機
    │   │   └── insulin-check/ ← 胰島素阻抗自評
    │   ├── faq/
    │   │   ├── layout.tsx ← FAQ JSON-LD（server-side）
    │   │   └── page.tsx   ← FAQ 頁（<details>/<summary>）
    │   └── ...            ← 其他頁面
    ├── content/           ← 43 篇 Markdown 文章
    └── lib/
        ├── articles-data.ts  ← 文章 metadata
        ├── concepts-data.ts  ← 概念 metadata
        ├── types-data.ts     ← 代謝類型資料
        ├── faq-data.ts       ← FAQ 資料（共用）
        └── markdown.ts       ← Markdown→HTML 管線 + 內部備註過濾
```

---

*最後更新：2026-04-01，commit 707d9dc*
