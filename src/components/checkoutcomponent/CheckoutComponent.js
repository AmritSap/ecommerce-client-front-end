import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";

/////product is the cartlist
const product = [
  {
    name: "cowmilk",
  },
];

const CheckoutComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  const handleOnPay = (token) => {
    console.log(token);
    const newData = { product, token };

    const result = axios.post("http://localhost:8001/api/v1/payment", newData, {
      headers: { "Content-type": "application/json" },
    });
  };
  const total = 10 * 100; //price should be in cents
  return (
    <>
      <strong>Billing Address</strong>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>NSW</option>
                <option>VIC</option>
                <option>WA</option>
                <option>NT</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          {/* <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        <hr></hr>
        <strong>Shipping Address</strong>
        <div>
          <b>Is shipping address different than billing address?</b>{" "}
        </div>
        <form>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          ></input>
          Yes{" "}
        </form>
        {isChecked && (
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>NSW</option>
                  <option>VIC</option>
                  <option>WA</option>
                  <option>NT</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            {/* <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          </Form>
        )}
        <strong>Payment Info</strong>
        <StripeCheckout
          token={handleOnPay}
          stripeKey={process.env.REACT_APP_STRIP_KEY}
          name="Pay By Credit Card"
          amount={total}
        
          // shippingAddress
>
          <Button variant="success"> Pay Now</Button>
        </StripeCheckout>
      </Container>
    </>
  );
};

export default CheckoutComponent;
