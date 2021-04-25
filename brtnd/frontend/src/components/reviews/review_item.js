import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({
  id,
  review: { _id, reviwer, reviewee, rating, comments },
}) => {

  return (
    <div className="review-item-box">
      <div className="review-display-detail">
        <span className="detail-label">Bartender: </span>
        {reviewee}
      </div>
      <div className="review-display-detail">
        <span className="detail-label">Rating: </span>
        {rating}
      </div>
      <div className="review-display-detail">
        <span className="detail-label">Location: </span>
        {comments}
      </div>
      <div className="review-display-detail">
        <span className="detail-label">Reviewed by: </span>
        {reviewee}
      </div>
    </div>
  );
};

export default ReviewItem;