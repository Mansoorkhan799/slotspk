import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_ORIGIN } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: 'Create Slots PK Account & Login – Step-by-Step',
  description:
    'Learn how to create your Slots PK account and login in minutes. Step-by-step registration guide, login tips, and account security advice for new players in Pakistan.',
  alternates: {
    canonical: `${SITE_ORIGIN}/blog/create-account-login`,
  },
  openGraph: {
    title: 'Create Slots PK Account & Login – Step-by-Step',
    description:
      'Step-by-step guide to create your Slots PK account and login. Get started playing games and earning rewards in minutes.',
    url: `${SITE_ORIGIN}/blog/create-account-login`,
    siteName: 'Slots PK',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${SITE_ORIGIN}/Slots-PK-Account-registration-and-Login.webp`,
        width: 1200,
        height: 630,
        alt: 'Create Slots PK Account and Login Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Slots PK Account & Login – Step-by-Step',
    description:
      'Create your Slots PK account and login with our step-by-step guide. Start playing and earning rewards.',
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

export default function CreateAccountLogin() {
  return (
    <>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">Create Account & Login</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
          How to Create a <Link href="/" className="hover:underline">Slots PK</Link> Account and Login
        </h1>
        <p className="text-gray-400 text-sm mb-8">Published: March 20, 2024 · By Slots PK Team</p>

        <div className="prose max-w-none text-gray-300 space-y-8">
          <p className="text-lg">
            Getting started with Slots PK is quick and easy. This guide will walk you through the process of creating your account and logging in, so you can start playing and earning rewards right away.
          </p>

          <section className="bg-secondary px-8 py-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Step-by-Step Account Creation</h2>
            <ol className="list-decimal pl-5 space-y-6 text-gray-300">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Download the Slots PK App</h3>
                <p>First, <Link href="/download-slots-pk-apk" className="text-[#0ea5e9] hover:underline">download the Slots PK APK</Link> from our official website. Once downloaded, install the app on your Android device.</p>
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
                  <li><strong>Password:</strong> Create a strong password that's at least 6 characters long.</li>
                  <li><strong>Confirm Password:</strong> Re-enter your password to confirm it.</li>
                  <li><strong>Captcha:</strong> Enter the captcha code shown on the screen.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Complete Registration</h3>
                <p>After filling out all required fields, tap "Register". Your account will be created instantly.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Claim Your Welcome Bonus</h3>
                <p>Once your account is created, you'll automatically receive a welcome bonus of up to Rs 5888. This bonus can be used to play games on the platform.</p>
              </li>
            </ol>
          </section>

          <section className="bg-secondary px-8 py-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">How to Login to Your Slots PK Account</h2>
            <ol className="list-decimal pl-5 space-y-6 text-gray-300">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Open the Slots PK App</h3>
                <p>Launch the Slots PK app on your Android device.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Enter Your Credentials</h3>
                <p>Enter the username and password you used during registration.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Tap "Login"</h3>
                <p>After entering your credentials, tap the "Login" button to access your account.</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-accent">Verify Your Identity (If Required)</h3>
                <p>For security purposes, you might occasionally be asked to complete a captcha, especially if logging in from a new device.</p>
              </li>
            </ol>
          </section>

          <section className="bg-secondary px-8 py-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Account Security Tips</h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-300">
              <li><strong>Use a Strong Password:</strong> Create a unique password not used for any other accounts.</li>
              <li><strong>Don't Share Your Credentials:</strong> Never share your username or password with anyone.</li>
              <li><strong>Log Out on Shared Devices:</strong> Always log out when using shared or public devices.</li>
              <li><strong>Update Regularly:</strong> Keep the Slots PK app updated to the latest version.</li>
            </ul>
          </section>

          <div className="mt-12 flex justify-center">
            <a
              href="http://win999.39slotspk.com/?referralCode=keo9260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Slots PK APK"
              className="inline-flex items-center px-8 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all"
            >
              DOWNLOAD NOW
              <div className="ml-3 bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </article>

      <BlogPostSchema
        headline="How to Create a Slots PK Account and Login"
        description="Learn how to create your Slots PK account and login in minutes. Step-by-step registration guide, login tips, and account security advice."
        datePublished="2024-03-20T00:00:00Z"
        image={`${SITE_ORIGIN}/Slots-PK-Account-registration-and-Login.webp`}
        slug="create-account-login"
        breadcrumbs={[
          { name: 'Create Account & Login', url: `${SITE_ORIGIN}/blog/create-account-login` },
        ]}
      />
    </>
  );
}
