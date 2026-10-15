import Image from "next/image"
import Link from "next/link"
import { products } from "@/mock/products"

function formatPrice(value: number) {
  return `¥${value.toLocaleString("zh-CN")}`
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
          商品列表
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          共 {products.length} 件商品，点击查看详情
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/product/${product.id}`}
              className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <p className="text-xs text-zinc-400">
                  {product.brand} · {product.category}
                </p>
                <h2 className="line-clamp-2 min-h-10 text-sm font-medium text-zinc-900">
                  {product.name}
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-semibold text-red-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-zinc-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-zinc-500">
                  <span className="text-amber-500">★ {product.rating}</span>
                  <span>
                    {product.stock > 0 ? "现货" : "缺货"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
