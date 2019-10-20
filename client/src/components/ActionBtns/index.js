import React from "react";
import { ButtonToolbar, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function ActionBtns(props) {
    return (<>
            <ButtonToolbar className="d-flex justify-content-center actionBtn_container">
                <OverlayTrigger
                    placement="left"
                    overlay={
                        <Tooltip id={`tooltip-${"left"}`}>
                            Don't like.
                </Tooltip>
                    }
                >
                    <Button onClick={props.actionBtnHandlers} name="dislike" variant="outline-dark" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                        <i name="dislike" className="far fa-thumbs-down buttonIcon"></i>
                    </Button>
                </OverlayTrigger>


                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${"bottom"}`}>
                            Don't know.
                </Tooltip>
                    }
                >
                    <Button onClick={props.actionBtnHandlers} name="unknown" variant="outline-dark" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                        <i name="unknown" className="fas fa-question buttonIcon"></i>
                    </Button>
                </OverlayTrigger>


                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip id={`tooltip-${"right"}`}>
                            Like.
                        </Tooltip>
                    }
                >
                <Button onClick={props.actionBtnHandlers} name="like" variant="outline-dark" className="actionBtn text-center mx-lg-5 mx-md-3 mx-sm-3 mx-2">
                    <i name="like" className="far fa-thumbs-up buttonIcon"></i>
                </Button>
                </OverlayTrigger>


            </ButtonToolbar>
    </>)
}

export default ActionBtns