import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';
import MobileOptimizedImage from '@/components/MobileOptimizedImage';

// This additional metadata enhances the page-specific SEO
export const metadata: Metadata = {
  title: {
    default: "Slots PK Download Official APK for Android 2025",
    template: "%s | Slots PK"
  },
  description: "Download Slots PK, Pakistan's premier gaming platform. Experience thrilling card games, slots, and tournaments. Win real rewards with secure payments and 24/7 support. Join 10,000+ players now!",
  keywords: [
    "Slots PK",
    "Pakistan gaming",
    "online card games",
    "mobile casino games",
    "Android gaming app 2025",
    "online gaming",
    "multiplayer games",
    "Pakistan card games",
    "mobile gaming platform",
    "real money games",
    "secure gaming app",
    "gaming rewards",
    "Pakistan slots games",
    "best gaming platform",
    "mobile gambling app"
  ],
  openGraph: {
    title: 'Slots PK Download Official APK for Android 2025',
    description: 'Join 10K+ players on Pakistan\'s premier gaming platform. Play Teen Patti, Rummy, Slots & more. Secure payments, instant withdrawals, 24/7 support. Download now!',
    images: [
      {
        url: 'https://slotspk.com.pk/slots-pk-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Slots PK APK Download'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slots PK Download Official APK for Android 2025',
    description: 'Join 10K+ players on Pakistan\'s premier gaming platform. Play Teen Patti, Rummy, Slots & more. Secure payments, instant withdrawals, 24/7 support. Download now!',
    images: ['https://slotspk.com.pk/slots-pk-logo.webp']
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section with improved spacing */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Link href="/" className="hover:text-[#FFA500] transition-colors">
                  <span className="text-white">Slots PK</span>{' '}
                  <span className="text-[#FFA500]">APK Pakistan</span>
                </Link>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Download</span>{' '}
                <span className="text-white">Latest Version for Android</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] transition-colors">Slots PK</Link> is the best gaming app in Pakistan.
              This application is only available for Android - 
              download it now and start playing.
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <a 
                href="http://win999.39slotspk.com/?referralCode=keo9260" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid with improved spacing */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4">
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">10K+</div>
                <div className="text-gray-400 text-sm">Players</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">30+</div>
                <div className="text-gray-400 text-sm">Games</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">Rs100K</div>
                <div className="text-gray-400 text-sm">Max Payout</div>
              </div>
            </div>

            {/* Android only notice */}
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative w-full max-w-[320px] aspect-square ml-auto">
              <Image
                src="/slots-pk.webp"
                alt="Slots PK Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority={true}
                quality={90}
                sizes="(min-width: 768px) 320px, (max-width: 767px) 280px, 100vw"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-8 md:hidden">
            <div className="relative w-full max-w-[280px] aspect-square mx-auto">
              <Image
                src="/slots-pk.webp"
                alt="Slots PK Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority={true}
                quality={90}
                sizes="(min-width: 768px) 320px, (max-width: 767px) 280px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Specifications Table with improved spacing */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">App Specifications</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">APP Name</td>
                  <td className="py-4 px-6 text-left text-white">Slots PK</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Current Version</td>
                  <td className="py-4 px-6 text-left text-white">v1.5.2</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developer</td>
                  <td className="py-4 px-6 text-left text-white">Slots PK Team</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Operating System</td>
                  <td className="py-4 px-6 text-left text-white">Android</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">License</td>
                  <td className="py-4 px-6 text-left text-white">Free</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Website</td>
                  <td className="py-4 px-6 text-left text-white">
                    <a href="http://win999.39slotspk.com/?referralCode=keo9260" className="text-[#0ea5e9] hover:text-[#6366f1] transition-colors" target="_blank" rel="noopener noreferrer">
                      slotspk.com.pk
                    </a>
                  </td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">38.45 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Overview</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              These days there is a high surge in demand for casino games. Players all around Pakistan are interested in
              earning games by playing simple games. As a result, there are many casino apps developed. For now, there
              are hundreds of casino apps in the market. However, not every app can be trusted and not every app has top-quality features.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Among them, Slots PK is one of the top gaming apps that is known for its best and most innovative features. It
              is an app where anyone can play games in a safe way and earn money. It is 100% legit and is developed by the professionals. 
              It has fair games, HD graphics, an ad-free experience, and fast performance. Due to these features, many players are choosing 
              to download this app.
            </p>
          </div>
        </div>
      </section>

      {/* What is Slots PK Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is Slots PK?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Casino apps are trending these days due to two reasons. First of all, unemployment in Pakistan is surging these
              days and players are looking for apps that pay them free money. Secondly, most people want to play popular card games and slots. This is because of the cultural
              relevance of these games as people in the past used to play them eagerly. Our platform is a casino and gaming app
              that was recently launched in Pakistan. It is an app where you will find games to play and rewards so that you
              can earn money.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We offer engaging games and rewarding offers. It has games like slots, fish shooting games, live games,
              sports, and many card games. These games are innovative and well-designed. Players can
              start their gaming journey through this app and earn rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500]">Game Screenshots</h2>
          
          {/* Title */}
          <h3 className="text-3xl font-bold text-[#FFA500] mb-8">SLOTSPK.com</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Game Image */}
            <div className="w-full">
              <Image
                src="/Slots-PK-game.webp"
                alt="Slots PK Game Interface"
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* App Interface */}
            <div className="w-full">
              <Image
                src="/Slots-PK-APK.webp"
                alt="Slots PK App Interface"
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Features of Slots PK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Games Collection</h3>
            <p className="text-gray-300">Play various games in one place. Check card games, slots, fish shooting games, live games as well as sports channels. There is a game for everyone.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Well-Known Game Providers</h3>
            <p className="text-gray-300">These games are very qualitative because they are developed by the best gaming companies like Jili, Evo, JDB, and Spribe. You can enjoy HD graphics and engaging themes of these games.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Rewards Centre</h3>
            <p className="text-gray-300">In the rewards center, players can find different rewards and bonuses to claim. In case you have missed any offers, you can check in the reward center.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Earn Real Cash</h3>
            <p className="text-gray-300">Make real money in a legitimate way. Play high RTP games and win lots of money. The earnings are real and you can cash out at any time.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Join Events and Tournaments</h3>
            <p className="text-gray-300">There are tournaments in which you can participate. Apart from that you can join game events. Aim to win because top players get jackpots and pooled prizes.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Play Multiplayer Games</h3>
            <p className="text-gray-300">Enjoy a game competition against other players. Not only multiplayer games are engaging but you can also interact with others and chat.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">High Security</h3>
            <p className="text-gray-300">Data on this app including personal and transactional, is safe on the app. SSL encryption makes the app safe to use and user information private.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Fair Games</h3>
            <p className="text-gray-300">Play games without worrying about any biases. The games are fair and everyone gets a fair chance at winning. This is possible with the help of the RNG system.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Track Your Activities</h3>
            <p className="text-gray-300">Keep checking your total earnings, spending, and other details in the records of the app. Make sure to maintain healthy gaming habits.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Easy Payments</h3>
            <p className="text-gray-300">With the help of Easypaisa and Jazzcash, now you can deposit as well as withdraw money easily. You can perform transactions safely and efficiently.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Ad-Free Environment</h3>
            <p className="text-gray-300">Enjoy games and events without any pop-ups and ads. You can engage with the app without distractions.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">Customer Support</h3>
            <p className="text-gray-300">You will have 24/7 customer support to help you with any issue related to the app. There is also a WhatsApp and a Telegram channel for contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What Games are Available?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Slots</h3>
            <p className="mb-4 text-gray-300">
                Slots are the most popular games to play. These games are easy to play and very rewarding. These are mostly luck-driven games where you can earn money by spinning the reel. We offer a variety of exciting slot games with different themes and features.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Fishing</h3>
            <p className="mb-4 text-gray-300">
                Fish shooting games are a bit strategic because you need to observe creatures and then target them. These games are very colorful and vibrant with engaging gameplay mechanics.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Bingo</h3>
            <p className="mb-4 text-gray-300">
                Bingo games are simple yet fun to play. We offer various exciting bingo variations.
            </p>
          </div>
          <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Card Games</h3>
            <p className="mb-4 text-gray-300">
                This category has many card games to play. There are classic card games as well as popular variants from the region. Enjoy various multiplayer card game options.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Bonuses, Rewards and Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Download Bonus</h3>
            <p className="text-gray-300">For anyone who downloads the app, will get a download bonus of RS 3888. You can use the bonus to play games. However, you can not withdraw that as it has turnover requirements.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Welcome Bonus</h3>
            <p className="text-gray-300">Once you download the app, you can register on the app. One of the benefits of signing up on the app is that you will get a welcome bonus of up to RS 5888.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">First Deposit Bonus</h3>
            <p className="text-gray-300">Make your first payment on the app and get 129% extra.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Daily Login Bonus</h3>
            <p className="text-gray-300">Open the app daily and log in to collect your daily sign-in bonus. You can get a chance to win an iPhone 16 pro max or a cash prize of up to Rs 88,888.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Daily Deposit Bonus</h3>
            <p className="text-gray-300">Make purchases daily and get 8% extra.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">VIP Bonuses</h3>
            <p className="text-gray-300">Get a sign-in bonus, daily bonus, weekly pay, and upgrade bonus.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Referral Reward</h3>
            <p className="text-gray-300">Invite your friend and get Rs 288 instantly. You will also get 0.88% on their first deposits and 0.64% if they play games.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Download and Install?</h2>
          <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Start by downloading the app using the given link. You can also just tap on the download toggle.</li>
            <li>Once downloaded, players are required to turn on the installation. In the settings of Android, enable unknown sources.</li>
            <li>Finally, in the downloads, locate the app and tap on it to install.</li>
          </ol>
        </div>
        <div className="flex justify-center">
          <a 
            href="http://win999.39slotspk.com/?referralCode=keo9260" 
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
          </div>
        </div>
      </section>

      {/* Account Creation */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Create an Account?</h2>
          <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open your app and press "register".</li>
            <li>Start filling out the form.</li>
            <li>First of all, enter a username. It must be unique and available.</li>
            <li>Next, enter a password. It must be strong and at least 6 characters long.</li>
            <li>In the next box, confirm the password again.</li>
            <li>Enter captcha.</li>
            <li>Click on register and complete the process.</li>
            <li>For Slots PK login, enter the same username and enter your password to continue.</li>
          </ol>
          </div>
        </div>
      </section>

      {/* Deposit Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Deposit Money?</h2>
            <div className="md:flex items-center gap-8">
              <div className="mb-6 md:mb-0 w-full md:w-1/2 flex justify-center">
          <Image
                  src="/Slots-PK-Withdraw-Money.webp"
                  alt="Slots PK Deposit Money"
                  width={350}
                  height={400}
                  className="rounded-lg shadow-lg object-contain"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <div className="bg-secondary px-8 py-8 rounded-lg w-full md:w-1/2">
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                  <li>Click on the wallet icon given on the app.</li>
                  <li>First of all, choose the wallet option and select Easypaisa or Jazzcash.</li>
                  <li>Next, select the amount to add. The starting amount is RS 100 and the maximum is Rs 50,000.</li>
                  <li>Click on go.</li>
                  <li>Enter wallet-related details.</li>
                  <li>Click on deposit.</li>
                  <li>On your wallet app confirm the transaction.</li>
                </ol>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Withdraw?</h2>
            <div className="md:flex items-center gap-8">
              <div className="mb-6 md:mb-0 w-full md:w-1/2 flex justify-center">
          <Image
                  src="/Slots-PK-deposit-money.webp"
                  alt="Slots PK Withdraw Money"
                  width={350}
                  height={400}
                  className="rounded-lg shadow-lg object-contain"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <div className="bg-secondary px-8 py-8 rounded-lg w-full md:w-1/2">
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                  <li>Tap on the withdraw option.</li>
                  <li>Select bank transfer, Jazzcash, or Easypaisa.</li>
                  <li>Enter the amount that you want to withdraw.</li>
                  <li>Click on "+" and enter account details.</li>
                  <li>Finally, enter your transaction password and complete the process.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Tricks */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Tips and Tricks to Play</h2>
          <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li>Select high RTP games like slot machines if you want high earnings. But remember that these types of games have high risk.</li>
            <li>Don't spend all your money at once instead start with a small investment.</li>
            <li>Play games in multiplayer mode to learn from other players.</li>
            <li>Always check the rewards center so that you don't miss your bonus.</li>
            <li>Refer the app to others to earn more.</li>
            <li>Take breaks when you feel overwhelmed with the games.</li>
          </ul>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros and Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Pros</h3>
            <div className="bg-secondary px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>It is a free app.</li>
                <li>Easy registration and transactions.</li>
                <li>Available for everyone in Pakistan.</li>
                <li>There are no ads.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Cons</h3>
            <div className="bg-secondary px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Games like poker are addictive.</li>
                <li>You can't play in offline mode.</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              How can I download Slots PK?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Visit <a href="http://win999.39slotspk.com/?referralCode=keo9260" className="text-[#0ea5e9] hover:text-[#6366f1]" target="_blank" rel="noopener noreferrer">slotspk.com.pk</a> and click the download button. Follow the installation instructions to start playing.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Can I download Slots PK Mod APK?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              We recommend downloading the official Slots PK app from our website only. Modified versions may be unsafe and could compromise your account security.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Can I download and Install Slots PK on iOS?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Currently, Slots PK is only available for Android devices. We are working on bringing the app to iOS users in the future.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Is Slots PK app safe?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Yes, Slots PK is completely safe to use. Our app is developed by professionals with strict security measures. We use advanced encryption to protect user data and transactions.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              What games are available on Slots PK?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Slots PK offers a wide variety of games including:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Exciting Slot Games</li>
                  <li>Popular Card Games</li>
                <li>Fish Shooting Games</li>
                <li>Live Casino Games</li>
                <li>Sports Betting</li>
              </ul>
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              How do I withdraw money from Slots PK?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Withdrawing money from Slots PK is simple:
              <ol className="list-decimal ml-6 mt-2 space-y-1">
                <li>Go to your wallet section</li>
                <li>Click on 'Withdraw'</li>
                <li>Enter the amount you want to withdraw</li>
                <li>Select your preferred payment method</li>
                <li>Confirm the withdrawal</li>
              </ol>
              Withdrawals are typically processed within 24 hours.
            </div>
          </details>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Conclusion</h2>
          <div className="space-y-4">
          <p className="text-gray-300">
            In conclusion, Slots PK is the ultimate winner when it comes to the best casino apps in Pakistan. It has a huge number of games to play, a number of rewards, HD graphics, and many other important features. It has smooth app performance, background music, and bi bi-lingual interface. You can easily download the app and then register on it using your phone number. There are numerous rewards and bonuses and you can earn from referral programs too. Download the app and check the features to know more.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
