import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      {/* <SignIn /> */}
      <SignUp />
    </>
  );
};

export default App;
