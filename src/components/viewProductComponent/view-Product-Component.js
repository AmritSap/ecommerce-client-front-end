import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGivenSlugProduct } from "../../pages/product/productAction";
import { Image, Spinner, Button, Alert } from "react-bootstrap";
import { addToCart } from "../../pages/cart/cartAction";
import "./viewProductComponent.css";
export const ViewProductComponent = () => {
  const dispatch = useDispatch();
  const [selectedQty, setselectedQty] = useState(1);
  const [controlQuantity, setcontrolQuantity] = useState(false);
  const { selectedProductBySlugList, isLoading } = useSelector(
    (state) => state.product
  );
  const date = selectedProductBySlugList[0]?.saleEndDate?.substr(0, 10);

  let { slug } = useParams();
  useEffect(() => {
    dispatch(fetchGivenSlugProduct(slug));
  }, [slug]);

  const handleOnClick = (listitem, selectedQty) => {
    //  const newObj = { listitem, selectedQty };
    dispatch(addToCart(listitem, selectedQty));
  };
  const handleOnChange = (e) => {
    setcontrolQuantity("false");
    const { name, value } = e.target;
    setselectedQty(+value);
    // selectedProductBySlugList[0].customerRequestedQty = selectedQty;
    console.log(selectedQty);
    console.log(selectedProductBySlugList[0].qty);

    console.log(controlQuantity);
  };
  if (selectedQty > selectedProductBySlugList[0]?.qty) {
    setcontrolQuantity(true);
    setselectedQty(selectedProductBySlugList[0]?.qty);
  }

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}
      {selectedProductBySlugList?.map((item, i) => {
        return (
          <div>
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
              <p class="price">
                <h5>SalePrice: {item.salePrice}</h5>
              </p>
              <p class="price">
                {item.qty > 0 ? <h5> In stock</h5> : <h5> Out of stock</h5>}
              </p>
              <p class="price">
                <h5>This item is on sale and the sale End Date is : {date}</h5>
              </p>
              <p class="price">
                <h5>Huurry up Buy now to save bunch of money</h5>
              </p>
              <p>
                Quantity:
                <input
                  type="form"
                  name="quantity"
                  onChange={handleOnChange}
                  value={controlQuantity === true ? "0" : selectedQty}
                ></input>
              </p>
              {controlQuantity === true && (
                <Alert variant="danger">
                  We have only {item.qty} {item.name} available
                </Alert>
              )}
              <p>
                <Button onClick={() => handleOnClick(item, selectedQty)}>
                  Add to Cart
                </Button>
              </p>
            </div>

            <div classname="mt-4">
              <p>
                <h4>Product Description</h4>
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// export default ViewProductComponent;
