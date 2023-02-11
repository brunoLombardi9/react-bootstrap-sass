import React, { useLayoutEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import constants from "../constants";
import RequestInviteButton from "./RequestInviteButton";

const HeroSection = () => {
  const heroImageMobile = constants.heroSection.backgroundMobile;
  const heroImageDeskTop = constants.heroSection.backgroundDesktop;
  const mockups = constants.heroSection.mockups;
  const sectionTitle = constants.heroSection.title;
  const sectionDescription = constants.heroSection.description;
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  const [heroImage, setHeroImage] = useState("");

  useLayoutEffect(() => {
    windowsWidth >= 768
      ? setHeroImage(heroImageDeskTop)
      : setHeroImage(heroImageMobile);

    window.addEventListener("resize", () => setWindowsWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowsWidth(window.innerWidth)
      );
    };
  }, [windowsWidth]);

  return (
    <Container fluid className="bg-veryLightGray">
      <Row className="flex-column-reverse flex-md-row">
        <Col
          md="6"
          className="d-flex flex-column justify-content-center align-content-center"
        >
          <h1 className="text-center">{sectionTitle}</h1>
          <h2 className="text-center">{sectionDescription}</h2>

          <div className="mx-auto">
            <RequestInviteButton />
          </div>
        </Col>
        <Col
          md="6"
          style={{
            backgroundImage: `url(${heroImage}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image src={mockups} fluid alt="mockups" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
