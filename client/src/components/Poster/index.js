import React from "react";

function Poster(props) {
    return (<>
        <div className="poster_container text-center">
        <div className="text-center my-3">Movies waited to be rated: {props.counter}</div>
            <div className="card-container">
                <img className="poster" src={"http://image.tmdb.org/t/p/w400/"+props.movie.poster_path} alt="poster"/>
                <div className="overlay">
                    <div className="article-title">
                        <h3>{props.movie.title}</h3>
                        <br/>
                        <p className="movie-overview">{props.movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Poster


