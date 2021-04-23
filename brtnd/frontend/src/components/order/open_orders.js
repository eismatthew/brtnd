import React, { useState, useEffect } from "react";
import OrderItem from "./order_item";
import Loader from "react-loader-spinner";
import "./open_orders.css";
import {Link} from 'react-router-dom';

const OpenOrders = ({ fetchAllOrders, orders, id }) => {
  const [fetchedOrders, setFetchedOrders] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
  useEffect(() => {
    fetchAllOrders()
      .then(() => setFetchedOrders(true))
      .then(() => setOrderCount(0));
    return () => {
      setFetchedOrders(false);
    };
  }, [orderCount]);

  console.log(orderCount);

  const render = () => {
    if (fetchedOrders) {
      return orders.map((order, i) => {
        if (!order.takenBy) {
          return (
            <OrderItem
              key={i}
              order={order}
              id={id}
              setOrderCount={setOrderCount}
            />
          );
        }
      });
    } else {
      return (
        <div>
          <Loader type="TailSpin" color="#d09a2d" height={80} width={80} />
        </div>
      );
    }
  };
  return (
    <div className="open-orders-main">
      <h3 className="logo">brtnd</h3>
      <Link to="/profile"><button className="back-to-profile">Back to profile</button></Link>
      <div className="open-orders-box">
      <div className="open-orders-header">Open orders</div>
      {render()}
    </div>
    </div>
  );
};

export default OpenOrders;
