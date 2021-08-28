import React from 'react';
import ProfilePic from '../assets/Portfolio_Pic.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
  return (
    <div className='lg:px-48 sm:px-10 about flex-grow bg-gray-800'>
      <div className="flex mt-5">
        <div className="grid lg:grid-cols-2">
          {/* Profile Pic  */}
          <div >
            <img className="ml-auto mr-auto mb-2 w-10/12 rounded-lg" src={ProfilePic} id='profile-pic' alt='profile-pic'></img>
          </div>

          {/* About Info  */}
          <div className="px-4">
            <h1> <span className='text-bright-turquoise'>About</span> Me</h1>
            <p>
             Hi, my name is Rohith Kurian, and welcome to my world. I finally knew that IT was the field for me after taking some <span className='text-bright-turquoise'>database</span> classes that involved a lot of data modeling and realizing that I love data. 
             Weird, I know. From how its stored, to how to retrieve it from users, to analyzing it and displaying it in nice <span className='text-bright-turquoise'>visualizations</span>. I find all of it interesting. Although, I found my interest in a class that 
             was meant to be an intro to database administration, I felt that field would not <span className='text-bright-turquoise'>scratch</span> my programming itch, so here I am pursuing an occupation in full-stack development. Right about now, I am probably 
             scouring through Google to solve a coding problem so I can finally see that "Compiled <span className='text-bright-turquoise'>Successfully</span>!" 
            </p>
            <Tabs>
              {/* Tabs */}
              <TabList >
                <Tab>Skills</Tab>
                <Tab>Learning</Tab>
                <Tab>Education</Tab>
              </TabList>

              {/* Skills */}
              <TabPanel>
                <Container>
                  <Row>
                    <Col>
                      <ul>
                        <li>JavaScript ES6+ </li>
                        <li>HTML5/CSS3 </li>
                        <li class='theme'>Object Oriented programming</li>
                        <li>jQuery </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                          <li class='theme'> SQL MySQL/Oracle/MS SQL</li>
                          <li>MongoDB/Mongoose </li>
                          <li> Cloud infrastructure </li>
                          <li>Object Relational Mapping (Sequelize) </li>
                        </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ul>
                          <li class='theme'>React.js </li>
                          <li>Express.js </li>
                          <li>Node.js </li>
                          <li>Vue.js</li>
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
                          <li> Rest APIs </li>
                          <li>State Management </li>
                          <li>Authentication </li>
                          <li><span class='theme'>GraphQL</span> </li>
                        </ul>
                    </Col>
                  </Row>
                </Container>
              </TabPanel>
              
              {/* Learning */}
              <TabPanel>
                <ul>
                  <li>Algorithims and Data Structures </li>
                  <li className="text-bright-turquoise"> AWS </li>
                </ul>
              </TabPanel>

              {/* Education */}
              <TabPanel>
                <ul>
                  <li>Bachelors in Computer Information Systems at <span className='text-bright-turquoise'>University</span> of Houston </li>
                  <li>The <span className='text-bright-turquoise'>Coding</span> Bootcamp at UT Austin  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;