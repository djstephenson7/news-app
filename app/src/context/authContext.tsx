import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigation/navigationRef';
import newsAPI from '../api/newsAPI';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    case 'clear_errors':
      console.log('clear_errors hit');

      return { ...state, errorMessage: '' };
    case 'signin':
      return { errorMessage: '', token: action.payload };
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
const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, clearErrors },
  { token: null, errorMessage: '' }
);
