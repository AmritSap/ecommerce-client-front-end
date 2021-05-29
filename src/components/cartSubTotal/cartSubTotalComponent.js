import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const CartSubTotalComponent = () => {
  const { cartList } = useSelector((state) => state.cart);

  const totalItems = () => {
    let totalItemsCount = 0;

    cartList.forEach((item) => {
      totalItemsCount = totalItemsCount + item.selectedQty;
    });
    return totalItemsCount;
  };
  const totalPrice = () => {
    let totalrice = 0;
    cartList.forEach((item) => {
      totalrice = totalrice + +item.selectedQty * item.price;
    });
    return totalrice;
  };

  console.log(cartList[0]?.selectedQty);
  return (
    <>
      <div>
        <h4>Total Items:{totalItems()}</h4>
      </div>
      <div>
        <h4>Total Price:${totalPrice()}</h4>
      </div>
      <div>
        {" "}
        <Button variant="success">Checkout</Button>{" "}
      </div>
    </>
  );
};
