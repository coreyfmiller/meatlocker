import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo and tagline */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold">MacLeod&apos;s</span>
              <span className="block text-xs tracking-widest uppercase opacity-80">Meat Locker</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Quality meats and old-fashioned service in our heritage storefront. 
              Your trusted neighborhood butcher since 2024.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61571316334471" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/macleodsmeatlocker/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>1930 Rothesay Rd</li>
              <li>Rothesay, NB E2H 2J6</li>
              <li>
                <a href="tel:+15065520429" className="hover:text-primary-foreground transition-colors">
                  (506) 552-0429
                </a>
              </li>
              <li>
                <a href="mailto:info@macleodsmeats.com" className="hover:text-primary-foreground transition-colors">
                  info@macleodsmeats.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} MacLeod&apos;s Meat Locker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
