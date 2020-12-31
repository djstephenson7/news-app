import { AsyncStorage } from 'react-native';

import newsAPI from '../api/newsAPI';
import { navigate } from '../navigation/navigationRef';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'clear_errors':
      return { ...state, errorMessage: '' };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { token: null };
    default:
      return state;
  }
};

const getUserDetails = (dispatch) => async () => {
  try {
    const id = await AsyncStorage.getItem('userId');
    const res = await newsAPI.get(`/users/${id}`);

    return res.data;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

const updatePassword = (dispatch) => async (password) => {
  try {
    const id = await AsyncStorage.getItem('userId');
    const res = await newsAPI.patch(`/users/${id}`, { password });
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

const signup = (dispatch) => async (signupDetails) => {
  try {
    const res = await newsAPI.post('/users', signupDetails);
    await AsyncStorage.setItem('token', res.data.token);
    await AsyncStorage.setItem('userId', res.data.id);
    dispatch({ type: 'signin', payload: res.data });

    navigate('MainScreen');
  } catch (error) {
    dispatch({ type: 'error', payload: error.response.data });
  }
};

const autoSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('MainScreen');
  } else {
    navigate('AuthFlow');
  }
};

const clearErrors = (dispatch) => () => {
  dispatch({ type: 'clear_errors' });
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const res = await newsAPI.post('/auth', { email, password });
    await AsyncStorage.setItem('token', res.data);
    dispatch({ type: 'signin', payload: res.data });

    navigate('MainScreen');
  } catch (error) {
    dispatch({ type: 'error', payload: error.response.data });
  }
};
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });

  navigate('Login');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    autoSignin,
    clearErrors,
    getUserDetails,
    signin,
    signup,
    signout,
    updatePassword,
  },
  { token: null, errorMessage: '' }
);
