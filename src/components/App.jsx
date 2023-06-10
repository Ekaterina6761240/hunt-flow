import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import NewCandidate from './pages/NewCandidate';
import AllCandidatesPage from './pages/AllCandidatesPage';
import OneCandidatePage from './pages/OneCandidatePage';
import AllCandPage from './pages/AllCandPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App({
  allCandidates,
  allProfessions,
  allStatus,
  candidate,
  allVacancy,
  vacantions,
  user,
}) {
  const [candidates, setCandidates] = useState(allCandidates);
  const [currentUser, setUser] = useState(user || null);
  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/new-candidate"
          element={
            <NewCandidate
              vacantions={vacantions}
              setCandidates={setCandidates}
              allProfessions={allProfessions}
            />
          }
        />
        <Route
          path="/candidates"
          element={<AllCandPage allCandidates={allCandidates} allProfessions={allProfessions} />}
        />
        <Route
          path="/candidates/:id"
          element={
            <OneCandidatePage
              candidate={candidate}
              allVacancy={allVacancy}
              allStatus={allStatus}
              allCandidates={allCandidates}
              allProfessions={allProfessions}
            />
          }
        />
      </Routes>
    </>
  );
}
