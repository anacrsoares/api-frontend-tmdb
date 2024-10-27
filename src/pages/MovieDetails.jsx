import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import "./movieDetails.css";
import "flag-icons/css/flag-icons.min.css";

// constants
const apiKey = import.meta.env.VITE_API_KEY;
const movieTopLevelDetails = import.meta.env.VITE_MOVIE_TOP_LEVEL_DETAILS;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const movieURL = `${movieTopLevelDetails}/${id}?${apiKey}`;
  const posterURL = "https://image.tmdb.org/t/p/w500";

  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjg5MWU4NDViZDYyZGQ3MDFmZjk0NGUxNGU1OGZjMCIsIm5iZiI6MTcyOTU1MDgyOS43ODY1OSwic3ViIjoiNjZmYWZkMTdmOTA2Yjk4OTU4ZjFhMTljIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.W_22dKv7OqqyfEb_FwdE98DbGAGFtpc2BmQ4PfWoQj8",
      },
    };

    const response = await fetch(
      `${movieURL}?api_key=${apiKey}&language=pt-BR`,
      options
    );

    const data = await response.json();
    console.log(data);

    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const formatDate = (date) => {
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    return `${day}-${month}-${year}`;
  };

  const getCountryCode = (code) => {
    return code.toLowerCase();
  };

  return (
    <div>
      {movie ? (
        <div className="movie-details">
          <ul className="movie-main-info">
            <h1>
              {movie.title} (<span>{movie.original_title}</span>)
            </h1>
            <div className="movie-image">
              <img
                src={
                  movie.poster_path
                    ? `${posterURL}${movie.poster_path}`
                    : `${posterURL}${movie.belongs_to_collection.poster_path}`
                }
                alt={movie.title}
                title={movie.title}
              />
            </div>

            <li className="flag-description">
              <p>País de Origem: {movie.origin_country[0]}</p>
              <span
                className={`flag fi fi-${getCountryCode(
                  movie.origin_country[0]
                )}`}
              ></span>
            </li>

            <li className="runtime">
              {" "}
              <BsHourglassSplit />
              Duração: {movie.runtime}min
            </li>
            <li>Data de Lançamento: {formatDate(movie.release_date)}</li>

            <div className="info-budget">
              <h2>Orçamento e Receita</h2>
              <p>
                <BsGraphUp />
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                <BsWallet2 />
                {movie.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          </ul>

          <div className="info-sinopse">
            <h2> Sinopse</h2>

            <p>{movie.overview}</p>
          </div>

          <p>{movie.homepage}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
