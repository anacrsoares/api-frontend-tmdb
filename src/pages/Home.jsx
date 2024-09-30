import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieList from "../components/MovieList/MovieList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Remover, mas aqui é a Home</h1>
      <MovieList />
    </div>
  );
}
