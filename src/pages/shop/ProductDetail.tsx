import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { useCartStore } from '../../store/cartStore';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: Number(id),
    name: "2025 Home Jersey",
    price: 85000,
    description: "Official Gorilla Highland SC home jersey for the 2025 season. Features moisture-wicking technology and the club's iconic colors.",
    imageUrl: "https://images.pexels.com/photos/6667698/pexels-photo-6667698.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "Breathable fabric",
      "Official team design",
      "Club crest embroidery",
      "Sponsor logos",
    ],
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <Container>
      <div className="py-16">
        <Button variant="ghost" to="/shop" className="mb-8 inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(24 reviews)</span>
            </div>

            <p className="text-2xl font-bold text-secondary-600 mb-6">
              UGX {product.price.toLocaleString()}
            </p>

            <p className="text-gray-600 mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-heading font-semibold text-gray-900 mb-4">Select Size</h3>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border-2 border-gray-300 rounded-md hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              onClick={handleAddToCart}
              fullWidth
              className="mb-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="space-y-4 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-4">
                <Truck className="h-6 w-6 text-primary-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On orders over UGX 100,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="h-6 w-6 text-primary-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">Official licensed product</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;