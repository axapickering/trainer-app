"use strict";
import './ClientDash.css';
import React, { useContext } from 'react';
import ClientWorkouts from "./ClientWorkouts";
import ClientProgressGraph from "./ClientProgressGraph";
import ClientMilestones from "./ClientMilestones";
import userContext from '../userContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ClientDash() {

  const user = useContext(userContext);

  console.log(user);
  return <Container>
    <h1 className='client-dash-name'>{user.username}'s dashboard</h1>
    <Row>
      <Col>
        <ClientWorkouts />
        <ClientProgressGraph />
      </Col>
      <Col>
        <ClientMilestones />
      </Col>
    </Row>
  </Container>;
}

export default ClientDash;