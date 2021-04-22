import { connect } from "react-redux";
import { bartenderSignup, bartenderLogin } from "../../actions/session_actions";
import BartenderSession from "./bartender_session";

const mSTP = (errors) => ({ errors });

const mDTP = (dispatch) => ({
  userLogin: (user) => dispatch(userLogin(user)),
  userSignup: (user) => dispatch(userSignup(user)),
});

export default connect(null, mDTP)(BartenderSession);
