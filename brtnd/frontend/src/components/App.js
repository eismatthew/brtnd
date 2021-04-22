import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import Splash from "./splash/Splash";
import HostSessionContainer from "./login/host_session/host_session_container";


import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <AuthRoute exact path="/host-session" component={HostSessionContainer} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
