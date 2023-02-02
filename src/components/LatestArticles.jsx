import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import constants from "../constants";

const LatestArticles = () => {
  const title = constants.latestArticles.title;
  const articles = constants.latestArticles.articles;

  return (
    <Container fluid className="bg-veryLightGray">
      <h2>{title}</h2>
      <Row>
        {articles.map((article) => {
          return (
            <Col md="3" key={article.title} className="bg-white">
              <Image src={article.picture} fluid/>
              <p>{`By ${article.author}`}</p>
              <h2>{article.title}</h2>
              <h4>{article.description}</h4>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LatestArticles;
