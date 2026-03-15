"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useProduct } from "@/hooks/useProduct"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"
import { Star, X } from "@deemlol/next-icons"

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data } = useProduct(id as string)
  const { addItem } = useCart()

  if (!data) return <div>Loading...</div>

  return (
    <div
      className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-2
      gap-10
      bg-white
      p-8
      rounded-xl
      shadow-sm
      "
    >
      <div className="rounded-xl overflow-hidden">
        <Image 
          src={data.image}
          alt={data.title}
          width={406}
          height={280}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <div className="flex items-center justify-between w-full mb-5">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          
          <Button 
            onClick={() => window.history.back()}
            className="bg-primary p-2 rounded-full hover:scale-110 transition"
          >
            <X size={16} color="white" strokeWidth={3} />
          </Button>
        </div>
        <p className="text-gray-600 mt-4">{data.description}</p>

        <div className="flex items-center justify-between w-40 mb-2 mt-2">

          <p
            className="
            text-2xl
            font-bold
            text-primary
            "
          >
            ${data.price}
          </p>
          <div className="flex items-center gap-2 rounded-full">
            <Star size={16} color="#f59e0b" strokeWidth={3} />
            <p>{data.rating.rate}/5 ({data.rating.count})</p>
          </div>
        </div>

        <Button
          onClick={() =>
            addItem({
              id: data.id,
              title: data.title,
              price: data.price,
              image: data.image,
              quantity: 1,
            })
          }
        >
            Add to Cart
          </Button>
      </div>
    </div>
  )
}