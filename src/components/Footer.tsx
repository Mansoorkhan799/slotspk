'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">Slots PK</h2>
            <p className="text-sm text-gray-300 mb-4">
              Slots PK is a premier gaming platform in Pakistan, offering a wide range of games,
              bonuses, and various ways to withdraw your winnings.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1Lc6ZotGpP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Slots PK on Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/download-slots-pk-apk" className="text-gray-300 hover:text-accent transition-colors">Download Slots PK</Link>
              </li>
              <li>
                <Link href="/deposit-money-in-slotspk" className="text-gray-300 hover:text-accent transition-colors">Deposit Money</Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-slotspk" className="text-gray-300 hover:text-accent transition-colors">Withdraw Money</Link>
              </li>
              <li>
                <Link href="/slotspk-for-pc" className="text-gray-300 hover:text-accent transition-colors">Slots PK for PC</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Download CTA */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Download Slots PK to enjoy the best gaming experience on your Android device.
            </p>
            <a
              href="http://win999.39slotspk.com/?referralCode=keo9260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Slots PK APK"
              className="bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span>DOWNLOAD NOW</span>
              <div className="ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2025 Slots PK. All rights reserved.{' '}
            <a
              href="http://win999.39slotspk.com/?referralCode=keo9260"
              className="hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              slotspk.com.pk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
