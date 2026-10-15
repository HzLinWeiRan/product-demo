"use client"

import Image from "next/image"
import { useState } from "react"
import type { ProductImage } from "@/mock/products"

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={current.url}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image.url}
            type="button"
            onClick={() => setActive(index)}
            aria-label={image.alt}
            className={`relative aspect-square overflow-hidden rounded-xl bg-zinc-100 transition ring-2 ${
              index === active
                ? "ring-zinc-900"
                : "ring-transparent hover:ring-zinc-300"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
