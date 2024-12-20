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
    handleFavoriteList(movie);
  };

  const isFavorited = movie.id in listFavorites;

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
              aria-label="favorite-button"
              sx={{ justifyContent: "flex-end" }}
            >
              {isFavorited ? (
                <FavoriteIcon
                  aria-label="favorite-filled"
                  sx={{ fontSize: 40, color: red[900] }}
                />
              ) : (
                <FavoriteBorderIcon
                  aria-label="favorite-border"
                  sx={{ fontSize: 40, color: red[900] }}
                />
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
              ></IconButton>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
