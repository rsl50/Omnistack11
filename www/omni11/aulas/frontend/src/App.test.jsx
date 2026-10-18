import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza a tela de logon', () => {
  render(<App />);
  expect(screen.getByText(/Faça seu logon/i)).toBeInTheDocument();
});
