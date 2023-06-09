import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LineHr from '../Elem/LineHr';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Filter({ setCandidates }) {
  // handler отображает всех кандидатов
  const getAllHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/v1/candidates');
    setCandidates(data);
  };
  // handler отображает кандидатов со статусом "отказ"
  const getRefusalHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/v1/candidates/refusal`);
    setCandidates(data);
  };
  // handler отображает кандидатов со статусом "направлено приглашение"
  const getNewHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/v1/candidates/news');
    setCandidates(data);
  };

  return (
    <>
      <Container>
        <Row className=" ">
          <Col className="filter rounded   me-5 mt-4" xs={4} md={3}>
            <span className="filter_title">Фильтрация</span>
          </Col>
          <Col className="filter mt-4 filter-new rounded " md={8}>
            <span className="filter_title">
              <a href="#" onClick={getAllHandler}>
                Все
              </a>{' '}
            </span>
            <span className="filter_title">
              {' '}
              <a href="#" onClick={getNewHandler}>
                Новые
              </a>{' '}
            </span>
            <span className="filter_title">
              {' '}
              <a href="#" onClick={getRefusalHandler}>
                Отказ
              </a>{' '}
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
