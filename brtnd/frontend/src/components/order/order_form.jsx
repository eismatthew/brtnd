import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import OrderErrors from "./order_errors";
import OrderForm from "./order_form_container"
import './order.css'
import order from '../../../../validation/order';

const OrderForm = ({
  createOrder,
  clearOrderErrors,
  editOrder,
  errors
}) => {

  const [newOrder, setNewOrder] = useState({
    headCount: "",
    tier: "",
    location: "",
    notes: "",
    price: 0,
    orderedBy: "",
    takenBy: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewOrder({
      headCount: "",
      tier: "",
      location: "",
      notes: "",
      price: 0,
      orderedBy: "",
      takenBy: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewOrder((order) => ({
      ...order,
      [name]: value,
    }));
  }

  return (

    <div className='order-form-parent-container'>

      <div className='order-form-main'>
        <div class="order-header">
          <h1>Order a bartender</h1>
        </div>
        
        <form class="order-form">
          <div class="order-form-headcount">
            <label class="select">Select your headcount</label>
            <div class="quantity">
              <input type="number" id="quantity" name="quantity" min="1" max="20" onChange={handleChange} />
            </div>
          </div>
          <label class="select">Select a tier package</label>
          <div class="radio-tier">
            <input type="radio" id="tier-one" name="tier" value="Tier one" checked={newOrder.tier === "Tier one"} onChange={handleChange} />
            <label for="tier-one">Tier one</label>
            <input type="radio" id="tier-two" name="tier" value="Tier two" checked={newOrder.tier === "Tier two"} onChange={handleChange} />
            <label for="tier-two">Tier two</label>
            <input type="radio" id="tier-three" name="tier" value="Tier three" checked={newOrder.tier === "Tier three"} onChange={handleChange} />
            <label for="tier-three">Tier three</label>
          </div>

          <label class="select">Tell us about your event</label>
          <input class="location" type="text" id="location" name="location" placeholder="Location" onChange={handleChange} />
          <textarea class="order-notes" rows="4" cols="50" id="notes" name="notes" placeholder="Any notes?" onChange={handleChange}></textarea>
          <input class="sub" type="submit" value="Place Order" onChange={handleSubmit} />
        </form>
      </div>
    </div>

  );


};

export default OrderForm;



//convert order form to order item 