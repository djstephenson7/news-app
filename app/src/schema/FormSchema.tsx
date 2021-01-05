import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .min(5, 'This field cannot be less than 5 characters')
    .max(50, 'This field cannot be more than 50 characters')
    .required('Email is required'),
  password: yup
    .string()
    .min(5, 'This field cannot be less than 5 characters')
    .max(50, 'This field cannot be more than 50 characters')
    .required('Password is required'),
  firstName: yup
    .string()
    .min(5, 'This field cannot be less than 5 characters')
    .max(50, 'This field cannot be more than 50 characters')
    .required('First name is required'),
  surname: yup
    .string()
    .min(5, 'This field cannot be less than 5 characters')
    .max(50, 'This field cannot be more than 50 characters')
    .required('Surname is required'),
});

export default formSchema;
