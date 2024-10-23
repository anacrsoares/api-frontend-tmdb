import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
    console.log(value);
  };

  return (
    <div>
      <nav className="container-navbar">
        <div className="logo-container">
          {/* <Link to="/">
            <img src={logo} alt="Site Logo" />
          </Link> */}
          <Link to="/">
            <h1>2098Movies</h1>
          </Link>
        </div>

        <form className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Procure seu filme"
            id="search-bar"
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
}
