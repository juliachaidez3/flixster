import React from 'react'
import {useState, useEffect} from "react"
import MovieCard from "../MovieCard/MovieCard.jsx";
import "./MovieList.css"

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const apiKey = import.meta.env.VITE_API_KEY;
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;  

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            movieTitle={movie.original_title}
            votingAverage={movie.vote_average} 
          />
        ))}
      </div>
    </>
  )
}

export default MovieList