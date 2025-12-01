"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "@/components/animations/IntroAnimation";
import Link from "next/link";

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

  if (isLoading) {
    return null; // Prevent flash before checking localStorage
  }

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-black via-bekky-purple-900 to-black">
        <div className="text-center space-y-8 max-w-5xl">
          <div className="flex justify-center items-center gap-6 text-8xl md:text-9xl animate-bounce-slow">
            🦙
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold glow-gold text-bekky-gold-400 leading-tight">
            BEKKY
          </h1>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-bekky-purple-400 -mt-4">
            WITH A BIG BUTT
          </h2>

          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mt-6">
            Welcome to the Big Butt Association - Join the exclusive community celebrating Bekky the purple llama!
            Earn Bekky Bucks, explore adventures, and connect with fellow fans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="/bekky-bucks"
              className="px-10 py-5 gradient-bekky-gold hover:scale-105 text-black font-display font-bold text-lg rounded-lg border-glow-gold transition-all shadow-2xl"
            >
              Earn Bekky Bucks 💰
            </Link>
            <Link
              href="/blog"
              className="px-10 py-5 bg-transparent border-3 border-bekky-purple-500 text-bekky-purple-300 font-display font-bold text-lg rounded-lg hover:bg-bekky-purple-500/30 transition-all"
            >
              Read the Blog 📖
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 glow-gold text-bekky-gold-400">
            Join the Association
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Link href="/blog" className="group">
              <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-gold-400/30 rounded-xl p-8 hover:border-bekky-gold-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-bekky-gold-400/20">
                <div className="text-6xl mb-4 group-hover:animate-bounce">📖</div>
                <h3 className="text-2xl font-display font-bold text-bekky-gold-400 mb-3">
                  Blog & Stories
                </h3>
                <p className="text-white/80">
                  Read about Bekky&apos;s adventures, festival experiences, and behind-the-scenes content.
                </p>
              </div>
            </Link>

            {/* Feature Card 2 */}
            <Link href="/bekky-bucks" className="group">
              <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-gold-400/30 rounded-xl p-8 hover:border-bekky-gold-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-bekky-gold-400/20">
                <div className="text-6xl mb-4 group-hover:animate-bounce">💰</div>
                <h3 className="text-2xl font-display font-bold text-bekky-gold-400 mb-3">
                  Bekky Bucks
                </h3>
                <p className="text-white/80">
                  Earn rewards with every purchase. Redeem for exclusive merch, raffles, and special perks!
                </p>
              </div>
            </Link>

            {/* Feature Card 3 */}
            <Link href="/gallery" className="group">
              <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-gold-400/30 rounded-xl p-8 hover:border-bekky-gold-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-bekky-gold-400/20">
                <div className="text-6xl mb-4 group-hover:animate-bounce">📸</div>
                <h3 className="text-2xl font-display font-bold text-bekky-gold-400 mb-3">
                  Photo Gallery
                </h3>
                <p className="text-white/80">
                  Relive the best moments from festivals, events, and Bekky&apos;s wild adventures.
                </p>
              </div>
            </Link>

            {/* Feature Card 4 */}
            <Link href="/account" className="group">
              <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-purple-400/30 rounded-xl p-8 hover:border-bekky-purple-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-bekky-purple-400/20">
                <div className="text-6xl mb-4 group-hover:animate-bounce">👤</div>
                <h3 className="text-2xl font-display font-bold text-bekky-purple-400 mb-3">
                  Your Account
                </h3>
                <p className="text-white/80">
                  Track your Bekky Bucks, view achievements, and manage your personalized experience.
                </p>
              </div>
            </Link>

            {/* Feature Card 5 */}
            <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-purple-400/30 rounded-xl p-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-display font-bold text-bekky-purple-400 mb-3">
                Community
              </h3>
              <p className="text-white/80">
                Connect with fellow members of the Big Butt Association and share your experiences.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-bekky-purple-900/30 backdrop-blur-sm border-2 border-bekky-purple-400/30 rounded-xl p-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-display font-bold text-bekky-purple-400 mb-3">
                Exclusive Access
              </h3>
              <p className="text-white/80">
                Members-only perks, limited edition merch, early access, and VIP experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-bekky-purple-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-7xl mb-6">🦙</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold glow-gold text-bekky-gold-400">
            Ready to Join?
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            Become a member of the Big Butt Association and start your journey with Bekky today! 🦙
          </p>
          <div className="pt-6">
            <button className="px-12 py-6 gradient-bekky-gold text-black font-display font-bold text-xl rounded-lg border-glow-gold transition-all hover:scale-105 shadow-2xl">
              Coming Soon - Member Sign Up
            </button>
          </div>
          <p className="text-sm text-bekky-purple-300 mt-4">
            Authentication and membership features launching soon
          </p>
        </div>
      </section>
    </div>
  );
}
