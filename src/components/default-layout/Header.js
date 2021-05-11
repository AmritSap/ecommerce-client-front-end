import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className="container">
        <Navbar.Brand>
          <Nav.Link>
            {" "}
            <Link to="/Home">Organic Cart </Link>
          </Nav.Link>
        </Navbar.Brand>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search For Anything"
            className="mr-sm-2"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="ml-4 mr-0">
          <Nav.Link>
            {" "}
            <Link to="/Sign-In">Sign In </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Create-Account">Create Account</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Cart">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="menu container">
        <div>All Categories</div>
        <div>Dairy</div>
        <div>Vegetable</div>
        <div>Meat</div>
        <div>Grocery</div>
      </div>
    </div>
  );
};

export default Header;
