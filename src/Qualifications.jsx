import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Qualifications = () => {
  return (
    <section id="qualifications" className="py-5 bg-light">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Qualifications</h2>
            <p>A summary of my educational background and certifications.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>B.Tech in computer science and engineering</Card.Title>
                <Card.Text>St thomas college of engineering & technology kannur (2017-2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>ARTH 1.0 Internship </Card.Title>
                <Card.Text>LinuxWorld Informatics, Jaipur (2020-2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Full Stack Developement</Card.Title>
                <Card.Text>Entri (2024-Present)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Qualifications;
