"use strict";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import TrainerAppApi from './Api';
import { jwtDecode } from 'jwt-decode';
import  userContext from './userContext';
import RouteList from './Navigation/RouteList';


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
        console.log("user info: ",userInfo)

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
  async function register(formData) {
    let res = await TrainerAppApi.register(formData);
    setToken(res.token);
    return;
    }

    /**Function to be called in login form to call API and login the user*/
    async function login(formData) {
      let res = await TrainerAppApi.login(formData);
      console.log("login reached. res:", await res);
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
      <userContext.Provider value={user}>
      <BrowserRouter>
        <NavBar logout={logout}/>
        <RouteList register={register} login={login}/>
      </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
