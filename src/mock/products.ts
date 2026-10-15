export type ProductImage = {
  url: string
  alt: string
}

export type ProductVariantOption = {
  label: string
  value: string
}

export type ProductVariant = {
  id: string
  name: string
  options: ProductVariantOption[]
}

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  name: string
  brand: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  stock: number
  shortDescription: string
  description: string
  highlights: string[]
  images: ProductImage[]
  variants: ProductVariant[]
  specifications: ProductSpec[]
  tags: string[]
}

const img = (seed: string, alt: string): ProductImage => ({
  url: `https://picsum.photos/seed/${seed}/900/900`,
  alt,
})

export const products: Product[] = [
  {
    id: "1",
    name: "AeroPods Pro 无线主动降噪耳机",
    brand: "AeroSound",
    category: "影音耳机",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviewCount: 2143,
    stock: 128,
    shortDescription: "双芯片主动降噪，空间音频与新版 H2 芯片带来通透纯净的听感。",
    description:
      "AeroPods Pro 采用全新双芯片主动降噪架构，可将环境噪声最多降低 2 倍。自适应通透模式让你在听音乐的同时，依然能清晰感知周围世界。配合个性化空间音频与动态头部追踪，带来身临其境的沉浸体验。单次充电可聆听 6 小时，搭配充电盒最长可达 30 小时。",
    highlights: [
      "全新 H2 芯片，降噪能力提升一倍",
      "个性化空间音频 + 动态头部追踪",
      "自适应通透模式，自然清晰",
      "IPX4 级防汗防水，运动无忧",
    ],
    images: [
      img("aeropods-1", "AeroPods Pro 正面展示"),
      img("aeropods-2", "AeroPods Pro 充电盒"),
      img("aeropods-3", "AeroPods Pro 佩戴效果"),
      img("aeropods-4", "AeroPods Pro 细节特写"),
    ],
    variants: [
      {
        id: "color",
        name: "颜色",
        options: [
          { label: "午夜黑", value: "midnight" },
          { label: "星光白", value: "starlight" },
          { label: "远峰蓝", value: "sierra" },
        ],
      },
    ],
    specifications: [
      { label: "芯片", value: "H2 芯片" },
      { label: "续航", value: "耳机 6 小时 / 含盒 30 小时" },
      { label: "防水等级", value: "IPX4" },
      { label: "蓝牙版本", value: "蓝牙 5.3" },
      { label: "重量", value: "单只 5.3g" },
    ],
    tags: ["降噪", "无线", "空间音频"],
  },
  {
    id: "2",
    name: "Lumina 27 4K 智能护眼显示器",
    brand: "Lumina",
    category: "电脑外设",
    price: 2399,
    originalPrice: 2799,
    rating: 4.7,
    reviewCount: 876,
    stock: 53,
    shortDescription: "27 英寸 4K IPS 面板，硬件级低蓝光，内置智能光感调节。",
    description:
      "Lumina 27 采用 27 英寸 4K IPS 面板，覆盖 99% sRGB 色域，出厂逐台校色确保色彩精准。硬件级低蓝光技术从源头减少有害蓝光，长时间使用也不易疲劳。内置环境光传感器，可根据周围光线自动调整亮度与色温，配合 Type-C 90W 反向供电，一根线即可连接笔记本并完成充电。",
    highlights: [
      "27 英寸 4K IPS，99% sRGB 色域",
      "硬件级低蓝光，护眼不偏色",
      "智能光感，自动调节亮度色温",
      "Type-C 90W 一线连，反向供电",
    ],
    images: [
      img("lumina-1", "Lumina 27 显示器正面"),
      img("lumina-2", "Lumina 27 接口区域"),
      img("lumina-3", "Lumina 27 桌面布置"),
      img("lumina-4", "Lumina 27 支架细节"),
    ],
    variants: [
      {
        id: "stand",
        name: "支架版本",
        options: [
          { label: "标准支架", value: "standard" },
          { label: "旋转升降支架", value: "ergo" },
        ],
      },
    ],
    specifications: [
      { label: "尺寸", value: "27 英寸" },
      { label: "分辨率", value: "3840 × 2160 (4K)" },
      { label: "面板类型", value: "IPS" },
      { label: "刷新率", value: "60Hz" },
      { label: "接口", value: "HDMI 2.0 × 2 / Type-C 90W / USB-A × 2" },
    ],
    tags: ["4K", "护眼", "Type-C"],
  },
  {
    id: "3",
    name: "TrailRunner 轻量缓震跑鞋",
    brand: "Velox",
    category: "运动户外",
    price: 599,
    rating: 4.6,
    reviewCount: 1520,
    stock: 0,
    shortDescription: "超临界发泡中底，回弹轻盈，透气网面久穿不闷。",
    description:
      "TrailRunner 搭载超临界发泡中底，相比传统 EVA 更轻、回弹更高，每一步都获得充沛能量回馈。工程网布鞋面兼顾透气与包裹，配合分区橡胶大底，在湿滑路面也能稳稳抓地。单只仅约 230g，是日常慢跑与通勤的理想之选。",
    highlights: [
      "超临界发泡中底，高回弹轻量化",
      "工程网布鞋面，透气不闷脚",
      "分区橡胶大底，湿滑路面也防滑",
      "单只约 230g，轻盈无负担",
    ],
    images: [
      img("trail-1", "TrailRunner 跑鞋侧面"),
      img("trail-2", "TrailRunner 跑鞋鞋底"),
      img("trail-3", "TrailRunner 跑鞋上脚"),
      img("trail-4", "TrailRunner 跑鞋鞋头"),
    ],
    variants: [
      {
        id: "color",
        name: "配色",
        options: [
          { label: "极光绿", value: "aurora" },
          { label: "暗夜灰", value: "shadow" },
          { label: "珊瑚橙", value: "coral" },
        ],
      },
      {
        id: "size",
        name: "尺码",
        options: [
          { label: "39", value: "39" },
          { label: "40", value: "40" },
          { label: "41", value: "41" },
          { label: "42", value: "42" },
          { label: "43", value: "43" },
        ],
      },
    ],
    specifications: [
      { label: "中底", value: "超临界发泡" },
      { label: "单只重量", value: "约 230g (42 码)" },
      { label: "鞋面", value: "工程网布" },
      { label: "适用场景", value: "慢跑 / 通勤" },
      { label: "落差值", value: "8mm" },
    ],
    tags: ["跑鞋", "缓震", "轻量"],
  },
  {
    id: "4",
    name: "BrewMaster 全自动意式咖啡机",
    brand: "BaristaCo",
    category: "厨房电器",
    price: 3299,
    originalPrice: 3699,
    rating: 4.9,
    reviewCount: 642,
    stock: 37,
    shortDescription: "一键研磨萃取，15Bar 泵压，奶泡系统还原咖啡馆口感。",
    description:
      "BrewMaster 集成锥形磨豆机与 15Bar 高压泵，从豆到杯一键完成。精准温控系统将水温稳定在 92°C，充分释放咖啡香气。自带自动奶泡系统，可制作拿铁、卡布奇诺等多种奶咖。可拆卸水箱与接水盘让清洁变得简单，每日一杯，轻松享受咖啡馆级口感。",
    highlights: [
      "锥形磨豆机，一键现磨现萃",
      "15Bar 高压泵，油脂丰盈",
      "精准温控 92°C，风味稳定",
      "自动奶泡系统，轻松做奶咖",
    ],
    images: [
      img("brew-1", "BrewMaster 咖啡机整体"),
      img("brew-2", "BrewMaster 操作面板"),
      img("brew-3", "BrewMaster 萃取过程"),
      img("brew-4", "BrewMaster 出品咖啡"),
    ],
    variants: [
      {
        id: "color",
        name: "颜色",
        options: [
          { label: "钢琴黑", value: "black" },
          { label: "云朵白", value: "white" },
        ],
      },
    ],
    specifications: [
      { label: "泵压", value: "15Bar" },
      { label: "水箱容量", value: "1.8L" },
      { label: "豆仓容量", value: "250g" },
      { label: "温控", value: "92°C 精准控温" },
      { label: "额定功率", value: "1450W" },
    ],
    tags: ["咖啡机", "全自动", "奶泡"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
