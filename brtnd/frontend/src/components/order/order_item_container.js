import { connect } from "react-redux";
import OrderForm from "./order_form";
import {
    fetchAllOrders,
    fetchUserOrder,
    fetchBartenderOrder,
    fetchOrder,
    createOrder,
    editOrder,
    clearOrderErrors
} from "../../../actions/orders_actions";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  // fetchAllOrders: () => dispatch(fetchAllOrders()),
  // fetchUserOrder: (userId) => dispatch(fetchUserOrder(userId)),
  // fetchBartenderOrder: (bartenderId) => dispatch(fetchBartenderOrder(bartenderId)),
  // fetchOrder: (orderId) => dispatch(fetchOrder(orderId)),
  createOrder: (order) => dispatch(createOrder(order)),
  editOrder: (orderId) => dispatch(editOrder(orderId)),
  clearOrderErrors: () => dispatch(clearOrderErrors()),
});

export default connect(mSTP, mDTP)(OrderForm);