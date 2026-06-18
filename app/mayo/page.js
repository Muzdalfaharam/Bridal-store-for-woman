"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function MayoPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== HERO SLIDER IMAGES (15 images from mayo products) =====
  const heroSlides = [
    "https://hadizoutfit.com/cdn/shop/files/2e69f67e-3b40-4f94-978a-ff867308cde6.jpg?v=1767869701",
    "https://hadizoutfit.com/cdn/shop/files/749acaf5-e9d3-4930-a670-23297e4ba53f.jpg?v=1767439546",
    "https://hadizoutfit.com/cdn/shop/files/Gemini_Generated_Image_3r0mio3r0.jpg?v=1763746538",
    "https://hadizoutfit.com/cdn/shop/files/orange-gulzaib-01-e1762173713311.jpg?v=1762455352",
    "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-1.jpg?v=1759170453",
    "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_138d3c05-f610-43dd-b11c-49bcfe440926.png?v=1756492233",
    "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_cbae5bb4-d822-4a74-92fb-c106ee582301.jpg?v=1753553119",
    "https://hadizoutfit.com/cdn/shop/files/WhatsApp-Image_2025-01-07_at_1.49.02_PM_1.jpg?v=1741082381",
    "https://www.nameerabyfarooq.com/cdn/shop/files/DSC03052copy_360x.jpg?v=1764095621",
    "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02626copy_360x.jpg?v=1764095617",
    "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02380copy_360x.jpg?v=1764095614",
    "https://www.nameerabyfarooq.com/cdn/shop/files/Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_360x.jpg?v=1755254604",
    "https://www.nameerabyfarooq.com/cdn/shop/files/Bridal_Wedding_Dress_in_Lehenga_Choli_Dupatta_Style_360x.jpg?v=1754500278",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWUTeKijueqFex7VuDzktgWCDYmCOXpkCuQ5W33ny4a1jcCTFRedlWCs&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWETusvf4NWKsAJZlfAHsKNDlULMyEcZ1b3-r1Fogw7p0XAN5TAUHqd58&s=10",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== 20 MAYO DRESSES =====
  const products = [
    {
      id: 1,
      name: "Hadiz Pastel Peach Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 25999,
      description: "Beautiful pastel peach mayo dress with delicate embroidery and modern design. Perfect for your mayo ceremony.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/2e69f67e-3b40-4f94-978a-ff867308cde6.jpg?v=1767869701",
      backImage: "https://hadizoutfit.com/cdn/shop/files/6a32f879-e6dd-406d-af2e-6972b36c5245.jpg?v=1768844331",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/2e69f67e-3b40-4f94-978a-ff867308cde6.jpg?v=1767869701",
        "https://hadizoutfit.com/cdn/shop/files/6a32f879-e6dd-406d-af2e-6972b36c5245.jpg?v=1768844331",
        "https://hadizoutfit.com/cdn/shop/files/2d8a89b6-9cf0-413b-bd89-ec94c69f6880.jpg?v=1768844331"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Peach", "Gold", "Cream"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 2,
      name: "Hadiz Mint Green Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 28999,
      description: "Elegant mint green mayo dress with beautiful embroidery and stunning design. A fresh and sophisticated choice.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/749acaf5-e9d3-4930-a670-23297e4ba53f.jpg?v=1767439546",
      backImage: "https://hadizoutfit.com/cdn/shop/files/6398d0d7-74c9-4267-a2ed-ae5bec459952.jpg?v=1767439562",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/749acaf5-e9d3-4930-a670-23297e4ba53f.jpg?v=1767439546",
        "https://hadizoutfit.com/cdn/shop/files/6398d0d7-74c9-4267-a2ed-ae5bec459952.jpg?v=1767439562",
        "https://hadizoutfit.com/cdn/shop/files/bada4089-325e-442c-a8ca-b215b2f1b9aa.jpg?v=1767439574",
        "https://hadizoutfit.com/cdn/shop/files/d0fb000c-15b7-4050-af31-8bbe512812ae.jpg?v=1767439585"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Mint", "Gold", "White"],
      fabric: "Silk",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 3,
      name: "Hadiz Lavender Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 23999,
      description: "Beautiful lavender mayo dress with delicate embroidery and modern design. A dreamy choice for your special day.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/Gemini_Generated_Image_3r0mio3r0.jpg?v=1763746538",
      backImage: "https://hadizoutfit.com/cdn/shop/files/Gemini_Generated_Image_a42vgua42.jpg?v=1763746551",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/Gemini_Generated_Image_3r0mio3r0.jpg?v=1763746538",
        "https://hadizoutfit.com/cdn/shop/files/Gemini_Generated_Image_a42vgua42.jpg?v=1763746551"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Lavender", "Silver", "White"],
      fabric: "Georgette",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 4,
      name: "Hadiz Orange Gulzaib",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 26999,
      description: "Stunning orange mayo dress with unique embroidery and modern design. A bold and beautiful choice.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/orange-gulzaib-01-e1762173713311.jpg?v=1762455352",
      backImage: "https://hadizoutfit.com/cdn/shop/files/orange-gulzaib-02.jpg?v=1762455363",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/orange-gulzaib-01-e1762173713311.jpg?v=1762455352",
        "https://hadizoutfit.com/cdn/shop/files/orange-gulzaib-02.jpg?v=1762455363"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Orange", "Gold", "Cream"],
      fabric: "Chiffon",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 5,
      name: "Hadiz Pink Mayo Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 29999,
      description: "Beautiful pink mayo dress with stunning embroidery and elegant design. A perfect choice for the modern bride.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-1.jpg?v=1759170453",
      backImage: "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-2.jpg?v=1759170466",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-1.jpg?v=1759170453",
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-2.jpg?v=1759170466",
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-3.jpg?v=1759170474",
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-4.jpg?v=1759170482",
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-5.jpg?v=1759170489",
        "https://hadizoutfit.com/cdn/shop/files/GL-WU-08-2024-6.jpg?v=1759170497"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Pink", "Gold", "Rose"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 6,
      name: "Hadiz Cream Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 24999,
      description: "Elegant cream mayo dress with delicate embroidery and beautiful design. A timeless classic.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_138d3c05-f610-43dd-b11c-49bcfe440926.png?v=1756492233",
      backImage: "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_8644b17a-bd64-4de4-bd99-4f2eed06db34.jpg?v=1756579316",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_138d3c05-f610-43dd-b11c-49bcfe440926.png?v=1756492233",
        "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_8644b17a-bd64-4de4-bd99-4f2eed06db34.jpg?v=1756579316"
      ],
      badge: "Premium",
      rating: 4,
      colors: ["Cream", "Gold", "Pearl"],
      fabric: "Chiffon",
      embroidery: "Pearl & Sequins",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 7,
      name: "Hadiz Yellow Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 27999,
      description: "Beautiful yellow mayo dress with stunning embroidery and modern design. A bright and cheerful choice.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_cbae5bb4-d822-4a74-92fb-c106ee582301.jpg?v=1753553119",
      backImage: "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_0713bd44-8f9f-4e82-affa-c63730521bcb.jpg?v=1753553119",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_cbae5bb4-d822-4a74-92fb-c106ee582301.jpg?v=1753553119",
        "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_0713bd44-8f9f-4e82-affa-c63730521bcb.jpg?v=1753553119",
        "https://hadizoutfit.com/cdn/shop/files/rn-image_picker_lib_temp_00deca7d-8b79-4b81-882f-15b937e0e734.jpg?v=1753553119"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Yellow", "Gold", "Cream"],
      fabric: "Georgette",
      embroidery: "Resham & Zari",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 8,
      name: "Hadiz Blush Pink",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 31999,
      description: "Stunning blush pink mayo dress with unique embroidery and modern design. A romantic choice.",
      frontImage: "https://hadizoutfit.com/cdn/shop/files/WhatsApp-Image_2025-01-07_at_1.49.02_PM_1.jpg?v=1741082381",
      backImage: "https://hadizoutfit.com/cdn/shop/files/WhatsApp-Image_2025-01-07_at_1.49.03_PM.jpg?v=1741082381",
      images: [
        "https://hadizoutfit.com/cdn/shop/files/WhatsApp-Image_2025-01-07_at_1.49.02_PM_1.jpg?v=1741082381",
        "https://hadizoutfit.com/cdn/shop/files/WhatsApp-Image_2025-01-07_at_1.49.03_PM.jpg?v=1741082381",
        "https://hadizoutfit.com/cdn/shop/files/Artboard19-bbdfaba6-5597-426c-87d2-5215360590d5.jpg?v=1741082381",
        "https://hadizoutfit.com/cdn/shop/files/Artboard20-6e53a43e-ca95-457a-a27d-cebc276e056c.webp?v=1741082381",
        "https://hadizoutfit.com/cdn/shop/files/Artboard16-7d059bae-f8dd-40f6-a306-036a7918b70c.jpg?v=1741082381"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Blush", "Gold", "Rose"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari & Sequins",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 9,
      name: "Nameera Peach Mayo",
      brand: "Nameera By Farooq",
      category: "Mayo Collection",
      price: 34999,
      description: "Luxurious peach mayo dress with heavy embroidery and traditional craftsmanship. A royal choice.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC03052copy_360x.jpg?v=1764095621",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02993copy_360x.jpg?v=1764095621",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC03052copy_360x.jpg?v=1764095621",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02993copy_360x.jpg?v=1764095621",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02954copy_360x.jpg?v=1764095622"
      ],
      badge: "Best Seller",
      rating: 5,
      colors: ["Peach", "Gold", "Cream"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 10,
      name: "Nameera Pink Mayo",
      brand: "Nameera By Farooq",
      category: "Mayo Collection",
      price: 36999,
      description: "Stunning pink mayo dress with unique embroidery and modern design. A perfect blend of tradition and style.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02626copy_360x.jpg?v=1764095617",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02509copy_360x.jpg?v=1764095617",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02626copy_360x.jpg?v=1764095617",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02509copy_360x.jpg?v=1764095617",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02493copy_360x.jpg?v=1764095617",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02538copy_360x.jpg?v=1764095617",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02604copy_360x.jpg?v=1764095617"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Pink", "Gold", "Rose"],
      fabric: "Luxury Silk",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 11,
      name: "Nameera Cream Mayo",
      brand: "Nameera By Farooq",
      category: "Mayo Collection",
      price: 32999,
      description: "Elegant cream mayo dress with delicate embroidery and beautiful design. A sophisticated choice.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02380copy_360x.jpg?v=1764095614",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02357copy_360x.jpg?v=1764095614",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02380copy_360x.jpg?v=1764095614",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02357copy_360x.jpg?v=1764095614",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02258copy_360x.jpg?v=1764095614",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02340copy_360x.jpg?v=1764095614",
        "https://www.nameerabyfarooq.com/cdn/shop/files/DSC02371copy_360x.jpg?v=1764095614"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Cream", "Gold", "Pearl"],
      fabric: "Georgette",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 12,
      name: "Nameera Green Mayo",
      brand: "Nameera By Farooq",
      category: "Mayo Collection",
      price: 28999,
      description: "Beautiful green mayo dress with stunning embroidery and modern design. A fresh and vibrant choice.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/files/Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_360x.jpg?v=1755254604",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/files/Latest_Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_360x.jpg?v=1755254604",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/files/Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_360x.jpg?v=1755254604",
        "https://www.nameerabyfarooq.com/cdn/shop/files/Latest_Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_360x.jpg?v=1755254604",
        "https://www.nameerabyfarooq.com/cdn/shop/files/Pakistani_Bridal_Mehndi_Dress_in_Lehenga_Choli_Style_Online_360x.jpg?v=1755254604"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Green", "Gold", "Cream"],
      fabric: "Chiffon",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 13,
      name: "Nameera Bridal Mayo",
      brand: "Nameera By Farooq",
      category: "Mayo Collection",
      price: 38999,
      description: "Luxurious bridal mayo dress with heavy embroidery and traditional craftsmanship. A masterpiece of design.",
      frontImage: "https://www.nameerabyfarooq.com/cdn/shop/files/Bridal_Wedding_Dress_in_Lehenga_Choli_Dupatta_Style_360x.jpg?v=1754500278",
      backImage: "https://www.nameerabyfarooq.com/cdn/shop/files/Bridal_Wedding_Dress_in_Lehenga_Choli_Dupatta_Style_360x.jpg?v=1754500278",
      images: [
        "https://www.nameerabyfarooq.com/cdn/shop/files/Bridal_Wedding_Dress_in_Lehenga_Choli_Dupatta_Style_360x.jpg?v=1754500278"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["White", "Gold", "Pearl"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 14,
      name: "Pastel Pink Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 21999,
      description: "Beautiful pastel pink mayo dress with delicate embroidery and modern design. A sweet and romantic choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWUTeKijueqFex7VuDzktgWCDYmCOXpkCuQ5W33ny4a1jcCTFRedlWCs&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWUTeKijueqFex7VuDzktgWCDYmCOXpkCuQ5W33ny4a1jcCTFRedlWCs&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWUTeKijueqFex7VuDzktgWCDYmCOXpkCuQ5W33ny4a1jcCTFRedlWCs&s=10"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Pink", "Gold", "White"],
      fabric: "Chiffon",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 15,
      name: "Mint Green Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 23999,
      description: "Elegant mint green mayo dress with beautiful embroidery and stunning design. A fresh and modern choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWETusvf4NWKsAJZlfAHsKNDlULMyEcZ1b3-r1Fogw7p0XAN5TAUHqd58&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWETusvf4NWKsAJZlfAHsKNDlULMyEcZ1b3-r1Fogw7p0XAN5TAUHqd58&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWETusvf4NWKsAJZlfAHsKNDlULMyEcZ1b3-r1Fogw7p0XAN5TAUHqd58&s=10"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Mint", "Silver", "White"],
      fabric: "Georgette",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 16,
      name: "Lavender Mayo Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 25999,
      description: "Beautiful lavender mayo dress with stunning embroidery and elegant design. A dreamy choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmnUlFtDD4dbCUgStof6dV77uXVM4soJv_9vDRxdrayyHm1MDOUzJqxfm&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmnUlFtDD4dbCUgStof6dV77uXVM4soJv_9vDRxdrayyHm1MDOUzJqxfm&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmnUlFtDD4dbCUgStof6dV77uXVM4soJv_9vDRxdrayyHm1MDOUzJqxfm&s=10"
      ],
      badge: "Limited Edition",
      rating: 4,
      colors: ["Lavender", "Gold", "Cream"],
      fabric: "Silk",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 17,
      name: "Peach Mayo Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 22999,
      description: "Stunning peach mayo dress with unique embroidery and modern design. A perfect choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxPGoHk-t6LrXJ7M6GHGBlx0_XVORFyoDCo9Y8rqqyNOLE7loZXX4nuQ&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxPGoHk-t6LrXJ7M6GHGBlx0_XVORFyoDCo9Y8rqqyNOLE7loZXX4nuQ&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxPGoHk-t6LrXJ7M6GHGBlx0_XVORFyoDCo9Y8rqqyNOLE7loZXX4nuQ&s=10"
      ],
      badge: "Best Seller",
      rating: 4,
      colors: ["Peach", "Gold", "Cream"],
      fabric: "Chiffon",
      embroidery: "Zari & Resham",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 18,
      name: "Rose Pink Mayo",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 27999,
      description: "Elegant rose pink mayo dress with delicate embroidery and beautiful design. A romantic choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9I8S2Li5bZlfg1FGg6L-b0ndwLvqg8HSEXSMtx6CFC79SnidWYmIs_dgn&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9I8S2Li5bZlfg1FGg6L-b0ndwLvqg8HSEXSMtx6CFC79SnidWYmIs_dgn&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9I8S2Li5bZlfg1FGg6L-b0ndwLvqg8HSEXSMtx6CFC79SnidWYmIs_dgn&s=10"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Rose", "Gold", "White"],
      fabric: "Luxury Silk",
      embroidery: "Heavy Zari",
      occasion: "Mayo Ceremony",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 19,
      name: "Cream Mayo Dress",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 20999,
      description: "Beautiful cream mayo dress with stunning embroidery and modern design. A timeless classic.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxViwdgP42VXkV-BoARjI0yDCV9uyYA0rkOJYXRLlxGJ8fnRDUXoT1X9s&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxViwdgP42VXkV-BoARjI0yDCV9uyYA0rkOJYXRLlxGJ8fnRDUXoT1X9s&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxViwdgP42VXkV-BoARjI0yDCV9uyYA0rkOJYXRLlxGJ8fnRDUXoT1X9s&s=10"
      ],
      badge: "New Arrival",
      rating: 4,
      colors: ["Cream", "Gold", "Pearl"],
      fabric: "Georgette",
      embroidery: "Resham & Sequins",
      occasion: "Mayo Reception",
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 20,
      name: "Gold Mayo Ensemble",
      brand: "Hadiz Outfit",
      category: "Mayo Collection",
      price: 34999,
      description: "Luxurious gold mayo ensemble with heavy embroidery and traditional craftsmanship. A royal choice.",
      frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnOerwW0pFI-e4Z6YEWMobqnABl2pm5dBMdkL7t01BJLoZ5vXOlVzR40&s=10",
      backImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnOerwW0pFI-e4Z6YEWMobqnABl2pm5dBMdkL7t01BJLoZ5vXOlVzR40&s=10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnOerwW0pFI-e4Z6YEWMobqnABl2pm5dBMdkL7t01BJLoZ5vXOlVzR40&s=10"
      ],
      badge: "Premium",
      rating: 5,
      colors: ["Gold", "Cream", "White"],
      fabric: "Heavy Silk",
      embroidery: "Zari & Kundan",
      occasion: "Mayo Ceremony",
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
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      
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
                alt="Mayo Collection"
                className="w-full h-full object-contain bg-gradient-to-br from-pink-900/80 via-black/80 to-rose-900/80"
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
                  ? 'w-8 bg-pink-400' 
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
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              <span className="text-pink-200 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase drop-shadow-lg font-bold">
                 Mayo Collection 2026
              </span>
              <div className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block">Pastel</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-amber-300">
                Mayo Collection
              </span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-4">
              Discover our elegant collection of pastel peach, blush pink and cream ensembles,
              perfect for your mayo celebration.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Pastel Collection
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 Premium Quality
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                 20 Exclusive Dresses
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm tracking-wider shadow-lg font-semibold">
                ₨ 20,000 - 45,000 PKR
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
            <span className="text-pink-600 font-serif text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800 mt-2 mb-3 font-bold">
              Mayo Ensembles
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-300"
              >
                {/* Product Image */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-pink-50 cursor-pointer"
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
                      product.badge === 'Premium' ? 'bg-pink-600 text-white' :
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
                                         color.toLowerCase() === 'peach' ? '#FFDAB9' :
                                         color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                         color.toLowerCase() === 'mint' ? '#98FB98' :
                                         color.toLowerCase() === 'lavender' ? '#E6E6FA' :
                                         color.toLowerCase() === 'rose' ? '#E8A0BF' :
                                         color.toLowerCase() === 'blush' ? '#FADADD' :
                                         color.toLowerCase() === 'yellow' ? '#FFD700' :
                                         color.toLowerCase() === 'orange' ? '#FF8C00' :
                                         color.toLowerCase() === 'green' ? '#4CAF50' :
                                         color.toLowerCase() === 'white' ? '#FFFFFF' :
                                         color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                         color.toLowerCase() === 'pearl' ? '#F5F5F5' :
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
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-bold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-bold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 
                      className="font-serif text-base font-bold text-gray-800 line-clamp-1 cursor-pointer hover:text-pink-600 transition-colors"
                      onClick={() => openModal(product)}
                    >
                      {product.name}
                    </h3>
                    <span className="text-pink-600 font-bold text-sm">{formatPrice(product.price)}</span>
                  </div>
                  <p className="text-gray-500 text-xs font-medium mb-1">{product.brand}</p>
                  <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
                  
                  {/* Size Badges */}
                  <div className="mt-2 flex gap-1">
                    {product.sizes && product.sizes.map((size, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-pink-50 text-pink-600 text-[10px] rounded font-bold">
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
                      className="text-pink-500 hover:text-pink-700 text-sm font-bold transition-colors"
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
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-pink-50">
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
                            selectedImage === img ? 'border-pink-500' : 'border-pink-200 hover:border-pink-400'
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
                            <span className="absolute bottom-0 left-0 right-0 bg-pink-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Front
                            </span>
                          )}
                          {idx === 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-pink-600/80 text-white text-[8px] text-center py-0.5 font-bold">
                              Back
                            </span>
                          )}
                          {idx > 1 && (
                            <span className="absolute bottom-0 left-0 right-0 bg-pink-600/60 text-white text-[8px] text-center py-0.5 font-bold">
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
                        <span className="text-pink-600 text-sm font-bold uppercase tracking-wider">
                          {selectedProduct.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mt-1 font-bold">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 font-medium">{selectedProduct.brand}</p>
                      </div>
                      <span className="text-2xl font-bold text-pink-600">
                        {formatPrice(selectedProduct.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="text-gray-700 font-bold">{selectedProduct.rating}</span>
                      <span className="text-gray-400 text-sm font-medium">| {selectedProduct.badge}</span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 border-t border-pink-100 pt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mt-4 border-t border-pink-100 pt-4">
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
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300"
                      >
                        🛒 Add to Cart
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-pink-200 text-pink-600 rounded-full font-bold hover:bg-pink-50 transition-all duration-300"
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