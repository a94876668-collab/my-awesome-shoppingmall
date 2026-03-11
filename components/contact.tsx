"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-balance">
              함께 이야기해요
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              ÉLAN에 대해 더 알고 싶으시거나 협업 제안이 있으시다면 
              언제든 연락 주세요. 빠른 시일 내에 답변 드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">이메일</p>
                  <p className="font-medium">hello@elan-fashion.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">전화</p>
                  <p className="font-medium">02-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">플래그십 스토어</p>
                  <p className="font-medium">서울특별시 강남구 압구정로 123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-sm border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    이름
                  </label>
                  <Input 
                    id="name" 
                    placeholder="홍길동" 
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    이메일
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com"
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  제목
                </label>
                <Input 
                  id="subject" 
                  placeholder="문의 제목을 입력해주세요"
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  메시지
                </label>
                <Textarea 
                  id="message" 
                  placeholder="메시지를 입력해주세요"
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
