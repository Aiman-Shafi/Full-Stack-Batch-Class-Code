/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function MovieCard({
  movie: { id, original_title, poster_path, overview, title },
}) {
  const IMG_URL = `https://image.tmdb.org/t/p/original/`;

  return (
    <div key={id} className="movie-card">
      {poster_path ? (
        <img src={IMG_URL + poster_path} alt={title} />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h4>{original_title?.slice(0, 23)}</h4>
      <p>{overview.slice(0, 60)}...</p>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
