import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandItem from './CandItem';

export default function CandList({ candidates }) {
  return (
    <Row>
      {candidates?.map((candidate) => (
        <Col key={candidate.id}>
          <CandItem candidate={candidate} />
        </Col>
      ))}
    </Row>
  );
}
