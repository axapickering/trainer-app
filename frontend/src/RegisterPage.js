import RegisterForm from "./Forms/RegisterForm";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function RegisterPage({ register }) {
  return (<>
    <RegisterForm register={register}/>
    <Link to="/">
      <Button>Return to login</Button>
    </Link>
  </>);
}

export default RegisterPage;