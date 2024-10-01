import React from "react";
import "./navbar.css";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
    console.log(value);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Busca Filmes</h1>
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Procure seu filme"
            id="search-bar"
          />
        </form>
      </nav>
    </div>
  );
}
