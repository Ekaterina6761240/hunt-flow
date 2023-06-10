import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';

export default function CandidateLeftBar({ allStatus, currentStatus }) {
  useEffect(() => {}, [currentStatus]);
  return (
    <>
      {' '}
      <Col className="candidate-list rounded  mt-4  me-5" xs={4} md={3}>
        <span className="candidate-list-title mt-4">
          Стутас кандидата <hr />
        </span>
        {/*  */}

        {allStatus?.map((status) => (
          <span
            key={status.id}
            className={
              currentStatus === status.status ? 'status-list active-status' : 'status-list '
            }
          >
            {status.status}
          </span>
        ))}
        {/* active-status */}
        <br />
      </Col>
    </>
  );
}
