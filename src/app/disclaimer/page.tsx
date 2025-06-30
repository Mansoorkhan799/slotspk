import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - Slots PK',
  description: 'Legal disclaimer and terms of use for Slots PK gaming platform.',
  keywords: ['SlotsPK disclaimer', 'terms', 'conditions', 'limitations', 'legal'],
  robots: {
    index: false,
    follow: false,
  }
};

export default function Disclaimer() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Disclaimer</h1>
          
          <div className="bg-secondary rounded-lg p-6 md:p-8">
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="mb-4">
                Last Updated: June 20, 2024
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Website and App Disclaimer</h2>
              <p className="mb-4">
                The information provided by SlotsPK ("we," "us," or "our") on our website and mobile application (the "Service") is for general informational and entertainment purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
              </p>
              <p className="mb-4">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided on the Service. Your use of the Service and your reliance on any information on the Service is solely at your own risk.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Age Restrictions</h2>
              <p className="mb-4">
                The Service is intended for users who are at least 18 years of age. By using the Service, you confirm and warrant that you are at least 18 years of age. If you are under the age of 18, please do not use the Service. We do not knowingly collect personal information from anyone under the age of 18.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Responsible Gaming</h2>
              <p className="mb-4">
                SlotsPK promotes responsible gaming. Gaming should be treated as a form of entertainment and not as a way to make money. Please be aware of the following:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Set limits on your time and money spent</li>
                <li>Do not chase losses</li>
                <li>Do not game when you are upset, stressed, or depressed</li>
                <li>Balance gaming with other activities</li>
                <li>Do not use gaming as a source of income</li>
              </ul>
              <p className="mb-4">
                If you believe you may have a gaming problem, please seek help from professional services.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">External Links Disclaimer</h2>
              <p className="mb-4">
                The Service may contain links to external websites or applications that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites or applications.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Professional Disclaimer</h2>
              <p className="mb-4">
                The Service is not intended to constitute professional advice. The content on the Service is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to the accuracy or completeness of the information found on the Service.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Testimonials Disclaimer</h2>
              <p className="mb-4">
                The Service may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Your Consent</h2>
              <p className="mb-4">
                By using our Service, you hereby consent to our disclaimer and agree to its terms.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Updates to This Disclaimer</h2>
              <p className="mb-4">
                Should we update, amend or make any changes to this document, those changes will be prominently posted here.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Disclaimer, please contact us:
              </p>
              <ul className="list-none mb-4">
                <li className="mb-2">
                  By email: legal@slotspk.com
                </li>
                <li className="mb-2">
                  By visiting the <Link href="/contact" className="text-accent hover:underline">Contact Us</Link> page on our website
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 