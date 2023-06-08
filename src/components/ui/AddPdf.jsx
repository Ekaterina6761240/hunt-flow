import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function AddPdf() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Добавить резюме"
        aria-label="Добавить резюме"
        aria-describedby="basic-addon2"
        name="pdf"
        type="file"
      />
    </InputGroup>
  );
}
