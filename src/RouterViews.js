import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Login from './views/login/Login';
import Home from './views/home/Home';
import Locker from './views/locker/Locker';

function RouterViews() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/locker">
        <Locker />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default RouterViews;