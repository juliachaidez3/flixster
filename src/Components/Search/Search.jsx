import React from 'react'
import "./Search.css"

const Search = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const filteredMovies = movies.filter((movie) =>
  movie.name.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  return (
  <>
    <div className='search-container'>
      <input 
        type="text"
        placeholder='Search Movie'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search-input'
      />
    </div>
  </>
  )
}

export default Search