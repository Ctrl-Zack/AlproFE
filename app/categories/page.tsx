"use client"

import { useCategories } from "@/hooks/useCategories"
import type { Category } from "@/types/product"

export default function CategoriesPage() {
  const { data } = useCategories() as { data: string[] | undefined }
  return (
    <div className="flex flex-col items-center justify-center w-full px-10">
      <h1 className="text-2xl font-bold mb-5">Categories</h1>

      <ul className="space-y-2">
        {data?.map((categoryName: string) => (
          <li key={categoryName} className="capitalize px-4 py-2 mb-3 text-semibold bg-primary text-white rounded-full text-center">
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}