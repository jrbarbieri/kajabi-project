import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Card = ({ avatar, firstName, lastName, email }) => {
  return (
    <Container fluid style={{ margin: '20px' }}>
      <Row className="align-items-center">
        <Col xs={12} md={3} className="text-center">
          <Image src={avatar} roundedCircle style={{ width: '100px', height: '100px' }} />
        </Col>
        <Col xs={12} md={9}>
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{email}</p>
          <Button size="sm">More details</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Card
