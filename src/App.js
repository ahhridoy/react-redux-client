import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route
                        path="/product/:productId"
                        element={<ProductDetails />}
                    />
                    <Route>404 Not Found!</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
