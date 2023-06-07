import React from 'react';

import Filter from '../Elem/Filter';
import LineHr from '../Elem/LineHr';
import Candidate from '../Elem/Candidate';

export default function candidateRouter() {
  return (
    <>
      <Filter />
      <LineHr />
      <Candidate />
    </>
  );
}
