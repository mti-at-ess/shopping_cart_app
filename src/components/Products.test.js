// Products.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';

test('renders Products component', () => {
  const addToCart = jest.fn(); // Mock function
  const { getByText } = render(<Products addToCart={addToCart} />);
  const titleElement = getByText(/loading/i);
  expect(titleElement).toBeInTheDocument();
});
