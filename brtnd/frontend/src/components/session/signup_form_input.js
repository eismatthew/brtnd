import React from "react";

const SignupFormInput = ({
  newUser: { firstName, lastName, password, email },
  handleChange, password2
}) => {
  return (
    <div className="signup-forms-main">
      <div className="signup-input-container">
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          className="signup-input"
          placeholder="First Name"
          name="firstName"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="text"
          value={lastName}
          onChange={handleChange}
          className="signup-input"
          placeholder="Last Name"
          name="lastName"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="text"
          value={email}
          onChange={handleChange}
          className="signup-input"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="signup-input"
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="signup-input-container">
        <input
          type="password"
          value={password2}
          onChange={handleChange}
          className="signup-input"
          placeholder="Password"
          name="password"
        />
      </div>
    </div>
  );
};

export default SignupFormInput;
