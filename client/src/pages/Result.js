import React, {Component} from "react";
import ResultCarousel from "../components/ResultCarousel"
import ResultList from "../components/ResultList"
import Btns from "../components/ActionBtns_result"
import LayoutBtns from "../components/LayoutBtns"
import { Spinner } from "react-bootstrap";


// dummy data
import dummyMovies from "../dummyMovies.json"






class Result extends Component {
    state={
        layout: "carousel",
        results: [...dummyMovies.results],
        mount: false
    }

    componentWillMount(){
        let score = JSON.parse(localStorage.getItem("MovieHunterScore"))
        console.log(score)
        // make api request get the result list
        // here i'm mimicing the delay
        setTimeout(this.handleResults, 10000)
        
    }

    handleResults=()=>{
        console.log("start making ajax request")
        // the request should return an array of movie objects

        // set state of results
        
        // call the handleMount function when the result is return in a promise(.then)
        this.handleMount()
    }

    handleMount=()=>{
        this.setState({
            mount: true
        })
    }

    handleLayout=(e)=>{
        const{name}=e.target
        this.setState({
            layout: name
        })
    }
    render(){
        return (<>
            {this.state.mount?(<>
                <LayoutBtns handleLayout={this.handleLayout} />
                {this.state.layout==="carousel"?(<ResultCarousel results={this.state.results}/>):(<ResultList results={this.state.results}/>)}
                <Btns results={this.state.results}/>
            </>):(
                <div className="text-center loadingContainer">
                    <Spinner className="my-2" animation="grow" />
                    <div className="my-2" >Calculating...</div>
                </div>
            )}
            
        </>)
    }
}

export default Result