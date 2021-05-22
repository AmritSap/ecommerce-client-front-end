import React from "react";
import { useSelector } from "react-redux";

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
        <h1>Total Items:{totalItems()}</h1>
      </div>
      <div>
        <h1>Total Price:${totalPrice()}</h1>
      </div>
    </>
  );
};
