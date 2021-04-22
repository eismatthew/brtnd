import { connect } from "react-redux";
import {
  userLogin,
  userSignup,
  clearErrors,
} from "../../../actions/session_actions";
import HostSession from "./host_session";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  userLogin: (user) => dispatch(userLogin(user)),
  userSignup: (user) => dispatch(userSignup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(HostSession);
