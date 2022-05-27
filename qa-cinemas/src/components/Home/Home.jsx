import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Scott from "../../Assets/SPVSTW.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Thor from "../../Assets/ThorR.jpg";
import Gent from "../../Assets/TheG.jpg";
import Int from "../../Assets/InterS.jpg";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <Container>
      <Row md={2}>
        <Col lg>
          <Carousel fade>
            <Carousel.Item interval={5000}>
              <img className="d-block poster" src={Scott} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block poster" src={Thor} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block poster" src={Gent} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block poster" src={Int} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h1>Welcome to QA Cinemas, home of great talent and great views!</h1>
          <p className="info">
            Established in 2022 and situated directly across from the <a href="https://www.hrp.org.uk/tower-of-london/#gs.0n9x4s"><u> Tower of London</u></a>, this
            bespoke, budget friendly Cinematic experience boasts the 
            largest cinema screens and seating areas in the UK. With 
            VIP seating , and a menu created by <a href="https://www.gordonramsay.com/"><u>Gordon Ramsay</u></a>, you'd find it 
            near impossible to find a similar experience anywhere else in 
            the world.   
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
