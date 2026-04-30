"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Text Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight">MacLeod&apos;s</span>
            <span className="text-xs tracking-widest uppercase opacity-80">Meat Locker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary-foreground px-4 py-2.5 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90 mt-2"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
