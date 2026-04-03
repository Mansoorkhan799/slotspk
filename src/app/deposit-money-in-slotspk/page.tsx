import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_ORIGIN, imageObjectLicensing } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Deposit Money in Slots PK – Easypaisa & JazzCash',
  description:
    'Learn how to deposit money in Slots PK step by step. Supports Easypaisa and JazzCash. Minimum deposit Rs 100. Instant credit to your wallet.',
  alternates: {
    canonical: `${SITE_ORIGIN}/deposit-money-in-slotspk`,
  },
  openGraph: {
    title: 'Deposit Money in Slots PK – Easypaisa & JazzCash',
    description:
      'Learn how to deposit money in Slots PK step by step. Supports Easypaisa and JazzCash. Minimum Rs 100. Instant credit.',
    url: `${SITE_ORIGIN}/deposit-money-in-slotspk`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'How to Deposit Money in Slots PK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deposit Money in Slots PK – Easypaisa & JazzCash',
    description:
      'Step-by-step guide to deposit money in Slots PK via Easypaisa and JazzCash. Minimum Rs 100.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const steps = [
  { name: 'Open Wallet', text: 'Tap the wallet icon on the main screen of the Slots PK app.' },
  { name: 'Select Payment Method', text: 'Choose Easypaisa or JazzCash as your deposit method.' },
  { name: 'Enter Amount', text: 'Enter the deposit amount. Minimum is Rs 100, maximum Rs 50,000.' },
  { name: 'Tap Go', text: 'Press the "Go" button to proceed to the payment screen.' },
  { name: 'Enter Wallet Details', text: 'Enter your mobile wallet number and required details.' },
  { name: 'Confirm Deposit', text: 'Click "Deposit" and confirm the transaction in your wallet app.' },
  { name: 'Funds Credited', text: 'Your Slots PK balance will be updated instantly after confirmation.' },
];

const faqs = [
  {
    q: 'What is the minimum deposit in Slots PK?',
    a: 'The minimum deposit amount in Slots PK is Rs 100.',
  },
  {
    q: 'Which payment methods are accepted?',
    a: 'Slots PK accepts Easypaisa and JazzCash for deposits.',
  },
  {
    q: 'How long does a deposit take?',
    a: 'Deposits are credited to your Slots PK wallet instantly after confirmation.',
  },
  {
    q: 'Is there a first deposit bonus?',
    a: 'Yes, your first deposit earns you a 129% bonus on the deposited amount.',
  },
];

export default function DepositMoneyPage() {
  return (
    <>
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          How to <span className="text-[#FFA500]">Deposit Money</span> in Slots PK
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Depositing money in <Link href="/" className="text-[#0ea5e9] hover:underline">Slots PK</Link> is quick and easy using Easypaisa or JazzCash.
          Follow the steps below to add funds to your wallet.
        </p>
      </section>

      {/* Steps with image */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Step-by-Step Deposit Guide</h2>
          <div className="md:flex md:gap-12 md:items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <Image
                src="/Slots-PK-Withdraw-Money.webp"
                alt="Slots PK Deposit Money Screen"
                title="Slots PK Deposit Money via Easypaisa or JazzCash"
                width={350}
                height={400}
                className="rounded-xl shadow-lg object-contain"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3">
              <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                {steps.map((step) => (
                  <li key={step.name}>
                    <strong className="text-white">{step.name}:</strong> {step.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Supported Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Easypaisa</h3>
              <p className="text-gray-300">Pakistan's most popular mobile wallet. Deposit from Rs 100 to Rs 50,000 per transaction.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">JazzCash</h3>
              <p className="text-gray-300">Deposit via JazzCash mobile account. Instant credit with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-[#0a1029]/50 rounded-xl">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                  {faq.q}
                  <span className="transition group-open:rotate-180" aria-hidden="true">
                    <svg fill="none" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Structured data */}
      <Script
        id="deposit-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Deposit Money in Slots PK',
            description: 'Step-by-step guide to deposit money in Slots PK using Easypaisa or JazzCash.',
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}/Slots-PK-Withdraw-Money.webp`,
              ...imageObjectLicensing,
            },
            totalTime: 'PT2M',
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
        id="deposit-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
      <Script
        id="deposit-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Deposit Money', item: `${SITE_ORIGIN}/deposit-money-in-slotspk` },
            ],
          }),
        }}
      />
    </>
  );
}
