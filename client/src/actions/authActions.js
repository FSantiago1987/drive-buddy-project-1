import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
export const uploadUserImage = (formData, history) => dispatch => {
  axios.post("/api/users/upload", formData)
    .then(res => {
      localStorage.setItem("userData", JSON.stringify(res.data));
      history.push("/profile");
      alert("Picture updated");
    }) // re-direct to profile on successful update
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Update User
export const updateUser = (userData, history) => dispatch => {
  axios
    .put("/api/users/update", userData)
    .then(res => {
      localStorage.setItem("userData", JSON.stringify(res.data));
      history.push("/profile");
      alert("User updated");
      
    }) // re-direct to profile on successful update
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const deleteUser = (userData, history = null, httpItems = null) => dispatch => {
  axios
    .post("/api/users/delete", userData)
    .then(res => {
      if(history){
        history.push("/");
      }
      if(httpItems){
        httpItems();
      }
      alert('Account deleted')
    }) // re-direct to home page on successful delete
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/")) // re-direct to home on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res =>  {
      // Save to localStorage
// Set token to localStorage
      console.log('RES',res);
      const { token, data } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userData", JSON.stringify(data));
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  alert('You have been logged out from the platform');
};