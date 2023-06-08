import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import AllCandidatesPage from './pages/AllCandidatesPage';
import OneCandidatePage from './pages/OneCandidatePage';

export default function App({ candidate, allVacancy }) {
  return (
    <>
      <Header currentUser="admin" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<AllCandidatesPage />} />
        <Route
          path="/candidates/:id"
          element={<OneCandidatePage candidate={candidate} allVacancy={allVacancy} />}
        />
      </Routes>
    </>
  );
}
