import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Line = () => {
  return (
    <Container className="mt-[75px] d-none d-md-block">
      <Row>
        <Col md={{ offset: 2, span: 8 }} className="line-separator"></Col>
      </Row>
    </Container>
  );
};

export default Line;
