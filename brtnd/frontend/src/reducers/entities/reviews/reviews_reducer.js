import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_NEW_REVIEW,
} from "../../../actions/reviews_actions";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews.data;
    case RECEIVE_REVIEW:
      return { ...newState, ...action.review.data };
    case RECEIVE_NEW_REVIEW:
      return (newState.action.review.data._id = action.review.data);
    default:
      return state;
  }
};

export default ReviewsReducer;
