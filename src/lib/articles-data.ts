export type Tag =
  | "胰島素阻抗"
  | "血糖控制"
  | "復胖"
  | "瘦瘦針"
  | "荷爾蒙"
  | "代謝適應"
  | "健檢紅字"
  | "發炎"
  | "飲食方法"
  | "體重迷思"
  | "學員故事"
  | "外食族";

export type Depth = "快讀" | "指南" | "深度";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "健檢紅字" | "減肥真相" | "瘦瘦針" | "飲食方法" | "學員故事";
  readTime: string;
  featured?: boolean;
  coverImage?: string;
  tags: Tag[];
  depth: Depth;
}

export const ARTICLES: Article[] = [
  {
    slug: "95-percent-regain-weight",
    title: "95% 的人都會復胖，但這 5% 做對了什麼？",
    description:
      "如果你正處在減肥→復胖→再減肥的循環中，這不是你的問題。這是方法的問題。",
    date: "2025-07-15",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-regain-truth.jpg",
    tags: ["復胖", "代謝適應", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "ozempic-cost-and-regain",
    title: "花 10 萬打瘦瘦針，停藥後復胖...這真的是你要的瘦嗎？",
    description:
      "一位媽媽的無奈分享：3 個月瘦了 8 公斤，停藥半年後全部回來還多了 2 公斤。",
    date: "2025-07-20",
    category: "瘦瘦針",
    readTime: "6 分鐘",
    coverImage: "/images/articles/cover-ozempic-regain.jpg",
    tags: ["瘦瘦針", "復胖"],
    depth: "快讀",
  },
  {
    slug: "ozempic-body-disconnect",
    title: "瘦瘦針讓你瘦了，但你的身體還認識你嗎？",
    description:
      "「我現在吃一點點就飽了，但總覺得這種飽不是真的飽。」當身體失去飢餓的能力，你真的變健康了嗎？",
    date: "2025-07-25",
    category: "瘦瘦針",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-ozempic-puppet.jpg",
    tags: ["瘦瘦針", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "ozempic-doctor-warning",
    title: "醫生緊急警告：瘦瘦針讓你失去了什麼？",
    description:
      "37% 擔心營養不足，52% 每週跳過好幾次正餐，31% 根本不知道該吃什麼。",
    date: "2025-08-01",
    category: "瘦瘦針",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-ozempic-80percent.jpg",
    tags: ["瘦瘦針", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "starch-rescue",
    title: "澱粉吃多了？4 個方法馬上補救",
    description:
      "昨晚壓力太大不小心吃了三個餐包？不用恐慌、不用跑步兩小時。這樣處理就好。",
    date: "2025-10-01",
    category: "飲食方法",
    readTime: "5 分鐘",
    coverImage: "/images/articles/cover-starch-rescue.jpg",
    tags: ["飲食方法", "血糖控制", "外食族"],
    depth: "快讀",
  },
  {
    slug: "willpower-myth",
    title: "「管不住嘴就是沒意志力」？讓科學來打臉這句話",
    description:
      "你管不住嘴不是因為你軟弱，是因為你的飢餓素和瘦體素在背後操控你。科學幫你出一口氣。",
    date: "2026-02-15",
    category: "減肥真相",
    readTime: "6 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-willpower-myth.jpg",
    tags: ["荷爾蒙", "體重迷思", "代謝適應"],
    depth: "快讀",
  },
  {
    slug: "dark-neck-insulin",
    title: "脖子暗暗的洗不乾淨？那不是髒，是你的代謝在求救",
    description:
      "黑棘皮症是胰島素阻抗最明顯的外在徵兆。你的身體正在用皮膚跟你說話。",
    date: "2026-02-20",
    category: "健檢紅字",
    readTime: "6 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-dark-neck.jpg",
    tags: ["胰島素阻抗", "健檢紅字"],
    depth: "快讀",
  },
  {
    slug: "normal-blood-sugar-trap",
    title: "血糖正常，但下午老是昏沉、腰越來越粗？你的身體可能在硬撐",
    description:
      "體檢數字正常不代表沒事。當胰島素加班加到爆肝，血糖還能撐住——但代價是你的腰圍。",
    date: "2026-03-01",
    category: "健檢紅字",
    readTime: "7 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-blood-sugar-normal.jpg",
    tags: ["胰島素阻抗", "血糖控制", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "eating-order-blood-sugar",
    title: "不用少吃，只要換順序：研究證實這樣吃血糖少飆 35%",
    description:
      "先菜、再肉、最後飯——同一餐食物，換個順序吃，血糖飆升幅度就能降 35%。",
    date: "2026-03-05",
    category: "飲食方法",
    readTime: "5 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-eating-order.jpg",
    tags: ["飲食方法", "血糖控制", "外食族"],
    depth: "快讀",
  },
  {
    slug: "body-fat-scale-liar",
    title: "你家的體脂計，可能是減肥路上最準的「騙子」",
    description:
      "一個女生在運動中心因為體脂計數字當場哭了出來。但那個數字的變化，大部分是水分和血液循環的影響。",
    date: "2026-03-18",
    category: "減肥真相",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-body-fat-scale.jpg",
    tags: ["體重迷思"],
    depth: "指南",
  },
  {
    slug: "cholesterol-not-eggs",
    title: "膽固醇過高？問題可能不是雞蛋，而是你的珍奶",
    description:
      "為了降膽固醇不敢吃蛋，結果半年後還是高？因為真正的兇手不是雞蛋，是讓身體發炎的精緻食物。",
    date: "2026-01-10",
    category: "健檢紅字",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-cholesterol-inflammation.jpg",
    tags: ["健檢紅字", "發炎", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "blood-pressure-not-salt",
    title: "高血壓？問題可能不是鹽，而是你手上那包零食",
    description:
      "少吃鹽血壓還是降不下來？因為 65-78% 的高血壓是由肥胖引起的，不是鹽。",
    date: "2026-02-01",
    category: "健檢紅字",
    readTime: "12 分鐘",
    coverImage: "/images/articles/cover-blood-pressure.jpg",
    tags: ["健檢紅字", "發炎", "胰島素阻抗"],
    depth: "深度",
  },
  {
    slug: "blood-sugar-insulin-overwork",
    title: "血糖過高？問題可能不是澱粉，而是你的胰島素累壞了",
    description:
      "戒澱粉血糖還是降不下來？問題不是澱粉，是你的胰島素已經加班加到爆肝了。",
    date: "2026-02-10",
    category: "健檢紅字",
    readTime: "12 分鐘",
    coverImage: "/images/articles/cover-blood-sugar-overwork.jpg",
    tags: ["胰島素阻抗", "血糖控制", "健檢紅字"],
    depth: "深度",
  },
  {
    slug: "ozempic-bbc-tsunami",
    title: "她打瘦瘦針瘦了 22 公斤，停針第 3 天海嘯就來了",
    description:
      "BBC 專訪瘦瘦針使用者：停針後食慾像海嘯一樣湧回來。壓抑永遠會有反彈的一天。",
    date: "2026-03-02",
    category: "瘦瘦針",
    readTime: "5 分鐘",
    coverImage: "/images/articles/cover-ozempic-bbc.jpg",
    tags: ["瘦瘦針", "復胖", "荷爾蒙"],
    depth: "快讀",
  },
  {
    slug: "eat-less-move-more-myth",
    title: "「少吃多動」這四個字，害了多少人？",
    description:
      "你的身體不是計算機。胰島素才是決定你胖不胖的關鍵，不是卡路里。少吃多動從一開始就少算了最關鍵的東西。",
    date: "2026-03-12",
    category: "減肥真相",
    readTime: "10 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-eat-less-move-more.jpg",
    tags: ["體重迷思", "胰島素阻抗", "代謝適應"],
    depth: "指南",
  },
  {
    slug: "ozempic-alternative-abc",
    title: "如果不想打針，還有什麼選擇？",
    description:
      "打針是「租」一個瘦的身體，ABC 是「擁有」一個健康的身體。租的總有一天要還，擁有的才是你的。",
    date: "2026-03-08",
    category: "瘦瘦針",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-ozempic-vs-abc.jpg",
    tags: ["瘦瘦針", "復胖", "飲食方法"],
    depth: "指南",
  },
  {
    slug: "socks-story-62kg",
    title: "胖到連穿襪子都要女兒幫忙｜一年後，她瘦了 62 公斤",
    description:
      "俐臻 127→65 公斤。從把自己關在家裡六年、暴食症、憂鬱症，到學會愛自己。如果她能瘦 62 公斤，你的目標可能只是她的零頭。",
    date: "2026-03-10",
    category: "學員故事",
    readTime: "15 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-student-minus62kg.jpg",
    tags: ["學員故事", "體重迷思"],
    depth: "深度",
  },
  {
    slug: "chicken-soup-love-story",
    title: "那碗雞湯征服了他的胃，但我卻被誤認為他媽媽",
    description:
      "沛蓁 85→67 公斤。多年紅字的血壓正常了、鼻過敏消了、偏頭痛沒了。她不想當被照顧的那一方，想和他並肩同行。",
    date: "2026-03-15",
    category: "學員故事",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-student-minus18kg.jpg",
    tags: ["學員故事", "健檢紅字", "發炎"],
    depth: "指南",
  },
  {
    slug: "wenwen-mom-story",
    title: "「媽媽，同學說妳好胖…」一句話，讓她從天堂掉到地獄",
    description:
      "溫溫，產後五年體重爬到快 80 公斤。偏頭痛、唇炎、肚臍炎、尿道炎輪流來。兩年後瘦了 20 公斤，不用再吃止痛藥，從躲鏡頭變成老公的專屬模特兒。",
    date: "2026-03-21",
    category: "學員故事",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/student-wenwen.jpg",
    tags: ["學員故事", "發炎", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "metabolism-reset-vs-ozempic",
    title: "代謝重建 vs 瘦瘦針：花錢買的瘦，跟自己學來的瘦，差在哪？",
    description:
      "打針是「租」一個瘦的身體，代謝重建是「擁有」一個健康的身體。原理、速度、復胖率、副作用、費用——逐項比給你看。",
    date: "2026-03-21",
    category: "瘦瘦針",
    readTime: "8 分鐘",
    featured: true,
    tags: ["瘦瘦針", "復胖", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "abc-vs-intermittent-fasting",
    title: "ABC 代謝重建 vs 168 間歇性斷食：為什麼你 168 斷食失敗了？",
    description:
      "168 只管「什麼時候吃」，ABC 處理的是「你的身體怎麼了」。一個是時間策略，一個是系統修復。差別在這裡。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    tags: ["代謝適應", "胰島素阻抗", "體重迷思"],
    depth: "指南",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

export function getArticlesByTag(tag: Tag): Article[] {
  return ARTICLES.filter((a) => a.tags.includes(tag));
}

export function getAllTags(): { tag: Tag; count: number }[] {
  const tagMap = new Map<Tag, number>();
  for (const article of ARTICLES) {
    for (const tag of article.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
