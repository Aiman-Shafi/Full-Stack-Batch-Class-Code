// import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?`;
const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const API_KEY = `&api_key=e53e9f5f0bdd95b0008076374678e0e0`;

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);

  const searchMovies = async (title = "batman") => {
    console.log(`${API_URL}${title}${API_KEY}`);
    const response = await fetch(`${API_URL}${title}${API_KEY}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };

  const fetchCollection = async () => {
    const res = await fetch(BASE_URL + API_KEY);
    const data = await res.json();
    setGenres(data.genres);
  };

  const showCollection = async (name) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${name}&include_adult=false&language=en-US&page=1` +
        API_KEY
    );
    const collections = await res.json();
    console.log("SHOW COLLECTION:", collections);
    setMovies(collections.results);
  };

  useEffect(() => {
    searchMovies("BATMAN");
    fetchCollection();
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
      <div className="filter">
        <ul>
          {genres.map((genre) => (
            <li key={genre.id} onClick={() => showCollection(genre.name)}>
              {genre.name}
            </li>
          ))}
        </ul>
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
