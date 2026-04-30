import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Background with heritage building */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YHn1SlHcUHixqokTBOFIkeL4NSRW2a.png"
          alt="MacLeod's Meat Locker storefront"
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Quality Meats, <br className="hidden sm:block" />
              Old-Fashioned Service
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From our heritage storefront to your table, we bring you hand-selected cuts, 
              locally sourced whenever possible, and the personal service that has made 
              neighborhood butchers a cornerstone of the community.
            </p>

            {/* Quick Info — two columns */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 max-w-sm justify-center lg:justify-start mx-auto lg:mx-0">
              {/* Left: Address + Phone */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">1930 Rothesay Rd</p>
                    <p className="text-sm text-muted-foreground">Rothesay, NB E2H 2J6</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">(506) 552-0429</p>
                    <p className="text-sm text-muted-foreground">Call us</p>
                  </div>
                </div>
              </div>

              {/* Right: Hours */}
              <div className="flex items-start gap-3 text-foreground/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2">Summer Hours</p>
                  <ul className="space-y-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {[
                      { day: "Monday",    hours: "CLOSED" },
                      { day: "Tuesday",   hours: "10 - 6 PM" },
                      { day: "Wednesday", hours: "10 - 6 PM" },
                      { day: "Thursday",  hours: "10 - 6 PM" },
                      { day: "Friday",    hours: "10 - 6 PM" },
                      { day: "Saturday",  hours: "10 - 6 PM" },
                      { day: "Sunday",    hours: "10 - 2 PM" },
                    ].map((item) => (
                      <li key={item.day} className="flex gap-3">
                        <span className="inline-block w-20 font-medium">{item.day}</span>
                        <span className={item.hours === "CLOSED" ? "text-primary font-semibold" : ""}>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Our Selection
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Visit Us
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-8">
            <div className="w-full max-w-lg lg:max-w-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lXwbsFUesfpSWj3fZtSFfF7bVvv51J.png"
                alt="MacLeod's Meat Locker - Est. 2024"
                width={800}
                height={800}
                className="w-full h-auto rounded-sm shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
