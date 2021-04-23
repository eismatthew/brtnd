import { connect } from "react-redux";
import BartenderReview from "./bartenders_review_container";
import {
    createBartenderReview
} from "../../actions/reviews_actions";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  createBartenderReview: (bartenderReview) => dispatch(createBartenderReview(bartenderReview))
});

export default connect(mSTP, mDTP)(BartenderReview);