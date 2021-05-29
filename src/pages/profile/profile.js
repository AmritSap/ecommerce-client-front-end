import React from "react";
import LoginForm from "../../components/login/LoginForm";
import { Row, Col, Container, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <strong>Personal Info</strong>
      <Container>
        <Row>
          <Col xs="2">
            <h5>User name</h5>
          </Col>
          <Col md="auto">AMIRT</Col>
        </Row>
        <br />
        <br />
        <br />
        <hr></hr>
        <Row>
          <Col xs="2">
            <h5>Contact Info</h5>
          </Col>
          <Col md="auto">AMIRT</Col>
        </Row>
        <br />
        <br />
        <br />
        <hr></hr>
        <Row>
          <Col xs="2">
            <h5>Payment Options</h5>
          </Col>
          <Col md="auto">AMIRT</Col>
        </Row>
        <br />
        <br />
        <br />
        <hr></hr>
        <Row>
          <Col xs="2">
            <h5>Address</h5>
          </Col>
          <Col md="auto">AMIRT</Col>
        </Row>
        <br />
        <br />
        <br />
        <hr></hr>

        <Button variant="success">Update Info</Button>
      </Container>
    </div>
  );
};

export default Profile;
