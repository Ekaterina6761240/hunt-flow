import React from 'react';

import Filter from '../Elem/Filter';
import AddForm from '../Elem/AddForm';

export default function NewCandidate({ vacantions, allVacancy }) {
  return (
    <>
      <Filter />
      <AddForm vacantions={vacantions} allVacancy={allVacancy} />
    </>
  );
}
