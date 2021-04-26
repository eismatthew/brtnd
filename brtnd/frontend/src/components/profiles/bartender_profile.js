import React from "react";
import { Link } from "react-router-dom";
import ActiveGigs from "../order/active_gigs";
import ReviewsContainer from "../reviews/reviews_container";
import "./bartender_profile.css";

const BartenderProfile = ({ id, currentUser: { firstName }, greetings }) => {
  return (
    <div className="bartender-profile-flex">
      <div className="bartender-profile-main">
        <div className="welcome">
          <div className="profile-top-box">
            <h1>
              {greetings[Math.floor(Math.random() * greetings.length)]},{" "}
              {firstName}
            </h1>
            <div className="find-orders">
              <Link to="/open-orders">
                <button className="profile-button">Browse open orders</button>
              </Link>
            </div>
          </div>
          <div className="profile-order-box">
            <h3>Your orders</h3>
            <div className="bartender-order-box">
              <p>Order index item(s) here</p>
              <ActiveGigs id={id} />
            </div>
          </div>
        </div>
      </div>
      <div className="review-box">
        <h3>Your reviews</h3>
        <ReviewsContainer />
      </div>
    </div>
  );
};

export default BartenderProfile;
