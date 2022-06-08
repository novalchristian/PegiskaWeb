import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, PenawaranPage, BlogPage, AboutPage } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/penawaran" element={<PenawaranPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
