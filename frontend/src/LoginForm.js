"use strict";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Container, Col } from 'react-bootstrap';

function LoginForm({ login }) {

  function handleSubmit() {
    return;
  }




  return (
    <Container className='d-flex justify-content-center align-items-center vw-40'>
      <Row className='w-100'>
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className='mx-auto py-5'>
          <div className='p-4 bg-light rounded'>
            <Form>

              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>

            </Form>
          </div>
        </Col>
      </Row>
    </Container>);
}

export default LoginForm;
