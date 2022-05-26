import React, { useState, useEffect } from "react";
import JwtManager from "../../utils/JwtManager";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import AvatarPlaceholder from "../../Assets/avatar-icon.png";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/user", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${JwtManager.getToken()}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.text();
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container fluid styles={{display: "flex"}}>
      <Row>
        <Col className="text-center">
          <h1>Profile</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="text-center">
              <Image fluid src={AvatarPlaceholder} />
              NAME
            </Card.Body>
          </Card>
        </Col>
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          assumenda labore temporibus, amet, voluptatibus ipsa quo, sit enim vel
          iure reiciendis quod sequi rerum rem veniam exercitationem blanditiis
          eos expedita. Vel quasi accusamus repellat atque et nesciunt magnam
          voluptatibus. Eaque eum consequatur enim quos suscipit nisi sunt eos,
          illo qui cum fugiat quaerat. Fugiat laborum praesentium, molestias
          eveniet excepturi nostrum. Pariatur harum ut itaque sed odit veritatis
          quas id rerum eum explicabo veniam maiores, cupiditate aspernatur?
          Quaerat, sit et modi explicabo omnis ipsa consequatur architecto
          totam. Aliquid doloremque earum neque? Magnam fuga numquam aut, optio
          molestiae ut explicabo eum atque dolores hic odio ea sequi accusantium
          harum quidem laudantium deleniti autem, nam suscipit amet quis est
          quo? Provident, maxime dolorem. Illo adipisci officiis cumque eius,
          tempore consectetur quisquam iste voluptatem ad accusamus accusantium
          enim necessitatibus suscipit! Dignissimos deserunt nisi quia aut illum
          eveniet? Error, expedita asperiores accusamus qui in doloribus.
        </Col>
      </Row>
      <Row>
        <Col>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          beatae quos non eveniet ex dolore! Molestiae ea quia earum, id
          cupiditate fugit, omnis sequi facere quo deserunt nemo perspiciatis
          saepe. Harum, voluptatum labore. Ipsam, hic! Deleniti, mollitia.
          Consequuntur at, velit nulla aliquam saepe iure facere sapiente quis
          deserunt, itaque adipisci laudantium neque ratione consectetur, amet
          voluptatem molestias. Consequuntur, laboriosam doloremque? Ipsam
          incidunt dolores enim laboriosam veniam dolorem vitae cum laborum? Quo
          ex recusandae unde facere at velit obcaecati corrupti nam rerum qui.
          Debitis, expedita. Expedita minima aliquam assumenda quam dolorem?
          Sapiente quaerat impedit, eius, cum esse reiciendis placeat
          repellendus maiores voluptatum distinctio quo eos adipisci vitae
          corrupti labore doloribus repudiandae voluptas odit. Vel dolor commodi
          sint minima! Sint, illo eaque. Reprehenderit eum cupiditate
          voluptatibus quaerat quisquam corrupti atque. A nisi nobis, dolor quod
          reiciendis, deserunt quisquam molestiae nulla illum similique facere,
          rerum eveniet natus sapiente. Animi, commodi quidem. Natus, alias?
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
