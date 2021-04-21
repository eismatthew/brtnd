import { combineReducers } from 'redux';
import session from './sessions/sessions_reducer'; 
import errors from './sessions/session_errors_reducer';
import entities from './entities/entities_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities
});

export default RootReducer;