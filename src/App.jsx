import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Search from "./Components/Search/Search.jsx";
import MovieList from "./Components/MovieList/MovieList.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header title="Flixster"/>
      <MovieList />
      <Footer title="Designed By Julia Chaidez"/>
    </>
  )
}

export default App;
