import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { Formik } from 'formik';
import * as Yup from 'yup';

function Login() {
  //   const [valuesState, setValuesState] = useState({
  //   email: '',
  //   password: ''
  // });

  // const handleChange = e => {
  //   const {name , value} = e.target;
  //   setValuesState({
  //     ...valuesState,
  //     [name]: value,
  //   });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(JSON.stringify(valuesState));

  //   }
  
  return (
    <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => {
      setTimeout(() => {
        fetch
        ('https://sua-gameapp.herokuapp.com/login',{
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
        redirect: "follow",
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => { console.log(err) 
        })
      }, 5000)
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().required("Required !"),
      password: Yup.string().required("Required !"),
    })}
  >
    {(props) => {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;
      return (
    <Form onSubmit={handleSubmit}>

      <div className="form-group container text-center"
        style={{ justifyContent: "center" }}>
        <h4 style={{ fontWeight: "800", fontSize: "3.5vmin" }}>
          Welcome Back!
        </h4>
        <p style={{ fontWeight: "500", fontSize: "2.2vmin" }}>
          Login to continue using your account.
        </p>
      </div>
      <Form.Group controlId="formBasicEmail">
        <i className="fas fa-envelope m-2"></i>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      {errors.email && touched.email && (
        <div style={{ color: "red" }}>{errors.email}</div>
      )}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <i className="fas fa-lock m-2"></i>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
      );
        }}
    </Formik>
  );
};

export default Login;
