// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'; // Add useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery/Gallery'; 
import Home from './components/Home/Home.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout';

function App() {
  // cartItems state will hold the products added to the cart
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage if available
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // onAddToCart is defined here
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);
  
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } 
  
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Function to clear the cart (used after placing an order)
  const handleClearCart = () => {
    setCartItems([]); // Clear the cart
  };

  // Use useEffect to save cart items to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Pass the handleAddToCart function as a prop to ProductDetail */}
          <Route 
            path="/product/:id" 
            element={<ProductDetail onAddToCart={handleAddToCart} />} 
          />
          
          {/* Pass cartItems and handleRemoveFromCart to CartPage */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart}/>} />
          
          {/* Pass cartItems and handleClearCart to Checkout */}
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onClearCart={handleClearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
