import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_BARTENDER_SIGN_IN = "RECEIVE_BARTENDER_SIGN_IN";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

export const receiveBartenderSignIn = () => ({
  type: RECEIVE_BARTENDER_SIGN_IN,
});

export const receiveLogout = () => ({ type: RECEIVE_LOGOUT });

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const userSignup = (user) => (dispatch) =>
  APIUtil.userSignup(user).then(
    () => dispatch(receiveUserSignIn()),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const bartenderSignup = (user) => (dispatch) =>
  APIUtil.bartenderSignup(user).then(
    () => dispatch(receiveBartenderSignIn()),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const userLogin = (user) => (dispatch) =>
  APIUtil.userLogin(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));

export const bartenderrLogin = (user) => (dispatch) =>
  APIUtil.bartenderLogin(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logout());
};

export const clearErrors = () => (dispatch) => dispatch(clearSessionErrors());
