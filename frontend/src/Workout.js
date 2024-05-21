"use strict";

import Card from 'react-bootstrap/Card';

function Workout({ data={} }) {

  const { date, title } = data;

  console.log(`tried to render workout : ${title}`)

  return (
    <Card>
      <Card.Header>{ date }</Card.Header>
      <Card.Body>{ title }</Card.Body>
    </Card>
  );
}

export default Workout;