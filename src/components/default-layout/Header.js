import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormControl, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./defaultLayout.css";
import { logout } from "../../pages/login/loginAction.js";
import { userAutoLogin } from "../../pages/login/loginAction.js";
const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthorised, result } = useSelector((state) => state.login);
  const { cartList } = useSelector((state) => state.cart);
  const { loginResponse } = useSelector((state) => state.login);

  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("EcommerceRefreshJWT");
  console.log("from header", accessJWT, refreshJWT);
  console.log("from header", isAuthorised);

  // useEffect(() => {
  //   if (!accessJWT && !refreshJWT) history.push("Sign-In");
  // }, [accessJWT, refreshJWT]);

  const totalItems = () => {
    let totalItemsCount = 0;

    cartList.forEach((item) => {
      totalItemsCount = totalItemsCount + item.selectedQty;
    });
    return totalItemsCount;
  };

  let { from } = location.state || { from: { pathname: "/" } };
  useEffect(() => {
    isAuthorised && history.replace(from);
    !isAuthorised && dispatch(userAutoLogin());
  }, [isAuthorised]);

  const handleOnClickLogOut = () => {
    console.log("from logout", loginResponse);
    console.log(loginResponse?.result);
    dispatch(logout(loginResponse?.result));
    history.push("/");
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
          {isAuthorised ? (
            <div className="header_logout">
              <Link onClick={handleOnClickLogOut}>Log Out </Link>
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
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                My-Profile
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "black", color: "white" }}>
                <Dropdown.Item
                  href="#/action-1"
                  style={{ background: "black", color: "white" }}
                >
                  <Link to="/recent">Recently Viewed</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  style={{ background: "black", color: "white" }}
                >
                  <Link to="/purchases">Purchases</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  style={{ background: "black", color: "white" }}
                >
                  <Link to="/userProfile">Profile </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
