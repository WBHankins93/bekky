"use client";

import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  // TODO: Integrate with Shopify Cart API
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping threshold TBD
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-24">
      <div className="container px-4">
        <h1 className="display-heading text-center mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-6xl">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="neon-text-purple text-3xl mb-4 font-heading">Your cart is empty</h2>
            <p className="text-bekky-gray-light mb-8">
              Start shopping to add items to your cart!
            </p>
            <Link href="/shop" className="neon-button neon-button-lg">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="neon-card flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 bg-bekky-gray-dark rounded-lg flex-shrink-0">
                    {/* Product Image - TODO: Add from Shopify */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading text-bekky-gold-neon mb-2">
                      {item.title}
                    </h3>
                    <p className="text-bekky-gray-light mb-4">{item.variant}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          className="w-8 h-8 border-2 border-bekky-purple-neon rounded flex items-center justify-center hover:bg-bekky-purple-neon hover:text-black transition-all"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-white font-bold">{item.quantity}</span>
                        <button
                          className="w-8 h-8 border-2 border-bekky-purple-neon rounded flex items-center justify-center hover:bg-bekky-purple-neon hover:text-black transition-all"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-bekky-gold-neon text-xl font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          className="text-bekky-gray-light hover:text-bekky-purple-neon text-sm mt-2"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="neon-card sticky top-24">
                <h2 className="neon-text-gold text-2xl mb-6 font-heading">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-bekky-gray-light">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-bekky-gray-light">
                    <span>Shipping</span>
                    <span className="text-white">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="neon-divider-gold"></div>
                  <div className="flex justify-between text-xl">
                    <span className="neon-text-gold font-bold">Total</span>
                    <span className="neon-text-gold font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="neon-button-gold neon-button-lg w-full block text-center mb-4"
                >
                  Checkout
                </Link>
                
                <Link
                  href="/shop"
                  className="neon-button neon-button w-full block text-center"
                >
                  Continue Shopping
                </Link>

                {/* BekkyBucks Info */}
                <div className="mt-6 p-4 bg-bekky-gold-neon/10 border border-bekky-gold-neon rounded-lg">
                  <p className="text-sm text-bekky-gold-neon text-center">
                    💰 You&apos;ll earn <strong>{Math.floor(subtotal / 10)}</strong> BekkyBucks on this order!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

