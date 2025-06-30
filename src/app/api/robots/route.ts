import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://slotspk.com.pk';
  
  const robotsTxt = `# SlotsPK Robots.txt
User-agent: *
Allow: /

# Priority pages
Allow: /about
Allow: /blog
Allow: /contact

# Mobile-specific directives
User-agent: Googlebot-Mobile
Allow: /

# Image-specific directives
User-agent: Googlebot-Image
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/api/sitemap
Sitemap: ${baseUrl}/image-sitemap.xml

# Crawl delay to prevent server overload
Crawl-delay: 1
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 