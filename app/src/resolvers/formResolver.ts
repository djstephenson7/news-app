import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup.string().min(5).max(50).required(),
  email: yup.string().email().min(5).max(50).required(),
  firstName: yup.string().min(5).max(50).required(),
  surname: yup.string().min(5).max(50).required(),
  password: yup.string().min(5).max(50).required(),
  confirmPassword: yup.string().min(5).max(50).required(),
});

const formResolver = (data: any, validationContext) => {
  const { error, value: values } = formSchema.validate(data, {
    abortEarly: false,
  });

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous, currentError) => {
          return {
            ...previous,
            [currentError.path[0]]: currentError,
          };
        }, {})
      : {},
  };
};

export default formResolver;
