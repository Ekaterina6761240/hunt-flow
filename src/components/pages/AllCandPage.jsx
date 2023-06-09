import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CandList from '../ui/CandList';
import LeftBar from '../ui/LeftBar';
import NavBar from '../ui/NavBar';

export default function AllCandPage({ allCandidates, allProfessions }) {
  const [candidates, setCandidates] = useState(allCandidates);
  return (
    <Container>
      <NavBar setCandidates={setCandidates} />
      <Row className="mt-4">
        <Col md={3} className="mb-4">
          <LeftBar allProfessions={allProfessions} setCandidates={setCandidates} />
        </Col>
        <Col md={9} className="mb-4">
          <CandList candidates={candidates} />
        </Col>
      </Row>
    </Container>
  );
}
