"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-24">
      <div className="container">
        {/* Page Header */}
        <div className="section-header mb-12 sm:mb-16 md:mb-20">
          <h1 className="display-heading mb-4 text-3xl sm:text-4xl md:text-6xl">About Big Butt Association</h1>
          <p className="section-subtitle text-sm sm:text-base md:text-lg px-4">
            Meet the crew behind the bootylicious brand and discover our festival-fueled story.
          </p>
        </div>

        {/* Bekky Section */}
        <section id="bekky" className="mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4">
            <div className="flex justify-center order-2 md:order-1">
              <Image
                src="/logo/bekky-no-background.png"
                alt="Bekky the Purple Llama Queen - Big Butt Association Mascot Character"
                width={400}
                height={400}
                className="w-full max-w-[400px] h-auto rounded-2xl border-2 border-bekky-purple-neon shadow-neon-purple-md glow-on-hover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="neon-text-purple text-4xl mb-6 font-heading">Meet Bekky</h2>
              <h3 className="neon-text-gold text-2xl mb-6 font-heading">The Llama Queen with the Big Butt</h3>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Bekky isn&apos;t just our mascot—she&apos;s the vibe, the energy, the whole damn party. 
                With her fuzzy purple fur and gold chain that says &quot;BBA,&quot; Bekky represents everything 
                we stand for: confidence, celebration, and never taking life too seriously.
              </p>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Born from the bass-heavy beats of underground raves and the freedom of festival culture, 
                Bekky reminds us all to embrace who we are, shake what we got, and live every moment to the fullest.
              </p>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Join Bekky&apos;s crew, rock the merch, and let&apos;s make every festival a statement. 🦙👑
              </p>
            </div>
          </div>
        </section>

        {/* Jarred Section */}
        <section id="jarred" className="mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center px-4">
            <div className="space-y-6">
              <h2 className="neon-text-gold text-4xl mb-6 font-heading">Jarred</h2>
              <h3 className="neon-text-purple text-2xl mb-6 font-heading">The Hostest with the Mostest</h3>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Jarred is the mastermind behind the Big Butt Association, bringing the energy, the vision, 
                and the absolute best vibes to every event. Known as &quot;The Hostest with the Mostest,&quot; 
                Jarred knows how to throw a party and create unforgettable festival experiences.
              </p>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                With a passion for EDM culture, community building, and making sure everyone feels welcome, 
                Jarred has built BBA into more than just a brand—it&apos;s a movement. From curating the perfect 
                festival lineup to designing gear that makes you stand out, Jarred brings the magic.
              </p>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                When you&apos;re at a BBA event, you&apos;re not just attending—you&apos;re part of the family. 
                That&apos;s the Jarred way. 🎉
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] h-[400px] bg-bekky-gray-dark rounded-2xl border-2 border-bekky-gold-neon shadow-neon-gold-md flex items-center justify-center">
                <span className="text-8xl">🎤</span>
              </div>
            </div>
          </div>
        </section>

        {/* Big Butt Association Brand Section */}
        <section className="mb-16 sm:mb-24 md:mb-32 px-4">
          <div className="neon-card max-w-4xl mx-auto">
            <h2 className="neon-text-gold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-heading text-center">The Big Butt Association</h2>
            <div className="space-y-6">
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Big Butt Association (BBA) was born from a simple idea: festival culture should be bold, 
                bootylicious, and unapologetically fun. We&apos;re not just selling merch—we&apos;re building 
                a community of festival-goers who aren&apos;t afraid to stand out and shake what they got.
              </p>
              <p className="text-bekky-gray-light leading-relaxed text-lg">
                Our brand represents the intersection of EDM culture, self-expression, and pure celebration. 
                Whether you&apos;re headbanging at the rail, shuffling under neon lights, or just vibing with 
                the crew, BBA is here to make sure you look as bold as you feel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="neon-text-purple text-xl mb-2 font-heading">Festival Culture</h3>
                  <p className="text-bekky-gray-light text-sm">
                    Rooted in EDM and rave culture, celebrating the music and community
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h3 className="neon-text-gold text-xl mb-2 font-heading">Exclusivity</h3>
                  <p className="text-bekky-gray-light text-sm">
                    Member-only perks, early access, and exclusive drops for the BBA family
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🦙</div>
                  <h3 className="neon-text-purple text-xl mb-2 font-heading">Community</h3>
                  <p className="text-bekky-gray-light text-sm">
                    Building connections and celebrating together at festivals and events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="neon-card-gold max-w-2xl mx-auto">
            <h2 className="neon-text-gold text-3xl mb-4 font-heading">Join the Movement</h2>
            <p className="text-bekky-gray-light mb-6 text-lg">
              Ready to become part of the Big Butt Association? Join our members and unlock exclusive 
              rewards, early access to drops, and connect with the BBA community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/members" className="neon-button-gold neon-button-lg w-full sm:w-auto text-center">
                Join BBA Members 👑
              </a>
              <a href="/shop" className="neon-button neon-button-lg w-full sm:w-auto text-center">
                Shop the Collection
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

