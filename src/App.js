import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Layout } from "./components/Layout";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
