import React from "react";
import "./MovieCard.css"

const MovieCard = ({movieTitle, img, votingAverage, onClick}) => {
    return (
    <>
        <div className="card" onClick={onClick}>
            <img src={img} alt={movieTitle} />
            <h2>{movieTitle}</h2>
            <h4>⭐️ {votingAverage}</h4>
        </div>
    </>
    )
}

export default MovieCard