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

  const [currentStatus, setCurrentStatus] = useState(candidate.Status.status);
  console.log('currentStatus-->', currentStatus);
  const [statuses, setStatuses] = useState(allStatus);

  return (
    <>
      <Container className="   " me={2}>
        <Row className=" ">
          <CandidateLeftBar allStatus={statuses} currentStatus={currentStatus} />

          <CandidateRightContent
            allStatus={statuses}
            candidate={candidate}
            allVacancy={allVacancy}
            setCurrentStatus={setCurrentStatus}
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
