import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Vacantions from '../ui/Vacantions';
import AddPdf from '../ui/AddPdf';
import AddImg from '../ui/AddImg';

export default function NewCandidate({ vacantions }) {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // const data = new FormData();

      // data.append('secondname', e.target.secondname.value);

      // // data.append('pdf', e.target.pdf.files[0]);
      // // data.append('img', e.target.img.files[0]);
      // data.append('name', e.target.name.value);
      // data.append('email', e.target.email.value);
      // data.append('phone', e.target.phone.value);
      // data.append('age', e.target.age.value);
      // // data.append('experience', e.target.experience.value);
      // data.append('secondname', e.target.secondname.value);
      // data.append('vacantions', e.target.vacantions.value);
      // data.append('comments', e.target.comments.value);

      // console.log(formData);
      const addCandidate = Object.fromEntries(new FormData(e.target));
      console.log(addCandidate);
      // const response = await axios.post('/api/new-candidate', data);
      const response = await axios.post('/api/new-candidate', addCandidate);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (err) {
      console.log(err);
      // setError(err.response.data.message);
    }
  };

  return (
    <Form style={{ width: '30rem' }} onSubmit={handleSubmit}>
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
      {/* <AddImg /> */}
      <AddPdf />

      <FloatingLabel
        controlId="floatingTextarea2"
        label="Опыт работы"
        className="mb-3"
        name="experience"
      >
        <Form.Control as="textarea" placeholder="Опыт работы" style={{ height: '100px' }} />
      </FloatingLabel>

      <Button variant="primary" type="submit" className="mb-3">
        Добавить
      </Button>
      <Row>{error}</Row>
    </Form>
  );
}
