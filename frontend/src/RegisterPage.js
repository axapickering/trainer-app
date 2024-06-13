"use strict";

import RegisterForm from "./RegisterForm";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function RegisterPage() {
  return (<>
    <RegisterForm />
    <Link to="/">
      <Button>Return to login</Button>
    </Link>
  </>);
}

export default RegisterPage;