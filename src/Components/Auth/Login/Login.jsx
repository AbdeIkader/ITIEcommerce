import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = ({ saveUserData }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
       const registrationData = JSON.parse(localStorage.getItem('registrationData'));

       if (
         registrationData &&
         registrationData.email === values.email &&
         registrationData.password === values.password
       ) {
         formik.resetForm();
         alert('Login successful!');
         navigate('/products');
       } else {
         // Failed login
         alert('Invalid email or password');
       }
    },
  });

  return (
    <div className="m-auto w-75 py-5">
      <h2>Login Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-data my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...formik.getFieldProps('email')}
            className={`form-control my-2 ${
              formik.touched.email && formik.errors.email ? 'is-invalid' : ''
            }`}
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="input-data my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...formik.getFieldProps('password')}
            className={`form-control my-2 ${
              formik.touched.password && formik.errors.password ? 'is-invalid' : ''
            }`}
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="button w-100 d-flex flex-row-reverse">
          <button type="submit" className="btn btn-info my-3">
            Login
          </button>
        </div>
      </form>
      <Link to="/register" className="my-2">
        New User? Create an account
      </Link>
    </div>
  );
};

export default LoginComponent;
