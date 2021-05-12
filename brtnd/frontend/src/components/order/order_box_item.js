import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const OrderBoxItem = ({
  setDisabled,
  order: { headCount, location, tier, notes, price },
  orderedBy: { firstName, lastName },
  handleDeleteOrder,
}) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if ((!firstName || firstName === undefined) && !headCount) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    return () => {};
  });

  const handleEditMode = () =>
    !editMode ? setEditMode(true) : setEditMode(false);

  const editModeHandler = () => {
    if (!editMode) {
      return (
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="edit-icon"
          onClick={handleEditMode}
        />
      );
    } else {
      return (
        <div>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={handleDeleteOrder}
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="edit-icon"
            onClick={handleEditMode}
          />
        </div>
      );
    }
  };

  if ((!firstName || firstName === undefined) && !headCount) {
    return <div>No Orders</div>;
  } else {
    return (
      <div>
        <div className="order-display">
          <div className="order-display-detail">
            <span className="detail-label">Head count: </span>
            {headCount}
          </div>
          <div className="order-display-detail">
            <span className="detail-label">Location: </span> {location}
          </div>
          <div className="order-display-detail">
            <span className="detail-label">Drink tier: </span> {tier}
          </div>
          <div className="order-display-detail">
            <span className="detail-label">Notes: </span> {notes}
          </div>
          <div className="order-display-detail">
            <span className="detail-label">Price: </span> ${price}
          </div>
          <div className="order-display-detail">{`${firstName} ${lastName}`}</div>
          {editModeHandler()}
        </div>
      </div>
    );
  }
};

export default OrderBoxItem;
