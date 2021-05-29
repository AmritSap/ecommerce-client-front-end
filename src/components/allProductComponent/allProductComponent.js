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
    <div className="product_screen">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {productList?.map((item, i) => {
        return (
          <div className="product" key={i}>
            <Image
              className="product_image"
              src={item?.images[0]}
              alt="Products"
              style={{ width: "100%" }}
            />
            <div className="product_info">
              <p className="name">{item.name}</p>

              <p className="product_price">Price: {item.price}</p>
              <p className="description">{item.description}</p>
            </div>
            <Button variant="success">
              <Link to={`/product/${item.slug}`}>View Product</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
