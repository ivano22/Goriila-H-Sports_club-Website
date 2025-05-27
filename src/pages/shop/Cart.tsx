import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import { useCartStore } from '../../store/cartStore';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <>
        <PageHeader 
          title="Shopping Cart" 
          subtitle="Your cart is empty"
          backgroundImage="https://images.pexels.com/photos/6667698/pexels-photo-6667698.jpeg"
        />
        <Container>
          <div className="py-16 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-semibold text-gray-700 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button variant="primary" to="/shop">
              Continue Shopping
            </Button>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader 
        title="Shopping Cart" 
        subtitle="Review your items and proceed to checkout"
        backgroundImage="https://images.pexels.com/photos/6667698/pexels-photo-6667698.jpeg"
      />
      
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-heading font-semibold">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Cart
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="py-6 flex items-center"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="ml-6 flex-grow">
                        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                        <p className="text-secondary-600 font-bold">UGX {item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-heading font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>UGX {getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>UGX {getTotal().toLocaleString()}</span>
                  </div>
                  <Button variant="primary" to="/shop/checkout" fullWidth>
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" to="/shop" fullWidth>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;