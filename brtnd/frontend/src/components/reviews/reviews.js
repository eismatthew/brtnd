import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import ReviewItem from "./review_item";

const Reviews = ({ id, fetchUserReviews, reviews }) => {
  const [loading, setLoading] = useState(true);
  console.log(id);
  console.log(reviews.length);
  useEffect(() => {
    fetchUserReviews(id).then(() => setLoading(false));
    return () => {};
  }, [loading]);

  console.log(reviews[0]);

  return loading ? (
    <div>
      <Loader type="TailSpin" color="#d09a2d" height={80} width={80} />
    </div>
  ) : reviews.length === 0 ? (
    <div>No Reviews</div>
  ) : (
    <div>
      {reviews.map((review, i) => {
        return <ReviewItem review={review} key={i} />;
      })}
    </div>
  );
};

export default Reviews;
