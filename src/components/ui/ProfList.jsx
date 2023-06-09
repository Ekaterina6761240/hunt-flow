import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ProfItem from './ProfItem';

export default function ProfList({ setCandidates, allProfessions }) {
  return (
    <ListGroup style={{ width: '12rem' }}>
      {allProfessions?.map((profession) => (
        <ListGroup.Item key={profession.id}>
          <ProfItem profession={profession} setCandidates={setCandidates} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
