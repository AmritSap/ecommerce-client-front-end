import React, { useState, useEffect } from "react";
import { Form, Button, Jumbotron, Alert, Spinner } from "react-bootstrap";
import { loginAction } from "../../pages/login/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, loginResponse, isAuthorised } = useSelector(
    (state) => state.login
  );

  const [loginFormData, setLoginFormData] = useState(initialState);
  useEffect(() => {
    isAuthorised && history.push("/Home");
  }, [isAuthorised]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
    console.log(loginFormData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginFormData));
  };
  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {loginResponse?.status === "error" && (
        <Alert variant="danger">{loginResponse.message}</Alert>
      )}
      <Jumbotron className="container">
        {" "}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={loginFormData.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={loginFormData.password}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default LoginForm;
