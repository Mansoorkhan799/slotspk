import Script from 'next/script';
import { imageObjectLicensing, SITE_ORIGIN } from '@/lib/schemaImageLicensing';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BlogPostSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  slug: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function BlogPostSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  slug,
  breadcrumbs,
}: BlogPostSchemaProps) {
  const pageUrl = `${SITE_ORIGIN}/blog/${slug}`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      ...imageObjectLicensing,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'Slots PK',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Slots PK',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/slots-pk.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_ORIGIN}/blog`,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 3,
        name: crumb.name,
        item: crumb.url,
      })),
    ],
  };

  return (
    <>
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
