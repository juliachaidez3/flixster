import React, { useState } from 'react';
import './Search.css';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';

const Search = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            movieTitle={movie.title}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            votingAverage={movie.vote_average} 
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

       {/* Only display Modal when pokemoncard is clicked/selected */}
      {/* If selected pokemon is not null then show modal.... */}

      {/* Ternary statement  */}

      {selectedMovie && (
        <Modal
          show={selectedMovie !== null}
          onClose={() => setSelectedMovie(null)}
        >
          <h2>{selectedMovie.title}</h2>
          <img
            src={`https://img.pokemondb.net/artwork/large/${selectedMovie.title}.jpg`}
            alt={selectedMovie.title}
            style={{ width: "100%" }}
          />
        </Modal>
      )}
    </>
  );
};

export default Search;