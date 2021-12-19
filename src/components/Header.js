import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// import { auth, provider } from "../firebase/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     setActiveUser,
//     setUserLogOutState,
//     selectUserName,
//     selectUserEmail,
// } from "../features/userSlice";

const Header = () => {
    // const dispatch = useDispatch();
    // const userName = useSelector(selectUserName);
    // const userEmail = useSelector(selectUserEmail);
    const { user, logOut } = useAuth();
    return (
        <Navbar
            variant="dark" bg="dark"
            style={{ padding: "10px" }}
        >
            <Container>
                <Navbar.Brand href="#home" className="fs-2">
                    Camera Shop
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink
                        to="/home"
                        style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                            padding: "10px",
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allProducts"
                        style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                            padding: "10px",
                        }}
                    >
                        Products
                    </NavLink>
                    {user.email ? (
                        <NavLink
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "15px" }}
                                onClick={logOut}
                            >
                                Logout
                            </Button>
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "15px" }}
                            >
                                Login
                            </Button>
                        </NavLink>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
