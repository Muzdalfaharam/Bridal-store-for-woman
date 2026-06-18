"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    address: "",
    city: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Prepare order data for Supabase
      const orderData = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        delivery_address: formData.address,
        city: formData.city,
        special_requests: formData.specialRequests,
        items: cartItems,
        total_amount: totalPrice,
        status: "pending",
        created_at: new Date().toISOString(),
      };

      // Insert into Supabase
      const { data, error: supabaseError } = await supabase
        .from('orders')
        .insert([orderData])
        .select();

      if (supabaseError) {
        console.error("Supabase Error:", supabaseError);
        setError("There was an error placing your order. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Clear cart and show success
      clearCart();
      setIsSuccess(true);
      setIsSubmitting(false);

      // Redirect to home after 5 seconds
      setTimeout(() => {
        router.push('/');
      }, 5000);

    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center max-w-md"
        >
          <div className="text-7xl mb-6">🎉</div>
          <h2 className="font-serif text-3xl text-gray-800 mb-3">Order Confirmed!</h2>
          <p className="text-gray-600 mb-2">
            Thank you for your order! We will contact you shortly.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            A confirmation email has been sent to your email address.
          </p>
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="font-serif text-2xl text-gray-800 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Add some items to your cart before checking out.</p>
          <Link
            href="/barat"
            className="px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Explore Collections
          </Link>
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
            Booking
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mt-3 mb-4">
            Checkout
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          <p className="text-gray-500 mt-4">
            Fill in your details to complete your order
          </p>
        </motion.div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-pink-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Personal Details */}
                <div className="md:col-span-2">
                  <h3 className="font-serif text-lg text-gray-800 mb-4 border-b border-pink-100 pb-2">
                    Personal Details
                  </h3>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="+92 300 1234567"
                  />
                </div>

                {/* Event Details */}
                <div className="md:col-span-2 mt-4">
                  <h3 className="font-serif text-lg text-gray-800 mb-4 border-b border-pink-100 pb-2">
                    Event Details
                  </h3>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select event</option>
                    <option value="Barat">Barat</option>
                    <option value="Walima">Walima</option>
                    <option value="Mehndi">Mehndi</option>
                    <option value="Mayo">Mayo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2 mt-4">
                  <h3 className="font-serif text-lg text-gray-800 mb-4 border-b border-pink-100 pb-2">
                    Delivery Address
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="Street address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    rows="3"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                    placeholder="Any special requests or notes..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Place Order"
                )}
              </button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100 sticky top-24">
              <h3 className="font-serif text-xl text-gray-800 mb-6">Order Summary</h3>
              
              <div className="max-h-60 overflow-y-auto space-y-3 mb-4 pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                    <div>
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-400 text-xs ml-1">× {item.quantity}</span>
                    </div>
                    <span className="text-gray-800 font-medium">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-800">Total</span>
                  <span className="font-serif text-2xl font-bold text-rose-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <Link
                href="/cart"
                className="block w-full mt-4 py-2 text-center text-rose-600 text-sm font-medium hover:text-rose-800 transition-colors"
              >
                ← Back to Cart
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}