import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Cardinal HelpDesk/i);
  expect(headingElement).toBeInTheDocument();
});
