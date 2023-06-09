import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LineHr from './LineHr';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Filter() {
  return (
    <>
      <Container>
        <Row className=" ">
          <Col className="filter rounded   me-5 mt-4" xs={4} md={3}>
            <span className="filter_title">Фильтрация</span>
          </Col>
          <Col className="filter mt-4 filter-new rounded " md={8}>
            <span className="filter_title">
              <a href="/candidates">Все кандидаты</a>{' '}
            </span>
            <Button variant="outline-secondary" id="button-addon2" className="no_href">
              <a href="/new-candidate">Добавить кандидата</a>
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}
