import React from "react";

const LoginFormInput = ({ user: { email, password }, handleChange }) => {
  return (
    <div className="login-forms-main">
      <div className="login-input-container">
        <input
          className="form-control"
          type="text"
          value={email}
          className="login-input"
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="login-input-container">
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={handleChange}
          className="login-input"
          placeholder="Password"
          name="password"
        />
      </div>
    </div>
  );
};
export default LoginFormInput;
