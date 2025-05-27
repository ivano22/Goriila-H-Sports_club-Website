import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, description, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/shop/products/${id}`} className="block h-64">
        <div className="h-full">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <Link to={`/shop/products/${id}`}>
          <h3 className="font-heading font-semibold text-xl text-primary-700 hover:text-primary-600 transition-colors">{name}</h3>
        </Link>
        <div className="text-secondary-600 font-bold text-lg my-2">{price}</div>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>
        <Link 
          to={`/shop/cart/add/${id}`}
          className="w-full bg-accent-400 hover:bg-accent-500 text-primary-900 font-medium flex items-center justify-center gap-2 py-2 rounded-md transition-colors mt-auto"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;