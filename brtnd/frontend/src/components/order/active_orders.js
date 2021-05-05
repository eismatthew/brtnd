import React, { useState, useEffect } from "react";
import {
  editOrder,
  getOrderByUserId,
  deleteOrder,
} from "../../util/orders_api_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import "./active_orders.css";
import OrderBoxItem from "./order_box_item";
import { bartenderLookupById } from "../../util/session_api_util";

const ActiveOrders = ({ id, setOrderCount, order, setOrder }) => {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orderedBy, setOrderedBy] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getOrderByUserId(id)
      .then((order) => setOrder(order.data[0]))
      .then(() =>
        bartenderLookupById(order.takenBy)
          .then((user) => setOrderedBy(user.data))
          .catch(() => setOrderedBy({}))
      )
      .then(() => setOrderCount(1))
      .then(() => setLoading(false));
  }, [loading]);

  const handleEditOrder = (e) => {
    const { name, value } = e.target;
    setOrder((order) => ({
      ...order,
      [name]: value,
    }));
  };

  const handleOrderPatch = () => {
    editOrder(order._id, order);
    setEditMode(false);
  };

  const handleEditMode = () =>
    !editMode ? setEditMode(true) : setEditMode(false);

  const handleDeleteOrder = () => {
    deleteOrder(order._id);
    setOrderCount(0);
    setLoading(true);
    setOrder(undefined);
  };

  const render = () => {
    if (loading && order !== undefined) {
      return (
        <div>
          <Loader type="TailSpin" color="#d09a2d" height={80} width={80} />
        </div>
      );
    }
    if (!editMode && !loading && order !== undefined) {
      return (
        <div>
          <OrderBoxItem
            order={order}
            orderedBy={orderedBy}
            setDisabled={setDisabled}
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="edit-icon"
            onClick={handleEditMode}
          />
        </div>
      );
    } else if (order === undefined) {
      return <div>No Order</div>;
    } else {
      return (
        <div>
          <div>
            <input
              className="edit-order"
              value={order.headCount}
              name="headCount"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-order"
              value={order.location}
              name="location"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-order"
              value={order.tier}
              name="tier"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-order"
              value={order.notes}
              name="notes"
              onChange={handleEditOrder}
            />
          </div>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete-icon"
            onClick={handleDeleteOrder}
          />
          <FontAwesomeIcon
            icon={faSave}
            className="save-icon"
            onClick={handleOrderPatch}
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

export default ActiveOrders;
