"use strict";

import { Container } from "react-bootstrap";
import ExerciseBox from "./ExerciseBox";

const sampleData = ["Bench press","Leg press","Seated row"];

export default function MovementType() {
  return (<Container>
    {sampleData.map(exercise => <ExerciseBox text={exercise}/>)}
  </Container>)
}