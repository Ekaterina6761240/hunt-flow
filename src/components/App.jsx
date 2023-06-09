import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import NewCandidate from './pages/NewCandidate';
import AllCandidatesPage from './pages/AllCandidatesPage';
import OneCandidatePage from './pages/OneCandidatePage';
import AllCandPage from './pages/AllCandPage';

export default function App({ allCandidates, allProfessions, allStatuses, candidate, allVacancy, vacantions }) {
  return (
    <>
      <Header currentUser="admin" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-candidate" element={<NewCandidate vacantions={vacantions} />} />
 <Route
        path="/candidates"
        element={
          <AllCandPage
            allCandidates={allCandidates}
            allProfessions={allProfessions}
            allStatuses={allStatuses}
          />
       
        <Route
          path="/candidates/:id"
          element={<OneCandidatePage candidate={candidate} allVacancy={allVacancy} />}
        />
      </Routes>
    </>
  );
}
