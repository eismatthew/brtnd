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
    <div>
      <div>{orderedDate}</div>
      <div>{headCount}</div>
      <div>{location}</div>
      <div>{tier}</div>
      <div>{notes}</div>
      <div>{price}</div>
      <FontAwesomeIcon icon={faUserCheck} onClick={handleTakeOrder} />
    </div>
  );
};

export default OrderItem;
