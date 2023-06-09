import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandItem from './CandItem';

export default function CandList({ candidates }) {
  return (
    <>
      <Col className="mt-4 content rounded " md={8}>
        <span className=" content-title mt-4">
          <a href="">Вакансии</a> &nbsp; / &nbsp; все
          <hr />
        </span>
        <Row>
          {candidates?.map((candidate) => (
            <Col key={candidate.id}>
              <CandItem candidate={candidate} />
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
}
