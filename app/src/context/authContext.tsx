import newsAPI from '../api/newsAPI';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({
  username,
  email,
  firstName,
  surname,
  password,
}) => {
  const userDetails = { username, email, firstName, surname, password };
  try {
    const response = await newsAPI.post('/users', userDetails);
    console.log(response.headers['x-auth-token']);
  } catch (error) {
    dispatch({
      type: 'error',
      payload: 'Something went wrong with signing up.',
    });
    console.log(error);
  }
};
const signin = (dispatch) => () => {};
const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { isSignedin: false, errorMessage: '' }
);
