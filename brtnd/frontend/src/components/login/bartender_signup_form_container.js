import { connect } from "react-redux";
import { bartenderSignup } from "../../actions/session_actions";
import SessionForm from "./host_session";

const mapStateToProps = ({ errors }) => {
  return {
    errors,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(bartenderSignup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
