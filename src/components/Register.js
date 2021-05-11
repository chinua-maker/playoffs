import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { Formik } from 'formik';
import * as Yup from 'yup';

function Register() {
  // const [valuesState, setValuesState] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   lga: ''
  // });

  // const handleChange = e => {
  //   const {name , value} = e.target;
  //   setValuesState({
  //     ...valuesState,
  //     [name]: value
  //   });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(valuesState);
  //   console.log(JSON.stringify(valuesState));
  //   fetch
  //     ('https://sua-gameapp.herokuapp.com/signup',{
  //     method: 'POST',
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(valuesState),
  //     redirect: "follow",
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch((err) => { console.log(err) 
  //     })
  //   }
  

  return (
    <Formik
    initialValues={{ name: '', email: '', password: '', lga: '' }}
    onSubmit={(values, history) => {
      setTimeout(() => {
        fetch
        ('https://sua-gameapp.herokuapp.com/signup',{
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values)
        // redirect: "/login",
      })
      .then(value => {
        history.push("/login");
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => { console.log(err) 
        })
      }, 5000)
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("name is required !"),
      email: Yup.string().required("email is required !"),
      lga: Yup.string().required("lga is required !"),
      password: Yup.string().min(8).required("Required !").matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain atleast 8 Characters, One Number and one special case Character"
      ),
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
      <Form.Group controlId="formBasicName">
        <Form.Label>
          <i className="fas fa-user m-2"></i>
          Name
        </Form.Label>
        <Form.Control
          type="text"
          name= "name"
          placeholder="Enter name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      {errors.name && touched.name && (
        <div style={{ color: "red" }}>{errors.name}</div>
      )}
      </Form.Group>

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
          onBlur={handleBlur}
        />
      {errors.password && touched.password && (
        <div style={{ color: "red" }}>{errors.password}</div>
      )}
      </Form.Group>
      <Form.Group controlId="formBasicLocation">
        <i className="fas fa-satellite-dish m-2"></i>
        <Form.Label>L.G.A</Form.Label>
        <Form.Control
          type="lga"
          name="lga"
          placeholder="L.G.A"
          value={values.lga}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      {errors.lga && touched.lga && (
        <div style={{ color: "red" }}>{errors.lga}</div>
      )}
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
        Remember me
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Register
      </Button>
    </Form>
      )}}
      </Formik>
  );
};

export default Register;
