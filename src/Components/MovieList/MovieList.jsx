import React from 'react'
import "./MovieList.css"
import {useState, useEffect} from "react"

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
          <div className="movie-item" key={movie.id}>
            <p>Movie: {movie.original_title}</p>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default MovieList