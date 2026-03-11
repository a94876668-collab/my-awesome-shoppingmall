import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    title: "MD (머천다이저)",
    department: "상품기획팀",
    description: "시즌별 컬렉션 기획 및 상품 라인업 구성, 바잉 업무를 담당합니다.",
    requirements: [
      "패션/의류 관련 학과 졸업 또는 유사 경력 3년 이상",
      "트렌드 분석 및 시장 조사 역량",
      "Excel, 데이터 분석 도구 활용 능력",
      "해외 바잉 경험 우대",
    ],
  },
  {
    title: "패션 디자이너",
    department: "디자인팀",
    description: "시즌 컬렉션 디자인 및 패턴 개발, 샘플 제작 관리를 담당합니다.",
    requirements: [
      "패션 디자인 관련 학과 졸업",
      "Illustrator, Photoshop 등 디자인 툴 활용 능력",
      "포트폴리오 제출 필수",
      "프리미엄 의류 브랜드 경험 우대",
    ],
  },
  {
    title: "마케팅 매니저",
    department: "마케팅팀",
    description: "브랜드 마케팅 전략 수립 및 캠페인 기획, 디지털 마케팅을 담당합니다.",
    requirements: [
      "마케팅/광고 관련 경력 3년 이상",
      "SNS, 디지털 광고 채널 운영 경험",
      "데이터 기반 마케팅 분석 역량",
      "패션/럭셔리 브랜드 경험 우대",
    ],
  },
  {
    title: "영업/매장 관리",
    department: "영업팀",
    description: "매장 운영 관리, VIP 고객 관리, 매출 극대화 업무를 담당합니다.",
    requirements: [
      "고객 서비스 및 매장 운영 경험",
      "매출 분석 및 재고 관리 역량",
      "커뮤니케이션 능력",
      "프리미엄 리테일 경험 우대",
    ],
  },
]

export default function RecruitmentPage() {
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
              Careers
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
              채용정보
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              ÉLAN과 함께 시대를 초월하는 패션을 만들어갈 인재를 찾습니다.
              아래 직무별 자격요건을 확인하시고, 관심 있는 분야로 지원해 주세요.
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-12">
            {jobOpenings.map((job, index) => (
              <article
                key={index}
                className="border border-border rounded-sm p-8 bg-card hover:border-foreground/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {job.department}
                    </span>
                    <h2 className="text-xl font-semibold mt-1">{job.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {job.description}
                </p>
                <div>
                  <h3 className="text-sm font-medium mb-3">자격요건</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-foreground mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 border border-border rounded-sm bg-muted/30 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              지원 문의: careers@elan-fashion.com
            </p>
            <p className="text-xs text-muted-foreground">
              이력서 및 포트폴리오를 위 메일로 보내주시면 검토 후 연락드리겠습니다.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
