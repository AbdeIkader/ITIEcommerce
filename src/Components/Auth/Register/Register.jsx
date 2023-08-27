import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      age: Yup.number().required('Age is required').min(20, 'Minimum age is 20').max(80, 'Maximum age is 80'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(10, 'Minimum 10 characters'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('registrationData', JSON.stringify(values));

      formik.resetForm();

      alert('Registration successful!');

      navigate('/');
    },
  });

  return (
    <div className="m-auto w-75 py-5">
      <h2>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-data my-2">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            {...formik.getFieldProps('first_name')}
            className={`form-control my-2 ${
              formik.touched.first_name && formik.errors.first_name ? 'is-invalid' : ''
            }`}
            name="first_name"
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <div className="invalid-feedback">{formik.errors.first_name}</div>
          ) : null}
        </div>
        <div className="input-data my-2">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            {...formik.getFieldProps('last_name')}
            className={`form-control my-2 ${
              formik.touched.last_name && formik.errors.last_name ? 'is-invalid' : ''
            }`}
            name="last_name"
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <div className="invalid-feedback">{formik.errors.last_name}</div>
          ) : null}
        </div>
        <div className="input-data my-2">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            {...formik.getFieldProps('age')}
            className={`form-control my-2 ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
            name="age"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="invalid-feedback">{formik.errors.age}</div>
          ) : null}
        </div>
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
            Register
          </button>
        </div>
      </form>
      <Link to="/" className="my-2">
        Already have an account?
      </Link>
    </div>
  );
};

export default Register;
