import React, { useContext, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';
import { Context as AuthContext } from '../context/authContext';

const LoadingScreen = () => {
  const { autoSignin } = useContext(AuthContext);

  useEffect(() => {
    autoSignin();
  });
  return <ActivityIndicator size="large" />;
};

export default LoadingScreen;
