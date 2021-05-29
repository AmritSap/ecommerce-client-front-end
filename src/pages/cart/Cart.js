import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "../../components/cartComponent/CartComponent";
import { CartSubTotalComponent } from "../../components/cartSubTotal/cartSubTotalComponent";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <div className="cartpage">
      <div className="left-part">
        <CartComponent />
      </div>
      <div className="rightpart">
        {" "}
        {cartList.length ? <CartSubTotalComponent /> : " "}
      </div>
    </div>
  );
};

export default Cart;
