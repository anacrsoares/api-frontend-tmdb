import { useAppContext } from "../Context";
import StarRating from "../components/StarRating"; // Importando o componente de avaliação de estrelas
import "./favorites.css";

const posterImage = import.meta.env.VITE_IMG; // Definindo a variável posterImage

export default function Favorites() {
  const { listFavorites } = useAppContext();

  return (
    <>
      <h1 className="favorites-title">Filmes Favoritos</h1>
      <div className="favorites-container">
        <ul className="favorites-list">
          {Object.values(listFavorites).map((movie) => (
            <li key={movie.id} className="favorite-item">
              <div className="poster-container">
                <img
                  src={`${posterImage}/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">
                  {movie.overview.length > 150
                    ? `${movie.overview.substring(0, 150)}...`
                    : movie.overview}
                </p>
                <StarRating rating={movie.vote_average} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
