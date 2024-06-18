import React from "react";
import "./Footer.css"

const Footer = (props) => {
    return (
        <>
            <footer className="app-footer">
                <div id="about">
                    <h2 id="about-header">About:</h2>
                    <h3 id="about-text">In this project, we have built a dynamic and user-friendly website that showcases the latest movies hitting the big screen. Leveraging the powerful The Movie Database (TMDb) API, Flixter provides up-to-date information on the newest releases, ensuring you never miss out on the latest cinematic experiences.</h3>
                    <h1 id="design">{props.title}</h1>
                </div>
                <div>
                    
                </div>
            </footer>
        </>
        )
}

export default Footer