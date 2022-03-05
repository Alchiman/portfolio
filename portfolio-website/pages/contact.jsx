import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const contact = () => {
  return (
    <Container className="main">
      <Form
        action="https://formsubmit.co/79f7b3c07b45b70c9f790383b1875cf6"
        method="POST"
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Please write your message here"
            required
          />
        </Form.Group>
        <input type="hidden" name="_next" value="https://google.com" />

        <Button variant="dark" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default contact;
