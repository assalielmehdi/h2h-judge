import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Create from "./Create";

class Routes extends React.Component {
  render = () => (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login theme={this.props.theme} />
        </Route>

        <Route exact path="/create">
          <Create theme={this.props.theme} />
        </Route>

        <Route>
          <NotFound theme={this.props.theme} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
