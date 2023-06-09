import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function HomePage() {
  return (
    <>
      <Container>
        <Row className="index-img">
          <Col>
            <p>
              Приложение позволит ускорить процесс рекрутинга, сделать его более прозрачным и
              увидеть наглядную статистику офферов/отказов.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
