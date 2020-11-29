import { SET_ERROR, SET_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      //save the token to localstorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //decode token
      const decoded = jwt_decode(token);
      //Write user info to redux
      dispatch({
        type: SET_USER,
        payload: decoded,
      });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};
export const givefullurl = (fullurl) => (dispatch) => {
  axios
    .post("/api/urlroutes/full-shortURL", fullurl)
    .then((res) => {
      console.log(res);

      document.getElementById("shorturl").innerHTML =  `localhost:3000/`+ res.data.shorturl;
      
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};
export const giveshorturl = (shorturl) => (dispatch) => {
  axios
    .get("/api/urlroutes/short-fullURL", shorturl)
    .then((res) => {
      console.log(res);

      document.getElementById("fullurl").innerHTML = res.data.fullurl;
    })
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response.data,
      })
    );
};
export const logoutUser = () => (dispatch) => {
  //Remove token from ls
  localStorage.removeItem("jwtToken");
  //Remove token from axios header
  setAuthToken(false);
  //Reset user in the redux store
  dispatch({
    type: SET_USER,
    payload: {},
  });
};
