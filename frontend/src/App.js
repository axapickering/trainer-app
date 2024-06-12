"use strict";

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ClientDash from "./ClientDash/ClientDash";
import TrainerDash from "./TrainerDash/TrainerDash";
import HomePage from './HomePage';
import WorkoutBuilder from './WorkoutBuilder/WorkoutBuilder';
import ExerciseLibrary from './ExerciseLibrary';
import TrainerAppApi from './Api';
import { jwtDecode } from 'jwt-decode';
import  userContext from './userContext';


axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL;

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsloading] = useState(true);

  useEffect(function () {
    async function fetchUserInfo() {
      if (token) {
        localStorage.setItem("token", token)
        TrainerAppApi.token = token;
        const userInfo = jwtDecode(token);
        try {
          let user = await TrainerAppApi.getUserInfo(userInfo.username);
          setUser(user);
        } catch (err) {
          console.error(err);
        }
      } else {
        localStorage.clear();
        setUser(null);
      }
      setIsloading(false);
    }

    fetchUserInfo();

  }, [token]);

  /**Function to be called in signup form to call API and register user */
  async function signup(formData) {
    let res = await TrainerAppApi.signup(formData);
    setToken(res.token);
    return;
  }

  /**Function to be called in login form to call API and login the user*/
  async function login(formData) {
    let res = await TrainerAppApi.login(formData);
    setToken(res.token);
    return;
  }

   /**Function to logout a user, resets user state to null */
   function logout() {
    setToken(null);
  }

  if (isLoading) return (<div><h1>Loading...</h1></div>);


  return (
    <div className="App" style={{ textAlign: "center"}}>
      <userContext.Provider value={null}>
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
      </userContext.Provider>
    </div>
  );
}

export default App;
