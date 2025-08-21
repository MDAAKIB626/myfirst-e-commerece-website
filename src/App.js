import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import CartProvider from './CartContext';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import CartPage from './CartPage';

import AdminDashboard from './AdminDashboard';

function AppContent() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Direct Access to Admin Dashboard without auth */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}
