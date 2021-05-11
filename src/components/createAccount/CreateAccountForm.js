import React, { useState } from "react";
import { Form, Button, Col, Jumbotron, Alert, Spinner } from "react-bootstrap";
import { newUserAction } from "../../pages/createAccount/createAccountAction";
import { useDispatch, useSelector } from "react-redux";
import { createUserSuccess } from "../../pages/createAccount/createAccountSlice";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  address: "sdsdd",
};

const CreateAccountForm = () => {
  const [NewUser, setNewUser] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, createUserresponse } = useSelector(
    (state) => state.newuser
  );

  // console.log(createUserResponse.message)
  ////////////handles the change on the form.//////////////////
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...NewUser, [name]: value });
    console.log(NewUser);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(NewUser);
    dispatch(newUserAction(NewUser));
  };
  return (
    <Jumbotron className="container">
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {createUserresponse?.message && (
        <Alert
          variant={
            createUserresponse.status === "success" ? "success" : "danger"
          }
        >
          {createUserresponse.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail"> 
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={NewUser.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={NewUser.password}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="Enter your First Name"
              onChange={handleOnChange}
              type="text"
              name="fName"
              value={NewUser.fName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>

            <Form.Control
              placeholder="Enter your Last Name"
              onChange={handleOnChange}
              type="text"
              name="lName"
              value={NewUser.lName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="">
          <Form.Label>Address</Form.Label>

          <Form.Control
            placeholder="Apartment, studio, or floor and city"
            onChange={handleOnChange}
            type="text"
            name="address"
            value={NewUser.address}
          />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to Terms of Service and Privacy Policy"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default CreateAccountForm;
