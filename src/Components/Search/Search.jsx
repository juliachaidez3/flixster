import {useState, useEffect} from "react"
import './Search.css';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../Modal/Modal';

const Search = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setSortedMovies(movies);
  }, [movies]);

  const filteredMovies = sortedMovies.filter((movie) =>
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

  {/* Sort Functionality */}
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    let sortedMovies = [...movies];
    if (selectedOption === 'release-date') {
      sortedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

      {sortedMovies.map((movie, index) => (
        <p key={index}>{movie.title} - {movie.release_date}</p>
        ))}

    }
    if (selectedOption === 'alphabetic-order') {
      sortedMovies.sort((a,b) => a.title.localeCompare(b.title));

      {sortedMovies.map((movie, index) => (
        <p key={index}>{movie.title}</p>
        ))}

    }
    if (selectedOption === 'rating') {
      sortedMovies.sort((a,b) => b.vote_average-a.vote_average);

      {sortedMovies.map((movie, index) => (
        <p key={index}>{movie.title} - {movie.vote_average}</p>
        ))}
    }
    setSortedMovies(sortedMovies);
  };

  const getGenreNames = (genreIds) => {
    // return genreIds.map(id => genres.find(genre => genre.id === id).name).join(', ');
    return genreIds.map(id => {
      const genre = genres.find(genre => genre.id === id);
      return genre ? genre.name : 'Unknown';
      }).join(', ');
  };

  const toggleDarkMode = () => {

    setIsDarkMode(!isDarkMode);


}

  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : ''}>
    <div className="nav-bar">
    <div className={`nav-bar-item search-bar`}>
        <input
          type="text"
          placeholder="Search Movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Sort Functionality */}
      <div className="nav-bar-item">
        <label htmlFor="sort-options">Sort by: </label>
        <select id="sort-options" value={sortOption} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="alphabetic-order">Alphabetic Order</option>
          <option value="release-date">Release Date</option>
          <option value="rating">Rating</option>
        </select>
    </div>

      <button className="nav-bar-item" onClick={toggleDarkMode}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
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
          <h5>Genres: {getGenreNames(selectedMovie.genre_ids)}</h5>
        </Modal>
      )}

      


  </div>
    </>
  );
};

export default Search;