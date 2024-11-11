import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from './assets/SR_image.jpg';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <Image 
              src={profileImage}  
              roundedCircle 
              alt="Profile"
              width="150"
              height="150"
              className="mb-3"
            />
            <h2>Subin Raj</h2>
            <p>Hello! I'm a web developer & graphic designer based in Kerala who creates stunning functional websites and graphics.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
