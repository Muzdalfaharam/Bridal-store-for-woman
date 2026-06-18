"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function ShoesPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // ===== HERO IMAGES (10 Images for Moving Slider) =====
  const heroImages = [
    "https://unze.com.pk/cdn/shop/files/l43597_7578932f-bdde-4894-b62f-fd40a4ffcef3.jpg?v=1778214340",
    "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
    "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
    "https://insignia.com.pk/cdn/shop/files/1_f478929e-e318-4bef-9459-58da9f792ecd.jpg?v=1780665368",
    "https://insignia.com.pk/cdn/shop/files/1_12d9ed82-4f59-440f-98b3-7b872a41b5b8.jpg?v=1780669428",
    "https://insignia.com.pk/cdn/shop/files/1_0df73b9b-3d13-4f32-ae81-1af40897d3b5.jpg?v=1780665559",
    "https://insignia.com.pk/cdn/shop/files/1_55b3663a-aab4-40ae-98b6-5e0bf0e7057f.jpg?v=1780665600",
    "https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357",
    "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
    "https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413"
  ];

  // ============================================================
  // SHOES PRODUCTS (55 Items - All Working Images)
  // ============================================================
  const products = [
    // SECTION 1: MEHNDI & MAYO SHOES (28 Items)
    {
      id: 1,
      name: "Golden Fancy Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 5999,
      description: "Beautiful golden fancy khussa with intricate embroidery and traditional design. Perfect for mehndi ceremonies.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43597_7578932f-bdde-4894-b62f-fd40a4ffcef3.jpg?v=1778214340",
      backImage: "https://unze.com.pk/cdn/shop/files/l43597_7578932f-bdde-4894-b62f-fd40a4ffcef3.jpg?v=1778214340",
      images: ["https://unze.com.pk/cdn/shop/files/l43597_7578932f-bdde-4894-b62f-fd40a4ffcef3.jpg?v=1778214340"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 2,
      name: "Red Embroidered Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 6499,
      description: "Elegant red embroidered khussa with beautiful design and premium quality. Perfect for mayo ceremonies.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      backImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      images: ["https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933"],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 3,
      name: "Golden Fancy Khussa - Ladies",
      brand: "Unze",
      category: "Mehndi",
      price: 5499,
      description: "Stunning golden fancy khussa for ladies with beautiful embroidery and traditional design.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      backImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      images: ["https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Gold", "Cream"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 4,
      name: "Pink Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5899,
      description: "Beautiful pink fancy khussa with stunning design and premium quality for your mayo ceremony.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      backImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      images: ["https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pink", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 5,
      name: "Green Embroidered Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 6299,
      description: "Elegant green embroidered khussa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357",
      backImage: "https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357",
      images: ["https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357"],
      badge: "Premium",
      rating: 5,
      colors: ["Green", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 6,
      name: "Yellow Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5699,
      description: "Beautiful yellow fancy khussa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      backImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      images: ["https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Yellow", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 7,
      name: "Blue Fancy Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 5999,
      description: "Elegant blue fancy khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413",
      backImage: "https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413",
      images: ["https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Blue", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 8,
      name: "Orange Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5799,
      description: "Beautiful orange fancy khussa with stunning design and premium quality for your mayo ceremony.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282",
      backImage: "https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282",
      images: ["https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282"],
      badge: "Premium",
      rating: 5,
      colors: ["Orange", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 9,
      name: "Purple Embroidered Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 6399,
      description: "Elegant purple embroidered khussa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085",
      backImage: "https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085",
      images: ["https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Purple", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 10,
      name: "Peach Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5599,
      description: "Beautiful peach fancy khussa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      backImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      images: ["https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Peach", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 11,
      name: "Purple Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 6199,
      description: "Elegant purple khussa with beautiful embroidery and traditional design.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085",
      backImage: "https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085",
      images: ["https://unze.com.pk/cdn/shop/files/l43163_675be1b9-1484-4eab-9e08-9a6400c51606.jpg?v=1772608085"],
      badge: "Premium",
      rating: 5,
      colors: ["Purple", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 12,
      name: "Mint Green Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5899,
      description: "Beautiful mint green khussa with stunning design and premium quality for your mayo ceremony.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42889_8312ff17-38d0-468f-ba85-3a2751f291f6.jpg?v=1770371505",
      backImage: "https://unze.com.pk/cdn/shop/files/l42889_8312ff17-38d0-468f-ba85-3a2751f291f6.jpg?v=1770371505",
      images: ["https://unze.com.pk/cdn/shop/files/l42889_8312ff17-38d0-468f-ba85-3a2751f291f6.jpg?v=1770371505"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Mint Green", "Silver"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 13,
      name: "Cream Embroidered Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 6499,
      description: "Elegant cream embroidered khussa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335",
      backImage: "https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335",
      images: ["https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335"],
      badge: "Premium",
      rating: 5,
      colors: ["Cream", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 14,
      name: "Rose Gold Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 6699,
      description: "Beautiful rose gold khussa with stunning design and premium quality for your mayo ceremony.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42413_f522e0d0-43a5-4cf9-a60a-b7e992b2c691.jpg?v=1770370917",
      backImage: "https://unze.com.pk/cdn/shop/files/l42413_f522e0d0-43a5-4cf9-a60a-b7e992b2c691.jpg?v=1770370917",
      images: ["https://unze.com.pk/cdn/shop/files/l42413_f522e0d0-43a5-4cf9-a60a-b7e992b2c691.jpg?v=1770370917"],
      badge: "New Arrival",
      rating: 5,
      colors: ["Rose Gold", "Cream"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 15,
      name: "Navy Blue Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 5999,
      description: "Elegant navy blue khussa with beautiful embroidery and traditional design.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      backImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      images: ["https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Navy Blue", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 16,
      name: "Mustard Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5299,
      description: "Beautiful mustard fancy khussa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      backImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      images: ["https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Mustard", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 17,
      name: "Mustard Women Khusa",
      brand: "Unze",
      category: "Mehndi",
      price: 5199,
      description: "Elegant mustard women khusa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      backImage: "https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933",
      images: ["https://unze.com.pk/cdn/shop/files/l43596_4de9008d-cb43-415e-ba23-6991b464ba40.jpg?v=1778213933"],
      badge: "Premium",
      rating: 4,
      colors: ["Mustard", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 18,
      name: "Fawn Fancy Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5499,
      description: "Beautiful fawn fancy khussa with stunning design and premium quality for your mayo ceremony.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      backImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      images: ["https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Fawn", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 19,
      name: "Pista Green Formal Khusa",
      brand: "Unze",
      category: "Mehndi",
      price: 5899,
      description: "Elegant pista green formal khusa with beautiful embroidery and traditional design.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357",
      backImage: "https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357",
      images: ["https://unze.com.pk/cdn/shop/files/l42878_06f3cafd-6f3d-4d7a-a403-08f053075766.jpg?v=1772608357"],
      badge: "Premium",
      rating: 5,
      colors: ["Pista Green", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 20,
      name: "Yellow Ethnic Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5399,
      description: "Beautiful yellow ethnic khussa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      backImage: "https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154",
      images: ["https://unze.com.pk/cdn/shop/files/l42393_f8e45aaf-c8f9-4211-97a0-9662b4eabf65.jpg?v=1773052154"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Yellow", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 21,
      name: "Fawn Ethnic Women Khusa",
      brand: "Unze",
      category: "Mehndi",
      price: 5599,
      description: "Elegant fawn ethnic women khusa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      backImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      images: ["https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Fawn", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 22,
      name: "Rust Fancy Khusa",
      brand: "Unze",
      category: "Mayo",
      price: 5799,
      description: "Beautiful rust fancy khusa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335",
      backImage: "https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335",
      images: ["https://unze.com.pk/cdn/shop/files/l42913_6d4a8f65-0168-4052-ace4-b944ec91a3cd.jpg?v=1771422335"],
      badge: "Premium",
      rating: 5,
      colors: ["Rust", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 23,
      name: "Red Ethnic Khusa",
      brand: "Unze",
      category: "Mehndi",
      price: 5999,
      description: "Elegant red ethnic khusa with beautiful embroidery and traditional design.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      backImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      images: ["https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 24,
      name: "Black Formal Khusa",
      brand: "Unze",
      category: "Mayo",
      price: 5499,
      description: "Beautiful black formal khusa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      backImage: "https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274",
      images: ["https://unze.com.pk/cdn/shop/files/l42422_4e202bfe-9916-489a-a976-2bf01b7b68cd.jpg?v=1762398274"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Black", "Silver"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 25,
      name: "Blue Formal Khusa",
      brand: "Unze",
      category: "Mehndi",
      price: 5699,
      description: "Elegant blue formal khusa with beautiful design and traditional craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282",
      backImage: "https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282",
      images: ["https://unze.com.pk/cdn/shop/files/l42438_522ebb32-6ade-44d8-91a8-5337cfac280e.jpg?v=1772608282"],
      badge: "Premium",
      rating: 4,
      colors: ["Blue", "Silver"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 26,
      name: "Orange Fancy Khusa",
      brand: "Unze",
      category: "Mayo",
      price: 5599,
      description: "Beautiful orange fancy khusa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413",
      backImage: "https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413",
      images: ["https://unze.com.pk/cdn/shop/files/l43165_032965be-5f81-4b46-b540-dcd852ce02a1.jpg?v=1772608413"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Orange", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 27,
      name: "Beige Leather Khussa",
      brand: "Unze",
      category: "Mehndi",
      price: 6199,
      description: "Elegant beige leather khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      backImage: "https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025",
      images: ["https://unze.com.pk/cdn/shop/files/l42879_6aac7e8c-0368-41f6-a12c-1f1da825e544.jpg?v=1770371025"],
      badge: "Premium",
      rating: 5,
      colors: ["Beige", "Gold"],
      material: "Leather",
      occasion: "Mehndi Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 28,
      name: "SK Pink Ethnic Khussa",
      brand: "Unze",
      category: "Mayo",
      price: 5799,
      description: "Beautiful SK pink ethnic khussa with stunning design and premium quality.",
      frontImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      backImage: "https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307",
      images: ["https://unze.com.pk/cdn/shop/files/l42877.jpg?v=1772629307"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pink", "Gold"],
      material: "Leather",
      occasion: "Mayo Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    // SECTION 2: BARAT & WALIMA SHOES (27 Items - Insignia)
    {
      id: 29,
      name: "Red Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 9999,
      description: "Royal red bridal khussa with magnificent design and traditional craftsmanship. Perfect for barat ceremony.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_f478929e-e318-4bef-9459-58da9f792ecd.jpg?v=1780665368",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_af887d48-bd87-40e1-867d-bd92fb96b329.jpg?v=1780665369",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_f478929e-e318-4bef-9459-58da9f792ecd.jpg?v=1780665368",
        "https://insignia.com.pk/cdn/shop/files/2_af887d48-bd87-40e1-867d-bd92fb96b329.jpg?v=1780665369",
        "https://insignia.com.pk/cdn/shop/files/3_df3e804a-d524-4b77-b82e-8bbb411b4c14.jpg?v=1780665368"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 30,
      name: "Golden Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 10999,
      description: "Elegant golden bridal khussa with beautiful design and premium quality. Perfect for walima.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_12d9ed82-4f59-440f-98b3-7b872a41b5b8.jpg?v=1780669428",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_403c8c05-210e-45cb-adf6-5567e2443350.jpg?v=1780669427",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_12d9ed82-4f59-440f-98b3-7b872a41b5b8.jpg?v=1780669428",
        "https://insignia.com.pk/cdn/shop/files/3_403c8c05-210e-45cb-adf6-5567e2443350.jpg?v=1780669427",
        "https://insignia.com.pk/cdn/shop/files/4_daacbb13-f11d-49f6-a5a6-e2c7b52b04b5.jpg?v=1780669428",
        "https://insignia.com.pk/cdn/shop/files/2_b7b12648-0b2d-4ff5-94ab-e6064748c355.jpg?v=1780669428"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Cream"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 31,
      name: "Silver Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 9499,
      description: "Stunning silver bridal khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_0df73b9b-3d13-4f32-ae81-1af40897d3b5.jpg?v=1780665559",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_57645b88-50c3-476a-8556-987861922d39.jpg?v=1780665559",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_0df73b9b-3d13-4f32-ae81-1af40897d3b5.jpg?v=1780665559",
        "https://insignia.com.pk/cdn/shop/files/2_57645b88-50c3-476a-8556-987861922d39.jpg?v=1780665559",
        "https://insignia.com.pk/cdn/shop/files/3_d465765d-1e49-412f-adc1-710c3942b9e5.jpg?v=1780665558",
        "https://insignia.com.pk/cdn/shop/files/4_319716a4-a18b-4d54-b3fc-273ad5b09cc6.jpg?v=1780665559"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Silver", "White"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 32,
      name: "Rose Gold Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11499,
      description: "Beautiful rose gold bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_55b3663a-aab4-40ae-98b6-5e0bf0e7057f.jpg?v=1780665600",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_620b2970-c9b6-47f1-9f8d-d3a15fdac457.jpg?v=1780665600",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_55b3663a-aab4-40ae-98b6-5e0bf0e7057f.jpg?v=1780665600",
        "https://insignia.com.pk/cdn/shop/files/2_620b2970-c9b6-47f1-9f8d-d3a15fdac457.jpg?v=1780665600",
        "https://insignia.com.pk/cdn/shop/files/3_39639fbc-3ed4-4def-b340-1f41f80dfa90.jpg?v=1780665600",
        "https://insignia.com.pk/cdn/shop/files/4_b97026e3-cd48-43a0-b186-9cb738f50832.jpg?v=1780665601"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Rose Gold", "Cream"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 33,
      name: "Royal Red Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10499,
      description: "Royal red khussa with magnificent design and traditional craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_cab2f4d8-93d2-4362-b684-535cc684ac3b.jpg?v=1780485465",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_c618e61b-c878-42b2-99a2-bdc054801d19.jpg?v=1780485465",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_cab2f4d8-93d2-4362-b684-535cc684ac3b.jpg?v=1780485465",
        "https://insignia.com.pk/cdn/shop/files/3_c618e61b-c878-42b2-99a2-bdc054801d19.jpg?v=1780485465",
        "https://insignia.com.pk/cdn/shop/files/4_60b3eca6-a7c6-4eb6-b192-6e71020da041.jpg?v=1780485465",
        "https://insignia.com.pk/cdn/shop/files/2_2a686aa0-a59b-40d8-a447-968313ab6b2f.jpg?v=1780485465"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 34,
      name: "Gold Embroidered Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11999,
      description: "Elegant gold embroidered khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_fc08e94c-2213-43ce-8236-51a882aea46e.jpg?v=1780482099",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_d2a0e6ec-027b-4333-8333-68eb54bd428b.jpg?v=1780482099",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_fc08e94c-2213-43ce-8236-51a882aea46e.jpg?v=1780482099",
        "https://insignia.com.pk/cdn/shop/files/3_d2a0e6ec-027b-4333-8333-68eb54bd428b.jpg?v=1780482099",
        "https://insignia.com.pk/cdn/shop/files/2_b204fde0-1d78-4d5e-859a-389bb1ab9ce9.jpg?v=1780482099",
        "https://insignia.com.pk/cdn/shop/files/4_7cb9d2d2-f942-428a-ad6f-dc4b3fa1cd93.jpg?v=1780482099"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 35,
      name: "Pearl White Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 9999,
      description: "Beautiful pearl white khussa with stunning design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_5e36cae7-3a81-4cc6-b1d9-6aad8cceb7ee.jpg?v=1780472481",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_ef52e566-f163-4dfe-af07-107de055c20d.jpg?v=1780472481",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_5e36cae7-3a81-4cc6-b1d9-6aad8cceb7ee.jpg?v=1780472481",
        "https://insignia.com.pk/cdn/shop/files/3_ef52e566-f163-4dfe-af07-107de055c20d.jpg?v=1780472481",
        "https://insignia.com.pk/cdn/shop/files/4_b1dfb891-3922-46b1-94eb-76d70c2fb5d5.jpg?v=1780472481",
        "https://insignia.com.pk/cdn/shop/files/2_cb26a0d6-ad98-4e18-be61-8a5ee79d8809.jpg?v=1780472481"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["White", "Pearl"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 36,
      name: "Crystal Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 12999,
      description: "Elegant crystal bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_d9356038-8e14-490b-bd4f-0d2c011e7ad1.jpg?v=1780472499",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_d5269548-fca3-413c-ae1b-015dd0042a41.jpg?v=1780472500",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_d9356038-8e14-490b-bd4f-0d2c011e7ad1.jpg?v=1780472499",
        "https://insignia.com.pk/cdn/shop/files/3_d5269548-fca3-413c-ae1b-015dd0042a41.jpg?v=1780472500",
        "https://insignia.com.pk/cdn/shop/files/4_0e2bff7a-5444-4b7f-868e-ff5f50db4e11.jpg?v=1780472500",
        "https://insignia.com.pk/cdn/shop/files/2_759141f9-bf6c-4561-825a-f81b2892ede8.jpg?v=1780472499"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Crystal", "Silver"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 37,
      name: "Maroon Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10499,
      description: "Beautiful maroon bridal khussa with stunning design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_a288b591-4051-4529-acb3-0742c4274bd7.jpg?v=1780472610",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_d5f429da-5091-495b-b708-23d8a796224e.jpg?v=1780472610",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_a288b591-4051-4529-acb3-0742c4274bd7.jpg?v=1780472610",
        "https://insignia.com.pk/cdn/shop/files/3_d5f429da-5091-495b-b708-23d8a796224e.jpg?v=1780472610",
        "https://insignia.com.pk/cdn/shop/files/4_bb0c1e1d-6485-49c2-8f99-c780d1eeed26.jpg?v=1780472610",
        "https://insignia.com.pk/cdn/shop/files/2_23bbf5ae-5bca-4a6b-9a83-4bd8d928f3b4.jpg?v=1780472610"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Maroon", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 38,
      name: "Champagne Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11499,
      description: "Elegant champagne khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_89a8f68c-4fde-490b-bb61-8397fdb794c2.jpg?v=1780472576",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_5b1bad2e-658d-4e45-9d1f-abf136069125.jpg?v=1780472576",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_89a8f68c-4fde-490b-bb61-8397fdb794c2.jpg?v=1780472576",
        "https://insignia.com.pk/cdn/shop/files/2_5b1bad2e-658d-4e45-9d1f-abf136069125.jpg?v=1780472576",
        "https://insignia.com.pk/cdn/shop/files/3_8ea2fb37-2bf7-47d0-852d-ac464c1bbfd0.jpg?v=1780472576",
        "https://insignia.com.pk/cdn/shop/files/4_9aa75cb6-b24c-48c2-8543-dd9866f9ac97.jpg?v=1780472576"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Champagne", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 39,
      name: "Ruby Red Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10999,
      description: "Stunning ruby red khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/2_959dd0be-b30e-4720-9903-bca1ef4d16e0.jpg?v=1780472717",
      backImage: "https://insignia.com.pk/cdn/shop/files/1_06232354-a254-47e3-adda-72bfc762bc65.jpg?v=1780472717",
      images: [
        "https://insignia.com.pk/cdn/shop/files/2_959dd0be-b30e-4720-9903-bca1ef4d16e0.jpg?v=1780472717",
        "https://insignia.com.pk/cdn/shop/files/1_06232354-a254-47e3-adda-72bfc762bc65.jpg?v=1780472717"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Ruby Red", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 40,
      name: "Pearl Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11999,
      description: "Beautiful pearl bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_84166f1d-b359-42e6-8e81-f2635c2a57db.jpg?v=1773260655",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_7926c590-65dc-490e-b3d4-511fd3184f7a.jpg?v=1773260654",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_84166f1d-b359-42e6-8e81-f2635c2a57db.jpg?v=1773260655",
        "https://insignia.com.pk/cdn/shop/files/2_7926c590-65dc-490e-b3d4-511fd3184f7a.jpg?v=1773260654",
        "https://insignia.com.pk/cdn/shop/files/3_2d37410b-b3e5-4455-8cbe-8008c49c551a.jpg?v=1773260655"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pearl", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 41,
      name: "Golden Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10499,
      description: "Elegant golden bridal khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_1619d931-eadc-46f0-bfed-00516de22de8.jpg?v=1773260690",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_b44d91b6-1f57-4301-9eae-e53e0e6fe540.jpg?v=1773260691",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_1619d931-eadc-46f0-bfed-00516de22de8.jpg?v=1773260690",
        "https://insignia.com.pk/cdn/shop/files/2_b44d91b6-1f57-4301-9eae-e53e0e6fe540.jpg?v=1773260691",
        "https://insignia.com.pk/cdn/shop/files/3_804847ea-0d23-42ab-87eb-c55005815f15.jpg?v=1773260691"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 42,
      name: "Platinum Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 12999,
      description: "Stunning platinum khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/5_780c100a-a677-42aa-b177-451bac54fac3.jpg?v=1772952338",
      backImage: "https://insignia.com.pk/cdn/shop/files/1_73ac47c0-61ef-4e95-8f30-db1866e65498.jpg?v=1772952338",
      images: [
        "https://insignia.com.pk/cdn/shop/files/5_780c100a-a677-42aa-b177-451bac54fac3.jpg?v=1772952338",
        "https://insignia.com.pk/cdn/shop/files/1_73ac47c0-61ef-4e95-8f30-db1866e65498.jpg?v=1772952338",
        "https://insignia.com.pk/cdn/shop/files/3_da641334-51f7-449b-be5f-03e93694a5c9.jpg?v=1772952338",
        "https://insignia.com.pk/cdn/shop/files/4_386fe44c-27e6-49ba-955b-ce5d9a71bd30.jpg?v=1772952338"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Platinum", "Silver"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 43,
      name: "Crimson Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10999,
      description: "Beautiful crimson bridal khussa with stunning design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_e1afd7e0-45be-45a3-a88f-9eb8c4e824aa.jpg?v=1772443777",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_3c6fc930-79b5-4095-861d-0d26ebd9c39d.jpg?v=1772443777",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_e1afd7e0-45be-45a3-a88f-9eb8c4e824aa.jpg?v=1772443777",
        "https://insignia.com.pk/cdn/shop/files/2_3c6fc930-79b5-4095-861d-0d26ebd9c39d.jpg?v=1772443777",
        "https://insignia.com.pk/cdn/shop/files/3_8e510537-ae74-4916-85c2-e074a80646fd.jpg?v=1772443778"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Crimson", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 44,
      name: "Ivory Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11499,
      description: "Elegant ivory bridal khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_1d66ef36-c806-42a0-9a72-e9439e5b3e96.jpg?v=1772444062",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_e3b23de3-6450-4614-a683-f85e8ca31c84.jpg?v=1772444061",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_1d66ef36-c806-42a0-9a72-e9439e5b3e96.jpg?v=1772444062",
        "https://insignia.com.pk/cdn/shop/files/2_e3b23de3-6450-4614-a683-f85e8ca31c84.jpg?v=1772444061",
        "https://insignia.com.pk/cdn/shop/files/3_a4af5e47-1731-4c54-9680-3e028442f1c4.jpg?v=1772444062",
        "https://insignia.com.pk/cdn/shop/files/4_369a13bc-2b28-44be-a44b-9c6cfa863206.jpg?v=1772444062"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Ivory", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 45,
      name: "Burgundy Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10499,
      description: "Stunning burgundy khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_8ef7e55a-2029-4f0f-b38d-27b94b288520.jpg?v=1772115021",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_8f5254db-9486-4444-85d3-ef742103ef82.jpg?v=1772115021",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_8ef7e55a-2029-4f0f-b38d-27b94b288520.jpg?v=1772115021",
        "https://insignia.com.pk/cdn/shop/files/2_8f5254db-9486-4444-85d3-ef742103ef82.jpg?v=1772115021",
        "https://insignia.com.pk/cdn/shop/files/3_e88bf9f8-9133-46f7-91f9-7366b412b544.jpg?v=1772115020",
        "https://insignia.com.pk/cdn/shop/files/4_43de6d4d-5a30-49c8-a435-12c888770567.jpg?v=1772115021"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Burgundy", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 46,
      name: "Diamond Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 14999,
      description: "Beautiful diamond bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_b7df9871-2069-469e-8dfe-4632b1b4ce27.jpg?v=1778649064",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_3b8b7ea0-9bf0-42c4-b991-4e2aeb08cc42.jpg?v=1778649065",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_b7df9871-2069-469e-8dfe-4632b1b4ce27.jpg?v=1778649064",
        "https://insignia.com.pk/cdn/shop/files/3_3b8b7ea0-9bf0-42c4-b991-4e2aeb08cc42.jpg?v=1778649065",
        "https://insignia.com.pk/cdn/shop/files/4_ce6ae522-7360-4808-a74a-30c2b40b063b.jpg?v=1778649065",
        "https://insignia.com.pk/cdn/shop/files/2_eb3bc388-fb47-4149-9828-6b86b9e2fff2.jpg?v=1778649065"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Diamond", "Silver"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 47,
      name: "Scarlet Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 9999,
      description: "Elegant scarlet khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_62911117-f162-498a-be27-c35eddcad6fb.jpg?v=1772115688",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_b393d999-66e6-485c-99e3-bd382e7c1a70.jpg?v=1772115688",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_62911117-f162-498a-be27-c35eddcad6fb.jpg?v=1772115688",
        "https://insignia.com.pk/cdn/shop/files/2_b393d999-66e6-485c-99e3-bd382e7c1a70.jpg?v=1772115688",
        "https://insignia.com.pk/cdn/shop/files/3_81387a19-5363-40dd-99df-4c14cb40cfcf.jpg?v=1772115689"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Scarlet", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 48,
      name: "Mauve Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 10999,
      description: "Beautiful mauve bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_62c70144-776d-4b6a-ad95-c7e20c18cb6a.jpg?v=1772516350",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_0c0e0d34-8bad-4d6d-8a1f-38df7c8138ea.jpg?v=1772516350",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_62c70144-776d-4b6a-ad95-c7e20c18cb6a.jpg?v=1772516350",
        "https://insignia.com.pk/cdn/shop/files/3_0c0e0d34-8bad-4d6d-8a1f-38df7c8138ea.jpg?v=1772516350",
        "https://insignia.com.pk/cdn/shop/files/4_1844635b-b2ba-41dd-8243-3fe745800cc0.jpg?v=1772516350",
        "https://insignia.com.pk/cdn/shop/files/IP0100-Pewter.png?v=1772516350"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Mauve", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 49,
      name: "Oxblood Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 11499,
      description: "Stunning oxblood khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_c36f2735-3f9d-4fff-aa5e-f4afd2cf4a60.jpg?v=1771664833",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_fea297a2-7227-48bc-bb14-4d8936ecfe55.jpg?v=1771664833",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_c36f2735-3f9d-4fff-aa5e-f4afd2cf4a60.jpg?v=1771664833",
        "https://insignia.com.pk/cdn/shop/files/2_fea297a2-7227-48bc-bb14-4d8936ecfe55.jpg?v=1771664833",
        "https://insignia.com.pk/cdn/shop/files/3_62dcbbb8-ba2c-4149-88a7-d1d3a8fc0b05.jpg?v=1771664833"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Oxblood", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 50,
      name: "Taupe Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11999,
      description: "Elegant taupe bridal khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_88ffca72-c23e-4622-8593-c499d7a5b4f6.jpg?v=1771664964",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_3da1c766-5f6c-4a18-bd82-52a70ad0da36.jpg?v=1771664964",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_88ffca72-c23e-4622-8593-c499d7a5b4f6.jpg?v=1771664964",
        "https://insignia.com.pk/cdn/shop/files/2_3da1c766-5f6c-4a18-bd82-52a70ad0da36.jpg?v=1771664964",
        "https://insignia.com.pk/cdn/shop/files/4_624410b4-ae24-448e-ba76-875aff0dd9b9.jpg?v=1771664964"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Taupe", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 51,
      name: "Bridal Gold Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10999,
      description: "Beautiful bridal gold khussa with stunning design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_29409295-6780-4dec-a3c7-01adad2b6ac8.jpg?v=1769518959",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_91f6ba5a-7b7a-412c-a54b-b44f91b41c32.jpg?v=1769518959",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_29409295-6780-4dec-a3c7-01adad2b6ac8.jpg?v=1769518959",
        "https://insignia.com.pk/cdn/shop/files/2_91f6ba5a-7b7a-412c-a54b-b44f91b41c32.jpg?v=1769518959",
        "https://insignia.com.pk/cdn/shop/files/3_42dff9ad-3ba8-432b-ab5d-82e56fe634cb.jpg?v=1769518959"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 52,
      name: "Silver Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 11499,
      description: "Elegant silver bridal khussa with beautiful design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_bd14b25b-11c2-413d-943e-d8647ad392e4.jpg?v=1769519141",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_751865b4-6406-4bb0-9e26-e7b3a0b79967.jpg?v=1769519140",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_bd14b25b-11c2-413d-943e-d8647ad392e4.jpg?v=1769519141",
        "https://insignia.com.pk/cdn/shop/files/2_751865b4-6406-4bb0-9e26-e7b3a0b79967.jpg?v=1769519140",
        "https://insignia.com.pk/cdn/shop/files/3_a3f9b47f-d5c6-4920-b66c-6f74c0e0b602.jpg?v=1769519140"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Silver", "White"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 53,
      name: "Ruby Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 9999,
      description: "Stunning ruby khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/2_a01533a4-1795-4a27-a608-1d5b4dcccb3f.jpg?v=1770790902",
      backImage: "https://insignia.com.pk/cdn/shop/files/1_1be77e95-9ac4-421c-89b2-d5ebdd66c5d3.jpg?v=1770790902",
      images: [
        "https://insignia.com.pk/cdn/shop/files/2_a01533a4-1795-4a27-a608-1d5b4dcccb3f.jpg?v=1770790902",
        "https://insignia.com.pk/cdn/shop/files/1_1be77e95-9ac4-421c-89b2-d5ebdd66c5d3.jpg?v=1770790902",
        "https://insignia.com.pk/cdn/shop/files/3_d833ca31-f7ba-4093-ac14-cd7e8a839f6e.jpg?v=1769519317"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Ruby", "Gold"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 54,
      name: "Cream Bridal Khussa",
      brand: "Insignia",
      category: "Walima",
      price: 10999,
      description: "Beautiful cream bridal khussa with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_1025681e-3ef8-4ad0-bcbd-eb383a1afa06.jpg?v=1762415190",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_99fadc26-8c2a-4231-ac0c-4295205aa762.jpg?v=1762415190",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_1025681e-3ef8-4ad0-bcbd-eb383a1afa06.jpg?v=1762415190",
        "https://insignia.com.pk/cdn/shop/files/2_99fadc26-8c2a-4231-ac0c-4295205aa762.jpg?v=1762415190",
        "https://insignia.com.pk/cdn/shop/files/3_790473de-9b8e-4df3-9592-e059d24de7de.jpg?v=1762415190"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Cream", "Gold"],
      material: "Leather",
      occasion: "Walima Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      id: 55,
      name: "Navy Bridal Khussa",
      brand: "Insignia",
      category: "Barat",
      price: 10499,
      description: "Elegant navy bridal khussa with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_4c30b8b2-650a-4395-94fa-dc4a862651f2.jpg?v=1764913123",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_08b3df2e-5bd9-4280-b710-ac51d5d4ac4f.jpg?v=1764913123",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_4c30b8b2-650a-4395-94fa-dc4a862651f2.jpg?v=1764913123",
        "https://insignia.com.pk/cdn/shop/files/2_08b3df2e-5bd9-4280-b710-ac51d5d4ac4f.jpg?v=1764913123",
        "https://insignia.com.pk/cdn/shop/files/4_21cc9647-1cc6-4081-9ee5-f1c9df8f0a39.jpg?v=1764913123",
        "https://insignia.com.pk/cdn/shop/files/NEW_IP2055_SILVER.png?v=1764913123"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Navy", "Silver"],
      material: "Leather",
      occasion: "Barat Ceremony",
      sizes: ["36", "37", "38", "39", "40"]
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

  // Get unique categories
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter products by category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Hero Slider Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  // Add to cart
  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.frontImage,
      category: product.category,
      quantity: 1,
      size: "38"
    };
    addToCart(cartItem);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100/70 via-rose-100/70 to-pink-100/70">
      
      {/* ===== HERO SECTION WITH MOVING IMAGES ===== */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Hero Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt={`Shoes Collection ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pt-40 md:pt-48 lg:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              <span className="text-gold-300 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg">
                Footwear Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Step into</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-gold-300 to-gold-500">
                Bridal Elegance
              </span>
            </h1>

            <p className="text-white/90 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Complete your bridal look with our exquisite collection of handcrafted khussas and heels
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Premium Quality
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Handcrafted
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 55+ Exclusive Designs
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                Price 5,000 - 15,000 PKR
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
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
            <span className="text-rose-600 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3">
              Bridal Footwear
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Each pair is crafted with precision and elegance
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-rose-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 border border-pink-200 hover:border-rose-300'
                }`}
              >
                {cat === "all" ? "All Shoes" : cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-rose-300"
              >
                {/* Product Image */}
                <div 
                  className="relative h-72 w-full overflow-hidden bg-pink-50 cursor-pointer"
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
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.badge === 'Premium' ? 'bg-rose-600 text-white' :
                      product.badge === 'Best Seller' ? 'bg-amber-500 text-white' :
                      product.badge === 'New Arrival' ? 'bg-emerald-500 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-rose-600 shadow-md">
                    {product.category}
                  </div>

                  {/* Brand */}
                  <div className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{product.brand}</span>
                  </div>

                  {/* Color Dots */}
                  <div className="absolute bottom-3 right-3 z-10 flex gap-1">
                    {product.colors && product.colors.slice(0, 3).map((color, idx) => (
                      <span 
                        key={idx}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                        style={{ 
                          backgroundColor: color.toLowerCase() === 'gold' ? '#D4AF37' :
                                         color.toLowerCase() === 'red' ? '#DC2626' :
                                         color.toLowerCase() === 'pink' ? '#F472B6' :
                                         color.toLowerCase() === 'green' ? '#4CAF50' :
                                         color.toLowerCase() === 'yellow' ? '#FFD700' :
                                         color.toLowerCase() === 'blue' ? '#3B82F6' :
                                         color.toLowerCase() === 'purple' ? '#8B5CF6' :
                                         color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                         color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                         color.toLowerCase() === 'white' ? '#FFFFFF' :
                                         color.toLowerCase() === 'black' ? '#1A1A1A' :
                                         color.toLowerCase() === 'rose gold' ? '#B76E79' :
                                         color.toLowerCase() === 'peach' ? '#FFDAB9' :
                                         color.toLowerCase() === 'mint' ? '#98FB98' :
                                         color.toLowerCase() === 'fawn' ? '#E5C5B5' :
                                         color.toLowerCase() === 'mustard' ? '#FFDB58' :
                                         color.toLowerCase() === 'rust' ? '#B7410E' :
                                         color.toLowerCase() === 'beige' ? '#F5F5DC' :
                                         color.toLowerCase() === 'navy' ? '#1A237E' :
                                         color.toLowerCase() === 'maroon' ? '#800000' :
                                         color.toLowerCase() === 'crimson' ? '#DC143C' :
                                         color.toLowerCase() === 'burgundy' ? '#900020' :
                                         color.toLowerCase() === 'champagne' ? '#F7E7CE' :
                                         color.toLowerCase() === 'ivory' ? '#FFFFF0' :
                                         color.toLowerCase() === 'pearl' ? '#F5F5F5' :
                                         color.toLowerCase() === 'platinum' ? '#E5E4E2' :
                                         color.toLowerCase() === 'taupe' ? '#483C32' :
                                         color.toLowerCase() === 'oxblood' ? '#4A0404' :
                                         color.toLowerCase() === 'mauve' ? '#E0B0FF' :
                                         color.toLowerCase() === 'scarlet' ? '#FF2400' :
                                         color.toLowerCase() === 'crystal' ? '#E0FFFF' :
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
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="px-4 py-2 bg-rose-600 text-white rounded-full text-sm font-medium hover:bg-rose-700 transition-all duration-300 transform hover:scale-105"
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
                  <p className="text-gray-500 text-xs mb-1">{product.brand}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
                  
                  {/* Material & Sizes */}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 bg-pink-100 text-rose-600 text-[10px] rounded">
                      {product.material}
                    </span>
                    <span className="px-2 py-0.5 bg-pink-100 text-rose-600 text-[10px] rounded">
                      {product.occasion}
                    </span>
                    <span className="px-2 py-0.5 bg-pink-100 text-rose-600 text-[10px] rounded">
                      {product.sizes.join(' | ')}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {product.images && product.images.length > 1 ? `${product.images.length} views` : 'Front + Back'}
                    </span>
                    <button
                      onClick={() => openModal(product)}
                      className="text-rose-500 hover:text-rose-700 text-sm font-medium transition-colors"
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
              <div className="p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Images Gallery */}
                  <div>
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-pink-50">
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
                            selectedImage === img ? 'border-rose-500' : 'border-pink-200 hover:border-rose-400'
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
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/80 text-white text-[8px] text-center py-0.5">
                              Front
                            </span>
                          )}
                          {idx === 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/80 text-white text-[8px] text-center py-0.5">
                              Back
                            </span>
                          )}
                          {idx > 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-rose-600/60 text-white text-[8px] text-center py-0.5">
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
                        <span className="text-rose-600 text-sm font-medium uppercase tracking-wider">
                          {selectedProduct.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mt-1">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">{selectedProduct.brand}</p>
                      </div>
                      <span className="text-2xl font-bold text-rose-600">
                        {formatPrice(selectedProduct.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-gray-700 font-medium">{selectedProduct.rating}</span>
                      <span className="text-gray-400 text-sm">| {selectedProduct.badge}</span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 border-t border-pink-200 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mt-4 border-t border-pink-200 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Material:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.material}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Occasion:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.occasion}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Colors:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.colors.join(', ')}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Available Sizes:</span>
                          <span className="text-gray-700 ml-1 font-medium">{selectedProduct.sizes.join(' | ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          handleAddToCart(selectedProduct);
                          closeModal();
                        }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-pink-200 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300"
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