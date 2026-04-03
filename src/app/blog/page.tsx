import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Slots PK Blog – Guides, Tips & Tutorials',
  description:
    "Read the latest Slots PK guides and tutorials. Learn how to create an account, deposit money, win big, and get the most from Pakistan's premier gaming app.",
  alternates: {
    canonical: `${SITE_ORIGIN}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Slots PK Blog – Guides, Tips & Tutorials',
    description:
      'Read the latest Slots PK guides and tutorials. Learn account creation, deposits, and winning strategies.',
    url: `${SITE_ORIGIN}/blog`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Slots PK Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slots PK Blog – Guides, Tips & Tutorials',
    description: 'Read the latest Slots PK guides, tips, and tutorials for Pakistani players.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const posts = [
  {
    href: '/blog/is-slotspk-real-or-fake',
    title: 'Is Slots PK Real or Fake? Honest Review 2025',
    excerpt: 'We examine Slots PK from every angle — payments, security, game fairness, and real user experiences.',
    date: 'March 25, 2025',
  },
  {
    href: '/blog/tips-to-win-big-in-slotspk',
    title: 'Tips to Win Big in Slots PK – Expert Strategies 2025',
    excerpt: 'Discover expert tips and strategies to maximise your winnings in Slots PK with smart bankroll management.',
    date: 'April 1, 2025',
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">Slots PK Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.href} className="bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all flex flex-col">
              <p className="text-gray-500 text-xs mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-4 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
              <Link href={post.href} className="text-accent hover:underline mt-auto">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog` },
            ],
          }),
        }}
      />
    </>
  );
}
