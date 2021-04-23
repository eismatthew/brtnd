import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, Redirect, useHistory} from "react-router-dom";
import "./order_form.css";
import { withRouter} from 'react-router'

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
  console.log(newOrder);
  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.jwtToken,
      },
    };
    axios
      .get("/api/users/current", config)
      .then((res) => setOrderedBy(res.data.id))
      .then(() => setNewOrder((order) => ({ ...order, orderedBy: orderedBy })));
  }, [orderedBy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { match, location, history } = props;
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
    })
    // props.history.push("/profile")
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
      <div clasName="order-form-space">
      <div className="order-form-box">
      <div className="order-form-main">
        <div className="order-header">
          <h1>Order a bartender</h1>
        </div>

        <form className="order-form" onSubmit={handleSubmit} >
          <div className="order-form-headcount">
            <label className="select">Select your headcount</label>
            <div className="quantity">
              <input
                value={newOrder.headCount}
                type="number"
                id="quantity"
                name="headCount"
                min={1}
                max={20}
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
            placeholder="Any notes?"
            value={newOrder.notes}
            onChange={handleChange}
          />
          <input className="sub" type="submit" value="Place Order" />
        </form>
      </div>
          <Link to="/profile"><button className="to-profile">Back to profile</button></Link>
      </div>
      </div>
    </div>
  );
};

export default OrderForm;
