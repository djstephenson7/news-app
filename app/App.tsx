import React from 'react';

import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as NewsProvider } from './src/context/newsContext';
import App from './src/navigation';

export default () => {
  return (
    <AuthProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </AuthProvider>
  );
};
