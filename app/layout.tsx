import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MacLeod's Meat Locker | Quality Meats Since 2024",
  description: 'Your trusted neighborhood butcher. Quality cuts, local sourcing, and old-fashioned service in our heritage storefront.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "MacLeod's Meat Locker",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1930 Rothesay Rd",
                  "addressLocality": "Rothesay",
                  "addressRegion": "NB",
                  "postalCode": "E2H 2J6",
                  "addressCountry": "CA"
                },
                "telephone": "+15065520429",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "14:00"
                  }
                ],
                "url": "https://www.macleodsmeats.com",
                "image": "https://www.macleodsmeats.com/logo.jpg",
                "priceRange": "$$",
                "servesCuisine": "Butcher Shop",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61571316334471",
                  "https://www.instagram.com/macleodsmeatlocker/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.macleodsmeats.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Our Selection",
                    "item": "https://www.macleodsmeats.com/#products"
                  }
                ]
              }
            ])
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
