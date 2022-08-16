import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('it should render the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bug tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('it creates a new bug',()=>{
  render(<App />);
  const inputEl = screen.getByTestId('newBugDescription');
  userEvent.type(inputEl,'test bug 123');
  fireEvent.click(screen.getByTestId('addButton'));
  expect(screen.getByText(/test bug 123/i)).toBeInTheDocument();
})
