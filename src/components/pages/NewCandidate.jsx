import React from 'react';

import NotFilter from '../Elem/NotFilter';
import AddForm from '../Elem/AddForm';

export default function NewCandidate({
  setCandidates,
  vacantions,
  allVacancy,
  allCandidates,
  allProfessions,
}) {
  return (
    <>
      <NotFilter />
      <AddForm
        vacantions={vacantions}
        allVacancy={allVacancy}
        allProfessions={allProfessions}
        setCandidates={setCandidates}
      />
    </>
  );
}
