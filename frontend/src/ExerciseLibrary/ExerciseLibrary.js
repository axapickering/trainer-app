"use strict";

import { useContext } from "react";
import userContext from "../userContext";
import { Container } from "react-bootstrap";
import CategoryDisplay from "./CategoryDisplay"

export default function ExerciseLibrary() {

  const { username, exercises } = useContext(userContext);



  return (<Container>

    <h2 className="m-4">{username}'s exercise library</h2>

    {exercises.length === 0 ? <p>There doesn't seem to be anything here.</p> : <></>}

    <CategoryDisplay />



  </Container>)
}