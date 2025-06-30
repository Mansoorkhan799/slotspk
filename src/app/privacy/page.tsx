import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SlotsPK',
  description: 'Read our privacy policy to understand how SlotsPK collects, uses, and protects your personal information.',
  keywords: ['SlotsPK privacy policy', 'privacy', 'data protection', 'user privacy'],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
          
          <div className="bg-secondary rounded-lg p-6 md:p-8">
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="mb-4">
                Last Updated: June 20, 2024
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Introduction</h2>
              <p className="mb-4">
                SlotsPK ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Information We Collect</h2>
              <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Personal Data</h3>
              <p className="mb-4">
                When you use our Service, we may collect personally identifiable information, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Device information (model, operating system, unique device identifiers)</li>
                <li>IP address</li>
                <li>Location data (with permission)</li>
                <li>Transaction information</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Usage Data</h3>
              <p className="mb-4">
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Games played and time spent</li>
                <li>In-app purchases</li>
                <li>Features accessed</li>
                <li>Performance data</li>
                <li>Click patterns</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To verify your identity for security purposes</li>
                <li>To process payments</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Disclosure of Data</h2>
              <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Business Transaction</h3>
              <p className="mb-4">
                If we are involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Security of Data</h2>
              <p className="mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Your Data Protection Rights</h2>
              <p className="mb-4">
                Depending on your location and applicable laws, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification (to correct information)</li>
                <li>The right to object to processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us using the contact information provided below.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Children's Privacy</h2>
              <p className="mb-4">
                Our Service is not intended for use by individuals under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from Children. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="mb-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-white">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By email: privacy@slotspk.com</li>
                <li>By visiting the Contact Us page on our website</li>
                <li>By phone: +92 300 123 4567</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 