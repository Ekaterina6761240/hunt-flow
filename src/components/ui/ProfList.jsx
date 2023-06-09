import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ProfItem from './ProfItem';

export default function ProfList({ setCandidates, allProfessions }) {
  
  return (
    <>
      {allProfessions?.map((profession) => (
        <span className="prof-list" key={profession.id}>
          <ProfItem profession={profession} setCandidates={setCandidates} />
        </span>
      ))}
    </>
  );
}
