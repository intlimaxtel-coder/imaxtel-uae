import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "IMAXTEL GOODS WHOLESALERS CO. L.L.C | FMCG Import & Distribution UAE & GCC",
    template: "%s | IMAXTEL GOODS WHOLESALERS CO. L.L.C"
  },
  description: "IMAXTEL GOODS WHOLESALERS CO. L.L.C is a premier FMCG import, wholesale distribution, and retail group operating across UAE & Kuwait (GCC). Sourcing premium food, beverages, rice, and household products.",
  keywords: [
    "IMAxtel UAE",
    "IMAxtel Kuwait",
    "IMAXTEL GOODS WHOLESALERS CO. L.L.C",
    "FMCG Import Dubai",
    "Wholesale Distribution UAE",
    "Goods Wholesalers Dubai",
    "Burj Nahar Mall Dubai",
    "Al Zibin Complex Salmiya Kuwait",
    "Rice Importers UAE",
    "Malabar Food Stuff",
    "Manila Supermarket UAE",
    "IMAXCLEAN Household",
    "Logistics & SCM UAE & GCC"
  ],
  metadataBase: new URL("https://www.imaxtelglobal.ae"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE & GCC | FMCG Leader",
    description: "Connecting global sourcing with UAE & GCC distribution networks. Discover our divisions: IMAxtel Import & Distribution, Malabar Food Stuff, Manila Supermarket, and IMAXCLEAN.",
    url: "https://www.imaxtelglobal.ae",
    siteName: "IMAxtel Group UAE & GCC",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE & GCC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE & GCC",
    description: "Leading FMCG import, wholesale distribution, and retail group in the UAE & GCC.",
    images: ["/assets/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IMAXTEL GOODS WHOLESALERS CO. L.L.C",
    "alternateName": "IMAxtel Group UAE & GCC",
    "url": "https://www.imaxtelglobal.ae",
    "logo": "https://www.imaxtelglobal.ae/imaxtellogo.png",
    "description": "Premier FMCG import, wholesale distribution, and retail business group operating in Dubai, UAE and Salmiya, Kuwait.",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressLocality": "Dubai",
        "streetAddress": "Muteena Street, Burj Nahar Mall, M2 Floor, Office No. A30"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "KW",
        "addressLocality": "Salmiya",
        "streetAddress": "Office No-6, 2nd Floor, Al Zibin Complex, Salem Al Mubraak Street, Block 9"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "general inquiries",
        "email": "info@imaxtelintl.ae",
        "telephone": "+971588179166",
        "areaServed": ["AE", "KW", "GCC"],
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "careers & HR",
        "email": "hr@imaxtelintl.ae",
        "areaServed": ["AE", "KW", "GCC"],
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "sameAs": [
      "https://www.imaxtelglobal.ae"
    ]
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-deep-charcoal selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-1 flex flex-col relative overflow-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
