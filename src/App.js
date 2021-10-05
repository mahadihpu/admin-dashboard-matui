import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import EditUser from './Pages/Users/EditUser';
import Users from './Pages/Users/Users';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:userId">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;