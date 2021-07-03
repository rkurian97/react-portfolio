  
import React from 'react';
import ProfilePic from '../assets/Portfolio_Pic.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <Container>
        <Row>
          <Col>
              <img src={ProfilePic} id='profile-pic' alt='profile-pic'></img>
          </Col>
          <Col>
            <h1>About Me</h1>
            <p>
              I am an aspiring full stack developer. I am currently finishing my bachelor's degree in Computer Information Systems and a Web development bootcamp at UT at Austin Texas. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;