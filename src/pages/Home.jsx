import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="home-wrapper">
        <MovieList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
