import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test that button has correct color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Changed to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button.textContent).toBe('Changed to red');
});


