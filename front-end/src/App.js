import React from "react";

import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./ProtectedRoute.js";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/sign-in/sign-in.jsx";
import SignUp from "./pages/sign-up/sign-up.jsx";
import Feed from "./pages/feed/feed.jsx";
import Profile from "./pages/profile/profile.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/feed" component={Feed} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
