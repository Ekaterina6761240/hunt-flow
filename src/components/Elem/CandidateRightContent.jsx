import React, { useState } from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import downloadFile from '../function/download';

export default function CandidateRightContent({
  allStatus,
  candidate,
  allVacancy,
  setCurrentStatus,
}) {
  const [oneCandidate, setСandidate] = useState(candidate);

  const handlerDownload = async () => {
    downloadFile(`/pdf/${oneCandidate.pdf}`, `${oneCandidate.name}${oneCandidate.second_name}.pdf`);
  };

  const handlerEdit = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(
      `/candidates/${oneCandidate.id}`,
      Object.fromEntries(new FormData(e.target)),
    );

    // candidate.Profession.profession = data.Profession.profession;
    // candidate.Status.status = data.Status.status;

    setСandidate((prevCandidate) => {
      return {
        ...prevCandidate,
        Profession: { ...prevCandidate.Profession, profession: data?.Profession?.profession },
        Status: { ...prevCandidate.Status, status: data?.Status?.status },
      };
    });
    console.log('oneCandidate-->', oneCandidate.Status.status);
    setCurrentStatus(oneCandidate.Status.status);
  };

  const handlerDelete = async (candidateId) => {
    const response = await fetch(`/candidates/${oneCandidate.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      window.location = '/candidates';
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
                <Form.Control type="text" name="name" defaultValue={oneCandidate.name} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  type="text"
                  name="second_name"
                  defaultValue={oneCandidate.second_name}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" defaultValue={oneCandidate.email} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" name="phone" defaultValue={oneCandidate.phone} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Возраст</Form.Label>
                <Form.Control type="text" name="age" defaultValue={oneCandidate.age} />
              </Form.Group>
              <FloatingLabel
                className="mb-3"
                controlId="floatingTextarea2"
                label="Оставить комментарий"
                defaultValue={oneCandidate.comments}
              >
                <Form.Control
                  name="comments"
                  as="textarea"
                  defaultValue={oneCandidate.comments}
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
                  defaultValue={oneCandidate.Profession.profession}
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

          {/* // статус и его изменение */}
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Статус кандидиата</Form.Label>
                <Form.Control
                  type="text"
                  name="statusNow"
                  defaultValue={oneCandidate.Status.status}
                />
              </Form.Group>
              <Form.Label>Изменить статус</Form.Label>
              <Form.Select aria-label="Default select example" className="mb-3" name="statusChange">
                <option>{undefined}</option>
                {allStatus.map((el) => (
                  <option defaultValue={el.id} key={el.id}>
                    {el.status}
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
              defaultValue={oneCandidate.img}
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
              defaultValue={oneCandidate.pdf}
            />
            <Button variant="outline-secondary" onClick={handlerDownload} id="button-addon2">
              Скачать в pdf
            </Button>
          </InputGroup>

          <FloatingLabel controlId="floatingTextarea2" label="Опыт работы" className="mb-3">
            <Form.Control
              as="textarea"
              name="skills"
              defaultValue={oneCandidate.skills}
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <Button variant="warning" type="submit" className="mb-3 me-4">
            Редактировать
          </Button>
          <Button
            onClick={() => handlerDelete(oneCandidate.id)}
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
