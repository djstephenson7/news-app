import React from 'react';

import { Provider as AuthProvider } from './src/context/authContext';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
