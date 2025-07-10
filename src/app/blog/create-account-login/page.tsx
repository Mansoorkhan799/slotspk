import { Metadata } from 'next';
import Link from 'next/link';
import MobileOptimizedImage from '@/components/MobileOptimizedImage';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'How to Create a Slots PK Account and Login - Step by Step Guide',
  description: 'Learn how to create your Slots PK account and login with our step-by-step guide. Get started playing games and earning rewards in minutes.',
  keywords: ['Slots PK account', 'Slots PK login', 'Slots PK registration', 'Slots PK sign up', 'Slots PK guide'],
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
  alternates: {
    canonical: "https://slotspk.com.pk/blog/create-account-login",
  },
  openGraph: {
    title: 'How to Create Account and Login - Slots PK',
    description: 'Learn how to create an account and login to Slots PK. Step by step guide for registration and accessing your account.',
    type: 'article',
    publishedTime: '2024-03-20T00:00:00Z',
    authors: ['Slots PK Team'],
  }
};

export default function CreateAccountLogin() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href="/blog" className="text-accent hover:underline inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-accent">How to Create a <Link href="/" className="hover:underline">Slots PK</Link> Account and Login</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            Getting started with Slots PK is quick and easy. This guide will walk you through the process of creating your account and logging in, so you can start playing and earning rewards right away.
          </p>

          <div className="bg-secondary px-8 py-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Step-by-Step Account Creation</h2>
            
            <ol className="list-decimal pl-5 space-y-6 text-gray-300">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Download the Slots PK App</h3>
                <p>First, download the Slots PK app from our official website. Once downloaded, install the app on your Android device.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Open the App and Tap "Register"</h3>
                <p>Launch the Slots PK app on your device. On the welcome screen, you'll see a "Register" button. Tap on it to begin the account creation process.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Fill Out the Registration Form</h3>
                <p>You'll be presented with a registration form. Here's what you need to provide:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Username:</strong> Choose a unique username that isn't already taken.</li>
                  <li><strong>Password:</strong> Create a strong password that's at least 6 characters long. Include a mix of letters, numbers, and special characters for better security.</li>
                  <li><strong>Confirm Password:</strong> Re-enter your password to confirm it.</li>
                  <li><strong>Captcha:</strong> Enter the captcha code shown on the screen to verify you're a human.</li>
                </ul>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Complete Registration</h3>
                <p>After filling out all the required fields, tap on the "Register" button at the bottom of the form. If all information is entered correctly, your account will be created instantly.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Claim Your Welcome Bonus</h3>
                <p>Once your account is created, you'll automatically receive a welcome bonus of up to Rs 5888. This bonus can be used to play games on the platform.</p>
              </li>
            </ol>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">How to Login to Your Slots PK Account</h2>
            
            <ol className="list-decimal pl-5 space-y-6 text-gray-300">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Open the Slots PK App</h3>
                <p>Launch the Slots PK app on your Android device.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Enter Your Credentials</h3>
                <p>On the welcome screen, you'll see fields for your username and password. Enter the same username and password you used during registration.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Tap "Login"</h3>
                <p>After entering your credentials, tap the "Login" button to access your account.</p>
              </li>
              
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Verify Your Identity (If Required)</h3>
                <p>For security purposes, you might occasionally be asked to complete a captcha or verify your identity in some other way, especially if you're logging in from a new device.</p>
              </li>
            </ol>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Account Security Tips</h2>
            
            <ul className="list-disc pl-5 space-y-4 text-gray-300">
              <li><strong>Use a Strong Password:</strong> Create a unique password that's not used for any other accounts.</li>
              <li><strong>Enable Two-Factor Authentication:</strong> If available, enable 2FA for an extra layer of security.</li>
              <li><strong>Don't Share Your Credentials:</strong> Never share your username or password with anyone, even if they claim to be from Slots PK support.</li>
              <li><strong>Log Out on Shared Devices:</strong> Always log out of your account when using shared or public devices.</li>
              <li><strong>Update Regularly:</strong> Keep the Slots PK app updated to the latest version to benefit from security improvements.</li>
            </ul>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Troubleshooting Login Issues</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent">Forgot Password?</h3>
                <p>If you've forgotten your password, tap on the "Forgot Password" link on the login screen. You'll be guided through the process of resetting your password.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent">Account Locked?</h3>
                <p>If your account gets locked due to multiple failed login attempts, wait for 30 minutes before trying again, or contact customer support for assistance.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent">Can't Remember Username?</h3>
                <p>If you can't remember your username, contact Slots PK customer support with the phone number or email you used during registration.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Ready to Start Playing?</h2>
            <p className="text-gray-300 mb-6">Now that you know how to create an account and login to Slots PK, you're ready to start playing and earning rewards. Download the app today and join thousands of players already enjoying our platform!</p>
            
            <a 
              href="http://win999.39slotspk.com/?referralCode=keo9260"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-[#06091F] font-bold py-3 px-8 rounded-full inline-flex items-center justify-center max-w-xs transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              DOWNLOAD NOW
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Create Account and Login - Slots PK",
            "description": "Learn how to create an account and login to Slots PK. Step by step guide for registration and accessing your account.",
            "image": "https://slotspk.com.pk/Slots-PK-Account-registration-and-Login.webp",
            "datePublished": "2024-03-20T00:00:00Z",
            "dateModified": new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Slots PK Team",
              "url": "https://slotspk.com.pk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Slots PK",
              "logo": {
                "@type": "ImageObject",
                "url": "https://slotspk.com.pk/logo.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://slotspk.com.pk/blog/create-account-login"
            }
          })
        }}
      />
    </>
  );
} 