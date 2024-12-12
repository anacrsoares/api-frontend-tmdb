import React from "react";
import "./movieCard.css";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { red } from "@mui/material/colors";
import { useAppContext } from "../Context";

const posterImage = import.meta.env.VITE_IMG;

export default function MovieCard({ index, movie }) {
  const { listFavorites, handleFavoriteList } = useAppContext();

  const handleFavoriteListInternal = () => {
    handleFavoriteList(movie); // Chamando a função do contexto para atualizar os favoritos
  };

  // const [isFavorited, setIsFavorited] = useState(false);

  const isFavorited = movie.id in listFavorites;
  // const handleFavoriteClick = () => {
  //   setIsFavorited(!isFavorited);
  // };

  return (
    <>
      <li key={index}>
        <div className="card-container">
          <img
            src={`${posterImage}/${movie.poster_path}`}
            className="movie-poster-img"
            alt={movie.title}
          />
          <div className="movie-info">
            <h2 className="movie-title">
              {movie.title}
              <StarRating
                index={index}
                className="star-rating"
                rating={movie.vote_average}
              />
            </h2>

            {/* Botão de Favorito */}
            <IconButton
              onClick={() => {
                handleFavoriteListInternal();
              }}
              sx={{ justifyContent: "flex-end" }}
            >
              {isFavorited ? (
                <FavoriteIcon sx={{ fontSize: 40, color: red[900] }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 40, color: red[900] }} />
              )}
            </IconButton>

            <div className="hidden-content">
              {movie.overview && (
                <p className="description-overview">
                  {movie.overview.length > 150
                    ? `${movie.overview.substring(0, 150)}...`
                    : movie.overview}
                </p>
              )}

              <button className="see-more-btn">
                <Link className="see-more-btn" to={`/movie/${movie.id}`}>
                  Ver mais
                </Link>
              </button>

              {/* Botão de Favorito */}
              <IconButton
                onClick={() => {
                  handleFavoriteListInternal();
                }}
              >
                {isFavorited ? (
                  <FavoriteIcon sx={{ fontSize: 40, color: red[900] }} />
                ) : null}
              </IconButton>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
