import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

import PrivateRoute from "./auth";

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/logout" component={Logout} />
        {/* <Route path="/newuser" component={User} /> */}
      </Switch>
    </Router>
  );
  export default Routes;