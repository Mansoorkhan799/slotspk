import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Script from 'next/script';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Contact Slots PK – Get Support & Help',
  description:
    'Contact Slots PK support team for help with your account, deposits, withdrawals, or any game-related queries. We are available 24/7 via email and WhatsApp.',
  alternates: {
    canonical: `${SITE_ORIGIN}/contact-us`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Slots PK – Get Support & Help',
    description:
      'Contact Slots PK support team for help with your account, deposits, withdrawals, or any game-related queries. Available 24/7.',
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Contact Slots PK Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Slots PK – Get Support & Help',
    description:
      'Contact Slots PK support team for help with your account, deposits, withdrawals, or any game queries. Available 24/7.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <ContactForm />

      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_ORIGIN}/contact-us` },
            ],
          }),
        }}
      />
    </div>
  );
}
