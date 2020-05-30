import { AsyncStorage } from 'react-native';

import newsAPI from '../api/newsAPI';
import { navigate } from '../navigation/navigationRef';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async (signupDetails) => {
  try {
    const res = await newsAPI.post('/users', signupDetails);
    await AsyncStorage.setItem('token', res.headers['x-auth-token']);
    dispatch({ type: 'signup', payload: res.headers['x-auth-token'] });

    navigate('MainScreen');
  } catch (error) {
    dispatch({ type: 'error', payload: 'Something went wrong' });
  }
};

const signin = (dispatch) => () => {};
const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: '' }
);
