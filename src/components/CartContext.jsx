import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("addToCart called with product: ", product);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("existingCart: ", existingCart);

    existingCart.push(product);
    setCart(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    console.log("Cart after adding product: ", existingCart); // Add this console log
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  console.log("CartProvider rendered");
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
