import { combineReducers } from 'redux';
import orders from './orders/orders_reducer';
import bartenderReviews from './reviews/bartender_reviews_reducer';
import userReviews from './reviews/user_reviews_reducer';



const RootReducer = combineReducers({
  orders,
  bartenderReviews,
  userReviews
});

export default RootReducer;