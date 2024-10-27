import React from "react";
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./movieList.css";

// constants
const apiKey = import.meta.env.VITE_API_KEY;
const moviesDiscover = import.meta.env.VITE_API_DISCOVER;

export default function MovieList({ searchTerm }) {
  const [moviesList, setMoviesList] = useState([]);

  const handleClick = (id) => {
    console.log(id);
  };

  const getMovies = () => {
    axios({
      method: "get",
      url: moviesDiscover,
      params: {
        api_key: apiKey,
        language: "pt-BR",
      },
    }).then((response) => {
      setMoviesList(response.data.results);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movies-container">
      <ul className="movies-list">
        {moviesList.length <= 0 && <p>Carregando...</p>}
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              index={index}
              handleClick={handleClick}
            />
          ))
        ) : (
          <p>Nenhum filme encontrado</p>
        )}
      </ul>
    </div>
  );
}
