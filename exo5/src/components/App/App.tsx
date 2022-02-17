import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import { Home, User } from '..';
import ROUTES from '../../routes';

const queryClient = new QueryClient()

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Routes>
          <Route path={ROUTES.HOMEPAGE} element={<Home />} />
          <Route path={`${ROUTES.USER}/:userId`} element={<User />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
