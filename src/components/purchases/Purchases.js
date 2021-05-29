import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Purchases = () => {
  return (
    <div>
      <strong>
        You havent purchased any item till date{" "}
        <Link to="/">
          <Button variant="success">Start Shopping</Button>
        </Link>
      </strong>
    </div>
  );
};

export default Purchases;
