"use strict";

import React, { useContext, useState }from "react";
import userContext from "../userContext";
import { Routes, Route , Navigate } from 'react-router-dom';
import ClientDash from "../ClientDash/ClientDash";
import TrainerDash from "../TrainerDash/TrainerDash";
import HomePage from '../HomePage';
import WorkoutBuilder from '../WorkoutBuilder/WorkoutBuilder';
import ExerciseLibrary from '../ExerciseLibrary';
import RegisterPage from '../RegisterPage';


function RouteList({ register, login }) {

  const username = useContext(userContext)?.username;

  const routesLoggedIn =
  (
     <>
      <Route path="/client" element={<ClientDash />} />
      <Route path="/trainer" element={<TrainerDash />} />
      <Route path="/workoutbuilder" element={<WorkoutBuilder />} />
      <Route path="/library" element={<ExerciseLibrary />} />
     </>
   );

 const routesLoggedOut =
  (
     <>
        <Route path="/register" element={<RegisterPage register={register}/>} />
     </>
   );

  return (
    <Routes>
      <Route path="/" element={<HomePage login={login}/>} />
      {username ? routesLoggedIn : routesLoggedOut};
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>);
}

export default RouteList;