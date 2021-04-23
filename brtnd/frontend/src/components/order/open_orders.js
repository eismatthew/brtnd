import React, { useState, useEffect } from "react";
import OrderItem from "./order_item";
import Loader from "react-loader-spinner";

const OpenOrders = ({ fetchAllOrders, orders, id }) => {
  const [fetchedOrders, setFetchedOrders] = useState(false);
  const [orderCount, setOrderCount] = useState(0)
  useEffect(() => {
    fetchAllOrders().then(() => setFetchedOrders(true)).then(()=>setOrderCount(0));
    return () => {
      setFetchedOrders(false)
    };
  }, [orderCount]);

console.log(orderCount)

  const render = () => {
    if (fetchedOrders) {
      return orders.map((order, i) => {
        if (!order.takenBy) {
          return <OrderItem key={i} order={order} id={id} setOrderCount={setOrderCount} />;
        }
      });
    } else {
      return (
        <div>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
  };
  return (
    <div>
      <div>Orders</div>
      {render()}
    </div>
  );
};

export default OpenOrders;
