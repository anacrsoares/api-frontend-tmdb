import React from "react";
import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";

export default function MovieCard({ index, movie }) {
  return (
    <div>
      <li key={index}>
        <div className="card-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="movie-poster-img"
            alt={movie.title}
          />
          <h2 className="movie-title">
            {movie.title}
            <StarRating className="star-rating" rating={movie.vote_average} />
          </h2>
        </div>

        <div className="movie-infos">
          <div className="hidden-content">
            <p className="description-overview">{movie.overview}</p>

            <button className="see-more-btn">Ver mais</button>
          </div>
        </div>
      </li>
    </div>
  );
}
