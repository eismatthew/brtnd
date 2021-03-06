import React, { useState, useEffect } from "react";
import HostSessionForm from "./host_session_form";

import "./host_session.css";

const HostSession = ({ errors, userLogin, userSignup, clearErrors, hostDemoLogin }) => {
  const [sessionType, setSessionType] = useState("");

  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, [sessionType]);

  const display = () => {
    if (sessionType === "") {
      return (
        <div className="enter-buttons">
          <button onClick={() => setSessionType("Login")}>Login</button>
          <button onClick={() => setSessionType("Sign up")}>Sign Up</button>
        </div>
      );
    }

    if (sessionType === "Login") {
      return (
        <div>
          <HostSessionForm
            sessionType={sessionType}
            userLogin={userLogin}
            userSignup={userSignup}
            errors={errors}
          />
          <button
            type="button"
            className="session-change"
            onClick={() => setSessionType("Sign up")}
          >
            New User
          </button>
          <button
            type="button"
            className="demo-button"
            onClick={() => hostDemoLogin()}
            >Demo login</button>
        </div>
      );
    } else {
      return (
        <div>
          <HostSessionForm
            sessionType={sessionType}
            userLogin={userLogin}
            userSignup={userSignup}
            errors={errors}
          />
          <button
            type="button"
            className="session-change"
            onClick={() => setSessionType("Login")}
          >
            Returning User
          </button>
        </div>
      );
    }
  };
  return <div className="choose-session-main">{display()}</div>;
};

export default HostSession;
