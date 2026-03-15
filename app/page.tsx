import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "@deemlol/next-icons"
import { Star } from "@deemlol/next-icons"
import { products } from "@/fakedata/fakeproduct"

export default function HomePage() {
  const heroProduct = products.find((p: { id: number }) => p.id === 5) || products[0];

  return (
  <div className="relative min-h-screen overflow-y-hidden">
    <div className="w-full h-[30vh] px-24 mt-16 mb-30 flex flex-row items-center justify-between gap-6">
      <p className="max-w-50 text-justify">Exploring Algorithms, AI, and Intelligent Systems Building Future Problem Solvers & Tech Innovators</p>
      <h1 className="text-6xl text-primary font-extrabold text-center">WELCOME<br />TO<br />ALPROSHOP</h1>
      <div className="rounded-2xl overflow-hidden w-50 transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:drop-shadow-2xl">
        <Image
          width={640}
          height={800}
          src={heroProduct.image}
          alt={heroProduct.title}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
    
    <div className="w-full p-10 flex gap-x-44 items-center justify-center">
      <Link href="/products" className="bg-primary text-background px-4 py-1.5 flex items-center gap-2 rounded-full">
        Browse Products
        <ArrowRight size={16} color="white" strokeWidth={2} />
      </Link>
      <div className="rounded-2xl overflow-hidden h-100 transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:drop-shadow-2xl">
        <Image
          width={640}
          height={800}
          src={heroProduct.image}
          alt={heroProduct.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="bg-white px-4 py-1.5 flex items-center gap-2 rounded-full">
        <Star size={16} color="#f59e0b" strokeWidth={3} />
        <p>{heroProduct.rating.rate}/5 ({heroProduct.rating.count})</p>
      </div>
    </div>

    <h1 className="fixed bottom-10 left-0 right-0 flex justify-center 
                  text-[15vw] font-black text-secondary -z-10 
                  select-none pointer-events-none whitespace-nowrap
                  leading-none">
        ALPROSHOP
    </h1>
  </div>
  )
}