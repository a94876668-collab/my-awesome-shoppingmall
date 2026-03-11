import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    회사: [
      { label: "소개", href: "/#about" },
      { label: "브랜드 스토리", href: "/#brand" },
      { label: "채용", href: "/recruitment" },
      { label: "보도자료", href: "#" },
    ],
    고객지원: [
      { label: "자주 묻는 질문", href: "#" },
      { label: "배송 정보", href: "#" },
      { label: "반품 및 교환", href: "#" },
      { label: "사이즈 가이드", href: "#" },
    ],
    법적고지: [
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
      { label: "쿠키 정책", href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
              ÉLAN
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              시대를 초월하는 우아함. ÉLAN은 프리미엄 소재와 
              장인 정신으로 당신의 스타일에 품격을 더합니다.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 ÉLAN Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-primary-foreground/50">KRW ₩</span>
            <span className="text-xs text-primary-foreground/50">한국어</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
