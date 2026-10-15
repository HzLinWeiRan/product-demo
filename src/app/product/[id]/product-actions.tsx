"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/mock/products"

export function ProductActions({ product }: { product: Product }) {
  const [selected, setSelected] = useState<Record<string, string>>(
    Object.fromEntries(product.variants.map((v) => [v.id, v.options[0].value])),
  )
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const inStock = product.stock > 0

  const selectedLabels = useMemo(
    () =>
      product.variants.map((variant) => {
        const value = selected[variant.id]
        return variant.options.find((o) => o.value === value)?.label ?? ""
      }),
    [product.variants, selected],
  )

  function choose(variantId: string, value: string) {
    setSelected((prev) => ({ ...prev, [variantId]: value }))
    setAdded(false)
  }

  function changeQuantity(next: number) {
    setQuantity(Math.min(Math.max(1, next), product.stock))
    setAdded(false)
  }

  function addToCart() {
    setAdded(true)
    // 仅作演示：真实项目此处调用购物车接口
    console.log("加入购物车", {
      id: product.id,
      selected,
      quantity,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      {product.variants.map((variant, index) => (
        <div key={variant.id}>
          <p className="mb-2 text-sm font-medium text-zinc-900">
            {variant.name}：
            <span className="ml-1 text-zinc-500">
              {selectedLabels[index]}
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {variant.options.map((option) => {
              const active = selected[variant.id] === option.value
              return (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => choose(variant.id, option.value)}
                  className={`rounded-lg border px-4 py-2 text-sm transition ${
                    active
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <div>
        <p className="mb-2 text-sm font-medium text-zinc-900">数量</p>
        <div className="inline-flex items-center rounded-lg border border-zinc-200">
          <button
            type="button"
            onClick={() => changeQuantity(quantity - 1)}
            disabled={!inStock || quantity <= 1}
            className="px-4 py-2 text-lg leading-none text-zinc-700 disabled:opacity-40"
          >
            −
          </button>
          <span className="w-12 text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => changeQuantity(quantity + 1)}
            disabled={!inStock || quantity >= product.stock}
            className="px-4 py-2 text-lg leading-none text-zinc-700 disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={addToCart}
          disabled={!inStock}
          className="flex-1 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
        >
          {added ? "已加入购物车 ✓" : "加入购物车"}
        </button>
        <button
          type="button"
          disabled={!inStock}
          className="flex-1 rounded-full border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white disabled:cursor-not-allowed disabled:border-zinc-200 disabled:text-zinc-300"
        >
          立即购买
        </button>
      </div>

      {!inStock && (
        <p className="text-sm text-red-600">该商品暂时缺货，已开放到货通知。</p>
      )}
    </div>
  )
}
