import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Create from "./Create";
import Matchups from "./Matchups";
import Matchup from "./Matchup";

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

        <Route exact path="/matchups">
          <Matchups theme={this.props.theme} />
        </Route>

        <Route
          exact
          path="/matchup/:id"
          children={<Matchup theme={this.props.theme} />}
        />

        <Route>
          <NotFound theme={this.props.theme} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
