import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = (props) => {
  return (
    <div className ="user-profile-main">
      <div className="welcome">
        <h1>Welcome, name</h1>
      </div>
      <div className="user-detail-box">
        <div className="find-orders">
          <button>Make an order</button>
        </div>
        <div className="user-order-box">
          <p>Order index item(s) here</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;