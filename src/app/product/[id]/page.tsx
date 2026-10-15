import Link from "next/link"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { getProductById, products } from "@/mock/products"
import { ProductGallery } from "./product-gallery"
import { ProductActions } from "./product-actions"

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: "商品未找到 - Product Demo" }
  return {
    title: `${product.name} - Product Demo`,
    description: product.shortDescription,
  }
}

function formatPrice(value: number) {
  return `¥${value.toLocaleString("zh-CN")}`
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetail params={params} />
    </Suspense>
  )
}

async function ProductDetail({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-zinc-900">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm text-zinc-500">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-zinc-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-amber-500">★ {product.rating}</span>
            <span className="text-zinc-500">
              {product.reviewCount.toLocaleString("zh-CN")} 条评价
            </span>
          </div>

          <div className="flex items-end gap-3 rounded-2xl bg-zinc-50 px-5 py-4">
            <span className="text-3xl font-semibold text-red-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {discount > 0 && (
              <span className="rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                省 {discount}%
              </span>
            )}
          </div>

          <ul className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          <ProductActions product={product} />

          <p className="text-sm text-zinc-500">
            {product.stock > 0
              ? `现货充足 · 剩余库存 ${product.stock} 件`
              : "暂时缺货"}
            · 预计 48 小时内发货
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900">商品亮点</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {product.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-zinc-700"
            >
              <span className="mt-0.5 text-emerald-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900">商品介绍</h2>
        <p className="max-w-3xl leading-7 text-zinc-700">
          {product.description}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900">规格参数</h2>
        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr
                  key={spec.label}
                  className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <td className="w-40 px-4 py-3 text-zinc-500">
                    {spec.label}
                  </td>
                  <td className="px-4 py-3 text-zinc-900">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

function ProductDetailSkeleton() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="aspect-square w-full animate-pulse rounded-2xl bg-zinc-100" />
        <div className="flex flex-col gap-5">
          <div className="h-4 w-32 animate-pulse rounded bg-zinc-100" />
          <div className="h-8 w-3/4 animate-pulse rounded bg-zinc-100" />
          <div className="h-4 w-40 animate-pulse rounded bg-zinc-100" />
          <div className="h-16 w-full animate-pulse rounded-2xl bg-zinc-100" />
          <div className="h-10 w-full animate-pulse rounded bg-zinc-100" />
          <div className="h-10 w-2/3 animate-pulse rounded bg-zinc-100" />
        </div>
      </div>
    </main>
  )
}
