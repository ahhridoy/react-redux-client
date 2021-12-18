import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route
                    path="/product/:productId"
                    element={<ProductDetails />}
                />
                {/* <Route>404 Not Found!</Route> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
