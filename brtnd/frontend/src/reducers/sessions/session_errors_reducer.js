import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
<<<<<<< HEAD
} from '../../actions/session_actions';
=======
} from "../actions/session_actions";
>>>>>>> 643f14b3a87d46a65f16bf717d9c13cc23dfd72e

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};
