import React, {Component} from "react";
import Poster from "../components/Poster"
import ActionBtns from "../components/ActionBtns"
import StarRating from "../components/StarRating"


import dummyMovies from "../dummyMovies.json"

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
        movies:[...dummyMovies.results],//an array of objects
        movie:{},// an object of corrent movie
        ratedMovies:[],
        error: false,
        score:{},// an object like score = {
                            // id1: "like", //or use a num here
                            // id1: "dislike",
                            //}
                // 
        // results:{
        //     like:[],
        //     dislike:[],
        //     unknown:[]
        // }
    }

    componentDidMount(){
        counter = 20
       
        this.setState({
            movie: {...this.state.movies[this.randomNumGenerator()]}
        })
    }

    //random number
    randomNumGenerator=()=>{
        console.log("get radom")
        let random = Math.floor(Math.random()*this.state.movies.length)
        if(this.state.ratedMovies.indexOf(random)<0){
            this.setState({
                ratedMovies: [...this.state.ratedMovies, random]
            })
            console.log(random)
            console.log(this.state.ratedMovies)
            return random
        }else{
            console.log("repeated")
            return this.randomNumGenerator()
        }
    }

    // plan A three clickhandlers for actionBtns
    actionBtnHandlers=(e)=>{
        // rate for previous
        e.preventDefault()
        const{name} = e.currentTarget
        console.log(name)
        // return result
        // should save result in local storage or database if user sign in
        if(name==="like"){
            console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is like!")
            this.setState({
                // score: {...this.state.score, [this.state.movie.id]: "like"}
                results: {...this.state.results, like:[...this.state.results.like, this.state.movie.id]}
            })
        }else if(name==="dislike"){
            console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is disliked!")
            this.setState({
                // score: {...this.state.score, [this.state.movie.id]: "dislike"}
                results: {...this.state.results, dislike:[...this.state.results.dislike, this.state.movie.id]}
            })
        }else if(name==="unknown"){
            console.log("id: "+ this.state.movie.id +" and name "+ this.state.movie.title+ " is unknown!")
            this.setState({
                // score: {...this.state.score, [this.state.movie.id]: "unknown"}
                results: {...this.state.results, unknown:[...this.state.results.unknown, this.state.movie.id]}
            })
        }else{
            this.setState({
                error: true
            })
        }
        // set the next one
        counter --
        if(counter>0){
            this.setState({
                movie: {...this.state.movies[this.randomNumGenerator()]}
            })

        }else{
            // window.location.assign("/result")
        }
    }

        // plan B Star rating
    
    starRatingChangeHandler=(score)=>{
        console.log(score)

       
        this.setState({
            score: {...this.state.score, [this.state.movie.id]: score }
        })
        
        
        // set the next one
        counter --
        if(counter>0){
            this.setState({
                movie: {...this.state.movies[this.randomNumGenerator()]}
            })

        }else{
            localStorage.setItem("MovieHunterScore", JSON.stringify(this.state.score))
            window.location.assign("/result")
        }
    }


    render(){
        return (<>
            <Poster counter={counter} movie={this.state.movie}/>
            {/* <ActionBtns movie={this.state.movie} actionBtnHandlers={this.actionBtnHandlers}/> */}
            <StarRating starRatingChangeHandler={this.starRatingChangeHandler}/>
            {this.state.error?(<div className="text-center mt-5">Oops! Something wrong.</div>):(<div></div>)}
        </>)
    }
}

export default Search