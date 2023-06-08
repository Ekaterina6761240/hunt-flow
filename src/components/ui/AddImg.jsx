import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function AddImg() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Добавить фото профиля"
        aria-label="Добавить фото профиля"
        aria-describedby="basic-addon2"
        name="img"
        type="file"
      />
    </InputGroup>
  );
}
