import React from "react";
import CartComponent from "../../components/cartComponent/CartComponent";
import DefaultLayout from "../../components/default-layout/DefaultLayout";

const Cart = () => {
  return (
    <div>
      <DefaultLayout>
        {" "}
        <CartComponent />
      </DefaultLayout>
    </div>
  );
};

export default Cart;
