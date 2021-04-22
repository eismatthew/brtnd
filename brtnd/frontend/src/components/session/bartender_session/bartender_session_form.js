import React, { useState } from "react";
import LoginFormInput from "../login_form_input";
import SignupFormInput from "../signup_form_input";
import SessionErrors from "../sessions_errors";
import "./bartender_session.css";

const BartenderSessionForm = ({
  sessionType,
  bartenderLogin,
  bartenderSignup,
  errors,
}) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    sessionType === "Login"
      ? setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }))
      : setNewUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionType === "Login" ? bartenderLogin(user) : bartenderSignup(newUser);

    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const formInputs =
    sessionType === "Login" ? (
      <LoginFormInput user={user} handleChange={handleChange} />
    ) : (
      <SignupFormInput newUser={newUser} handleChange={handleChange} />
    );
  return (
    <div className="session-form-container">
      <form onSubmit={handleSubmit} className="session-form-box">
        <div className="session-form">
          {formInputs}
          <input className="session-submit" type="submit" value={sessionType} />
        </div>
      </form>
      <SessionErrors errors={errors} />
    </div>
  );
};

export default BartenderSessionForm;
