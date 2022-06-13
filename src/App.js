import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, PenawaranPage, BlogPage, AboutPage, LoginPage } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/penawaran" element={<PenawaranPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
