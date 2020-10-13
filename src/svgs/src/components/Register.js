import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
  const [valuesState, setValuesState] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  });

  const handleChange = e => {
    const {name , value} = e.target;
    setValuesState({
      ...valuesState,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(valuesState);
    console.log(JSON.stringify(valuesState));
    fetch
      ('https://sua-gameapp.herokuapp.com/signup',{
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
      <Form.Group controlId="formBasicName">
        <Form.Label>
          <i className="fas fa-user m-2"></i>
          Name
        </Form.Label>
        <Form.Control
          type="text"
          name= "name"
          placeholder="Enter name"
          value={valuesState.name}
          onChange={handleChange}
        />
      </Form.Group>

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
      <Form.Group controlId="formBasicLocation">
        <i className="fas fa-satellite-dish m-2"></i>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="location"
          name="location"
          placeholder="Location"
          value={valuesState.location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
        Remember me
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Register
      </Button>
    </Form>
  );
};
