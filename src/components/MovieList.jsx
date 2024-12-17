import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./movieList.css";

// constants
const apiKey = import.meta.env.VITE_API_KEY;
const moviesDiscover = import.meta.env.VITE_API_DISCOVER;

export default function MovieList({ searchTerm }) {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (id) => {
    console.log(id);
  };

  const getMovies = (pageNumber = 1) => {
    axios({
      method: "get",
      url: moviesDiscover,
      params: {
        api_key: apiKey,
        language: "pt-BR",
        page: pageNumber,
      },
    }).then((response) => {
      setMoviesList((prevMovies) => [
        ...prevMovies,
        ...response.data.results,
      ]).catch((error) => {
        console.error("Erro ao buscar filmes:", error);
      });
    });
  };

  const loadMoreMovies = () => {
    const nextPage = currentPage + 1;
    getMovies(nextPage);
    setCurrentPage(nextPage);
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
      <button className="movies-loader" onClick={loadMoreMovies}>
        Carregar mais filmes
      </button>
    </div>
  );
}
