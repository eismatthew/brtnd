import React, { useState, useEffect } from "react";
import "./bartender_profile.css";

const BartenderProfile = ({ id, currentUser: { firstName } }) => {
  return (
    <div className="bartender-profile-flex">
    <div className="bartender-profile-main">
      <div className="welcome">
        <div className="profile-top-box">
          <h1>Welcome, {firstName}</h1>

          <div className="find-orders">
            <button className="profile-button">Browse open orders</button>
          </div>
        </div>
        <div className="profile-order-box">
        <h3>Your orders</h3>
        <div className="bartender-order-box">
          <p>Order index item(s) here</p>
        </div>
        </div>
      </div>
    </div>
    <div className="review-box">
        <h3>Your reviews</h3>
    </div>
    </div>
  );
};

export default BartenderProfile;
