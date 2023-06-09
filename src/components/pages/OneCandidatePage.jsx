import React from 'react';

import Filter from '../Elem/Filter';
import Candidate from '../Elem/Candidate';

export default function candidateRouter({ candidate, allVacancy }) {
  return (
    <>
      <Filter />
      <Candidate candidate={candidate} allVacancy={allVacancy} />
    </>
  );
}

//
//       <LineHr />
//       <Candidate />
