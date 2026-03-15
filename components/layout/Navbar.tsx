"use client"

import Link from "next/link"
import { ShoppingCart } from "@deemlol/next-icons"
import { useCart } from "@/context/CartContext"

export function Navbar() {
  const { items } = useCart()
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className="
      sticky top-0 z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
          text-primary
          "
        >
          AlproShop
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/cart"
            className="
            bg-secondary
            text-white
            px-4 py-1.5
            flex items-center gap-2
            rounded-full
            "
          >
          <ShoppingCart size={16} color="white" strokeWidth={2} />
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  )
}