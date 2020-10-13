import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
    const [valuesState, setValuesState] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const {name , value} = e.target;
    setValuesState({
      ...valuesState,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(valuesState));
    fetch
      ('https://sua-gameapp.herokuapp.com/login',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(valuesState),
      redirect: "follow",
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => { console.log(err) 
      })
    }
  
  return (

    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <i className="fas fa-envelope m-2"></i>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={valuesState.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <i className="fas fa-lock m-2"></i>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={valuesState.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};
