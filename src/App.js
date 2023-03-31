import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Layout } from "./components/Layout";
import { CartProvider } from "./components/CartContext"; // import CartProvider
import { Cart } from "./pages/Cart"; // update import statement

function App() {
  return (
    <CartProvider> {/* wrap the Routes component with CartProvider */}
      <Layout>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Layout>
    </CartProvider>
  );
}

export default App;
