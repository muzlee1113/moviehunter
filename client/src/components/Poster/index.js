import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API"


class Poster extends React.Component {
    state={
        details: false,
        // movie_TMDB: {},
        // movie_OMDB:{}
    }

    componentDidMount() {
        console.log("this is the did mount from poster")
    }

    showDetails=()=>{
        this.setState({
            details: true
        })
    }
    hideDetails=()=>{
        this.setState({
            details: false
        })
    }

    // getMovieDetails = tmdb_id => {
    //     console.log("get movie " + tmdb_id)
    //     API.getMovie_TMDB(tmdb_id)
    //     .then(res => {
    //         let movie_TMDB = res.data
    //         //match IMDB
    //         let imdb_id = movie_TMDB.imdb_id
    //         console.log(imdb_id)
    //         API.getMovie_OMDB(imdb_id)
    //         .then(res=>this.setState({
    //             movie_OMDB: res.data,
    //             movie_TMDB: movie_TMDB
    //         })).catch(err => console(err))
    //     })
    //     .catch(err => console.log(err));

    // }

    render() {
        
        const id = this.props.movie.id || ""
        const poster = this.props.movie.poster_path || ""
        const title = this.props.movie.title
        const overview = this.props.movie.overview || ""
        // const genres = this.state.movie_TMDB.genres || []
        // const director = this.state.movie_OMDB.Director || ""
        // const actors = this.state.movie_OMDB.Actors || ""
        // const writer = this.state.movie_OMDB.Writer || ""
        // const year = this.state.movie_OMDB.Year || ""
        // const rated = this.state.movie_OMDB.Rated || ""
        // const runtime = this.state.movie_OMDB.Runtime || ""
        // const awards = this.state.movie_OMDB.Awards || ""
        // const imdbRating = this.state.movie_OMDB.imdbRating || ""
        // const ratings = this.state.movie_OMDB.Ratings || []
        // const company = this.state.movie_OMDB.Production || ""
        // const boxoffice = this.state.movie_OMDB.BoxOffice || ""
        return(<>
        
        <div className="card-container">
            <img className="poster" src={"http://image.tmdb.org/t/p/w400/"+ poster} alt="poster"/>
            {this.state.details?(
            <div className="overlay">
                <div className="article-title">
                    <div className="movie-title">{title}</div>
                    <div className="movie-overview">{overview}</div>
                    <Link to={"/movie/" + id}>
                        <div className="btn-container">
                            <div  className="line-btn"> + See more</div>
                        </div>
                        
                    </Link>
                </div>
            </div>):(<></>)}
            
        </div>
        <div className="btn-container">
            {this.state.details?(<div onClick={this.hideDetails} className="black-btn">Close Intro</div>):(<div onClick={this.showDetails} className="black-btn">View Intro</div>)}
        </div>
    </>)}
}

export default Poster


