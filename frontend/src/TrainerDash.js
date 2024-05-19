"use strict";

import ClientList from "./ClientList";
import { Button } from "react-bootstrap";

function TrainerDash() {
  return <main>
    <p>[TRAINER]'s dashboard</p>
    <ClientList />
    <Button variant="primary">Add client</Button>
  </main>;
}

export default TrainerDash;