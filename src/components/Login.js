import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import login from "../images/login.png";

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <Container className="my-5">
            <Row>
                <Col md={6} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button> <br /> <br />
                        <Button variant="primary" type="submit" onClick={signInWithGoogle}>
                            Google SignIn
                        </Button>
                    </Form>
                </Col>
                <Col md={6} xs={12}>
                    <img src={login} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
