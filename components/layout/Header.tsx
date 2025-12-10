"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-20 bg-black/95 border-b-2 border-bekky-purple-neon shadow-neon-purple-sm shadow-lg z-[100] backdrop-blur-md">
      <nav className="container h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/bekky-no-background.png"
            alt="Bekky the Llama"
            width={50}
            height={50}
            className="h-12 w-auto transition-all group-hover:drop-shadow-[0_0_10px_#00FF41] group-hover:drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]"
          />
          <span className="font-metal text-2xl md:text-3xl text-bekky-purple-neon tracking-wider neon-text-purple hidden sm:block">
            Big Butt Association
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-base font-bold uppercase tracking-wide text-white py-2 relative transition-all group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="group-hover:text-bekky-purple-neon transition-colors">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bekky-purple-neon shadow-neon-purple-sm transition-all group-hover:w-full origin-right"></span>
            </Link>
          ))}
          
          {/* Member Button */}
          <Link href="/members" className="px-4 py-2 bg-transparent border-2 border-bekky-gold-neon text-bekky-gold-neon rounded-lg font-heading font-bold uppercase tracking-wide transition-all shadow-neon-gold-sm hover:bg-bekky-gold-neon hover:text-black hover:shadow-neon-gold-md">
            👑 Members
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-2xl text-white transition-all hover:text-bekky-gold" aria-label="Shopping cart">
            🛒
            <span className="absolute -top-2 -right-2 bg-bekky-gold text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black/98 flex-col justify-start p-8 gap-6 border-r-2 border-bekky-purple-neon shadow-neon-purple-md transition-transform z-50 ${
          isMenuOpen ? 'flex translate-x-0' : 'hidden -translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="font-heading text-xl font-bold uppercase tracking-wide text-white w-full py-2 transition-all hover:text-bekky-purple-neon"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/members" className="px-4 py-2 bg-transparent border-2 border-bekky-gold-neon text-bekky-gold-neon rounded-lg font-heading font-bold uppercase tracking-wide transition-all shadow-neon-gold-sm hover:bg-bekky-gold-neon hover:text-black hover:shadow-neon-gold-md w-full mt-4 text-center block">
          👑 Members
        </Link>
        <Link href="/cart" className="px-4 py-2 bg-transparent border-2 border-bekky-gold-neon text-bekky-gold-neon rounded-lg font-heading font-bold uppercase tracking-wide transition-all shadow-neon-gold-sm hover:bg-bekky-gold-neon hover:text-black hover:shadow-neon-gold-md w-full mt-4 text-center block">
          🛒 Cart
        </Link>
      </div>
    </header>
  );
}
