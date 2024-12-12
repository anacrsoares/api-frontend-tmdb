import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./globals.css";

// pages
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
// import { StrictMode } from "react";

// components
import BottomNav from "./components/bottomNav/bottomNav";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/api-frontend-tmdb">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
    </div>

    <BottomNav />
  </BrowserRouter>
);
