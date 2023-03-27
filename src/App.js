import React from "react";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
