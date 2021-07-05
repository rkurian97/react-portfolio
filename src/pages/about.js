import React from 'react';
import ProfilePic from '../assets/Portfolio_Pic.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120vh',
        background: '#101010'
      }}
    >
      <Container>
        <Row>
          <Col>
            <img src={ProfilePic} id='profile-pic' alt='profile-pic'></img>
          </Col>
          <Col>
            <h1> <span class='theme'>About</span> Me</h1>
            <p>
             Hi, my name is Rohith Kurian, and welcome to my world. I finally knew that IT was the field for me after taking some <span class='theme'>database</span> classes that involved a lot of data modeling and realizing that I love data. Weird, I know. From how its stored, to how to retrieve it from users, to analyzing it and displaying it in nice <span class='theme'>visualizations</span>. I find all of it interesting. Although, I found my interest in a class that was meant to be an intro to database administration, I felt that field would not <span class='theme'>scratch</span> my programming itch, so here I am pursuing an occupation in full-stack development. Right about now, I am probably scouring through Google to solve a coding problem and chase that euphoria from seeing "Compiled <span class='theme'>Successfully</span>!" 
            </p>
            <Tabs>
              <TabList >
                <Tab>Skills</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel>
                <Container>
                  <Row>
                    <Col>
                      <ul>
                        <li>Java </li>
                        <li>HTML/CSS/JavaScript </li>
                        <li><span class='theme'>SQL</span> </li>
                        <li>Shell Script </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                          <li> <span class='theme'>Object Oriented programming</span></li>
                          <li>Cloud infrastructure </li>
                          <li>Oracle </li>
                          <li>Microsoft Office </li>
                        </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ul>
                          <li>React.js </li>
                          <li>Express.js </li>
                          <li>MongoDB/Mongoose </li>
                          <li><span class='theme'>Rest APIs</span> </li>
                        </ul>
                    </Col>
                    <Col>
                      <ul>
                          <li>Git </li>
                          <li><span class='theme'>Heroku</span> </li>
                          <li>Agile methodology </li>
                          <li>Data Visualization </li>
                        </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ul>
                          <li>Object Relational Mapping (Sequelize) </li>
                          <li>State Management </li>
                          <li>Authentication </li>
                          <li><span class='theme'>PWAS</span> </li>
                        </ul>
                    </Col>
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>Bachelors in Computer Information Systems at <span class='theme'>University</span> of Houston </li>
                  <li>The <span class='theme'>Coding</span> Bootcamp at UT Austin  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;