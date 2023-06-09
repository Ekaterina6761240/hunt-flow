import axios from 'axios';
import React from 'react';

export default function ProfItem({ setCandidates, profession }) {
  const clickHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/v1/candidates/${profession.id}`);
    setCandidates(data);
  };

  return (
    <a onClick={clickHandler} href="#">
      {profession.profession}
    </a>
  );
}
