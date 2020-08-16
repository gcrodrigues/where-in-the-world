import React from "react";
import Details from "./pages/Details";
import Flags from "./pages/Flags";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Flags} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
