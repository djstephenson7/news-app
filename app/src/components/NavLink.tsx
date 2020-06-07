import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { navigate } from '../navigation/navigationRef';

const NavLink = ({ text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigate(routeName)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavLink;
