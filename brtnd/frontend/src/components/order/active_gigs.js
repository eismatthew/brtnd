import React, { useState, useEffect } from "react";
import OrderBoxItem from "./order_box_item";
import { editOrder, getOrderByBartenderId } from "../../util/orders_api_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "./active_orders.css";
import { userLookupById } from "../../util/session_api_util";

const ActiveGigs = ({ id }) => {
  const [editMode, setEditMode] = useState(false);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderedBy, setOrderedBy] = useState({});

  useEffect(() => {
    getOrderByBartenderId(id)
      .then((order) => setOrder(order.data[0]))
      .then(() =>
        userLookupById(order.orderedBy)
          .then((user) => setOrderedBy(user.data))
          .catch(() => setOrderedBy({ firstName: "", lastName: "" }))
      )
      .then(() => setLoading(false));
  }, [loading]);

  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);

  const handleEditMode = () =>
    !editMode ? setEditMode(true) : setEditMode(false);

  const handleDeleteOrder = () => {
    editOrder(order._id, { takenBy: null });
    setLoading(true);
  };

  const render = () => {
    if (loading && order !== []) {
      return (
        <div>
          <Loader type="TailSpin" color="#d09a2d" height={80} width={80} />
        </div>
      );
    }

    if (!editMode && !loading && order !== []) {
      return (
        <div className="order-display">
          <OrderBoxItem order={order} orderedBy={orderedBy} />
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="edit-icon"
            onClick={handleEditMode}
          />
        </div>
      );
    } else if (order === []) {
      return <div>No Orders</div>;
    } else {
      return (
        <div className="order-display">
          <OrderBoxItem order={order} orderedBy={orderedBy} />
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

  return <div>{render()}</div>;
};

export default ActiveGigs;
