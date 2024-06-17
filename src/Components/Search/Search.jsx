import React, { useState } from 'react';
import './Search.css';
import MovieCard from '../MovieCard/MovieCard';

const Search = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            movieTitle={movie.original_title}
            votingAverage={movie.vote_average} 
          />
        ))}
      </div>
    </>
  );
};

export default Search;