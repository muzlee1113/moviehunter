import React, {Component} from "react";
import Poster from "../components/Poster"
import ActionBtns from "../components/ActionBtns"
import StarRating from "../components/StarRating"
import API from "../utils/API"
import { Spinner } from "react-bootstrap";


import dummyMovies from "../dummyMovieIds.json"

let counter=0
// http://image.tmdb.org/t/p/w400/

// "results": [
    // {
    //     "vote_count": 2034,
    //     "id": 19404,
    //     "video": false,
    //     "vote_average": 9,
    //     "title": "Dilwale Dulhania Le Jayenge",
    //     "popularity": 13.863,
    //     "poster_path": "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    //     "original_language": "hi",
    //     "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
    //     "genre_ids": [
    //         35,
    //         18,
    //         10749
    //     ],
    //     "backdrop_path": "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
    //     "adult": false,
    //     "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    //     "release_date": "1995-10-20"
    // },
class Search extends Component {

    state={
        mount:false,
        movies:[...dummyMovies],//an array of objects
        movie:{},// an object of corrent movie
        ratedMovies:[],
        error: false,
        score:{},// an object like score = {
                            // id1: "like", //or use a num here
                            // id1: "dislike",
                            //}
                
        // results:{
        //     like:[],
        //     dislike:[],
        //     unknown:[]
        // }
    }

    componentDidMount(){
        counter = 20
        console.log("trying to get a random movie...")
        this.getRandomMovie()
    }
    
    // get a random movie from list based on random number
    getRandomMovie=()=>{
        let {tmdbId, user_count} = this.state.movies[this.randomNumGenerator()]
        if (user_count>40000){
            console.log("get a qualified one! So get movie details by id " + tmdbId)
            this.getMovieDetails(tmdbId) 
        }else{
            console.log("don't have enough rating, grabbing another movie...")
            this.getRandomMovie()
        }
    }
    //random number
    randomNumGenerator=()=>{
        console.log("get radom")
        let random = Math.floor(Math.random()*this.state.movies.length)
        if(this.state.ratedMovies.indexOf(random)<0){
            this.setState({
                ratedMovies: [...this.state.ratedMovies, random]
            })
            console.log("random number is")
            console.log(random)
            console.log("these movies have been rated")
            console.log(this.state.ratedMovies)
            return random
        }else{
            console.log("repeated")
            return this.randomNumGenerator()
        }
    }
    // get movie details by tmdb_id and update state.movie
    getMovieDetails = tmdb_id => {
        console.log("get movie " + tmdb_id)
        API.getMovie_TMDB(tmdb_id)
        .then(res => 
            {
                this.setState({
                movie: res.data,
                mount: true
            },()=>{console.log("set mount to true")})
        })
        .catch(err => console.log(err));
    }

    // plan A three clickhandlers for actionBtns
    // actionBtnHandlers=(e)=>{
    //     // rate for previous
    //     e.preventDefault()
    //     const{name} = e.currentTarget
    //     console.log(name)
    //     // return result
    //     // should save result in local storage or database if user sign in
    //     if(name==="like"){
    //         console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is like!")
    //         this.setState({
    //             // score: {...this.state.score, [this.state.movie.id]: "like"}
    //             results: {...this.state.results, like:[...this.state.results.like, this.state.movie.id]}
    //         })
    //     }else if(name==="dislike"){
    //         console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is disliked!")
    //         this.setState({
    //             // score: {...this.state.score, [this.state.movie.id]: "dislike"}
    //             results: {...this.state.results, dislike:[...this.state.results.dislike, this.state.movie.id]}
    //         })
    //     }else if(name==="unknown"){
    //         console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is unknown!")
    //         this.setState({
    //             // score: {...this.state.score, [this.state.movie.id]: "unknown"}
    //             results: {...this.state.results, unknown:[...this.state.results.unknown, this.state.movie.id]}
    //         })
    //     }else{
    //         this.setState({
    //             error: true
    //         })
    //     }
    //     // set the next one
    //     counter --
    //     if(counter>0){
    //        this.getRandomMovie()

    //     }else{
    //         // window.location.assign("/result")
    //     }
    // }

        // plan B Star rating 
    starRatingChangeHandler=(score)=>{
        console.log(score)
  
        this.setState({
            score: {...this.state.score, [this.state.movie.id]: score },
            mount: false
        },()=>{
            console.log("set mount to false")
            // set the next one
            counter --
            if(counter>0){
                this.getRandomMovie()
            }else{
                localStorage.setItem("MovieHunterScore", JSON.stringify(this.state.score))
                window.location.assign("/result")
            }
        })
    }



    render(){
        console.log("here is render")
        console.log(this.state.movie)
        return (<><div className="poster_container text-center">
        <div className="text-center my-3">Movies waited to be rated: {counter}</div>
        {this.state.mount?(<>
            
            <Poster movie={this.state.movie}/>
            {/* <ActionBtns movie={this.state.movie} actionBtnHandlers={this.actionBtnHandlers}/> */}
            
        </>):(
             <div className="text-center loadingContainer">
                <Spinner className="my-2" animation="grow" />
            </div>
        )}
        <StarRating starRatingChangeHandler={this.starRatingChangeHandler}/>
            {this.state.error?(<div className="text-center mt-5">Oops! Something wrong.</div>):(<div></div>)}
        </div>
        </>)
    }
}

export default Search