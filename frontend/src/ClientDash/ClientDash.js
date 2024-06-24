"use strict";
import './ClientDash.css';
import React, { useContext } from 'react';
import ClientWorkouts from "./ClientWorkouts";
import ClientProgressGraph from "./ClientProgressGraph";
import ClientMilestones from "./ClientMilestones";
import userContext from '../userContext';

function ClientDash() {

  const user = useContext(userContext);

  console.log(user)
  return <Container>
    <h1 className='client-dash-name'>{user.username}'s dashboard</h1>
    
    <ClientWorkouts/>
    <ClientProgressGraph/>
    <ClientMilestones/>
  </Container>
}

export default ClientDash;