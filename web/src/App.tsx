import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import AppProvider from './context';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
