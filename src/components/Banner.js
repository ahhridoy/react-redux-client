import * as React from "react";
import bg from "../images/banner.jpg";

const banner = {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "480px",
};


const Banner = () => {
    return <div style={banner}></div>;
};

export default Banner;