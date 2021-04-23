import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_NEW_ORDER,
  RECEIVE_EDITED_ORDER,
} from "../../../actions/orders_actions";

const OrdersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders.data;
    case RECEIVE_ORDER:
      return { ...newState, ...action.order.data };
    case RECEIVE_NEW_ORDER:
      return action.order.data
    case RECEIVE_EDITED_ORDER:
      return (newState.action.order.data._id = action.order.data);
    default:
      return state;
  }
};

export default OrdersReducer;
