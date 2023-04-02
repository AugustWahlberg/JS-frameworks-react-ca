import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex >= 0) {
      // If the product is already in the cart, increase its quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const newProduct = { ...product, quantity: 1 };
      existingCart.push(newProduct);
    }

    setCart(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  const removeFromCart = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.filter((product) => product.id !== productId);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: Math.max(0, product.quantity - 1) };
      }
      return product;
    }).filter(product => product.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = (callback) => {
    const emptyCart = [];
    setCart(emptyCart);
    localStorage.setItem("cart", JSON.stringify(emptyCart));
    callback && callback();
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
