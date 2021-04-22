import { connect } from "react-redux";
import {
  bartenderSignup,
  bartenderLogin,
  clearErrors,
} from "../../../actions/session_actions";
import BartenderSession from "./bartender_session";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  bartenderLogin: (user) => dispatch(bartenderLogin(user)),
  bartenderSignup: (user) => dispatch(bartenderSignup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(BartenderSession);
