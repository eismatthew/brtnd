import React, { useState, useEffect } from "react";
import "./host_profile";

const HostProfile = ({ id, currentUser: { firstName } }) => {
  return (
    <div className="host-profile-flex">
      <div className="host-profile-main">
        <div className="welcome">
          <div className="profile-top-box">
            <h1>Welcome, {firstName}</h1>

            <div className="start-order">
              <button className="profile-button">Start an order</button>
            </div>
          </div>
          <div className="profile-order-box">
          <h3>Your orders</h3>
          <div className="bartender-order-box">
            <p>Active order here</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
