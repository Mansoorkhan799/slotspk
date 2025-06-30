import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Slots PK',
  description: 'Get in touch with Slots PK team for support, feedback, or inquiries.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <ContactForm />
    </div>
  );
} 