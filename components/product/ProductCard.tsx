"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"
import { Star } from "@deemlol/next-icons"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="
        bg-white
        rounded-xl
        pt-2 px-2 pb-4
        hover:shadow-lg
        hover:-translate-y-1
        transition
        cursor-pointer
        "
      >
        <div className="flex justify-center rounded-2xl">
          <div className="overflow-hidden rounded-xl">
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.title}
              className="
              h-40
              object-cover
              "
            />
          </div>
        </div>

        <h2
          className="
          my-3
          font-semibold
          text-xl
          line-clamp-2
          "
        >
          {product.title}
        </h2>
        
        <div className="flex items-center gap-2 rounded-full">
          <Star size={16} color="#f59e0b" strokeWidth={3} />
          <p>{product.rating.rate}/5 ({product.rating.count})</p>
        </div>

        <p
          className="
          text-lg
          font-bold
          text-primary
          "
        >
          ${product.price}
        </p>
      </div>
    </Link>
  )
}