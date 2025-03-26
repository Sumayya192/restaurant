import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} />} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />  
      </Routes>
    </Router>
  );
}

export default App;
