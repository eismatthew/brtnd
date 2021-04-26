import React from 'react';
import { connect } from "react-redux";
import ReviewItem from './review_item';
import {
  fetchBartenderReviews,
  fetchBartenderReview,
  fetchUserReviews,
  fetchUserReview,
} from "../../actions/reviews_actions";
const mSTP = ({ errors }) => ({ errors });
const mDTP = (dispatch) => ({
  fetchUserReview: (reviewId) => dispatch(fetchUserReview(reviewId)),
  fetchBartenderReview: (reviewId) => dispatch(fetchBartenderReview(reviewId)),
});
export default connect(mSTP, mDTP)(ReviewItem);