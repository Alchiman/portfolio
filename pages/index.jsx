import "../styles/Home.module.css";

import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="welcome">
      <Container>
        <h2>Hi, my name is Alireza</h2>
        <h1>I&rsquo;m a Full Stack Developer</h1>
        <Button>Learn more</Button>
      </Container>
    </div>
  );
}
