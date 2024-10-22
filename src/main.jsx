import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./globals.css";

// pages
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);
