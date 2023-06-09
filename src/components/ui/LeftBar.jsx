import React from 'react';
import ProfList from './ProfList';
import Col from 'react-bootstrap/Col';

export default function LeftBar({ setCandidates, allProfessions }) {
  return (
    <>
      <Col className="candidate-list rounded  mt-4  me-5" xs={4} md={3}>
        <span className="candidate-list-title mt-4">
          Профессии <hr />
        </span>
        <ProfList setCandidates={setCandidates} allProfessions={allProfessions} />
      </Col>
    </>
  );
}
