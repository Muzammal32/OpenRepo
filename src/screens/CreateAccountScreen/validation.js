import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required().max(50).label('Username'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).max(50).label('Password'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .min(6)
    .max(50)
    .label('Confirm Password'),
});
