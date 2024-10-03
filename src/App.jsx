// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery/Gallery'; 
import Home from './components/Home/Home.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';

function App() {
  // cartItems state will hold the products added to the cart
  const [cartItems, setCartItems] = useState([]); // This is where cartItems is defined

  // onAddToCart is defined here
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); 
  };
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Here we pass the onAddToCart function as a prop to ProductDetail */}
          <Route 
            path="/product/:id" 
            element={<ProductDetail onAddToCart={handleAddToCart} />} 
          />
          
          {/* Here we pass the cartItems state as a prop to CartPage */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
