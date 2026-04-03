import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'About Slots PK – Gaming Platform Pakistan',
  description:
    'Learn about Slots PK, our history, mission, and vision for creating the best mobile gaming platform in Pakistan. Founded in 2021 with 10,000+ active players.',
  alternates: {
    canonical: `${SITE_ORIGIN}/about-us`,
  },
  openGraph: {
    title: 'About Slots PK – Gaming Platform Pakistan',
    description:
      'Learn about Slots PK, our history, mission, and vision for creating the best mobile gaming platform in Pakistan. Founded in 2021 with 10,000+ active players.',
    url: `${SITE_ORIGIN}/about-us`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'About Slots PK – Premier Gaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Slots PK – Gaming Platform Pakistan',
    description:
      'Learn about Slots PK, our history, mission, and vision for creating the best mobile gaming platform in Pakistan.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            About <Link href="/" className="text-accent hover:underline">Slots PK</Link>
          </h1>

          {/* Company Overview */}
          <div className="bg-secondary rounded-lg p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#1a1f35]">
                  <Link href="/">
                    <Image
                      src="/slots-pk.webp"
                      alt="Slots PK Logo – Premier Gaming Platform"
                      title="Slots PK – Premier Gaming Platform in Pakistan"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                      className="object-contain p-4"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
                <div className="prose prose-lg max-w-none text-gray-300">
                  <p className="mb-4">
                    Founded in 2021, <Link href="/" className="text-accent hover:underline">Slots PK</Link> has quickly emerged as Pakistan's premier gaming platform. Our journey began with a simple mission: to create a safe, entertaining, and rewarding gaming experience for Pakistani players.
                  </p>
                  <p>
                    From humble beginnings, we've grown into a thriving community with hundreds of thousands of active users. We're dedicated to continuous improvement and innovation in the gaming space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300">
                To provide the Pakistani gaming community with a secure, innovative, and entertaining platform that offers a diverse range of games and rewards while maintaining the highest standards of fair play.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-300">
                To become the leading gaming platform in South Asia, recognised for our commitment to player satisfaction, technological innovation, and responsible gaming practices.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <h2 className="text-2xl font-bold mb-6 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Security & Trust</h3>
              <p className="text-gray-300">We prioritise the security of our players' data and funds, implementing industry-leading protection measures.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">We constantly strive to enhance our platform with new games, features, and technologies.</p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Community</h3>
              <p className="text-gray-300">We foster a vibrant community of players, encouraging interaction, friendly competition, and shared experiences.</p>
            </div>
          </div>

          {/* Team */}
          <h2 className="text-2xl font-bold mb-6 text-white">Meet Our Team</h2>
          <div className="bg-secondary rounded-lg p-6 mb-12">
            <p className="text-gray-300 mb-6">
              Our team consists of passionate gaming enthusiasts, experienced developers, and industry professionals dedicated to creating the best gaming platform for our users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent text-4xl font-bold">A</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Ahmed Khan</h3>
                <p className="text-gray-400">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent text-4xl font-bold">S</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Sara Malik</h3>
                <p className="text-gray-400">Head of Operations</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent text-4xl font-bold">F</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Farhan Ali</h3>
                <p className="text-gray-400">Chief Technology Officer</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary-light to-secondary rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <Link
              href="/contact-us"
              className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded inline-flex items-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Structured data */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Slots PK',
              alternateName: 'SlotsPK',
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}/slots-pk.webp`,
              description: 'Slots PK is the premier gaming platform in Pakistan.',
              foundingDate: '2021',
              foundingLocation: { '@type': 'Country', name: 'Pakistan' },
              founder: { '@type': 'Person', name: 'Ahmed Khan' },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_ORIGIN}/about-us`,
            },
          }),
        }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_ORIGIN}/about-us` },
            ],
          }),
        }}
      />
    </div>
  );
}
