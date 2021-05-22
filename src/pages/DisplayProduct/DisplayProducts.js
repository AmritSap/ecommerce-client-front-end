import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedProducts } from "../../pages/product/productAction";
import { Button, Image, Spinner } from "react-bootstrap";
import DefaultLayout from "../../components/default-layout/DefaultLayout";
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
      <DefaultLayout>
        <div className="product">
          {isLoading && <Spinner variant="primary" animation="border" />}
          {selectedProductList?.map((item, i) => {
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
      </DefaultLayout>
    </div>
  );
};
