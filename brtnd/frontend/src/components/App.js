import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import Splash from "./splash/splash";
import HostSessionContainer from "../components/session/host_session/host_session_container";
import BartenderSessionContainer from '../components/session/bartender_session/bartender_session_container';
import ProfileContainer from '../components/profiles/profile_container';

import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <AuthRoute path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/host-session" component={HostSessionContainer} />
        <AuthRoute exact path="/bartender-session" component={BartenderSessionContainer} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
