import axios from "axios";

export const getAllOrders = () => axios.get("/api/orders");

export const getOrderByUserId = (userId) => axios.get(`/api/orders/${userId}`);

export const getOrderByBartenderId = (bartenderId) =>
  axios.get(`api/orders/${bartenderId}`);

export const getOrderByOrderId = (orderId) =>
  axios.get(`/api/orders/${orderId}`);

export const deleteOrder = (orderId) => axios.delete(`api/orders/${orderId}`);

export const editOrder = (orderId, order) => axios.patch(`/api/orders/${orderId}`, order);

export const createOrder = (order) => axios.post("/api/orders/", order);
