import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import constants from "../constants";

const WhyChoose = () => {
  const title = constants.whyChoose.title;
  const description = constants.whyChoose.description;
  const features = constants.whyChoose.features;

  return (
    <Container fluid className="bg-lightGrayishBlue">
      <h1>{title}</h1>
      <h2>{description}</h2>

      <Row>
        {features.map((feature) => {
          return (
            <Col md="3" className="d-flex flex-column" key={feature.title}>
              <Image src={feature.icon} className="w-25" />
              <h2> {feature.title}</h2>
              <h3>{feature.description}</h3>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default WhyChoose;
