"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function JewelryPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // ===== HERO IMAGES (10 Images for Moving Slider) =====
  const heroImages = [
    "https://nayabjewellery.com/cdn/shop/files/Untitled-1-Recovered-Recovered-Recovered.jpg?v=1757096651&width=360",
    "https://nayabjewellery.com/cdn/shop/files/3_ed38240a-4c98-4583-a8ec-c85536519ce9.jpg?v=1770628276&width=360",
    "https://nayabjewellery.com/cdn/shop/files/ADF68A87-C5E4-4A30-AE5C-E132B61B5F4F.jpg?v=1776551233&width=360",
    "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificat-wide-gilded-bridal-set-31125593-45870620606769.webp?v=1779956414&width=380",
    "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-royal-intricate-crystal-bridal-set-31125283-44625941266737.webp?v=1779956233&width=380",
    "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-eminent-wide-gilded-bridal-set-31125203-45961147711793.webp?v=1779956262&width=380",
    "https://zeesy.pk/cdn/shop/files/bridal-set-silver-green-asma-s-bridal-sets-3111773-39362220589361.jpg?v=1772083116&width=380",
    "https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-momina-bridal-sets-3111713-45369935659313.webp?v=1772096893&width=380",
    "https://millilegacy.com/cdn/shop/products/99_0590dda7-8fdd-48ca-9744-601b87ba4def.png?v=1752434609&width=330",
    "https://millilegacy.com/cdn/shop/products/GOTTA-gulubnad-set-8-324500.jpg?v=1752434648&width=330"
  ];

  // ============================================================
  // JEWELRY PRODUCTS
  // ============================================================
  const products = [
    // SECTION 1: MEHNDI & MAYO JEWELRY (16 Items)
    {
      id: 1,
      name: "Mehndi Gajra Set",
      brand: "Nayab Jewellery",
      category: "Mehndi",
      price: 12999,
      description: "Beautiful mehndi gajra set with floral design and traditional craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1-Recovered-Recovered-Recovered.jpg?v=1757096651&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1-Recovered-Recovered-Recovered.jpg?v=1757096651&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Untitled-1-Recovered-Recovered-Recovered.jpg?v=1757096651&width=360"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red", "Green"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 2,
      name: "Mayo Jewelry Set",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 15999,
      description: "Elegant mayo jewelry set with delicate design and beautiful craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1ggj_a3b640e6-d654-462c-89f1-9eb05cdeb88e.jpg?v=1755289802&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1ggj_a3b640e6-d654-462c-89f1-9eb05cdeb88e.jpg?v=1755289802&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Untitled-1ggj_a3b640e6-d654-462c-89f1-9eb05cdeb88e.jpg?v=1755289802&width=360"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pearl"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 3,
      name: "Mehndi Necklace Set",
      brand: "Nayab Jewellery",
      category: "Mehndi",
      price: 18999,
      description: "Stunning mehndi necklace set with intricate design and traditional craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/3_ed38240a-4c98-4583-a8ec-c85536519ce9.jpg?v=1770628276&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/3_ed38240a-4c98-4583-a8ec-c85536519ce9.jpg?v=1770628276&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/3_ed38240a-4c98-4583-a8ec-c85536519ce9.jpg?v=1770628276&width=360"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Pink"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 4,
      name: "Mayo Bridal Set",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 22999,
      description: "Beautiful mayo bridal set with elegant design and premium craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1dfd.jpg?v=1755290079&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1dfd.jpg?v=1755290079&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Untitled-1dfd.jpg?v=1755290079&width=360"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Cream"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 5,
      name: "Mehndi Choker Set",
      brand: "Nayab Jewellery",
      category: "Mehndi",
      price: 16999,
      description: "Stunning mehndi choker set with beautiful design and traditional craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/ADF68A87-C5E4-4A30-AE5C-E132B61B5F4F.jpg?v=1776551233&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/ADF68A87-C5E4-4A30-AE5C-E132B61B5F4F.jpg?v=1776551233&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/ADF68A87-C5E4-4A30-AE5C-E132B61B5F4F.jpg?v=1776551233&width=360"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 6,
      name: "Mayo Necklace Set",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 19999,
      description: "Elegant mayo necklace set with delicate design and premium quality.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/2_6092ef68-fbd9-43e9-8909-86fe265f010f.jpg?v=1776551217&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/2_6092ef68-fbd9-43e9-8909-86fe265f010f.jpg?v=1776551217&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/2_6092ef68-fbd9-43e9-8909-86fe265f010f.jpg?v=1776551217&width=360"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Pink"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 7,
      name: "Mehndi Gajra Pair",
      brand: "Nayab Jewellery",
      category: "Mehndi",
      price: 11999,
      description: "Beautiful mehndi gajra pair with floral design and traditional craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/4_1ab63eb9-1af3-41e1-99e8-4bab205e7bca.jpg?v=1756817032&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/4_1ab63eb9-1af3-41e1-99e8-4bab205e7bca.jpg?v=1756817032&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/4_1ab63eb9-1af3-41e1-99e8-4bab205e7bca.jpg?v=1756817032&width=360"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 8,
      name: "Mayo Jewelry Collection",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 17999,
      description: "Elegant mayo jewelry collection with stunning design and premium quality.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/4_fc696163-107a-4b49-af0a-f01d9b34e28c.jpg?v=1768169550&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/4_fc696163-107a-4b49-af0a-f01d9b34e28c.jpg?v=1768169550&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/4_fc696163-107a-4b49-af0a-f01d9b34e28c.jpg?v=1768169550&width=360"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Rose"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 9,
      name: "Mehndi Maya Set",
      brand: "Nayab Jewellery",
      category: "Mehndi",
      price: 14999,
      description: "Beautiful mehndi maya set with traditional design and premium craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Untitled-1_64d6f609-9503-45fe-8994-3767f5a54275.jpg?v=1756058271&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/6_ad908f0f-a0f8-4e87-919d-eb47e2a3846a.jpg?v=1750333955&width=360",
      images: [
        "https://nayabjewellery.com/cdn/shop/files/Untitled-1_64d6f609-9503-45fe-8994-3767f5a54275.jpg?v=1756058271&width=360",
        "https://nayabjewellery.com/cdn/shop/files/6_ad908f0f-a0f8-4e87-919d-eb47e2a3846a.jpg?v=1750333955&width=360"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Red", "Green"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 10,
      name: "Mehndi Mayo Gajra",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 9999,
      description: "Beautiful mehndi mayo gajra set with floral design and traditional craftsmanship.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-Gajra-_Pair_-2228-Nayab-Jewellery-20112794.jpg?v=1735493815&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-Gajra-_Pair_-2228-Nayab-Jewellery-20112794.jpg?v=1735493815&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-Gajra-_Pair_-2228-Nayab-Jewellery-20112794.jpg?v=1735493815&width=360"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Pink"],
      material: "Gold Plated",
      occasion: "Mehndi & Mayo",
      sizes: ["One Size"]
    },
    {
      id: 11,
      name: "Mehndi Mayo 5-Piece Set",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 24999,
      description: "Complete mehndi mayo 5-piece jewelry set with stunning design and premium quality.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-5-pcs-set-2227-Nayab-Jewellery-20112180.jpg?v=1755445160&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-5-pcs-set-2227-Nayab-Jewellery-20112180.jpg?v=1755445160&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Mehndi-Mayo-5-pcs-set-2227-Nayab-Jewellery-20112180.jpg?v=1755445160&width=360"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red", "Green"],
      material: "Gold Plated",
      occasion: "Mehndi & Mayo",
      sizes: ["One Size"]
    },
    {
      id: 12,
      name: "Cubic Zirconia Necklace",
      brand: "Nayab Jewellery",
      category: "Mayo",
      price: 18999,
      description: "Elegant cubic zirconia necklace set with stunning design and premium quality.",
      frontImage: "https://nayabjewellery.com/cdn/shop/files/Cubic-Zerconia-Necklace-set-NJ-1810-Nayab-Jewellery-19934988.jpg?v=1749074359&width=360",
      backImage: "https://nayabjewellery.com/cdn/shop/files/Cubic-Zerconia-Necklace-set-NJ-1810-Nayab-Jewellery-19934988.jpg?v=1749074359&width=360",
      images: ["https://nayabjewellery.com/cdn/shop/files/Cubic-Zerconia-Necklace-set-NJ-1810-Nayab-Jewellery-19934988.jpg?v=1749074359&width=360"],
      badge: "Premium",
      rating: 5,
      colors: ["Silver", "Crystal"],
      material: "Cubic Zirconia",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 13,
      name: "Millilegacy Jewelry Set",
      brand: "Millilegacy",
      category: "Mayo",
      price: 16999,
      description: "Beautiful millilegacy jewelry set with elegant design and premium quality.",
      frontImage: "https://millilegacy.com/cdn/shop/files/WhatsAppImage2024-11-02at8.18.18PM.jpg?v=1752429817&width=800",
      backImage: "https://millilegacy.com/cdn/shop/files/WhatsAppImage2024-11-02at8.18.18PM.jpg?v=1752429817&width=800",
      images: ["https://millilegacy.com/cdn/shop/files/WhatsAppImage2024-11-02at8.18.18PM.jpg?v=1752429817&width=800"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Pearl"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 14,
      name: "Millilegacy Necklace",
      brand: "Millilegacy",
      category: "Mehndi",
      price: 13999,
      description: "Stunning millilegacy necklace set with traditional design and premium craftsmanship.",
      frontImage: "https://millilegacy.com/cdn/shop/products/99_0590dda7-8fdd-48ca-9744-601b87ba4def.png?v=1752434609&width=330",
      backImage: "https://millilegacy.com/cdn/shop/products/99_0590dda7-8fdd-48ca-9744-601b87ba4def.png?v=1752434609&width=330",
      images: ["https://millilegacy.com/cdn/shop/products/99_0590dda7-8fdd-48ca-9744-601b87ba4def.png?v=1752434609&width=330"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 15,
      name: "Gotta Gulubnad Set",
      brand: "Millilegacy",
      category: "Mehndi",
      price: 10999,
      description: "Beautiful gotta gulubnad set with traditional design and premium quality.",
      frontImage: "https://millilegacy.com/cdn/shop/products/GOTTA-gulubnad-set-8-324500.jpg?v=1752434648&width=330",
      backImage: "https://millilegacy.com/cdn/shop/products/GOTTA-gulubnad-set-8-324500.jpg?v=1752434648&width=330",
      images: ["https://millilegacy.com/cdn/shop/products/GOTTA-gulubnad-set-8-324500.jpg?v=1752434648&width=330"],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Mehndi Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 16,
      name: "Minimalist Moodboard Set",
      brand: "Millilegacy",
      category: "Mayo",
      price: 12999,
      description: "Elegant minimalist moodboard jewelry set with modern design and premium quality.",
      frontImage: "https://millilegacy.com/cdn/shop/files/MinimalistAestheticMoodboardPhotoCollage_2.jpg?v=1752433861&width=400",
      backImage: "https://millilegacy.com/cdn/shop/files/MinimalistAestheticMoodboardPhotoCollage_2.jpg?v=1752433861&width=400",
      images: ["https://millilegacy.com/cdn/shop/files/MinimalistAestheticMoodboardPhotoCollage_2.jpg?v=1752433861&width=400"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "White"],
      material: "Gold Plated",
      occasion: "Mayo Ceremony",
      sizes: ["One Size"]
    },
    // SECTION 2: BARAT JEWELRY (12 Items)
    {
      id: 17,
      name: "Golden Red Magnificat Set",
      brand: "Zeesy",
      category: "Barat",
      price: 38999,
      description: "Royal golden red bridal set with magnificent design and traditional craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificat-wide-gilded-bridal-set-31125593-45870620606769.webp?v=1779956414&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificat-wide-gilded-bridal-set-31125593-45870620606769.webp?v=1779956414&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificat-wide-gilded-bridal-set-31125593-45870620606769.webp?v=1779956414&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 18,
      name: "Golden Pearl Royal Set",
      brand: "Zeesy",
      category: "Barat",
      price: 42999,
      description: "Exquisite golden pearl royal bridal set with intricate crystal design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-royal-intricate-crystal-bridal-set-31125283-44625941266737.webp?v=1779956233&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-royal-intricate-crystal-bridal-set-31125283-44625941266737.webp?v=1779956233&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-royal-intricate-crystal-bridal-set-31125283-44625941266737.webp?v=1779956233&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Pearl"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 19,
      name: "Artisan Elaborate Set",
      brand: "Zeesy",
      category: "Barat",
      price: 45999,
      description: "Stunning artisan elaborate bridal set with golden pearl design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-artisan-elaborate-bridal-set-31125233-44561838899505.webp?v=1779956239&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-artisan-elaborate-bridal-set-31125233-44561838899505.webp?v=1779956239&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-artisan-elaborate-bridal-set-31125233-44561838899505.webp?v=1779956239&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pearl"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 20,
      name: "Golden Green Eminent Set",
      brand: "Zeesy",
      category: "Barat",
      price: 40999,
      description: "Beautiful golden green eminent bridal set with wide gilded design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-eminent-wide-gilded-bridal-set-31125203-45961147711793.webp?v=1779956262&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-eminent-wide-gilded-bridal-set-31125203-45961147711793.webp?v=1779956262&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-eminent-wide-gilded-bridal-set-31125203-45961147711793.webp?v=1779956262&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 21,
      name: "Red Rich Bold Set",
      brand: "Zeesy",
      category: "Barat",
      price: 35999,
      description: "Stunning red rich bold bridal set with hand-sculpt design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-bold-hand-sculpt-bridal-set-31125163-44625504370993.webp?v=1779956250&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-bold-hand-sculpt-bridal-set-31125163-44625504370993.webp?v=1779956250&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-bold-hand-sculpt-bridal-set-31125163-44625504370993.webp?v=1779956250&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 22,
      name: "Golden Champagne Precious Set",
      brand: "Zeesy",
      category: "Barat",
      price: 47999,
      description: "Elegant golden champagne bridal set with precious motif design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-precious-moitif-ornate-bridal-set-31125113-44625787617585.webp?v=1779956259&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-precious-moitif-ornate-bridal-set-31125113-44625787617585.webp?v=1779956259&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-precious-moitif-ornate-bridal-set-31125113-44625787617585.webp?v=1779956259&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Champagne"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 23,
      name: "Red Sentimental Crystal Set",
      brand: "Zeesy",
      category: "Barat",
      price: 37999,
      description: "Beautiful red sentimental bridal set with crystal design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-sentimental-crystal-bridal-set-31125023-44625465016625.webp?v=1779956256&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-sentimental-crystal-bridal-set-31125023-44625465016625.webp?v=1779956256&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-rich-sentimental-crystal-bridal-set-31125023-44625465016625.webp?v=1779956256&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 24,
      name: "Red Eminent Bold Set",
      brand: "Zeesy",
      category: "Barat",
      price: 41999,
      description: "Stunning red eminent bold bridal set with crystal design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-eminet-bold-crystal-bridal-set-31124993-44625219322161.webp?v=1779957256&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-eminet-bold-crystal-bridal-set-31124993-44625219322161.webp?v=1779957256&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-eminet-bold-crystal-bridal-set-31124993-44625219322161.webp?v=1779957256&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 25,
      name: "Golden Red Grandeur Set",
      brand: "Zeesy",
      category: "Barat",
      price: 45999,
      description: "Royal golden red grandeur bridal set with crystal design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-grandeur-crystal-bridal-set-31124903-44722150015281.webp?v=1779956262&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-grandeur-crystal-bridal-set-31124903-44722150015281.webp?v=1779956262&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-grandeur-crystal-bridal-set-31124903-44722150015281.webp?v=1779956262&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 26,
      name: "Golden Green Exquisite Set",
      brand: "Zeesy",
      category: "Barat",
      price: 43999,
      description: "Beautiful golden green exquisite bridal set with precious formed design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-exquisite-precious-formed-bridal-set-31124873-45665271578929.webp?v=1779956265&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-exquisite-precious-formed-bridal-set-31124873-45665271578929.webp?v=1779956265&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-exquisite-precious-formed-bridal-set-31124873-45665271578929.webp?v=1779956265&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 27,
      name: "Golden Red Magnificent Set",
      brand: "Zeesy",
      category: "Barat",
      price: 48999,
      description: "Stunning golden red magnificent bridal set with tonal arch design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificent-tonal-arch-bridal-set-31124843-44766712856881.webp?v=1779956295&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificent-tonal-arch-bridal-set-31124843-44766712856881.webp?v=1779956295&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-magnificent-tonal-arch-bridal-set-31124843-44766712856881.webp?v=1779956295&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 28,
      name: "Red Royal Traditional Set",
      brand: "Zeesy",
      category: "Barat",
      price: 39999,
      description: "Beautiful red royal traditional bridal set with crystal design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-royal-tradiitional-crystal-bridal-set-31124803-44561953784113.webp?v=1779956275&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-royal-tradiitional-crystal-bridal-set-31124803-44561953784113.webp?v=1779956275&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-royal-tradiitional-crystal-bridal-set-31124803-44561953784113.webp?v=1779956275&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Barat Ceremony",
      sizes: ["One Size"]
    },
    // SECTION 3: WALIMA JEWELRY (17 Items)
    {
      id: 29,
      name: "Silver Green Asma Set",
      brand: "Zeesy",
      category: "Walima",
      price: 34999,
      description: "Elegant silver green bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-silver-green-asma-s-bridal-sets-3111773-39362220589361.jpg?v=1772083116&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-silver-green-asma-s-bridal-sets-3111773-39362220589361.jpg?v=1772083116&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-silver-green-asma-s-bridal-sets-3111773-39362220589361.jpg?v=1772083116&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Silver", "Green"],
      material: "Silver Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 30,
      name: "Golden Champagne Momina Set",
      brand: "Zeesy",
      category: "Walima",
      price: 38999,
      description: "Elegant golden champagne bridal set with beautiful design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-momina-bridal-sets-3111713-45369935659313.webp?v=1772096893&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-momina-bridal-sets-3111713-45369935659313.webp?v=1772096893&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-champagne-momina-bridal-sets-3111713-45369935659313.webp?v=1772096893&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Champagne"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 31,
      name: "Golden Mahroon Bismah Set",
      brand: "Zeesy",
      category: "Walima",
      price: 41999,
      description: "Stunning golden mahroon bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-mahroon-bismah-maroof-bridal-sets-3111683-45368283300145.webp?v=1772096894&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-mahroon-bismah-maroof-bridal-sets-3111683-45368283300145.webp?v=1772096894&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-mahroon-bismah-maroof-bridal-sets-3111683-45368283300145.webp?v=1772096894&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Maroon"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 32,
      name: "Golden Green Rihanna Set",
      brand: "Zeesy",
      category: "Walima",
      price: 39999,
      description: "Beautiful golden green bridal set with elegant design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-rihanna-bridal-sets-3116234-39358764941617.jpg?v=1772083175&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-rihanna-bridal-sets-3116234-39358764941617.jpg?v=1772083175&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-green-rihanna-bridal-sets-3116234-39358764941617.jpg?v=1772083175&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 33,
      name: "Golden Red Ariana Set",
      brand: "Zeesy",
      category: "Walima",
      price: 44999,
      description: "Stunning golden red bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-ariana-bridal-sets-3115634-45535760384305.webp?v=1772097128&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-ariana-bridal-sets-3115634-45535760384305.webp?v=1772097128&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-ariana-bridal-sets-3115634-45535760384305.webp?v=1772097128&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 34,
      name: "Golden Red Royal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 46999,
      description: "Royal golden red bridal set with beautiful design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-royal-bridal-set-3114934-39358571348273.jpg?v=1772083184&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-royal-bridal-set-3114934-39358571348273.jpg?v=1772083184&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-red-royal-bridal-set-3114934-39358571348273.jpg?v=1772083184&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 35,
      name: "Golden White Anaya Set",
      brand: "Zeesy",
      category: "Walima",
      price: 36999,
      description: "Elegant golden white bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/AnayaNecklaceSet-GoldenWhite-1.webp?v=1773486498&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/AnayaNecklaceSet-GoldenWhite-1.webp?v=1773486498&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/AnayaNecklaceSet-GoldenWhite-1.webp?v=1773486498&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "White"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 36,
      name: "Golden Pearl Armeria Set",
      brand: "Zeesy",
      category: "Walima",
      price: 42999,
      description: "Beautiful golden pearl bridal set with stunning design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-armeria-bridal-set-14156-38932246954289.jpg?v=1772083496&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-armeria-bridal-set-14156-38932246954289.jpg?v=1772083496&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-golden-pearl-armeria-bridal-set-14156-38932246954289.jpg?v=1772083496&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Pearl"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 37,
      name: "Silver Mint Green Starlit Set",
      brand: "Zeesy",
      category: "Walima",
      price: 35999,
      description: "Elegant silver mint green bridal set with beautiful design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-silver-mint-green-starlit-bridal-set-14137-39856520888625.jpg?v=1772080236&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-silver-mint-green-starlit-bridal-set-14137-39856520888625.jpg?v=1772080236&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-silver-mint-green-starlit-bridal-set-14137-39856520888625.jpg?v=1772080236&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Silver", "Mint Green"],
      material: "Silver Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 38,
      name: "Golden Green Sumayah Set",
      brand: "Zeesy",
      category: "Walima",
      price: 39999,
      description: "Beautiful golden green bridal set with stunning choker design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/necklace-sets-golden-green-sumayah-s-choker-necklace-17906-44026840875313.webp?v=1772097306&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/necklace-sets-golden-green-sumayah-s-choker-necklace-17906-44026840875313.webp?v=1772097306&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/necklace-sets-golden-green-sumayah-s-choker-necklace-17906-44026840875313.webp?v=1772097306&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Gold", "Green"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 39,
      name: "Red Aurum Bridal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 37999,
      description: "Stunning red aurum bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-aurum-bridal-set-14114-36866594734385.jpg?v=1772080316&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-aurum-bridal-set-14114-36866594734385.jpg?v=1772080316&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-aurum-bridal-set-14114-36866594734385.jpg?v=1772080316&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 40,
      name: "Red Mahira Bridal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 40999,
      description: "Beautiful red mahira bridal set with stunning design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-mahira-bridal-set-14111-43817855123761.webp?v=1772097425&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-mahira-bridal-set-14111-43817855123761.webp?v=1772097425&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-mahira-bridal-set-14111-43817855123761.webp?v=1772097425&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 41,
      name: "Traditional Bridal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 34999,
      description: "Elegant traditional bridal set with beautiful design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-default-title-traditional-bridal-set-14110-36932486955313.jpg?v=1772080323&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-default-title-traditional-bridal-set-14110-36932486955313.jpg?v=1772080323&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-default-title-traditional-bridal-set-14110-36932486955313.jpg?v=1772080323&width=380"],
      badge: "Best Seller",
      rating: 4,
      colors: ["Gold", "Red"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 42,
      name: "Golden Champagne Panoramic Set",
      brand: "Zeesy",
      category: "Walima",
      price: 45999,
      description: "Stunning golden champagne panoramic necklace set with beautiful design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/necklace-sets-golden-champagne-panoramic-necklace-17672-40369148002609.webp?v=1772097424&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/necklace-sets-golden-champagne-panoramic-necklace-17672-40369148002609.webp?v=1772097424&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/necklace-sets-golden-champagne-panoramic-necklace-17672-40369148002609.webp?v=1772097424&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Champagne"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 43,
      name: "Red Elegance Bridal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 38999,
      description: "Beautiful red elegance bridal set with stunning design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-elegance-bridal-set-14071-36374535995697.jpg?v=1772080534&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-red-elegance-bridal-set-14071-36374535995697.jpg?v=1772080534&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-red-elegance-bridal-set-14071-36374535995697.jpg?v=1772080534&width=380"],
      badge: "Best Seller",
      rating: 5,
      colors: ["Red", "Gold"],
      material: "Gold Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 44,
      name: "Mint Green Arzoo Set",
      brand: "Zeesy",
      category: "Walima",
      price: 32999,
      description: "Elegant mint green bridal set with beautiful design and premium quality.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-mint-green-arzoo-bridal-set-14057-36333142835505.jpg?v=1772081700&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-mint-green-arzoo-bridal-set-14057-36333142835505.jpg?v=1772081700&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-mint-green-arzoo-bridal-set-14057-36333142835505.jpg?v=1772081700&width=380"],
      badge: "New Arrival",
      rating: 4,
      colors: ["Mint Green", "Silver"],
      material: "Silver Plated",
      occasion: "Walima Ceremony",
      sizes: ["One Size"]
    },
    {
      id: 45,
      name: "White Hania Bridal Set",
      brand: "Zeesy",
      category: "Walima",
      price: 35999,
      description: "Beautiful white hania bridal set with stunning design and premium craftsmanship.",
      frontImage: "https://zeesy.pk/cdn/shop/files/bridal-set-white-hania-s-bridal-set-14036-45329860198705.webp?v=1772097607&width=380",
      backImage: "https://zeesy.pk/cdn/shop/files/bridal-set-white-hania-s-bridal-set-14036-45329860198705.webp?v=1772097607&width=380",
      images: ["https://zeesy.pk/cdn/shop/files/bridal-set-white-hania-s-bridal-set-14036-45329860198705.webp?v=1772097607&width=380"],
      badge: "Premium",
      rating: 5,
      colors: ["White", "Gold"],
      material: "Gold Plated",
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
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-200 to-pink-100">
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
                  alt={`Jewelry Collection ${index + 1}`}
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
                Jewelry Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Royal</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-gold-300 to-gold-500">
                Bridal Jewelry
              </span>
            </h1>

            <p className="text-white/90 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Complete your bridal look with our exquisite collection of handcrafted jewelry sets
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Premium Quality
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 Royal Collection
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                 45+ Exclusive Sets
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg">
                Price  10,000 - 60,000 PKR
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
              Bridal Jewelry Sets
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
                {cat === "all" ? "All Jewelry" : cat}
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
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-200 hover:border-rose-300"
              >
                {/* Product Image */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-pink-100 cursor-pointer"
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
                                         color.toLowerCase() === 'green' ? '#4CAF50' :
                                         color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                         color.toLowerCase() === 'champagne' ? '#F7E7CE' :
                                         color.toLowerCase() === 'pearl' ? '#F5F5F5' :
                                         color.toLowerCase() === 'white' ? '#FFFFFF' :
                                         color.toLowerCase() === 'pink' ? '#F472B6' :
                                         color.toLowerCase() === 'maroon' ? '#800000' :
                                         color.toLowerCase() === 'mint' ? '#98FB98' :
                                         color.toLowerCase() === 'crystal' ? '#E0FFFF' :
                                         color.toLowerCase() === 'rose' ? '#E8A0BF' :
                                         color.toLowerCase() === 'cream' ? '#FFFDD0' :
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
                  
                  {/* Material */}
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
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-pink-100">
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