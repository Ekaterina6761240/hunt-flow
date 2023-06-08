import React from 'react';
import Col from 'react-bootstrap/Col';

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
      </Col>
    </>
  );
}
