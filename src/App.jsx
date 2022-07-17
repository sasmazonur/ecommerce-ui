import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home"
import Cart from "./pages/Cart"

import Login from "./pages/Login"
import Product from "./pages/Product"
import Register from "./pages/Register"
import ProductList from "./pages/ProductList"
import Success from "./pages/Success"

const App = () => {
  const user = useSelector((state) => state.user.currentUser);  
  return (
  <Router>
    <Routes>
      <Route path="/register" caseSensitive={false} element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/login" caseSensitive={false} element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
