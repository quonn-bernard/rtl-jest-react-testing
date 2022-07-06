import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test that button has correct color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Change to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button.textContent).toBe('Change to red');
});

test('initial condition', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'})
  expect(button).toBeEnabled()
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('that button becomes disabled if checkbox checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')
  fireEvent.click(checkbox)
  expect(button).not.toBeEnabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})
