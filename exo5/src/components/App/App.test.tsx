import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('renders welcome page', () => {
  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  render(app);
  const title = screen.getByText(/Welcome/i);

  expect(title).toBeInTheDocument();
});
