import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Splash from "./splash/Splash";
import HostSessionContainer from "../components/session/host_session/host_session_container";
import BartenderSessionContainer from '../components/session/bartender_session/bartender_session_container';

import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <AuthRoute exact path="/host-session" component={HostSessionContainer} />
        <AuthRoute exact path="/bartender-session" component={BartenderSessionContainer} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
