import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Line = () => {
  return (
    <Container className="mt-[75px]">
      <Row className="d-none d-md-block">
        <Col md={{ offset: 2, span: 8 }} className="line-separator"></Col>
      </Row>
    </Container>
  );
};

export default Line;
