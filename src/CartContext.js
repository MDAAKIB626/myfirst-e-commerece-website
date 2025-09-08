// src/context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  // Load cart for logged-in user
  useEffect(() => {
    if (!userId) {
      setCartItems([]);
      return;
    }
    const savedCart = localStorage.getItem(`cart_${userId}`);
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, [userId]);

  // Save cart for logged-in user
  useEffect(() => {
    if (!userId) return;
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCartItems(prev => prev.filter(item => item.id !== id));

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      userId,
      setUserId
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
