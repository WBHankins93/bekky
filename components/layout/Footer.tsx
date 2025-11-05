import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 border-t border-bekky-purple-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🦙</span>
              <span className="text-2xl font-display font-bold text-bekky-purple-300">
                BEKKY
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your favorite purple llama community platform.
              Festival vibes, exclusive perks, and Bekky Bucks await!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-bekky-purple-300 font-display font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-bekky-purple-300 transition-colors">
                  Adventures
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-bekky-purple-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/bekky-bucks" className="text-gray-400 hover:text-bekky-purple-300 transition-colors">
                  Bekky Bucks
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-400 hover:text-bekky-purple-300 transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="text-bekky-purple-300 font-display font-semibold mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/bekkywithabigbutt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-bekky-neon-pink transition-colors flex items-center space-x-2"
                >
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <span className="text-gray-400 flex items-center space-x-2">
                  <span>🛍️</span>
                  <span>Shopify Store (Coming Soon)</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bekky World. All rights reserved. Made with 💜 for the Bekky community.</p>
        </div>
      </div>
    </footer>
  );
}
