import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

export default function MovieList({ searchTerm }) {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "4f891e845bd62dd701ff944e14e58fc0",
        language: "pt-BR",
      },
    }).then((response) => {
      console.log(response);
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
    <div>
      <ul className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} index={index} />
          ))
        ) : (
          <p>Nenhum filme encontrado</p>
        )}
      </ul>
    </div>
  );
}
