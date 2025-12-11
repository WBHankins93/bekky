"use client";

import Link from "next/link";

// Placeholder data - will be replaced with Shopify API calls
const mockBekkyBucks = 125;
const mockPurchaseHistory = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    items: ["BBA Festival Jersey - Purple", "BBA Festival Jersey - Gold"],
    total: "$89.98",
    bekkyBucksEarned: 9,
  },
  {
    id: "ORD-002",
    date: "2024-01-08",
    items: ["BBA Rave Tank - Neon Green"],
    total: "$34.99",
    bekkyBucksEarned: 3,
  },
  {
    id: "ORD-003",
    date: "2023-12-20",
    items: ["BBA Festival Jersey - Purple", "BBA Snapback Hat"],
    total: "$64.98",
    bekkyBucksEarned: 6,
  },
];

export default function MembersDashboard() {
  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="display-heading mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl">
            Member Dashboard
          </h1>
          <p className="section-subtitle text-sm sm:text-base md:text-lg">
            Track your BekkyBucks and purchase history
          </p>
        </div>

        {/* 2 Column Layout: BekkyBucks (Left) and Purchase History (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 max-w-7xl mx-auto">
          {/* Left Column: BekkyBucks Balance Card */}
          <div>
            <div className="neon-card-gold scan-line text-center">
              <div className="mb-6">
                <span className="text-6xl animate-float leading-none block mb-4">💰</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-bekky-gold-neon mb-2">
                  Your BekkyBucks
                </h2>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold neon-text-gold mb-4">
                  {mockBekkyBucks}
                </div>
                <p className="text-bekky-gray-light text-sm sm:text-base">
                  Earn 1 BekkyBuck for every $10 spent
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="neon-button-gold neon-button-lg px-6 py-3 text-sm sm:text-base"
                >
                  Shop Now →
                </Link>
                <Link
                  href="/members"
                  className="neon-button neon-button-lg px-6 py-3 text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Purchase History (Scrolling) */}
          <div>
            <div className="neon-card flex flex-col h-[600px]">
              <h2 className="text-2xl sm:text-3xl font-heading text-bekky-purple-neon mb-6 sm:mb-8 text-center flex-shrink-0">
                Purchase History
              </h2>

              {mockPurchaseHistory.length === 0 ? (
                <div className="text-center py-12 flex-grow flex flex-col items-center justify-center">
                  <p className="text-bekky-gray-light text-lg mb-4">No purchases yet</p>
                  <Link href="/shop" className="neon-button-gold neon-button-lg inline-block">
                    Start Shopping →
                  </Link>
                </div>
              ) : (
                <div className="flex-grow overflow-y-auto pr-2 space-y-4 sm:space-y-6 scrollbar-purple">
                  {mockPurchaseHistory.map((order) => (
                    <div
                      key={order.id}
                      className="border border-bekky-purple-neon/20 rounded-lg p-4 sm:p-6 hover:border-bekky-purple-neon/40 transition-all bg-black/50"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-heading text-bekky-purple-neon mb-2">
                            Order #{order.id}
                          </h3>
                          <p className="text-bekky-gray-light text-sm sm:text-base">
                            {new Date(order.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl sm:text-2xl font-bold text-bekky-gold-neon mb-1">
                            {order.total}
                          </p>
                          <p className="text-sm text-bekky-green">
                            +{order.bekkyBucksEarned} BekkyBucks earned
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-bekky-purple-neon/20 pt-4">
                        <p className="text-bekky-gray-light text-sm sm:text-base mb-2">
                          Items:
                        </p>
                        <ul className="space-y-1">
                          {order.items.map((item, index) => (
                            <li
                              key={index}
                              className="text-white text-sm sm:text-base flex items-center gap-2"
                            >
                              <span className="text-bekky-green">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

