export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "代謝科學" | "飲食策略" | "瘦瘦針真相" | "學員故事";
  readTime: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    slug: "95-percent-regain-weight",
    title: "95% 的人都會復胖，但這 5% 做對了什麼？",
    description:
      "如果你正處在減肥→復胖→再減肥的循環中，這不是你的問題。這是方法的問題。",
    date: "2025-07-15",
    category: "代謝科學",
    readTime: "8 分鐘",
    featured: true,
  },
  {
    slug: "ozempic-cost-and-regain",
    title: "花 10 萬打瘦瘦針，停藥後復胖...這真的是你要的瘦嗎？",
    description:
      "一位媽媽的無奈分享：3 個月瘦了 8 公斤，停藥半年後全部回來還多了 2 公斤。",
    date: "2025-07-20",
    category: "瘦瘦針真相",
    readTime: "6 分鐘",
  },
  {
    slug: "ozempic-body-disconnect",
    title: "瘦瘦針讓你瘦了，但你的身體還認識你嗎？",
    description:
      "「我現在吃一點點就飽了，但總覺得這種飽不是真的飽。」當身體失去飢餓的能力，你真的變健康了嗎？",
    date: "2025-07-25",
    category: "瘦瘦針真相",
    readTime: "7 分鐘",
  },
  {
    slug: "ozempic-doctor-warning",
    title: "醫生緊急警告：瘦瘦針讓你失去了什麼？",
    description:
      "37% 擔心營養不足，52% 每週跳過好幾次正餐，31% 根本不知道該吃什麼。",
    date: "2025-08-01",
    category: "瘦瘦針真相",
    readTime: "7 分鐘",
  },
  {
    slug: "starch-rescue",
    title: "澱粉吃多了？4 個方法馬上補救",
    description:
      "昨晚壓力太大不小心吃了三個餐包？不用恐慌、不用跑步兩小時。這樣處理就好。",
    date: "2025-10-01",
    category: "飲食策略",
    readTime: "5 分鐘",
  },
  {
    slug: "willpower-myth",
    title: "「管不住嘴就是沒意志力」？讓科學來打臉這句話",
    description:
      "你管不住嘴不是因為你軟弱，是因為你的飢餓素和瘦體素在背後操控你。科學幫你出一口氣。",
    date: "2026-02-15",
    category: "代謝科學",
    readTime: "6 分鐘",
    featured: true,
  },
  {
    slug: "dark-neck-insulin",
    title: "脖子暗暗的洗不乾淨？那不是髒，是你的代謝在求救",
    description:
      "黑棘皮症是胰島素阻抗最明顯的外在徵兆。你的身體正在用皮膚跟你說話。",
    date: "2026-02-20",
    category: "代謝科學",
    readTime: "6 分鐘",
    featured: true,
  },
  {
    slug: "normal-blood-sugar-trap",
    title: "血糖正常，但下午老是昏沉、腰越來越粗？你的身體可能在硬撐",
    description:
      "體檢數字正常不代表沒事。當胰島素加班加到爆肝，血糖還能撐住——但代價是你的腰圍。",
    date: "2026-03-01",
    category: "代謝科學",
    readTime: "7 分鐘",
    featured: true,
  },
  {
    slug: "eating-order-blood-sugar",
    title: "不用少吃，只要換順序：研究證實這樣吃血糖少飆 35%",
    description:
      "先菜、再肉、最後飯——同一餐食物，換個順序吃，血糖飆升幅度就能降 35%。",
    date: "2026-03-05",
    category: "飲食策略",
    readTime: "5 分鐘",
    featured: true,
  },
  {
    slug: "soft-belly-breakthrough",
    title: "減到一半覺得肉變鬆了？先別放棄，你離突破可能只剩一步",
    description:
      "肚子的肉從硬變軟，不是退步，是脂肪正在被分解的訊號。恭喜你，它準備走了。",
    date: "2026-03-08",
    category: "代謝科學",
    readTime: "5 分鐘",
  },
  {
    slug: "triglycerides-starch",
    title: "三酸甘油脂偏高？問題不是油吃太多，是澱粉吃太多",
    description:
      "健檢報告三酸甘油脂紅字，你第一反應是「少吃油」？其實真正的兇手是你每天吃的那碗飯。",
    date: "2026-03-10",
    category: "代謝科學",
    readTime: "7 分鐘",
  },
  {
    slug: "why-regain-weight",
    title: "為什麼越努力減肥的人，反而越容易復胖？",
    description:
      "試過所有方法都復胖，不是你的意志力有問題。是你的身體記住了每一次飢荒，然後學會了更努力地存。",
    date: "2026-03-12",
    category: "代謝科學",
    readTime: "8 分鐘",
  },
  {
    slug: "carb-guilt-free",
    title: "你吃的那碗飯，根本不會讓你變胖",
    description:
      "碳水不是敵人。讓你變胖的不是澱粉本身，是吃錯時機、吃錯順序、吃錯搭配。放下罪惡感。",
    date: "2026-03-15",
    category: "飲食策略",
    readTime: "6 分鐘",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
