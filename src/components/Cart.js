// Cart.js

import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, total }) => {
  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">Price: £{item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(index, item.quantity - 1);
                      } else {
                        removeFromCart(index);
                      }
                    }}
                    className="decrement-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className="increment-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr className="divider" />
          <p className="total">Total: £{total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
