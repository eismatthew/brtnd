import { connect } from "react-redux";
import ProfilePage from "./profile_page";

const mSTP = ({
  session: {
    user: { id },
  },
}) => ({ id });

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(ProfilePage);
