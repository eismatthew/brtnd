import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import Splash from "./splash/Splash";

import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
