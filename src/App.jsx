import React from "react";
import "./App.css"
import Header from "./Components/Header/Header.jsx";
import MovieCard from "./Components/MovieCard/MovieCard.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header title="Header"/>
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
