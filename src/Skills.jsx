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
                <Card.Title>HTML </Card.Title>
                <Card.Title>CSS </Card.Title>
                <Card.Title>JavaScript </Card.Title>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Docker</Card.Title>
                <Card.Title>Kubernetes</Card.Title>
                <Card.Title>Ansible</Card.Title>
                <Card.Title>Hadoop</Card.Title>
                <Card.Title>AWS</Card.Title>
                <Card.Title>Openshift</Card.Title>
                <Card.Title>RHEL</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>Python</Card.Title>
                <Card.Title>C Programming</Card.Title>
                <Card.Title>Adobe Photoshop</Card.Title>
                <Card.Title>Adobe Premiere Pro</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
