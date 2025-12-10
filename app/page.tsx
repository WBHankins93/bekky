"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "@/components/animations/IntroAnimation";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has seen the intro
    const hasSeenIntro = localStorage.getItem("bekky-intro-seen");

    if (!hasSeenIntro) {
      setShowIntro(true);
    }

    setIsLoading(false);
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem("bekky-intro-seen", "true");
    setShowIntro(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    // TODO: Implement newsletter signup API call
    console.log("Newsletter signup:", email);
    alert("🎉 Thanks for subscribing! Check your email for a welcome gift from Bekky!");
    e.currentTarget.reset();
  };

  if (isLoading) {
    return null; // Prevent flash before checking localStorage
  }

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #3D2F5C 0%, #000000 70%)'
        }}
      >
        {/* Scan line pattern overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(155, 127, 255, 0.03) 2px, rgba(155, 127, 255, 0.03) 4px)`
          }}
        ></div>
        
        <div className="relative z-10 text-center px-8 py-16">
          {/* Bekky Mascot - At Top */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo/bekky-no-background.png"
              alt="Bekky the Llama Queen"
              width={300}
              height={300}
              className="max-w-[300px] md:max-w-[400px] h-auto animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-none">
            <span className="neon-text-gold block mb-2">Festival Clothing</span>
            <span className="neon-text-purple block">For The Trippy & Bootylicious</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-bekky-gray-light mb-8 max-w-2xl mx-auto">
            We&apos;re Big Butt Association (BBA)—where bass meets booty and style meets statement. 
            Whether you&apos;re headbanging at the rail or shuffling under neon lights, BBA is here to make sure you look as bold as you feel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/shop" className="neon-button neon-button-lg">
              Shop Now
            </Link>
            <Link href="/members" className="neon-button-gold neon-button-lg inline-block">
              Join BBA Members 👑
            </Link>
          </div>
        </div>
      </section>

      {/* Member Benefits Callout */}
      <section className="py-16 bg-bekky-purple-dark relative overflow-hidden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title neon-text-gold">Join BBA Members</h2>
            <p className="section-subtitle">
              Earn BekkyBucks on every purchase and unlock exclusive rewards, discounts, and festival vibes!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
            <div className="neon-card scan-line text-center flex flex-col">
              <div className="mb-6 h-20 flex items-center justify-center">
                <span className="text-6xl animate-float leading-none">💰</span>
              </div>
              <h3 className="text-xl text-bekky-purple-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Earn BekkyBucks</h3>
              <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">Get 1 BekkyBuck for every $10 spent. Stack &apos;em up, cash &apos;em in!</p>
            </div>
            
            <div className="neon-card-gold scan-line text-center flex flex-col">
              <div className="mb-6 h-20 flex items-center justify-center">
                <span className="text-6xl animate-float leading-none">🎁</span>
              </div>
              <h3 className="text-xl text-bekky-gold-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Exclusive Discounts</h3>
              <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">Member-only sales, early access to drops, and special promo codes.</p>
            </div>
            
            <div className="neon-card scan-line text-center flex flex-col">
              <div className="mb-6 h-20 flex items-center justify-center">
                <span className="text-6xl animate-float leading-none">🦙</span>
              </div>
              <h3 className="text-xl text-bekky-purple-neon mb-4 font-heading h-14 flex items-center justify-center leading-tight">Bekky&apos;s Inner Circle</h3>
              <p className="text-bekky-gray-light flex-grow flex items-start justify-center pt-2">Join the llama queen&apos;s exclusive crew. Festival fam perks and more!</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/members" className="neon-button-gold neon-button-lg inline-block">
              Sign Up Free →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="shop" className="py-24">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title display-heading">Shop The Collection</h2>
            <p className="section-subtitle">
              Bold, bootylicious, and festival-ready. Gear up for the next rave!
            </p>
          </div>
          
          {/* Product Grid - Placeholder for now */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {/* Products will be loaded here */}
            <div className="text-center py-12 text-bekky-gray-light">
              <p>Products coming soon...</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/shop" className="neon-button neon-button-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Bekky Section */}
      <section className="py-24 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="neon-text-purple text-4xl mb-4 font-heading">Meet Bekky</h2>
              <h3 className="neon-text-gold text-2xl mb-4 font-heading">The Llama Queen with the Big Butt</h3>
              <p className="text-bekky-gray-light leading-relaxed">
                Bekky isn&apos;t just our mascot—she&apos;s the vibe, the energy, the whole damn party. 
                With her fuzzy purple fur and gold chain that says &quot;BBA,&quot; Bekky represents everything 
                we stand for: confidence, celebration, and never taking life too seriously.
              </p>
              <p className="text-bekky-gray-light leading-relaxed">
                Born from the bass-heavy beats of underground raves and the freedom of festival culture, 
                Bekky reminds us all to embrace who we are, shake what we got, and live every moment to the fullest.
              </p>
              <p className="text-bekky-gray-light leading-relaxed">
                Join Bekky&apos;s crew, rock the merch, and let&apos;s make every festival a statement. 🦙👑
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo/bekky-no-background.png"
                alt="Bekky with a Big Butt"
                width={400}
                height={400}
                className="w-full max-w-[400px] h-auto rounded-2xl border-2 border-bekky-purple-neon shadow-neon-purple-md glow-on-hover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-bekky-purple to-bekky-purple-dark">
        <div className="container text-center">
          <h2 className="neon-text-gold text-4xl mb-4 font-heading">Stay In The Loop</h2>
          <p className="text-lg text-bekky-gray-light mb-8 max-w-2xl mx-auto">
            Get exclusive drops, festival tips, and BekkyBucks bonus offers straight to your inbox!
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              name="email"
              className="form-input text-center" 
              placeholder="Enter your email" 
              required
            />
            <button type="submit" className="neon-button-gold neon-button-lg w-full">
              Subscribe 🎉
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
