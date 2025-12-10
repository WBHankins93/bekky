import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bekky-gray-dark border-t-2 border-bekky-purple-neon shadow-[0_-4px_20px_rgba(155,127,255,0.2)] py-8 sm:py-12 mt-16 sm:mt-24 md:mt-32">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/bekky-no-background.png"
                alt="Big Butt Association Logo - Bekky the Purple Llama"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-metal text-lg sm:text-xl text-bekky-purple-neon tracking-wider neon-text-purple">
                Big Butt Association
              </span>
            </div>
            <p className="text-bekky-gray-light text-sm">
              Festival clothing for the trippy & bootylicious. Join the movement!
            </p>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-bekky-purple-neon/10 border-2 border-bekky-purple-neon rounded-full text-bekky-purple-neon text-xl transition-all hover:bg-bekky-purple-neon hover:text-black hover:shadow-neon-purple-md hover:-translate-y-0.5" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-bekky-purple-neon/10 border-2 border-bekky-purple-neon rounded-full text-bekky-purple-neon text-xl transition-all hover:bg-bekky-purple-neon hover:text-black hover:shadow-neon-purple-md hover:-translate-y-0.5" aria-label="TikTok">
                🎵
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-bekky-purple-neon/10 border-2 border-bekky-purple-neon rounded-full text-bekky-purple-neon text-xl transition-all hover:bg-bekky-purple-neon hover:text-black hover:shadow-neon-purple-md hover:-translate-y-0.5" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-bekky-purple-neon/10 border-2 border-bekky-purple-neon rounded-full text-bekky-purple-neon text-xl transition-all hover:bg-bekky-purple-neon hover:text-black hover:shadow-neon-purple-md hover:-translate-y-0.5" aria-label="Facebook">
                📘
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-bekky-gold text-xl mb-6 font-heading">Shop</h3>
            <div className="flex flex-col gap-2">
              <Link href="/shop" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                All Products
              </Link>
              <Link href="/shop?category=jerseys" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Jerseys
              </Link>
              <Link href="/shop?category=lingerie" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Lingerie
              </Link>
              <Link href="/shop?category=hoodies" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Hoodies & Jackets
              </Link>
              <Link href="/shop?category=tees" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Tees & Tanks
              </Link>
              <Link href="/shop?category=accessories" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Accessories
              </Link>
            </div>
          </div>

          {/* About BBA */}
          <div>
            <h3 className="text-bekky-gold text-xl mb-6 font-heading">About BBA</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Our Story
              </Link>
              <Link href="/about#bekky" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Meet Bekky
                </Link>
              <Link href="/members" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Members & BekkyBucks
                </Link>
              <Link href="/blog" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Festival Blog
                </Link>
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Contact Us
                </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-bekky-gold text-xl mb-6 font-heading">Support</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Shipping & Returns
              </Link>
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Size Guide
              </Link>
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                FAQ
              </Link>
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Privacy Policy
              </Link>
              <Link href="#" className="text-bekky-gray-light transition-all hover:text-bekky-purple-neon hover:shadow-neon-purple-sm hover:pl-2">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-bekky-purple-neon/20 text-center text-bekky-gray-light">
          <div className="neon-divider-gold mb-6"></div>
          <p className="text-sm">
            &copy; {currentYear} Big Butt Association. All rights reserved. Built by{" "}
            <a
              href="https://www.sproutflow-studio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-text-purple hover:text-bekky-gold-neon transition-colors"
            >
              Sproutflow Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
