// App.js

import React, { useState } from 'react';
import '../styles/styles.scss'; // Import Sass file for styling
import Products from './Products';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Shopping Cart</h1>
      <div className="app-content">
        <div className="products-container">
          <Products addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            total={calculateTotalPrice()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
