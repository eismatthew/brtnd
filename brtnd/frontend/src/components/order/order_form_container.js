import { connect } from "react-redux";
import OrderForm from "./order_form";
import { createOrder } from "../../actions/orders_actions";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  createOrder: (order) => dispatch(createOrder(order)),
});

export default connect(null, mDTP)(OrderForm);
