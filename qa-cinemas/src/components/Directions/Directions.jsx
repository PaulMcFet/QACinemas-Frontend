import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './directions.css'

const Directions = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -88 }), []);

    <GoogleMap mapContainerClassName="google-map" zoom={10} center={center}>
      {" "}
      <Marker position={center} />
    </GoogleMap>;
  }

  return (
    <Container fluid>
      <Row>
        <Col className="text-center">
          <h1>Directions</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Map />
        </Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
};

export default Directions;
