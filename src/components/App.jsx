import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import AllCandidatesPage from './pages/AllCandidatesPage';

export default function App({ currentUser }) {
  return (
    <>
      <Header currentUser="admin" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<AllCandidatesPage />} />
      </Routes>
    </>
  );
}
