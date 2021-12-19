import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import Banner from "./Banner";
import { Container, Row } from "react-bootstrap";
import SearchInput from "./SearchInput";
import OfferSection from "./OfferSection";

const ProductList = () => {

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
        <div>
            <Banner></Banner>
            <SearchInput></SearchInput>
            <h1 className="fw-bold mt-5 text-center">Choose Your Favorites </h1>
            <Container>
                <Row>
                    <ProductComponent />
                </Row>
                <OfferSection></OfferSection>
            </Container>
        </div>
    );
};

export default ProductList;
