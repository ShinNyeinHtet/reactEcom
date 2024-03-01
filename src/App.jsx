import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar";
import Products from "./Pages/product/Products";
import Cart from "./Pages/cart/Cart";
import  Favourite  from "./Pages/favourite/Favourite";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
};

export default App;
