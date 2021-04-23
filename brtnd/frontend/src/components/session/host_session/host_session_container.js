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
  hostDemoLogin: () => dispatch(userLogin({ email: "host@brtnd.com", password: "demohost" }))
});

export default connect(mSTP, mDTP)(HostSession);
