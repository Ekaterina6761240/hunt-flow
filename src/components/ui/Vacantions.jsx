import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Vacantions({ vacantions }) {
  return (
    <Form.Select aria-label="Default select example" className="mb-3" name="vacantions">
      {vacantions.map((el) => (
        <option value={el.id} key={el.id}>
          {el.profession}
        </option>
      ))}
    </Form.Select>
  );
}
