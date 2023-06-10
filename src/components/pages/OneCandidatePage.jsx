import React from 'react';

import NotFilter from '../Elem/NotFilter';
import Candidate from '../Elem/Candidate';

export default function candidateRouter({ candidate, allVacancy, allProfessions, allStatus }) {
  return (
    <>
      <NotFilter />
      <Candidate
        candidate={candidate}
        allVacancy={allVacancy}
        allProfessions={allProfessions}
        allStatus={allStatus}
      />
    </>
  );
}
