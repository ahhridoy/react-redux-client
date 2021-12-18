import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar variant="dark" style={{backgroundColor: "navy", padding: "10px"}}>
            <Container>
                <Navbar.Brand href="#home" className="fs-2">Camera Shop</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
