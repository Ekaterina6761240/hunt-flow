import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Candidate() {
  return (
    <>
      <Container>
        <Row className="filter-row ">
          <Col className="filter ">
            <p variant="outline-secondary filter-p">Кандидаты</p> <hr />
            <ul>
              <li className="no_href-filter-list ">
                <a href="#">Маркетологи</a>
              </li>
              <li className="no_href-filter-list ">
                <a href="#">Юристы</a>
              </li>
              <li className="no_href-filter-list ">
                <a href="#">Артисты</a>
              </li>
              <li className="no_href-filter-list ">
                <a href="#">Программисты</a>
              </li>
            </ul>
          </Col>
          <Col className="candidates   ">
            <p variant="outline-secondary " className="filter-p">
              <a href="/candidates">Вакансии</a> / добавить кандидата <hr />
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=" footer ">
          <Col className=" footer "></Col>
        </Row>
      </Container>
    </>
  );
}
