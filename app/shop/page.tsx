"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  // TODO: Replace with Shopify products API
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);

  // Update selected category when URL param changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Mock categories - replace with Shopify collections
  const categories = [
    { id: "all", name: "All Products" },
    { id: "jerseys", name: "Jerseys" },
    { id: "lingerie", name: "Lingerie", comingSoon: true },
    { id: "hoodies", name: "Hoodies & Jackets" },
    { id: "tees", name: "Tees & Tanks" },
    { id: "accessories", name: "Accessories" },
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container">
        {/* Page Header */}
        <div className="section-header mb-12">
          <h1 className="display-heading mb-4">Shop The Collection</h1>
          <p className="section-subtitle">
            Bold, bootylicious, and festival-ready. Gear up for the next rave!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.id === "all" ? "/shop" : `/shop?category=${category.id}`}
              className={`px-6 py-3 font-heading font-bold uppercase tracking-wide rounded-lg transition-all inline-block ${
                selectedCategory === category.id
                  ? "neon-button-gold neon-button"
                  : "neon-button"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Coming Soon Page for Lingerie */}
        {selectedCategory === "lingerie" ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6 animate-float">👙</div>
            <h2 className="neon-text-purple text-4xl md:text-5xl mb-4 font-heading">Lingerie Collection</h2>
            <p className="neon-text-gold text-2xl mb-6 font-heading">Coming Soon</p>
            <p className="text-bekky-gray-light mb-8 max-w-2xl mx-auto text-lg">
              Get ready for something sultry and bootylicious! Our exclusive lingerie collection is dropping soon. 
              Join BBA Members to get early access and exclusive previews! 👑
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/members" className="neon-button-gold neon-button-lg">
                Join Members for Early Access 👑
              </Link>
              <Link href="/shop" className="neon-button neon-button-lg">
                Browse Other Collections
              </Link>
            </div>
          </div>
        ) : isLoading ? (
          <div className="text-center py-16">
            <div className="inline-block w-16 h-16 border-4 border-bekky-purple-neon/20 border-t-bekky-purple-neon rounded-full animate-spin"></div>
            <p className="text-bekky-gray-light mt-4">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="neon-text-purple text-3xl mb-4 font-heading">Products Coming Soon</h2>
            <p className="text-bekky-gray-light mb-8 max-w-md mx-auto">
              We&apos;re getting our inventory ready! Check back soon for the latest festival gear.
            </p>
            <Link href="/" className="neon-button neon-button-lg">
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {products
                .filter((product) =>
                  selectedCategory === "all" ? true : product.category === selectedCategory
                )
                .map((product) => (
                  <div key={product.id} className="product-card">
                    {product.badge && (
                      <span className="neon-badge neon-badge-gold absolute top-4 right-4 z-10">
                        {product.badge}
                      </span>
                    )}
                    <Link href={`/product/${product.id}`}>
                      <div className="product-card-img bg-bekky-gray-dark flex items-center justify-center">
                        {/* Product Image - TODO: Add from Shopify */}
                        <span className="text-4xl">🦙</span>
                      </div>
                    </Link>
                    <div className="product-card-body">
                      <h3 className="product-card-title font-heading">{product.title}</h3>
                      <div className="product-card-price mb-4">
                        {product.comparePrice && (
                          <del className="text-bekky-gray-light text-lg mr-2">
                            ${product.comparePrice}
                          </del>
                        )}
                        <span className="text-bekky-gold-neon text-2xl font-bold">
                          ${product.price}
                        </span>
                      </div>
                      <button
                        className="neon-button w-full"
                        onClick={() => {
                          // TODO: Add to Shopify cart
                          console.log("Add to cart:", product.id);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination - TODO: Add when products are loaded */}
            <div className="text-center">
              <div className="flex gap-4 justify-center">
                <button className="neon-button" disabled>
                  Previous
                </button>
                <span className="text-bekky-gray-light flex items-center">
                  Page 1 of 1
                </span>
                <button className="neon-button" disabled>
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {/* Newsletter CTA */}
        <div className="mt-24 text-center">
          <div className="neon-card max-w-2xl mx-auto">
            <h2 className="neon-text-gold text-3xl mb-4 font-heading">
              Stay Updated on New Drops
            </h2>
            <p className="text-bekky-gray-light mb-6">
              Get notified when we release new products and exclusive member-only items!
            </p>
            <Link href="/members" className="neon-button-gold neon-button-lg inline-block">
              Join Members for Early Access 👑
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

