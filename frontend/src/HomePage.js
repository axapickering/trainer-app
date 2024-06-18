"use strict";

import LoginForm from './LoginForm';
import userContext from "./userContext";
import ClientDash from './ClientDash/ClientDash';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function HomePage({ login }) {
  const username = useContext(userContext)?.username;

  function loggedOut() {
    return (<>
      <LoginForm login={login}/>
      <p className='mb-2'>New user?</p>
      <Link to="/register"><Button>Create account</Button></Link>
    </>);
  }

  function loggedIn() {
    return (<>
      <ClientDash />
    </>
    );
  }

  return <div>
    {username ? loggedIn() : loggedOut()}
  </div>;
}

export default HomePage;