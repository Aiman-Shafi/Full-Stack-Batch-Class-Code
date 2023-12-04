// import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const API_KEY = `&api_key=e53e9f5f0bdd95b0008076374678e0e0`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title = "batman") => {
    console.log(`${API_URL}${title}${API_KEY}`);
    const response = await fetch(`${API_URL}${title}${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies("BATMAN");
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a movie..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchMovies(search)}>Search</button>
          </div>
        </div>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="movie-list">
            {" "}
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}{" "}
          </div>
        ) : (
          <h2>Not Found!</h2>
        )}
      </div>
    </>
  );
}

export default Home;
