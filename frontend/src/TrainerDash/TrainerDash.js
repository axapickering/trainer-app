"use strict";

import React, { useContext } from 'react';
import ClientList from "./ClientList";
import { Button } from "react-bootstrap";
import userContext from '../userContext';

function TrainerDash() {

  const user = useContext(userContext);

  return <main>
    <p>{user.username}'s dashboard</p>
    <ClientList />
    <Button variant="primary">Add client</Button>
  </main>;
}

export default TrainerDash;