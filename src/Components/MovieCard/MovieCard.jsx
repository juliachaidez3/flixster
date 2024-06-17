import React from "react";
import "./MovieCard.css"

const MovieCard = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.imageURL} alt={props.movieTitle} />
            <h2>{props.movieTitle}</h2>
            <h4>Voting Average: {props.votingAverage}</h4>
        </div>
    </>
    )
}

export default MovieCard