import axios from "axios";
import React, { useState, useEffect } from "react";

const ReviewItem = ({ review: { reviewer, rating, comments } }) => {
  const [reviewedBy, setReviewedBy] = useState({});

  useEffect(() => {
    axios.get(`/api/users/${reviewer}`).then((res) => setReviewedBy(res.data));

    return () => {};
  }, []);
  console.log(reviewedBy);
  return (
    <div className="review-item-box">
      <div className="review-display-detail">
        <span className="detail-label">Reviewed By: </span>
        {`${reviewedBy.firstName} ${reviewedBy.lastName}`}
      </div>
      <div className="review-display-detail">
        <span className="detail-label">Rating: </span>
        {rating}
      </div>
      <div className="review-display-detail">
        <span className="detail-label">Location: </span>
        {comments}
      </div>
    </div>
  );
};

export default ReviewItem;
