import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HQ from "../../Assets/qa-hq.jpg";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <h1 className="text-center">About Us!</h1>
        <Col className="mb-5 mt-5">
          <Accordion variant="dark">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Who are QA?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can we help?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Want to join us?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Credits/Inspirations </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            fugit alias ratione veniam hic ad in vel ipsam iste molestias
            eligendi vitae quos, delectus dolorem aspernatur nihil totam quod
            repudiandae. Aliquam incidunt, dolorem quos in beatae eos harum rem
            voluptatibus cum nemo. Architecto ex, dignissimos nulla illo labore
            vel natus quidem soluta obcaecati! Ullam accusantium, at nihil eum
            iusto id! Dolorem perspiciatis voluptas animi quas rerum. Ea
            molestias minima officiis laboriosam asperiores! Blanditiis nesciunt
            voluptatum corporis beatae aperiam officia nulla recusandae numquam
            quia. Nostrum reiciendis, enim excepturi dicta dignissimos amet.
          </p>
        </Col>
        <Col>
          <Image fluid rounded src={HQ}></Image>
        </Col>
        <Col>
          <h2> Dev Team </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            omnis! Illum rem libero provident eveniet inventore unde doloribus
            vel officia voluptate similique. Cupiditate veritatis voluptatibus
            minima necessitatibus cumque est natus? Enim tenetur nam facilis
            voluptates modi provident ipsa voluptate impedit voluptatem pariatur
            suscipit necessitatibus quibusdam, vero sed harum quis officia
            numquam illum incidunt! Quae eius suscipit officiis adipisci aliquid
            magni. Eveniet molestias quas quam commodi perferendis sint harum
            ipsam, recusandae consectetur necessitatibus voluptate impedit
            obcaecati. Assumenda eum quod voluptatum ex numquam magni excepturi,
            voluptatibus neque alias harum iusto ad quibusdam.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
