"use strict";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Alert from "./Alert";


function RegisterForm({ register }) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({username:"",password:""});
  const [errors, setErrors] = useState(null);


  function handleChange(evt) {
    const { id, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [id]: value }));
  }

  async function handleSignup(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      setFormData({username:"",password:""});
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }


  return (
    <Container className='d-flex justify-content-center align-items-center vw-40'>
      <Row className='w-100'>
      <h1>Welcome.</h1>
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className='mx-auto py-5'>
          <div className='p-4 bg-light rounded'>
            <Form onSubmit={handleSignup}>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username"
                 placeholder="Username"
                 value={formData.username}
                 onChange={handleChange}
                 autoComplete='username'
                 required
                 />
                <Form.Text id="usernameHelp" muted>
                  Must be 3-20 characters
                </Form.Text>
              </Form.Group>


              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                 placeholder="Password"
                 value={formData.password}
                 onChange={handleChange}
                 autoComplete='new-password'
                 required
                  />
                <Form.Text id="passwordHelpBlock" muted>
                  Must be 6-30 characters long
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Create Account
              </Button>

            </Form>
            {errors && (<Alert alerts={errors} color={"danger"}/>)}
          </div>
        </Col>
      </Row>
    </Container>);
}

export default RegisterForm;
