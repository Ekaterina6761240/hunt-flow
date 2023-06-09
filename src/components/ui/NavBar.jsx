import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ setCandidates }) {
  // handler отображает всех кандидатов
  const getAllHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/v1/candidates');
    setCandidates(data);
  };
  // handler отображает кандидатов со статусом "отказ"
  const getRefusalHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/v1/candidates/refusal`);
    setCandidates(data);
  };
  // handler отображает кандидатов со статусом "направлено приглашение"
  const getNewHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/v1/candidates/news');
    setCandidates(data);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="d-flex justify-content-center">
          <Nav.Link onClick={getAllHandler}>Все</Nav.Link>
          <Nav.Link onClick={getNewHandler}>Новые</Nav.Link>
          <Nav.Link onClick={getRefusalHandler}>Отказ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
