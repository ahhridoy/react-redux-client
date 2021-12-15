import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
        console.log(response)
      dispatch(setProducts(response.data));
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    console.log("Products :", products);
    return (
      <div className="ui grid container">
        <ProductComponent />
      </div>
    );
  };
  
  export default ProductList;
