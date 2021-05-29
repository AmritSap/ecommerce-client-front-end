import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../pages/cart/cartAction";
import { Table, Image, Button, Row, Col, Container } from "react-bootstrap";
import { deleteFromCart } from "../../pages/cart/cartAction";
import { Link } from "react-router-dom";
import { CartSubTotalComponent } from "../cartSubTotal/cartSubTotalComponent";
import "./cartComponent.css";
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
      {cartList.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number of product</th>
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

                  <td>
                    <img
                      src={row.images[0]}
                      alt="product image"
                      className="cart_image"
                    />
                  </td>
                  <Link to={`/product/${row.slug}`} className="name">
                    {" "}
                    <td>{row.name}</td>{" "}
                  </Link>
                  <td>{row.price}</td>

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
                    <Button
                      variant="warning"
                      onClick={() => handleOnDeleteItem(row)}
                    >
                      Remove Item
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <p>
          <h4>You dont have any itme in you cart.</h4>
          <Link to="*">
            <Button variant="success">Start Shopping</Button>
          </Link>
        </p>
      )}
    </div>
  );
};

export default CartComponent;
