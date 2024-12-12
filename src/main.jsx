import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./Context";

// styles
import "./globals.css";

// pages
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

// components
import BottomNav from "./components/bottomNav/bottomNav";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/api-frontend-tmdb">
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <BottomNav />
    </AppProvider>
  </BrowserRouter>
);
