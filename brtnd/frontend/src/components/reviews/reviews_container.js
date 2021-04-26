import { connect } from "react-redux";
import Reviews from "./reviews";
import { fetchUserReviews } from "../../actions/reviews_actions";
const mSTP = ({
  entities: { reviews },
  errors,
  session: {
    user: { id },
  },
}) => ({ errors, id, reviews });
const mDTP = (dispatch) => ({
  fetchUserReviews: (bartenderId) => dispatch(fetchUserReviews(bartenderId)),
});
export default connect(mSTP, mDTP)(Reviews);
