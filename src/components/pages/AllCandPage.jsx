import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CandList from '../ui/CandList';
import LeftBar from '../ui/LeftBar';
import NavBar from '../ui/NavBar';
import Filter from '../Elem/Filter';

export default function AllCandPage({ allCandidates, allProfessions }) {
  const [candidates, setCandidates] = useState(allCandidates);
  return (
    <>
      <Filter setCandidates={setCandidates} />
      <Container className="   " me={2}>
        {/* // left bar */}
        <Row className="mt-4">
          <LeftBar allProfessions={allProfessions} setCandidates={setCandidates} />

          {/* //  карточки */}

          <CandList candidates={candidates} />
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
