"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function BaratPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== HERO SLIDER IMAGES (15 images) =====
  const heroSlides = [
    "https://uycollection.com/cdn/shop/files/JannatMirzausa.webp?v=1770744236&width=800",
    "https://uycollection.com/cdn/shop/files/2T9A8777.webp?v=1767692097&width=800",
    "https://uycollection.com/cdn/shop/files/047A00031.webp?v=1759251562&width=800",
    "https://www.aishaimranofficial.com/images/thumbs/0003317_zaib-ul-nissa.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0003331_nadira-bano.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002550_zarqash.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0002560_roshane.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0003324_zeenat.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0004370_meherbano.jpeg",
    "https://www.aishaimranofficial.com/images/thumbs/0004363_rafiha.jpeg",
    "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_19_55PM.png?v=1769787272&width=800",
    "https://pehnawastore.pk/cdn/shop/files/hania6a_1.png?v=1768322658&width=800",
    "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa4.png?v=1766505900&width=800",
    "https://pehnawastore.pk/cdn/shop/files/130_117f2112-7e74-4fe1-a799-c0d8474d39a1.jpg?v=1765547789&width=800",
    "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27498-copy-ed_1500x_4eb89cba-423b-45a7-934c-a7dbc93acb13.png?v=1737638903&width=800",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== 22 BARAT DRESSES =====
  const products = [
    {
      id: 1,
      name: "Jannat Mirza Bridal",
      brand: "UY Collection",
      category: "Barat Collection",
      price: 42999,
      description: "Exquisite red bridal dress with intricate gold embroidery and zari work. A stunning choice for your Barat ceremony.",
      frontImage: "https://uycollection.com/cdn/shop/files/JannatMirzausa.webp?v=1770744236&width=600",
      backImage: "https://uycollection.com/cdn/shop/files/JannatMirzaCananda.webp?v=1770744237&width=600",
      images: [
        "https://uycollection.com/cdn/shop/files/JannatMirzausa.webp?v=1770744236&width=600",
        "https://uycollection.com/cdn/shop/files/JannatMirzaCananda.webp?v=1770744237&width=600",
        "https://uycollection.com/cdn/shop/files/JannatMirzaBridalGown.webp?v=1770744236&width=600",
        "https://uycollection.com/cdn/shop/files/JannatMirzaRED.webp?v=1770744236&width=600"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari & Resham",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 2,
      name: "UY Bridal Ensemble",
      brand: "UY Collection",
      category: "Barat Collection",
      price: 39999,
      description: "Royal red and gold bridal ensemble with heavy embroidery and traditional craftsmanship. A masterpiece for your Barat.",
      frontImage: "https://uycollection.com/cdn/shop/files/2T9A8777.webp?v=1767692097&width=700",
      backImage: "https://uycollection.com/cdn/shop/files/2T9A8794.webp?v=1767692098&width=700",
      images: [
        "https://uycollection.com/cdn/shop/files/2T9A8777.webp?v=1767692097&width=700",
        "https://uycollection.com/cdn/shop/files/2T9A8794.webp?v=1767692098&width=700",
        "https://uycollection.com/cdn/shop/files/2T9A8798.webp?v=1767692097&width=700",
        "https://uycollection.com/cdn/shop/files/2T9A8823.webp?v=1767692097&width=700"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold", "Crimson"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 3,
      name: "UY Royal Bridal",
      brand: "UY Collection",
      category: "Barat Collection",
      price: 44999,
      description: "Luxurious bridal ensemble with heavy gold embroidery and traditional design. A true masterpiece.",
      frontImage: "https://uycollection.com/cdn/shop/files/047A00031.webp?v=1759251562&width=700",
      backImage: "https://uycollection.com/cdn/shop/files/047A0374.webp?v=1759251562&width=600",
      images: [
        "https://uycollection.com/cdn/shop/files/047A00031.webp?v=1759251562&width=700",
        "https://uycollection.com/cdn/shop/files/047A0374.webp?v=1759251562&width=600",
        "https://uycollection.com/cdn/shop/files/047A01012.webp?v=1759251562&width=700",
        "https://uycollection.com/cdn/shop/files/047A02081.webp?v=1759251562&width=600"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Pearl",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 5,
      name: "Zaib-ul-Nissa Bridal",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 39999,
      description: "Royal red and gold bridal ensemble with heavy embroidery and traditional craftsmanship. A masterpiece for your Barat.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0003317_zaib-ul-nissa.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0003318_zaib-ul-nissa.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0003317_zaib-ul-nissa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003318_zaib-ul-nissa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003319_zaib-ul-nissa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003320_zaib-ul-nissa.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003323_zaib-ul-nissa.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Crimson"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 6,
      name: "Nadira Bano Collection",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 31999,
      description: "Elegant bridal dress with delicate embroidery and beautiful color combinations. A sophisticated choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0003331_nadira-bano.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0003332_nadira-bano.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0003331_nadira-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003332_nadira-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003333_nadira-bano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003334_nadira-bano.jpeg"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Red", "Gold", "Pink"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 7,
      name: "Zarqash Bridal Dress",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 37999,
      description: "Stunning bridal dress with unique embroidery and modern design elements. A blend of tradition and contemporary style.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002550_zarqash.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002552_zarqash.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002550_zarqash.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002552_zarqash.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002553_zarqash.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002559_zarqash.jpeg"
      ],
      badge: "Limited Edition",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 8,
      name: "Roshane Bridal Ensemble",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 41999,
      description: "Luxurious bridal ensemble with heavy gold embroidery and traditional design. A royal choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0002560_roshane.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0002562_roshane.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0002560_roshane.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002562_roshane.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002563_roshane.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0002565_roshane.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red", "Crimson"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 9,
      name: "Zeenat Bridal Dress",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 33999,
      description: "Beautiful bridal dress with intricate embroidery and classic design. A timeless classic.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0003324_zeenat.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0003325_zeenat.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0003324_zeenat.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003325_zeenat.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003326_zeenat.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003327_zeenat.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0003329_zeenat.jpeg"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Red", "Gold", "Pink"],
      fabric: "Silk",
      embroidery: "Zari & Resham",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 10,
      name: "Meherbano Collection",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 36999,
      description: "Elegant bridal dress with beautiful embroidery and stunning color palette. A perfect choice.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004370_meherbano.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004371_meherbano.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004370_meherbano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004371_meherbano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004373_meherbano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004374_meherbano.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004375_meherbano.jpeg"
      ],
      badge: "New Arrival",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Chiffon",
      embroidery: "Resham & Zari",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 11,
      name: "Rafiha Bridal Dress",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 34999,
      description: "Stunning bridal dress with unique embroidery and modern design. A perfect blend of elegance and style.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004363_rafiha.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004364_rafiha.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004363_rafiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004364_rafiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004365_rafiha.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004383_rafiha.jpeg"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Red", "Gold", "Crimson"],
      fabric: "Georgette",
      embroidery: "Zari & Kundan",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 12,
      name: "Noorsaba Bridal Ensemble",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 44999,
      description: "Luxurious bridal ensemble with heavy gold embroidery and traditional design. A masterpiece of craftsmanship.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004344_noorsaba.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004344_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004345_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004346_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004347_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004349_noorsaba.jpeg"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Pearl",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 13,
      name: "Pehnawa Pink Bridal",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 30999,
      description: "Beautiful pink bridal dress with delicate embroidery and modern design. A fresh and elegant choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_19_55PM.png?v=1769787272&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_31_38PM.png?v=1769787272&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_19_55PM.png?v=1769787272&width=713",
        "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_31_38PM.png?v=1769787272&width=713",
        "https://pehnawastore.pk/cdn/shop/files/ChatGPTImageJan30_2026_08_27_05PM.png?v=1769787272&width=713"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Pink", "Gold", "Rose"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 14,
      name: "Hania Bridal Collection",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 33999,
      description: "Elegant bridal dress with stunning embroidery and beautiful color combinations. A sophisticated choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/hania6a_1.png?v=1768322658&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/23_1500x_e1b57d6e-9905-4a05-a682-5c546f3a492e.jpg?v=1768322658&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/hania6a_1.png?v=1768322658&width=713",
        "https://pehnawastore.pk/cdn/shop/files/23_1500x_e1b57d6e-9905-4a05-a682-5c546f3a492e.jpg?v=1768322658&width=713",
        "https://pehnawastore.pk/cdn/shop/files/22_1500x_f39ca932-87b0-48d0-9b43-f05eec050f97.webp?v=1768322658&width=713"
      ],
      badge: "New Arrival",
      rating: 5,
      colors: ["Pink", "Gold", "Red"],
      fabric: "Silk",
      embroidery: "Zari & Resham",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 15,
      name: "Shifa Bridal Dress",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 35999,
      description: "Stunning bridal dress with unique embroidery and modern design elements. A bold and beautiful choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa4.png?v=1766505900&width=600",
      backImage: "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa1.png?v=1766505900&width=600",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa4.png?v=1766505900&width=600",
        "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa1.png?v=1766505900&width=600",
        "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa6.png?v=1766505316&width=600",
        "https://pehnawastore.pk/cdn/shop/files/Haris-Shakeel-Shifa3.png?v=1766505316&width=600"
      ],
      badge: "Limited Edition",
      rating: 5,
      colors: ["Red", "Gold", "Pink"],
      fabric: "Georgette",
      embroidery: "Zari & Kundan",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 16,
      name: "Pehnawa Gold Bridal",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 31999,
      description: "Luxurious gold bridal dress with intricate embroidery and traditional design. A royal choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/130_117f2112-7e74-4fe1-a799-c0d8474d39a1.jpg?v=1765547789",
      backImage: "https://pehnawastore.pk/cdn/shop/files/139_b641800f-ceb0-43d0-8e8b-c416d7d710b8.jpg?v=1765547788",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/130_117f2112-7e74-4fe1-a799-c0d8474d39a1.jpg?v=1765547789",
        "https://pehnawastore.pk/cdn/shop/files/139_b641800f-ceb0-43d0-8e8b-c416d7d710b8.jpg?v=1765547788",
        "https://pehnawastore.pk/cdn/shop/files/131_a3075fd8-ba16-4f54-87ca-43db169dda66.jpg?v=1765547788"
      ],
      badge: "Premium",
      rating: 4,
      colors: ["Gold", "Red", "Crimson"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 17,
      name: "HR Bridals Collection",
      brand: "HR Bridals",
      category: "Barat Collection",
      price: 39999,
      description: "Royal bridal ensemble with heavy embroidery and traditional craftsmanship. A masterpiece of design.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27498-copy-ed_1500x_4eb89cba-423b-45a7-934c-a7dbc93acb13.png?v=1737638903&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27490-copy-ed_1500x_3344d6b4-404f-49ce-ab8a-28783120c5a0.webp?v=1737638903&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27498-copy-ed_1500x_4eb89cba-423b-45a7-934c-a7dbc93acb13.png?v=1737638903&width=713",
        "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27490-copy-ed_1500x_3344d6b4-404f-49ce-ab8a-28783120c5a0.webp?v=1737638903&width=713",
        "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27538-copy-ed_1500x_090c5f78-673b-485a-9344-82502fa648fc.webp?v=1737638903&width=713",
        "https://pehnawastore.pk/cdn/shop/files/HR-Bridals27553-copy-ed_1500x_ccb6b3c9-792f-4547-92c4-396321df483b.webp?v=1737638903&width=713"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 18,
      name: "Inea Bridal Dress",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 32999,
      description: "Elegant bridal dress with beautiful embroidery and stunning design. A perfect choice for the modern bride.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/36Inea_667x1000web.jpg?v=1779536976",
      backImage: "https://pehnawastore.pk/cdn/shop/files/39Inea_667x1000web.jpg?v=1779537050",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/36Inea_667x1000web.jpg?v=1779536976",
        "https://pehnawastore.pk/cdn/shop/files/39Inea_667x1000web.jpg?v=1779537050"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pink", "Gold", "Rose"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 19,
      name: "Mehroon Bridal Dress",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 37999,
      description: "Stunning bridal dress with unique embroidery and modern design elements. A bold and beautiful choice.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonFront_A_1800x1800_99c09b0d-d405-48aa-899e-c324df532521.jpg?v=1763646929&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonBack_D_1800x1800_5aba6a36-6d6b-45ca-a2e3-cd221764d405.jpg?v=1763646928&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonFront_A_1800x1800_99c09b0d-d405-48aa-899e-c324df532521.jpg?v=1763646929&width=713",
        "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonFront_B_1800x1800_04be505b-6b7c-4897-9c58-14fffc92b3d8.jpg?v=1763646928&width=713",
        "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonCloseup_E_1800x1800_21fe1573-a281-4e09-9404-40aa2556ea52.jpg?v=1763646929&width=713",
        "https://pehnawastore.pk/cdn/shop/files/SFEF2501MehroonBack_D_1800x1800_5aba6a36-6d6b-45ca-a2e3-cd221764d405.jpg?v=1763646928&width=713"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Crimson"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 20,
      name: "Pehnawa Red Bridal",
      brand: "Pehnawa Store",
      category: "Barat Collection",
      price: 33999,
      description: "Beautiful red bridal dress with intricate embroidery and traditional design. A timeless classic.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/583072644_18085858072959770_8644337105091725438_n.jpg?v=1763551888&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/582067656_18085858084959770_4506759281730171238_n.jpg?v=1763551888&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/583072644_18085858072959770_8644337105091725438_n.jpg?v=1763551888&width=713",
        "https://pehnawastore.pk/cdn/shop/files/582067656_18085858084959770_4506759281730171238_n.jpg?v=1763551888&width=713"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Silk",
      embroidery: "Zari & Resham",
      occasion: "Barat Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 21,
      name: "Faraz Manan Bridal",
      brand: "Faraz Manan",
      category: "Barat Collection",
      price: 49999,
      description: "Luxurious bridal ensemble with heavy embroidery and traditional craftsmanship. A true masterpiece.",
      frontImage: "https://pehnawastore.pk/cdn/shop/files/Faraz_Manan_Bridal_Pakistani_indian_bridal_wedding_dress_mehndi_nikkah_suit_usa_uk_australia_canada_europe_Germany_bridesmaid_trending_dresses_guest_luxury_womens_wear_gift_for_her_pa.png?v=1767368578&width=713",
      backImage: "https://pehnawastore.pk/cdn/shop/files/B2B3594B-5EF3-4D5B-9F7E-5303E152B23A_1000x_477550ed-a179-4fe2-81f0-6a950f02a869.webp?v=1767368576&width=713",
      images: [
        "https://pehnawastore.pk/cdn/shop/files/Faraz_Manan_Bridal_Pakistani_indian_bridal_wedding_dress_mehndi_nikkah_suit_usa_uk_australia_canada_europe_Germany_bridesmaid_trending_dresses_guest_luxury_womens_wear_gift_for_her_pa.png?v=1767368578&width=713",
        "https://pehnawastore.pk/cdn/shop/files/B2B3594B-5EF3-4D5B-9F7E-5303E152B23A_1000x_477550ed-a179-4fe2-81f0-6a950f02a869.webp?v=1767368576&width=713",
        "https://pehnawastore.pk/cdn/shop/files/9F4C18E5-B806-4180-9FE5-D37FE05C2CB8_1000x_347d9818-6662-415e-80d9-1b992d8bef01.webp?v=1767368576&width=713"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold", "Crimson"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Barat Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 22,
      name: "Royal Bridal Ensemble",
      brand: "Aisha Imran",
      category: "Barat Collection",
      price: 42999,
      description: "Royal bridal ensemble with heavy embroidery and traditional craftsmanship. A true masterpiece for your Barat.",
      frontImage: "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
      backImage: "https://www.aishaimranofficial.com/images/thumbs/0004344_noorsaba.jpeg",
      images: [
        "https://www.aishaimranofficial.com/images/thumbs/0004343_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004344_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004345_noorsaba.jpeg",
        "https://www.aishaimranofficial.com/images/thumbs/0004346_noorsaba.jpeg"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Pearl",
      occasion: "Barat Ceremony",
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

  // Add to cart and redirect to cart page
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
                alt="Bridal Collection"
                className="w-full h-full object-contain bg-gradient-to-br from-rose-900/80 via-black/80 to-rose-900/80"
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
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              <span className="text-amber-200 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg">
                Barat Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Royal</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-rose-300">
                Barat Collection
              </span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Discover our exquisite collection of royal red and gold bridal ensembles,
              meticulously handcrafted for your special day.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-4 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Royal Collection
              </div>
              <div className="px-4 sm:px-4 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Premium Quality
              </div>
              <div className="px-4 sm:px-4 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 22 Exclusive Dresses
              </div>
              <div className="px-4 sm:px-4 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
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
            <span className="text-rose-600 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3">
              Bridal Ensembles
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Each piece is a masterpiece of craftsmanship and elegance
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
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.badge === 'Premium' ? 'bg-rose-700 text-white' :
                      product.badge === 'Best Seller' ? 'bg-amber-600 text-white' :
                      product.badge === 'New Arrival' ? 'bg-emerald-600 text-white' :
                      product.badge === 'Limited Edition' ? 'bg-purple-600 text-white' :
                      'bg-gray-700 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm shadow-md">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-700 ml-1 font-medium">{product.rating}</span>
                  </div>

                  {/* Brand */}
                  <div className="absolute bottom-3 left-3 z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
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
                                         color.toLowerCase() === 'maroon' ? '#800000' :
                                         color.toLowerCase() === 'crimson' ? '#DC143C' :
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
                  
                  {/* Size Badges */}
                  <div className="mt-2 flex gap-1">
                    {product.sizes && product.sizes.map((size, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] rounded">
                        {size}
                      </span>
                    ))}
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
                    <div className="mt-4 border-t border-rose-100 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mt-4 border-t border-rose-100 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Fabric:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.fabric}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Embroidery:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.embroidery}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Occasion:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.occasion}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Colors:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.colors.join(', ')}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-400">Available Sizes:</span>
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
                        🛒 Add to Cart
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-rose-200 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300"
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