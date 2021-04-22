import React, { useState, useEffect } from "react";
import HostSessionForm from "./host_session_form";

import "./host_session.css";

const HostSession = ({ errors, userLogin, userSignup, clearErrors }) => {
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
            clearErrors={clearErrors}
          />
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setSessionType("Sign up")}
          >
            New User
          </button>
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
            clearErrors={clearErrors}
          />
          <button
            type="button"
            className="btn btn-dark"
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
