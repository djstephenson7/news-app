import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigation/navigationRef';
import newsAPI from '../api/newsAPI';

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

const signup = (dispatch) => async (signupDetails) => {
  try {
    const res = await newsAPI.post('/users', signupDetails);
    await AsyncStorage.setItem('token', res.data);
    dispatch({ type: 'signin', payload: res.data });

    navigate('MainScreen');
  } catch (error) {
    dispatch({ type: 'error', payload: 'Something went wrong' });
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

const signin = (dispatch) => async ({ username, password }) => {
  try {
    const res = await newsAPI.post('/auth', { username, password });
    await AsyncStorage.setItem('token', res.data);
    dispatch({ type: 'signin', payload: res.data });

    navigate('MainScreen');
  } catch (error) {
    dispatch({ type: 'error', payload: 'Something went wrong' });
  }
};
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('AuthFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { autoSignin, clearErrors, signin, signup, signout },
  { token: null, errorMessage: '' }
);
