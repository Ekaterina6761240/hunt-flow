import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Vacantions from '../ui/Vacantions';
import Container from 'react-bootstrap/Container';
import CandidateLeftBar from './CandidateLeftBar';
import LeftBar from '../ui/LeftBar';

export default function AddForm({
  vacantions,
  allVacancy,
  allCandidates,
  allProfessions,
  setCandidates,
}) {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append('pdf', e.target.pdf.files[0]);
      data.append('img', e.target.img.files[0]);
      data.append('name', e.target.name.value);
      data.append('email', e.target.email.value);
      data.append('phone', e.target.phone.value);
      data.append('age', e.target.age.value);
      data.append('experience', e.target.experience.value);
      data.append('secondname', e.target.secondname.value);
      data.append('vacantions', e.target.vacantions.value);
      data.append('comments', e.target.comments.value);

      const response = await axios.post('/api/new-candidate', data);

      if (response.status === 200) {
        window.location = '/candidates';
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <Container className="   " me={2}>
        <Row className=" ">
          <LeftBar allProfessions={allProfessions} setCandidates={setCandidates} />

          <Col className="mt-4 content rounded " md={8}>
            <span className=" content-title mt-4">
              <a href="">Вакансии</a> &nbsp; / &nbsp; все
              <hr />
            </span>

            <Form style={{ width: '30rem' }} onSubmit={handleSubmit} encType="multipart/form-data">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Введите имя" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" name="secondname" placeholder="Введите фамилию" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Введите email" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="+7**********" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="age" placeholder="Введите возраст" />
                  </Form.Group>
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingTextarea2"
                    label="Оставить комментарий"
                    style={{ width: '30rem' }}
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Оставить комментарий"
                      name="comments"
                      style={{ height: '70px' }}
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <Vacantions vacantions={vacantions} />
                </Col>
              </Row>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Добавить фото профиля"
                  aria-label="Добавить фото профиля"
                  aria-describedby="basic-addon2"
                  name="img"
                  type="file"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Добавить резюме"
                  aria-label="Добавить резюме"
                  aria-describedby="basic-addon2"
                  name="pdf"
                  type="file"
                />
              </InputGroup>

              <FloatingLabel controlId="floatingTextarea2" label="Опыт работы" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Опыт работы"
                  name="experience"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>

              <Button variant="primary" type="submit" className="mb-3">
                Добавить
              </Button>

              <Row className="mr-0">{error}</Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className=" footer ">
          <Col className=" footer "></Col>
        </Row>
      </Container>
    </>
  );
}
