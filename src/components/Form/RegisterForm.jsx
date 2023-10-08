// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { yupResolver } from '@hookform/resolvers/yup';
// import Notiflix from 'notiflix';
// import * as yup from 'yup';
// import {
//   StyledForm,
//   StyledInput,
//   FormButton,
//   ErrorMessage,
// } from './Form.styled';

// import { createUser } from '../../redux/auth/authOperation';

// export const registrationSchema = yup
//   .object()
//   .shape({
//     name: yup
//       .string()
//       .matches(
//         /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//         "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       )
//       .required('Name is required'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password: yup
//       .string()
//       .min(7, 'Password must be at least 7 characters long')
//       .required('Password is required'),
//   })
//   .required();

// export function RegisterForm() {
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: { name: '', email: '', password: '' },
//     resolver: yupResolver(registrationSchema),
//   });

//   const onSubmit = ({ name, email, password }) => {
//     dispatch(createUser({ name, email, password }))
//       .unwrap()
//       .then(() => Notiflix.Notify.success('Account successfully created!'))
//       .catch(e =>
//         e === 'Request failed with status code 400'
//           ? Notiflix.Notify.failure(
//               'This user already exist! Use Log In button'
//             )
//           : Notiflix.Notify.failure('Something went wrong, try one nore time!')
//       );
//     reset();
//   };

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="name">Name</label>
//         <StyledInput {...register('name')} type="text" id="name" />
//         <ErrorMessage>{errors.name?.message}</ErrorMessage>
//         <label htmlFor="email">Email</label>
//         <StyledInput {...register('email')} type="email" id="email" />
//         <ErrorMessage>{errors.email?.message}</ErrorMessage>
//         <label htmlFor="password">Password</label>
//         <StyledInput {...register('password')} type="password" id="password" />
//         <ErrorMessage>{errors.password?.message}</ErrorMessage>
//         <FormButton type="submit">Register</FormButton>
//       </StyledForm>
//     </>
//   );
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/auth/authOperation';

import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './Form.styled';

export function RegisterForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  });

  const registrationSchema = yup
    .object()
    .shape({
      name: yup
        .string()
        .matches(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        )
        .required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is required'),
    })
    .required();

  const onSubmit = ({ name, email, password }) => {
    registrationSchema
      .validate({ name, email, password }, { abortEarly: false })
      .then(() => {
        dispatch(createUser({ name, email, password }))
          .unwrap()
          .then(() => Notiflix.Notify.success('Account successfully created!'))
          .catch(e =>
            e === 'Request failed with status code 400'
              ? Notiflix.Notify.failure(
                  'This user already exists! Use Log In button'
                )
              : Notiflix.Notify.failure(
                  'Something went wrong, try one more time!'
                )
          );
        reset();
      })
      .catch(errors => {
        errors.inner.forEach(error => {
          const field = error.path;
          const errorMessage = error.message;
          // Додайте код для відображення помилок для кожного поля форми
          console.error(`Field: ${field}, Error: ${errorMessage}`);
        });
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <StyledInput {...register('name')} type="text" id="name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <label htmlFor="email">Email</label>
        <StyledInput {...register('email')} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <label htmlFor="password">Password</label>
        <StyledInput {...register('password')} type="password" id="password" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Register</FormButton>
      </StyledForm>
    </>
  );
}
