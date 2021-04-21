import * as ordersUtil from "../util/orders_api_util";

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_NEW_ORDER = "RECEIVE_NEW_ORDER";
export const RECEIVE_EDITED_ORDER = "RECEIVE_EDITED_ORDER";

export const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders,
});

export const receiveOrder = (order) => ({
  type: RECEIVER_ORDER,
  order,
});

export const receiveNewOrder = (order) => ({
  type: RECEIVE_NEW_ORDER,
  order,
});
export const receiveEditedOrder = (order) => ({
  type: RECEIVE_EDITED_ORDER,
  order,
});
export const fetchAllOrders = () => (dispatch) =>
  ordersUtil
    .getAllOrders()
    .then((orders) =>
      dispatch(receiveOrders(orders)).catch((err) => console.log(err))
    );

export const fetchUserOrder = (userId) => (dispatch) =>
  ordersUtil
    .getOrderByUserId(userId)
    .then((order) =>
      dispatch(receiveOrder(order)).catch((err) => console.log(err))
    );

export const fetchBartenderOrder = (bartenderId) => (dispatch) =>
  ordersUtil
    .getOrderByBartenderId(bartenderId)
    .then((order) =>
      dispatch(receiveOrder(order)).catch((err) => console.log(err))
    );

export const fetchOrder = (orderId) => (dispatch) =>
  ordersUtil
    .getOrderByOrderId(orderId)
    .then((order) =>
      dispatch(receiveOrder(order)).catch((err) => console.log(err))
    );

export const createOrder = (order) => (dispatch) =>
  ordersUtil
    .createOrder(order)
    .then((order) =>
      dispatch(receiveNewOrder(order)).catch((err) => console.log(err))
    );

export const editOrder = (orderId) => (dispatch) =>
  ordersUtril
    .editOrder(orderId)
    .then((order) =>
      dispatch(receiveEditedOrder(order)).catch((err) => console.log(err))
    );