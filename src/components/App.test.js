import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('adds and removes ingredients with correct prices', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Remove lettuce' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Add lettuce' }));
  expect(screen.getByText('Total Price: $3.50')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Remove lettuce' }));
  expect(screen.getByText('Total Price: $3.00')).toBeInTheDocument();
});

test('keeps batched updates and caps the total ingredient count', () => {
  render(<App />);
  const add = screen.getByRole('button', { name: 'Add lettuce' });
  act(() => {
    for (let i = 0; i < 12; i++) {
      add.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
  expect(screen.getByText('Total Price: $8.00')).toBeInTheDocument();
  expect(add).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Add meat' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Remove lettuce' }));
  expect(add).not.toBeDisabled();
  expect(screen.getByText('Total Price: $7.50')).toBeInTheDocument();
});

test('remove all restores the empty burger', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Add meat' }));
  fireEvent.click(screen.getByRole('button', { name: 'Remove All' }));
  expect(screen.getByText('Total Price: $3.00')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Remove meat' })).toBeDisabled();
});

test('ordering shows the current price and resets the burger', () => {
  const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  try {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Add meat' }));
    fireEvent.click(screen.getByRole('button', { name: 'Place Order' }));
    expect(alert).toHaveBeenCalledWith(expect.stringContaining('$4.30'));
    expect(screen.getByText('Total Price: $3.00')).toBeInTheDocument();
  } finally {
    alert.mockRestore();
  }
});
