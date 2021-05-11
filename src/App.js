import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DefaultLayout from "./components/default-layout/DefaultLayout";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Sign-In">
            <Login />
          </Route>
          <Route exact path="/Create-Account">
            <CreateAccount />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="*">
            <DefaultLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
