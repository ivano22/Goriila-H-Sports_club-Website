import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, description, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-primary-700">{name}</h3>
        <div className="text-secondary-600 font-bold text-lg my-2">{price}</div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-accent-400 hover:bg-accent-500 text-primary-900 font-medium flex items-center justify-center gap-2 py-2 rounded-md transition-colors">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;