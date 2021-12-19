import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../src/redux/actions/productActions";
import AllProducts from "./components/AllProducts";
import { Container, Row } from "react-bootstrap";

function App() {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://powerful-ravine-92991.herokuapp.com/products")
            .catch((err) => {
                // console.log("Err: ", err);
            });
        // console.log(response);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/home" element={<ProductList />} />
                <Route
                    path="/allProducts"
                    element={
                        <Container>
                            <Row>
                                <AllProducts />
                            </Row>
                        </Container>
                    }
                />

                {/* <Route
                    path="/product/:productId"
                    element={<ProductDetails />}
                /> */}

                <Route path="/login" element={<Login />} />
                <Route
                    path="/product/:productId"
                    element={
                        <PrivateRoute>
                            <ProductDetails />
                        </PrivateRoute>
                    }
                />
                <Route>404 Not Found!</Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
