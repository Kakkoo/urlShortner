import React, { Component } from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
//import jwt_decode from "jwt-decode";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Url from "./components/layout/Url";
import Footer from "./components/layout/Footer";
import setAuthToken from "./utils/setAuthToken";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import { logoutUser } from "./actions/authActions";
import Dashboard from "./components/dashboard/Dashboard";

import { SET_USER } from "./actions/types";
import PrivateRoute from "./components/common/PrivateRoute";
if (localStorage.jwtToken) {
  //decode
  const decoded = jwt_decode(localStorage.jwtToken);
  //check the expiry of the token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Expired
    //Logout user
    store.dispatch(logoutUser());
    //Redirect user to login
    window.location.href = "/login";
  }

  //Set auth header
  setAuthToken(localStorage.jwtToken);
  //dispatch
  store.dispatch({
    type: SET_USER,
    payload: decoded,
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/:shorturl" component={Url} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
