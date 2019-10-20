import React, { Component } from 'react';
import MovieCard from "../components/MovieCard"

// API RELATED
import axios from "axios";
require('dotenv').config()

const BASEURL_OMDB = "https://www.omdbapi.com/?i=";
const APIKEY_OMDB = "&apikey="+process.env.REACT_APP_APIKEY_OMDB;
const BASEURL_TMDB = "https://api.themoviedb.org/3/movie/"
const APIKEY_TMDB="?api_key="+process.env.REACT_APP_APIKEY_TMDB+"&language=en-US"


class MovieDetail extends Component {
    state={
        movie_OMDB:{},
        movie_TMDB:{}

    }
    componentDidMount() {
        console.log("making axio request to movie " + this.props.match.params.id)

        axios.get(BASEURL_TMDB + this.props.match.params.id + APIKEY_TMDB).then(res=>{
            let movie_TMDB = res.data
    
            let imdb_id = movie_TMDB.imdb_id
            console.log(imdb_id)
    
    
            axios.get(BASEURL_OMDB + imdb_id + APIKEY_OMDB)
          .then(res => {
              this.setState({ 
                  movie_OMDB: res.data,
                  movie_TMDB: movie_TMDB
              })
              console.log(res.data)
            })
          .catch(err => console.log(err));
      })
      
    }

    handleReturn=()=>{
        window.location.assign("/result")
    }

    render(){
        console.log(this.state.movie_OMDB)
        console.log(this.state.movie_TMDB)
        return(
            <MovieCard movie_OMDB={this.state.movie_OMDB} movie_TMDB={this.state.movie_TMDB} handleReturn={this.handleReturn}/>
        )
    }
}

export default MovieDetail;
