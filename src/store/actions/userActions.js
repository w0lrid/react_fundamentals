import axios from "axios";
import { login, logout } from "../reducers/userReducer";

const headers = {
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("Token"),
};

export const loginUser = (user) => {
  return async (dispatch) => {
    await axios.post("http://localhost:3000/login", user).then((response) => {
      localStorage.setItem("Token", response.data.result);
      localStorage.setItem("Email", response.data.user.email);
      dispatch(login(response.data));
    });
    //   .catch(alert("INVALID DATA"));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    axios.delete("http://localhost:3000/logout", { headers: headers });
    localStorage.removeItem("Token");
    localStorage.removeItem("Email");
    dispatch(logout());
  };
};
