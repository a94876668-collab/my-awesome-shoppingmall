import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BrandStory() {
  return (
    <section id="brand" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                alt="ÉLAN 브랜드 이미지"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-foreground/20 rounded-sm hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-8 leading-tight text-balance">
              혁신과 전통이
              <br />
              만나는 곳
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                2010년, 서울 한복판에서 시작된 ÉLAN은 한국 패션의 새로운 장을 열었습니다. 
                우리는 동양의 섬세함과 서양의 세련미를 조화롭게 융합하여, 
                세계가 주목하는 독창적인 스타일을 창조해왔습니다.
              </p>
              <p>
                매 시즌, 우리는 최고급 원단을 직접 선별하고, 
                숙련된 장인들의 손길로 한 벌 한 벌 정성을 다해 제작합니다. 
                ÉLAN의 옷은 단순한 의류가 아닌, 입는 이의 이야기를 담은 예술 작품입니다.
              </p>
            </div>

            <div className="flex items-center gap-12 mt-10 pt-10 border-t border-border">
              <div>
                <span className="block text-4xl font-serif font-medium">15+</span>
                <span className="text-sm text-muted-foreground">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-medium">50K+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-medium">12</span>
                <span className="text-sm text-muted-foreground">Global Stores</span>
              </div>
            </div>

            <Button className="mt-10" size="lg">
              더 알아보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
