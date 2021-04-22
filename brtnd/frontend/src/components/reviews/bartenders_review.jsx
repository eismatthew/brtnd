import React from 'react';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const BartenderReview = ({}) => {

  return (

  <div className="review-main">
      <div className="review-container">
        <h1 className="rating-header">Rate your experience</h1>
        <form className="review">
          <div className="radio-box">
            <input type="radio" name="radioRating" id="one" value="1"/>
            <label className="rating" for="one">1</label>

            <input type="radio" name="radioRating" id="two" value="2"/>
            <label className="rating" for="two">2</label>

            <input type="radio" name="radioRating" id="three" value="3"/>
            <label className="rating" for="three">3</label>

            <input type="radio" name="radioRating" id="four" value="4"/>
            <label className="rating" for="four">4</label>

            <input type="radio" name="radioRating" id="five" value="5"/>
            <label className="rating" for="five">5</label>
          </div>
          <br/>
            <textarea className="comments" placeholder="Comments" rows="4" cols="50"></textarea><br/>
            <input className="sub" type="submit" value="Submit"/>
          </form>
    </div>
  </div>
  )
}

export default BartenderReview;