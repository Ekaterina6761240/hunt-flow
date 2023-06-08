import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewCandidate from './pages/NewCandidate';

export default function App({ vacantions }) {
  return (
    <Routes>
      <Route path="/" element={<>Привет</>} />
      <Route path="/new-candidate" element={<NewCandidate vacantions={vacantions} />} />
    </Routes>
  );
}
