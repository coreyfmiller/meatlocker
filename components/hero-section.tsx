import Image from "next/image"
import { MapPin, Clock } from "lucide-react"

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

            {/* Quick Info */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-foreground/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">123 Main Street</p>
                  <p className="text-sm text-muted-foreground">Downtown</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Mon-Sat: 8am - 6pm</p>
                  <p className="text-sm text-muted-foreground">Closed Sundays</p>
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

          {/* Logo and Heritage Building */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Large Logo Display */}
            <div className="w-full max-w-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lXwbsFUesfpSWj3fZtSFfF7bVvv51J.png"
                alt="MacLeod's Meat Locker - Est. 2024"
                width={500}
                height={500}
                className="w-full h-auto rounded-sm shadow-2xl"
                priority
              />
            </div>
            
            {/* Heritage Building - Desktop Only */}
            <div className="hidden lg:block relative w-full max-w-sm">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border-4 border-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YHn1SlHcUHixqokTBOFIkeL4NSRW2a.png"
                  alt="MacLeod's Meat Locker heritage storefront"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center mt-3 text-sm text-muted-foreground italic">Our heritage storefront</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
