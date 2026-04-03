import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_ORIGIN, imageObjectLicensing } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Withdraw Money from Slots PK – Easy & Fast Guide',
  description:
    'Learn how to withdraw money from Slots PK to Easypaisa, JazzCash, or bank account. Step-by-step withdrawal guide. Processed within 24 hours.',
  alternates: {
    canonical: `${SITE_ORIGIN}/withdraw-money-from-slotspk`,
  },
  openGraph: {
    title: 'Withdraw Money from Slots PK – Easy & Fast Guide',
    description:
      'Step-by-step guide to withdraw money from Slots PK to Easypaisa, JazzCash, or bank. Processed within 24 hours.',
    url: `${SITE_ORIGIN}/withdraw-money-from-slotspk`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'How to Withdraw Money from Slots PK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Withdraw Money from Slots PK – Easy & Fast Guide',
    description:
      'Step-by-step guide to withdraw money from Slots PK. Supports Easypaisa, JazzCash, and bank transfers.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const steps = [
  { name: 'Open Wallet', text: 'Open the Slots PK app and tap the wallet icon.' },
  { name: 'Select Withdraw', text: 'Tap the "Withdraw" option inside your wallet.' },
  { name: 'Choose Method', text: 'Select Bank Transfer, JazzCash, or Easypaisa.' },
  { name: 'Enter Amount', text: 'Enter the amount you wish to withdraw (minimum Rs 200).' },
  { name: 'Add Account', text: 'Tap "+" to add your bank or wallet account details.' },
  { name: 'Enter Transaction Password', text: 'Enter your transaction password to authorise the withdrawal.' },
  { name: 'Confirm', text: 'Review the details and confirm. Funds arrive within 24 hours.' },
];

const faqs = [
  {
    q: 'What is the minimum withdrawal amount in Slots PK?',
    a: 'The minimum withdrawal amount is Rs 200.',
  },
  {
    q: 'How long does a withdrawal take?',
    a: 'Withdrawals are typically processed within 24 hours.',
  },
  {
    q: 'Which withdrawal methods are supported?',
    a: 'Slots PK supports Easypaisa, JazzCash, and bank transfer withdrawals.',
  },
  {
    q: 'Is there a withdrawal fee?',
    a: 'Slots PK does not charge any withdrawal fees. Your full amount is transferred.',
  },
];

export default function WithdrawMoneyPage() {
  return (
    <>
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          How to <span className="text-[#FFA500]">Withdraw Money</span> from Slots PK
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Cashing out your winnings from <Link href="/" className="text-[#0ea5e9] hover:underline">Slots PK</Link> is straightforward.
          Follow these steps to withdraw to Easypaisa, JazzCash, or your bank account.
        </p>
      </section>

      {/* Steps with image */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Step-by-Step Withdrawal Guide</h2>
          <div className="md:flex md:gap-12 md:items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <Image
                src="/Slots-PK-deposit-money.webp"
                alt="Slots PK Withdraw Money Screen"
                title="Slots PK Withdrawal to Easypaisa or JazzCash"
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

      {/* Withdrawal Methods */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Withdrawal Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Easypaisa', desc: 'Withdraw directly to your Easypaisa mobile wallet. Fast and secure.' },
              { title: 'JazzCash', desc: 'Transfer your winnings instantly to your JazzCash account.' },
              { title: 'Bank Transfer', desc: 'Withdraw to any Pakistani bank account within 24 hours.' },
            ].map((m) => (
              <div key={m.title} className="bg-[#0A1029] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">{m.title}</h3>
                <p className="text-gray-300">{m.desc}</p>
              </div>
            ))}
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
        id="withdraw-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Withdraw Money from Slots PK',
            description: 'Step-by-step guide to withdraw money from Slots PK to Easypaisa, JazzCash, or bank.',
            image: {
              '@type': 'ImageObject',
              url: `${SITE_ORIGIN}/Slots-PK-deposit-money.webp`,
              ...imageObjectLicensing,
            },
            totalTime: 'PT3M',
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
        id="withdraw-faq-schema"
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
        id="withdraw-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Withdraw Money', item: `${SITE_ORIGIN}/withdraw-money-from-slotspk` },
            ],
          }),
        }}
      />
    </>
  );
}
