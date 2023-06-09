import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCandPage from './pages/AllCandPage';

export default function App({ allCandidates, allProfessions, allStatuses }) {
  return (
    <Routes>
      <Route
        path="/candidates"
        element={
          <AllCandPage
            allCandidates={allCandidates}
            allProfessions={allProfessions}
            allStatuses={allStatuses}
          />
        }
      />
    </Routes>
  );
}
