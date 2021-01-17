import React, {Component} from "react";
import Rating from 'react-rating'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

 
class StarsRating extends Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (<>
        <div className="text-center actionBtn_container">
            <Rating
                className="starsBtns mb-2"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                onClick={this.props.starRatingChangeHandler}
            /> 

            
            <div onClick={(e)=>this.props.starRatingChangeHandler("")} className="unknownBtn_container ml-3">
                <i className="fas fa-arrow-right unknownBtn"></i>
                <div classNam="mr-2">Pass!</div>
                {/* <Button className="unknownBtn" variant="outline-dark"><i className="fas fa-arrow-right"></i></Button> */}
              
            </div>
        </div>
        <div>Rate the movie on a 5-star scale!</div>
      </>)
     
    }
}

export default StarsRating