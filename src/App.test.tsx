import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it should render the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bug tracker/i);
  expect(linkElement).toBeInTheDocument();
});
