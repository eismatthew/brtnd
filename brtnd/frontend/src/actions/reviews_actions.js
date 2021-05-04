import * as reviewsUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_ALL_BARTENDERS = "RECEIVE_ALL_BARTENDERS";

// export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS";
// export const RECEIVE_USER_REVIEW = "RECEIVE_USER_REVIEW";
// export const RECEIVE_NEW_USER_REVIEW = "RECEIVE_NEW_USER_REVIEW";
// export const RECEIVE_BARTENDER_REVIEWS = "RECEIVE_BARTENDER_REVIEWS";
// export const RECEIVE_BARTENDER_REVIEW = "RECEIVE_BARTENDER_REVIEW";
// export const RECEIVE_NEW_BARTENDER_REVIEW = "RECEIVE_NEW_BARTENDER_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveNewReview = (review) => ({
  type: RECEIVE_NEW_REVIEW,
  review,
});

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

export const receiveAllBartenders = (bartenders) => ({
  type: RECEIVE_ALL_BARTENDERS,
  bartenders
});
// export const receiveUserReviews = (reviews) => ({
//   type: RECEIVE_USER_REVIEWS,
//   reviews,
// });

// export const receiveUserReview = (review) => ({
//   type: RECEIVE_USER_REVIEW,
//   review,
// });

// export const receiveNewUserREview = (review) => ({
//   type: RECEIVE_NEW_USER_REVIEW,
//   review,
// });

// export const receiveBartenderReviews = (reviews) => ({
//   type: RECEIVE_BARTENDER_REVIEWS,
//   reviews,
// });

// export const receiveBartenderReview = (review) => ({
//   type: RECEIVE_BARTENDER_REVIEW,
//   review,
// });

// export const receiveNewBartenderREview = (review) => ({
//   type: RECEIVE_NEW_BARTENDER_REVIEW,
//   review,
// });

export const fetchAllReviews = () => (dispatch) =>
  reviewsUtil
    .getAllUsersReviews()
    .then((reviews) =>
      dispatch(receiveAllReviews(reviews)).catch((err) => console.log(err))
    );

export const fetchAllBartenders = () => (dispatch) => 
  reviewsUtil
    .getAllBartenders()
    .then((bartenders) => 
      dispatch(receiveAllBartenders(bartenders)).catch((err) => console.log(err))
    );


export const fetchUserReviews = (userId) => (dispatch) =>
  reviewsUtil
    .getUserReviews(userId)
    .then((reviews) =>
      dispatch(receiveReviews(reviews))).catch((err) => console.log(err)
    );

export const fetchUserReview = (reviewId) => (dispatch) =>
  reviewsUtil
    .getUserReviewById(reviewId)
    .then((review) =>
      dispatch(receiveReview(review)).catch((err) => console.log(err))
    );

export const createUserReview = (userReview) => (dispatch) =>
  reviewsUtil
    .createUserReview(userReview)
    .then((review) =>
      dispatch(receiveNewReview(review)).catch((err) => console.log(err))
    );

export const fetchBartenderReviews = (bartenderId) => (dispatch) =>
  reviewsUtil
    .getBartenderReviews(bartenderId)
    .then((reviews) =>
      dispatch(receiveReviews(reviews)).catch((err) => console.log(err))
    );

export const fetchBartenderReview = (reviewId) => (dispatch) =>
  reviewsUtil
    .getBartenderReviewById(reviewId)
    .then((review) =>
      dispatch(receiveReview(review)).catch((err) => console.log(err))
    );

export const createBartenderReview = (bartenderReview) => (dispatch) =>
  reviewsUtil
    .createBartenderReview(bartenderReview)
    .then((review) =>
      dispatch(receiveNewReview(review)).catch((err) => console.log(err))
    );

