// Cart.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';

test('renders Cart component', () => {
  const cartItems = [];
  const removeFromCart = jest.fn(); // Mock function
  const updateQuantity = jest.fn(); // Mock function
  const total = 0;
  const { getByText } = render(
    <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} total={total} />
  );
  const titleElement = getByText(/shopping cart/i);
  expect(titleElement).toBeInTheDocument();
});
