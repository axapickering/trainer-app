"use strict";
import "./ClientWorkouts.css";

import Workout from "./Workout";
import { Container } from "react-bootstrap";

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
  const previousWorkouts = workouts.map(data => {(<Workout data={data}/>)});


  return <Container className="client-workouts-pane bg-light">

    <h2>Workouts</h2>

      {previousWorkouts}

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <h3>Upcoming</h3>
    {nextWorkout}

  </Container>
}

export default ClientWorkouts;