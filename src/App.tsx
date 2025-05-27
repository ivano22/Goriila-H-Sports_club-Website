import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import News from './pages/News';
import Projects from './pages/Projects';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/shop/Cart';
import ProductDetail from './pages/shop/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="news" element={<News />} />
        <Route path="projects" element={<Projects />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;