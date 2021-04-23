import { connect } from "react-redux";
import { fetchAllOrders } from "../../actions/orders_actions";
import OpenOrders from "./open_orders";

const mSTP = ({
  entities: { orders },
  session: {
    user: { id },
  },
}) => ({ orders, id });

const mDTP = (dispatch) => ({
  fetchAllOrders: () => dispatch(fetchAllOrders()),
});

export default connect(mSTP, mDTP)(OpenOrders);
