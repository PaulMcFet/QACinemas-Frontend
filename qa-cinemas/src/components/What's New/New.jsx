import React from "react";
import "./new.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BTTF from "../../Assets/BTTF.jpg";
import SPVSTW from "../../Assets/SPVSTW.jpeg";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";


const New = () => {
  return (
    <Container>
      <Stack gap={3}>
        <Row>
          <Col className="poster">
            <img className="poster" src={BTTF}/>
          </Col>
          <Col xs={5}>
            {" "}
            <h1>Back To The Future</h1>
            <p>
            a 1985 American science fiction film directed by <a href="https://www.imdb.com/name/nm0000709/"><u>Robert Zemeckis </u></a>, 
            and written by Zemeckis and Bob Gale. It stars <a href="https://www.imdb.com/name/nm0000150/"><u>Michael J. Fox </u></a>, <a href="https://www.imdb.com/name/nm0000502/"><u>Christopher Lloyd</u></a>, 
            <a href="https://www.imdb.com/name/nm0000670/"><u>Lea Thompson</u></a>, <a href="https://www.imdb.com/name/nm0000417/"><u>Crispin Glover</u></a>, and <a href="https://www.imdb.com/name/nm0001855/"><u>Thomas F. Wilson</u></a>. Set in 1985, the story follows 
            Marty McFly (Fox), a teenager accidentally sent back to 1955 in a time-traveling DeLorean 
            automobile built by his eccentric scientist friend Doctor Emmett "Doc" Brown (Lloyd). 
            Trapped in the past, Marty inadvertently prevents his future parents' meeting—threatening his 
            existence—and is forced to reconcile the pair and somehow get back to the future.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="poster">
            <img className="poster" src={SPVSTW}/>
          </Col>
          <Col xs={5}>
            <h1>Scott Pilgrim Vs The World</h1>
            <p>
            a 2010 romantic action comedy film co-written, produced,
            and directed by <a href="https://www.imdb.com/name/nm0942367/"><u>Edgar Wright</u></a>, based on the graphic novel 
            series Scott Pilgrim by Bryan Lee O'Malley. It stars <a href="https://www.imdb.com/name/nm0148418/"><u>Michael Cera</u> </a>
            as Scott Pilgrim, a slacker musician who is trying to win a competition 
            to get a record deal while also battling the seven evil exes of his 
            newest girlfriend Ramona Flowers, played by <a href="https://www.imdb.com/name/nm0935541/"><u>Mary Elizabeth Winstead </u></a>
            </p>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default New;
