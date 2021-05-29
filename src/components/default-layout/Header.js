import React from "react";
import { Link } from "react-router-dom";
import {
  div,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { MenuComponent } from "../menuComponent/menuComponent";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./defaultLayout.css";
import image from "../../assets/storeLogo/organiccartlogo.jpg";

const Header = () => {
  const history = useHistory();
  const { isAuthorised } = useSelector((state) => state.login);
  const { cartList } = useSelector((state) => state.cart);
  const totalItems = () => {
    let totalItemsCount = 0;

    cartList.forEach((item) => {
      totalItemsCount = totalItemsCount + item.selectedQty;
    });
    return totalItemsCount;
  };

  const handleOnClick = () => {
    localStorage.removeItem("EcommerceRefreshJWT");
    sessionStorage.removeItem("accessJWT");
    history.push("/Sign-In");
  };

  return (
    <>
      <div className="header">
        <div className="header_logo">
          {" "}
          <Link to="/Home">
            <h4>Organic Cart</h4>
          </Link>
        </div>
        <div className="header_search">
          <div className="header_searchInput">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search For Anything"
                className="mr-sm-2"
              />
            </Form>
          </div>
          <div className="header_button">
            {" "}
            <Button variant="dark">Search</Button>
          </div>
        </div>
        <div className="header_links">
          {localStorage.getItem("EcommerceRefreshJWT") ? (
            <div className="header_logout">
              <Link onClick={handleOnClick}>Log Out </Link>
            </div>
          ) : (
            <div className="sign">
              <div className="header_signin">
                <Link to="/Sign-In">Sign-In </Link>{" "}
              </div>
              <div className="header_signup">
                <Link to="/Create-Account">Sign-up</Link>
              </div>
            </div>
          )}

          <div className="header_cart">
            {" "}
            <Link to="/Cart">
              <i class="fas fa-shopping-cart"></i>
              <span>{totalItems()}</span>
            </Link>
          </div>
          <div className="header_myprofile">
            <Link to="/my-profile">My-Profile</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
