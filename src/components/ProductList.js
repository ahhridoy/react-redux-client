import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";

const ProductList = () => {
    // const products = useSelector((state) => state.allProducts.products);
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

    // console.log("Products :", products);
    return (
        <div id="home">
            <Banner></Banner>
            <Container>
                <Row>
                    <ProductComponent />
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
