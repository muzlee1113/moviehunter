import React from "react";
import { ButtonToolbar, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function ActionBtns(props) {
    return (<>
            <ButtonToolbar className="d-flex justify-content-center actionBtn_container">
         
                <div className="text-center action" onClick={props.actionBtnHandlers}>
                    <div name="dislike" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                     👎
                    </div>
                    <div>Nah! I don't like it.</div>
                </div>    
                 
       

                <div className="text-center action" onClick={props.actionBtnHandlers}>
                    <div name="unknown" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                    ❓
                    </div>
                    <div>I haven't watched this.</div>
                </div>   
                
                <div className="text-center action" onClick={props.actionBtnHandlers}>
                    <div name="like" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                       👍
                    </div>
                    <div>Yup! I like this!</div>
                </div>   


            </ButtonToolbar>
    </>)
}

export default ActionBtns