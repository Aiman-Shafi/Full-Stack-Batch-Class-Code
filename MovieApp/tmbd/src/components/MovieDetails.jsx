// import { useState } from "react";
// import { useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  //   console.log(params.id);
  const BASE_URL = `https://api.themoviedb.org/3/movie/${params.id}?`;
  const API_KEY = `&api_key=e53e9f5f0bdd95b0008076374678e0e0`;
  const IMG_URL = `https://image.tmdb.org/t/p/original/`;

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const response = await fetch(BASE_URL + API_KEY);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, [params.id]);
  return (
    <div>
      {/* <h2>{movie.title}</h2>
      <h4>{movie.overview}</h4> */}
      {movie.backdrop_path ? (
        <img
          src={IMG_URL + movie.backdrop_path}
          alt={movie.title}
          width="500px"
        />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h1>{movie.title}</h1>
      <h4>{movie.overview}</h4>
      <p>${movie.budget}</p>
      <p>{movie.release_date}</p>
      {movie.spoken_languages?.map((lan) => (
        <li key={lan.name}>{lan.name}</li>
      ))}
    </div>
  );
}

export default MovieDetails;
