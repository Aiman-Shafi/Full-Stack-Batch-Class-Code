import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // fetch data
  const showMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTNlOWY1ZjBiZGQ5NWIwMDA4MDc2Mzc0Njc4ZTBlMCIsInN1YiI6IjY1NmNiMmY4ZTM4YmQ4MDBhYTQ4NDVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5kT1DDjlnuY84FaszMPWMkUJULifjPOjLfyT1oudt8",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    showMovies();
  }, []);
  return (
    <>
      <h2>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div>Nothing Found</div>
        )}
      </h2>
    </>
  );
}
