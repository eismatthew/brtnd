import React from "react";

const LoginFormInput = ({ user: { email, password }, handleChange }) => {
  return (
    <div className="login-forms-main">
      <div className="login-input-container">
        <input
          type="text"
          value={email}
          className="login-input"
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
      </div>
      <div className="login-input-container">
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="login-input"
          placeholder="password"
          name="password"
        />
      </div>
    </div>
  );
};
export default LoginFormInput;
