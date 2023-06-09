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
import Search from './Elem/Search';
import Icon from './Elem/Icon';

export default function Header({ currentUser }) {
  const logoutHandler = async (e) => {
    e.preventDefault();
    await axios('/api/auth/logout').catch((err) => console.log(err.response.data));
    window.location = '/';
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Row>
            <Col>
              {' '}
              <span className="logo">
                <a href="/">
                  {' '}
                  {' { '}
                  Hunt Flow {' } '}
                </a>
              </span>{' '}
              <br />
              <Col>Speed up the recruiting process</Col>
            </Col>
          </Row>

          <Row>
            <Col>
              {currentUser ? (
                <>
                  &nbsp;&nbsp;
                  <span>
                    Привет, &nbsp;
                    {currentUser.name}
                  </span>
                  &nbsp;&nbsp; <Icon />
                </>
              ) : (
                <></>
              )}
              <Col>
                {' '}
                {currentUser ? (
                  <>
                    <Button variant="outline-secondary" id="button-addon2" className="no_href">
                      <a onClick={logoutHandler}>Выйти</a>
                    </Button>{' '}
                  </>
                ) : (
                  <>
                    {' '}
                    <Button variant="outline-secondary" id="button-addon2" className="no_href">
                      <a href="/auth/signin">Войти</a>
                    </Button>{' '}
                    <Button variant="outline-secondary" id="button-addon2" className="no_href">
                      <a href="/auth/signup">Регистрация</a>
                    </Button>{' '}
                  </>
                )}
              </Col>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <LineHr />
    </>
  );
}
