import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../pages/category/category.Action";
import { Link } from "react-router-dom";
import "./menuComponent.css";

export const MenuComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const { categoryList } = useSelector((state) => state.category);
  return (
    <div className="left-bar">
      <Link to="/allProducts">
        <h4>Categories</h4>
      </Link>
      {categoryList?.map((item, i) => {
        return (
          <div key={i}>
            {" "}
            <Link to={`/category/${item.slug}/${item._id}`}>{item?.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
