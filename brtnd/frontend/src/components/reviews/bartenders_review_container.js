import BartenderReview from "./bartenders_review";
import {connect} from "react-redux"
const mSTP = ({
  session: {
    user: { id },
  },
}) => ({ id });

export default connect(mSTP, null)(BartenderReview);