"use client";

import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [step, setStep] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    // Animation sequence
    const timers = [
      setTimeout(() => setStep(1), 500),   // Show llama
      setTimeout(() => setStep(2), 1500),  // Show text
      setTimeout(() => setStep(3), 2500),  // Show tagline
      setTimeout(() => onComplete(), 4000), // Auto-complete
    ];

    return () => {
      clearTimeout(skipTimer);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center space-y-8 relative">
        {/* Llama emoji with animation */}
        <div
          className={`text-9xl transition-all duration-1000 ${
            step >= 1 ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-180"
          }`}
        >
          🦙
        </div>

        {/* Bekky text */}
        <h1
          className={`text-7xl md:text-9xl font-display font-bold glow-purple text-bekky-purple-300 transition-all duration-1000 ${
            step >= 2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          BEKKY
        </h1>

        {/* Tagline */}
        <p
          className={`text-2xl md:text-3xl font-display text-bekky-neon-pink glow-neon-pink transition-all duration-1000 ${
            step >= 3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Welcome to the Purple Llama World
        </p>

        {/* Decorative elements */}
        <div
          className={`flex gap-6 justify-center items-center text-5xl transition-all duration-1000 ${
            step >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
            💜
          </span>
          <span className="animate-bounce" style={{ animationDelay: "200ms" }}>
            🎉
          </span>
          <span className="animate-bounce" style={{ animationDelay: "400ms" }}>
            ✨
          </span>
        </div>

        {/* Skip button */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-bekky-purple-300 transition-colors text-sm"
          >
            Skip intro →
          </button>
        )}
      </div>

      {/* Particle effects (simple version) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-bekky-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
