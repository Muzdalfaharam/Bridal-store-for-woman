"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function MehndiPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== HERO SLIDER IMAGES (15 images from mehndi products) =====
  const heroSlides = [
    "https://www.aishaimranofficial.com/images/thumbs/0000287_roma.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0000114_moor-mahal.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0000205_vibrant-charm.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0001355_azmeh.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0001664_afroza.jpeg",
    "https://feebee.pk/wp-content/uploads/2025/08/1_8910fc1a-8ab5-4922-b23d-321748b972a4_720x.jpg",
    "https://www.nameerabyfarooq.com/cdn/shop/products/BridalMehndiDress_23a1bfcd-55b0-44c4-ab51-f678c6cafa4f_1080x.jpg?v=1633102149",
    "https://i.pinimg.com/1200x/e0/c0/e8/e0c0e8a68817b404a6742562e61ddbab.jpg",
    "https://pehnawastore.pk/cdn/shop/files/77_e9dafe00-b115-47a1-bcb5-38a066aa301c.jpg?v=1763046196&width=600",
    "https://pehnawastore.pk/cdn/shop/files/0025456_bita-magenta-kurta.jpg?v=1762792105&width=600",
    "https://pehnawastore.pk/cdn/shop/files/DSC00354.jpg?v=1765812396&width=600",
    "https://pehnawastore.pk/cdn/shop/files/527298451_18391435048190405_5314909977898442976_na.png?v=1758639359&width=600",
    "https://pehnawastore.pk/cdn/shop/files/D_607_101.png?v=1758123206&width=600",
    "https://pehnawastore.pk/cdn/shop/files/0003243_nazneen_b193fcb2-0ace-47e7-9501-b262abc8f6b2.png?v=1707747718&width=600",
    "https://www.amnaajmal.com/cdn/shop/files/am2_10b363d7-ee36-4aa1-ad32-76a5c4167fc3_1200x.jpg?v=1692366319",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== 17 MEHNDI DRESSES =====
  const products = [
    {
      id: 1,
      name: "Roma Mehndi Dress",
      brand: "Aisha Imran",
      category: "Mehndi Collection",
      price: 18999,
      description: "Vibrant colorful mehndi dress with beautiful traditional embroidery and intricate zari work. Perfect for your mehndi ceremony with stunning color combinations.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000287_roma.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000286_roma.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000287_roma.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000286_roma.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000288_roma.jpeg"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pink", "Green", "Gold"],
      fabric: "Premium Chiffon",
      embroidery: "Heavy Zari & Resham",
      occasion: "Mehndi Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 2,
      name: "Moor Mahal Collection",
      brand: "Aisha Imran",
      category: "Mehndi Collection",
      price: 21999,
      description: "Stunning mehndi dress with vibrant red and gold tones featuring intricate traditional embroidery and royal craftsmanship.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000114_moor-mahal.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000116_moor-mahal.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000114_moor-mahal.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000116_moor-mahal.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000115_moor-mahal.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Green"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Gold Zari",
      occasion: "Mehndi & Sangeet",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 3,
      name: "Vibrant Charm Dress",
      brand: "Aisha Imran",
      category: "Mehndi Collection",
      price: 16999,
      description: "Beautiful colorful dress with stunning pink and orange embroidery and modern design elements for the trendy bride.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0000205_vibrant-charm.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0000206_vibrant-charm.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0000205_vibrant-charm.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000206_vibrant-charm.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0000207_vibrant-charm.jpeg"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pink", "Orange", "Gold"],
      fabric: "Georgette",
      embroidery: "Resham & Sequins",
      occasion: "Mehndi Function",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 4,
      name: "Azmeh Bridal Dress",
      brand: "Aisha Imran",
      category: "Mehndi Collection",
      price: 25999,
      description: "Luxurious mehndi dress with heavy traditional embroidery and exquisite craftsmanship. A perfect choice for the royal bride.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001355_azmeh.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001356_azmeh.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001355_azmeh.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001356_azmeh.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001357_azmeh.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001358_azmeh.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001359_azmeh.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Green"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Main Mehndi Event",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 5,
      name: "Afroza Mehndi Dress",
      brand: "Aisha Imran",
      category: "Mehndi Collection",
      price: 17999,
      description: "Elegant mehndi dress with delicate pink and green embroidery and beautiful color combinations for a fresh look.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0001664_afroza.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0001665_afroza.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0001664_afroza.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001665_afroza.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0001666_afroza.jpeg"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Pink", "Green", "Gold"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mehndi & Dholki",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 6,
      name: "Feebee Pink Dress",
      brand: "Feebee",
      category: "Mehndi Collection",
      price: 16000,
      description: "Beautiful pink mehndi dress with stunning embroidery and modern design. Lightweight and comfortable for all-day wear.",
      frontImage: "https://feebee.pk/wp-content/uploads/2025/08/1_8910fc1a-8ab5-4922-b23d-321748b972a4_720x.jpg",
      backImage: "https://feebee.pk/wp-content/uploads/2025/08/1_8910fc1a-8ab5-4922-b23d-321748b972a4_720x.jpg",
      images: [
        "https://feebee.pk/wp-content/uploads/2025/08/1_8910fc1a-8ab5-4922-b23d-321748b972a4_720x.jpg"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Pink", "Gold"],
      fabric: "Lawn",
      embroidery: "Embellished",
      occasion: "Mehndi Function",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 7,
      name: "Nameera Mehndi Dress",
      brand: "Nameera By Farooq",
      category: "Mehndi Collection",
      price: 23999,
      description: "Stunning mehndi dress with unique green and pink embroidery and traditional craftsmanship from renowned designer.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/products/BridalMehndiDress_23a1bfcd-55b0-44c4-ab51-f678c6cafa4f_1080x.jpg?v=1633102149",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/products/PakistaniMehndiDresses_a4f060ba-f6e7-4b08-a47b-b2050c1b4554_1200x630.jpg?v=1633102148",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/products/BridalMehndiDress_23a1bfcd-55b0-44c4-ab51-f678c6cafa4f_1080x.jpg?v=1633102149",
        "https://www.nameerabyfarooq.com/cdn/shop/products/PakistaniMehndiDresses_a4f060ba-f6e7-4b08-a47b-b2050c1b4554_1200x630.jpg?v=1633102148",
        "https://i.pinimg.com/236x/e1/20/55/e1205553b78e20a1548d9f92c72bac7c.jpg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Green", "Pink", "Gold"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Mehndi & Sangeet",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 8,
      name: "Pininterest Mehndi Dress",
      brand: "Pininterest Collection",
      category: "Mehndi Collection",
      price: 19999,
      description: "Beautiful mehndi dress with vibrant green and gold embroidery and stunning design elements.",
      frontImage: "https://i.pinimg.com/1200x/e0/c0/e8/e0c0e8a68817b404a6742562e61ddbab.jpg",
      backImage: "https://i.pinimg.com/736x/4e/7b/91/4e7b918fbede1552e1b3082f0ac3dc6c.jpg",
      images: [
        "https://i.pinimg.com/1200x/e0/c0/e8/e0c0e8a68817b404a6742562e61ddbab.jpg",
        "https://i.pinimg.com/736x/4e/7b/91/4e7b918fbede1552e1b3082f0ac3dc6c.jpg"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Green", "Gold", "Pink"],
      fabric: "Georgette",
      embroidery: "Resham & Zari",
      occasion: "Mehndi Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 9,
      name: "Pehnawa Green Dress",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 18999,
      description: "Elegant green mehndi dress with beautiful embroidery and modern design. Perfect for the contemporary bride.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/77_e9dafe00-b115-47a1-bcb5-38a066aa301c.jpg?v=1763046196&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/76_d086c136-0d4d-4ece-abc3-3f9f7632623d.jpg?v=1763046197&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/77_e9dafe00-b115-47a1-bcb5-38a066aa301c.jpg?v=1763046196&width=600",
        "https://pehnawastore.pk/cdn/shop/files/76_d086c136-0d4d-4ece-abc3-3f9f7632623d.jpg?v=1763046197&width=600",
        "https://pehnawastore.pk/cdn/shop/files/80_c5e94552-76c6-4995-a697-fc5df89b8934.jpg?v=1763046196&width=600",
        "https://pehnawastore.pk/cdn/shop/files/81_c2da37ee-7372-49cd-b5dc-e75745d273f5.jpg?v=1763046196&width=600",
        "https://pehnawastore.pk/cdn/shop/files/78_4013d087-848c-4cbd-b8b7-3f01010208b5.jpg?v=1763046196&width=600"
      ],
      badge: "New Arrival",
      rating: 5,
      colors: ["Green", "Gold", "Pink"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mehndi Function",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 10,
      name: "Bita Magenta Kurta",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 16999,
      description: "Stunning magenta mehndi dress with beautiful embroidery and modern design. A bold and vibrant choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/0025456_bita-magenta-kurta.jpg?v=1762792105&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/0025460_bita-magenta-kurta.jpg?v=1762792105&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/0025456_bita-magenta-kurta.jpg?v=1762792105&width=600",
        "https://pehnawastore.pk/cdn/shop/files/0025460_bita-magenta-kurta.jpg?v=1762792105&width=600",
        "https://pehnawastore.pk/cdn/shop/files/0025458_bita-magenta-kurta.jpg?v=1762792105&width=600"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Magenta", "Gold"],
      fabric: "Cotton Silk",
      embroidery: "Embellished",
      occasion: "Mehndi & Dholki",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 11,
      name: "Pehnawa Yellow Dress",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 17999,
      description: "Beautiful yellow mehndi dress with stunning embroidery and modern design. Bright and cheerful for your special day.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/DSC00354.jpg?v=1765812396&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/DSC00361.jpg?v=1765812397&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/DSC00354.jpg?v=1765812396&width=600",
        "https://pehnawastore.pk/cdn/shop/files/DSC00361.jpg?v=1765812397&width=600",
        "https://pehnawastore.pk/cdn/shop/files/DSC00411.jpg?v=1765812397&width=600"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Yellow", "Gold"],
      fabric: "Chiffon",
      embroidery: "Resham & Zari",
      occasion: "Mehndi Function",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 12,
      name: "Pehnawa Pink Dress",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 20999,
      description: "Elegant pink mehndi dress with beautiful embroidery and stunning design. A perfect blend of tradition and modernity.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/527298451_18391435048190405_5314909977898442976_na.png?v=1758639359&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/IMG_4173_be1e22c7-3c97-4846-8230-be97943c695a.webp?v=1758639132&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/527298451_18391435048190405_5314909977898442976_na.png?v=1758639359&width=600",
        "https://pehnawastore.pk/cdn/shop/files/IMG_4173_be1e22c7-3c97-4846-8230-be97943c695a.webp?v=1758639132&width=600",
        "https://pehnawastore.pk/cdn/shop/files/IMG_4169_b087415e-cb95-4fbf-b626-3e3f03b83bee.webp?v=1758639132&width=600",
        "https://pehnawastore.pk/cdn/shop/files/IMG_4175_a6ebf04d-295d-42f2-a938-4dd6ee7079db.webp?v=1758639132&width=600",
        "https://pehnawastore.pk/cdn/shop/files/5x7-a_42103715-52ce-4110-9f5c-30fb3806dd5ca.png?v=1758639132&width=600"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Pink", "Gold", "Green"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari & Sequins",
      occasion: "Main Mehndi Event",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 13,
      name: "Pehnawa Orange Dress",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 22999,
      description: "Stunning orange mehndi dress with beautiful embroidery and traditional design. A vibrant choice for the bold bride.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/D_607_101.png?v=1758123206&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/D_607_9.png?v=1758123206&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/D_607_101.png?v=1758123206&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_9.png?v=1758123206&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_8.png?v=1758123207&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_5.png?v=1758123206&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_3.png?v=1758123206&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_6.png?v=1758123206&width=600",
        "https://pehnawastore.pk/cdn/shop/files/D_607_7.png?v=1758123206&width=600"
      ],
      badge: "New Arrival",
      rating: 5,
      colors: ["Orange", "Gold", "Pink"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Mehndi & Sangeet",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 14,
      name: "Nazneen Mehndi Dress",
      brand: "Pehnawa Store",
      category: "Mehndi Collection",
      price: 18999,
      description: "Beautiful mehndi dress with vibrant colors and stunning embroidery. Perfect for the modern bride.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/0003243_nazneen_b193fcb2-0ace-47e7-9501-b262abc8f6b2.png?v=1707747718&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/0003166_nazneen_0596a5b8-d7c5-4658-b33d-1bb5505a67ff.jpg?v=1707747734&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/0003243_nazneen_b193fcb2-0ace-47e7-9501-b262abc8f6b2.png?v=1707747718&width=600",
        "https://pehnawastore.pk/cdn/shop/files/0003166_nazneen_0596a5b8-d7c5-4658-b33d-1bb5505a67ff.jpg?v=1707747734&width=600",
        "https://pehnawastore.pk/cdn/shop/files/0003163_nazneen_3c77cb18-3037-4af7-a28e-6f7d2e84cfc8.jpg?v=1707747734&width=600",
        "https://pehnawastore.pk/cdn/shop/files/0003169_nazneen_59731961-1318-46e0-a90e-3ef7c4a1c5b2.jpg?v=1707747734&width=600"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Pink", "Green", "Gold"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mehndi Function",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 15,
      name: "Amna Ajmal Dress",
      brand: "Amna Ajmal",
      category: "Mehndi Collection",
      price: 26999,
      description: "Luxurious mehndi dress with heavy embroidery and traditional craftsmanship from renowned designer Amna Ajmal.",
      frontImage: "https://www.amnaajmal.com/cdn/shop/files/am2_10b363d7-ee36-4aa1-ad32-76a5c4167fc3_1200x.jpg?v=1692366319",
      backImage: "https://www.amnaajmal.com/cdn/shop/files/AM1_e2005322-7fae-4cf6-80f8-876453fb0bc6_1200x.jpg?v=1692366319",
      images: [
        "https://www.amnaajmal.com/cdn/shop/files/am2_10b363d7-ee36-4aa1-ad32-76a5c4167fc3_1200x.jpg?v=1692366319",
        "https://www.amnaajmal.com/cdn/shop/files/AM1_e2005322-7fae-4cf6-80f8-876453fb0bc6_1200x.jpg?v=1692366319",
        "https://www.amnaajmal.com/cdn/shop/files/am3_f8b67ab7-efcf-4fb4-a569-f5769318d0dc_1200x.jpg?v=1692366320"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Green", "Gold", "Pink"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Main Mehndi Event",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 16,
      name: "Aghanoor Bridal Dress",
      brand: "Aghanoor Bridal",
      category: "Mehndi Collection",
      price: 23999,
      description: "Stunning mehndi dress with unique embroidery and modern design. A perfect choice for the contemporary bride.",
      frontImage: "https://aghanoorbridal.com/cdn/shop/products/WhatsAppImage2022-09-14at3.12.50AM_2_1200x.jpg?v=1755263411",
      backImage: "https://aghanoorbridal.com/cdn/shop/products/WhatsAppImage2022-09-14at3.12.52AM_1024x1024.jpg?v=1755263412",
      images: [
        "https://aghanoorbridal.com/cdn/shop/products/WhatsAppImage2022-09-14at3.12.50AM_2_1200x.jpg?v=1755263411",
        "https://aghanoorbridal.com/cdn/shop/products/WhatsAppImage2022-09-14at3.12.52AM_1024x1024.jpg?v=1755263412"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Pink", "Gold", "Green"],
      fabric: "Georgette",
      embroidery: "Resham & Zari",
      occasion: "Mehndi & Sangeet",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 17,
      name: "Yellow Mehndi Dress",
      brand: "Shadi Dress",
      category: "Mehndi Collection",
      price: 16999,
      description: "Beautiful yellow mehndi dress with stunning embroidery and modern design. Bright and cheerful for your special day.",
      frontImage: "https://kasheesboutique.pk/cdn/shop/files/Vol11_6b386a5e-5006-4cdd-bfe1-f40aaa3a673d.jpg?v=1742496924",
      backImage: "https://www.shadidress.us/wp-content/uploads/2025/01/Yellow-Mehndi-Dress-for-Bride-1-1.webp",
      images: [
        "https://www.shadidress.us/wp-content/uploads/2025/01/Yellow-Mehndi-Dress-for-Bride.webp",
        "https://www.shadidress.us/wp-content/uploads/2025/01/Yellow-Mehndi-Dress-for-Bride-1-1.webp",
        "https://www.shadidress.us/wp-content/uploads/2025/01/Yellow-Mehndi-Dress-for-Bride-4.webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Yellow", "Gold"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mehndi Function",
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
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-yellow-50">
      
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
                alt="Mehndi Collection"
                className="w-full h-full object-contain bg-gradient-to-br from-amber-900/80 via-black/80 to-pink-900/80"
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
                  ? 'w-8 bg-amber-400' 
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
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              <span className="text-amber-200 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg font-bold">
                 Mehndi Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Vibrant</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-pink-300">
                Mehndi Collection
              </span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Discover our vibrant collection of colorful mehndi ensembles,
              perfect for your mehndi celebration.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Mehndi Special
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Premium Collection
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 17 Exclusive Dresses
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                ₨ 16,000 - 29,000 PKR
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
            <span className="text-amber-600 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3 font-bold">
              Mehndi Ensembles
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Each piece is a celebration of color and tradition
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300"
              >
                {/* Product Image */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-amber-50 cursor-pointer"
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
                      product.badge === 'Premium' ? 'bg-amber-600 text-white' :
                      product.badge === 'Best Seller' ? 'bg-green-600 text-white' :
                      product.badge === 'New Arrival' ? 'bg-pink-600 text-white' :
                      product.badge === 'Limited Edition' ? 'bg-purple-600 text-white' :
                      'bg-gray-700 text-white'
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
                                         color.toLowerCase() === 'green' ? '#4CAF50' :
                                         color.toLowerCase() === 'yellow' ? '#FFD700' :
                                         color.toLowerCase() === 'orange' ? '#FF8C00' :
                                         color.toLowerCase() === 'magenta' ? '#FF00FF' :
                                         color.toLowerCase() === 'red' ? '#DC2626' :
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
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-bold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-bold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 
                      className="font-serif text-base font-bold text-gray-800 line-clamp-1 cursor-pointer hover:text-amber-600 transition-colors"
                      onClick={() => openModal(product)}
                    >
                      {product.name}
                    </h3>
                    <span className="text-amber-600 font-bold text-sm">{formatPrice(product.price)}</span>
                  </div>
                  <p className="text-gray-500 text-xs font-medium mb-1">{product.brand}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
                  
                  {/* Size Badges */}
                  <div className="mt-2 flex gap-1">
                    {product.sizes && product.sizes.map((size, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] rounded font-bold">
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
                      className="text-amber-500 hover:text-amber-700 text-sm font-bold transition-colors"
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
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-amber-50">
                      <Image
                        src={selectedImage || selectedProduct.frontImage}
                        alt={selectedProduct.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    
                    {/* Thumbnails - Clickable */}
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {selectedProduct.images && selectedProduct.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                            selectedImage === img ? 'border-amber-500' : 'border-amber-200 hover:border-amber-400'
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
                            <span className="absolute bottom-0 left-0 right-0 bg-amber-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Front
                            </span>
                          )}
                          {idx === 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-amber-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Back
                            </span>
                          )}
                          {idx > 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-amber-600/60 text-white text-[8px] text-center py-0.5 font-bold">
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
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">
                          {selectedProduct.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mt-1 font-bold">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 font-medium">{selectedProduct.brand}</p>
                      </div>
                      <span className="text-2xl font-bold text-amber-600">
                        {formatPrice(selectedProduct.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-gray-700 font-bold">{selectedProduct.rating}</span>
                      <span className="text-gray-400 text-sm font-medium">| {selectedProduct.badge}</span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 border-t border-amber-100 pt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mt-4 border-t border-amber-100 pt-4">
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
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300"
                      >
                        🛒 Add to Cart
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-amber-200 text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-all duration-300"
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