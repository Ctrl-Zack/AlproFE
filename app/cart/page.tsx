"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import { MinusCircle, PlusCircle, Trash2 } from "@deemlol/next-icons"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {items && items.length > 0 ? (
        <div className="grid gap-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-2xl">
                <div className="w-24 h-24 bg-background rounded-xl overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                  <p className="text-primary font-bold text-lg">${item.price}</p>
                </div>

                <div className="flex items-center gap-3 bg-primary text-white rounded-full px-3 py-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="p-1 hover:bg-white rounded-full transition-colors disabled:opacity-30"
                  >
                    <MinusCircle size={16} color="#FFFFFF" strokeWidth={2} />
                  </button>
                  <span className="font-medium min-w-5 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-white rounded-full transition-colors"
                  >
                    <PlusCircle size={16} color="#FFFFFF" strokeWidth={2} />
                  </button>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 size={16} color="red" strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-3xl flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Amount</p>
              <h2 className="text-2xl font-black">${totalPrice.toFixed(2)}</h2>
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-xl text-gray-500 mb-6">Your cart is feeling lonely... :(</p>
          <a href="/products" className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold">
            Start Shopping
          </a>
        </div>
      )}
    </div>
  )
}
