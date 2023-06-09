import React, { useState } from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function CandidateRightContent({ candidate, allVacancy }) {
  const [oneCandidate, setСandidate] = useState([]);

  const handlerEdit = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(
      `/candidates/${candidate.id}`,
      Object.fromEntries(new FormData(e.target)),
    );
    console.log('data-->', data);
    console.log('Profession data-->', data.Profession.profession);
    candidate.Profession.profession = data.Profession.profession;
    setСandidate(data);
  };

  const handlerDelete = async (candidateId) => {
    const response = await fetch(`/candidates/${candidate.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location = '/';
    }
  };

  return (
    <>
      <Col className="mt-4 content rounded " md={8}>
        <span className=" content-title mt-4">
          <a href="">Вакансии</a> &nbsp; / &nbsp; все
          <hr />
        </span>
        <Form onSubmit={handlerEdit} style={{ width: '30rem' }}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" name="name" defaultValue={candidate.name} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" name="second_name" defaultValue={candidate.second_name} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" defaultValue={candidate.email} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" name="phone" defaultValue={candidate.phone} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Возраст</Form.Label>
                <Form.Control type="text" name="age" defaultValue={candidate.age} />
              </Form.Group>
              <FloatingLabel
                className="mb-3"
                controlId="floatingTextarea2"
                label="Оставить комментарий"
                defaultValue={candidate.comments}
              >
                <Form.Control
                  name="comments"
                  as="textarea"
                  defaultValue={candidate.comments}
                  style={{ height: '70px' }}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Вакансия кандидиата</Form.Label>
                <Form.Control
                  type="text"
                  name="professionAdd"
                  defaultValue={candidate.Profession.profession}
                />
              </Form.Group>
              <Form.Label>Изменить вакансию</Form.Label>
              <Form.Select aria-label="Default select example" className="mb-3" name="profession">
                <option>{undefined}</option>
                {allVacancy.map((el) => (
                  <option defaultValue={el.id} key={el.id}>
                    {el.profession}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Добавить фото профиля"
              aria-label="Добавить фото профиля"
              aria-describedby="basic-addon2"
              name="img"
              defaultValue={candidate.img}
            />
            <Button variant="outline-secondary" id="button-addon2">
              Выбрать фаил
            </Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Добавить резюме"
              aria-label="Добавить резюме"
              aria-describedby="basic-addon2"
              name="pdf"
              defaultValue={candidate.pdf}
            />
            <Button variant="outline-secondary" id="button-addon2">
              Выбрать файл
            </Button>
          </InputGroup>

          <FloatingLabel controlId="floatingTextarea2" label="Опыт работы" className="mb-3">
            <Form.Control
              as="textarea"
              name="skills"
              defaultValue={candidate.skills}
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <Button variant="warning" type="submit" className="mb-3 me-4">
            Редактировать
          </Button>
          <Button
            onClick={() => handlerDelete(candidate.id)}
            variant="danger"
            type="submit"
            className="mb-3 me-4"
          >
            {' '}
            Удалить
          </Button>

          <Row> </Row>
        </Form>
      </Col>
    </>
  );
}
