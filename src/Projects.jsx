import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>My Projects</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Hybrid Random Graphical Authentication Method</Card.Title>
                <Card.Text>Hybrid Random Graphic Authentication: Revolutionizing password security with dynamic image-based authentication and adaptive hashing for unmatched protection beyond alphanumeric passwords.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Treasure Hunt App</Card.Title>
                <Card.Text>NSS Treasure Hunt App: A level-based challenge app where each answer unlocks the next clue, creating a sequential puzzle-solving experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Python Based Linux Menu</Card.Title>
                <Card.Text>Interactive Linux Management Menu: A Python-powered CLI tool offering streamlined access to essential Linux commands, Docker operations, and Apache server configuration—all in a single, easy-to-navigate menu.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
