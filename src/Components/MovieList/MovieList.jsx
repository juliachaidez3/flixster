import React from 'react'
import {useState, useEffect} from "react"
import Search from '../Search/Search.jsx';
import "./MovieList.css"

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, []);

const fetchMovies = async (page) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;  

  const response = await fetch(url);
  const data = await response.json();
  setMovies((prevMovies) => {
    const newMovies = data.results.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
    return [...prevMovies, ...newMovies];
    });
};

const loadMore = () => {
  const nextPage = currentPage + 1;
  setCurrentPage(nextPage);
  fetchMovies(nextPage);
};

  return (
    <>
      <Search movies={movies}/>
      <button id="load-more-btn" onClick={loadMore}>
        Load More
      </button>
    </>
  )
}

export default MovieList