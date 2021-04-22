import React, { useState, useEffect } from "react";
import './host-profile.css';

const HostProfile = ({ }) => {

  return (
    <div className="host-profile-main">
      <div className="welcome">
        <h1>Welcome, name</h1>
        <div className="find-orders">
          <button>Start an order</button>
        </div>
        <h3>Your orders</h3>
        <div className="bartender-order-box">
          <p>Order index item(s) here</p>
        </div>
      </div>
    </div>

  )

}

export default HostProfile;