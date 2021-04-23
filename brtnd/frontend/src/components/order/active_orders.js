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

const ActiveOrders = ({ id, setOrderCount }) => {
  const [editMode, setEditMode] = useState(false);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrderByUserId(id)
      .then((order) => setOrder(order.data[0]))
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
  };

  const render = () => {
    if (loading && order !== undefined) {
      return (
        <div>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }

    if (!editMode && !loading && order !== undefined) {
      return (
        <div>
          <div>{order.headCount}</div>
          <div>{order.location}</div>
          <div>{order.tier}</div>
          <div>{order.notes}</div>
          <div>{order.price}</div>
          <div>{order.takenBy}</div>
          <FontAwesomeIcon icon={faEllipsisH} onClick={handleEditMode} />
        </div>
      );
    } else if (order === undefined) {
      return <div>No Order</div>;
    } else {
      return (
        <div>
          <div>
            <input
              className="edit-headcount"
              value={order.headCount}
              name="headCount"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-location"
              value={order.location}
              name="location"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-tier"
              value={order.tier}
              name="tier"
              onChange={handleEditOrder}
            />
          </div>
          <div>
            <input
              className="edit-notes"
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
          <FontAwesomeIcon icon={faSave} onClick={handleOrderPatch} />
          <FontAwesomeIcon icon={faEllipsisH} onClick={handleEditMode} />
        </div>
      );
    }
  };

  return <div>{render()}</div>;
};

export default ActiveOrders;
