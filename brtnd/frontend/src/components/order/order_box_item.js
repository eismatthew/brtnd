import React from "react";

const OrderBoxItem = ({
  order: { headCount, location, tier, notes, price },
  orderedBy: { firstName, lastName },
  handleEditMode,
}) => {
  console.log(firstName);
  if (!firstName || firstName === undefined || !headCount) {
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
        </div>
      </div>
    );
  }
};

export default OrderBoxItem;
