import React, { Component } from "react";
import { Carousel, Row } from "react-bootstrap";


class ResultCarousel extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                interval={null}
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                className="text-center carousel_container"
            >
                <Carousel.Item className="carousel_item_container">
                    <img
                        style={{"verticalAlign":"start"}}
                        className="d-block poster center"
                        src="https://dl9fvu4r30qs1.cloudfront.net/46/bc/85b27c604bbf9579d36ab4a1e023/macbeth-poster.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block poster center"
                        src="https://racheldaymoviepresspack.files.wordpress.com/2015/10/maleficent_movie_poster_2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block poster center"
                        src="http://moviepostersalbuquerque.com/wp-content/uploads/2017/11/avatarposter.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block poster center"
                        src="https://img.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block poster center"
                        src="http://images.fandango.com/images/masterrepository/Fandango/186260/theAssassin.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}



export default ResultCarousel