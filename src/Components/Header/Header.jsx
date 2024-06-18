import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
    <>
        <header className="app-header">
            <h1>{props.title}</h1>
            <h5 id="description">Your ultimate destination for discovering the latest movies currently playing in theaters! Whether you're a movie enthusiast or just looking for a great film to watch, Flixter has got you covered.</h5>
        </header>
    </>
    )
}

export default Header