import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LineHr from './Elem/LineHr';

export default function Header({ currentUser }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Row>
            <Col>
              {' '}
              <span className="logo">
                {' '}
                {' { '} Hunt Flow {' } '}
              </span>{' '}
              <br />
              <Col>Speed up the recruiting process</Col>
            </Col>
          </Row>
          <Row>
            <Col>
              Привет, {currentUser}
              <Col>
                {' '}
                <Button variant="outline-secondary" id="button-addon2" className="no_href">
                  <a href="/auth/login">Войти</a>
                </Button>{' '}
                <Button variant="outline-secondary" id="button-addon2" className="no_href">
                  <a href="/auth/signup">Регистрация</a>
                </Button>{' '}
              </Col>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <LineHr />
    </>
  );
}
