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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="flex justify-center items-center gap-6 text-7xl md:text-9xl animate-bounce-slow">
            🦙
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold glow-purple text-bekky-purple-300">
            Welcome to Bekky World
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join the exclusive community of purple llama lovers. Earn Bekky Bucks,
            explore festival adventures, and connect with fellow fans!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/bekky-bucks"
              className="px-8 py-4 bg-bekky-purple-600 hover:bg-bekky-purple-700 text-white font-display font-semibold rounded-lg border-glow-purple transition-all hover:scale-105"
            >
              Explore Bekky Bucks 💰
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-2 border-bekky-purple-500 text-bekky-purple-300 font-display font-semibold rounded-lg hover:bg-bekky-purple-500/20 transition-all"
            >
              Read Adventures 📖
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 glow-purple text-bekky-purple-300">
            What&apos;s in Bekky World?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Link href="/blog" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-purple-500/30 rounded-xl p-6 hover:border-bekky-purple-500 transition-all hover:scale-105">
                <div className="text-5xl mb-4 group-hover:animate-bounce">🎪</div>
                <h3 className="text-2xl font-display font-bold text-bekky-purple-300 mb-2">
                  Festival Adventures
                </h3>
                <p className="text-gray-400">
                  Behind-the-scenes interviews, festival recaps, and exclusive content from the EDM scene.
                </p>
              </div>
            </Link>

            {/* Feature Card 2 */}
            <Link href="/bekky-bucks" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-neon-pink/30 rounded-xl p-6 hover:border-bekky-neon-pink transition-all hover:scale-105">
                <div className="text-5xl mb-4 group-hover:animate-bounce">💰</div>
                <h3 className="text-2xl font-display font-bold text-bekky-neon-pink mb-2">
                  Bekky Bucks
                </h3>
                <p className="text-gray-400">
                  Earn rewards with every purchase. Redeem for exclusive merch, raffles, and festival perks!
                </p>
              </div>
            </Link>

            {/* Feature Card 3 */}
            <Link href="/gallery" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-neon-blue/30 rounded-xl p-6 hover:border-bekky-neon-blue transition-all hover:scale-105">
                <div className="text-5xl mb-4 group-hover:animate-bounce">📸</div>
                <h3 className="text-2xl font-display font-bold text-bekky-neon-blue mb-2">
                  Photo Gallery
                </h3>
                <p className="text-gray-400">
                  Relive the best moments from festivals, events, and Bekky&apos;s wild adventures.
                </p>
              </div>
            </Link>

            {/* Feature Card 4 */}
            <Link href="/account" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-purple-500/30 rounded-xl p-6 hover:border-bekky-purple-500 transition-all hover:scale-105">
                <div className="text-5xl mb-4 group-hover:animate-bounce">👤</div>
                <h3 className="text-2xl font-display font-bold text-bekky-purple-300 mb-2">
                  Your Profile
                </h3>
                <p className="text-gray-400">
                  Track your journey, view achievements, and manage your personalized Bekky experience.
                </p>
              </div>
            </Link>

            {/* Feature Card 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-neon-green/30 rounded-xl p-6">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-display font-bold text-bekky-neon-green mb-2">
                Community
              </h3>
              <p className="text-gray-400">
                Connect with fellow Bekky fans, share experiences, and be part of something special.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-bekky-purple-500/30 rounded-xl p-6">
              <div className="text-5xl mb-4">🛍️</div>
              <h3 className="text-2xl font-display font-bold text-bekky-purple-300 mb-2">
                Exclusive Perks
              </h3>
              <p className="text-gray-400">
                Members-only access to limited drops, early ticket sales, and VIP experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold glow-purple text-bekky-purple-300">
            Ready to Join the Herd?
          </h2>
          <p className="text-xl text-gray-300">
            Start your Bekky journey today and become part of the purple llama family! 🦙💜
          </p>
          <div className="pt-4">
            <button className="px-10 py-5 bg-gradient-bekky text-white font-display font-bold text-xl rounded-lg border-glow-purple transition-all hover:scale-105 shadow-lg">
              Coming Soon - Authentication
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
