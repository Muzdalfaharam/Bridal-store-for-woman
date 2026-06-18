"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-rose-300"
    >
      {/* Product Image */}
      <div className="relative h-72 w-full overflow-hidden bg-pink-50">
        <Image
          src={product.frontImage || product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
        
        {/* Badge */}
        {product.badge && (
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
        )}

        {/* Rating */}
        {product.rating && (
          <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm shadow-md">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-700 ml-1 font-medium">{product.rating}</span>
          </div>
        )}

        {/* Brand */}
        {product.brand && (
          <div className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-xs font-medium">{product.brand}</span>
          </div>
        )}

        {/* Color Dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1">
            {product.colors.slice(0, 3).map((color, idx) => (
              <span 
                key={idx}
                className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'gold' ? '#D4AF37' :
                                 color.toLowerCase() === 'red' ? '#DC2626' :
                                 color.toLowerCase() === 'pink' ? '#F472B6' :
                                 color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                 color.toLowerCase() === 'white' ? '#FFFFFF' :
                                 color.toLowerCase() === 'green' ? '#4CAF50' :
                                 color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                 color.toLowerCase() === 'rose' ? '#E8A0BF' :
                                 color.toLowerCase() === 'peach' ? '#FFDAB9' :
                                 color.toLowerCase() === 'mint' ? '#98FB98' :
                                 color.toLowerCase() === 'lavender' ? '#E6E6FA' :
                                 '#CCCCCC'
                }}
                title={color}
              ></span>
            ))}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            >
              Quick View
            </button>
          )}
          <button
            onClick={() => {
              const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.frontImage || product.image,
                category: product.category,
                brand: product.brand || '',
                quantity: 1
              };
              addToCart(cartItem);
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
          <h3 className="font-serif text-base font-bold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-rose-600 font-bold text-sm">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-gray-500 text-xs mb-1">{product.category}</p>
        <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {product.images && product.images.length > 1 ? `${product.images.length} views` : 'Front + Back'}
          </span>
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="text-rose-500 hover:text-rose-700 text-sm font-medium transition-colors"
            >
              View Details →
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}