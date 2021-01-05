import { useContext } from 'react';
import * as yup from 'yup';

import { Context as AuthContext } from '../context/authContext';

const { signup } = useContext(AuthContext);

yup.setLocale({
  string: {
    email: 'This field must contain a valid email address',
    min: 'This field cannot be less than 5 characters',
    max: 'This field cannot be more than 50 characters',
  },
});

const formSchema = yup.object().shape({
  email: yup.string().email().min(5).max(50).required(),
  firstName: yup.string().min(5).max(50).required(),
  surname: yup.string().min(5).max(50).required(),
  password: yup.string().min(5).max(50).required(),
});

export const submitData = async (data) => {
  try {
    await formSchema.validate(data);
    signup(data);
  } catch (err) {
    err.name; // => 'ValidationError'
    err.errors; // => ['Deve ser maior que 18']
    console.log(err.name);

    console.log(err.errors);
  }
};
