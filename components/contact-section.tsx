import { MapPin, Phone, Clock, Mail } from "lucide-react"

const hours = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Stop By Today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We&apos;d love to see you at our shop. Come on in, meet the team, 
            and let us help you find the perfect cut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  123 Main Street<br />
                  Downtown, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@macleodsmeats.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@macleodsmeats.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Hours
                </h3>
                <ul className="space-y-1">
                  {hours.map((item) => (
                    <li
                      key={item.day}
                      className="flex justify-between gap-8 text-muted-foreground"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.hours === "Closed" ? "text-primary" : ""}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map Placeholder / Note about deals */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-sm bg-muted flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-serif text-xl font-bold text-foreground mb-2">
                  Find Us Downtown
                </p>
                <p className="text-muted-foreground mb-4">
                  123 Main Street
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-sm border border-primary/20">
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                Daily Specials
              </h3>
              <p className="text-muted-foreground text-sm">
                Check our in-store blackboard for today&apos;s deals and specials. 
                We update it daily with fresh offerings and seasonal favorites!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
