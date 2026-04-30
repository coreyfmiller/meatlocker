import { Award, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Our head butcher, John MacLeod, with over 20 years of experience, personally hand-selects every cut, ensuring only the finest meats reach your table.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Personal service is a cornerstone of our philosophy, ensuring every customer feels valued. Know your butcher, know your meat.",
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    description:
      "Whenever possible, we partner with local farms to bring you fresh, responsibly raised meats.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            A Tradition of Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            MacLeod&apos;s Meat Locker carries on the time-honored tradition of the neighborhood 
            butcher. In our heritage storefront, you&apos;ll find the same dedication to quality 
            and service that has defined great butcher shops for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-sm bg-background border border-border transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
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
