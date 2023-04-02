import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Layout } from "./components/Layout";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess"; // import CheckoutSuccess

function App() {
  return (
    <CartProvider>
      <Layout>
        <div className="container">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} /> {/* add new route */}
          </Routes>
        </div>
      </Layout>
    </CartProvider>
  );
}

export default App;
