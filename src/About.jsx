import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>About Me</h2>
            <p>Hello! I'm a web developer with a passion for creating beautiful, functional websites.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
