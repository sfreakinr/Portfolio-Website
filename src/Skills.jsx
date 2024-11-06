import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>My Skills</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
