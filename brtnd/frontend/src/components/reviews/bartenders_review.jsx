import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./bartender-review-form.css";

const BartenderReview = ({ createReview }) => {

  const [reviewedBy, setReviewedby] = useState(null);
  const [reviewedFor, setReviewedFor] = useState(null);
  const [newReview, setNewReview] = useState({
    reviewer: reviewedBy,
    reviewee: "",
    rating: "",
    comments: ""
  });
  
  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.jwtToken,
      },
    };
    axios
      .get("/api/users/current/user", config)
      .then((res) => setReviewedBy(res.data.id))
      .then(() => setNewReview((review) => ({ ...review, reviewedBy: reviewedBy })));
  }, [reviewedBy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newReview);
    createReview(newReview);
    setNewReview({
      reviewer: reviewedBy,
      reviewee: "",
      rating: "",
      comments: ""
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((review) => ({
      ...review,
      [name]: value,
    }));
  };

  return (

  <div className="review-main">
      <div className="review-container">
        <h1 className="rating-header">Rate your experience</h1>
        <form className="review" onSubmit={handleSubmit}>
          <input 
          className="bartender-name" 
          type="text"
          placeholder="Bartender name" 
          name="bartender-name"
          value={newReview.reviewee}
          onChange={handleChange}
          />
          <div className="radio-box">
            <input 
            type="radio" 
            name="radioRating" 
            id="one" 
            value="1"
            checked={newReview.rating === 1}
            onChange={handleChange}
            />
            <label className="rating" for="one">1</label>
            <input 
            type="radio" 
            name="radioRating" 
            id="two" 
            value="2"
            checked={newReview.rating === 2}
            onChange={handleChange}
            />
            <label className="rating" for="two">2</label>
            <input 
            type="radio" 
            name="radioRating" 
            id="three" 
            value="3"
            checked={newReview.rating === 3}
            onChange={handleChange}
            />
            <label className="rating" for="three">3</label>
            <input 
            type="radio" 
            name="radioRating" 
            id="four" 
            value="4"
            checked={newReview.rating === 4}
            onChange={handleChange}
            />
            <label className="rating" for="four">4</label>
            <input 
            type="radio" 
            name="radioRating" 
            id="five" 
            value="5"
            checked={newReview.rating === 1}
            onChange={handleChange}
            />
            <label className="rating" for="five">5</label>
          </div>
          <br/>
            <textarea 
            className="comments" 
            placeholder="Comments" 
            rows="4" 
            cols="50"
            value={newOrder.comments}
            onChange={handleChange}
            ></textarea>
            <br/>
            <input className="sub" type="submit" value="Submit"/>
          </form>
        <Link to="/profile">
          <button className="review-to-profile">Back to profile</button>
        </Link>
    </div>
  </div>
  )
}

export default BartenderReview;