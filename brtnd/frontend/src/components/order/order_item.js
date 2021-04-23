import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { editOrder } from "../../util/orders_api_util";

const OrderItem = ({
  id,
  order: { _id, createdAt, headCount, location, notes, price, tier },
  setOrderCount,
}) => {
  const orderedDate = new Date(createdAt).toLocaleDateString();

  const handleTakeOrder = () => {
    editOrder(_id, { takenBy: id });
    setOrderCount(1);
  };

  return (
    <div className="order-item-box">
      <div className="order-display-detail">
        <span className="detail-label">Date: </span>
        {orderedDate}
      </div>
      <div className="order-display-detail">
        <span className="detail-label">Head count: </span>
        {headCount}
      </div>
      <div className="order-display-detail">
        <span className="detail-label">Location: </span>
        {location}
      </div>
      <div className="order-display-detail">
        <span className="detail-label">Drink tier: </span>
        {tier}
      </div>
      <div className="order-display-detail">
        <span className="detail-label">Notes: </span>
        {notes}
      </div>
      <div className="order-display-detail">
        <span className="detail-label">Pay: </span>${price}
      </div>
      <FontAwesomeIcon
        className="accept-order"
        icon={faUserCheck}
        onClick={handleTakeOrder}
      />
    </div>
  );
};

export default OrderItem;
