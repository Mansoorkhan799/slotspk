import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://slotspk.com.pk';
  
  // Main pages with high priority
  const mainPages = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/slots-pk-logo.webp',
          title: 'Slots PK Logo',
          caption: 'The official logo of Slots PK gaming platform'
        },
        {
          loc: '/slots-pk-transparent.webp',
          title: 'Slots PK Hero Image',
          caption: 'Slots PK gaming platform showcase'
        }
      ]
    },
    {
      url: '/about',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/slots-pk-logo.webp',
          title: 'About Slots PK',
          caption: 'Learn about Slots PK gaming platform'
        }
      ]
    }
  ];

  // Blog posts
  const blogPosts = [
    {
      url: '/blog/create-account-login',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/Slots-PK-Account-registration-and-Login.webp',
          title: 'Account Registration Guide',
          caption: 'Step by step guide to create and login to your Slots PK account'
        }
      ]
    }
  ];

  // Game pages
  const gamePages = [
    {
      url: '/games',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 0.9,
      images: [
        {
          loc: '/Slots-PK-game.webp',
          title: 'Slots PK Games',
          caption: 'Explore our collection of exciting games'
        }
      ]
    }
  ];

  // Download and support pages
  const utilityPages = [
    {
      url: '/download',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/Slots-PK-APK.webp',
          title: 'Download Slots PK',
          caption: 'Download the Slots PK mobile app'
        }
      ]
    }
  ];

  const allPages = [...mainPages, ...blogPosts, ...gamePages, ...utilityPages];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 