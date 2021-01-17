import React, { Component } from 'react';
import MovieCard from "../components/MovieCard"
import API from "../utils/API";


// API RELATED
import axios from "axios";
require('dotenv').config()

const BASEURL_OMDB = "https://www.omdbapi.com/?i=";
const APIKEY_OMDB = "&apikey="+process.env.REACT_APP_APIKEY_OMDB;
const BASEURL_TMDB = "https://api.themoviedb.org/3"
const APIKEY_TMDB="?api_key="+process.env.REACT_APP_APIKEY_TMDB+"&language=en-US"

class MovieDetail extends Component {
    state={
        movie_OMDB:{},
        movie_TMDB:{}

    }
    componentDidMount() {
        this.getMovieDetails(this.props.match.params.id)
    }

    getMovieDetails = tmdb_id => {
        
        API.getMovie_TMDB(tmdb_id)
        .then(res => {
            let movie_TMDB = res.data
            //match IMDB
            let imdb_id = movie_TMDB.imdb_id
            console.log(imdb_id)
            API.getMovie_OMDB(imdb_id)
            .then(res=>this.setState({
                movie_OMDB: res.data,
                movie_TMDB: movie_TMDB
            })).catch(err => console(err))
        })
        .catch(err => console.log(err));

    }

    handleReturn=()=>{
        window.location.assign("/result")
    }

    render(){
        console.log(this.state.movie_OMDB)
        console.log(this.state.movie_TMDB)
        console.log("hi from render")
        return(
            <MovieCard movie_OMDB={this.state.movie_OMDB} movie_TMDB={this.state.movie_TMDB} handleReturn={this.handleReturn}/>
        )
    }
}

export default MovieDetail;
