import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form name="Contact" method="post">
      <input type="hidden" name="form-name" value="Contact" />
      <p hidden>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <Form.Group className="mb-3" controlId="controlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="example@email.com"
          className="input-field"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlTextarea1">
        <Form.Label>Üzenet</Form.Label>
        <Form.Control
          required
          as="textarea"
          name="message"
          rows={5}
          placeholder="Kérjen árajánlatot a szolgáltatásainkhoz."
          className="input-field"
        />
      </Form.Group>
      <Row>
        <Form.Check
          id="checkbox1"
          type="checkbox"
          label="Kijelentem, hogy az adatkezelési tájékoztatót megismertem, az abban foglaltakat elfogadom személyes adataim kezeléséhez."
          className="checkbox"
        />
      </Row>
      <Row>
        <Col className=""></Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
