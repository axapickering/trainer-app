"use strict";
import { Card, Button } from "react-bootstrap";

function ClientCard({ name }) {
  return (<Card style={{ width: "25vw"}}>
    <Card.Body>
      <Card.Text>
        {name}
      </Card.Text>
      <Button variant="primary" style={{ margin: "1vw"}}>Edit Client Info</Button>
      <Button variant="primary">Add Workout</Button>
    </Card.Body>
  </Card>);
}

export default ClientCard;