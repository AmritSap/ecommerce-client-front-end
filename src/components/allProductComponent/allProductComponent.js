import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../pages/product/productAction";
import { useHistory } from "react-router-dom";
import { Spinner, Image, Button, Row, Col, Container } from "react-bootstrap";
import { addToCartSuccess } from "../../pages/product/productSlice";
import "./allProductComponent.css";
import { Link } from "react-router-dom";

export const AllProductComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, productList, result } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const handleOnButtonClicked = (_id) => {
  //   console.log("from function", _id);
  //   dispatch(addToCartSuccess({_id}));
  // };

  return (
    <div className="conatiner product">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {productList?.map((item, i) => {
        return (
          <div class="card" key={i}>
            <Image
              className=""
              src={item?.images[0]}
              alt="Products"
              style={{ width: "100%" }}
            />
            <h1>{item.name}</h1>

            <p class="price">
              <h5>Price: {item.price}</h5>
            </p>
            <p>{item.description}</p>
            <p>
              <Link to={`/product/${item.slug}`}>View Product</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};
