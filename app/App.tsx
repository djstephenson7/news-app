import React from 'react';

import { Provider as AuthProvider } from './src/context/authContext';
import App from './src/navigation';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
