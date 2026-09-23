import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IMAXTEL GOODS WHOLESALERS CO. L.L.C | FMCG Import & Distribution UAE",
    template: "%s | IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE"
  },
  description: "IMAXTEL GOODS WHOLESALERS CO. L.L.C is a premier FMCG import, wholesale distribution, and retail group in the UAE & GCC. Supplying premium food, beverages, rice, and household products from Dubai, UAE.",
  keywords: [
    "IMAxtel UAE",
    "IMAXTEL GOODS WHOLESALERS CO. L.L.C",
    "FMCG Import Dubai",
    "Wholesale Distribution UAE",
    "Goods Wholesalers Dubai",
    "Burj Nahar Mall Dubai",
    "Rice Importers UAE",
    "Malabar Food Stuff",
    "Manila Supermarket UAE",
    "IMAXCLEAN Household",
    "Logistics & SCM UAE"
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
    title: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE | FMCG Leader",
    description: "Connecting global sourcing with UAE & GCC distribution networks. Discover our divisions: IMAxtel Import & Distribution, Malabar Food Stuff, Manila Supermarket, and IMAXCLEAN.",
    url: "https://www.imaxtelglobal.ae",
    siteName: "IMAxtel Group UAE",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IMAXTEL GOODS WHOLESALERS CO. L.L.C UAE",
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
    "alternateName": "IMAxtel Group UAE",
    "url": "https://www.imaxtelglobal.ae",
    "logo": "https://www.imaxtelglobal.ae/imaxtellogo.png",
    "description": "Premier FMCG import, wholesale distribution, and retail business group operating in Dubai, United Arab Emirates and GCC region.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "streetAddress": "Muteena Street, Burj Nahar Mall, M2 Floor, Office No. A30"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "operations@imaxtelglobal.ae",
      "areaServed": ["AE", "GCC", "KW", "SA", "OM", "BH", "QA"],
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.imaxtelglobal.ae"
    ]
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  );
}
