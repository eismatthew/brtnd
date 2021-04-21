import {
  // rename
  // syntax for bartender/user
  RECEIVE_BARTENDER_REVIEWS,
  RECEIVE_BARTENDER_REVIEW,
  RECEIVE_NEW_BARTENDER_REVIEW,
} from "../actions/bartender_review_actions";

const BartenderReviewsReducer = (
  state = { all: {}, bartender: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BARTENDER_REVIEWS:
      newState.all = action.bartenderReviews.data;
      return newState;
    case RECEIVE_BARTENDER_REVIEW:
      newState.bartender = action.bartenderReviews.data; //check this out on wed -> see how actions are used
      return newState;
    case RECEIVE_NEW_BARTENDER_REVIEW:
      newState.new = action.bartenderReview.data;
      return newState;
    default:
      return state;
  }
};

export default BartenderReviewsReducer;
