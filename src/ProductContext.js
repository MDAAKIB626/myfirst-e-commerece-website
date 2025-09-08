// ProductContext.js
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const storedProducts = localStorage.getItem("products");
  const [products, setProducts] = useState(storedProducts ? JSON.parse(storedProducts) : []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
