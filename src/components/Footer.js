import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-dark pb-5 pt-4 mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className="text-light">Camera Shop</h2> <br />{" "}
                        <br /> <br />
                        <small className="text-light small-text">
                            {" "}
                            Copyright 2021 Camera Shop.
                        </small>
                    </Col>
                    <Col md={3}>
                        <a className="link-text">About our Shop</a> <br />
                        <a className="link-text">Read our blog</a> <br />
                        <a to="/register" className="link-text">
                            Sign up to get services
                        </a>{" "}
                        <br /> <br />
                    </Col>
                    <Col md={3}>
                        <a className="link-text">Get help</a> <br />
                        <a className="link-text">Read FAQs</a> <br />
                        <a className="link-text">View all cities</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
