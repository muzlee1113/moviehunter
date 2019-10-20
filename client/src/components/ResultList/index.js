import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";



const posterStyle={
    "width": "340px",
    "height": "505px",
    "objectFit": "cover",
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto"
}

const handleOnDragStart = e => e.preventDefault()


class ResultList extends Component {

    

    render() {

        return (<>
            {this.props.results.map(movie=>(
                <Container>
                    <Card className="my-3">
                        <Row className="align-items-center justify-content-around" noGutters={true}>
                            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Card.Img className="listPoster center" variant="top" src={"http://image.tmdb.org/t/p/w400/"+ movie.poster_path} />
                            </Col>
                            <Col xs={12} sm={12}  md={9} lg={9} xl={9}>
                                <Card.Body className="m-3">
                                    <Card.Title><b>{movie.title}</b></Card.Title>
                                    <Card.Text >
                                        <p>popularity: {movie.popularity}</p>
                                        <div>{movie.overview}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            ))}
            
        </>)
    }

}



export default ResultList