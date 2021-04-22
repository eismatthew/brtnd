import React from "react";

const SignupFormInput = ({
  newUser: { firstName, lastName, password, email, password2 },
  handleChange,
}) => {
  return (
    <div className="signup-forms-main">
      <div className="signup-input-container">
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          className="signup-input"
          placeholder="first name"
          name="firstName"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="text"
          value={lastName}
          onChange={handleChange}
          className="signup-input"
          placeholder="last name"
          name="lastName"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="text"
          value={email}
          onChange={handleChange}
          className="signup-input"
          placeholder="email"
          name="email"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="signup-input"
          placeholder="password"
          name="password"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="password"
          value={password2}
          onChange={handleChange}
          className="signup-input"
          placeholder="confirm password"
          name="password2"
        />
      </div>
    </div>
  );
};

export default SignupFormInput;
