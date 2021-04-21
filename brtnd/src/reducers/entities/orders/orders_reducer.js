import {
  // rename
  // syntax for bartender/user
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_NEW_USER_ORDER,
  RECEIVE_ACCEPT_BARTENDER_ORDER
} from '../actions/order_actions';

const OrdersReducer = (state = { all: {}, user: {}, new: undefined, bartender: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ORDERS:
      newState.all = action.orders.data;
      return newState;
    case RECEIVE_ORDER:
      newState.user = action.orders.data; //check this out on wed -> see how actions are used
      return newState;
    case RECEIVE_NEW_USER_ORDER:
      newState.new = action.orders.data;
      return newState;
    case RECEIVE_ACCEPT_BARTENDER_ORDER:
      newState.bartender = action.orders.data; //this works for one order, will it work for all? newState
      return newState;
    default:
      return state;
  }
};

export default OrdersReducer;