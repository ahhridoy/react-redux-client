import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const AllProducts = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { _id, title, image, price } = product;
        return (
            <Col md={3} sm={4} xs={12} key={_id}>
                <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
                    <div className="card my-4 card-container">
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <h3>{title}</h3>
                            <p className="price">$ {price}</p>
                        </div>
                    </div>
                    {/* </div> */}
                </Link>
            </Col>
        );
    });
    return <>{renderList}</>;
};

export default AllProducts;
