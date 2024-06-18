import {useState, useEffect} from "react"
import './Search.css';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';

const Search = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Fetch the list of genres
    const fetchGenres = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };
  
    fetchGenres();
  }, []);

  const getGenreNames = (genreIds) => {
    return genreIds.map(id => genres.find(genre => genre.id === id).name).join(', ');
  };

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
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title}
            style={{ width: "100%" }}
          />
          <h3>Release Date: {selectedMovie.release_date}</h3>
          <h4>Overview: {selectedMovie.overview}</h4>
          <h4>Genres: {getGenreNames(selectedMovie.genre_ids)}</h4>
        </Modal>
      )}
    </>
  );
};

export default Search;