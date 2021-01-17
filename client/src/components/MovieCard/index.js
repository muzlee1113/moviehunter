import React, {Component} from "react";
import { Row, Container, Col, Card, Badge, Accordion, Button } from "react-bootstrap";


function MovieCard(props) {
    console.log(props.movie_OMDB.Ratings)
    const poster = props.movie_TMDB.poster_path || ""
    const title = props.movie_TMDB.title
    const genres = props.movie_TMDB.genres || []
    const overview = props.movie_TMDB.overview || ""
    const director = props.movie_OMDB.Director || ""
    const actors = props.movie_OMDB.Actors || ""
    const writer = props.movie_OMDB.Writer || ""
    const year = props.movie_OMDB.Year || ""
    const rated = props.movie_OMDB.Rated || ""
    const runtime = props.movie_OMDB.Runtime || ""
    const awards = props.movie_OMDB.Awards || ""
    const imdbRating = props.movie_OMDB.imdbRating || ""
    const ratings = props.movie_OMDB.Ratings || []
    const company = props.movie_OMDB.Production || ""
    const boxoffice = props.movie_OMDB.BoxOffice || ""


    return (<>
        <Container className="detail_container">
            <div className="mb-2">
                <Row className="mb-4">
                <Button size="sm" variant="outline-secondary" onClick={props.handleReturn}><i className="fas fa-chevron-left mx-1"></i></Button>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <img className="detail_poster center" src={"http://image.tmdb.org/t/p/w400/" + poster} alt="poster" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="detail_title my-2">{title}</div>
                        <div className="my-2">
                            {genres.map(genre => (<Badge className="mr-2" variant="secondary">{genre.name}</Badge>))}
                        </div>
                        <div className="detail_overview my-2">
                            {overview}
                        </div>
                        <Accordion defaultActiveKey="0" className="mt-4">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Basic Info
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <div><b>Year</b>: {year}</div>
                                            <div><b>Rated</b>: {rated}</div>
                                            <div><b>Run Time</b>: {runtime}</div>
                                            <div><b>Director</b>: {director}</div>
                                            <div><b>Writer</b>: {writer}</div>
                                            <div><b>Cast</b>: {actors}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Rating
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <Card.Text>
                                            <div><b>Award</b>: {awards}</div>
                                            <div><b>IMDB Rating</b>: {imdbRating}</div>
                                            {ratings.map(rating => (
                                                <div><b>{rating.Source} Rating</b>:  {rating.Value}  </div>
                                            ))}
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Production
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <Card.Text>
                                            <div><b>Company</b>: {company}</div>
                                            <div><b>Box Office</b>: {boxoffice}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </Container>
    </>)
}

export default MovieCard


