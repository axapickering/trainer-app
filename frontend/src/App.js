"use strict";
import './App.css';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ClientDash from "./ClientDash";
import TrainerDash from "./TrainerDash";
import HomePage from './HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/client" element={<ClientDash/>} />
          <Route path="/trainer" element={<TrainerDash/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
