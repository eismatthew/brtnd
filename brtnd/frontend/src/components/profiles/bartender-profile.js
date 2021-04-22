import React, { useState, useEffect } from "react";
import './bartender-profile.css';

const BartenderProfile = ({}) => {

  return (
    <div className="bartender-profile-main">
      <div className="welcome">
        <h1>Welcome, name</h1>

        <div className="find-orders">
          <button>Browse open orders</button>
        </div>
        <h3>Your orders</h3>
        <div className="bartender-order-box">
          <p>Order index item(s) here</p>
        </div>
      </div>
    </div>

  )

}