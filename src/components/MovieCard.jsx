import React from "react";
import "./movieCard.css";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const posterImage = import.meta.env.VITE_IMG;

export default function MovieCard({ index, movie }) {
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
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
