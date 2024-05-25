"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ClientDash from "./ClientDash/ClientDash";
import TrainerDash from "./TrainerDash/TrainerDash";
import HomePage from './HomePage';
import WorkoutBuilder from './WorkoutBuilder/WorkoutBuilder';
import ExerciseLibrary from './ExerciseLibrary';

axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App" style={{ textAlign: "center"}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/client" element={<ClientDash/>} />
          <Route path="/trainer" element={<TrainerDash/>} />
          <Route path="/workoutbuilder" element={<WorkoutBuilder/>} />
          <Route path="/library" element={<ExerciseLibrary/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
