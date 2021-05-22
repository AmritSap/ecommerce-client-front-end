import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../pages/cart/cartAction";
import { Table, Image, Button, Row, Col, Container } from "react-bootstrap";
import { deleteFromCart } from "../../pages/cart/cartAction";
import { Link } from "react-router-dom";
import { CartSubTotalComponent } from "../cartSubTotal/cartSubTotalComponent";

const CartComponent = () => {
  let totalPrice = 0;
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);

  const [changeInQuantity, setChangeInQuantity] = useState(
    cartList.selectedQty
  );
  // useEffect(() => {
  //   dispatch(addToCart());
  // });

  ///

  const changeInQuantityHandler = (listitem, selectedQty) => {
    dispatch(addToCart(listitem, selectedQty));
  };

  const handleOnDeleteItem = (item) => {
    dispatch(deleteFromCart(item));
  };
  return (
    <div>
      <Row>
        <Col xs={8}>
          {cartList.length ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartList.length &&
                  cartList.map((row, i) => (
                    <tr key={row._id}>
                      <td>{i + 1}</td>
                      <Link to={`/product/${row.slug}`}>
                        <td>
                          <Image
                            src={row.images[0]}
                            width="80px"
                            height="auto"
                            alt="product image"
                          />
                        </td>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                      </Link>
                      <td>
                        <p>
                          Change quantity:
                          <input
                            type="from"
                            name="quantity"
                            placeholder={row.selectedQty}
                            value={changeInQuantity}
                            onChange={(e) =>
                              changeInQuantityHandler(row, +e.target.value)
                            }
                          ></input>
                        </p>
                      </td>

                      <td>
                        <Button onClick={() => handleOnDeleteItem(row)}>
                          Remove Item Form Cart
                        </Button>
                      </td>
                    </tr>
                  ))}
                <td>
                  <Button variant="primary">Checkout</Button>{" "}
                </td>
              </tbody>
            </Table>
          ) : (
            <p>
              <h4>You dont have any itme in you cart.</h4>
              <Link to="*">
                <Button>Start Shopping</Button>
              </Link>
            </p>
          )}
        </Col>
        <Col>{cartList.length ? <CartSubTotalComponent /> : " "}</Col>
      </Row>
    </div>
  );
};

export default CartComponent;
