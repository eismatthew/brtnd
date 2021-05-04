import { connect } from "react-redux";
import Reviews from "./reviews";
import { fetchUserReviews, createUserReview } from "../../actions/reviews_actions";
import { createBartenderReview } from "../../util/reviews_api_util";
const mSTP = ({
  entities: { reviews },
  errors,
  session: {
    user: { id },
  },
}) => ({ errors, id, reviews });
const mDTP = (dispatch) => ({
  fetchUserReviews: (bartenderId) => dispatch(fetchUserReviews(bartenderId)),
  createUserReview: (userReview) => dispatch(createUserReview(userReview))
});
export default connect(mSTP, mDTP)(Reviews);
