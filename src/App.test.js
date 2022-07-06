import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Change to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button.textContent).toBe('Change to red');
});

test('Initial condition of checkbox is unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'})
  expect(button).toBeEnabled()
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Button becomes disabled if checkbox checked and enabled if checkbox is unchecked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'})
  const button = screen.getByRole('button')
  fireEvent.click(checkbox)
  expect(button).not.toBeEnabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})
