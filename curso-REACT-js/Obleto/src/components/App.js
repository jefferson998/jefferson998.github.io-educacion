import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="./badges" component={Badges} />
        <Route exact path="./badges/new" component={BadgeNew} />
      </Switch>
    </Router>
  );
}

export default App;
