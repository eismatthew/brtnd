import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bartender-review-form.css";
import {
  createUserReview,
  getAllBartenders,
} from "../../util/reviews_api_util";

const BartenderReview = ({ id }) => {
  const [bartenders, setBartenders] = useState(null);
  const [newReview, setNewReview] = useState({
    reviewer: id,
    reviewee: "",
    rating: "",
    comments: "",
  });

  useEffect(() => {
    getAllBartenders().then((res) => setBartenders(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserReview(newReview);
    setNewReview({
      reviewer: id,
      reviewee: "",
      rating: "",
      comments: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((review) => ({
      ...review,
      [name]: value,
    }));
  };
  let selectBartenders;

  if (bartenders === null) {
    return null;
  } else {
    selectBartenders = (
      <select
        name="reviewee"
        className="bartender-dropdown"
        onChange={handleChange}
      >
        <option value="">Please choose a bartender</option>
        {bartenders.map((bartender) => (
          <option name="reviewee" value={bartender._id} key={bartender._id}>
            {bartender.firstName}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="review-main">
      <div className="review-container">
        <h1 className="rating-header">Rate your experience</h1>
        <form className="review" onSubmit={handleSubmit}>
          {selectBartenders}
          <br />
          <textarea
            className="comments"
            placeholder="Comments"
            rows="4"
            cols="50"
            name="comments"
            value={newReview.comments}
            onChange={handleChange}
          ></textarea>
          <br />
          <div className="radio-box">
            <input
              type="radio"
              name="rating"
              id="one"
              value="1"
              checked={newReview.rating === 1}
              onChange={handleChange}
            />
            <label className="rating" htmlFor="one">
              1
            </label>
            <input
              type="radio"
              name="rating"
              id="two"
              value="2"
              checked={newReview.rating === 2}
              onChange={handleChange}
            />
            <label className="rating" htmlFor="two">
              2
            </label>
            <input
              type="radio"
              name="rating"
              id="three"
              value="3"
              checked={newReview.rating === 3}
              onChange={handleChange}
            />
            <label className="rating" htmlFor="three">
              3
            </label>
            <input
              type="radio"
              name="rating"
              id="four"
              value="4"
              checked={newReview.rating === 4}
              onChange={handleChange}
            />
            <label className="rating" htmlFor="four">
              4
            </label>
            <input
              type="radio"
              name="rating"
              id="five"
              value="5"
              checked={newReview.rating === 5}
              onChange={handleChange}
            />
            <label className="rating" htmlFor="five">
              5
            </label>
          </div>
          <input className="sub" type="submit" value="Submit" />
        </form>
        <Link to="/profile">
          <button className="review-to-profile">Back to profile</button>
        </Link>
      </div>
    </div>
  );
};

export default BartenderReview;
