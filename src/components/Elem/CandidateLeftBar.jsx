import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CandidateLeftBar() {
  return (
    <>
      {' '}
      <Col className="candidate-list rounded  mt-4  me-5" xs={4} md={3}>
        <span className="candidate-list-title mt-4">
          Кандидаты <hr />
        </span>


        
        <span className="prof-list">
          <a href="#">Маркетолог</a>{' '}
        </span>
        <span className="prof-list">
          {' '}
          <a href="#">Юрист</a>{' '}
        </span>
        <span className="prof-list">
          {' '}
          <a href="#">Программист</a>{' '}
        </span>
        <br />

        <span className="candidate-list-title mt-4">
          Стутас кандидата <hr />
        </span>
        <span className="status-list active-status">Направлено приглашение</span>
        <span className="status-list active-status"> Звонок скрининг </span>
        <span className="status-list">Интервью</span>
        <span className="status-list">Передано заказчику</span>
        <span className="status-list">Выход на работу</span>
        <span className="status-list">Отказ</span>
        <br />
      </Col>
    </>
  );
}
