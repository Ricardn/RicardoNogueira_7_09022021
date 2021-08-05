import React from "react";

import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/sign-in/sign-in.jsx";
import SignUp from "./pages/sign-up/sign-up.jsx";

import NavBar from "./components/topbar/Topbar.jsx";
import Feed from "./pages/feed/feed.jsx";


import { HashRouter,Route,  Switch, } from "react-router-dom";



function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </div>
    </HashRouter>
  );
}


//<Router>
//     <Switch>
//        <Route path="/" extact component={Home}>
//        </Route>
//        <Route path="/signin" component={SignIn}>
//        </Route>
//        <Route path="/signup" component={SignUp}>
//       </Route>
//      </Switch>
//    </Router>



export default App;
