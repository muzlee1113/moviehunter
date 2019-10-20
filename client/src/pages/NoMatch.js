import React from "react";
import { Jumbotron, Container } from "react-bootstrap";


function NoMatch(){
    return(
    <Jumbotron className="bigName" fluid>
        <Container>
          <h1>404</h1>
          <p>
            You Lost.
          </p>
        </Container>
      </Jumbotron>
    )
}

export default NoMatch;
