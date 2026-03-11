import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Package, RefreshCw, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

const policySections = [
  {
    icon: Package,
    title: "반품/교환 가능 기간",
    content: [
      "상품 수령일로부터 7일 이내에 반품 또는 교환이 가능합니다.",
      "단, 상품의 하자나 오배송의 경우에는 수령일로부터 30일 이내 신청 가능합니다.",
    ],
  },
  {
    icon: RefreshCw,
    title: "반품/교환 신청 방법",
    content: [
      "고객센터(02-1234-5678) 또는 이메일(hello@elan-fashion.com)로 문의해 주세요.",
      "반품/교환 신청서를 작성 후 상품과 함께 보내주시면 됩니다.",
      "반품/교환 신청서는 고객센터 요청 시 이메일로 발송해 드립니다.",
    ],
  },
  {
    icon: CreditCard,
    title: "환불 절차",
    content: [
      "반품 상품이 ÉLAN 입고 확인 후 3~5 영업일 내에 환불 처리됩니다.",
      "신용카드 결제: 카드사에 따라 환불 기간이 3~7영업일 소요될 수 있습니다.",
      "계좌이체: 환불 계좌 정보가 확인되면 3~5 영업일 내 입금됩니다.",
    ],
  },
]

const conditions = [
  {
    title: "반품/교환 가능 조건",
    items: [
      "상품 수령 후 7일 이내에 신청한 경우",
      "상품이 미착용 상태이며, 태그와 포장이 완전한 경우",
      "고객의 단순 변심으로 인한 경우 (반품 배송비는 고객 부담)",
    ],
  },
  {
    title: "반품/교환 불가 조건",
    items: [
      "고객님의 착용, 사용으로 인한 상품 가치가 훼손된 경우",
      "태그 제거, 포장 훼손 또는 분실된 경우",
      "세일 상품 및 한정판매 상품 (단, 하자의 경우 제외)",
      "주문 시 제작되는 맞춤 제작 상품",
    ],
  },
]

export default function ReturnsExchangePage() {
  return (
    <main>
      <Header />
      <div className="pt-16 min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Link */}
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              메인으로 돌아가기
            </Button>
          </Link>

          {/* Page Header */}
          <div className="mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Customer Service
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              반품 및 교환
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              ÉLAN은 고객님의 만족을 최우선으로 생각합니다.
              아래 안내를 확인하시고, 궁금한 점이 있으시면 언제든 연락 주세요.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12 mb-16">
            {policySections.map((section, index) => (
              <article
                key={index}
                className="border border-border rounded-sm p-8 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-full shrink-0">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-foreground mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="border border-border rounded-sm p-8 bg-card"
              >
                <h3 className="text-lg font-semibold mb-4">{condition.title}</h3>
                <ul className="space-y-2">
                  {condition.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-foreground mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="p-8 border border-border rounded-sm bg-muted/30 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              추가 문의사항이 있으시면 언제든 연락 주세요.
            </p>
            <p className="font-medium">고객센터 02-1234-5678</p>
            <p className="text-sm text-muted-foreground mt-1">이메일 hello@elan-fashion.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
