import React from "react";
import { NavBar } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
