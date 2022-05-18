import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Scott from "../../Assets/SPVSTW.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./home.css";
import Row from "react-bootstrap/Row";
import Thor from "../../Assets/ThorR.jpg";
import Gent from "../../Assets/TheG.jpg";
import Int from "../../Assets/InterS.jpg";

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
        <Col >
          <h1>
            Welcome to QA Cinemas, home of great talent and great views!
          </h1>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            ipsum vitae, enim alias quisquam repudiandae deserunt ad. Repellat
            sunt doloribus eaque dolore rem tempore amet quis quia, sapiente,
            eum tenetur? Incidunt, excepturi ab. Officiis ducimus natus illo ut
            ullam porro labore hic adipisci libero debitis voluptate rerum autem
            quae iure in unde molestiae, maiores minus reprehenderit sint
            numquam? Consectetur, temporibus. Iste dicta similique vitae libero
            maxime distinctio reprehenderit recusandae odio nihil ad, dolores
            vero aspernatur laudantium? Iure fugit necessitatibus quod
            voluptates earum, veritatis repudiandae sequi voluptatem minima a
            deleniti laudantium. Nisi nihil deserunt soluta nesciunt dolorum?
            Facilis dolorum maiores explicabo omnis quisquam deleniti doloribus
            reiciendis ducimus delectus quo et, autem quia minus, magni,
            molestias sint asperiores eius laudantium quaerat sit.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
