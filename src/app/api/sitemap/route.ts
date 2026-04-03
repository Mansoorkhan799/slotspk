import { NextResponse } from 'next/server';

const BASE_URL = 'https://slotspk.com.pk';

interface SitemapPage {
  url: string;
  changeFreq: string;
  priority: number;
  images?: { loc: string; title: string; caption: string }[];
}

const mainPages: SitemapPage[] = [
  {
    url: '/',
    changeFreq: 'daily',
    priority: 1.0,
    images: [
      { loc: '/slots-pk.webp', title: 'Slots PK Logo', caption: 'Official logo of Slots PK gaming platform' },
      { loc: '/feature/og-image.webp', title: 'Slots PK Hero Image', caption: 'Slots PK gaming platform showcase' },
    ],
  },
  {
    url: '/download-slotspk-apk',
    changeFreq: 'weekly',
    priority: 0.9,
    images: [
      { loc: '/slots-pk.webp', title: 'Download Slots PK APK', caption: 'Download the official Slots PK APK for Android' },
      { loc: '/Slots-PK-game.webp', title: 'Slots PK Game Interface', caption: 'Slots PK game interface screenshot' },
    ],
  },
  {
    url: '/deposit-money-in-slotspk',
    changeFreq: 'weekly',
    priority: 0.8,
    images: [
      { loc: '/Slots-PK-Withdraw-Money.webp', title: 'Slots PK Deposit Money', caption: 'How to deposit money in Slots PK' },
    ],
  },
  {
    url: '/withdraw-money-from-slotspk',
    changeFreq: 'weekly',
    priority: 0.8,
    images: [
      { loc: '/Slots-PK-deposit-money.webp', title: 'Slots PK Withdraw Money', caption: 'How to withdraw money from Slots PK' },
    ],
  },
  {
    url: '/slotspk-for-pc',
    changeFreq: 'weekly',
    priority: 0.7,
    images: [
      { loc: '/slots-pk.webp', title: 'Slots PK for PC', caption: 'Play Slots PK on PC using an Android emulator' },
    ],
  },
  {
    url: '/about-us',
    changeFreq: 'monthly',
    priority: 0.6,
    images: [
      { loc: '/slots-pk.webp', title: 'About Slots PK', caption: 'Learn about Slots PK gaming platform' },
    ],
  },
  {
    url: '/contact-us',
    changeFreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/privacy',
    changeFreq: 'yearly',
    priority: 0.3,
  },
  {
    url: '/disclaimer',
    changeFreq: 'yearly',
    priority: 0.3,
  },
  {
    url: '/blog',
    changeFreq: 'weekly',
    priority: 0.8,
    images: [
      { loc: '/feature/og-image.webp', title: 'Slots PK Blog', caption: 'Guides and tutorials for Slots PK gaming platform' },
    ],
  },
];

const blogPosts: SitemapPage[] = [
  {
    url: '/blog/create-account-login',
    changeFreq: 'monthly',
    priority: 0.7,
    images: [
      { loc: '/Slots-PK-Account-registration-and-Login.webp', title: 'Create Slots PK Account', caption: 'Step-by-step guide to create and login to your Slots PK account' },
    ],
  },
  {
    url: '/blog/is-slotspk-real-or-fake',
    changeFreq: 'monthly',
    priority: 0.7,
    images: [
      { loc: '/feature/og-image.webp', title: 'Is Slots PK Real or Fake', caption: 'Honest review of Slots PK gaming platform' },
    ],
  },
  {
    url: '/blog/tips-to-win-big-in-slotspk',
    changeFreq: 'monthly',
    priority: 0.7,
    images: [
      { loc: '/feature/og-image.webp', title: 'Tips to Win Big in Slots PK', caption: 'Expert strategies to win big in Slots PK' },
    ],
  },
];

export async function GET() {
  const lastMod = new Date().toISOString();
  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `<image:image>
      <image:loc>${BASE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('\n    ') ?? ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
