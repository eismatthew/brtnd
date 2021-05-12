import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./order_form.css";

const OrderForm = ({ createOrder }) => {
  const [orderedBy, setOrderedBy] = useState(null);
  const [newOrder, setNewOrder] = useState({
    headCount: 0,
    tier: "",
    location: "",
    notes: "",
    price: 0,
    orderedBy: orderedBy,
    takenBy: "",
  });

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.jwtToken,
      },
    };
    axios
      .get("/api/users/current/user", config)
      .then((res) => setOrderedBy(res.data.id))
      .then(() => setNewOrder((order) => ({ ...order, orderedBy: orderedBy })));
  }, [orderedBy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newOrder);
    createOrder(newOrder);
    setNewOrder({
      headCount: "",
      tier: "",
      location: "",
      notes: "",
      price: 0,
      orderedBy: orderedBy,
      takenBy: "",
    });
    document.location = "/profile";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((order) => ({
      ...order,
      [name]: value,
    }));
  };

  return (
    <div className="order-form-parent-container">
      <h3 className="logo">brtnd</h3>
      <div className="order-form-space">
        <div className="order-form-box">
          <div className="order-form-main">
            <div className="order-header">
              <h1>Order a bartender</h1>
            </div>

            <form className="order-form" onSubmit={handleSubmit}>
              <div className="order-form-headcount">
                <label className="select">Select your headcount</label>
                <div className="quantity">
                  <input
                    value={newOrder.headCount}
                    type="number"
                    id="quantity"
                    name="headCount"
                    min={1}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <label className="select">Select a tier package</label>
              <div className="radio-tier">
                <input
                  type="radio"
                  id="tier-one"
                  name="tier"
                  value="Tier one"
                  checked={newOrder.tier === "Tier one"}
                  onChange={handleChange}
                />
                <label htmlFor="tier-one">Tier one</label>
                <input
                  type="radio"
                  id="tier-two"
                  name="tier"
                  value="Tier two"
                  checked={newOrder.tier === "Tier two"}
                  onChange={handleChange}
                />
                <label htmlFor="tier-two">Tier two</label>
                <input
                  type="radio"
                  id="tier-three"
                  name="tier"
                  value="Tier three"
                  checked={newOrder.tier === "Tier three"}
                  onChange={handleChange}
                />
                <label htmlFor="tier-three">Tier three</label>
              </div>

              <label className="select">Tell us about your event</label>
              <input
                className="location"
                type="text"
                id="location"
                name="location"
                value={newOrder.location}
                placeholder="Location"
                onChange={handleChange}
              />
              <textarea
                className="order-notes"
                rows="4"
                cols="50"
                id="notes"
                name="notes"
                placeholder="Any notes? Include date"
                value={newOrder.notes}
                onChange={handleChange}
              />
              <input className="sub" type="submit" value="Place Order" />
            </form>
          </div>
          <Link to="/profile">
            <button className="to-profile">Back to profile</button>
          </Link>
        </div>
      </div>
      <div className="order-tips">
        <h1>Ordering Information</h1>
        <p>Headcount refers to the number of people drinking at your event. The price floor of your order is $30/head.</p>
        <p>Teir package referes to the quality of drinks at your event. Tier one carries no additional price and will get you drinks similar to the calibur of Corona Beer.
          Teir two comes at a $500 premium, getting you bottles similar to Black Label, Smirnoff, St. George, even Burning Chair.
          Teir three is for premium events, adding a $1000 premium, earning you top-shelf bottles with the highest level of bartending on demand. Think the Pappy Van Winkle in the best old fashioned you've ever had.
        </p>
        <p>Be as specific as possible with your location.</p>
        <p>Finally, utilize the notes section to communicate any specific requests, including scheduling an event in advance.</p>
      </div>
    </div>
  );
};

export default OrderForm;
