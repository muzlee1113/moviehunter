import React from "react";
import { Button} from "react-bootstrap";


function LayoutBtns (props) {
    
    
    return (<div className="my-5 text-center">
          <a className="layoutBtn mx-2" name="carousel" onClick={props.handleLayout}>Carousel</a>|<a className="layoutBtn mx-2" name="list" onClick={props.handleLayout}>List</a> 
    </div>)
    
    
}

export default LayoutBtns