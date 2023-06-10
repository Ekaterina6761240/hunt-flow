import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CandidateLeftBar({ allStatus }) {
  return (
    <>
      {' '}
      <Col className="candidate-list rounded  mt-4  me-5" xs={4} md={3}>
        <span className="candidate-list-title mt-4">
          Стутас кандидата <hr />
        </span>
        {/*  */}

        {allStatus?.map((status) => (
          <span key={status.id} className="status-list ">
            {status.status}
          </span>
        ))}

        <br />
      </Col>
    </>
  );
}
