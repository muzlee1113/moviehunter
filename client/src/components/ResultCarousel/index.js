import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";


const posterStyle={
    "width": "340px",
    "height": "505px",
    "objectFit": "cover",
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto"
}

const handleOnDragStart = e => e.preventDefault()



class ResultCarousel extends Component {


    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item)
        console.log('Slide`s position during a change: ', e.slide)
    }
    
    onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item)
        console.log('Slide`s position after changes: ', e.slide)
    }

    render() {
        const results = this.props.results.map((movie) => (
            <Link to={"/movie/" + movie.id}>
            <div className="card-container">
                <img 
                style={posterStyle}
                src={"http://image.tmdb.org/t/p/w400/"+ movie.poster_path}
                onDragStart={handleOnDragStart} className="yours-custom-class" />
                <div className="overlay">
                    <div className="article-title">
                        <h3>{movie.title}</h3>
                        <p>popularity: {movie.popularity}</p>
                        <div className="movie-overview">{movie.overview}</div>
                    </div>
                </div>
            </div>
            </Link>
        ))

        return (
            <div className="carousel_container">
                <AliceCarousel 
                items={results}
                responsive={
                    {375: {
                        items: 1
                    },
                    610:{
                        items: 2
                    },
                    960:{
                        items: 3
                    },
                    1440: {
                        items: 4
                    }}
                }
                stagePadding={
                    {paddingLeft: 0,     // in pixels
                    paddingRight: 0}
                }
                duration={500}
                swipeDisabled={false}
                autoPlay={false}
                fadeOutAnimation={true}
                infinite={false}
                keysControlDisabled={false}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
                >
                </AliceCarousel>
            </div>
        )
    }

}



export default ResultCarousel