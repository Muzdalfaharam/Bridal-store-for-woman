"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Barat", href: "/barat" },
    { name: "Walima", href: "/walima" },
    { name: "Mehndi", href: "/mehndi" },
    { name: "Mayo", href: "/mayo" },
    { name: "Jewelry", href: "/jewelry" },
    { name: "Shoes", href: "/shoes" },
    { name: "Bags", href: "/bags" },
  ];

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24"></div>
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-pink-200/50"
            : "bg-gradient-to-r from-pink-100/90 via-rose-100/90 to-pink-100/90 backdrop-blur-sm py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo - Light Pink with smaller size */}
            <Link
              href="/"
              className={`font-serif text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 flex-shrink-0 group ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              <span className="text-pink-400 relative">
                Bridal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="text-pink-400">Store</span>
            </Link>

            {/* Desktop Menu - Smaller text with medium bold */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 relative group whitespace-nowrap ${
                    isScrolled ? "text-pink-400 hover:text-pink-500" : "text-pink-400 hover:text-pink-500"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side - Cart + CTA */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              {/* Cart Icon - Light Pink */}
              <Link href="/cart" className="relative group">
                <div className="p-1.5 rounded-full hover:bg-pink-100 transition-all duration-300">
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isScrolled ? "text-pink-400 group-hover:text-pink-500" : "text-pink-400 group-hover:text-pink-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg shadow-rose-300/50"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              {/* Book Now Button - Dark Pink/Red Gradient */}
              <Link
                href="/checkout"
                className="px-6 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm lg:text-base font-semibold rounded-full hover:shadow-xl hover:shadow-rose-300/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile Cart - Light Pink */}
              <Link href="/cart" className="relative">
                <div className="p-1 rounded-full hover:bg-pink-100 transition-colors duration-300">
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isScrolled ? "text-pink-400" : "text-pink-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg shadow-rose-300/50">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors duration-300 p-1 rounded-lg hover:bg-pink-100 ${
                  isScrolled ? "text-pink-400" : "text-pink-400"
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Light Pink Text */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md rounded-2xl mt-4 shadow-xl border border-pink-100/50"
              >
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-pink-400 hover:text-pink-500 hover:bg-pink-50 rounded-xl transition-all duration-300 font-semibold text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 pt-3 border-t border-pink-100"
                  >
                    <Link
                      href="/checkout"
                      className="block px-6 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-center rounded-full font-semibold text-base hover:shadow-xl hover:shadow-rose-300/40 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}