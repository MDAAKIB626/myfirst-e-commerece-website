import React, { createContext, useState, useEffect } from 'react';

// Create ProductContext
export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  // Initialize products from localStorage
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
