import React, { useState, useEffect } from "react";
import OrderBoxItem from "./order_box_item";
import { editOrder, getOrderByBartenderId } from "../../util/orders_api_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "./active_orders.css";
import { userLookupById } from "../../util/session_api_util";

const ActiveGigs = ({ id, setDisabled, setOrderCount, orderCount }) => {
  const [editMode, setEditMode] = useState(false);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [orderedBy, setOrderedBy] = useState({});
  // const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    getOrderByBartenderId(id)
      .then((order) => setOrder(order.data[0]))
      .then(() =>
        userLookupById(order.orderedBy)
          .then((user) => setOrderedBy(user.data))
          .catch(() => setOrderedBy({}))
      )
      .then(() => setLoading(false))
      .then(() => setOrderCount(1));
  }, [orderCount]);

  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);

  const handleEditMode = () =>
    !editMode ? setEditMode(true) : setEditMode(false);

  const handleDeleteOrder = () => {
    editOrder(order._id, { takenBy: null });
    setOrder({});
    setOrderedBy({});
    setLoading(true);
    setOrderCount(0);
  };

  if (order === undefined) {
    setOrder({});
    setOrderedBy({});
  }

  const render = () => {
    if (loading) {
      return (
        <div>
          <Loader type="TailSpin" color="#d09a2d" height={80} width={80} />
        </div>
      );
    }

    if (!editMode && !loading) {
      return (
        <div>
          <OrderBoxItem
            order={order}
            orderedBy={orderedBy}
            handleEditMode={handleEditMode}
            setDisabled={setDisabled}
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="edit-icon"
            onClick={handleEditMode}
          />
        </div>
      );
    } else {
      return (
        <div>
          <OrderBoxItem
            order={order}
            orderedBy={orderedBy}
            setDisabled={setDisabled}
          />
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
