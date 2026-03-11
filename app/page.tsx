import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BrandStory } from "@/components/brand-story"
import { Collections } from "@/components/collections"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <BrandStory />
      <Collections />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
