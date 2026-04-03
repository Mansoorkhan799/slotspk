import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://slotspk.com.pk";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Slots PK – Download APK for Android Pakistan",
    template: "%s | Slots PK",
  },
  description:
    "Download Slots PK APK, Pakistan's premier gaming platform. Play card games, slots & tournaments. Win real rewards, secure payments, 24/7 support. Join 10,000+ players today!",
  keywords: [
    "Slots PK",
    "Pakistan gaming",
    "online card games",
    "mobile casino games",
    "Android gaming app",
    "Teen Patti online",
    "Rummy games",
    "Pakistan card games",
    "mobile gaming platform",
    "real money games",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/slots-pk.ico", type: "image/x-icon" },
      { url: "/slots-pk.webp", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Slots PK – Download APK for Android Pakistan",
    description:
      "Join Pakistan's premier gaming platform. Play card games, slots & tournaments. Secure payments, instant withdrawals, 24/7 support. 10,000+ active players.",
    url: SITE_URL,
    siteName: "Slots PK",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Slots PK – Premier Gaming Platform Pakistan",
      },
      {
        url: `${SITE_URL}/feature/og-image-square.webp`,
        width: 800,
        height: 800,
        alt: "Slots PK – Premier Gaming Platform Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slots PK – Download APK for Android Pakistan",
    description:
      "Join Pakistan's premier gaming platform. Play card games, slots & tournaments. Secure payments, instant withdrawals, 24/7 support. 10,000+ active players.",
    creator: "@slotspk",
    images: [
      {
        url: `${SITE_URL}/feature/twitter-card.webp`,
        width: 1200,
        height: 600,
        alt: "Slots PK – Premier Gaming Platform Pakistan",
      },
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
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/slots-pk.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/slots-pk.ico" type="image/x-icon" />
        <link rel="icon" href="/slots-pk.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/slots-pk.webp" />

        {/* Google Analytics — only when measurement ID is configured */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`antialiased bg-primary text-white min-h-screen flex flex-col ${poppins.className}`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20" aria-hidden="true" />
        <DeferredStyles />
        <WebVitalsTracker />
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />

        {/* Organization schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Slots PK",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/slots-pk.webp`,
                width: 512,
                height: 512,
              },
              description:
                "Slots PK is the premier gaming platform in Pakistan, offering a wide range of games and bonuses.",
              sameAs: [
                "https://facebook.com/slotspk",
                "https://twitter.com/slotspk",
              ],
            }),
          }}
        />

        {/* SoftwareApplication schema */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Slots PK",
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              url: SITE_URL,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "PKR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "10000",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
