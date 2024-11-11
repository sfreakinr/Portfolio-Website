import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <Image 
              src="src\assets\SR_image.jpg"  
              roundedCircle 
              alt="Profile"
              width="150"
              height="150"
              className="mb-3"
            />
            <h2>Subin Raj</h2> {/* Replace "Your Name" with your actual name */}
            <p>Hello! I'm a web developer & graphic desingner based on kerala who creates stunning functional websites and graphics.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
