import "../styles/Home.module.css";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="welcome">
      <Container>
        <h2>Hi, I'm Alireza</h2>
        <h1>Full Stack Web Developer</h1>
        <Button>Learn more</Button>
      </Container>
    </div>
  );
}
