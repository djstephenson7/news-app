import App from './src/navigation';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as NewsProvider } from './src/context/newsContext';
import React from 'react';

export default () => {
  return (
    <AuthProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </AuthProvider>
  );
};
