import React from "react";
import "./new.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BTTF from "../../Assets/BTTF.jpg";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

const New = () => {
  return (
    <Container>
      <Stack gap={3}>
        <Row>
          <Col className="poster">
            <Image src={BTTF}></Image>
          </Col>
          <Col xs={5}>
            {" "}
            <h1>Big Cool Header</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              adipisci doloribus non nobis! Veniam eveniet quisquam odio, error
              culpa quod, qui fugit iure numquam, inventore explicabo? Assumenda
              voluptatem dolorum atque! Laborum fugiat veritatis accusamus eos
              maxime pariatur molestias minus dicta, similique hic! Dolor
              delectus vitae quia, nulla inventore accusamus quis, odio suscipit
              totam officiis iure provident earum aspernatur sapiente minima!
              Quo nisi nesciunt obcaecati ipsum impedit culpa odit consequuntur
              qui quam cum vero delectus, at dolore aperiam dicta ipsa
              architecto veniam provident asperiores neque eos cumque excepturi
              reiciendis voluptate! Id. Fuga veritatis perspiciatis nostrum
              architecto at impedit et vel, dolores sapiente in temporibus,
              culpa aperiam. Similique odio ullam doloremque reiciendis maiores
              omnis? Modi, iure? Doloremque eaque corporis voluptates
              praesentium quidem!
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="poster">
            <Image src={BTTF}></Image>
          </Col>
          <Col xs={5}>
            <h1>Big Cool Header</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              adipisci doloribus non nobis! Veniam eveniet quisquam odio, error
              culpa quod, qui fugit iure numquam, inventore explicabo? Assumenda
              voluptatem dolorum atque! Laborum fugiat veritatis accusamus eos
              maxime pariatur molestias minus dicta, similique hic! Dolor
              delectus vitae quia, nulla inventore accusamus quis, odio suscipit
              totam officiis iure provident earum aspernatur sapiente minima!
              Quo nisi nesciunt obcaecati ipsum impedit culpa odit consequuntur
              qui quam cum vero delectus, at dolore aperiam dicta ipsa
              architecto veniam provident asperiores neque eos cumque excepturi
              reiciendis voluptate! Id. Fuga veritatis perspiciatis nostrum
              architecto at impedit et vel, dolores sapiente in temporibus,
              culpa aperiam. Similique odio ullam doloremque reiciendis maiores
              omnis? Modi, iure? Doloremque eaque corporis voluptates
              praesentium quidem!
            </p>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default New;
