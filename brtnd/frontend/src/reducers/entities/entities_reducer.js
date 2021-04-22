import { combineReducers } from "redux";
import orders from "./orders/orders_reducer";
import reviews from "./reviews/reviews_reducer";

const RootReducer = combineReducers({
  orders,
  reviews,
});

export default RootReducer;
