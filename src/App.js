import React from 'react';
import { NavBar } from './components/NavBar';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"

function App() {  
  
  return ( <>
  <NavBar />
  <div className="container"> 
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
    </div>
   </>);
}

export default App;