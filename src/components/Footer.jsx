import React from "react";
import { Container, Row } from "react-bootstrap";
import constants from "../constants";

const Footer = () => {
  const logo = constants.logo;
  const socialMedia = constants.footer.socialMedia;
  const sections = constants.footer.sections;
  const text = constants.footer.text;

  return (
    <Container fluid className="bg-primary">
      <Row className="mx-5"></Row>
    </Container>
  );
};

export default Footer;
