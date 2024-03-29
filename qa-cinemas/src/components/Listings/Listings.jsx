import React, { useEffect, useState } from "react";
import "./listings.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const Listings = () => {
  const API_URL = "http://localhost:3000/movie";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listMovies = await response.json();
        console.log(listMovies);
        setMovies(listMovies);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    (async () => await fetchMovies())();
  }, []);

  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const renderCard = (movies, index) => {
    return (
      <Col>
        <Card className="m-5" style={{ width: "28rem" }} key={index}>
          <Card.Img variant="top" src={movies.poster} alt="movie poster" />
          <Card.Body>
            <Card.Title className="fs-2">{movies.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <ListGroup className="lh-1" variant="flush">
                <ListGroup.Item>Genre: {movies.genre}</ListGroup.Item>
                <ListGroup.Item>Release-Year: {movies.releaseYear}</ListGroup.Item>
                <ListGroup.Item>Runtime: {movies.runtime}</ListGroup.Item>
                <ListGroup.Item href={movies.link}>Cast: {movies.cast}</ListGroup.Item>
              </ListGroup>
            </Card.Subtitle>
            <Card.Text>{movies.description}</Card.Text>
            <Button href="/Bookings" variant="primary">
              Ticket
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row className="mb-5">
        <h1>Take a look at what's on!</h1>
      </Row>
      <Row>{movies.map(renderCard)}</Row>
    </Container>
  );
};

export default Listings;
