import Link from 'next/link';
import { Metadata } from 'next';
import BlogCategoryDropdown from '@/components/BlogCategoryDropdown';

export const metadata: Metadata = {
  title: 'Slots PK Blog - Guides and Tutorials',
  description: 'Learn how to create an account, login, and get the most out of Slots PK with our helpful guides and tutorials.',
  keywords: ['Slots PK blog', 'Slots PK account', 'Slots PK login', 'Slots PK guide', 'Slots PK tutorial'],
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
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">Slots PK Blog</h1>
      
      {/* Categories Dropdown */}
      <BlogCategoryDropdown />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-4 text-white">How to Create a Slots PK Account and Login</h2>
          <p className="text-gray-300 mb-4">Learn how to create your Slots PK account and login to start playing your favorite games.</p>
          <Link href="/blog/create-account-login" className="text-accent hover:underline">
            Read More →
          </Link>
        </div>
        
        {/* More blog posts can be added here in the future */}
      </div>
    </div>
  );
} 