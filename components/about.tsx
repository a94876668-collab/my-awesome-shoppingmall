export function About() {
  const values = [
    {
      number: "01",
      title: "품질",
      description: "최고급 소재만을 엄선하여 오래도록 사랑받는 의류를 제작합니다."
    },
    {
      number: "02", 
      title: "지속가능성",
      description: "환경을 생각하는 지속가능한 패션을 추구하며 미래를 준비합니다."
    },
    {
      number: "03",
      title: "장인정신",
      description: "숙련된 장인들의 손끝에서 완성되는 섬세한 디테일을 담습니다."
    }
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-balance">
            우리가 추구하는 가치
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ÉLAN은 단순한 옷을 넘어, 당신의 삶에 영감을 불어넣는 
            브랜드가 되고자 합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div 
              key={value.number}
              className="group p-8 border border-border rounded-sm bg-card hover:border-foreground/30 transition-all duration-300"
            >
              <span className="text-5xl font-serif font-light text-muted-foreground/30 group-hover:text-accent transition-colors">
                {value.number}
              </span>
              <h3 className="text-xl font-medium mt-4 mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
