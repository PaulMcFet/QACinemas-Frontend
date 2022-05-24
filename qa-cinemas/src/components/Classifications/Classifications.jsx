import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Classifications = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Card border="warning" style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title className="text-center">Classifications</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>(U)</strong> Suitable for all
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(PG)</strong> Parental Guidance
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(12A)</strong> Cinema release suitable for 12 years
                    and over
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(12)</strong> Video release suitable for 12 years
                    and over
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(15)</strong> Suitable only for 15 years and over
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(18)</strong> Suitable only for adults
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>(R18)</strong> Adults works for licensed premises
                    only
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
              <Card.Link href="https://www.bbfc.co.uk/about-classification">
                bbfc guidelines
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
};

export default Classifications;
