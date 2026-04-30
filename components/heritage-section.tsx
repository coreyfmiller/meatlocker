import Image from "next/image"

export function HeritageSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Heritage Building Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YHn1SlHcUHixqokTBOFIkeL4NSRW2a.png"
                alt="The historic Colwell's Building, now home to MacLeod's Meat Locker"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-sm shadow-lg">
              <p className="font-serif text-lg font-bold">Est. 1946</p>
            </div>
          </div>

          {/* History Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              Our Building
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6">
              A History of Food & Community
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Built in 1946, this building has served the Renforth community for over 
                half a century. For many years it operated as Colwell&apos;s Grocery, providing 
                fresh produce, household goods, and quality meats to generations of local families.
              </p>
              <p>
                Today, MacLeod&apos;s Meat Locker has returned this heritage building to its 
                original roots as a butcher and meat shop. We&apos;re proud to revive that 
                traditional village butcher feel, focusing on locally sourced beef and custom cuts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
