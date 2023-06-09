import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CandItem({ candidate }) {
  //  Options - настройки для отображения даты
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const createDate = new Date(candidate.createdAt).toLocaleString('ru', options);
  const { img, second_name, name, Profession, age, phone } = candidate;
  return (
    <Card className="mb-3" style={{ width: '26rem' }}>
      <Row>
        <Col xs={4}>
          <Card.Img src={img} />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>
              {second_name} {name}
            </Card.Title>
            <Card.Text>{Profession.profession}</Card.Text>
            <Card.Text>{age}</Card.Text>
            <Card.Text>{phone}</Card.Text>
            <Card.Text>{createDate}</Card.Text>
            <Button variant="primary" href={`/candidates/${candidate.id}`}>
              Подробнее
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
