import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Slots PK for PC – Play on Windows & Mac 2025',
  description:
    'Play Slots PK on PC using an Android emulator. Step-by-step guide for Windows and Mac. Download BlueStacks, install Slots PK APK, and enjoy gaming on a big screen.',
  alternates: {
    canonical: `${SITE_ORIGIN}/slotspk-for-pc`,
  },
  openGraph: {
    title: 'Slots PK for PC – Play on Windows & Mac 2025',
    description:
      'Play Slots PK on PC using an Android emulator. Step-by-step guide for Windows and Mac using BlueStacks.',
    url: `${SITE_ORIGIN}/slotspk-for-pc`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Slots PK for PC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slots PK for PC – Play on Windows & Mac 2025',
    description: 'Play Slots PK on PC via BlueStacks Android emulator. Works on Windows and Mac.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const steps = [
  { name: 'Download BlueStacks', text: 'Visit bluestacks.com and download the latest BlueStacks emulator for your OS (Windows or Mac).' },
  { name: 'Install BlueStacks', text: 'Run the installer and follow the on-screen instructions to complete installation.' },
  { name: 'Open BlueStacks', text: 'Launch BlueStacks and sign in with your Google account to access the Play Store.' },
  { name: 'Download Slots PK APK', text: 'Visit slotspk.com.pk and download the official Slots PK APK file.' },
  { name: 'Install the APK', text: 'Drag the downloaded APK file onto the BlueStacks window to install it, or use the "Install APK" option.' },
  { name: 'Launch Slots PK', text: 'Find Slots PK on your BlueStacks home screen, tap it, and start playing on PC.' },
];

const pcFeatures = [
  { title: 'Bigger Screen', desc: 'Enjoy Slots PK games on a full HD monitor for a more immersive experience.' },
  { title: 'Keyboard Controls', desc: 'Use keyboard and mouse for faster and more precise gameplay.' },
  { title: 'Better Performance', desc: 'PC hardware provides smoother frame rates and faster loading times.' },
  { title: 'Multi-Instance', desc: 'Run multiple instances of Slots PK simultaneously on one PC.' },
];

export default function SlotsPKForPCPage() {
  return (
    <>
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          <span className="text-[#FFA500]">Slots PK</span> for PC
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          <Link href="/" className="text-[#0ea5e9] hover:underline">Slots PK</Link> is an Android app, but you can easily play it on your Windows or Mac PC using an Android emulator like BlueStacks.
          Follow our step-by-step guide below.
        </p>
      </section>

      {/* Emulator Steps */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">How to Install Slots PK on PC</h2>
          <ol className="list-decimal pl-6 space-y-5 text-gray-300">
            {steps.map((step) => (
              <li key={step.name}>
                <strong className="text-white">{step.name}:</strong> {step.text}
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <a
              href="http://win999.39slotspk.com/?referralCode=keo9260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Slots PK APK for PC emulator"
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

      {/* PC Features */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Why Play Slots PK on PC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pcFeatures.map((f) => (
              <div key={f.title} className="bg-[#0A1029] p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-[#FFA500] mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">PC System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Windows</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Windows 7 or higher (64-bit)</li>
                <li>• Intel or AMD CPU (dual-core 2.0 GHz+)</li>
                <li>• 4 GB RAM minimum (8 GB recommended)</li>
                <li>• 5 GB free disk space</li>
                <li>• DirectX 11 / OpenGL 2.0 capable GPU</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">macOS</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• macOS Sierra (10.12) or higher</li>
                <li>• Intel Core i5 or Apple M-series</li>
                <li>• 4 GB RAM minimum (8 GB recommended)</li>
                <li>• 5 GB free disk space</li>
                <li>• OpenGL 2.0 capable GPU</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <Script
        id="pc-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Install Slots PK on PC',
            description: 'Step-by-step guide to play Slots PK on PC using the BlueStacks Android emulator.',
            totalTime: 'PT15M',
            step: steps.map((step, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: step.name,
              text: step.text,
            })),
          }),
        }}
      />
      <Script
        id="pc-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Slots PK for PC', item: `${SITE_ORIGIN}/slotspk-for-pc` },
            ],
          }),
        }}
      />
    </>
  );
}
