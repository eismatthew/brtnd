import React, { useState, useEffect } from "react";
import BartenderSessionForm from "./host_session_form";
import Button from 'react-bootstrap/Button';
import './bartender_session.css';

const BartenderSession = ({ userLogin, userSignup }) => {
  const [sessionType, setSessionType] = useState("");
  useEffect(() => {
    return () => {};
  },[]);

  console.log(sessionType);
  console.log(userLogin);
  console.log(userSignup);
  const display =
    sessionType === "" ? (
      <div className="enter-buttons">
        <Button onClick={() => setSessionType("Login")}>Login</Button>
        <Button onClick={() => setSessionType("Sign up")}>Sign Up</Button>
      </div>
    ) : (
      <div>
        <BartenderSessionForm
          sessionType={sessionType}
          userLogin={userLogin}
          userSignup={userSignup}
        />
      </div>
    );

  return <div className="choose-session-main">{display}</div>;
};

export default BartenderSession;
