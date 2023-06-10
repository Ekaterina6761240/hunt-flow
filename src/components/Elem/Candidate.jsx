import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import LineHr from '../Elem/LineHr';
import CandidateLeftBar from './CandidateLeftBar';
import CandidateRightContent from './CandidateRightContent';
import LeftBar from '../ui/LeftBar';

export default function Candidate({ candidate, allVacancy, allCandidates, allStatus }) {
  const [candidates, setCandidates] = useState(allCandidates);

  return (
    <>
      <Container className="   " me={2}>
        <Row className=" ">
          <CandidateLeftBar allStatus={allStatus} />
          <CandidateRightContent
            allStatus={allStatus}
            candidate={candidate}
            allVacancy={allVacancy}
          />
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
