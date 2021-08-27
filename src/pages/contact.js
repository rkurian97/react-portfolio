import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className='contact flex-grow bg-gray-900'>
      <section>
        <Container>
        <h1 data-testid="h1tag">Contact <span class='theme'>me</span></h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col> <label htmlFor="name">Name:</label> </Col>
            <Col> <input class='form-input' type="text" name="name" defaultValue={name} onBlur={handleChange}/> </Col>
          </Row>
          <Row>
            <Col> <label htmlFor="email"> <span class='theme'>Email address:</span></label> </Col>
            <Col><input class='form-input' type="email" name="email" defaultValue={email} onBlur={handleChange} /> </Col>
          </Row>
          <Row>
            <Col> <label htmlFor="message">Message:</label> </Col>
            <Col> <textarea class='form-input' name="message" rows="5" defaultValue={message} onBlur={handleChange} /> </Col>
          </Row>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Row>
            <Button variant='info' style={{ background: '#15cdfc' }} data-testid="button" type="submit">Submit</Button>
          </Row>
        </form>
        </Container>
      </section>

      
    </div>
  );
};

export default Contact;