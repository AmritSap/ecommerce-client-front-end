import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedProducts } from "../../pages/product/productAction";
import { Button, Image, Spinner } from "react-bootstrap";

import { addToCartSuccess } from "../../pages/product/productSlice";
import { Link } from "react-router-dom";
import "./displayProduct.css";
export const DisplayProducts = () => {
  const dispatch = useDispatch();
  // let { slug } = useParams();
  let { slug, _id } = useParams();
  const { categoryList } = useSelector((state) => state.category);
  const { isLoading, selectedProductList, addToCart } = useSelector(
    (state) => state.product
  );
  const selectedCat = categoryList.filter((row) => row._id === _id);
  console.log("from display products", selectedCat);
  useEffect(() => {
    dispatch(fetchSelectedProducts(_id));
  }, [_id]);

  const handleOnButtonClicked = (_id) => {
    console.log("from function", _id);
    const result = _id;
    dispatch(addToCartSuccess(result));
  };

  return (
    <div>
      <div className="product_screen">
        {isLoading && <Spinner variant="primary" animation="border" />}
        {selectedProductList?.map((item, i) => {
          return (
            <div class="product" key={i}>
              <img
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

              <Link to={`/product/${item.slug}`}>
                {" "}
                <Button variant="success">View Product </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
