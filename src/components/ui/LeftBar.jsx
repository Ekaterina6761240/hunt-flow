import React from 'react';
import ProfList from './ProfList';

export default function LeftBar({ setCandidates, allProfessions }) {
  return <ProfList setCandidates={setCandidates} allProfessions={allProfessions} />;
}
