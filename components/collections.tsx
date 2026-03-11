"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    title: "여성 컬렉션",
    subtitle: "Women's Collection",
    description: "우아함과 현대적 감각의 조화",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
    itemCount: "42 Products"
  },
  {
    title: "남성 컬렉션", 
    subtitle: "Men's Collection",
    description: "클래식과 모던의 완벽한 균형",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
    itemCount: "38 Products"
  },
  {
    title: "액세서리",
    subtitle: "Accessories",
    description: "스타일을 완성하는 디테일",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1974&auto=format&fit=crop",
    itemCount: "65 Products"
  }
]

export function Collections() {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-balance">
              2026 S/S 컬렉션
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 sm:mt-0"
          >
            모든 컬렉션 보기
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white text-foreground text-sm font-medium rounded-sm">
                    컬렉션 보기
                  </span>
                </div>
              </div>
              
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-lg font-medium mb-1">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {collection.itemCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
