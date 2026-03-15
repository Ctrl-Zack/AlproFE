"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

export default function ProductsPage() {
  const { data, isLoading } = useProducts()

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center w-full px-10">
        <h1 className="text-2xl font-bold mb-5">Products</h1>
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          "
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center w-full px-10">
        <h1 className="text-2xl font-bold mb-5">Products</h1>
      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-6
        "
      >
        {data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}