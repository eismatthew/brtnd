import axios from "axios";

export const getAllUsersReviews = () => axios.get("/api/user-reviews/");

export const getUserReviews = (userId) =>
  axios.get(`/api/user-reviews/${userId}`);

export const getUserReviewById = (reviewId) =>
  axios.get(`/api/user-reviews/${reviewId}`);

export const createUserReview = (userReview) =>
  axios.post("api/user-reviews", userReview);

export const getAllBartenderReviews = () => axios.get("/api/bartender-reviews");

export const getBartenderReviews = (bartenderId) =>
  axios.get(`/api/bartender-reviews/${bartenderId}`);

export const getBartenderReviewById = (reviewId) =>
  axios.get(`/api/bartender-reviews/${reviewId}`);

export const createBartenderReview = (bartenderReview) =>
  axios.post("/api/bartender-reviews", bartenderReview);

export const getAllBartenders = () => axios.get("/api/user-reviews/bartenders");