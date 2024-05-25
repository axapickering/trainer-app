"use strict";
import "./ClientWorkouts.css";

import Workout from "./Workout";
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';

const fakeWorkouts = [
  {
    title: 'Arm day',
    date: '5/18/24'
  },
  {
    title: 'Leg day',
    date: '5/19/24'
  },
  {
    title: 'Back day',
    date: '5/21/24'
  },
  {
    title: 'Core and shoulder day',
    date: '5/23/24'
  }
];


function ClientWorkouts({ workouts=fakeWorkouts }) {

  const nextWorkout = (<Workout data={workouts.pop()}/>);


  return <Container className="client-workouts-pane bg-light">

    <h2 className="m-auto">Workouts</h2>

    <Stack direction="vertical" gap={1}>
      {workouts.map((workout) => (<Workout data={workout}/>))}
    </Stack>


    <h3 className="m-auto">Upcoming</h3>

    <Container direction="vertical" className="m-auto" style={{justifyContent:'center'}}>
    {nextWorkout}
    </Container>

  </Container>
}

export default ClientWorkouts;