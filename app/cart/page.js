"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // Format price in PKR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 pt-24 pb-20 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="text-7xl mb-6">🛒</div>
          </motion.div>
          <h2 className="font-serif text-3xl text-gray-800 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Start shopping for your perfect bridal look! Explore our collections of bridal dresses, jewelry, and accessories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/barat"
              className="px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Explore Barat Collection
            </Link>
            <Link
              href="/jewelry"
              className="px-8 py-3 border-2 border-rose-300 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300"
            >
              View Jewelry
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 pt-24 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-rose-600 font-serif text-sm tracking-[0.3em] uppercase">
            Shopping Cart
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mt-3 mb-4">
            Your Cart
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          <p className="text-gray-500 mt-4">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 border border-pink-100 hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-pink-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-serif text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                    <p className="text-gray-400 text-xs">{item.brand}</p>
                    <p className="text-rose-600 font-bold mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 font-medium min-w-[30px] text-center text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-rose-400 hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart Button */}
            {cartItems.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-400 hover:text-rose-500 transition-colors"
                >
                  Clear All Items
                </button>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-pink-100 sticky top-24"
            >
              <h3 className="font-serif text-xl text-gray-800 mb-6">Order Summary</h3>
              
              <div className="space-y-3 border-b border-gray-100 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium text-gray-800">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>
              
              <div className="flex justify-between pt-4 mb-6">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-serif text-2xl font-bold text-rose-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Link
                href="/checkout"
                className="block w-full py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-center rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/barat"
                className="block w-full mt-3 py-2 text-center text-rose-600 text-sm font-medium hover:text-rose-800 transition-colors"
              >
                Continue Shopping →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}