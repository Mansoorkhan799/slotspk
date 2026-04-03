import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_ORIGIN, imageObjectLicensing } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Download Slots PK APK – Latest Version 2025',
  description:
    'Download the latest Slots PK APK for Android free. Step-by-step installation guide, system requirements, and features. Official APK – safe & secure download.',
  alternates: {
    canonical: `${SITE_ORIGIN}/download-slots-pk-apk`,
  },
  openGraph: {
    title: 'Download Slots PK APK – Latest Version 2025',
    description:
      'Download the latest Slots PK APK for Android free. Step-by-step installation guide, system requirements, and features. Official APK – safe & secure.',
    url: `${SITE_ORIGIN}/download-slots-pk-apk`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Download Slots PK APK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Slots PK APK – Latest Version 2025',
    description:
      'Download the latest Slots PK APK for Android free. Step-by-step installation guide and system requirements.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const DOWNLOAD_LINK = 'http://win999.39slotspk.com/?referralCode=keo9260';

const features = [
  { title: '30+ Games', desc: 'Slots, card games, fish shooting, live casino and sports.' },
  { title: 'Free Download', desc: 'Download and install Slots PK completely free.' },
  { title: 'Secure Payments', desc: 'Easypaisa & JazzCash supported with SSL encryption.' },
  { title: 'Fast Withdrawals', desc: 'Withdraw your winnings within 24 hours.' },
  { title: 'Daily Bonuses', desc: 'Claim bonuses and rewards every single day.' },
  { title: '24/7 Support', desc: 'Round-the-clock support via WhatsApp and Telegram.' },
];

export default function DownloadSlotsPKPage() {
  return (
    <>
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Download <span className="text-[#FFA500]">Slots PK APK</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get the official <Link href="/" className="text-[#0ea5e9] hover:underline">Slots PK</Link> APK for Android.
              Free download, easy installation, and instant access to 30+ games with real cash rewards.
            </p>
            <a
              href={DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Slots PK APK for Android"
              className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
            >
              <span>DOWNLOAD NOW</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
            <p className="text-gray-400 text-sm italic">* Available for Android only. Version 1.5.2 — 38.45 MB</p>
          </div>

          <div className="hidden md:block md:w-1/2">
            <figure
              className="relative w-full max-w-[320px] aspect-square ml-auto"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src="/slots-pk.webp"
                alt="Slots PK APK Download – Android Gaming App"
                title="Download Slots PK APK for Android"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(min-width: 768px) 320px, 280px"
              />
              <figcaption className="sr-only">Slots PK – Official APK for Android</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How to Download */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to Download & Install</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-300">
            <li>Tap the <strong>Download Now</strong> button above to get the official APK file.</li>
            <li>Open your Android <strong>Settings → Security</strong> and enable <strong>Unknown Sources</strong>.</li>
            <li>Locate the downloaded APK in your <strong>Downloads</strong> folder.</li>
            <li>Tap the APK file and select <strong>Install</strong>.</li>
            <li>Wait for installation to complete, then open <strong>Slots PK</strong> and register.</li>
          </ol>
          <div className="mt-8 flex justify-center">
            <a
              href={DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Slots PK APK"
              className="inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              DOWNLOAD APK
              <div className="ml-3 bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">App Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/Slots-PK-game.webp"
              alt="Slots PK Game Interface Screenshot"
              title="Slots PK Game Interface"
              width={800}
              height={1200}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/Slots-PK-APK.webp"
              alt="Slots PK APK App Interface Screenshot"
              title="Slots PK APK Interface"
              width={800}
              height={1200}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Why Download Slots PK?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#0A1029] p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-[#FFA500] mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">System Requirements</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['Operating System', 'Android 5.0 (Lollipop) or higher'],
                  ['RAM', 'Minimum 2 GB (4 GB recommended)'],
                  ['Storage', '100 MB free space'],
                  ['Internet', 'Stable 4G / Wi-Fi connection'],
                  ['Processor', '1.4 GHz quad-core or better'],
                  ['File Size', '38.45 MB'],
                  ['Version', '1.5.2'],
                ].map(([label, value]) => (
                  <tr key={label} className="odd:bg-[#0a1029]/50 even:bg-[#06091F]/50">
                    <td className="py-4 px-6 font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <Script
        id="download-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Slots PK',
            operatingSystem: 'Android',
            applicationCategory: 'GameApplication',
            url: `${SITE_ORIGIN}/download-slots-pk-apk`,
            downloadUrl: DOWNLOAD_LINK,
            fileSize: '38.45 MB',
            softwareVersion: '1.5.2',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '10000' },
            screenshot: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}/Slots-PK-game.webp`,
              ...imageObjectLicensing,
            },
          }),
        }}
      />
      <Script
        id="download-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Download Slots PK', item: `${SITE_ORIGIN}/download-slots-pk-apk` },
            ],
          }),
        }}
      />
    </>
  );
}
