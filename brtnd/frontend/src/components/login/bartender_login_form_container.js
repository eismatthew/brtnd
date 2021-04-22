import { connect } from "react-redux";
import { bartenderLogin } from "../../actions/session_actions";
import SessionForm from "./host_session";

const mapStateToProps = ({ errors }) => {
  return {
    errors,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(bartenderLogin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
