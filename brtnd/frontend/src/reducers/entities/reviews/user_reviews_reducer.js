import {
  // rename
  // syntax for bartender/user
  RECEIVE_USER_REVIEWS,
  RECEIVE_USER_REVIEW,
  RECEIVE_NEW_USER_REVIEW,
} from "../actions/bartender_review_actions";

const UserReviewsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_REVIEWS:
      newState.all = action.userReviews.data;
      return newState;
    case RECEIVE_USER_REVIEW:
      newState.user = action.userReviews.data; //check this out on wed -> see how actions are used
      return newState;
    case RECEIVE_NEW_USER_REVIEW:
      newState.new = action.userReview.data;
      return newState;
    default:
      return state;
  }
};

export default UserReviewsReducer;
