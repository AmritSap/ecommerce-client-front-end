import "bootstrap/dist/css/bootstrap.min.css";
// import dotenv from "dotenv";
// dotenv.config();
import "./App.css";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Cart from "./pages/cart/Cart";
import { DisplayProducts } from "./pages/DisplayProduct/DisplayProducts";
import { AllProduct } from "./pages/allProduct/AllProduct";
import Profile from "./pages/profile/profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "../src/privateRoute/privateRoute";
import { ViewProduct } from "./pages/viewProduct/ViewProduct";
import Header from "./components/default-layout/Header";
import { MenuComponent } from "./components/menuComponent/menuComponent";
import Footer from "./components/default-layout/Footer";
import Purchases from "./components/purchases/Purchases";
import RecentlyViewed from "./components/recentlyViewed/RecentlyViewed";
import Checkout from "./pages/checkout/Checkout";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MenuComponent />

        <Switch>
          <PrivateRoute exact path="/my-profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/Home">
            <AllProduct />
          </Route>
          <Route exact path="/recent">
            <RecentlyViewed />
          </Route>
          <Route exact path="/Sign-In">
            <Login />
          </Route>
          <PrivateRoute exact path="/purchases">
            <Purchases />
          </PrivateRoute>

          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>

          <PrivateRoute exact path="/userProfile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/Create-Account">
            <CreateAccount />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/category/:slug/:_id">
            <DisplayProducts />
          </Route>
          <Route exact path="/product/:slug/">
            <ViewProduct />
          </Route>
          <Route exact path="*">
            <AllProduct />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
