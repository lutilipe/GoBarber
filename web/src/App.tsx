import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Luiz' }}>
        <SignIn />
        {/* <SignUp /> */}
      </AuthContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
