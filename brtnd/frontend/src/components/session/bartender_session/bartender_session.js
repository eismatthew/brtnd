import React, { useState, useEffect } from "react";
import BartenderSessionForm from "./bartender_session_form";

import "./bartender_session.css";

const BartenderSession = ({
  bartenderLogin,
  bartenderSignup,
  clearErrors,
  errors,
}) => {
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
          <BartenderSessionForm
            sessionType={sessionType}
            bartenderLogin={bartenderLogin}
            bartenderSignup={bartenderSignup}
            errors={errors}
          />
          <button
            type="button"
            className="session-change"
            onClick={() => setSessionType("Sign up")}
          >
            New User
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <BartenderSessionForm
            sessionType={sessionType}
            bartenderLogin={bartenderLogin}
            bartenderSignup={bartenderSignup}
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

export default BartenderSession;
