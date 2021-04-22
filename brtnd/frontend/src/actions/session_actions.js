import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_BARTENDER_SIGN_IN = "RECEIVE_BARTENDER_SIGN_IN";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

const receiveBartenderSignIn = () => ({
  type: RECEIVE_BARTENDER_SIGN_IN,
});

const receiveLogout = () => ({ type: RECEIVE_LOGOUT });

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const userSignup = (user) => (dispatch) => {
  const newUser = { email: user.email, password: user.password };
  APIUtil.userSignup(user).then(
    () =>
      APIUtil.userLogin(newUser).then((res) => {
        console.log(res.data);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("bartender", false);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
      }),
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

export const bartenderSignup = (user) => (dispatch) => {
  const newUser = { email: user.email, password: user.password };
  APIUtil.bartenderSignup(user).then(
    () =>
      APIUtil.bartenderLogin(newUser).then((res) => {
        console.log(res.data);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("bartender", true);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
      }),
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

export const userLogin = (user) => (dispatch) =>
  APIUtil.userLogin(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("bartender", false);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));

export const bartenderLogin = (user) => (dispatch) =>
  APIUtil.bartenderLogin(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("bartender", true);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(receiveLogout());
};

export const clearErrors = () => (dispatch) => dispatch(clearSessionErrors());
