import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SlotsPK - The Best Gaming Platform in Pakistan',
  description: 'Learn about SlotsPK, our history, mission, and vision for creating the best gaming platform in Pakistan.',
  keywords: ['SlotsPK about', 'about us', 'gaming company Pakistan', 'SlotsPK history', 'gaming platform'],
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">About <Link href="/" className="text-accent hover:underline">SlotsPK</Link></h1>
          
          {/* Company Overview */}
          <div className="bg-secondary rounded-lg p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#1a1f35]">
                  <Link href="/">
                    <Image 
                      src="/slots-pk.webp" 
                      alt="SlotsPK Logo" 
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Our Story
                </h2>
                <div className="prose prose-lg max-w-none text-gray-300">
                  <p className="mb-4">
                    Founded in 2021, <Link href="/" className="text-accent hover:underline">SlotsPK</Link> has quickly emerged as Pakistan's premier gaming platform. Our journey began with a simple mission: to create a safe, entertaining, and rewarding gaming experience for Pakistani players.
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
                To become the leading gaming platform in South Asia, recognized for our commitment to player satisfaction, technological innovation, and responsible gaming practices.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <h2 className="text-2xl font-bold mb-6 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Security & Trust</h3>
              <p className="text-gray-300">
                We prioritize the security of our players' data and funds, implementing industry-leading protection measures.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">
                We constantly strive to enhance our platform with new games, features, and technologies to provide an exceptional gaming experience.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Community</h3>
              <p className="text-gray-300">
                We foster a vibrant community of players, encouraging interaction, friendly competition, and shared experiences.
              </p>
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
              Have questions or feedback? We'd love to hear from you! Contact our team for support or partnership inquiries.
            </p>
            <a 
              href="/contact" 
              className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 