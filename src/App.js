// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ProductProvider } from "./ProductContext";
import CartProvider from "./CartContext";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import CartPage from "./CartPage";
import AdminDashboard from "./AdminDashboard";

import AuthPage from "./AuthPage";

function AppContent({ token, setToken }) {
  if (!token) {
    // User not logged in → show only AuthPage
    return (
      <Routes>
        <Route path="*" element={<AuthPage setToken={setToken} />} />
      </Routes>
    );
  }

  // User logged in → show Navbar + Routes
  return (
    <>
      <Navbar setToken={setToken} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <AppContent token={token} setToken={setToken} />
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}
