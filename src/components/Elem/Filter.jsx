import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LineHr from '../Elem/LineHr';

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
              <a href="#">Новое</a>{' '}
            </span>
            <span className="filter_title">
              {' '}
              <a href="#">Все</a>{' '}
            </span>
            <span className="filter_title">
              {' '}
              <a href="#">Отказ</a>{' '}
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
