import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DefaultLayout from "./components/default-layout/DefaultLayout";
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
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/my-profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/Home">
            <AllProduct />
          </Route>
          <Route exact path="/Sign-In">
            <Login />
          </Route>
          <PrivateRoute exact path="/my-profile">
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
      </Router>
    </div>
  );
}

export default App;
