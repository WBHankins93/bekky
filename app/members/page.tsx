"use client";

import Link from "next/link";
import Image from "next/image";

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-24">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 className="display-heading mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl">Join BBA Members 👑</h1>
          <p className="section-subtitle text-sm sm:text-base md:text-lg">
            Unlock exclusive rewards, earn BekkyBucks, and join Bekky&apos;s inner circle!
          </p>
        </div>

        {/* Member Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 items-stretch px-4">
          <div className="neon-card scan-line text-center flex flex-col">
            <div className="mb-6 h-20 flex items-center justify-center">
              <span className="text-6xl animate-float leading-none">💰</span>
            </div>
            <h3 className="text-xl text-bekky-purple-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Earn BekkyBucks</h3>
            <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">
              Get 1 BekkyBuck for every $10 spent. Stack &apos;em up, cash &apos;em in!
            </p>
          </div>
          
          <div className="neon-card-gold scan-line text-center flex flex-col">
            <div className="mb-6 h-20 flex items-center justify-center">
              <span className="text-6xl animate-float leading-none">🎁</span>
            </div>
            <h3 className="text-xl text-bekky-gold-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Exclusive Discounts</h3>
            <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">
              Member-only sales, early access to drops, and special promo codes.
            </p>
          </div>
          
          <div className="neon-card scan-line text-center flex flex-col">
            <div className="mb-6 h-20 flex items-center justify-center">
              <span className="text-6xl animate-float leading-none">🦙</span>
            </div>
            <h3 className="text-xl text-bekky-purple-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Bekky&apos;s Inner Circle</h3>
            <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">
              Join the llama queen&apos;s exclusive crew. Festival fam perks and more!
            </p>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="neon-card text-center">
            <div className="mb-8">
              <Image
                src="/logo/bekky-no-background.png"
                alt="Bekky the Purple Llama - Big Butt Association Mascot"
                width={150}
                height={150}
                className="mx-auto mb-6 rounded-full"
              />
            </div>
            
            <div className="bg-bekky-purple-neon/10 border-l-4 border-bekky-gold-neon p-6 rounded-lg mb-8 text-left">
              <p className="font-bold text-bekky-gold-neon mb-2">🎉 Special Launch Offer!</p>
              <p className="text-white">Sign up now and get 10 FREE BekkyBucks to start!</p>
            </div>
            
            <h3 className="neon-text-gold text-2xl mb-6 font-heading">Member Benefits:</h3>
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <li className="text-bekky-gray-light">✅ Earn 1 BekkyBuck per $10 spent</li>
              <li className="text-bekky-gray-light">✅ Redeem BekkyBucks for discounts</li>
              <li className="text-bekky-gray-light">✅ Exclusive member-only sales</li>
              <li className="text-bekky-gray-light">✅ Early access to new drops</li>
              <li className="text-bekky-gray-light">✅ Birthday rewards & surprises</li>
            </ul>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="signupEmail" className="form-label block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="signupPassword" className="form-label block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  name="password"
                  className="form-input"
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  required
                  className="w-5 h-5 accent-bekky-purple"
                />
                <label htmlFor="agreeTerms" className="text-sm text-bekky-gray-light">
                  I agree to receive emails about exclusive offers and BekkyBucks updates
                </label>
              </div>
              
              <button type="submit" className="neon-button-gold neon-button-lg w-full">
                Sign Up Free →
              </button>
            </form>
            
            <p className="text-sm text-bekky-gray-light mt-6">
              Already a member?{" "}
              <Link href="/account" className="neon-text-purple hover:text-bekky-gold-neon transition-colors">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

