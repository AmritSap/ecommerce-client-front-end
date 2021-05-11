import React from "react";
import "./defaultLayout.css";
import Footer from "./Footer";
import Header from "./Header";

import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
