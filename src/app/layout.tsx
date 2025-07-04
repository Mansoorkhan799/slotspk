import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://slotspk.com.pk'),
  title: {
    default: "Slots PK Download Official APK for Android 2025",
    template: "%s | Slots PK"
  },
  description: "Download Slots PK, Pakistan's premier gaming platform. Experience thrilling card games, slots, and tournaments. Win real rewards with secure payments and 24/7 support. Join 10,000+ players now!",
  keywords: [
    "Slots PK",
    "Pakistan gaming",
    "online card games",
    "mobile casino games",
    "Android gaming app 2025",
    "Teen Patti online",
    "Rummy games",
    "Pakistan card games",
    "mobile gaming platform",
    "real money games",
    "secure gaming app",
    "gaming rewards",
    "Pakistan slots games",
    "best gaming platform",
    "mobile gambling app"
  ],
  authors: [{ name: "Slots PK Team" }],
  creator: "Slots PK",
  publisher: "Slots PK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/slots-pk.ico', type: 'image/x-icon' },
      { url: '/slots-pk.webp', type: 'image/webp' }
    ]
  },
  manifest: '/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://slotspk.com.pk",
  },
  openGraph: {
    title: "Slots PK Download Official APK for Android 2025",
    description: "Join Pakistan's premier gaming platform. Play card games, slots, and tournaments. Win real rewards with secure payments. 10,000+ active players. Download now!",
    url: "https://slotspk.com.pk",
    siteName: "Slots PK",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://slotspk.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Slots PK - Premier Gaming Platform",
      },
      {
        url: "https://slotspk.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Slots PK - Premier Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slots PK Download Official APK for Android 2025",
    description: "Join Pakistan's premier gaming platform. Play card games, slots, and tournaments. Win real rewards with secure payments. 10,000+ active players. Download now!",
    creator: "@slotspk",
    images: [
      {
        url: "https://slotspk.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Slots PK - Premier Gaming Platform",
      }
    ],
  },
  applicationName: "Slots PK",
  category: "Gaming",
  classification: "Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/slots-pk.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/slots-pk.ico" type="image/x-icon" />
        <link rel="icon" href="/slots-pk.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/slots-pk.webp" />
        <meta property="og:image" content="/slots-pk-logo.webp" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <DeferredStyles />
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <Footer />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Slots PK",
              "url": "https://slotspk.com.pk",
              "logo": "https://slotspk.com.pk/logo.svg",
              "description": "Slots PK is the premier gaming platform in Pakistan, offering a wide range of games and bonuses.",
              "sameAs": [
                "https://facebook.com/slotspk",
                "https://twitter.com/slotspk"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Slots PK",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "10000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
