import React from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignIn() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.email || !data.password) return null;
    console.log(data);
    await axios.post('/api/auth/signin', data).catch((err) => {
      console.log(err.response.message);
    });
    window.location = '/candidates';
  };
  return (
    <>
      <Container className="   " me={2}>
        <Row>
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="password" />
              </Form.Group>
              <Button type="submit" variant="primary">
                submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
