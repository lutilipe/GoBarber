import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
