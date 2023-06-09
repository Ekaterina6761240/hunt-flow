import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Filter() {
  return (
    <>
      <Container>
        <Row className="filter-row ">
          <Col className="filter ">
            <p variant="outline-secondary" id="button-addon2" className="  no_href">
              Фильтрация
            </p>{' '}
          </Col>
          <Col className="list-group   ">
            <ListGroup horizontal className="no_href list   ">
              <ListGroup.Item>
                <a href="#">Все</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#">Новые</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#">Отказ</a>
              </ListGroup.Item>
            </ListGroup>{' '}
            <Button variant="outline-secondary" id="button-addon2" className="no_href btn_add">
              <a href="/api/new-candidate">Добавить</a>
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}
