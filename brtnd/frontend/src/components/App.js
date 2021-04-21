import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import Splash from "./splash/Splash";
import UserProfile from "./profile/UserProfile";
import BartenderProfile from "./profile/BartenderProfile";

import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/user-profile" component={UserProfile} />
        <AuthRoute exact path="/bartender-profile" component={BartenderProfile} />
      </Switch>
    </div>
  );
};

export default App;
