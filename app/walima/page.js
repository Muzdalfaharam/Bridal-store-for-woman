"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function WalimaPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== HERO SLIDER IMAGES (10 images from products) =====
  const heroSlides = [
    "https://www.aishaimranofficial.com/images/thumbs/0004376_halyah.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0004356_mabiha.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002426_nur-bano.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0001030_farsh-e-gul.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002467_raeesa.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0003304_arjumand.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002436_nur-ul-ain.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002455_ruhi.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0001869_enora.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0001657_afreen.jpeg"
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== 15 WALIMA DRESSES =====
  const products = [
    {
      id: 1,
      name: "Halyah Walima Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 34999,
      description: "Elegant cream and gold walima dress with intricate pearl embroidery and delicate zari work. Perfect for your walima ceremony with a royal touch.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004376_halyah.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004377_halyah.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004376_halyah.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004377_halyah.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004378_halyah.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004380_halyah.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004379_halyah.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Cream", "Gold", "Pearl"],
      fabric: "Luxury Silk",
      embroidery: "Pearl & Zari",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 2,
      name: "Mabiha Bridal Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 39999,
      description: "Stunning white and gold bridal dress with heavy embroidery and traditional craftsmanship. A masterpiece for your walima.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004356_mabiha.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004357_mabiha.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004356_mabiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004357_mabiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004358_mabiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004359_mabiha.jpeg"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["White", "Gold", "Ivory"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Resham",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 3,
      name: "Nur Bano Collection",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 31999,
      description: "Elegant bridal dress with delicate embroidery and beautiful pearl accents. A subtle and sophisticated choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002426_nur-bano.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002427_nur-bano.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002426_nur-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002427_nur-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002428_nur-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002435_nur-bano.jpeg"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pearl", "Cream", "Gold"],
      fabric: "Chiffon",
      embroidery: "Pearl & Sequins",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 4,
      name: "Farsh-e-Gul Bridal",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 44999,
      description: "Luxurious bridal dress with floral embroidery and traditional design elements. A royal choice for your special day.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001030_farsh-e-gul.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001031_farsh-e-gul.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001030_farsh-e-gul.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001031_farsh-e-gul.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001033_farsh-e-gul.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001032_farsh-e-gul.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Cream", "Gold", "Rose"],
      fabric: "Luxury Silk",
      embroidery: "Floral Zari",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 5,
      name: "Raeesa Walima Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 35999,
      description: "Beautiful bridal dress with intricate embroidery and elegant design. Perfect for the modern bride.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002467_raeesa.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002472_raeesa.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002467_raeesa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002472_raeesa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002473_raeesa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002474_raeesa.jpeg"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["White", "Gold", "Cream"],
      fabric: "Georgette",
      embroidery: "Resham & Zari",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 6,
      name: "Arjumand Bridal",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 38999,
      description: "Stunning bridal dress with unique embroidery and modern design elements. A blend of tradition and contemporary style.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0003304_arjumand.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0003305_arjumand.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0003304_arjumand.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003305_arjumand.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003306_arjumand.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003307_arjumand.jpeg"
      ],
      badge: "Limited Edition",
      rating: 5,
      colors: ["Pink", "Gold", "Cream"],
      fabric: "Silk",
      embroidery: "Zari & Kundan",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 7,
      name: "Nur-ul-Ain Collection",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 30999,
      description: "Elegant bridal dress with delicate embroidery and beautiful color combinations. A sophisticated choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002436_nur-ul-ain.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002437_nur-ul-ain.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002436_nur-ul-ain.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002437_nur-ul-ain.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002441_nur-ul-ain.jpeg"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Ivory", "Gold", "Cream"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 8,
      name: "Ruhi Bridal Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 33999,
      description: "Beautiful bridal dress with intricate embroidery and traditional design. A timeless classic.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002455_ruhi.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002456_ruhi.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002455_ruhi.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002456_ruhi.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002458_ruhi.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002459_ruhi.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002457_ruhi.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["White", "Gold", "Cream"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 9,
      name: "Enora Walima Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 37999,
      description: "Stunning bridal dress with unique embroidery and modern design. A perfect blend of elegance and style.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001869_enora.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001870_enora.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001869_enora.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001870_enora.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001871_enora.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001872_enora.jpeg"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Cream", "Gold", "Rose"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 10,
      name: "Afreen Bridal Collection",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 29999,
      description: "Elegant bridal dress with delicate embroidery and beautiful design. A perfect choice for the modern bride.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001657_afreen.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001658_afreen.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001657_afreen.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001658_afreen.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001659_afreen.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001662_afreen.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001660_afreen.jpeg"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["White", "Gold", "Pearl"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 11,
      name: "Ariana Walima Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 32999,
      description: "Beautiful bridal dress with intricate embroidery and modern design. A stunning choice for your walima.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001650_ariana.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001651_ariana.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001650_ariana.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001651_ariana.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001652_ariana.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001656_ariana.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001653_ariana.jpeg"
      ],
      badge: "Limited Edition",
      rating: 5,
      colors: ["Cream", "Gold", "Pink"],
      fabric: "Silk",
      embroidery: "Zari & Kundan",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 12,
      name: "Sherin Bridal Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 36999,
      description: "Stunning bridal dress with unique embroidery and traditional craftsmanship. A royal choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001350_sherin.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001351_sherin.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001350_sherin.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001351_sherin.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001352_sherin.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001353_sherin.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001354_sherin.jpeg"
      ],
      badge: "Premium",
      rating: 4,
      colors: ["Ivory", "Gold", "Cream"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 13,
      name: "Zainab Sultan Collection",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 42999,
      description: "Luxurious bridal ensemble with heavy embroidery and royal design. A masterpiece of craftsmanship.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000616_zainab-sultan.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000617_zainab-sultan.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000616_zainab-sultan.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000617_zainab-sultan.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000619_zainab-sultan.jpeg"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["White", "Gold", "Pearl"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 14,
      name: "Kohinoor Bridal",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 49999,
      description: "Royal bridal dress with intricate embroidery and traditional design. A true masterpiece for your walima.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000117_kohinoor.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000119_kohinoor.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000117_kohinoor.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000119_kohinoor.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000118_kohinoor.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Cream", "Gold", "Rose"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari & Pearl",
      occasion: "Walima Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 15,
      name: "Serpentine Flame Dress",
      brand: "Aisha Imran",
      category: "Walima Collection",
      price: 45999,
      description: "Stunning bridal dress with unique embroidery and modern design elements. A bold and beautiful choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000219_serpentine-flame.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000221_serpentine-flame.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000219_serpentine-flame.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000221_serpentine-flame.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000220_serpentine-flame.jpeg"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Gold", "Cream", "Ivory"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Walima Ceremony",
      sizes: ["Small", "Medium", "Large"]
    }
  ];

  // Format price in PKR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Open modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.frontImage);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Add to cart and redirect
  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.frontImage,
      category: product.category,
      quantity: 1,
      size: "Medium"
    };
    addToCart(cartItem);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      
      {/* ===== HERO SECTION WITH SLIDER ===== */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Hero Slider Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={heroSlides[currentSlide]}
                alt="Walima Collection"
                className="w-full h-full object-contain bg-gradient-to-br from-rose-900/80 via-black/80 to-pink-900/80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-rose-400' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-4 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <span className="text-rose-200 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg font-bold">
                ✨ Walima Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Elegant</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-300">
                Walima Collection
              </span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Discover our exquisite collection of elegant white, pearl and cream bridal ensembles,
              meticulously handcrafted for your walima celebration.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Premium Collection
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Royal Designs
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 15 Exclusive Dresses
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                ₨ 30,000 - 50,000 PKR
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="py-12 sm:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="text-rose-600 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3 font-bold">
              Walima Ensembles
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Each piece is a masterpiece of elegance and sophistication
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-300"
              >
                {/* Product Image */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-rose-50 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <Image
                    src={product.frontImage}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      product.badge === 'Premium' ? 'bg-rose-600 text-white' :
                      product.badge === 'Best Seller' ? 'bg-amber-500 text-white' :
                      product.badge === 'New Arrival' ? 'bg-emerald-500 text-white' :
                      product.badge === 'Limited Edition' ? 'bg-purple-500 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm shadow-md">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-700 ml-1 font-bold">{product.rating}</span>
                  </div>

                  {/* Brand */}
                  <div className="absolute bottom-3 left-3 z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-bold">{product.brand}</span>
                  </div>

                  {/* Color Dots */}
                  <div className="absolute bottom-3 right-3 z-10 flex gap-1">
                    {product.colors && product.colors.slice(0, 3).map((color, idx) => (
                      <span 
                        key={idx}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                        style={{ 
                          backgroundColor: color.toLowerCase() === 'gold' ? '#D4AF37' :
                                         color.toLowerCase() === 'pink' ? '#F472B6' :
                                         color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                         color.toLowerCase() === 'white' ? '#FFFFFF' :
                                         color.toLowerCase() === 'ivory' ? '#FFFFF0' :
                                         color.toLowerCase() === 'pearl' ? '#F5F5F5' :
                                         color.toLowerCase() === 'rose' ? '#E8A0BF' :
                                         '#CCCCCC'
                        }}
                        title={color}
                      />
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product);
                      }}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-bold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="px-4 py-2 bg-rose-600 text-white rounded-full text-sm font-bold hover:bg-rose-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 
                      className="font-serif text-base font-bold text-gray-800 line-clamp-1 cursor-pointer hover:text-rose-600 transition-colors"
                      onClick={() => openModal(product)}
                    >
                      {product.name}
                    </h3>
                    <span className="text-rose-600 font-bold text-sm">{formatPrice(product.price)}</span>
                  </div>
                  <p className="text-gray-500 text-xs font-medium mb-1">{product.brand}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
                  
                  {/* Size Badges */}
                  <div className="mt-2 flex gap-1">
                    {product.sizes && product.sizes.map((size, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] rounded font-bold">
                        {size}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">
                      {product.images && product.images.length > 1 ? `${product.images.length} views` : 'Front + Back'}
                    </span>
                    <button
                      onClick={() => openModal(product)}
                      className="text-rose-500 hover:text-rose-700 text-sm font-bold transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL - Full Screen Product View ===== */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8 relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 bg-white/80 rounded-full p-1"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Images Gallery */}
                  <div>
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-rose-50">
                      <Image
                        src={selectedImage || selectedProduct.frontImage}
                        alt={selectedProduct.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    
                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {selectedProduct.images && selectedProduct.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                            selectedImage === img ? 'border-rose-500' : 'border-rose-200 hover:border-rose-400'
                          }`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <Image
                            src={img}
                            alt={`${selectedProduct.name} view ${idx + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          {idx === 0 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Front
                            </span>
                          )}
                          {idx === 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Back
                            </span>
                          )}
                          {idx > 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/60 text-white text-[8px] text-center py-0.5 font-bold">
                              View {idx + 1}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-rose-600 text-sm font-bold uppercase tracking-wider">
                          {selectedProduct.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mt-1 font-bold">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 font-medium">{selectedProduct.brand}</p>
                      </div>
                      <span className="text-2xl font-bold text-rose-600">
                        {formatPrice(selectedProduct.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-gray-700 font-bold">{selectedProduct.rating}</span>
                      <span className="text-gray-400 text-sm font-medium">| {selectedProduct.badge}</span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 border-t border-rose-100 pt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mt-4 border-t border-rose-100 pt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400 font-medium">Fabric:</span>
                          <span className="text-gray-700 ml-1 font-bold">{selectedProduct.fabric}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 font-medium">Embroidery:</span>
                          <span className="text-gray-700 ml-1 font-bold">{selectedProduct.embroidery}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 font-medium">Occasion:</span>
                          <span className="text-gray-700 ml-1 font-bold">{selectedProduct.occasion}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 font-medium">Colors:</span>
                          <span className="text-gray-700 ml-1 font-bold">{selectedProduct.colors.join(', ')}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-400 font-medium">Available Sizes:</span>
                          <span className="text-gray-700 ml-1 font-bold">{selectedProduct.sizes.join(' | ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          handleAddToCart(selectedProduct);
                          closeModal();
                        }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300"
                      >
                         Add to Cart
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-rose-200 text-rose-600 rounded-full font-bold hover:bg-rose-50 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}