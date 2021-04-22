import { connect } from "react-redux";
import { userLogin, userSignup } from "../../actions/session_actions";
import HostSession from "./host_session";

const mapStateToProps = (errors) => ({ errors });

const mapDispatchToProps = (dispatch) => ({
  userLogin: (user) => dispatch(userLogin(user)),
  userSignup: (user) => dispatch(userSignup(user)),
});

export default connect(null, mapDispatchToProps)(HostSession);
