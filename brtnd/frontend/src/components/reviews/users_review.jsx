import React, {useState} from 'react';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import UserReview from "./users_review_container"


const UserReview = (props) => {
 
 
 
 
 const [newReview, setNewReview] = useState({
      reviewer: "",
      reviewee: "",
      rating: 0,
      comments: "",
  })
 
 
  const handleSubmit = (e) => {
  e.preventDefault();
  setNewReview({
      reviewer: "",
      reviewee: "",
      rating: "",
      comments: "",
  });
  };

 
  const handleChange = (e) => {
    const {name, value} = e.target;

    setNewReview((order) => ({
      ...order,
        [name]: value,
    }));


  }

 
 
 
  return (

<body>
    <div class="review-container">
      <h1 class="rating-header">Rate your experience</h1>
      <h5 class="rating-info">1 being a terrible experience, 5 being a great experience</h5>
      <form class="review" onSubmit={() => handleSubmit}>
          <div class="radio-box">
              <input type="radio" name="rating" id="one" value={1} onClick={() => handleChange}/>
              <label class="rating" for="one">1</label>
              <input type="radio" name="rating" id="two" value={2} onClick={() => handleChange}/>
              <label class="rating" for="two">2</label>
              <input type="radio" name="rating" id="three" value={3} onClick={() => handleChange}/>
              <label class="rating" for="three">3</label>
              <input type="radio" name="rating" id="four" value={4} onClick={() => handleChange}/>
              <label class="rating" for="four">4</label>
              <input type="radio" name="rating" id="five" value={5} onClick={() => handleChange}/>
              <label class="rating" for="five">5</label>
          </div>
            <br/>
            <textarea class="comments" placeholder="Comments" name="comments"  rows="4" cols="50" value={newReview.comments} onChange={() => handleChange}>             </textarea>
            <br/>
            <input class="sub" type="submit" value="Submit"/>
      </form>
    </div>
</body>




  )
};

export default UserReview;