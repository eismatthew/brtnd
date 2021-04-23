import { connect } from "react-redux";
import UserReview from "./users_review_container"
import {
    createUserReview
} from "../../actions/reviews_actions";

const mSTP = ({ errors }) => ({ errors });

const mDTP = (dispatch) => ({
  createUserReview: (userReview) => dispatch(createUserReview(userReview))
});

export default connect(mSTP, mDTP)(UserReview);