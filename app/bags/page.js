"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function BagsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // ===== HERO IMAGES (10 Images for Moving Slider) =====
  const heroImages = [
    "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_Pt-5.jpg?v=1729512741&width=150&format=webp",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0013_pt-70-a_1.jpg?v=1729578137&width=150&format=webp",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0003_LPS-majenda.jpg?v=1729571647&width=150&format=webp",
    "https://insignia.com.pk/cdn/shop/files/1_974b95c8-40ef-4684-87f3-d55a475baf71.jpg?v=1776068101&width=823",
    "https://insignia.com.pk/cdn/shop/files/1_f4564856-5c5e-4c3a-a26b-b740ff507d7b.jpg?v=1776068106&width=823",
    "https://insignia.com.pk/cdn/shop/files/1_2815dc9c-4d63-4c57-bfa0-225344af385d.jpg?v=1776068432&width=823",
    "https://insignia.com.pk/cdn/shop/files/1_08820856-016f-4dfe-98ea-f27749b1867e.jpg?v=1775732581&width=823",
    "https://insignia.com.pk/cdn/shop/files/1_093e667f-ae12-42f2-ae68-4722aa692253.jpg?v=1775732697&width=823"
  ];

  // ============================================================
  // BAGS PRODUCTS (58 Items)
  // ============================================================
  const products = [
    // SECTION 1: MEHNDI & MAYO BAGS (30 Items)
    {
      id: 1,
      name: "Kiran Embroidered Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 12999,
      description: "Beautiful embroidered potli bag with traditional design and premium craftsmanship. Perfect for mehndi ceremonies.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 2,
      name: "Motia Chatpati Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 10999,
      description: "Elegant motia chatpati bag with beautiful design and premium quality. Perfect for mayo ceremonies.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 3,
      name: "Mehndi Potli Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 11999,
      description: "Beautiful mehndi potli bag with floral design and traditional craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0011_kiran_6bccf70e-603f-4028-be69-22785efe9352.jpg?v=1730356209&width=150&format=webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 4,
      name: "Mayo Clutch Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 13999,
      description: "Elegant mayo clutch bag with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/products/f2161d6582c882d7b8f0d4976f1b0ff2.jpg?v=1706272795&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/0008_motiachatpati_d6087a1c-6c76-406c-9afe-7789c42a2188.jpg?v=1730356264&width=150&format=webp",
        "https://cdn.shopify.com/s/files/1/2337/7003/products/f2161d6582c882d7b8f0d4976f1b0ff2.jpg?v=1706272795&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Cream"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 5,
      name: "Mehndi Embroidered Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 14999,
      description: "Stunning mehndi embroidered bag with intricate design and traditional craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_Pt-5.jpg?v=1729512741&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_Pt-5.jpg?v=1729512741&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_Pt-5.jpg?v=1729512741&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 6,
      name: "Mayo Pearl Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 15999,
      description: "Beautiful mayo pearl bag with elegant design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0013_pt-70-a_1.jpg?v=1729578137&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0013_pt-70-a_1.jpg?v=1729578137&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0013_pt-70-a_1.jpg?v=1729578137&width=150&format=webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 7,
      name: "Mehndi Gota Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 12999,
      description: "Beautiful mehndi gota bag with traditional design and premium craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0003_LPS-majenda.jpg?v=1729571647&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0003_LPS-majenda.jpg?v=1729571647&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0003_LPS-majenda.jpg?v=1729571647&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 8,
      name: "Mayo Zari Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 11999,
      description: "Elegant mayo zari bag with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0007_LPS-SHOCKINGPINK.jpg?v=1729571395&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0007_LPS-SHOCKINGPINK.jpg?v=1729571395&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0007_LPS-SHOCKINGPINK.jpg?v=1729571395&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Silver"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 9,
      name: "Mehndi Resham Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 13999,
      description: "Beautiful mehndi resham bag with intricate embroidery and traditional design.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/08aff88cdf0e32561c43238a58f23a6e.jpg?v=1714474125&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/08aff88cdf0e32561c43238a58f23a6e.jpg?v=1714474125&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/08aff88cdf0e32561c43238a58f23a6e.jpg?v=1714474125&width=150&format=webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Red", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 10,
      name: "Mayo Crystal Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 16999,
      description: "Elegant mayo crystal bag with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_LPS-WHITE.jpg?v=1729575153&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_LPS-WHITE.jpg?v=1729575153&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0010_LPS-WHITE.jpg?v=1729575153&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Crystal", "Silver"],
      material: "Crystal",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 11,
      name: "Mehndi Floral Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 10999,
      description: "Beautiful mehndi floral bag with traditional design and premium craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0011_LPS-YELLOW.jpg?v=1729575025&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0011_LPS-YELLOW.jpg?v=1729575025&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0011_LPS-YELLOW.jpg?v=1729575025&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pink", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 12,
      name: "Mayo Embroidered Clutch",
      brand: "Insignia",
      category: "Mayo",
      price: 14999,
      description: "Elegant mayo embroidered clutch with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0006_LPS-RED.jpg?v=1729571457&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0006_LPS-RED.jpg?v=1729571457&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0006_LPS-RED.jpg?v=1729571457&width=150&format=webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Cream"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 13,
      name: "Mehndi Vintage Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 15999,
      description: "Beautiful mehndi vintage bag with traditional design and premium craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0015_LPS-Black.jpg?v=1729580368&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0015_LPS-Black.jpg?v=1729580368&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0015_LPS-Black.jpg?v=1729580368&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 14,
      name: "Mayo Pearl Clutch",
      brand: "Insignia",
      category: "Mayo",
      price: 17999,
      description: "Elegant mayo pearl clutch with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/dcd7301fec7106b2790a072cc5331ae3.jpg?v=1714474185&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/dcd7301fec7106b2790a072cc5331ae3.jpg?v=1714474185&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/dcd7301fec7106b2790a072cc5331ae3.jpg?v=1714474185&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 15,
      name: "Mehndi Zari Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 12999,
      description: "Beautiful mehndi zari potli with traditional design and premium craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/b8994e94dc0f579b292c6d0fc8caf6c7.jpg?v=1714378457&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/b8994e94dc0f579b292c6d0fc8caf6c7.jpg?v=1714378457&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/b8994e94dc0f579b292c6d0fc8caf6c7.jpg?v=1714378457&width=150&format=webp"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 16,
      name: "Mayo Embroidered Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 15999,
      description: "Elegant mayo embroidered bag with stunning design and premium quality.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/343e5dedbe46750d60243c977ac1177e.jpg?v=1714474165&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/343e5dedbe46750d60243c977ac1177e.jpg?v=1714474165&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/343e5dedbe46750d60243c977ac1177e.jpg?v=1714474165&width=150&format=webp"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 17,
      name: "Mehndi Classic Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 11999,
      description: "Beautiful mehndi classic bag with traditional design and premium craftsmanship.",
      frontImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/794c6ebc434b371f514d7cec8e5daf74.jpg?v=1714474144&width=150&format=webp",
      backImage: "https://cdn.shopify.com/s/files/1/2337/7003/files/794c6ebc434b371f514d7cec8e5daf74.jpg?v=1714474144&width=150&format=webp",
      images: [
        "https://cdn.shopify.com/s/files/1/2337/7003/files/794c6ebc434b371f514d7cec8e5daf74.jpg?v=1714474144&width=150&format=webp"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Green"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 18,
      name: "Mayo Silk Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 13999,
      description: "Elegant mayo silk bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/3_b9b60123-b955-4c65-b7bd-79f2192eeac0.jpg?v=1776757131&width=750",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_c1c5da64-8ba2-4093-bd48-c942e9c03015.jpg?v=1776757131&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/3_b9b60123-b955-4c65-b7bd-79f2192eeac0.jpg?v=1776757131&width=750",
        "https://insignia.com.pk/cdn/shop/files/2_c1c5da64-8ba2-4093-bd48-c942e9c03015.jpg?v=1776757131&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Silk", "Gold"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 19,
      name: "Mehndi Gold Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 14999,
      description: "Beautiful mehndi gold potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_0db35931-89ba-4507-9d79-d777ee074637.jpg?v=1776159306&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_1ce10833-911d-4114-b0d5-b418233d29c8.jpg?v=1776159308&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_0db35931-89ba-4507-9d79-d777ee074637.jpg?v=1776159306&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_1ce10833-911d-4114-b0d5-b418233d29c8.jpg?v=1776159308&width=1100",
        "https://insignia.com.pk/cdn/shop/files/3_89ab1307-de0b-43cc-b077-fa5727a2c583.jpg?v=1776159306&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 20,
      name: "Mayo Crystal Clutch",
      brand: "Insignia",
      category: "Mayo",
      price: 18999,
      description: "Elegant mayo crystal clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_158317a7-fa04-4491-ac92-372d118448a0.jpg?v=1776068105&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_744a5e36-e1d7-464d-a54f-c92b870da1cd.jpg?v=1776068105&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_158317a7-fa04-4491-ac92-372d118448a0.jpg?v=1776068105&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_744a5e36-e1d7-464d-a54f-c92b870da1cd.jpg?v=1776068105&width=1100",
        "https://insignia.com.pk/cdn/shop/files/3_beec7f56-2d53-41b0-988e-3bffb39f491d.jpg?v=1776068105&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Crystal", "Silver"],
      material: "Crystal",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 21,
      name: "Mehndi Vintage Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 12999,
      description: "Beautiful mehndi vintage potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_c56809d9-e4bf-400d-b625-ae55db47ca69.jpg?v=1776068112&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_dee30aa8-082d-47d7-b89c-c5c25a1f6830.jpg?v=1776068116&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_c56809d9-e4bf-400d-b625-ae55db47ca69.jpg?v=1776068112&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_dee30aa8-082d-47d7-b89c-c5c25a1f6830.jpg?v=1776068116&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_112e4c5f-e9b5-418c-9478-9a880ec4fe78.jpg?v=1776068112&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 22,
      name: "Mayo Embroidered Potli",
      brand: "Insignia",
      category: "Mayo",
      price: 15999,
      description: "Elegant mayo embroidered potli with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_613b893e-e736-4551-b499-32f8ea68389b.jpg?v=1776068408&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_e26fec72-f7ce-48dc-9a87-c4cb3437d000.jpg?v=1776068405&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_613b893e-e736-4551-b499-32f8ea68389b.jpg?v=1776068408&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_e26fec72-f7ce-48dc-9a87-c4cb3437d000.jpg?v=1776068405&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_35aaab0c-7ab5-43ac-93d4-905896ee7871.jpg?v=1776068405&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 23,
      name: "Mehndi Royal Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 16999,
      description: "Beautiful mehndi royal bag with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_ee6cd45d-b845-4071-a4aa-b1927bbbb161.jpg?v=1775732578&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_858d73c7-c343-47ab-8fe2-4829d70d30da.jpg?v=1775732578&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_ee6cd45d-b845-4071-a4aa-b1927bbbb161.jpg?v=1775732578&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_858d73c7-c343-47ab-8fe2-4829d70d30da.jpg?v=1775732578&width=1100",
        "https://insignia.com.pk/cdn/shop/files/4_76dd73fd-fca4-4f25-8743-0b9735a7526f.jpg?v=1775732578&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Royal", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 24,
      name: "Mayo Pearl Potli",
      brand: "Insignia",
      category: "Mayo",
      price: 17999,
      description: "Elegant mayo pearl potli with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_32a02ff6-5f48-4178-843f-64a402f1a7eb.jpg?v=1775732716&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_6412e143-beb6-45bd-8247-a1a1b6971518.jpg?v=1775732716&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_32a02ff6-5f48-4178-843f-64a402f1a7eb.jpg?v=1775732716&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_6412e143-beb6-45bd-8247-a1a1b6971518.jpg?v=1775732716&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_f937ec6a-5fa8-4ce5-a14f-e518b33ea06a.jpg?v=1775732715&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 25,
      name: "Mehndi Silk Bag",
      brand: "Insignia",
      category: "Mehndi",
      price: 11999,
      description: "Beautiful mehndi silk bag with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/3_18bbfd69-6243-45f5-9176-26cfec55e9fb.jpg?v=1766741827&width=750",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_31c84e41-ce2e-4f02-a76b-91dc0969637d.jpg?v=1766741827&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/3_18bbfd69-6243-45f5-9176-26cfec55e9fb.jpg?v=1766741827&width=750",
        "https://insignia.com.pk/cdn/shop/files/2_31c84e41-ce2e-4f02-a76b-91dc0969637d.jpg?v=1766741827&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Silk", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 26,
      name: "Mayo Gold Bag",
      brand: "Insignia",
      category: "Mayo",
      price: 14999,
      description: "Elegant mayo gold bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_974b95c8-40ef-4684-87f3-d55a475baf71.jpg?v=1776068101&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_d95cea7c-8792-412e-9082-58104672caa0.jpg?v=1776068102&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_974b95c8-40ef-4684-87f3-d55a475baf71.jpg?v=1776068101&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_d95cea7c-8792-412e-9082-58104672caa0.jpg?v=1776068102&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_5b518baf-4eeb-4d85-9b3b-69a9abb918ab.jpg?v=1776068102&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 27,
      name: "Mehndi Embroidered Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 13999,
      description: "Beautiful mehndi embroidered potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_f4564856-5c5e-4c3a-a26b-b740ff507d7b.jpg?v=1776068106&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_1fd8ca55-7671-430d-bd10-3156a8d855c1.jpg?v=1776068106&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_f4564856-5c5e-4c3a-a26b-b740ff507d7b.jpg?v=1776068106&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_1fd8ca55-7671-430d-bd10-3156a8d855c1.jpg?v=1776068106&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_7969334f-d7b6-4b23-91b8-e3b4ab6077d3.jpg?v=1776068106&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Red", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 28,
      name: "Mayo Vintage Clutch",
      brand: "Insignia",
      category: "Mayo",
      price: 15999,
      description: "Elegant mayo vintage clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_2815dc9c-4d63-4c57-bfa0-225344af385d.jpg?v=1776068432&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_e026e725-c9b0-4e9e-94a3-9db156b361f7.jpg?v=1776068432&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_2815dc9c-4d63-4c57-bfa0-225344af385d.jpg?v=1776068432&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_e026e725-c9b0-4e9e-94a3-9db156b361f7.jpg?v=1776068432&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_2ee486c5-5110-4c40-bc28-a12ba24af796.jpg?v=1776068432&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 29,
      name: "Mehndi Royal Potli",
      brand: "Insignia",
      category: "Mehndi",
      price: 16999,
      description: "Beautiful mehndi royal potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_9c4a9600-f09c-4991-af4a-f687f1089775.jpg?v=1776068450&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_896b6ef0-eff3-45a7-8d87-32267ebb68b6.jpg?v=1776068450&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_9c4a9600-f09c-4991-af4a-f687f1089775.jpg?v=1776068450&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_896b6ef0-eff3-45a7-8d87-32267ebb68b6.jpg?v=1776068450&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_2f99474e-fac4-4533-9b0e-e3fc6592951c.jpg?v=1776068450&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Royal", "Gold"],
      material: "Silk",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 30,
      name: "Mayo Embroidered Clutch",
      brand: "Insignia",
      category: "Mayo",
      price: 14999,
      description: "Elegant mayo embroidered clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_08820856-016f-4dfe-98ea-f27749b1867e.jpg?v=1775732581&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_93566ee8-671c-4f24-be9c-3f9b51176695.jpg?v=1775732581&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_08820856-016f-4dfe-98ea-f27749b1867e.jpg?v=1775732581&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_93566ee8-671c-4f24-be9c-3f9b51176695.jpg?v=1775732581&width=823",
        "https://insignia.com.pk/cdn/shop/files/4_cec99acf-b124-4476-a284-7731968e9894.jpg?v=1775732581&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },

    // SECTION 2: BARAT BAGS (13 Items)
    {
      id: 31,
      name: "Barat Royal Potli",
      brand: "Insignia",
      category: "Barat",
      price: 22999,
      description: "Royal barat potli bag with magnificent design and traditional craftsmanship. Perfect for barat ceremony.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_093e667f-ae12-42f2-ae68-4722aa692253.jpg?v=1775732697&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_a84d9ed2-217c-43c2-8e84-cef55bf08ce3.jpg?v=1775732697&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_093e667f-ae12-42f2-ae68-4722aa692253.jpg?v=1775732697&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_a84d9ed2-217c-43c2-8e84-cef55bf08ce3.jpg?v=1775732697&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_4c2108c5-c2db-4aa0-87fb-52719e3c9bc9.jpg?v=1775732697&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 32,
      name: "Barat Embroidered Bag",
      brand: "Insignia",
      category: "Barat",
      price: 24999,
      description: "Beautiful barat embroidered bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_2201e39f-94ee-4d97-9812-f08e79cf88bf.jpg?v=1772823871&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_7dffaa7c-1d99-4177-87ed-66044cb83336.jpg?v=1772823874&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_2201e39f-94ee-4d97-9812-f08e79cf88bf.jpg?v=1772823871&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_7dffaa7c-1d99-4177-87ed-66044cb83336.jpg?v=1772823874&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_50867b8a-8fed-4c26-af98-a75bd90fcd0c.jpg?v=1772823871&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 33,
      name: "Barat Magenta Bag",
      brand: "Insignia",
      category: "Barat",
      price: 19999,
      description: "Stunning barat magenta bag with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_6d432ea1-0844-470d-8991-6b7736476349.jpg?v=1772823921&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_45c6a5e4-8df4-4d67-9280-3fa90811ed25.jpg?v=1772823921&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_6d432ea1-0844-470d-8991-6b7736476349.jpg?v=1772823921&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_45c6a5e4-8df4-4d67-9280-3fa90811ed25.jpg?v=1772823921&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_81f5c61e-1e49-42d6-a8d3-e6e02a1f09a5.jpg?v=1772823920&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Magenta", "Gold"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 34,
      name: "Barat Pink Bag",
      brand: "Insignia",
      category: "Barat",
      price: 20999,
      description: "Beautiful barat pink bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_cdc86341-1129-4545-8a49-88945808f042.jpg?v=1772823923&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_7da8c264-eb41-47d3-aa29-3ad91710184e.jpg?v=1772823923&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_cdc86341-1129-4545-8a49-88945808f042.jpg?v=1772823923&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_7da8c264-eb41-47d3-aa29-3ad91710184e.jpg?v=1772823923&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_520034d6-e31e-4471-8ce9-8bb7e8c3ffd8.jpg?v=1772823923&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Pink", "Gold"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 35,
      name: "Barat Designer Bag",
      brand: "Insignia",
      category: "Barat",
      price: 26999,
      description: "Stunning barat designer bag with unique embroidery and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_bc151bf6-3f63-4be9-96ea-f4de7e575cd0.jpg?v=1767178796&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_369cb8d8-88a4-4fe1-b1b3-1abe4d550452.jpg?v=1767178796&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_bc151bf6-3f63-4be9-96ea-f4de7e575cd0.jpg?v=1767178796&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_369cb8d8-88a4-4fe1-b1b3-1abe4d550452.jpg?v=1767178796&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_16eaaeb1-6b6c-4c2f-9e7b-803b9a998acd.jpg?v=1767178796&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 36,
      name: "Barat Gold Bag",
      brand: "Insignia",
      category: "Barat",
      price: 23999,
      description: "Elegant barat gold bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_866ab36b-a55d-4db3-b1dc-6afceee06e5c.jpg?v=1767178834&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_b8888545-e5c5-4018-8255-814b73b5d83b.jpg?v=1767178834&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_866ab36b-a55d-4db3-b1dc-6afceee06e5c.jpg?v=1767178834&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_b8888545-e5c5-4018-8255-814b73b5d83b.jpg?v=1767178834&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_8c27d328-3a3f-4a3a-926b-e7678c81992e.jpg?v=1767178834&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 37,
      name: "Barat Royal Clutch",
      brand: "Insignia",
      category: "Barat",
      price: 25999,
      description: "Royal barat clutch with magnificent design and traditional craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_267f5b05-8853-44e1-8546-5a1510223a37.jpg?v=1767179503&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_4a4e6342-1535-4422-ae79-7918e5653eb2.jpg?v=1767179503&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_267f5b05-8853-44e1-8546-5a1510223a37.jpg?v=1767179503&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_4a4e6342-1535-4422-ae79-7918e5653eb2.jpg?v=1767179503&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_52a491f9-3e7b-42a9-84fe-513ddd440610.jpg?v=1767179503&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 38,
      name: "Barat Pearl Bag",
      brand: "Insignia",
      category: "Barat",
      price: 21999,
      description: "Beautiful barat pearl bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_f44e9075-2c07-47cc-8d4e-07dc9df7ab4a.jpg?v=1767179691&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_5cd9ec9e-f38a-4687-9b12-8cc980e679a5.jpg?v=1767179691&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_f44e9075-2c07-47cc-8d4e-07dc9df7ab4a.jpg?v=1767179691&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_5cd9ec9e-f38a-4687-9b12-8cc980e679a5.jpg?v=1767179691&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_c26f49a8-c0a8-4e8f-8ef3-4e63fe9e3c92.jpg?v=1767179691&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 39,
      name: "Barat Embroidered Clutch",
      brand: "Insignia",
      category: "Barat",
      price: 23999,
      description: "Stunning barat embroidered clutch with unique design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/2_4ca579aa-3538-4bd8-93a1-71999fb9333a.jpg?v=1766742404&width=750",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_4ca579aa-3538-4bd8-93a1-71999fb9333a.jpg?v=1766742404&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/2_4ca579aa-3538-4bd8-93a1-71999fb9333a.jpg?v=1766742404&width=750",
        "https://insignia.com.pk/cdn/shop/files/3_59a70ff1-9ae3-4dee-9f3a-32e2035e73e1.jpg?v=1766742404&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 40,
      name: "Barat Vintage Potli",
      brand: "Insignia",
      category: "Barat",
      price: 25999,
      description: "Beautiful barat vintage potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_75c2a333-5a73-4aa9-9962-d180827b8737.jpg?v=1760358339&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/3_96226ee6-dffd-4249-b04d-ec992b1841c9.jpg?v=1760358339&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_75c2a333-5a73-4aa9-9962-d180827b8737.jpg?v=1760358339&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_96226ee6-dffd-4249-b04d-ec992b1841c9.jpg?v=1760358339&width=823",
        "https://insignia.com.pk/cdn/shop/files/5_6574dc9c-8902-40d3-8331-83a66c602500.jpg?v=1760358339&width=823",
        "https://insignia.com.pk/cdn/shop/files/6_edd1b7ca-a526-4279-bd2b-8e1b8e9dd0e1.jpg?v=1760358339&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 41,
      name: "Barat Crystal Bag",
      brand: "Insignia",
      category: "Barat",
      price: 27999,
      description: "Elegant barat crystal bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_0db35931-89ba-4507-9d79-d777ee074637.jpg?v=1776159306&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_1ce10833-911d-4114-b0d5-b418233d29c8.jpg?v=1776159308&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_0db35931-89ba-4507-9d79-d777ee074637.jpg?v=1776159306&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_1ce10833-911d-4114-b0d5-b418233d29c8.jpg?v=1776159308&width=1100",
        "https://insignia.com.pk/cdn/shop/files/3_89ab1307-de0b-43cc-b077-fa5727a2c583.jpg?v=1776159306&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Crystal", "Gold"],
      material: "Crystal",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 42,
      name: "Barat Royal Bag",
      brand: "Insignia",
      category: "Barat",
      price: 29999,
      description: "Royal barat bag with magnificent design and traditional craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_158317a7-fa04-4491-ac92-372d118448a0.jpg?v=1776068105&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_744a5e36-e1d7-464d-a54f-c92b870da1cd.jpg?v=1776068105&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_158317a7-fa04-4491-ac92-372d118448a0.jpg?v=1776068105&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_744a5e36-e1d7-464d-a54f-c92b870da1cd.jpg?v=1776068105&width=1100",
        "https://insignia.com.pk/cdn/shop/files/3_beec7f56-2d53-41b0-988e-3bffb39f491d.jpg?v=1776068105&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 43,
      name: "Barat Designer Potli",
      brand: "Insignia",
      category: "Barat",
      price: 26999,
      description: "Stunning barat designer potli with unique embroidery and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_c56809d9-e4bf-400d-b625-ae55db47ca69.jpg?v=1776068112&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_dee30aa8-082d-47d7-b89c-c5c25a1f6830.jpg?v=1776068116&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_c56809d9-e4bf-400d-b625-ae55db47ca69.jpg?v=1776068112&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_dee30aa8-082d-47d7-b89c-c5c25a1f6830.jpg?v=1776068116&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_112e4c5f-e9b5-418c-9478-9a880ec4fe78.jpg?v=1776068112&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },

    // SECTION 3: WALIMA BAGS (15 Items)
    {
      id: 44,
      name: "Walima Pearl Bag",
      brand: "Insignia",
      category: "Walima",
      price: 22999,
      description: "Elegant walima pearl bag with beautiful design and premium craftsmanship. Perfect for walima.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_613b893e-e736-4551-b499-32f8ea68389b.jpg?v=1776068408&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_e26fec72-f7ce-48dc-9a87-c4cb3437d000.jpg?v=1776068405&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_613b893e-e736-4551-b499-32f8ea68389b.jpg?v=1776068408&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_e26fec72-f7ce-48dc-9a87-c4cb3437d000.jpg?v=1776068405&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_35aaab0c-7ab5-43ac-93d4-905896ee7871.jpg?v=1776068405&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 45,
      name: "Walima Gold Bag",
      brand: "Insignia",
      category: "Walima",
      price: 24999,
      description: "Beautiful walima gold bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_ee6cd45d-b845-4071-a4aa-b1927bbbb161.jpg?v=1775732578&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_858d73c7-c343-47ab-8fe2-4829d70d30da.jpg?v=1775732578&width=1100",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_ee6cd45d-b845-4071-a4aa-b1927bbbb161.jpg?v=1775732578&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_858d73c7-c343-47ab-8fe2-4829d70d30da.jpg?v=1775732578&width=1100",
        "https://insignia.com.pk/cdn/shop/files/4_76dd73fd-fca4-4f25-8743-0b9735a7526f.jpg?v=1775732578&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "White"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 46,
      name: "Walima Royal Clutch",
      brand: "Insignia",
      category: "Walima",
      price: 25999,
      description: "Royal walima clutch with magnificent design and traditional craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_32a02ff6-5f48-4178-843f-64a402f1a7eb.jpg?v=1775732716&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_6412e143-beb6-45bd-8247-a1a1b6971518.jpg?v=1775732716&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_32a02ff6-5f48-4178-843f-64a402f1a7eb.jpg?v=1775732716&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_6412e143-beb6-45bd-8247-a1a1b6971518.jpg?v=1775732716&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_f937ec6a-5fa8-4ce5-a14f-e518b33ea06a.jpg?v=1775732715&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 47,
      name: "Walima Embroidered Bag",
      brand: "Insignia",
      category: "Walima",
      price: 23999,
      description: "Beautiful walima embroidered bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/3_18bbfd69-6243-45f5-9176-26cfec55e9fb.jpg?v=1766741827&width=750",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_31c84e41-ce2e-4f02-a76b-91dc0969637d.jpg?v=1766741827&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/3_18bbfd69-6243-45f5-9176-26cfec55e9fb.jpg?v=1766741827&width=750",
        "https://insignia.com.pk/cdn/shop/files/2_31c84e41-ce2e-4f02-a76b-91dc0969637d.jpg?v=1766741827&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 48,
      name: "Walima Vintage Potli",
      brand: "Insignia",
      category: "Walima",
      price: 26999,
      description: "Beautiful walima vintage potli with traditional design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_974b95c8-40ef-4684-87f3-d55a475baf71.jpg?v=1776068101&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_d95cea7c-8792-412e-9082-58104672caa0.jpg?v=1776068102&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_974b95c8-40ef-4684-87f3-d55a475baf71.jpg?v=1776068101&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_d95cea7c-8792-412e-9082-58104672caa0.jpg?v=1776068102&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_5b518baf-4eeb-4d85-9b3b-69a9abb918ab.jpg?v=1776068102&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 49,
      name: "Walima Crystal Clutch",
      brand: "Insignia",
      category: "Walima",
      price: 28999,
      description: "Elegant walima crystal clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_f4564856-5c5e-4c3a-a26b-b740ff507d7b.jpg?v=1776068106&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_1fd8ca55-7671-430d-bd10-3156a8d855c1.jpg?v=1776068106&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_f4564856-5c5e-4c3a-a26b-b740ff507d7b.jpg?v=1776068106&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_1fd8ca55-7671-430d-bd10-3156a8d855c1.jpg?v=1776068106&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_7969334f-d7b6-4b23-91b8-e3b4ab6077d3.jpg?v=1776068106&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Crystal", "Silver"],
      material: "Crystal",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 50,
      name: "Walima Silk Bag",
      brand: "Insignia",
      category: "Walima",
      price: 21999,
      description: "Beautiful walima silk bag with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_2815dc9c-4d63-4c57-bfa0-225344af385d.jpg?v=1776068432&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_e026e725-c9b0-4e9e-94a3-9db156b361f7.jpg?v=1776068432&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_2815dc9c-4d63-4c57-bfa0-225344af385d.jpg?v=1776068432&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_e026e725-c9b0-4e9e-94a3-9db156b361f7.jpg?v=1776068432&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_2ee486c5-5110-4c40-bc28-a12ba24af796.jpg?v=1776068432&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Silk", "Gold"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 51,
      name: "Walima Pearl Potli",
      brand: "Insignia",
      category: "Walima",
      price: 24999,
      description: "Elegant walima pearl potli with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_9c4a9600-f09c-4991-af4a-f687f1089775.jpg?v=1776068450&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_896b6ef0-eff3-45a7-8d87-32267ebb68b6.jpg?v=1776068450&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_9c4a9600-f09c-4991-af4a-f687f1089775.jpg?v=1776068450&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_896b6ef0-eff3-45a7-8d87-32267ebb68b6.jpg?v=1776068450&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_2f99474e-fac4-4533-9b0e-e3fc6592951c.jpg?v=1776068450&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Pearl", "Gold"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 52,
      name: "Walima Gold Clutch",
      brand: "Insignia",
      category: "Walima",
      price: 26999,
      description: "Beautiful walima gold clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_08820856-016f-4dfe-98ea-f27749b1867e.jpg?v=1775732581&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_93566ee8-671c-4f24-be9c-3f9b51176695.jpg?v=1775732581&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_08820856-016f-4dfe-98ea-f27749b1867e.jpg?v=1775732581&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_93566ee8-671c-4f24-be9c-3f9b51176695.jpg?v=1775732581&width=823",
        "https://insignia.com.pk/cdn/shop/files/4_cec99acf-b124-4476-a284-7731968e9894.jpg?v=1775732581&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 53,
      name: "Walima Embroidered Potli",
      brand: "Insignia",
      category: "Walima",
      price: 23999,
      description: "Stunning walima embroidered potli with unique design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_093e667f-ae12-42f2-ae68-4722aa692253.jpg?v=1775732697&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_a84d9ed2-217c-43c2-8e84-cef55bf08ce3.jpg?v=1775732697&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_093e667f-ae12-42f2-ae68-4722aa692253.jpg?v=1775732697&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_a84d9ed2-217c-43c2-8e84-cef55bf08ce3.jpg?v=1775732697&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_4c2108c5-c2db-4aa0-87fb-52719e3c9bc9.jpg?v=1775732697&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 54,
      name: "Walima Royal Bag",
      brand: "Insignia",
      category: "Walima",
      price: 28999,
      description: "Royal walima bag with magnificent design and traditional craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_2201e39f-94ee-4d97-9812-f08e79cf88bf.jpg?v=1772823871&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_7dffaa7c-1d99-4177-87ed-66044cb83336.jpg?v=1772823874&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_2201e39f-94ee-4d97-9812-f08e79cf88bf.jpg?v=1772823871&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_7dffaa7c-1d99-4177-87ed-66044cb83336.jpg?v=1772823874&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_50867b8a-8fed-4c26-af98-a75bd90fcd0c.jpg?v=1772823871&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 55,
      name: "Walima Designer Clutch",
      brand: "Insignia",
      category: "Walima",
      price: 25999,
      description: "Beautiful walima designer clutch with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_6d432ea1-0844-470d-8991-6b7736476349.jpg?v=1772823921&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_45c6a5e4-8df4-4d67-9280-3fa90811ed25.jpg?v=1772823921&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_6d432ea1-0844-470d-8991-6b7736476349.jpg?v=1772823921&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_45c6a5e4-8df4-4d67-9280-3fa90811ed25.jpg?v=1772823921&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_81f5c61e-1e49-42d6-a8d3-e6e02a1f09a5.jpg?v=1772823920&width=823"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "White"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 56,
      name: "Walima Vintage Bag",
      brand: "Insignia",
      category: "Walima",
      price: 27999,
      description: "Elegant walima vintage bag with beautiful design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_cdc86341-1129-4545-8a49-88945808f042.jpg?v=1772823923&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_7da8c264-eb41-47d3-aa29-3ad91710184e.jpg?v=1772823923&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_cdc86341-1129-4545-8a49-88945808f042.jpg?v=1772823923&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_7da8c264-eb41-47d3-aa29-3ad91710184e.jpg?v=1772823923&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_520034d6-e31e-4471-8ce9-8bb7e8c3ffd8.jpg?v=1772823923&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Vintage", "Gold"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 57,
      name: "Walima Gold Potli",
      brand: "Insignia",
      category: "Walima",
      price: 24999,
      description: "Beautiful walima gold potli with stunning design and premium quality.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_bc151bf6-3f63-4be9-96ea-f4de7e575cd0.jpg?v=1767178796&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_369cb8d8-88a4-4fe1-b1b3-1abe4d550452.jpg?v=1767178796&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_bc151bf6-3f63-4be9-96ea-f4de7e575cd0.jpg?v=1767178796&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_369cb8d8-88a4-4fe1-b1b3-1abe4d550452.jpg?v=1767178796&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_16eaaeb1-6b6c-4c2f-9e7b-803b9a998acd.jpg?v=1767178796&width=823"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 58,
      name: "Walima Embroidered Clutch",
      brand: "Insignia",
      category: "Walima",
      price: 26999,
      description: "Stunning walima embroidered clutch with unique design and premium craftsmanship.",
      frontImage: "https://insignia.com.pk/cdn/shop/files/1_866ab36b-a55d-4db3-b1dc-6afceee06e5c.jpg?v=1767178834&width=823",
      backImage: "https://insignia.com.pk/cdn/shop/files/2_b8888545-e5c5-4018-8255-814b73b5d83b.jpg?v=1767178834&width=823",
      images: [
        "https://insignia.com.pk/cdn/shop/files/1_866ab36b-a55d-4db3-b1dc-6afceee06e5c.jpg?v=1767178834&width=823",
        "https://insignia.com.pk/cdn/shop/files/2_b8888545-e5c5-4018-8255-814b73b5d83b.jpg?v=1767178834&width=823",
        "https://insignia.com.pk/cdn/shop/files/3_8c27d328-3a3f-4a3a-926b-e7678c81992e.jpg?v=1767178834&width=823"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Silk",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
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
      size: "One Size"
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
                  alt={`Bags Collection ${index + 1}`}
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
                Bags Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Luxury</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-gold-300 to-gold-500">
                Bridal Bags
              </span>
            </h1>

            <p className="text-white/90 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Complete your bridal look with our exquisite collection of handcrafted luxury bags and pouches
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Premium Quality
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Handcrafted
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 58 Exclusive Designs
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                Price  10,000 - 30,000 PKR
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
              Bridal Bags & Pouches
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Each piece is a masterpiece of craftsmanship and elegance
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
                {cat === "all" ? "All Bags" : cat}
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
                transition={{ duration: 0.5, delay: index * 0.03 }}
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
                      product.badge === 'Limited Edition' ? 'bg-purple-500 text-white' :
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
                                         color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                         color.toLowerCase() === 'champagne' ? '#F7E7CE' :
                                         color.toLowerCase() === 'pearl' ? '#F5F5F5' :
                                         color.toLowerCase() === 'white' ? '#FFFFFF' :
                                         color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                         color.toLowerCase() === 'vintage' ? '#8B7355' :
                                         color.toLowerCase() === 'royal' ? '#2C3E50' :
                                         color.toLowerCase() === 'crystal' ? '#E0FFFF' :
                                         color.toLowerCase() === 'magenta' ? '#FF00FF' :
                                         color.toLowerCase() === 'silk' ? '#F5E6D3' :
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
                  
                  {/* Material & Occasion */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-pink-100 text-rose-600 text-[10px] rounded">
                      {product.material}
                    </span>
                    <span className="px-2 py-0.5 bg-pink-100 text-rose-600 text-[10px] rounded">
                      {product.occasion}
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
                          <span className="text-gray-500">Size:</span>
                          <span className="text-gray-700 ml-1">{selectedProduct.sizes.join(' | ')}</span>
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