import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import toast from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';

const notify = () =>
  toast(`You're logged in`, {
    duration: 3000,
    style: {
      backgroundColor: 'rgb(83, 245, 83)',
    },
  });

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, action) => {
    dispatch(
      logIn({
        email: value.email,
        password: value.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
        notify();
      })
      .catch(() => {
        console.log('login error');
      });

    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <Button type="submit" variant="contained" color="success">
          Log In
        </Button>
      </Form>
    </Formik>
  );
};
