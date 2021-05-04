import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActiveGigs from "../order/active_gigs";
import ReviewsContainer from "../reviews/reviews_container";
import "./bartender_profile.css";

const BartenderProfile = ({ id, currentUser: { firstName }, greetings }) => {
  const [greeting, setGreeting] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [linkTo, setLinkTo] = useState(null);

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  const handleOrder = () => {
    if (disabled) {
      setErrorMessage("Only one order can be active at a time.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } else {
      setLinkTo("/open-orders");
    }
  };

  return (
    <div className="bartender-profile-flex">
      <div className="bartender-profile-main">
        <div className="welcome">
          <div className="profile-top-box">
            <h1>
              {greeting}, {firstName}
            </h1>
            <div className="find-orders">
              {errorMessage}
              <Link to={linkTo}>
                <button className="profile-button" onClick={handleOrder}>
                  Browse open orders
                </button>
              </Link>
            </div>
          </div>
          <div className="profile-order-box">
            <h3>Your orders</h3>
            <div className="bartender-order-box">
              <p>Order index item(s) here</p>
              <ActiveGigs id={id} setDisabled={setDisabled} />
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
