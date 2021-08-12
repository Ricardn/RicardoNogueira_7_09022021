import React from "react";

import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/sign-in/sign-in.jsx";
import SignUp from "./pages/sign-up/sign-up.jsx";
import Feed from './pages/feed/feed.jsx';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}


export default App;
