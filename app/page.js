"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // ===== HERO BACKGROUND IMAGE =====
  const heroBackground = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbH-D0CZ-LScM9CnvDr67eAzTWR-t2LGWIN4ble3_YvA&s=10";

  // ===== MOVING IMAGES (19 Images) =====
  const heroImages = [
    {
      id: 1,
      url: "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
      alt: "Noorsaba - Red Bridal",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/02/4a/a7/024aa78fb5251347123db876b51a8e73.jpg",
      alt: "Elegant Bridal Pose",
    },
    {
      id: 3,
      url: "https://uycollection.com/cdn/shop/files/DSF1129_4_1200x1800_94d4cb5b-f0f7-4bba-b33a-a8cde1e63794.webp?v=1767765162&width=500",
      alt: "Luxury Bridal Wear",
    },
    {
      id: 4,
      url: "https://www.aishaimranofficial.com/images/thumbs/0003311_bahaar-bano.jpeg",
      alt: "Bahaar Bano - Royal",
    },
    {
      id: 5,
      url: "https://www.aishaimranofficial.com/images/thumbs/0003324_zeenat.jpeg",
      alt: "Zeenat - Classic",
    },
    {
      id: 6,
      url: "https://www.aishaimranofficial.com/images/thumbs/0003317_zaib-ul-nissa.jpeg",
      alt: "Zaib Ul Nissa - White",
    },
    {
      id: 7,
      url: "https://www.aishaimranofficial.com/images/thumbs/0003304_arjumand.jpeg",
      alt: "Arjumand - Pink",
    },
    {
      id: 8,
      url: "https://www.aishaimranofficial.com/images/thumbs/0002560_roshane.jpeg",
      alt: "Roshane - Gold",
    },
    {
      id: 9,
      url: "https://www.aishaimranofficial.com/images/thumbs/0002455_ruhi.jpeg",
      alt: "Ruhi - Traditional",
    },
    {
      id: 10,
      url: "https://www.aishaimranofficial.com/images/thumbs/0001869_enora.jpeg",
      alt: "Enora - Modern",
    },
    {
      id: 11,
      url: "https://www.aishaimranofficial.com/images/thumbs/0001643_aalya.jpeg",
      alt: "Aalya - Pastel",
    },
    {
      id: 12,
      url: "https://www.aishaimranofficial.com/images/thumbs/0001355_azmeh.jpeg",
      alt: "Azmeh - Heavy Embroidery",
    },
    {
      id: 13,
      url: "https://www.aishaimranofficial.com/images/thumbs/0000620_aisha-sultan.jpeg",
      alt: "Aisha Sultan - Vintage",
    },
    {
      id: 14,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CfkWCIVRIACxmbFGIhqneWHY8VjfZNsp4TLs7AFIYxytH9WtBPiEtiUI&s=10",
      alt: "Bridal Closeup",
    },
    {
      id: 15,
      url: "https://www.nameerabyfarooq.com/cdn/shop/files/PakistaniBridalDressinGreenCholiLehengaStyle_large.jpg?v=1740672710",
      alt: "Green Mehndi Dress",
    },
    {
      id: 16,
      url: "https://i.pinimg.com/736x/c2/de/30/c2de306befb4d8ef098fa102f2389d40.jpg",
      alt: "Mayo Collection",
    },
    {
      id: 17,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGz_lNQ3o0P0IT3RE_g2kBggKrTShZGjPw-NZhGUGuw8rQz86HWTtI7U&s",
      alt: "Bridal Collection",
    },
    {
      id: 18,
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-e894f780399d4baabfd42ea55f3be6cf_f17fbab4-d5eb-4386-ad4f-85a9d8e3b1a0.webp?v=1762155356&width=300",
      alt: "Luxury Bag",
    },
    {
      id: 19,
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-3bc8489c1bc24156baa52197018245f4_5334cbaf-07a8-41e9-8eb6-dd6137bd2d58.jpg?v=1756273583&width=150&format=webp",
      alt: "Bridal Accessory",
    },
  ];

  // ===== CATEGORIES =====
  const categories = [
    {
      id: "barat",
      name: "Barat",
      icon: "",
      description: "Royal Red & Gold",
      color: "from-red-900/70 via-red-800/50 to-red-600/30",
      link: "/barat",
      image: "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
    },
    {
      id: "walima",
      name: "Walima",
      icon: "",
      description: "Elegant Pearl & Gray",
      color: "from-gray-700/70 via-gray-600/50 to-gray-400/30",
      link: "/walima",
      image: "https://cdn.shopify.com/s/files/1/2337/7003/products/4cfde567fc57c43be8d871d99bce4c9e.jpg?v=1701258332&width=150&format=webp",
    },
    {
      id: "mehndi",
      name: "Mehndi",
      icon: "",
      description: "Vibrant Green & Pink",
      color: "from-emerald-800/70 via-emerald-700/50 to-emerald-500/30",
      link: "/mehndi",
      image: "https://www.nameerabyfarooq.com/cdn/shop/products/DesignerIndianWeddingWearMehndiDressesforBride_620x.jpg?v=1655227942",
    },
    {
      id: "mayo",
      name: "Mayo",
      icon: "",
      description: "Pastel Peach & Blush",
      color: "from-amber-500/70 via-amber-400/50 to-pink-300/30",
      link: "/mayo",
      image: "https://i.pinimg.com/736x/c2/de/30/c2de306befb4d8ef098fa102f2389d40.jpg",
    },
  ];

  // ===== ACCESSORIES =====
  const accessories = [
    {
      id: "jewelry",
      name: "Jewelry",
      icon: "",
      description: "Bridal Sets",
      link: "/jewelry",
    },
    {
      id: "bags",
      name: "Bags & Pouches",
      icon: "",
      description: "Luxury Clutches",
      link: "/bags",
    },
    {
      id: "shoes",
      name: "Shoes",
      icon: "",
      description: "Khussas & Heels",
      link: "/shoes",
    },
  ];

  // ===== SLIDER STATE =====
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      {/* ============================================================ */}
      {/* HERO SECTION - Responsive background image via next/image */}
      {/* ============================================================ */}
      <section className="relative h-[100vh] min-h-[560px] sm:min-h-[640px] w-full overflow-hidden">

        {/* Full Background Image - now a real next/image for proper responsive srcset */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Bridal showcase background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top sm:object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65"></div>
        </div>

        {/* Brand Overlay - Fixed Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <span className="text-[#E8C77A] font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg">
                Luxury Bridal 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 drop-shadow-2xl">
              <span className="block">Timeless</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-[#E8C77A] to-[#C9A227]">
                Bridal Elegance
              </span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-light mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Discover handcrafted luxury ensembles, jewelry, and accessories
              for your special day.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/barat"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#C9A227] to-[#8B6914] text-white text-sm sm:text-base font-medium rounded-full hover:shadow-[0_20px_60px_-15px_rgba(201,162,39,0.45)] transition-all duration-300 transform hover:scale-105"
              >
                Explore Collections
              </Link>
              <Link
                href="/jewelry"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/40 text-white text-sm sm:text-base font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Accessories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LATEST COLLECTION + MOVING IMAGES SECTION - light, solid bg */}
      {/* ============================================================ */}
      <section className="py-16 px-4 md:px-8 bg-[#FFF8F1]">
        <div className="container mx-auto">
          {/* Latest Collection Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <span className="text-rose-600 font-serif text-sm tracking-[0.3em] uppercase">
              Trending Now
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3">
              Latest Collection
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Discover our newest arrivals and latest bridal trends
            </p>
          </motion.div>

          {/* Moving Images Slider - bigger, with a rich dark backdrop for clarity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <div className="relative h-[60vh] sm:h-[72vh] md:h-[82vh] lg:h-[88vh] w-full max-w-6xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-[#2B0A14]/90 via-[#3B0F1F]/85 to-[#1A0610]/90 shadow-2xl">
              <AnimatePresence mode="wait">
                {heroImages.map((image, index) => (
                  index === currentIndex && (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 1152px"
                          className="object-contain"
                          priority={index === 0}
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.slice(0, 7).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-10 h-2.5 bg-[#D4AF37]"
                        : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CATEGORIES SECTION - soft pink to cream, solid */}
      {/* ============================================================ */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-[#FFEAF0] to-[#FFF3E9]">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-serif text-sm tracking-[0.3em] uppercase">
              Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-3 mb-4">
              Our Bridal Collections
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Each collection is carefully curated for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={category.link}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block"
                >
                  <div className="relative h-64 sm:h-72 md:h-80 w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-60 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl">{category.icon}</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm font-light">
                      {category.description}
                    </p>
                    <div className="mt-3 inline-block px-4 py-1.5 border border-white/30 rounded-full text-xs tracking-wider uppercase backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      Shop Now →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ACCESSORIES SECTION - clean light */}
      {/* ============================================================ */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white via-[#FFF6F2] to-[#FFEAF0]">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#B8860B] font-serif text-sm tracking-[0.3em] uppercase">
              Accessories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-3 mb-4">
              Complete Your Look
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {accessories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100/70 block"
                >
                  <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <div className="mt-4 w-12 h-0.5 bg-rose-400 mx-auto group-hover:w-24 transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CUSTOM DESIGN REQUEST SECTION - dark backdrop, light floating card */}
      {/* ============================================================ */}
      <section className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-[#2B0712] via-[#4A0E1F] to-[#6B1228] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-rose-500/10 blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-pink-200/50"
          >
            <div className="text-center mb-8">
              <span className="text-rose-600 font-serif text-sm tracking-[0.3em] uppercase">
                Custom Design
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-800 mt-2 mb-4">
                Design Your Dream Dress
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Tell us your vision and we'll create a custom bridal ensemble
                tailored just for you.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all">
                  <option value="">Select event</option>
                  <option value="barat">Barat</option>
                  <option value="walima">Walima</option>
                  <option value="mehndi">Mehndi</option>
                  <option value="mayo">Mayo</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all">
                  <option value="">Select budget</option>
                  <option value="30k-50k">30,000 - 50,000 PKR</option>
                  <option value="50k-80k">50,000 - 80,000 PKR</option>
                  <option value="80k-100k">80,000 - 100,000 PKR</option>
                  <option value="100k+">100,000+ PKR</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Design Requirements *
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your dream dress - color, style, embroidery, fabric, and any special requests..."
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full py-3 bg-gradient-to-r from-rose-600 to-rose-800 text-white rounded-full font-medium hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 transform hover:scale-105">
                  Submit Design Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS SECTION - dark */}
      {/* ============================================================ */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-rose-950 via-red-800 to-rose-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-serif text-[#D4AF37]">100+</div>
              <p className="font-light tracking-wide text-white/80">Bridal Outfits</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 border-x border-white/10 px-8"
            >
              <div className="text-4xl md:text-5xl font-serif text-[#D4AF37]">50+</div>
              <p className="font-light tracking-wide text-white/80">Jewelry Sets</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-serif text-[#D4AF37]">30+</div>
              <p className="font-light tracking-wide text-white/80">Years of Excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA SECTION - light close */}
      {/* ============================================================ */}
      <section className="py-16 px-4 md:px-8 bg-[#FFF7F2]">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4"
          >
            Ready to Find Your Perfect Look?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Visit our showroom or book a consultation to explore our exclusive
            bridal collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/checkout"
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-800 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
            <Link
              href="/feedback"
              className="px-8 py-4 border-2 border-rose-400 text-rose-600 font-medium rounded-full hover:bg-rose-50 transition-all duration-300"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}