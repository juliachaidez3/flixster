import React from "react";
import "./App.css"
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Search from "./Components/Search/Search.jsx";
import MovieList from "./Components/MovieList/MovieList.jsx";

const App = () => {
  return (
    <>
      <Header title="Header"/>
      {/* <Search /> */}
      <MovieList />
      <div className="app">
        <MovieCard
          imageURL=""
          movieTitle="Title"
          votingAverage="Voting Average"
        />
      </div>
      <Footer />
    </>
  )
}

export default App;
