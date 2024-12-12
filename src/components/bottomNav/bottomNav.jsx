import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import "./bottomNav.css";

export default function BottomNav() {
  return (
    <div
      className="
    bottom-navigation"
    >
      <Link to="/" className="nav-item">
        <MovieIcon />
        <span>Movies</span>
      </Link>
      <Link to="/favorites" className="nav-item">
        <FavoriteIcon />
        <span>Favorites</span>
      </Link>
    </div>
  );
}
