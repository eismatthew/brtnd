import React from "react";
import ActiveOrders from "../order/active_orders";
import "./host_profile";
import {Link} from "react-router-dom";

const HostProfile = ({ id, currentUser: { firstName }, greetings }) => {
  return (
    <div className="host-profile-flex">
      <div className="host-profile-main">
        <div className="welcome">
          <div className="profile-top-box">
            <h1>
              {greetings[Math.floor(Math.random() * greetings.length)]},{" "}
              {firstName}
            </h1>
            <div className="start-order">
              <Link to="/order-form"><button className="profile-button">Start an order</button></Link>
            </div>
          </div>
          <div className="profile-order-box">
            <h3>Your order</h3>
            <div className="bartender-order-box">
              <p>Active order</p>
              <ActiveOrders id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfile;
