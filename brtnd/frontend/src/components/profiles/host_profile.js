import React, { useState, useEffect } from "react";
import ActiveOrders from "../order/active_orders";
import "./host_profile";
import { Link } from "react-router-dom";

const HostProfile = ({ id, currentUser: { firstName }, greetings }) => {
  const [orderCount, setOrderCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [orderButtonText, setOrderButtonText] = useState("Start an order");
  const [greeting, setGreeting] = useState("");
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [linkTo, setLinkTo] = useState("");

  useEffect(() => {
    if (orderCount > 0) {
      setOrderButtonText("Active Order Below");
      setLinkTo(null);
    } else {
      setOrderButtonText("Start an order");
      setLinkTo("/order-form");
    }
    order !== undefined ? setDisabled(true) : setDisabled(false);
    return () => {};
  }, [order]);

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
      setLinkTo("/order-form");
    }
  };
  return (
    <div className="host-profile-flex">
      <div className="host-profile-main">
        <div className="welcome">
          <div className="profile-top-box">
            <h1>
              {greeting}, {firstName}
            </h1>
            <div className="start-order">
              {errorMessage}
              <Link to={linkTo}>
                <button className="profile-button" onClick={handleOrder}>
                  {orderButtonText}
                </button>
              </Link>
            </div>
          </div>
          <div className="profile-order-box">
            <h3>Your order</h3>
            <div className="bartender-order-box">
              <p>Active order</p>
              <ActiveOrders
                id={id}
                setOrderCount={setOrderCount}
                setDisabled={setDisabled}
                order={order}
                setOrder={setOrder}
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/bartender-review-form">
        <button className="review-button">Review a bartender</button>
      </Link>
    </div>
  );
};

export default HostProfile;
