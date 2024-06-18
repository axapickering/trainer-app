"use strict";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Alert from './Alert';

function LoginForm({ login }) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState(null);

  function handleChange(evt) {
    const { id, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [id]: value }));
  }

  async function handleLogin(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setFormData({ username: "", password: "" });
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }




  return (
    <Container className='d-flex justify-content-center align-items-center vw-40'>
      <Row className='w-100'>
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className='mx-auto py-5'>
          <div className='p-4 bg-light rounded'>
            <Form>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete='username'
                  required />
              </Form.Group>


              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete='password'
                  required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>

            </Form>
            {errors && (<Alert alerts={errors} color={"danger"} />)}
          </div>
        </Col>
      </Row>
    </Container>);
}

export default LoginForm;
