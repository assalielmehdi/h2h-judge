import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Create from "./Create";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
