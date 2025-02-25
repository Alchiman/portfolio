import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/ChaychiCreations.module.css";

const services = [
  {
    title: "Graphic Design",
    description:
      "Creating stunning visuals for your brand and marketing materials.",
  },
  {
    title: "UX optimization",
    description:
      "Designing user-friendly interfaces for web and mobile applications.",
  },
  {
    title: "Development",
    description: "Building robust and scalable web and mobile applications.",
  },
  {
    title: "Space Design",
    description: "Optimizing spaces for functionality and aesthetics.",
  },
  {
    title: "Exhibition Design",
    description: "Designing and engaging and interactive exhibition spaces.",
  },
  {
    title: "Furniture Design",
    description: "Creating custom furniture pieces tailored to your needs.",
  },
];

const ChaychiCreations = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Chaychi Creations</h1>
        <p className={styles.subtitle}>Design. Build. Transform.</p>
      </div>
      <Row className={styles.servicesGrid}>
        {services.map((service, index) => (
          <Col key={index} md={4}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChaychiCreations;
