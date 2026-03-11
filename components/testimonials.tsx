"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "ÉLAN의 옷은 단순한 패션이 아닙니다. 입는 순간 자신감이 생기고, 어떤 자리에서든 빛나게 해주는 마법 같은 경험이에요.",
    author: "김민지",
    role: "패션 블로거",
    source: "Instagram"
  },
  {
    quote: "15년간 ÉLAN의 고객입니다. 변함없는 품질과 세련된 디자인, 그리고 무엇보다 옷 하나하나에 담긴 정성이 느껴집니다.",
    author: "박서준",
    role: "기업 대표",
    source: "Customer Review"
  },
  {
    quote: "지속가능한 패션을 실천하면서도 트렌드를 놓치지 않는 브랜드. ÉLAN은 미래 패션의 방향성을 보여주고 있어요.",
    author: "이하은",
    role: "환경 활동가",
    source: "Magazine Interview"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 sm:py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
            Testimonials
          </p>
          <Quote className="h-12 w-12 mx-auto mb-8 text-primary-foreground/30" />
          
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed mb-10 text-balance">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          <div className="mb-8">
            <p className="font-medium text-lg">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-primary-foreground/60">
              {testimonials[currentIndex].role} · {testimonials[currentIndex].source}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="이전 후기"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? "bg-primary-foreground" 
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`후기 ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="다음 후기"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
